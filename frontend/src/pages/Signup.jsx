import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff, Sparkles } from "lucide-react";
import { Button } from "../components/common/Button";
import { GlassCard } from "../components/common/GlassCard";

export function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-12 px-6">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[30%] right-[30%] w-[40%] h-[40%] bg-[var(--accent-color)] opacity-20 blur-[120px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-blue-600 opacity-20 blur-[120px] rounded-full animate-pulse-slow delay-1000" />
            </div>

            <GlassCard className="w-full max-w-md p-8 md:p-12 relative z-10 border-[var(--glass-border)] shadow-2xl backdrop-blur-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Join DevofDev</h1>
                    <p className="text-[var(--text-secondary)]">Start building your legacy today</p>
                </motion.div>

                <form className="space-y-5">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--text-primary)] ml-1">Username</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
                                <input
                                    type="text"
                                    placeholder="devmaster99"
                                    className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl py-3 pl-12 pr-4 text-[var(--text-primary)] placeholder:text-gray-500 focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--text-primary)] ml-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl py-3 pl-12 pr-4 text-[var(--text-primary)] placeholder:text-gray-500 focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--text-primary)] ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl py-3 pl-12 pr-12 text-[var(--text-primary)] placeholder:text-gray-500 focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Button variant="glow" className="w-full justify-center py-3 text-lg shadow-lg group mt-4">
                        <Sparkles className="w-4 h-4 mr-2" /> Create Account
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-[var(--text-secondary)]">
                    Already have an account?{" "}
                    <Link to="/login" className="text-[var(--accent-color)] font-semibold hover:underline">
                        Log In
                    </Link>
                </div>
            </GlassCard>
        </div>
    );
}
