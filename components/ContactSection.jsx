export default function ContactSection() {
    return (
        <section id="contact" className="py-32 px-6 bg-transparent relative z-10 border-t border-white/5 text-center">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-4">Let's Connect</h2>
                    <h3 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-8">
                        Ready to start your next project?
                    </h3>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                        I'm always open to discussing new opportunities, collaborations, or innovative projects combining Web and AI.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20">
                    <a href="mailto:muzaffarhusain0406@gmail.com" className="w-full sm:w-auto flex justify-center items-center gap-4 bg-white/[0.03] border border-white/10 px-8 py-5 rounded-2xl text-white hover:bg-white/[0.08] transition-all font-medium text-lg hover:border-indigo-500/30 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-indigo-400 transition-colors"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        Email Me
                    </a>
                    <a href="https://www.linkedin.com/in/muzaffar-husain-2845ab347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-full sm:w-auto flex justify-center items-center gap-4 bg-white/[0.03] border border-white/10 px-8 py-5 rounded-2xl text-white hover:bg-white/[0.08] transition-all font-medium text-lg hover:border-blue-500/30 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-blue-500 transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        LinkedIn
                    </a>
                    <a href="https://github.com/muzaffar0406-dev" className="w-full sm:w-auto flex justify-center items-center gap-4 bg-white/[0.03] border border-white/10 px-8 py-5 rounded-2xl text-white hover:bg-white/[0.08] transition-all font-medium text-lg hover:border-gray-500/30 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-white transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.1-3.22s-1.1-.3-3.5 1.3a11.5 11.5 0 0 0-6 0C8.1 2.8 7 3.1 7 3.1a4.2 4.2 0 0 0-.1 3.22A4.6 4.6 0 0 0 5.5 9.5c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02V22" /><path d="M9 20c-5 1.5-5-2.5-7-3" /></svg>
                        GitHub
                    </a>
                </div>

                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-[1px] rounded-[2.5rem] max-w-3xl mx-auto hover:shadow-[0_0_40px_rgba(79,70,229,0.3)] transition-shadow duration-500">
                    <div className="bg-[#0a0a0a] p-12 md:p-16 rounded-[2.5rem] flex flex-col items-center justify-center">
                        <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                            Let’s build something amazing together!
                        </h4>
                        <a href="mailto:muzaffarhusain0406@gmail.com" className="bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-200 hover:scale-105 transition-all text-lg">
                            Say Hello
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
