import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

export const SectionHeader = ({ kicker, title, align = "left" }) => (
    <Reveal className={align === "center" ? "text-center" : ""}>
        <p className="text-red-600 font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
            {kicker}
        </p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] uppercase text-white">
            {title}
        </h2>
    </Reveal>
);
