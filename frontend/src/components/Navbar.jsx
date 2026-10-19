import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { handleAnchorClick } from "../lib/utils";

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
            <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-3">
                {/* LADO ESQUERDO: RB | PERSONAL FIGHT */}
                <a 
                    href="#topo" 
                    data-testid="nav-logo" 
                    className="font-display font-bold text-xs sm:text-sm tracking-[0.22em] uppercase text-cream hover:text-terracota transition-colors duration-200" 
                    onClick={() => setOpen(false)}
                >
                    RB <span className="text-terracota">|</span> PERSONAL FIGHT
                </a>

                {/* NAVEGAÇÃO DESKTOP */}
                <nav className="hidden md:flex items-center gap-8">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={(e) => handleAnchorClick(e, l.href)}
                            data-testid={`nav-link-${l.label.toLowerCase()}`}
                            className="text-sm font-medium text-neutral-300 hover:text-cream transition-colors duration-200 uppercase tracking-widest"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                {/* BOTÃO HAMBÚRGUER CLEAN */}
                <div className="flex items-center gap-2 shrink-0 md:hidden">
                    <button
                        onClick={() => setOpen(!open)}
                        data-testid="nav-toggle"
                        aria-label={open ? "Fechar menu" : "Abrir menu"}
                        className="text-cream hover:text-terracota p-1 transition-colors duration-200 focus:outline-none"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MENU MOBILE EXPANDIDO */}
            {open && (
                <nav className="md:hidden border-t border-neutral-800 bg-black/95 backdrop-blur-md" data-testid="nav-mobile-menu">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={(e) => { setOpen(false); handleAnchorClick(e, l.href); }}
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