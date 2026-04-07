"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function AnimatedStars() {
    const starsRef = useRef();

    useFrame((state, delta) => {
        if (starsRef.current) {
            starsRef.current.rotation.y -= delta * 0.05;
            starsRef.current.rotation.x -= delta * 0.02;
        }
    });

    return (
        <group ref={starsRef}>
            <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
}

export default function GalaxyBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050505]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <AnimatedStars />
            </Canvas>
        </div>
    );
}
