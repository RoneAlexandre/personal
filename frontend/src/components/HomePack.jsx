import { Check } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { HOMEPACK } from "../data/content";

export const HomePack = () => (
    <section id="treine-em-casa" data-testid="homepack-section" className="py-24 sm:py-32 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="text-center">
                <span className="inline-block bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-[0.2em] px-4 py-1 mb-5">
                    Em breve
                </span>
                <SectionHeader kicker="Treinos em PDF" title='Pack "Treine em Casa"' align="center" />
                <Reveal delay={0.1}>
                    <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
                        Treinos completos de Muaythai em PDF para fazer em casa, no seu ritmo:
                        aquecimento, técnica, sequências de golpes e condicionamento — direto no seu celular.
                    </p>
                </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {HOMEPACK.packs.map((pack, i) => (
                    <Reveal key={pack.name} delay={i * 0.1} className="h-full">
                        <article
                            data-testid={`homepack-card-${i}`}
                            className="relative h-full flex flex-col border border-dashed border-[#D4AF37]/50 bg-[#D4AF37]/[0.04] p-7 transition-colors duration-300 hover:border-[#D4AF37]"
                        >
                            <span className="absolute -top-2.5 right-4 bg-[#D4AF37] text-black text-[9px] font-bold uppercase tracking-[0.14em] px-2 py-0.5">
                                Em breve
                            </span>
                            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white">
                                {pack.name}
                            </h3>
                            <p className="mt-5 flex items-baseline gap-1">
                                <span className="font-display text-4xl text-[#D4AF37] leading-none">{pack.price}</span>
                                <span className="text-neutral-500 text-xs uppercase tracking-widest">/pdf</span>
                            </p>
                            <p className="mt-4 text-neutral-400 text-sm leading-relaxed flex-1">{pack.description}</p>
                            <ul className="mt-5 pt-5 border-t border-neutral-800 space-y-2">
                                {pack.includes.map((inc) => (
                                    <li key={inc} className="flex items-start gap-2.5 text-sm text-neutral-300">
                                        <Check size={15} className="text-[#D4AF37] mt-0.5 shrink-0" strokeWidth={2.5} />
                                        {inc}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </Reveal>
                ))}
            </div>

            <Reveal delay={0.2} className="text-center mt-10">
                <a
                    href={HOMEPACK.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="homepack-cta"
                    className="inline-flex bg-[#D4AF37] hover:bg-[#e5c453] text-black font-display text-xl tracking-widest uppercase px-8 py-4 transition-[background-color,transform] duration-300 hover:-translate-y-0.5"
                >
                    Quero ser avisado do lançamento
                </a>
            </Reveal>
        </div>
    </section>
);
