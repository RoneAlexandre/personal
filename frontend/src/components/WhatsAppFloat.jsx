import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data/content";

export const WhatsAppFloat = () => (
    <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="whatsapp-float-btn"
        aria-label="Agendar aula pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
    >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-float-ping" aria-hidden="true" />
        <span className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 group-hover:bg-green-400 shadow-lg shadow-green-500/30 transition-[background-color,transform] duration-300 group-hover:scale-105">
            <MessageCircle size={28} className="text-cream" strokeWidth={2} fill="white" />
        </span>
    </a>
);
