"use client";

import { Canvas } from "@react-three/fiber";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { Float, Environment, Stars } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AINeuralNetwork from "./AINeuralNetwork";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection() {
    const textRef1 = useRef();
    const textRef2 = useRef();
    const textRef3 = useRef();
    const scrollContainerRef = useRef();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * -2,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Precise Initial State
            gsap.set(textRef1.current, {
                opacity: 1,
                y: 0,
                z: 0,
                rotateY: 0,
                filter: "blur(0px)",
                scale: 1
            });

            gsap.set([textRef2.current, textRef3.current], {
                opacity: 0,
                y: 80,
                z: -150,
                rotateY: 10,
                filter: "blur(10px)",
                scale: 0.9
            });

            // 2. Optimized 3D Scroll Timeline (180vh height)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollContainerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1, // Faster response
                }
            });

            // Transitions
            tl.to(textRef1.current, {
                opacity: 0,
                y: -120,
                z: 100,
                rotateY: -5,
                filter: "blur(12px)",
                scale: 1.1,
                duration: 3,
                ease: "power2.inOut"
            })
                .to(textRef2.current, {
                    opacity: 1,
                    y: 0,
                    z: 0,
                    rotateY: 0,
                    filter: "blur(0px)",
                    scale: 1,
                    duration: 3,
                    ease: "power2.inOut"
                }, "-=2.5") // Heavy overlap for seamlessness

                .to(textRef2.current, {
                    opacity: 0,
                    y: -120,
                    z: 100,
                    rotateY: -5,
                    filter: "blur(12px)",
                    scale: 1.1,
                    duration: 3,
                    ease: "power2.inOut"
                }, "+=0.5") // Short pause
                .to(textRef3.current, {
                    opacity: 1,
                    y: 0,
                    z: 0,
                    rotateY: 0,
                    filter: "blur(0px)",
                    scale: 1,
                    duration: 3,
                    ease: "power2.inOut"
                }, "-=2.5");

        });
        return () => ctx.revert();
    }, []);

    return (
        <div ref={scrollContainerRef} className="h-[180vh] relative bg-transparent">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* 🌌 Background Stars */}
                <Canvas className="absolute inset-0 z-0 pointer-events-none">
                    <Stars radius={100} depth={50} count={2000} factor={4} fade />
                </Canvas>

                {/* 🔷 AI Neural Visualization */}
                <div className="absolute right-0 top-0 w-full lg:w-[60%] h-[60vh] lg:h-full z-10 pointer-events-none">
                    <Canvas
                        camera={{ position: [0, 0, 7], fov: 45 }}
                        gl={{ alpha: true, antialias: true }}
                    >
                        <ambientLight intensity={0.5} />
                        <Environment preset="night" />
                        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                            <AINeuralNetwork count={60} mousePos={mousePos} />
                        </Float>
                        <fog attach="fog" args={["#000000", 3, 14]} />
                    </Canvas>
                </div>

                {/* 🧊 Seamless Floating Text Overlays */}
                <div className="absolute left-0 top-0 w-full lg:w-[45%] h-full flex items-center justify-center lg:justify-start px-8 lg:pl-24 z-20 pointer-events-none">
                    <div className="relative w-full max-w-2xl min-h-[450px] flex items-center pointer-events-none perspective-[1000px]">

                        {/* Frame 1 */}
                        <div ref={textRef1} className="absolute w-full flex flex-col items-start will-change-transform">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-10 h-[1.5px] bg-cyan-400/60"></span>
                                <span className="text-cyan-400 font-black tracking-[0.4em] text-xs uppercase">INTELLIGENT ARCHITECTURE</span>
                            </div>
                            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                                Interactive <br /> Systems
                            </h2>
                            <p className="text-gray-400 text-xl font-light leading-relaxed max-w-md">
                                Bridging creative design with complex backend architecture through custom AI-driven logic.
                            </p>
                        </div>

                        {/* Frame 2 */}
                        <div ref={textRef2} className="absolute w-full flex flex-col items-start will-change-transform">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-10 h-[1.5px] bg-purple-400/60"></span>
                                <span className="text-purple-400 font-black tracking-[0.4em] text-xs uppercase">FLUID PERFORMANCE</span>
                            </div>
                            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                                Performance <br /> Driven
                            </h2>
                            <p className="text-gray-400 text-xl font-light leading-relaxed max-w-md">
                                High-density 3D environments optimized for flawless execution across all viewports.
                            </p>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
}