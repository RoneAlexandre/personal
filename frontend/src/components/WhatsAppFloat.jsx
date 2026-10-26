import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data/content";

export const WhatsAppFloat = () => (
    <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="whatsapp-float-btn"
        aria-label="Conversar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-neutral-900/90 hover:bg-neutral-800 text-cream border border-terracota/40 hover:border-terracota p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-terracota/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
    >
        {/* Ícone com ponto pulsante sutil em terracota */}
        <div className="relative flex items-center justify-center text-terracota group-hover:text-[#F5C28B] transition-colors duration-300">
            <MessageCircle size={22} strokeWidth={1.8} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-terracota rounded-full animate-pulse" />
        </div>

        {/* Texto do botão (oculto no mobile, visível no desktop) */}
        <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-neutral-300 group-hover:text-cream transition-colors duration-300">
            Agendar
        </span>
    </a>
);