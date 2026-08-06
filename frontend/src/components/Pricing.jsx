import { Check } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { PLANS, WHATSAPP_URL } from "../data/content";

export const Pricing = () => (
    <section id="planos" data-testid="pricing-section" className="py-24 sm:py-32 bg-[#0D0D0D] border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeader kicker="Investimento" title="Planos e valores" align="center" />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
                {PLANS.map((p, i) => (
                    <Reveal key={p.name} delay={i * 0.12} className="h-full">
                        <article
                            data-testid={`plan-card-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                            className={`relative h-full flex flex-col bg-[#141414] p-8 border transition-[border-color,transform] duration-300 hover:-translate-y-1 ${
                                p.highlighted
                                    ? "border-[#D4AF37] md:-translate-y-3 md:hover:-translate-y-4"
                                    : "border-neutral-800 hover:border-red-600"
                            }`}
                        >
                            {p.badge && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest px-4 py-1">
                                    {p.badge}
                                </span>
                            )}
                            <h3 className="font-display text-2xl uppercase tracking-wide text-white">{p.name}</h3>
                            <div className="mt-5 flex items-baseline gap-1">
                                <span className={`font-display text-6xl leading-none ${p.highlighted ? "text-[#D4AF37]" : "text-white"}`}>
                                    {p.price}
                                </span>
                                <span className="text-neutral-400 text-sm uppercase tracking-widest">{p.period}</span>
                            </div>
                            <ul className="mt-8 space-y-3 flex-1">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-300">
                                        <Check size={16} className="text-red-500 mt-0.5 shrink-0" strokeWidth={2.5} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid={`plan-cta-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                                className={`mt-8 inline-flex justify-center font-display text-lg tracking-widest uppercase px-6 py-3 transition-colors duration-300 ${
                                    p.highlighted
                                        ? "bg-[#D4AF37] text-black hover:bg-[#e5c453]"
                                        : "border border-neutral-600 text-white hover:border-red-600 hover:text-red-500"
                                }`}
                            >
                                Consultar valor
                            </a>
                        </article>
                    </Reveal>
                ))}
            </div>
            <Reveal delay={0.3} className="text-center mt-10">
                <p className="text-neutral-500 text-sm">
                    Valores sob consulta — chame no WhatsApp e receba a tabela atualizada.
                </p>
            </Reveal>
        </div>
    </section>
);
