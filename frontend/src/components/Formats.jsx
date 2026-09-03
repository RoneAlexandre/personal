import { Check } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { FORMATS } from "../data/content";

export const Formats = () => (
    <section id="aulas" data-testid="formats-section" className="py-24 sm:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                <SectionHeader kicker="Aulas Particulares" title="Escolha onde treinar" />
                <Reveal delay={0.2}>
                    <p className="text-neutral-400 text-sm sm:text-base max-w-sm md:text-right">
                        Aulas no conforto de sua casa ou no espaço estruturado da academia,
                        escolha o formato que mais combina com seu objetivo e rotina.
                    </p>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {FORMATS.map((f, i) => (
                    <Reveal key={f.number} delay={i * 0.12} className="h-full">
                        <article
                            data-testid={`format-card-${f.number}`}
                            className="group h-full flex flex-col bg-[#141414] border border-neutral-800 p-8 transition-[border-color,transform] duration-300 hover:border-terracota hover:-translate-y-1"
                        >
                            <span className="font-display text-5xl text-stroke group-hover:text-terracota group-hover:[-webkit-text-stroke:0px] transition-all duration-300">
                                {f.number}
                            </span>
                            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-cream mt-6 mb-3">
                                {f.title}
                            </h3>
                            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed flex-1">
                                {f.description}
                            </p>
                            <ul className="mt-6 pt-6 border-t border-neutral-800 space-y-2.5">
                                {f.includes.map((inc) => (
                                    <li key={inc} className="flex items-start gap-2.5 text-sm text-neutral-300">
                                        <Check size={16} className="text-[#9C8674] mt-0.5 shrink-0" strokeWidth={2.5} />
                                        {inc}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
