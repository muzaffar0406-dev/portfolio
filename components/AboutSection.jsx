export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-3">About Me</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Passionate about <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Intersection of Web & AI</span>
                        </h3>
                    </div>
                    
                    <div className="w-full lg:w-1/2 bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm shadow-xl">
                        <div className="prose prose-lg text-gray-400">
                            <p className="mb-6 leading-relaxed">
                                I am a passionate Web Developer and Artificial Intelligence student pursuing my B.Tech in Computer Science (AI). I specialize in building responsive, user-friendly web applications using modern technologies and rigorous UI principles.
                            </p>
                            <p className="mb-6 leading-relaxed">
                                Alongside web development, I have a strong interest in AI and machine learning, where I continually explore how intelligent systems can solve real-world problems and enhance user experiences.
                            </p>
                            <p className="leading-relaxed text-gray-300 font-medium">
                                I thrive on learning new technologies, pushing the limits of interactive projects, and staying updated in our fast-evolving tech world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
