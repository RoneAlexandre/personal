import { Reveal, SectionHeader } from "./Reveal";
import { IMAGES } from "../data/content";

export const Gallery = () => (
    <section id="galeria" data-testid="gallery-section" className="py-24 sm:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                <SectionHeader kicker="Dentro do treino" title="A arte em movimento" />
                <Reveal delay={0.2}>
                    <p className="text-neutral-400 text-sm sm:text-base max-w-sm md:text-right">
                        Treinos, técnicas e os diferentes formatos de aula.
                    </p>
                </Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[240px] gap-4">
                {IMAGES.gallery.map((img, i) => (
                    <Reveal key={img.url} delay={i * 0.08} className={img.span}>
                        <figure
                            data-testid={`gallery-item-${i}`}
                            className="relative h-full w-full overflow-hidden group border border-neutral-800"
                        >
                            <img
                                src={img.url}
                                alt={img.alt}
                                loading="lazy"
                                className="h-full w-full object-cover grayscale-[35%] transition-[transform,filter] duration-700 group-hover:scale-105 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#9C8674] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#9C8674] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                            <figcaption className="absolute bottom-3 left-3 text-cream/90 text-xs uppercase tracking-widest">
                                {img.alt}
                            </figcaption>
                        </figure>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
