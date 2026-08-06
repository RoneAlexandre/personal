import { Instagram, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../data/content";

export const FinalCTA = () => (
    <section data-testid="final-cta-section" className="relative py-28 sm:py-36 bg-red-700 overflow-hidden grain">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_100%)]" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
            <Reveal>
                <p className="text-white/70 font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm mb-5">
                    Sua primeira aula começa com uma mensagem
                </p>
                <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tight text-white">
                    Bora treinar?
                </h2>
            </Reveal>
            <Reveal delay={0.15}>
                <p className="mt-6 text-white/85 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                    Agende uma aula experimental e sinta na pele o que o Muaythai pode fazer pelo
                    seu corpo e pela sua mente.
                </p>
            </Reveal>
            <Reveal delay={0.3}>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="final-whatsapp-cta"
                        className="inline-flex items-center gap-3 bg-black text-white hover:bg-neutral-900 font-display text-2xl tracking-widest uppercase px-10 py-5 transition-[background-color,transform] duration-300 hover:-translate-y-0.5"
                    >
                        Chamar no WhatsApp
                    </a>
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="final-instagram-link"
                        className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-300"
                    >
                        <Instagram size={18} strokeWidth={1.8} />
                        @{INSTAGRAM_HANDLE}
                    </a>
                </div>
            </Reveal>
        </div>

        <footer className="relative mt-24 border-t border-white/15">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-xs uppercase tracking-widest">
                <span className="font-display text-lg text-white tracking-wide">
                    RONE<span className="text-black">BATISTA</span>
                </span>
                <span className="inline-flex items-center gap-2">
                    <MapPin size={12} /> Aulas particulares de Muaythai · Itapeva-SP e região
                </span>
                <span>© {new Date().getFullYear()} Rone Batista</span>
            </div>
        </footer>
    </section>
);
