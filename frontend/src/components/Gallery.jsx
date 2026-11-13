import { Reveal, SectionHeader } from "./Reveal";
import { IMAGES } from "../data/content";

export const Gallery = () => (
    <section id="galeria" data-testid="gallery-section" className="py-24 sm:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                <SectionHeader kicker="Dentro do treino" title="Estrutura das aulas" />
                <Reveal delay={0.2}>
                    <p className="text-neutral-400 text-sm sm:text-base max-w-sm md:text-right">
                        Nossas aulas são divididas em 6 etapas:
                    </p>
                </Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[240px] gap-4">
                {IMAGES.gallery.map((img, i) => {
                    const isVideo = typeof img.url === "string" && img.url.toLowerCase().endsWith(".mp4");

                    return (
                        <Reveal key={`${img.step}-${i}`} delay={i * 0.08} className={img.span}>
                            <figure
                                data-testid={`gallery-item-${i}`}
                                className="relative h-full w-full overflow-hidden border border-neutral-800 bg-neutral-900"
                            >
                                {isVideo ? (
                                    <video
                                        src={img.url}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src={img.url}
                                        alt={img.alt}
                                        loading="lazy"
                                        className="h-full w-full object-cover"
                                    />
                                )}
                                
                                {/* Legenda limpa na parte inferior com fundo sólido leve para destacar o texto */}
                                <figcaption className="absolute inset-x-0 bottom-0 py-3 px-4 bg-black/80 flex items-end gap-3 pointer-events-none">
                                    <span className="font-display text-3xl leading-none text-terracota">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="font-display text-2xl sm:text-3xl leading-none uppercase tracking-wide text-cream">{img.step}</span>
                                </figcaption>
                            </figure>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    </section>
);