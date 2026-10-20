import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, CalendarCheck, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { PRICING } from "../data/content";

// ÍCONE DE LUVA DE BOXE FIDELIZADO À SUA IMAGEM DE REFERÊNCIA
const BoxingGloveIcon = ({ size = 20, className = "" }) => (
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
        {/* Formato principal da luva (cabeça arredondada e corpo) */}
        <path d="M6 15V10C6 6.134 9.134 3 13 3C16.866 3 20 6.134 20 10V12C20 13.657 18.657 15 17 15H6Z" />
        
        {/* Detalhe do polegar dobrado na lateral */}
        <path d="M16 8.5C14.8 8.5 14 9.3 14 10.5C14 12 15.5 13 17 13" />
        
        {/* Punho / Pulso da luva */}
        <path d="M8 15V20C8 20.552 8.448 21 9 21H17C17.552 21 18 20.552 18 20V15" />
        
        {/* Tira do velcro no punho */}
        <path d="M11 18H15" />
    </svg>
);

const EXTRA_ICONS = { 
    Home, 
    Dumbbell: BoxingGloveIcon 
};

// VALORES DINÂMICOS DA AULA AVULSA CONFORME A MODALIDADE ATIVA
const DROP_IN_PRICES = {
    individual: "R$ 80,00",
    dupla: "R$ 60,00",
    grupo: "R$ 50,00"
};

