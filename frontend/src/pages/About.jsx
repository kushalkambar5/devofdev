import { motion } from "framer-motion";
import { GlassCard } from "../components/common/GlassCard";
import { Target, Zap, Globe, Users } from "lucide-react";

export function About() {
    return (
        <div className="pt-24 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative px-6 mb-24 text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[var(--accent-color)] opacity-10 blur-[120px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
                        Empowering the <span className="text-gradient">Next Generation</span> of Developers
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                        DevofDev is more than just a coding platform. It's a global ecosystem designed to bridge the gap between learning syntax and building world-class software.
                    </p>
                </motion.div>
            </section>

            {/* Mission & Vision */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="grid md:grid-cols-2 gap-8">
                    <GlassCard className="p-8 md:p-12 border-[var(--glass-border)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target size={120} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                            <Target className="text-[var(--accent-color)]" /> Our Mission
                        </h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            To provide a frictionless, high-performance environment where developers can master algorithms, collaborate on real-world problems, and showcase their skills to the world's top tech companies.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8 md:p-12 border-[var(--glass-border)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Zap size={120} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                            <Zap className="text-yellow-400" /> Our Vision
                        </h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            A future where anyone, anywhere, can access the tools and mentorship needed to become a world-class software engineer. We believe talent is distributed equally, but opportunity is not. We're changing that.
                        </p>
                    </GlassCard>
                </div>
            </section>

            {/* Why DevofDev */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-12">Why We Exist</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Globe,
                            title: "Global Community",
                            desc: "Connect with developers from 120+ countries. Share knowledge, compete, and grow together."
                        },
                        {
                            icon: Users,
                            title: "Mentorship First",
                            desc: "We prioritize learning paths designed by industry veterans from Google, Meta, and Netflix."
                        },
                        {
                            icon: Zap,
                            title: "Real-World Focus",
                            desc: "Move beyond toy problems. Our challenges mimic real production issues you'll face on the job."
                        }
                    ].map((item, i) => (
                        <GlassCard key={i} className="p-8 text-center" hoverEffect={true}>
                            <div className="w-12 h-12 mx-auto bg-[var(--accent-color)]/10 rounded-full flex items-center justify-center text-[var(--accent-color)] mb-4">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                            <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </section>
        </div>
    );
}
