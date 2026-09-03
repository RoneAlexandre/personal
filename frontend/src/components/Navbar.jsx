import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "../data/content";

const LINKS = [
    { href: "#sobre", label: "Sobre" },
    { href: "#aulas", label: "Aulas" },
    { href: "#planos", label: "Planos" },
    { href: "#galeria", label: "Galeria" },
    { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="navbar"
            className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 border-b ${
                scrolled || open ? "bg-black/85 backdrop-blur-md border-neutral-800" : "bg-transparent border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
                <a href="#topo" data-testid="nav-logo" className="font-display text-2xl tracking-wide text-cream" onClick={() => setOpen(false)}>
                    RONE<span className="text-terracota">BATISTA</span>
                </a>
                <nav className="hidden md:flex items-center gap-8">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-link-${l.label.toLowerCase()}`}
                            className="text-sm font-medium text-neutral-300 hover:text-cream transition-colors duration-200 uppercase tracking-widest"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="nav-whatsapp-btn"
                        className="inline-flex items-center gap-2 bg-terracota hover:bg-terracota-dark text-cream text-sm font-semibold px-4 py-2 uppercase tracking-wider transition-colors duration-200"
                    >
                        <MessageCircle size={16} strokeWidth={2} />
                        <span className="hidden sm:inline">Agendar aula</span>
                        <span className="sm:hidden">Agendar</span>
                    </a>
                    <button
                        onClick={() => setOpen(!open)}
                        data-testid="nav-toggle"
                        aria-label={open ? "Fechar menu" : "Abrir menu"}
                        className="md:hidden text-cream p-2 border border-neutral-700 hover:border-terracota transition-colors duration-200"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
            {open && (
                <nav className="md:hidden border-t border-neutral-800 bg-black/95 backdrop-blur-md" data-testid="nav-mobile-menu">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                            className="block px-6 py-4 text-sm font-semibold text-neutral-200 hover:text-cream hover:bg-cream/5 uppercase tracking-widest border-b border-neutral-900 transition-colors duration-200"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};
