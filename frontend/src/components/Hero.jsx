import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WHATSAPP_URL } from "../data/content";
import { handleAnchorClick } from "../lib/utils";
import logo from "../assets/logov2.png";

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
    const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section id="topo" ref={ref} data-testid="hero-section" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#0A0A0A] grain py-16 sm:py-20">
            
            {/* NOVO BACKGROUND DE TESTE: LUZ FOCAL EDITORIAL + GLOW TERRASCOTA SUTIL */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-terracota/15 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0A0A0A] pointer-events-none"></div>

            {/* CONTEÚDO PRINCIPAL */}
            <motion.div
                style={{ opacity: fade }}
                className="relative z-10 max-w-5xl mx-auto w-full px-5 sm:px-8 flex flex-col items-center text-center my-auto"
            >
                {/* LOGO */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    data-testid="hero-logo"
                    className="flex justify-center"
                >
                    <img
                        src={logo}
                        alt="Rone Batista — Personal Fight"
                        className="w-full max-w-[240px] sm:max-w-xs md:max-w-sm h-auto"
                    />
                </motion.div>

                {/* MODALIDADES (Com Boxe e Tipografia Refinada) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex items-center justify-center gap-2 mt-5 mb-1"
                >
                    <span className="font-display tracking-[0.2em] uppercase text-xs sm:text-sm text-terracota font-semibold">
                        Boxe · Muay Thai · Kickboxing
                    </span>
                </motion.div>

                {/* DESCRIÇÃO (Texto Menor e Mais Elegante) */}
                <div className="max-w-md sm:max-w-lg mx-auto">
                    <MaskedLine delay={0.55} className="mt-3 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed normal-case">
                        Aulas particulares desenvolvidas para o seu objetivo. Transforme seu corpo e sua mente com um propósito alinhado para você alcançar a excelência.
                    </MaskedLine>
                </div>

                {/* BOTÕES DE AÇÃO (Estilo Editorial / Brutalista sem Flechas) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 justify-center w-full sm:w-auto"
                >
                    {/* Botão Principal */}
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="hero-whatsapp-cta"
                        className="relative group inline-flex w-full sm:w-auto items-center justify-center bg-terracota hover:bg-terracota-dark text-cream font-display text-base sm:text-lg tracking-[0.14em] px-8 py-3.5 uppercase transition-all duration-300 border border-terracota/80 hover:border-terracota active:scale-[0.98]"
                    >
                        Agende sua aula
                    </a>

                    {/* Botão Secundário */}
                    <a
                        href="#planos"
                        onClick={(e) => handleAnchorClick(e, "#planos")}
                        data-testid="hero-secondary-cta"
                        className="inline-flex w-full sm:w-auto items-center justify-center border border-neutral-700 hover:border-neutral-400 bg-neutral-900/40 hover:bg-neutral-800/60 text-neutral-300 hover:text-white font-display text-xs sm:text-sm tracking-[0.18em] px-8 py-3.5 uppercase transition-all duration-300 active:scale-[0.98]"
                    >
                        Conheça os planos
                    </a>
                </motion.div>

                {/* SLOGAN DE BASE */}
                <div className="mt-12 sm:mt-14">
                    <MaskedLine
                        delay={0.95}
                        className="font-black uppercase tracking-[0.18em] text-[clamp(1.1rem,3.5vw,1.6rem)] text-transparent bg-clip-text bg-gradient-to-r from-[#E2A25D] via-[#C88A4B] to-[#99602B] drop-shadow-md text-center"
                    >
                        PROPÓSITO GERA EXCELÊNCIA
                    </MaskedLine>   
                </div>
            </motion.div>
        </section>
    );
};