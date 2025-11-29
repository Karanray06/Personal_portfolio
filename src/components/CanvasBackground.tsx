"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, TorusKnot, Sphere, Icosahedron, Dodecahedron } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

interface FloatingShapeProps {
    position: [number, number, number];
    color: string;
    speed: number;
    factor: number;
    Component: any;
    args?: any[];
    scale?: number;
}

function FloatingShape({ position, color, speed, factor, Component, args, scale = 1 }: FloatingShapeProps) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const { mouse, viewport } = useThree();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            // Continuous rotation
            meshRef.current.rotation.x = Math.cos(t / 4) * 0.2 + (mouse.y * 0.1);
            meshRef.current.rotation.y = Math.sin(t / 4) * 0.2 + (mouse.x * 0.1);

            // Mouse parallax effect - move opposite to mouse
            const x = (mouse.x * viewport.width) / 50;
            const y = (mouse.y * viewport.height) / 50;
            meshRef.current.position.x = position[0] - x * factor;
            meshRef.current.position.y = position[1] - y * factor + Math.sin(t * speed) * 0.1; // Add floating bob
        }
    });

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
            <mesh
                ref={meshRef}
                position={position}
                scale={scale}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <Component args={args} />
                <meshPhysicalMaterial
                    color={color}
                    roughness={0.15}
                    metalness={0.2}
                    transmission={0.9}
                    thickness={1.5}
                    ior={1.3}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    transparent={true}
                    opacity={1}
                />
            </mesh>
        </Float>
    );
}

export default function CanvasBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#f3f2f9]">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <spotLight position={[-10, -10, -5]} intensity={1} />
                <Environment preset="city" />

                {/* 5 Abstract Shapes */}
                <FloatingShape
                    position={[-3, 2, -2]}
                    color="#ffffff"
                    speed={1.5}
                    factor={1.5}
                    Component={TorusKnot}
                    args={[0.8, 0.3, 128, 16]}
                />
                <FloatingShape
                    position={[3, -1, -1]}
                    color="#f0f8ff"
                    speed={2}
                    factor={1.2}
                    Component={Sphere}
                    args={[1, 64, 64]}
                />
                <FloatingShape
                    position={[-1, -3, 0]}
                    color="#ffffff"
                    speed={1}
                    factor={0.8}
                    Component={Icosahedron}
                    args={[1.2, 0]}
                />
                <FloatingShape
                    position={[4, 3, -4]}
                    color="#f0f8ff"
                    speed={1.2}
                    factor={1}
                    Component={Dodecahedron}
                    args={[1, 0]}
                />
                <FloatingShape
                    position={[0, 0, -5]}
                    color="#ffffff"
                    speed={0.8}
                    factor={0.5}
                    Component={Sphere}
                    args={[1.5, 32, 32]}
                    scale={1.2}
                />
            </Canvas>
        </div>
    );
}
