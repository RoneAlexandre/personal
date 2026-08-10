import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Dumbbell, BadgePercent } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { PRICING } from "../data/content";

const EXTRA_ICONS = [Home, Dumbbell, BadgePercent];

export const Pricing = () => {
    const [active, setActive] = useState("individual");
    const current = PRICING.formats.find((f) => f.id === active);

    return (
        <section id="planos" data-testid="pricing-section" className="py-24 sm:py-32 bg-[#0D0D0D] border-y border-neutral-800">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
                <SectionHeader kicker="Investimento" title="Planos e valores" align="center" />
                <Reveal delay={0.1} className="text-center mt-4">
                    <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
                        Planos semanais ou mensais, individual, em dupla ou em grupo — o mensal sempre sai mais barato.
                    </p>
                </Reveal>

                <Reveal delay={0.15}>
                    <div className="mt-10 grid grid-cols-3 gap-px bg-neutral-800 border border-neutral-800" role="tablist">
                        {PRICING.formats.map((f) => (
                            <button
                                key={f.id}
                                role="tab"
                                aria-selected={active === f.id}
                                data-testid={`plan-tab-${f.id}`}
                                onClick={() => setActive(f.id)}
                                className={`py-4 px-2 font-display text-lg sm:text-2xl uppercase tracking-widest transition-colors duration-300 ${
                                    active === f.id ? "bg-red-600 text-white" : "bg-[#141414] text-neutral-400 hover:text-white"
                                }`}
                            >
                                {f.label}
                                <span className={`block font-body text-[10px] sm:text-xs tracking-[0.15em] mt-0.5 normal-case font-normal ${active === f.id ? "text-white/75" : "text-neutral-500"}`}>
                                    {f.note}
                                </span>
                            </button>
                        ))}
                    </div>
                </Reveal>

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
                        <div className="hidden md:grid grid-cols-[1fr_1fr_1.15fr] gap-4 px-6 pb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
                            <span>Frequência</span>
                            <span>Semanal</span>
                            <span>Mensal · com desconto</span>
                        </div>
                        <div className="border-t border-neutral-800">
                            {current.rows.map((row, i) => (
                                <div
                                    key={row.freq}
                                    data-testid={`price-row-${active}-${i}`}
                                    className="grid md:grid-cols-[1fr_2.15fr] gap-3 md:gap-4 items-center border-b border-neutral-800 py-5 md:px-6"
                                >
                                    <span className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white">{row.freq}</span>
                                    <div className="grid grid-cols-2 md:grid-cols-[1fr_1.15fr] gap-3 md:gap-4">
                                        <div className="border border-neutral-800 bg-[#141414] px-4 py-3">
                                            <span className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500 md:hidden">Semanal</span>
                                            <span className="font-display text-2xl sm:text-3xl text-white">{row.weekly}</span>
                                            {row.weeklyNote && <span className="block text-xs text-neutral-500 mt-0.5">{row.weeklyNote}</span>}
                                        </div>
                                        <div className="border border-[#D4AF37] bg-[#D4AF37]/5 px-4 py-3">
                                            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]/80 md:hidden">Mensal</span>
                                            <span className="font-display text-2xl sm:text-3xl text-[#D4AF37]">{row.monthly}</span>
                                            {row.perClass && <span className="block text-xs text-[#D4AF37]/90 mt-0.5">{row.perClass}</span>}
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
                            className="mt-8 inline-flex w-full sm:w-auto justify-center bg-red-600 hover:bg-red-500 text-white font-display text-xl tracking-widest uppercase px-8 py-4 transition-[background-color,transform] duration-300 hover:-translate-y-0.5"
                        >
                            {current.cta}
                        </a>
                    </motion.div>
                </AnimatePresence>

                <Reveal delay={0.1} className="mt-14">
                    <div className="grid md:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800" data-testid="pricing-extras">
                        {PRICING.extras.map((ex, i) => {
                            const Icon = EXTRA_ICONS[i];
                            return (
                                <div key={ex} className="bg-[#0D0D0D] px-6 py-5 flex items-start gap-3">
                                    <Icon size={20} strokeWidth={1.5} className="text-[#D4AF37] mt-0.5 shrink-0" />
                                    <p className="text-sm text-neutral-300">{ex}</p>
                                </div>
                            );
                        })}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
