import { Activity, Shield, Flame, Brain, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./Reveal";
import { BENEFITS } from "../data/content";

const ICONS = { Activity, Shield, Flame, Brain, HeartPulse };

export const Benefits = () => (
    <section data-testid="benefits-section" className="py-24 sm:py-32 bg-[#0D0D0D] border-y border-neutral-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeader kicker="Por que treinar" title="Benefícios do Muaythai" align="center" />
        </div>
        <motion.div
            className="mt-12 flex gap-3 overflow-x-auto snap-x snap-mandatory px-5 sm:px-8 pb-3 [scrollbar-width:thin] [scrollbar-color:#dc2626_transparent] lg:grid lg:grid-cols-5 lg:gap-px lg:bg-neutral-800 lg:border lg:border-neutral-800 lg:overflow-visible lg:px-0 lg:pb-0 lg:max-w-7xl lg:mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.08 }}
        >
            {BENEFITS.map((b) => {
                const Icon = ICONS[b.icon];
                return (
                    <motion.div
                        key={b.title}
                        data-testid={`benefit-${b.icon.toLowerCase()}`}
                        variants={{
                            hidden: { opacity: 0, y: 24 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                        }}
                        className="group shrink-0 w-[68%] sm:w-[42%] lg:w-auto snap-start bg-[#0A0A0A] border border-neutral-800 lg:border-0 hover:bg-[#141414] p-6 sm:p-8 transition-colors duration-300"
                    >
                        <Icon
                            size={36}
                            strokeWidth={1.5}
                            className="text-red-600 group-hover:text-[#D4AF37] transition-colors duration-300"
                        />
                        <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-white mt-5 mb-2 leading-tight">
                            {b.title}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">{b.text}</p>
                    </motion.div>
                );
            })}
        </motion.div>
    </section>
);
