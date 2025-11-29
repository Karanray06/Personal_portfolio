"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uTime;
uniform float uHover;
varying vec2 vUv;

// Simplex noise function
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  
  // Distortion based on mouse and hover
  float noise = snoise(uv * 3.0 + uTime * 0.5);
  float dist = distance(uv, uMouse);
  float strength = uHover * 0.1 + 0.02; // Base distortion + hover boost
  
  vec2 distortedUv = uv + vec2(noise * strength, noise * strength) * (1.0 - dist);

  vec4 color = texture2D(uTexture, distortedUv);
  
  // Grayscale / Duotone
  float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  vec3 duotone = mix(vec3(0.0), vec3(0.376, 0.408, 0.529), gray); // #606887 is (96, 104, 135) -> (0.376, 0.408, 0.529)
  
  // Mix original with duotone based on hover
  vec3 finalColor = mix(duotone, color.rgb, uHover * 0.5); // Slight color reveal on hover
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

function ImagePlane() {
    const meshRef = useRef<THREE.Mesh>(null!);
    const texture = useLoader(TextureLoader, "/Personal_portfolio/profile.jpg");
    const [hover, setHover] = useState(false);

    // Uniforms
    const uniforms = useMemo(
        () => ({
            uTexture: { value: texture },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uTime: { value: 0 },
            uHover: { value: 0 },
        }),
        [texture]
    );

    useFrame((state) => {
        const { clock, pointer } = state;
        if (meshRef.current) {
            const material = meshRef.current.material as THREE.ShaderMaterial;
            material.uniforms.uTime.value = clock.getElapsedTime();

            // Smoothly interpolate hover value
            material.uniforms.uHover.value = THREE.MathUtils.lerp(
                material.uniforms.uHover.value,
                hover ? 1 : 0,
                0.1
            );

            // Map pointer (-1 to 1) to UV space (0 to 1)
            const targetX = (pointer.x + 1) / 2;
            const targetY = (pointer.y + 1) / 2;

            material.uniforms.uMouse.value.lerp(new THREE.Vector2(targetX, targetY), 0.1);
        }
    });

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <planeGeometry args={[3, 4, 32, 32]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                transparent={true}
            />
        </mesh>
    );
}

export default function HolographicImage() {
    return (
        <div className="w-full h-[400px] md:h-[500px] relative">
            <Canvas camera={{ position: [0, 0, 3.5] }}>
                <ImagePlane />
            </Canvas>
        </div>
    );
}
