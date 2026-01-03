import { motion } from "framer-motion";
import { Button } from "../common/Button";
import { Play } from "lucide-react";

export function ProblemPreview() {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
                            Experience the <span className="text-gradient">Ultimate IDE</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg">
                            Our powerful, browser-based editor supports 20+ languages with intelligent autocomplete, vim mode, and instant execution.
                        </p>
                        <ul className="space-y-3">
                            {['Real-time execution', 'Test case visualization', 'Time & Space complexity analysis'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[var(--text-secondary)]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] shadow-[0_0_5px_var(--accent-color)]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4">
                            <Button variant="glow">Start Solving Challenges</Button>
                        </div>
                    </motion.div>

                    {/* Editor Mockup */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, x: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="glass rounded-xl overflow-hidden border border-[var(--glass-border)] shadow-2xl">
                            {/* Toolbar */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--glass-border)] bg-[var(--bg-primary)]/40">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="text-xs text-[var(--text-secondary)] font-mono">Solution.cpp</div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="sm" className="h-6 text-xs px-2">Settings</Button>
                                </div>
                            </div>

                            {/* Code Area */}
                            <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden relative min-h-[300px] bg-[#0c0c0c]/80 backdrop-blur-sm">
                                <div className="absolute top-4 right-4 z-10">
                                    <Button variant="glow" size="sm" className="h-8 gap-1.5 px-3">
                                        <Play size={12} fill="currentColor" /> Run
                                    </Button>
                                </div>

                                <div className="text-gray-400">
                                    <span className="text-purple-400">class</span> <span className="text-yellow-400">Solution</span> {'{'}<br />
                                    &nbsp;&nbsp;<span className="text-purple-400">public</span>:<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">vector</span>&lt;<span className="text-blue-400">int</span>&gt; <span className="text-yellow-200">twoSum</span>(<span className="text-blue-400">vector</span>&lt;<span className="text-blue-400">int</span>&gt;& nums, <span className="text-blue-400">int</span> target) {'{'}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-600">// Optimized O(n) solution</span><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">unordered_map</span>&lt;<span className="text-blue-400">int</span>, <span className="text-blue-400">int</span>&gt; map;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">for</span> (<span className="text-blue-400">int</span> i = <span className="text-orange-400">0</span>; i &lt; nums.<span className="text-yellow-200">size</span>(); i++) {'{'}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">int</span> complement = target - nums[i];<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> (map.<span className="text-yellow-200">count</span>(complement)) {'{'}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> {'{'}map[complement], i{'}'};<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map[nums[i]] = i;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> {'{'} {'}'};<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
                                    {'}'};
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
