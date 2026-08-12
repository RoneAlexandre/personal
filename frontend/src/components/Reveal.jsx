import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const useAutoScroll = (speed = 0.3) => {
    const ref = useRef(null);
    const posRef = useRef(0);
    const userPausedRef = useRef(false);
    const touchRef = useRef(false);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let raf;
        let running = false;
        posRef.current = el.scrollLeft;
        const step = () => {
            if (running && !userPausedRef.current && !touchRef.current && el.scrollWidth > el.clientWidth) {
                posRef.current += speed;
                if (posRef.current >= el.scrollWidth - el.clientWidth - 1) posRef.current = 0;
                el.scrollLeft = posRef.current;
            }
            raf = requestAnimationFrame(step);
        };
        const io = new IntersectionObserver(([e]) => (running = e.isIntersecting), { threshold: 0.3 });
        io.observe(el);
        const onDown = () => (touchRef.current = true);
        const onUp = () => {
            touchRef.current = false;
            posRef.current = el.scrollLeft;
        };
        el.addEventListener("pointerdown", onDown);
        el.addEventListener("pointerup", onUp);
        el.addEventListener("pointercancel", onUp);
        raf = requestAnimationFrame(step);
        return () => {
            cancelAnimationFrame(raf);
            io.disconnect();
            el.removeEventListener("pointerdown", onDown);
            el.removeEventListener("pointerup", onUp);
            el.removeEventListener("pointercancel", onUp);
        };
    }, [speed]);

    const go = (dir) => {
        const el = ref.current;
        if (!el) return;
        el.scrollLeft += dir * el.clientWidth * 0.75;
        posRef.current = el.scrollLeft;
    };

    const togglePause = () => {
        const el = ref.current;
        userPausedRef.current = !userPausedRef.current;
        if (!userPausedRef.current && el) posRef.current = el.scrollLeft;
        setPaused(userPausedRef.current);
    };

    return { ref, paused, go, togglePause };
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
