import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WHATSAPP_URL } from "../data/content";
import { handleAnchorClick } from "../lib/utils";
import logo from "../assets/logov2.png";
import { Calendar, ArrowUpRight } from "lucide-react";

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
        <section id="topo" ref={ref} data-testid="hero-section" className="relative min-h-[100svh] flex flex-col justify-start overflow-hidden bg-[#0A0A0A] grain pt-12 sm:pt-16 pb-12">
            
            {/* LUZ AMBIENTAL DE FUNDO */}
            <div className="absolute top-1/4 left-0 -translate-x-1/3 w-[380px] sm:w-[600px] h-[380px] sm:h-[600px] bg-terracota/10 rounded-full blur-[140px] pointer-events-none"></div>

            {/* CONTEÚDO ALINHADO À ESQUERDA E PUXADO PARA CIMA */}
            <motion.div
                style={{ opacity: fade }}
                className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 flex flex-col items-start text-left"
            >
                {/* LOGO BEM MAIS PRÓXIMA DO TOPO */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    data-testid="hero-logo"
                    className="w-full flex justify-start mb-3 mt-1 sm:mt-2"
                >
                    <img
                        src={logo}
                        alt="Rone Batista — Personal Fight"
                        className="w-full max-w-[300px] sm:max-w-md md:max-w-lg h-auto -ml-1"
                    />
                </motion.div>

                {/* MODALIDADES FINAS E ELEGANTES */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-4"
                >
                    <span className="font-light tracking-[0.28em] uppercase text-xs sm:text-sm text-terracota/90 font-mono">
                        Boxe · Muay Thai · Kickboxing
                    </span>
                </motion.div>

                {/* DESCRIÇÃO ENQUADRADA E ORGANIZADA */}
                <div className="max-w-md sm:max-w-lg">
                    <MaskedLine delay={0.55} className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed normal-case">
                        Aulas particulares desenvolvidas para o seu objetivo. Transforme seu corpo e sua mente com um propósito alinhado para você alcançar a excelência.
                    </MaskedLine>
                </div>

                {/* BOTÕES DE DESIGN PREMIUM */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
                >
                    {/* Botão Agendar (Pill Premium) */}
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="hero-whatsapp-cta"
                        className="group inline-flex items-center justify-center gap-2.5 bg-terracota hover:bg-terracota-dark text-cream font-medium text-sm sm:text-base tracking-wider px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-terracota/20 hover:shadow-terracota/30 hover:-translate-y-0.5 active:translate-y-0"
                    >
                        <Calendar size={18} className="text-cream/90" />
                        <span>Agende sua aula</span>
                    </a>

                    {/* Botão Secundário (Glassmorphism Pill) */}
                    <a
                        href="#planos"
                        onClick={(e) => handleAnchorClick(e, "#planos")}
                        data-testid="hero-secondary-cta"
                        className="group inline-flex items-center justify-center gap-2 bg-neutral-900/60 hover:bg-neutral-800/80 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-600 backdrop-blur-md font-medium text-sm sm:text-base tracking-wider px-8 py-3.5 rounded-full transition-all duration-300"
                    >
                        <span>Conheça os planos</span>
                        <ArrowUpRight size={18} className="text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </motion.div>

                {/* SLOGAN DESTAQUE (PROPÓSITO GERA EXCELÊNCIA) */}
                <div className="mt-10 sm:mt-12 pt-5 border-t border-neutral-900/80 w-full max-w-md">
                    <MaskedLine
                        delay={0.95}
                        className="font-extrabold uppercase tracking-[0.25em] text-sm sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#F0B375] via-[#C88A4B] to-[#99602B] drop-shadow-[0_2px_10px_rgba(200,138,75,0.2)]"
                    >
                        PROPÓSITO GERA EXCELÊNCIA
                    </MaskedLine>   
                </div>
            </motion.div>
        </section>
    );
};