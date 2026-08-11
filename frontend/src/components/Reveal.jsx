import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const useAutoScroll = (speed = 0.4) => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let raf;
        let running = false;
        let paused = false;
        let pos = el.scrollLeft;
        const step = () => {
            if (running && !paused && el.scrollWidth > el.clientWidth) {
                pos += speed;
                if (pos >= el.scrollWidth - el.clientWidth - 1) pos = 0;
                el.scrollLeft = pos;
            }
            raf = requestAnimationFrame(step);
        };
        const io = new IntersectionObserver(([e]) => (running = e.isIntersecting), { threshold: 0.3 });
        io.observe(el);
        const pause = () => (paused = true);
        const resume = () => {
            pos = el.scrollLeft;
            paused = false;
        };
        el.addEventListener("pointerdown", pause);
        el.addEventListener("pointerup", resume);
        el.addEventListener("pointercancel", resume);
        raf = requestAnimationFrame(step);
        return () => {
            cancelAnimationFrame(raf);
            io.disconnect();
            el.removeEventListener("pointerdown", pause);
            el.removeEventListener("pointerup", resume);
            el.removeEventListener("pointercancel", resume);
        };
    }, [speed]);
    return ref;
};


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
