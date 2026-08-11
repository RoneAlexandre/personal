import { Reveal, SectionHeader, useAutoScroll } from "./Reveal";
import { IMAGES } from "../data/content";

export const Journey = () => {
    const trackRef = useAutoScroll(0.5);
    return (
    <section id="trajetoria" data-testid="journey-section" className="py-24 sm:py-32 bg-[#0D0D0D] border-y border-neutral-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                <SectionHeader kicker="Trajetória" title="Minha história no esporte" />
                <Reveal delay={0.2}>
                    <p className="text-neutral-400 text-sm sm:text-base max-w-sm md:text-right">
                        Seminários, cursos, aulas e lutas — arraste para o lado e conheça a caminhada.
                    </p>
                </Reveal>
            </div>
        </div>
        <Reveal>
            <div
                ref={trackRef}
                data-testid="journey-carousel"
                className="flex gap-4 overflow-x-auto px-5 sm:px-8 pb-4 [scrollbar-width:thin] [scrollbar-color:#dc2626_transparent]"
            >
                {IMAGES.journey.map((img, i) => (
                    <figure
                        key={img.caption}
                        data-testid={`journey-item-${i}`}
                        className="group relative shrink-0 w-[74%] sm:w-[44%] lg:w-[30%] aspect-[3/4] overflow-hidden border border-neutral-800"
                    >
                        <img
                            src={img.url}
                            alt={img.caption}
                            loading="lazy"
                            className="w-full h-full object-cover grayscale-[30%] transition-[transform,filter] duration-700 group-hover:scale-105 group-hover:grayscale-0"
                        />
                        <figcaption className="absolute bottom-0 inset-x-0 pt-10 pb-3 px-3 bg-gradient-to-t from-black/85 to-transparent text-[11px] uppercase tracking-[0.15em] text-white/90">
                            {img.caption}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </Reveal>
    </section>
    );
};
