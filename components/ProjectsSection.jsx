export default function ProjectsSection() {
    const projects = [
        {
            title: "3D Portfolio Website",
            desc: "Developed an interactive portfolio using Three.js and Next.js featuring 3D animations and smooth scrolling effects.",
            tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
            link: "https://portfolio-muzaffar04.vercel.app/",
            github: "https://github.com/muzaffar0406-dev/portfolio"
        },
        {
            title: "Horizon Digital",
            desc: "Built a HTML, CSS, JS based website for a digital marketing company.",
            tags: ["HTML", "CSS", "JS"],
            link: "https://horizan-digital-delta.vercel.app/",
            github: "https://github.com/muzaffar0406-dev/HorizanDigital"
        },
        {
            title: "Study Planner with AI Features",
            desc: "Designed a smart study planner that helps users organize tasks and includes AI-based content summarization.",
            tags: ["React", "AI Integration", "Node.js"],
            link: "http://learnersadda.lovable.app/",
            github: "https://github.com/muzaffar0406-dev"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 relative z-10 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-3">Portfolio</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white">Featured Projects</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-300 shadow-xl group">
                            <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{proj.title}</h4>
                            <p className="text-gray-400 mb-8 flex-grow leading-relaxed">{proj.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {proj.tags.map((tag, i) => (
                                    <span key={i} className="text-xs px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg border border-white/10 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-6 mt-auto pt-6 border-t border-white/5">
                                <a href={proj.link} className="text-sm font-bold text-white hover:text-cyan-400 flex items-center gap-2 group/btn">
                                    Live Demo
                                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                                <a href={proj.github} className="text-sm font-bold text-gray-400 hover:text-white flex items-center gap-2">
                                    GitHub
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
