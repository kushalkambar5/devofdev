import { GlassCard } from "../components/common/GlassCard";

const SECTIONS = [
    {
        title: "1. Introduction",
        content: "Welcome to DevofDev. By accessing our website, you agree to be bound by these Terms and Conditions. These terms apply to all visitors, users, and others who access or use the Service."
    },
    {
        title: "2. User Responsibilities",
        content: "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party."
    },
    {
        title: "3. Content & Copyright",
        content: "The content found on or through this Service are the property of DevofDev or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us."
    },
    {
        title: "4. Limitations of Liability",
        content: "In no event shall DevofDev, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
    },
    {
        title: "5. Code of Conduct",
        content: "We foster a community of respect and collaboration. Harassment, hate speech, and plagiarism are strictly prohibited. Violators may face temporary or permanent bans from the platform."
    },
    {
        title: "6. Changes to Terms",
        content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion."
    }
];

export function Terms() {
    return (
        <div className="pt-24 pb-20 min-h-screen px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Terms & Conditions</h1>
                    <p className="text-[var(--text-secondary)]">Last updated: January 3, 2026</p>
                </div>

                <GlassCard className="p-8 md:p-12 border-[var(--glass-border)]">
                    <div className="space-y-12">
                        {SECTIONS.map((section, index) => (
                            <div key={index}>
                                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--glass-border)] inline-block">
                                    {section.title}
                                </h2>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-[var(--glass-border)] text-center">
                        <p className="text-sm text-[var(--text-secondary)]">
                            If you have any questions about these Terms, please contact us at <span className="text-[var(--accent-color)] cursor-pointer hover:underline">legal@devofdev.com</span>
                        </p>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
