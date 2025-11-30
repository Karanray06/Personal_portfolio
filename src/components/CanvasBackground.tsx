"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

interface FloatingShapeProps {
    position: [number, number, number];
    color: string;
    speed: number;
    factor: number;
    geometry: "sphere" | "torus" | "icosahedron" | "octahedron";
    mouseInfluence: number;
}

function FloatingShape({ position, color, speed, factor, geometry, mouseInfluence }: FloatingShapeProps) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            // Rotation animation
            meshRef.current.rotation.x = Math.cos(t / 4) * 0.3;
            meshRef.current.rotation.y = Math.sin(t / 4) * 0.3;
            meshRef.current.rotation.z = Math.sin(t / 4) * 0.2;

            // Floating animation with mouse influence
            const mouseOffsetX = mousePos.x * mouseInfluence;
            const mouseOffsetY = mousePos.y * mouseInfluence;

            meshRef.current.position.x = position[0] + Math.sin(t * speed * 0.5) * 0.3 + mouseOffsetX;
            meshRef.current.position.y = position[1] + Math.sin(t * speed) * factor + mouseOffsetY;
            meshRef.current.position.z = position[2] + Math.cos(t * speed * 0.3) * 0.2;
        }
    });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const getGeometry = () => {
        switch (geometry) {
            case "sphere":
                return <sphereGeometry args={[1, 32, 32]} />;
            case "torus":
                return <torusGeometry args={[0.8, 0.3, 16, 100]} />;
            case "icosahedron":
                return <icosahedronGeometry args={[1, 0]} />;
            case "octahedron":
                return <octahedronGeometry args={[1, 0]} />;
            default:
                return <sphereGeometry args={[1, 32, 32]} />;
        }
    };

    return (
        <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={meshRef} position={position}>
                {getGeometry()}
                <meshPhysicalMaterial
                    color={color}
                    roughness={0.1}
                    metalness={0.2}
                    transmission={0.9}
                    thickness={2}
                    ior={1.5}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    transparent={true}
                    opacity={0.6}
                />
            </mesh>
        </Float>
    );
}

function CameraController() {
    const { camera } = useThree();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useFrame(() => {
        // Smooth camera movement based on mouse position
        camera.position.x += (mousePos.x * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mousePos.y * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
    });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return null;
}

export default function CanvasBackground() {
    return (
        <div className="fixed inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#b8c6db" />
                <Environment preset="city" />

                <CameraController />

                {/* Spheres */}
                <FloatingShape position={[-2, 1, 0]} color="#b8c6db" speed={1.5} factor={0.5} geometry="sphere" mouseInfluence={0.8} />
                <FloatingShape position={[2, -1, -1]} color="#f5f7fa" speed={2} factor={0.6} geometry="sphere" mouseInfluence={0.6} />
                <FloatingShape position={[0, 0, -2]} color="#d1d8e0" speed={1} factor={0.3} geometry="sphere" mouseInfluence={0.7} />

                {/* Torus shapes */}
                <FloatingShape position={[-3, -2, -1]} color="#e0e7ff" speed={1.8} factor={0.4} geometry="torus" mouseInfluence={0.9} />
                <FloatingShape position={[3, 2, -2]} color="#e6e6fa" speed={1.2} factor={0.5} geometry="torus" mouseInfluence={0.5} />

                {/* Icosahedrons */}
                <FloatingShape position={[1, -2, -3]} color="#f0f8ff" speed={1.6} factor={0.7} geometry="icosahedron" mouseInfluence={0.8} />
                <FloatingShape position={[-1.5, 2.5, -1.5]} color="#c3dcd8" speed={1.3} factor={0.5} geometry="icosahedron" mouseInfluence={0.7} />

                {/* Octahedrons */}
                <FloatingShape position={[2.5, 1.5, -2.5]} color="#efd1d4" speed={1.7} factor={0.6} geometry="octahedron" mouseInfluence={0.6} />
                <FloatingShape position={[-2.5, -1.5, -2]} color="#fbe8ed" speed={1.4} factor={0.4} geometry="octahedron" mouseInfluence={0.9} />

                {/* Additional depth shapes */}
                <FloatingShape position={[0, 2, -3.5]} color="#93b0ac" speed={1.1} factor={0.5} geometry="sphere" mouseInfluence={0.5} />
            </Canvas>
        </div>
    );
}
