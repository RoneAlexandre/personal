import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Formats } from "@/components/Formats";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { HomePack } from "@/components/HomePack";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

function App() {
    useEffect(() => {
        const isMobile = window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
        if (isMobile) return;

        const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="bg-[#0A0A0A] text-white min-h-screen">
            <Navbar />
            <main>
                <div id="topo">
                    <Hero />
                </div>
                <div id="sobre">
                    <About />
                </div>
                <div id="trajetoria">
                    <Journey />
                </div>
                <div id="local">
                    <Formats />
                </div>
                <div id="beneficios">
                    <Benefits />
                </div>
                <div id="planos">
                    <Pricing />
                </div>
                <div id="pack">
                    <HomePack />
                </div>
                <div id="depoimentos">
                    <Testimonials />
                </div>
                <div id="estrutura">
                    <Gallery />
                </div>
                <div id="faq">
                    <FAQ />
                </div>
                <FinalCTA />
            </main>
            <WhatsAppFloat />
        </div>
    );
}

export default App;