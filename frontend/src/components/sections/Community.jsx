import { motion } from "framer-motion";
import { Users, Code, Globe2 } from "lucide-react";

const STATS = [
    { label: "Active Users", value: "50,000+", icon: Users },
    { label: "Submissions", value: "2M+", icon: Code },
    { label: "Countries", value: "120+", icon: Globe2 },
];

export function Community() {
    return (
        <section className="py-24 relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--accent-color)]/5 via-transparent to-transparent opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                        Join the <span className="text-gradient">Revolution</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                        Become part of a global community of developers pushing the boundaries of what's possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border border-[var(--glass-border)] flex flex-col items-center justify-center gap-4 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-[var(--accent-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="w-12 h-12 rounded-full bg-[var(--accent-color)]/20 flex items-center justify-center text-[var(--accent-color)] mb-2">
                                <stat.icon size={24} />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                                {stat.value}
                            </div>
                            <div className="text-[var(--text-secondary)] font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
