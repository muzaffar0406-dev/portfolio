import Hero3D from "../components/Hero3D";
import ScrollSection from "../components/ScrollSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import GalaxyBackground from "../components/GalaxyBackground";

export default function Home() {
    return (
        <main className="min-h-screen text-white font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-white relative">
            <GalaxyBackground />

            <Hero3D />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />

            <footer className="text-center py-10 border-t border-white/10 bg-[#0a0a0a]">
                <p className="text-gray-500 font-medium px-6 max-w-7xl mx-auto">
                    © 2026 Muzaffar Husain. Web Developer and AI student passionate about creating intelligent and user-friendly digital solutions.
                </p>
            </footer>
        </main>
    );
}
