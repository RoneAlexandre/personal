import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Dumbbell, CalendarCheck } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { PRICING } from "../data/content";

const EXTRA_ICONS = { Home, Dumbbell };

export const Pricing = () => {
    const [active, setActive] = useState("individual");
    const current = PRICING.formats.find((f) => f.id === active);

    return (
        <section id="planos" data-testid="pricing-section" className="relative py-24 sm:py-32 bg-[#140D07] overflow-hidden">
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[700px]"
                style={{ background: "radial-gradient(65% 60% at 50% 0%, rgba(167,110,54,0.38) 0%, rgba(167,110,54,0) 72%)" }}
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px]"
                style={{ background: "radial-gradient(55% 50% at 50% 100%, rgba(167,110,54,0.2) 0%, rgba(167,110,54,0) 70%)" }}
                aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-terracota to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-terracota to-transparent" aria-hidden="true" />

            <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
                <SectionHeader kicker="Investimento" title="Planos e valores" align="center" />
                <Reveal delay={0.1} className="text-center mt-4">
                    <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">{PRICING.subtitle}</p>
                </Reveal>

                <Reveal delay={0.15}>
                    <div
                        className="mt-10 border border-terracota/50 bg-[#0A0602]/90 p-3 sm:p-6"
                        style={{ boxShadow: "0 0 0 1px rgba(167,110,54,0.15), 0 0 60px 0 rgba(167,110,54,0.18), 0 40px 70px -25px rgba(0,0,0,0.6)" }}
                    >
                    <div className="grid grid-cols-3 gap-px bg-neutral-800 border border-neutral-800" role="tablist">
                        {PRICING.formats.map((f) => (
                            <button
                                key={f.id}
                                role="tab"
                                aria-selected={active === f.id}
                                data-testid={`plan-tab-${f.id}`}
                                onClick={() => setActive(f.id)}
                                className={`py-4 px-2 font-display text-lg sm:text-2xl uppercase tracking-widest transition-colors duration-300 ${
                                    active === f.id ? "bg-terracota text-cream" : "bg-[#141414] text-neutral-400 hover:text-cream"
                                }`}
                            >
                                {f.label}
                                <span className={`block font-body text-[10px] sm:text-xs tracking-[0.15em] mt-0.5 normal-case font-normal ${active === f.id ? "text-cream/75" : "text-neutral-500"}`}>
                                    {f.note}
                                </span>
                            </button>
                        ))}
                    </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        data-testid={`plan-panel-${active}`}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8"
                    >
                        {current.perPerson && (
                            <p className="text-center text-[#9C8674] text-xs uppercase tracking-[0.2em] mb-5" data-testid={`per-person-${active}`}>
                                * Todos os valores desta tabela são por pessoa
                            </p>
                        )}
                        <div className="hidden md:grid grid-cols-[1fr_1fr_1.15fr] gap-4 px-6 pb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
                            <span>Frequência</span>
                            <span>Semanal</span>
                            <span>Mensal</span>
                        </div>
                        <div className="border-t border-neutral-800">
                            {current.rows.map((row, i) => (
                                <div
                                    key={row.freq}
                                    data-testid={`price-row-${active}-${i}`}
                                    className="grid md:grid-cols-[1fr_2.15fr] gap-3 md:gap-4 items-center border-b border-neutral-800 py-5 md:px-6"
                                >
                                    <span className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-cream">{row.freq}</span>
                                    <div className="grid grid-cols-2 md:grid-cols-[1fr_1.15fr] gap-3 md:gap-4">
                                        <div className="border border-neutral-800 bg-[#141414] px-4 py-3">
                                            <span className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500 md:hidden">Semanal</span>
                                            <span className="font-display text-2xl sm:text-3xl text-cream">{row.weekly}</span>
                                            {row.weeklyNote && <span className="block text-xs text-neutral-500 mt-0.5">{row.weeklyNote}</span>}
                                        </div>
                                        <div className="relative border border-[#9C8674] bg-[#9C8674]/5 px-4 py-3">
                                            <span className="absolute -top-2.5 right-2 bg-terracota text-cream text-[9px] font-bold uppercase tracking-[0.14em] px-2 py-0.5">
                                                Promoção
                                            </span>
                                            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#9C8674]/80 md:hidden">Mensal</span>
                                            <span className="font-display text-2xl sm:text-3xl text-[#9C8674]">{row.monthly}</span>
                                            {row.perClass && <span className="block text-xs text-[#9C8674]/90 mt-0.5">{row.perClass}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a
                            href={current.waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`plan-cta-${active}`}
                            className="mt-8 inline-flex w-full sm:w-auto justify-center bg-terracota hover:bg-terracota text-cream font-display text-xl tracking-widest uppercase px-8 py-4 transition-[background-color,transform] duration-300 hover:-translate-y-0.5"
                        >
                            {current.cta}
                        </a>
                    </motion.div>
                </AnimatePresence>
                    </div>
                </Reveal>

                <Reveal delay={0.1} className="mt-12">
                    <div className="flex items-center gap-4 border border-[#9C8674] bg-[#9C8674]/[0.08] px-6 py-5" data-testid="payment-date-banner">
                        <CalendarCheck size={28} strokeWidth={1.5} className="text-[#9C8674] shrink-0" />
                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                            <strong className="text-[#9C8674]">Você escolhe a data do pagamento.</strong>{" "}
                            Fechou o plano? Combinamos juntos o melhor dia do mês para você pagar sem aperto.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.15} className="mt-14">
                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-cream mb-8">
                        {PRICING.extrasTitle}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-x-10 sm:gap-y-7" data-testid="pricing-extras">
                        {PRICING.extras.map((ex) => {
                            const Icon = EXTRA_ICONS[ex.icon];
                            return (
                                <div key={ex.text} className="flex items-center gap-4 border-b border-neutral-800 pb-6 sm:border-b-0 sm:pb-0">
                                    <span className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#9C8674]/10 border border-[#9C8674]/30 text-[#9C8674]">
                                        <Icon size={20} strokeWidth={1.5} />
                                    </span>
                                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                                        {ex.text} <strong className="text-cream">{ex.price}</strong>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
