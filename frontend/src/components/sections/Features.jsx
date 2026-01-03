import { motion } from "framer-motion";
import { GlassCard } from "../common/GlassCard";
import { Code2, Compass, Trophy, Globe } from "lucide-react";

const FEATURES = [
    {
        title: "1000+ Coding Problems",
        description: "From easy arrays to complex dynamic programming. Master every pattern.",
        icon: Code2,
        color: "text-blue-400",
    },
    {
        title: "Structured Learning Paths",
        description: "Zero to Hero roadmaps for Frontend, Backend, and System Design.",
        icon: Compass,
        color: "text-purple-400",
    },
    {
        title: "Competitive Contests",
        description: "Weekly global contests to test your speed and accuracy against the best.",
        icon: Trophy,
        color: "text-yellow-400",
    },
    {
        title: "Global Leaderboards",
        description: "See where you stand among millions of developers worldwide.",
        icon: Globe,
        color: "text-green-400",
    },
];

export function Features() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-0 w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-purple-600/10 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        Everything you need to <span className="text-gradient">excel</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                        A complete ecosystem designed to take your coding skills from enthusiast to expert.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURES.map((feature, index) => (
                        <GlassCard key={index} className="flex flex-col items-start gap-4 h-full" transition={{ delay: index * 0.1 }}>
                            <div className={`p-3 rounded-xl glass ${feature.color} bg-white/5`}>
                                <feature.icon size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
