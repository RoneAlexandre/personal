import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Formats } from "./components/Formats";
import { Benefits } from "./components/Benefits";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

function App() {
    useEffect(() => {
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
                <Hero />
                <Marquee />
                <About />
                <Formats />
                <Benefits />
                <Pricing />
                <Testimonials />
                <Gallery />
                <FAQ />
                <FinalCTA />
            </main>
            <WhatsAppFloat />
        </div>
    );
}

export default App;
