"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

interface FloatingShapeProps {
    position: [number, number, number];
    color: string;
    speed: number;
    factor: number;
}

function FloatingShape({ position, color, speed, factor }: FloatingShapeProps) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.cos(t / 4) * 0.2;
            meshRef.current.rotation.y = Math.sin(t / 4) * 0.2;
            meshRef.current.rotation.z = Math.sin(t / 4) * 0.2;
            meshRef.current.position.y = position[1] + Math.sin(t * speed) * factor;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={position}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhysicalMaterial
                    color={color}
                    roughness={0}
                    metalness={0.1}
                    transmission={1}
                    thickness={1.5}
                    ior={1.5}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    transparent={true}
                    opacity={0.5}
                />
            </mesh>
        </Float>
    );
}

export default function CanvasBackground() {
    return (
        <div className="fixed inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Environment preset="city" />

                <FloatingShape position={[-2, 1, 0]} color="#b8c6db" speed={1.5} factor={0.5} />
                <FloatingShape position={[2, -1, -1]} color="#f5f7fa" speed={2} factor={0.6} />
                <FloatingShape position={[0, 0, -2]} color="#d1d8e0" speed={1} factor={0.3} />
                <FloatingShape position={[-3, -2, -1]} color="#e0e7ff" speed={1.8} factor={0.4} />
                <FloatingShape position={[3, 2, -2]} color="#e6e6fa" speed={1.2} factor={0.5} />
                <FloatingShape position={[1, -2, -3]} color="#f0f8ff" speed={1.6} factor={0.7} />
            </Canvas>
        </div>
    );
}
