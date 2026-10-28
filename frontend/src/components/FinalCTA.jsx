import { Instagram, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../data/content";

export const FinalCTA = () => (
    <section data-testid="final-cta-section" className="relative py-16 sm:py-20 bg-terracota-dark overflow-hidden grain">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_100%)]" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <Reveal>
                <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-cream">
                    Bora treinar?
                </h2>
            </Reveal>
            <Reveal delay={0.2}>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {/* Botão do WhatsApp */}
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="final-whatsapp-cta"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-black text-cream hover:bg-neutral-900 font-display text-base tracking-wider uppercase px-6 py-3 transition-[background-color,transform] duration-300 hover:-translate-y-0.5 border border-cream/20 shadow-md"
                    >
                        <MessageCircle size={18} className="text-emerald-500" />
                        Chamar no WhatsApp
                    </a>

                    {/* Botão do Instagram */}
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="final-instagram-link"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-black/40 hover:bg-black/60 border border-cream/30 hover:border-cream text-cream font-display text-base px-6 py-3 uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-md"
                    >
                        <Instagram size={18} className="text-amber-500" />
                        <span>@{INSTAGRAM_HANDLE}</span>
                    </a>
                </div>
            </Reveal>
        </div>

        <footer className="relative mt-10 sm:mt-12 border-t border-cream/15">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-cream/60 text-[11px] uppercase tracking-widest text-center">
                <span className="font-display text-sm text-cream/90 tracking-wide">
                    PERSONAL<span className="text-black">FIGHT</span>
                </span>
                <span>
                    Desenvolvido por Rone Batista © {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    </section>
);