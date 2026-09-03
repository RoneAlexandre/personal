import { motion } from "framer-motion";
import { Clock, CalendarCheck, AlertTriangle, Timer } from "lucide-react";
import { SectionHeader } from "./Reveal";
import { POLICY } from "../data/content";

const ICONS = { Clock, CalendarCheck, AlertTriangle, Timer };

export const Policy = () => (
    <section id="regras" data-testid="policy-section" className="py-24 sm:py-32 bg-[#0D0D0D] border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeader kicker="Combinados" title="Desmarcar e remarcar aulas" align="center" />
            <motion.div
                className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ staggerChildren: 0.08 }}
            >
                {POLICY.map((p) => {
                    const Icon = ICONS[p.icon];
                    return (
                        <motion.div
                            key={p.title}
                            data-testid={`policy-${p.icon.toLowerCase()}`}
                            variants={{
                                hidden: { opacity: 0, y: 24 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                            }}
                            className="group bg-[#0D0D0D] hover:bg-[#141414] p-6 sm:p-8 transition-colors duration-300"
                        >
                            <Icon size={36} strokeWidth={1.5} className="text-terracota group-hover:text-[#9C8674] transition-colors duration-300" />
                            <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-cream mt-5 mb-2 leading-tight">
                                {p.title}
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">{p.text}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    </section>
);
