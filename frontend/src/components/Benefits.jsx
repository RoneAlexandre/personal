import { SectionHeader, Reveal } from "./Reveal";
import OrbitalBenefits from "./OrbitalBenefits";
import { BENEFITS } from "../data/content";

export const Benefits = () => (
  <section data-testid="benefits-section" className="py-24 sm:py-32 bg-[#0D0D0D] border-y border-neutral-800 overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHeader kicker="Por que treinar" title="Benefícios do Muay Thai" align="center" />
      <Reveal delay={0.15}>
        <div className="mt-10">
          <OrbitalBenefits timelineData={BENEFITS} />
        </div>
      </Reveal>
    </div>
  </section>
);