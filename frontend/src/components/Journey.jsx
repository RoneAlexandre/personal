import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, SectionHeader, useAutoScroll } from "./Reveal";
import { IMAGES } from "../data/content";

const CATS = [
    { id: "tudo", label: "Tudo" },
    { id: "lutas", label: "Lutas" },
    { id: "seminarios", label: "Seminários" },
    { id: "aulas", label: "Aulas" },
];

export const Journey = () => {
    const controls = useAutoScroll(0.3);
    const [cat, setCat] = useState("tudo");
    const items = cat === "tudo" ? IMAGES.journey : IMAGES.journey.filter((i) => i.cat === cat);

    const selectCat = (id) => {
        setCat(id);
        if (controls.ref.current) controls.ref.current.scrollLeft = 0;
    };

    return (
        <section id="trajetoria" data-testid="journey-section" className="py-24 sm:py-32 bg-[#0D0D0D] border-y border-neutral-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                    <SectionHeader kicker="Trajetória" title="Minha história no esporte" />
                    <Reveal delay={0.2}>
                        <p className="text-neutral-400 text-sm sm:text-base max-w-sm md:text-right">
                            Lutas, seminários e aulas — filtre por momento e arraste para o lado.
                        </p>
                    </Reveal>
                </div>
                <Reveal delay={0.25}>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8" role="tablist">
                            {CATS.map((c) => (
                                <button
                                    key={c.id}
                                    role="tab"
                                    aria-selected={cat === c.id}
                                    data-testid={`journey-tab-${c.id}`}
                                    onClick={() => selectCat(c.id)}
                                    className={`relative pb-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200 ${
                                        cat === c.id ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                                    }`}
                                >
                                    {c.label}
                                    {cat === c.id && (
                                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-red-600" aria-hidden="true" />
                                    )}
                                </button>
                            ))}
                        </div>
                </Reveal>
            </div>
            <Reveal>
                <div
                    ref={controls.ref}
                    data-testid="journey-carousel"
                    className="flex gap-4 overflow-x-auto px-5 sm:px-8 pb-4 [scrollbar-width:thin] [scrollbar-color:#dc2626_transparent]"
                >
                    {items.map((img, i) => (
                        <motion.figure
                            key={img.caption}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
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
                        </motion.figure>
                    ))}
                </div>
            </Reveal>
        </section>
    );
};
