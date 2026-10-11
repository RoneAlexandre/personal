import { Reveal, SectionHeader } from "./Reveal";
import { CLASS_STEPS } from "../data/content";

export const Gallery = () => (
    <section id="galeria" data-testid="gallery-section" className="py-24 sm:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                <SectionHeader kicker="Dentro do treino" title="Estrutura das aulas" />
                <Reveal delay={0.2}>
                    <p className="text-neutral-400 text-sm sm:text-base max-w-sm md:text-right">
                        Normalmente, nossas aulas são divididas em 5 etapas:
                    </p>
                </Reveal>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4" data-testid="class-steps">
                {CLASS_STEPS.map((step, i) => (
                    <Reveal key={step} delay={i * 0.08} className="h-full">
                        <div
                            data-testid={`class-step-${i + 1}`}
                            className="group h-full flex items-center gap-5 lg:flex-col lg:items-start lg:gap-6 bg-[#141414] border border-neutral-800 hover:border-brown-light/60 transition-colors duration-300 px-5 py-5 lg:px-6 lg:py-8"
                        >
                            <span className="font-display text-5xl lg:text-6xl leading-none text-terracota/80 group-hover:text-terracota transition-colors duration-300">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-cream leading-tight">
                                {step}
                            </span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
