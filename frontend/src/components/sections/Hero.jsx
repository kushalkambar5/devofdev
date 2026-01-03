import { motion } from "framer-motion";
import { Button } from "../common/Button";
import { Code, Terminal, Cpu } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Ambience */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-color)] opacity-20 blur-[120px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600 opacity-20 blur-[120px] rounded-full animate-pulse-slow delay-1000" />
            </div>

            {/* Floating Glass Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute glass opacity-30 rounded-2xl"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            rotate: Math.random() * 360,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                        style={{
                            width: 50 + Math.random() * 100,
                            height: 50 + Math.random() * 100,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-[var(--accent-color)]/30 text-[var(--accent-color)] text-sm font-medium mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-color)]"></span>
                        </span>
                        v2.0 is Live
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)]">
                        Level Up Your Coding. <br />
                        <span className="text-gradient">Build the Future.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                        Practice coding with real-world challenges, master DSA, and compete with the best developers worldwide.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button variant="glow" size="lg" className="w-full sm:w-auto">
                        Start Practicing
                    </Button>
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                        Explore Problems
                    </Button>
                </motion.div>

                {/* Floating UI Mocks */}
                <div className="mt-16 relative h-[300px] w-full max-w-4xl mx-auto hidden md:block">
                    {/* Code Snippet Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute top-0 left-0 glass p-4 rounded-xl border-l-4 border-l-yellow-400 w-64 shadow-2xl"
                    >
                        <div className="flex items-center gap-2 mb-2 text-xs text-[var(--text-secondary)]">
                            <Code size={14} /> main.js
                        </div>
                        <div className="space-y-1">
                            <div className="h-2 w-3/4 bg-gray-500/20 rounded"></div>
                            <div className="h-2 w-1/2 bg-gray-500/20 rounded"></div>
                            <div className="h-2 w-full bg-gray-500/20 rounded"></div>
                        </div>
                    </motion.div>

                    {/* Console/Terminal Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="absolute bottom-10 right-0 glass p-4 rounded-xl border-t-4 border-t-[var(--accent-color)] w-72 shadow-2xl"
                    >
                        <div className="flex items-center gap-2 mb-2 text-xs text-[var(--text-secondary)]">
                            <Terminal size={14} /> Terminal
                        </div>
                        <div className="font-mono text-xs text-green-400">
                            $ tests passed: 14/14<br />
                            $ build success in 200ms
                        </div>
                    </motion.div>

                    {/* CPU/Stats Card - Center Focus */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass p-6 rounded-2xl border border-[var(--accent-color)]/20 w-80 shadow-[0_0_50px_rgba(0,240,255,0.1)] backdrop-blur-xl"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold text-[var(--text-primary)]">System Status</span>
                            <Cpu className="text-[var(--accent-color)]" size={20} />
                        </div>
                        <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] mb-2">
                            <span>Performance</span>
                            <span className="text-[var(--accent-color)]">98%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-700/30 rounded-full overflow-hidden">
                            <div className="h-full bg-[var(--accent-color)] w-[98%] shadow-[0_0_10px_var(--accent-color)]"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
