import { motion } from "framer-motion";
import { GlassCard } from "../components/common/GlassCard";
import { Button } from "../components/common/Button";
import { Mail, MessageSquare, Send, Github, Twitter, MapPin } from "lucide-react";

export function Contact() {
    return (
        <div className="min-h-[calc(100vh-80px)] pt-24 pb-20 flex items-center justify-center relative overflow-hidden px-6">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-blue-600 opacity-10 blur-[120px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-[var(--accent-color)] opacity-10 blur-[120px] rounded-full animate-pulse-slow delay-1000" />
            </div>

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 relative z-10">

                {/* Info Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center space-y-8"
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                            Let's Start a <br /><span className="text-gradient">Conversation</span>
                        </h1>
                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                            Have a question, feedback, or just want to say hi? We'd love to hear from you. Our team typically responds within 24-48 hours.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center text-[var(--accent-color)] shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="text-[var(--text-primary)] font-semibold">Email Us</h3>
                                <p className="text-[var(--text-secondary)]">hello@devofdev.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                                <MessageSquare size={20} />
                            </div>
                            <div>
                                <h3 className="text-[var(--text-primary)] font-semibold">Community</h3>
                                <p className="text-[var(--text-secondary)]">Join our Discord server</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="text-[var(--text-primary)] font-semibold">HQ</h3>
                                <p className="text-[var(--text-secondary)]">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <Button variant="secondary" className="rounded-full w-12 h-12 p-0 flex items-center justify-center">
                            <Github size={20} />
                        </Button>
                        <Button variant="secondary" className="rounded-full w-12 h-12 p-0 flex items-center justify-center">
                            <Twitter size={20} />
                        </Button>
                    </div>
                </motion.div>

                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <GlassCard className="p-8 md:p-10 border-[var(--glass-border)] shadow-2xl backdrop-blur-3xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--text-primary)] ml-1">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl py-3 px-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--text-primary)] ml-1">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl py-3 px-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-primary)] ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl py-3 px-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-primary)] ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl py-3 px-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition-all resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <Button variant="glow" type="button" className="w-full justify-center text-lg py-3">
                                Send Message <Send size={18} className="ml-2" />
                            </Button>
                        </form>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