export const Pricing = () => {
    const [active, setActive] = useState("individual");
    const current = PRICING.formats.find((f) => f.id === active);

    return (
        <section id="planos" data-testid="pricing-section" className="relative py-24 sm:py-32 bg-[#0A0A0A] grain overflow-hidden">
            
            {/* LUZ AMBIENTAL DE FUNDO */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-terracota/10 rounded-full blur-[180px] pointer-events-none" aria-hidden="true" />
            
            {/* BORDAS SUTIS NO TOPO E BASE */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" aria-hidden="true" />

            <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
                
                {/* CABEÇALHO */}
                <SectionHeader kicker="Investimento" title="Planos e valores" align="center" />
                <Reveal delay={0.1} className="text-center mt-3">
                    <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed font-light">{PRICING.subtitle}</p>
                </Reveal>

                {/* CONTAINER PRINCIPAL DOS PLANOS */}
                <Reveal delay={0.15}>
                    <div className="mt-10 sm:mt-12 bg-neutral-900/40 border border-neutral-800/90 backdrop-blur-2xl rounded-3xl p-5 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
                        
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terracota/40 to-transparent" />

                        {/* TABS DE SELEÇÃO DE FORMATO */}
                        <div className="grid grid-cols-3 gap-1.5 bg-black/80 p-1.5 rounded-2xl border border-neutral-800/80" role="tablist">
                            {PRICING.formats.map((f) => (
                                <button
                                    key={f.id}
                                    role="tab"
                                    aria-selected={active === f.id}
                                    data-testid={`plan-tab-${f.id}`}
                                    onClick={() => setActive(f.id)}
                                    className={`py-3.5 px-2 rounded-xl font-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex flex-col items-center justify-center ${
                                        active === f.id 
                                            ? "bg-gradient-to-b from-terracota to-terracota-dark text-cream font-bold shadow-lg shadow-terracota/25 border border-terracota/30" 
                                            : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
                                    }`}
                                >
                                    <span>{f.label}</span>
                                    <span className={`block text-[10px] sm:text-xs tracking-normal mt-0.5 normal-case font-normal ${
                                        active === f.id ? "text-cream/90" : "text-neutral-500"
                                    }`}>
                                        {f.note}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* CONTEÚDO DA TAB SELECIONADA */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                data-testid={`plan-panel-${active}`}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-8"
                            >
                                {current.perPerson && (
                                    <p className="text-center text-terracota/90 text-[11px] font-mono uppercase tracking-widest mb-6" data-testid={`per-person-${active}`}>
                                        * Valores por pessoa nesta modalidade
                                    </p>
                                )}

                                {/* LISTA DE PREÇOS COM DESTAQUE MÁXIMO NOS VALORES */}
                                <div className="divide-y divide-neutral-800/80 border-t border-b border-neutral-800/80">
                                    {current.rows.map((row, i) => (
                                        <div
                                            key={row.freq}
                                            data-testid={`price-row-${active}-${i}`}
                                            className="flex items-center justify-between gap-4 py-5 sm:py-6 px-3 sm:px-6 hover:bg-white/[0.015] transition-colors duration-200"
                                        >
                                            <span className="font-semibold text-base sm:text-lg text-neutral-200 tracking-wide">{row.freq}</span>
                                            
                                            <div className="text-right whitespace-nowrap">
                                                <span className="font-display font-black text-2xl sm:text-4xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F5C28B] via-[#E8B075] to-[#99602B]">
                                                    {row.price}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* BOTÃO 'QUERO TREINAR' */}
                                <div className="mt-9 flex justify-center">
                                    <a
                                        href={current.waUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid={`plan-cta-${active}`}
                                        className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-terracota via-terracota to-terracota-dark hover:from-terracota-dark hover:to-terracota text-cream font-semibold text-xs sm:text-sm tracking-widest uppercase px-9 py-4 rounded-full transition-all duration-300 shadow-lg shadow-terracota/20 hover:shadow-terracota/40 hover:-translate-y-0.5 active:translate-y-0 border border-terracota/40"
                                    >
                                        <span>Quero Treinar</span>
                                        <ArrowUpRight size={18} className="text-cream/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* BADGE DE AULA AVULSA (LIMPA E EM LINHA ÚNICA) */}
                        <div className="mt-9 pt-6 border-t border-neutral-800/80 flex justify-center" data-testid="drop-in-badge">
                            <div className="w-full sm:w-auto flex items-center justify-between sm:justify-center gap-6 border border-terracota/30 bg-terracota/10 px-6 py-3.5 rounded-full backdrop-blur-md">
                                <span className="font-mono text-xs sm:text-sm tracking-wider uppercase text-neutral-300 whitespace-nowrap">
                                    Aula avulsa
                                </span>
                                <span className="font-display font-bold text-base sm:text-lg text-[#F5C28B] whitespace-nowrap">
                                    {DROP_IN_PRICES[active]}
                                </span>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* VALORES ADICIONAIS (COM A LUVA DE BOXE CORRETA E LAYOUT ORGANIZADO) */}
                <Reveal delay={0.15} className="mt-12 sm:mt-16">
                    <h3 className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-terracota mb-6 font-semibold text-center sm:text-left">
                        {PRICING.extrasTitle}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4" data-testid="pricing-extras">
                        {PRICING.extras.map((ex) => {
                            const Icon = EXTRA_ICONS[ex.icon];
                            return (
                                <div key={ex.text} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-neutral-800/80 bg-neutral-900/30 p-4.5 rounded-2xl backdrop-blur-md">
                                    <div className="flex items-center gap-3.5">
                                        <span className="w-11 h-11 shrink-0 flex items-center justify-center bg-terracota/10 border border-terracota/30 text-terracota rounded-xl">
                                            <Icon size={20} className="text-terracota" />
                                        </span>
                                        <p className="text-xs sm:text-sm text-neutral-300 leading-snug font-light">
                                            {ex.text}
                                        </p>
                                    </div>
                                    <span className="font-display font-bold text-sm sm:text-base text-cream sm:whitespace-nowrap text-right sm:text-left pl-12 sm:pl-0">
                                        {ex.price}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </Reveal>

                {/* BANNER: 'VOCÊ ESCOLHE A DATA DO PAGAMENTO' (POSICIONADO NO FINAL) */}
                <Reveal delay={0.2} className="mt-8">
                    <div className="flex items-center gap-4 border border-neutral-800/80 bg-neutral-900/20 backdrop-blur-md px-6 py-5 rounded-2xl" data-testid="payment-date-banner">
                        <CalendarCheck size={26} strokeWidth={1.5} className="text-terracota shrink-0" />
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                            <strong className="text-cream font-semibold">Você escolhe a data do pagamento.</strong>{" "}
                            Fechou o plano? Combinamos juntos o melhor dia do mês para você pagar com tranquilidade.
                        </p>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};