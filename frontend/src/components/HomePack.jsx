import { Check, Clock } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { HOMEPACK } from "../data/content";

// Pack ainda não está à venda: o CTA leva para o WhatsApp para avisar o
// aluno assim que o lançamento acontecer.
export const HomePack = () => (
    <section id="treine-em-casa" data-testid="homepack-section" className="py-24 sm:py-32 bg-[#0A0A0A]">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
            <div className="text-center">
                <SectionHeader kicker="Treinos em PDF" title={HOMEPACK.title} align="center" />
            </div>

            <Reveal delay={0.1}>
                <article
                    data-testid="homepack-card"
                    className="relative mt-10 border border-[#9C8674]/40 bg-[#141414] p-8 sm:p-10 text-center overflow-hidden"
                >
                    <span
                        data-testid="homepack-badge"
                        className="absolute top-0 right-0 bg-terracota text-cream text-xs font-bold uppercase tracking-[0.14em] px-4 py-1.5"
                    >
                        Em breve
                    </span>

                    <span className="mx-auto w-14 h-14 flex items-center justify-center bg-[#9C8674]/10 border border-[#9C8674]/40 text-[#9C8674]">
                        <Clock size={26} strokeWidth={1.5} />
                    </span>

                    <p className="mt-6 text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                        {HOMEPACK.description}
                    </p>

                    <ul className="mt-7 pt-7 border-t border-neutral-800 space-y-3 text-left max-w-sm mx-auto">
                        {HOMEPACK.includes.map((inc) => (
                            <li key={inc} className="flex items-start gap-2.5 text-sm text-neutral-300">
                                <Check size={15} className="text-[#9C8674] mt-0.5 shrink-0" strokeWidth={2.5} />
                                {inc}
                            </li>
                        ))}
                    </ul>

                    <a
                        href={HOMEPACK.waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="homepack-notify-cta"
                        className="mt-8 inline-flex justify-center w-full sm:w-auto bg-[#9C8674] hover:bg-terracota text-black font-display text-lg tracking-widest uppercase px-8 py-3.5 transition-colors duration-300"
                    >
                        Quero ser avisado do lançamento
                    </a>
                </article>
            </Reveal>
        </div>
    </section>
);
