import { Reveal } from "./Reveal";
import { HOMEPACK } from "../data/content";

export const HomePack = () => (
    <section id="treine-em-casa" data-testid="homepack-section" className="py-24 sm:py-32 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <Reveal>
                <div className="border border-dashed border-[#D4AF37]/50 bg-[#D4AF37]/[0.04] px-6 py-14 text-center">
                    <span className="inline-block bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-[0.2em] px-4 py-1 mb-5">
                        Em breve
                    </span>
                    <p className="text-red-600 font-semibold tracking-[0.3em] uppercase text-xs mb-3">Treinos em PDF</p>
                    <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white">
                        Pack "Treine em Casa"
                    </h2>
                    <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                        Treinos completos de Muaythai em PDF para fazer em casa, no seu ritmo:
                        aquecimento, técnica, sequências de golpes e condicionamento — direto no seu celular.
                    </p>
                    <a
                        href={HOMEPACK.waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="homepack-cta"
                        className="mt-8 inline-flex bg-[#D4AF37] hover:bg-[#e5c453] text-black font-display text-xl tracking-widest uppercase px-8 py-4 transition-[background-color,transform] duration-300 hover:-translate-y-0.5"
                    >
                        Quero ser avisado do lançamento
                    </a>
                </div>
            </Reveal>
        </div>
    </section>
);
