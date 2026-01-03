import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}) {
    const variants = {
        primary: "bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.2)] hover:border-[var(--accent-color)] hover:shadow-[0_0_15px_var(--accent-glow)]",
        secondary: "glass hover:bg-[rgba(255,255,255,0.15)] text-[var(--text-primary)]",
        ghost: "bg-transparent hover:bg-[rgba(255,255,255,0.05)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
        glow: "bg-[var(--accent-color)] text-black font-bold shadow-[0_0_20px_var(--accent-glow)] hover:shadow-[0_0_30px_var(--accent-glow)] hover:scale-105"
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className={cn(
                "relative rounded-full transition-all duration-300 font-medium cursor-pointer backdrop-blur-md flex items-center gap-2",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
