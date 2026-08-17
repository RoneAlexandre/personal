import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Carrossel infinito e fluido: conteúdo duplicado + deslocamento invisível na metade.
// Autoplay cede ao toque e à inércia do swipe, retomando 1,6s depois da interação.
export const useAutoScroll = (speed = 0.3) => {
    const ref = useRef(null);
    const posRef = useRef(0);
    const touchRef = useRef(false);
    const lastUserScroll = useRef(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let raf;
        let running = false;
        posRef.current = el.scrollLeft;

        const halfWidth = () => el.scrollWidth / 2;

        const step = () => {
            const userActive = touchRef.current || Date.now() - lastUserScroll.current < 1600;
            if (running && !userActive && el.scrollWidth > el.clientWidth) {
                posRef.current += speed;
                const half = halfWidth();
                if (half > 0 && posRef.current >= half) posRef.current -= half;
                el.scrollLeft = posRef.current;
            }
            raf = requestAnimationFrame(step);
        };

        const onScroll = () => {
            const jumped = Math.abs(el.scrollLeft - posRef.current) > 5;
            if (touchRef.current || jumped || Date.now() - lastUserScroll.current < 1600) {
                lastUserScroll.current = Date.now();
                const half = halfWidth();
                if (half > 0 && el.scrollLeft >= half) el.scrollLeft -= half;
                else if (half > 0 && el.scrollLeft <= 0) el.scrollLeft += half;
                posRef.current = el.scrollLeft;
            }
        };

        const io = new IntersectionObserver(([e]) => (running = e.isIntersecting), { threshold: 0.3 });
        io.observe(el);
        const onDown = () => (touchRef.current = true);
        const onUp = () => {
            touchRef.current = false;
            lastUserScroll.current = Date.now();
            posRef.current = el.scrollLeft;
        };
        el.addEventListener("scroll", onScroll, { passive: true });
        el.addEventListener("pointerdown", onDown);
        el.addEventListener("pointerup", onUp);
        el.addEventListener("pointercancel", onUp);
        raf = requestAnimationFrame(step);
        return () => {
            cancelAnimationFrame(raf);
            io.disconnect();
            el.removeEventListener("scroll", onScroll);
            el.removeEventListener("pointerdown", onDown);
            el.removeEventListener("pointerup", onUp);
            el.removeEventListener("pointercancel", onUp);
        };
    }, [speed]);

    return { ref };
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
