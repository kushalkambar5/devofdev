import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function GlassCard({ children, className, hoverEffect = true, ...props }) {
    return (
        <motion.div
            className={cn(
                "glass rounded-2xl p-6 transition-all duration-300",
                hoverEffect && "hover:scale-[1.02] glass-hover",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
