import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Reveal, SectionHeader } from "./Reveal";
import { FAQ_ITEMS, WHATSAPP_URL } from "../data/content";

export const FAQ = () => (
    <section id="faq" data-testid="faq-section" className="py-24 sm:py-32 bg-[#0D0D0D] border-y border-neutral-800">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <SectionHeader kicker="Dúvidas" title="Perguntas frequentes" align="center" />
            <Reveal delay={0.15} className="mt-12">
                <Accordion type="single" collapsible className="border-t border-neutral-800">
                    {FAQ_ITEMS.map((item, i) => (
                        <AccordionItem
                            key={item.q}
                            value={`item-${i}`}
                            data-testid={`faq-item-${i}`}
                            className="border-b border-neutral-800"
                        >
                            <AccordionTrigger
                                data-testid={`faq-trigger-${i}`}
                                className="text-left font-display text-xl sm:text-2xl uppercase tracking-wide text-white hover:text-red-500 hover:no-underline py-6 transition-colors duration-200"
                            >
                                {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-neutral-400 text-sm sm:text-base leading-relaxed pb-6">
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Reveal>
            <Reveal delay={0.25} className="text-center mt-10">
                <p className="text-neutral-500 text-sm">
                    Ficou com alguma dúvida?{" "}
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="faq-whatsapp-link"
                        className="text-red-500 hover:text-red-400 font-semibold transition-colors duration-200"
                    >
                        Chame no WhatsApp
                    </a>{" "}
                    que eu respondo pessoalmente.
                </p>
            </Reveal>
        </div>
    </section>
);
