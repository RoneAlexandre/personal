import { MapPin } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { IMAGES } from "../data/content";

const CHAPTERS = [
    {
        n: "01",
        title: "Formação",
        text: "Praticante e estudioso da arte das oito armas, com graduação em Muaythai e formação continuada em metodologia de treino, preparação física e regras de combate.",
    },
    {
        n: "02",
        title: "Experiência",
        text: "Mais de uma década dedicada ao Muaythai, entre treinos, competições e anos de ensino individual — do primeiro soco de um iniciante ao refinamento de atletas avançados.",
    },
    {
        n: "03",
        title: "Filosofia",
        text: "Ninguém evolui em treino genérico. Cada aula é planejada para o seu corpo, seu objetivo e seu limite do dia — com disciplina, respeito e cobrança na medida certa.",
    },
];

export const About = () => (
    <section id="sobre" data-testid="about-section" className="relative py-24 sm:py-32 bg-[#0A0A0A] grain">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-12 gap-12 md:gap-8 items-start">
            <div className="md:col-span-5 relative">
                <Reveal>
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-full h-full border border-[#D4AF37]/50" aria-hidden="true" />
                        <div className="relative overflow-hidden group">
                            <img
                                src={IMAGES.about}
                                alt="Professor Rone Batista treinando com aparadores de foco"
                                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90 text-xs uppercase tracking-widest bg-black/60 backdrop-blur px-3 py-2 border border-neutral-700">
                                <MapPin size={12} className="text-red-500" /> Itapeva · São Paulo
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="md:col-span-7 md:pl-6">
                <SectionHeader kicker="O Professor" title="Quem é Rone Batista" />
                <Reveal delay={0.15} className="mt-6">
                    <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                        Mais do que um professor de luta, Rone é um treinador de pessoas. Sua história no
                        Muaythai começou como aluno e virou missão: provar que qualquer pessoa — de qualquer
                        idade ou condicionamento — é capaz de aprender a arte tailandesa com o método certo.
                    </p>
                </Reveal>
                <div className="mt-10 space-y-0 border-t border-neutral-800">
                    {CHAPTERS.map((c, i) => (
                        <Reveal key={c.n} delay={0.1 + i * 0.1}>
                            <div className="grid grid-cols-[auto_1fr] gap-5 sm:gap-8 py-6 border-b border-neutral-800 group" data-testid={`about-chapter-${c.n}`}>
                                <span className="font-display text-3xl sm:text-4xl text-red-600/80 group-hover:text-red-500 transition-colors duration-300">
                                    {c.n}
                                </span>
                                <div>
                                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white mb-2">
                                        {c.title}
                                    </h3>
                                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{c.text}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
