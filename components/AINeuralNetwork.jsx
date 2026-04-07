"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Sphere } from "@react-three/drei";

export default function AINeuralNetwork({ count = 40, mousePos = { x: 0, y: 0 } }) {
    const groupRef = useRef();
    const particlesRef = useRef();
    const linesRef = useRef();

    // Generate random positions for neural nodes
    const { particlePositions, linePositions } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const lPositions = new Float32Array(600 * 3); // Max connections * 2 points * 3 coords
        const velocities = [];
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 8;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 5;

            velocities.push({
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01,
            });
        }
        return { particlePositions: { positions, velocities }, linePositions: lPositions };
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const positions = particlesRef.current.geometry.attributes.position.array;
        const lPositions = linesRef.current.geometry.attributes.position.array;

        let lineIndex = 0;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Subtle floating motion
            positions[i3] += Math.sin(time + i) * 0.002 + particlePositions.velocities[i].x;
            positions[i3 + 1] += Math.cos(time + i) * 0.002 + particlePositions.velocities[i].y;
            positions[i3 + 2] += Math.sin(time * 0.5 + i) * 0.002 + particlePositions.velocities[i].z;

            // Simple box bounds to keep them contained
            if (Math.abs(positions[i3]) > 4) particlePositions.velocities[i].x *= -1;
            if (Math.abs(positions[i3 + 1]) > 4) particlePositions.velocities[i].y *= -1;
            if (Math.abs(positions[i3 + 2]) > 3) particlePositions.velocities[i].z *= -1;
        }

        // Update Connections (Lines)
        // We only connect particles that are close to each other
        let connections = 0;
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dist = Math.sqrt(
                    Math.pow(positions[i * 3] - positions[j * 3], 2) +
                    Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
                    Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
                );

                if (dist < 2.5 && connections < 100) {
                    lPositions[lineIndex++] = positions[i * 3];
                    lPositions[lineIndex++] = positions[i * 3 + 1];
                    lPositions[lineIndex++] = positions[i * 3 + 2];
                    lPositions[lineIndex++] = positions[j * 3];
                    lPositions[lineIndex++] = positions[j * 3 + 1];
                    lPositions[lineIndex++] = positions[j * 3 + 2];
                    connections++;
                }
            }
        }

        // Reset the rest of the lines to be off-camera or zeroed if not used
        for (let k = lineIndex; k < lPositions.length; k++) {
            lPositions[k] = 0;
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
        linesRef.current.geometry.attributes.position.needsUpdate = true;

        // Interaction look-at/scroll rotation
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (mousePos.x * 0.1) + (state.clock.elapsedTime * 0.05), 0.1);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mousePos.y * 0.1, 0.1);
    });

    return (
        <group ref={groupRef}>
            {/* The Nodes (Points) */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particlePositions.positions.length / 3}
                        array={particlePositions.positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.15}
                    color="#06b6d4"
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* The Connections (Lines) */}
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePositions.length / 3}
                        array={linePositions}
                        itemSize={3}
                        usage={THREE.DynamicDrawUsage}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#3b82f6"
                    transparent
                    opacity={0.2}
                    blending={THREE.AdditiveBlending}
                />
            </lineSegments>

            {/* Background Glow Spheres to add depth */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere args={[0.05, 16, 16]} position={[2, 1, -2]}>
                    <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} />
                </Sphere>
                <Sphere args={[0.03, 16, 16]} position={[-2, -2, 1]}>
                    <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} />
                </Sphere>
            </Float>
        </group>
    );
}
