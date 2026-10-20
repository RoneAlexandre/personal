import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, CalendarCheck, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { PRICING } from "../data/content";

// ÍCONE DE LUVA DE BOXE REDESENHADO (VETOR LIMPO E PROPORCIONAL)
const BoxingGloveIcon = ({ size = 22, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M18 11V8a5 5 0 0 0-10 0v3a4 4 0 0 0-4 4v2a3 3 0 0 0 3 3h8a5 5 0 0 0 5-5v-1a3 3 0 0 0-2-3z" />
        <path d="M14 11V7.5a2.5 2.5 0 0 0-5 0V11" />
        <path d="M7 17h10" />
    </svg>
);

const EXTRA_ICONS = { 
    Home, 
    Dumbbell: BoxingGloveIcon 
};

const DROP_IN_PRICES = {
    individual: "R$ 80,00",
    dupla: "R$ 60,00",
    grupo: "R$ 50,00"
};

export const Pricing = () => {
    const [active, setActive] = useState("individual");
    const current = PRICING.formats.find((f) => f.id === active);

    return (
        <section id="planos" data-testid="pricing-section" className="relative py-20 sm:py-28 bg-[#0A0A0A] grain overflow-hidden">
            
            {/* LUZ AMBIENTAL */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-terracota/10 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />
            
            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
                
                {/* CABEÇALHO */}
                <SectionHeader kicker="Investimento" title="Planos e valores" align="center" />
                <Reveal delay={0.1} className="text-center mt-2">
                    <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-light">{PRICING.subtitle}</p>
                </Reveal>

                {/* CONTAINER PRINCIPAL DOS PLANOS */}
                <Reveal delay={0.15}>
                    <div className="mt-8 sm:mt-10 bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-xl rounded-2xl p-4 sm:p-7 shadow-2xl relative overflow-hidden">
                        
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terracota/40 to-transparent" />

                        {/* TABS DE SELEÇÃO */}
                        <div className="grid grid-cols-3 gap-1 bg-black/60 p-1 rounded-xl border border-neutral-800/80" role="tablist">
                            {PRICING.formats.map((f) => (
                                <button
                                    key={f.id}
                                    role="tab"
                                    aria-selected={active === f.id}
                                    data-testid={`plan-tab-${f.id}`}
                                    onClick={() => setActive(f.id)}
                                    className={`py-3 px-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300 flex flex-col items-center justify-center ${
                                        active === f.id 
                                            ? "bg-terracota text-cream font-bold shadow-md border border-terracota/40" 
                                            : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
                                    }`}
                                >
                                    <span>{f.label}</span>
                                    <span className={`block text-[10px] tracking-normal mt-0.5 normal-case font-normal ${
                                        active === f.id ? "text-cream/90" : "text-neutral-500"
                                    }`}>
                                        {f.note}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* CONTEÚDO DA TAB */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                data-testid={`plan-panel-${active}`}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.25 }}
                                className="mt-6"
                            >
                                {current.perPerson && (
                                    <p className="text-center text-terracota/90 text-[10px] font-mono uppercase tracking-widest mb-4" data-testid={`per-person-${active}`}>
                                        * Valores por pessoa nesta modalidade
                                    </p>
                                )}

                                <div className="divide-y divide-neutral-800/70 border-t border-b border-neutral-800/70">
                                    {current.rows.map((row, i) => (
                                        <div
                                            key={row.freq}
                                            data-testid={`price-row-${active}-${i}`}
                                            className="flex items-center justify-between gap-4 py-4 px-2 sm:px-4"
                                        >
                                            <span className="font-medium text-sm sm:text-base text-neutral-200">{row.freq}</span>
                                            <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F5C28B] to-[#99602B]">
                                                {row.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-7 flex justify-center">
                                    <a
                                        href={current.waUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid={`plan-cta-${active}`}
                                        className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-terracota hover:bg-terracota-dark text-cream font-semibold text-xs tracking-widest uppercase px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-terracota/20 border border-terracota/40"
                                    >
                                        <span>Quero Treinar</span>
                                        <ArrowUpRight size={16} className="text-cream/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* AULA AVULSA */}
                        <div className="mt-7 pt-5 border-t border-neutral-800/80 flex justify-center" data-testid="drop-in-badge">
                            <div className="inline-flex items-center gap-4 border border-terracota/30 bg-terracota/10 px-5 py-2.5 rounded-full">
                                <span className="font-mono text-xs uppercase tracking-wider text-neutral-300">
                                    Aula avulsa
                                </span>
                                <span className="font-display font-bold text-sm text-[#F5C28B]">
                                    {DROP_IN_PRICES[active]}
                                </span>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* VALORES ADICIONAIS - LAYOUT PERFEITAMENTE REORGANIZADO */}
                <Reveal delay={0.15} className="mt-10 sm:mt-12">
                    <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-terracota mb-4 font-semibold text-center sm:text-left">
                        {PRICING.extrasTitle}
                    </h3>
                    
                    <div className="flex flex-col gap-3" data-testid="pricing-extras">
                        {PRICING.extras.map((ex) => {
                            const Icon = EXTRA_ICONS[ex.icon];
                            return (
                                <div key={ex.text} className="flex items-center justify-between gap-4 border border-neutral-800/80 bg-neutral-900/40 p-4 rounded-xl backdrop-blur-md">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-terracota/10 border border-terracota/30 text-terracota rounded-lg">
                                            <Icon size={20} />
                                        </div>
                                        <span className="text-xs sm:text-sm text-neutral-300 font-light leading-snug">
                                            {ex.text}
                                        </span>
                                    </div>
                                    <span className="font-mono font-bold text-xs sm:text-sm text-[#F5C28B] whitespace-nowrap shrink-0">
                                        {ex.price}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </Reveal>

                {/* BANNER DATA DE PAGAMENTO */}
                <Reveal delay={0.2} className="mt-6">
                    <div className="flex items-center gap-3.5 border border-neutral-800/80 bg-neutral-900/30 px-5 py-4 rounded-xl" data-testid="payment-date-banner">
                        <CalendarCheck size={22} strokeWidth={1.5} className="text-terracota shrink-0" />
                        <p className="text-xs text-neutral-300 leading-relaxed font-light">
                            <strong className="text-cream font-medium">Você escolhe a data do pagamento.</strong>{" "}
                            Fechou o plano? Combinamos juntos o melhor dia do mês para você pagar com tranquilidade.
                        </p>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};