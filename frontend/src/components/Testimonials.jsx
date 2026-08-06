import { Quote } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { TESTIMONIALS } from "../data/content";

export const Testimonials = () => (
    <section data-testid="testimonials-section" className="py-24 sm:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeader kicker="Depoimentos" title="Quem treina, recomenda" />
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {TESTIMONIALS.map((t, i) => (
                    <Reveal key={t.name} delay={i * 0.1} className="h-full">
                        <figure
                            data-testid={`testimonial-${i}`}
                            className="h-full flex flex-col bg-[#141414] border border-neutral-800 hover:border-[#D4AF37]/60 p-7 transition-colors duration-300"
                        >
                            <Quote size={22} className="text-red-600" strokeWidth={1.5} />
                            <blockquote className="mt-4 flex-1 text-neutral-300 text-sm sm:text-base leading-relaxed">
                                “{t.quote}”
                            </blockquote>
                            <figcaption className="mt-6 pt-5 border-t border-neutral-800 flex items-center gap-3">
                                <span className="w-11 h-11 shrink-0 flex items-center justify-center bg-red-600/15 border border-red-600/40 font-display text-lg text-red-500">
                                    {t.name.split(" ").map((w) => w[0]).join("").replace(".", "")}
                                </span>
                                <span>
                                    <span className="block text-white font-semibold text-sm">{t.name}</span>
                                    <span className="block text-neutral-500 text-xs uppercase tracking-widest mt-0.5">{t.role}</span>
                                </span>
                            </figcaption>
                        </figure>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
