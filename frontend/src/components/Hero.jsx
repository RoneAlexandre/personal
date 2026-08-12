import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES, WHATSAPP_URL } from "../data/content";

const MaskedLine = ({ children, delay, className = "" }) => (
    <span className="block overflow-hidden">
        <motion.span
            className={`block ${className}`}
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.span>
    </span>
);

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section id="topo" ref={ref} data-testid="hero-section" className="relative min-h-0 sm:min-h-[100svh] flex flex-col overflow-hidden grain">
            <motion.div className="absolute inset-0" style={{ y: bgY }}>
                <img
                    src={IMAGES.hero}
                    alt="Lutador de Muaythai em ação"
                    className="w-full h-[120%] object-cover object-center"
                    loading="eager"
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/60" />

            <motion.div
                style={{ opacity: fade }}
                className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 sm:px-8 pt-16 pb-12 sm:pt-28 sm:pb-16"
            >
                <MaskedLine delay={0.15} className="font-display text-2xl sm:text-4xl uppercase tracking-[0.12em] text-[#D4AF37] mb-5">
                    Você é mais forte do que pensa
                </MaskedLine>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex items-center gap-3 mb-5"
                >
                    <span className="font-display text-red-500 tracking-[0.25em] uppercase text-lg sm:text-xl">
                        Muaythai · Kickboxing · Boxe
                    </span>
                </motion.div>

                <h1 className="font-display uppercase leading-[0.85] tracking-tight text-white">
                    <MaskedLine delay={0.35} className="text-[clamp(4rem,14vw,11rem)]">
                        Personal
                    </MaskedLine>
                    <MaskedLine delay={0.5} className="text-[clamp(4rem,14vw,11rem)] text-stroke">
                        Fight
                    </MaskedLine>
                </h1>

                <MaskedLine delay={0.75} className="mt-5 max-w-xl text-base sm:text-lg text-neutral-300 leading-relaxed normal-case">
                    Transforme seu corpo e sua mente com treinos feitos de acordo com seu objetivo.
                </MaskedLine>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="hero-whatsapp-cta"
                        className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-display text-xl sm:text-2xl tracking-widest px-8 py-4 uppercase transition-[background-color,transform] duration-300 hover:-translate-y-0.5"
                    >
                        Agende sua aula
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                    <a
                        href="#aulas"
                        data-testid="hero-secondary-cta"
                        className="inline-flex items-center justify-center border border-neutral-600 hover:border-[#D4AF37] hover:text-[#D4AF37] text-neutral-200 font-semibold px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-300"
                    >
                        Conheça os formatos
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                    className="mt-10 sm:mt-14 grid grid-cols-3 max-w-lg gap-4 sm:gap-6 border-t border-neutral-800 pt-5 sm:pt-6"
                    data-testid="hero-stats"
                >
                    {[
                        ["+10", "anos de experiência"],
                        ["03", "modalidades"],
                        ["100%", "treino exclusivo"],
                    ].map(([n, label]) => (
                        <div key={label}>
                            <p className="font-display text-3xl sm:text-4xl text-[#D4AF37]">{n}</p>
                            <p className="text-xs sm:text-sm text-neutral-400 uppercase tracking-widest mt-1">{label}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};
