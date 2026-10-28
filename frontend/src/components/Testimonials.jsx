import { useRef, useState, useCallback, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./Reveal";
import { TESTIMONIALS } from "../data/content";

const Stars = () => (
    <div className="flex gap-1" aria-label="Avaliação 5 de 5 estrelas">
        {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-[#9C8674]" fill="#9C8674" strokeWidth={0} />
        ))}
    </div>
);

const QuoteCard = ({ t, i }) => (
    <figure
        data-testid={`testimonial-card-${i}`}
        className="w-full max-w-[300px] sm:max-w-sm mx-auto flex flex-col bg-[#141414] border border-neutral-800 p-6 sm:p-8"
    >
        <Stars />
        <blockquote className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">“{t.quote}”</blockquote>
        <figcaption className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-3">
            <span className="w-10 h-10 shrink-0 flex items-center justify-center bg-terracota/15 border border-terracota/40 font-display text-base text-terracota">
                {t.name.split(" ").map((w) => w[0]).join("").replace(".", "")}
            </span>
            <span>
                <span className="block text-cream font-semibold text-sm">{t.name}</span>
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
        className={`w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#141414]/90 border border-neutral-800 text-neutral-300 hover:border-[#9C8674]/70 hover:text-[#9C8674] active:border-[#9C8674]/70 active:text-[#9C8674] transition-colors duration-300 shadow-lg ${className}`}
    >
        {direction === "prev" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
);

export const Testimonials = () => {
    const total = TESTIMONIALS.length;
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef(null);

    const goTo = useCallback(
        (i) => setIndex(((i % total) + total) % total),
        [total]
    );
    const next = useCallback(() => goTo(index + 1), [goTo, index]);
    const prev = useCallback(() => goTo(index - 1), [goTo, index]);

    // Rolagem automática (autoplay) a cada 5 segundos
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            next();
        }, 5000);
        return () => clearInterval(interval);
    }, [next, isPaused]);

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
        <section 
            data-testid="testimonials-section" 
            className="py-24 sm:py-32 bg-[#0D0D0D] border-y border-neutral-800 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <SectionHeader kicker="Depoimentos" title="Quem treina, recomenda" align="center" />
            </div>

            <div className="max-w-3xl mx-auto mt-12 px-12 sm:px-16 relative">
                
                {/* Seta Esquerda Fixa na Lateral */}
                <ArrowButton 
                    direction="prev" 
                    onClick={prev} 
                    className="absolute left-1 sm:-left-14 top-[45%] -translate-y-1/2 z-20" 
                />

                {/* Seta Direita Fixa na Lateral */}
                <ArrowButton 
                    direction="next" 
                    onClick={next} 
                    className="absolute right-1 sm:-right-14 top-[45%] -translate-y-1/2 z-20" 
                />

                <div
                    className="relative overflow-hidden"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                    data-testid="testimonial-track"
                >
                    <div
                        className="flex transition-transform duration-500 ease-out items-start"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {TESTIMONIALS.map((t, i) => (
                            <div key={t.name} className="w-full shrink-0 px-2">
                                <QuoteCard t={t} i={i} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};