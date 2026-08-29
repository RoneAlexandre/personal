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
        className="snap-start w-[280px] sm:w-[340px] shrink-0 flex flex-col bg-[#141414] border border-neutral-800 hover:border-[#D4AF37]/60 p-6 transition-colors duration-300"
    >
        <Stars />
        <blockquote className="mt-4 flex-1 text-neutral-300 text-sm leading-relaxed">“{t.quote}”</blockquote>
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

export const Testimonials = () => {
    const trackRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateArrows = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    }, []);

    useEffect(() => {
        updateArrows();
        window.addEventListener("resize", updateArrows);
        return () => window.removeEventListener("resize", updateArrows);
    }, [updateArrows]);

    const scrollByCard = (direction) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector("[data-testid^='testimonial-card-']");
        const amount = card ? card.getBoundingClientRect().width + 20 : 300;
        el.scrollBy({ left: direction * amount, behavior: "smooth" });
    };

    return (
        <section data-testid="testimonials-section" className="py-24 sm:py-32 bg-[#0D0D0D] border-y border-neutral-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="flex items-end justify-between gap-4">
                    <SectionHeader kicker="Depoimentos" title="Quem treina, recomenda" />
                    <div className="hidden sm:flex gap-2 pb-1">
                        <button
                            type="button"
                            aria-label="Ver depoimento anterior"
                            onClick={() => scrollByCard(-1)}
                            disabled={!canScrollLeft}
                            className="w-10 h-10 flex items-center justify-center border border-neutral-800 text-neutral-400 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] disabled:opacity-30 disabled:pointer-events-none transition-colors duration-300"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            type="button"
                            aria-label="Ver próximo depoimento"
                            onClick={() => scrollByCard(1)}
                            disabled={!canScrollRight}
                            className="w-10 h-10 flex items-center justify-center border border-neutral-800 text-neutral-400 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] disabled:opacity-30 disabled:pointer-events-none transition-colors duration-300"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative mt-12">
                <div
                    ref={trackRef}
                    onScroll={updateArrows}
                    data-testid="testimonial-track"
                    className="flex gap-5 px-5 sm:px-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
                >
                    {TESTIMONIALS.map((t, i) => (
                        <QuoteCard key={t.name} t={t} i={i} />
                    ))}
                </div>

                <div className="flex sm:hidden justify-center gap-3 mt-6">
                    <button
                        type="button"
                        aria-label="Ver depoimento anterior"
                        onClick={() => scrollByCard(-1)}
                        disabled={!canScrollLeft}
                        className="w-11 h-11 flex items-center justify-center border border-neutral-800 text-neutral-400 active:border-[#D4AF37]/60 active:text-[#D4AF37] disabled:opacity-30 disabled:pointer-events-none transition-colors duration-300"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        type="button"
                        aria-label="Ver próximo depoimento"
                        onClick={() => scrollByCard(1)}
                        disabled={!canScrollRight}
                        className="w-11 h-11 flex items-center justify-center border border-neutral-800 text-neutral-400 active:border-[#D4AF37]/60 active:text-[#D4AF37] disabled:opacity-30 disabled:pointer-events-none transition-colors duration-300"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};
