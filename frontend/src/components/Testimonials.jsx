import { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./Reveal";
import { TESTIMONIALS } from "../data/content";

const Stars = () => (
    <div className="flex gap-1" aria-label="Avaliação 5 de 5 estrelas">
        {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-[#D4AF37]" fill="#D4AF37" strokeWidth={0} />
        ))}
    </div>
);

const QuoteCard = ({ t, i }) => (
    <figure
        data-testid={`testimonial-card-${i}`}
        className="w-full max-w-[320px] sm:max-w-sm mx-auto flex flex-col bg-[#141414] border border-neutral-800 p-6 sm:p-8"
    >
        <Stars />
        <blockquote className="mt-4 flex-1 text-neutral-300 text-sm sm:text-base leading-relaxed">“{t.quote}”</blockquote>
        <figcaption className="mt-5 pt-4 border-t border-neutral-800 flex items-center gap-3">
            <span className="w-10 h-10 shrink-0 flex items-center justify-center bg-red-600/15 border border-red-600/40 font-display text-base text-red-500">
                {t.name.split(" ").map((w) => w[0]).join("").replace(".", "")}
            </span>
            <span>
                <span className="block text-white font-semibold text-sm">{t.name}</span>
                <span className="block text-neutral-500 text-xs uppercase tracking-widest mt-0.5">{t.role}</span>
            </span>
        </figcaption>
    </figure>
);

const ArrowButton = ({ direction, onClick, className = "" }) => (
    <button
        type="button"
        aria-label={direction === "prev" ? "Ver depoimento anterior" : "Ver próximo depoimento"}
        onClick={onClick}
        className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#0D0D0D]/90 border border-neutral-800 text-neutral-300 hover:border-[#D4AF37]/70 hover:text-[#D4AF37] active:border-[#D4AF37]/70 active:text-[#D4AF37] transition-colors duration-300 ${className}`}
    >
        {direction === "prev" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
);

export const Testimonials = () => {
    const total = TESTIMONIALS.length;
    const [index, setIndex] = useState(0);
    const viewportRef = useRef(null);
    const touchStartX = useRef(null);

    const goTo = useCallback(
        (i) => setIndex(((i % total) + total) % total),
        [total]
    );
    const next = useCallback(() => goTo(index + 1), [goTo, index]);
    const prev = useCallback(() => goTo(index - 1), [goTo, index]);

    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 40) {
            delta < 0 ? next() : prev();
        }
        touchStartX.current = null;
    };

    return (
        <section data-testid="testimonials-section" className="py-24 sm:py-32 bg-[#0D0D0D] border-y border-neutral-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <SectionHeader kicker="Depoimentos" title="Quem treina, recomenda" align="center" />
            </div>

            <div className="max-w-3xl mx-auto mt-12 px-4 sm:px-16">
                <div
                    ref={viewportRef}
                    className="relative overflow-hidden"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                    data-testid="testimonial-track"
                >
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {TESTIMONIALS.map((t, i) => (
                            <div key={t.name} className="w-full shrink-0 px-1">
                                <QuoteCard t={t} i={i} />
                            </div>
                        ))}
                    </div>

                    <ArrowButton direction="prev" onClick={prev} className="hidden sm:flex absolute -left-14 top-1/2 -translate-y-1/2" />
                    <ArrowButton direction="next" onClick={next} className="hidden sm:flex absolute -right-14 top-1/2 -translate-y-1/2" />
                </div>

                <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
                    <ArrowButton direction="prev" onClick={prev} />
                    <div className="flex gap-1.5">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                aria-label={`Ir para depoimento ${i + 1}`}
                                onClick={() => goTo(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-5 bg-[#D4AF37]" : "w-1.5 bg-neutral-700"}`}
                            />
                        ))}
                    </div>
                    <ArrowButton direction="next" onClick={next} />
                </div>

                <div className="hidden sm:flex justify-center gap-1.5 mt-8">
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Ir para depoimento ${i + 1}`}
                            onClick={() => goTo(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-[#D4AF37]" : "w-1.5 bg-neutral-700"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
