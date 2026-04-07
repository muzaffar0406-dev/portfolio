export default function ExperienceSection() {
    const timeline = [
        {
            icon: "🎓",
            color: "bg-orange-500",
            title: "B.Tech Computer Science (AI)",
            subtitle: "Currently Pursuing",
            description: "Pursuing undergraduate degree with a specialized curriculum focusing heavily on Artificial Intelligence algorithms, logic, and intelligent systems design."
        },
        {
            icon: "💻",
            color: "bg-pink-500",
            title: "Full-Stack Web Development",
            subtitle: "Self-Learning & Projects",
            description: "Gained robust hands-on experience in modern web development frameworks through rigorous academic projects and dedicated self-learning initiatives."
        },
        {
            icon: "🤖",
            color: "bg-purple-500",
            title: "Applied AI Concepts",
            subtitle: "Practical Implementations",
            description: "Actively exploring machine learning basics and integrating intelligent programmatic systems with modern responsive web services."
        }
    ];

    return (
        <section id="experience" className="pt-2 pb-24 px-6 relative z-10 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-pink-400 uppercase mb-3">Journey</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white">Experience & Education</h3>
                </div>

                <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent space-y-12">
                    {timeline.map((item, idx) => (
                        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0a0a] ${item.color} text-white shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10`}>
                                {item.icon}
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/[0.02] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.04] transition-colors">
                                <div className="flex flex-col mb-4">
                                    <h4 className="font-bold text-xl md:text-2xl text-white mb-2">{item.title}</h4>
                                    <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{item.subtitle}</span>
                                </div>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="mt-32 max-w-5xl mx-auto bg-white/[0.02] border border-white/10 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden text-center shadow-xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                    <h3 className="text-3xl font-extrabold text-white mb-10">What I Can Do</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Build responsive websites", "Create modern UI/UX designs", "Develop WordPress websites", "Integrate APIs", "Develop Basic AI solutions"].map((service, i) => (
                            <div key={i} className="px-6 py-4 bg-[#0a0a0a] border border-white/10 rounded-full text-gray-300 shadow-inner flex items-center gap-3 font-medium">
                                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                {service}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
