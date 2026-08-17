import { Star } from "lucide-react";
import { SectionHeader } from "./Reveal";
import { TESTIMONIALS } from "../data/content";

const Stars = () => (
    <div className="flex gap-1" aria-label="Avaliação 5 de 5 estrelas">
        {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-[#D4AF37]" fill="#D4AF37" strokeWidth={0} />
        ))}
    </div>
);

const QuoteCard = ({ t, dup, i }) => (
    <figure
        data-testid={`testimonial-card-${dup}-${i}`}
        className="w-[290px] sm:w-[340px] shrink-0 flex flex-col bg-[#141414] border border-neutral-800 hover:border-[#D4AF37]/60 p-6 transition-colors duration-300"
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

export const Testimonials = () => (
    <section data-testid="testimonials-section" className="py-24 sm:py-32 bg-[#0D0D0D] border-y border-neutral-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeader kicker="Depoimentos" title="Quem treina, recomenda" />
        </div>
        <div className="mt-12 overflow-hidden" data-testid="testimonial-marquee">
            <div className="flex w-max gap-5 px-5 animate-marquee [animation-duration:60s] hover:[animation-play-state:paused] active:[animation-play-state:paused]">
                {[0, 1].map((dup) =>
                    TESTIMONIALS.map((t, i) => <QuoteCard key={`${dup}-${t.name}`} t={t} dup={dup} i={i} />)
                )}
            </div>
        </div>
    </section>
);
