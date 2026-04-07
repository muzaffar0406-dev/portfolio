"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { MeshDistortMaterial, MeshWobbleMaterial, Float, Sphere, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

export default function Scene() {
    const mainRef = useRef();
    const shellRef = useRef();
    const particlesRef = useRef();
    const groupRef = useRef();

    // Generate random particles for the "Digital Dust" effect
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 60; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 60;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor });
        }
        return temp;
    }, []);

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();
        
        if (mainRef.current) {
            mainRef.current.rotation.y += delta * 0.3;
            mainRef.current.rotation.z += delta * 0.1;
        }

        if (shellRef.current) {
            shellRef.current.rotation.y -= delta * 0.2;
            shellRef.current.rotation.x += delta * 0.15;
            // Pulse effect
            const s = 1 + Math.sin(time * 0.5) * 0.05;
            shellRef.current.scale.set(s, s, s);
        }

        // Move particles
        particlesRef.current.children.forEach((particle, i) => {
            const { t, factor, speed, xFactor, yFactor, zFactor } = particles[i];
            const arr = particles[i];
            arr.t += speed;
            particle.position.set(
                Math.cos(arr.t) + Math.sin(arr.t * 1) / 10 + xFactor / arr.factor,
                Math.sin(arr.t) + Math.cos(arr.t * 2) / 10 + yFactor / arr.factor,
                Math.sin(arr.t) + Math.cos(arr.t * 1) / 10 + zFactor / arr.factor
            );
        });

        if (groupRef.current) {
            // Interactive tilt based on mouse position
            const mouseX = (state.mouse.x * Math.PI) / 8;
            const mouseY = (state.mouse.y * Math.PI) / 8;
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseY, 0.1);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX, 0.1);
        }
    });

    return (
        <group ref={groupRef}>
            {/* 💎 The Distorted Core - Holographic Diamond */}
            <mesh ref={mainRef}>
                <octahedronGeometry args={[1.8, 0]} />
                <MeshDistortMaterial
                    color="#0ea5e9"
                    speed={2}
                    distort={0.4}
                    radius={1}
                    metalness={0.9}
                    roughness={0.1}
                    emissive="#0066cc"
                    emissiveIntensity={0.5}
                />
            </mesh>

            {/* 🕸️ The Shell - Cyber Wireframe */}
            <mesh ref={shellRef}>
                <icosahedronGeometry args={[2.5, 1]} />
                <meshStandardMaterial 
                    color="#8b5cf6" 
                    wireframe 
                    transparent 
                    opacity={0.3}
                    emissive="#8b5cf6"
                    emissiveIntensity={2}
                />
            </mesh>

            {/* ✨ Digital Dust Particles */}
            <group ref={particlesRef}>
                {particles.map((_, i) => (
                    <mesh key={i}>
                        <sphereGeometry args={[0.02, 8, 8]} />
                        <meshBasicMaterial color={i % 2 === 0 ? "#06b6d4" : "#ffffff"} />
                    </mesh>
                ))}
            </group>

            {/* 💡 Dramatic Lighting */}
            <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
            <spotLight position={[0, 5, 0]} intensity={3} color="#8b5cf6" />
        </group>
    );
}