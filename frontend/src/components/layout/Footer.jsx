import { Link } from "react-router-dom";
import { Github, Twitter, MessageCircle } from "lucide-react";
import { cn } from "../../lib/utils";

const FOOTER_LINKS = {
    Company: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "/contact" }
    ],
    Platform: [
        { name: "Problems", href: "#" },
        { name: "Contests", href: "#" },
        { name: "Leaderboard", href: "#" }
    ],
    Legal: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "/terms" },
        { name: "Cookies", href: "#" }
    ],
};

export function Footer() {
    return (
        <footer className="relative border-t border-[var(--glass-border)] bg-[var(--bg-primary)]/50 backdrop-blur-lg pt-16 pb-8 overflow-hidden z-10">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">D</div>
                            <span className="font-bold text-xl tracking-tight text-[var(--text-primary)]">
                                Dev<span className="text-[var(--accent-color)]">of</span>Dev
                            </span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                            Level up your coding skills with the next-generation developer platform.
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-bold text-[var(--text-primary)] mb-6">{category}</h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--glass-border)] gap-4">
                    <p className="text-[var(--text-secondary)] text-sm">
                        © {new Date().getFullYear()} DevofDev. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            <MessageCircle className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
