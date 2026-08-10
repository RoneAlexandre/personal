import { Check } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { HOMEPACK } from "../data/content";

// Para ativar a compra: preencha "buyUrl" de cada pack em src/data/content.js.
// Enquanto buyUrl estiver vazio, o botão abre o WhatsApp.
export const HomePack = () => (
    <section id="treine-em-casa" data-testid="homepack-section" className="py-24 sm:py-32 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="text-center">
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
                            className="h-full flex flex-col border border-neutral-800 bg-[#141414] p-7 transition-[border-color,transform] duration-300 hover:border-[#D4AF37] hover:-translate-y-1"
                        >
                            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white">
                                {pack.name}
                            </h3>
                            <p className="mt-5 flex items-baseline gap-1">
                                <span className="font-display text-4xl text-[#D4AF37] leading-none">{pack.price}</span>
                                <span className="text-neutral-500 text-xs uppercase tracking-widest">/pdf</span>
                            </p>
                            <p className="mt-4 text-neutral-400 text-sm leading-relaxed">{pack.description}</p>
                            <ul className="mt-5 pt-5 border-t border-neutral-800 space-y-2 flex-1">
                                {pack.includes.map((inc) => (
                                    <li key={inc} className="flex items-start gap-2.5 text-sm text-neutral-300">
                                        <Check size={15} className="text-[#D4AF37] mt-0.5 shrink-0" strokeWidth={2.5} />
                                        {inc}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={pack.buyUrl || HOMEPACK.waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid={`homepack-buy-${i}`}
                                className="mt-7 inline-flex justify-center bg-[#D4AF37] hover:bg-[#e5c453] text-black font-display text-lg tracking-widest uppercase px-6 py-3 transition-colors duration-300"
                            >
                                Comprar pack
                            </a>
                        </article>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
