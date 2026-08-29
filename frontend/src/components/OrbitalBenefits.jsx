import { Activity, Shield, Flame, Brain, HeartPulse } from "lucide-react";

const ICONS = { Activity, Shield, Flame, Brain, HeartPulse };

// Grid estático de benefícios — leve e imediato: nada para animar
// continuamente, nada para travar. Todo o conteúdo já fica visível de
// cara, o que é melhor para a maioria dos visitantes, que estão no
// celular e querem escanear a informação rápido, sem precisar tocar
// em nada para "descobrir" o benefício.
export default function OrbitalBenefits({ timelineData }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4" data-testid="benefits-grid">
            {timelineData.map((item, index) => {
                const Icon = ICONS[item.icon];
                const isLast = index === timelineData.length - 1;
                const isOdd = timelineData.length % 2 === 1;
                return (
                    <div
                        key={item.id}
                        data-testid={`benefit-card-${item.id}`}
                        className={`
                            group flex flex-col gap-2.5 bg-[#141414] border border-neutral-800
                            hover:border-[#D4AF37]/60 active:border-[#D4AF37]/60
                            p-4 sm:p-5 transition-colors duration-300
                            ${isOdd && isLast ? "col-span-2 sm:col-span-1" : ""}
                        `}
                    >
                        <span className="w-10 h-10 shrink-0 flex items-center justify-center bg-red-600/15 border border-red-600/40 text-red-500 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors duration-300">
                            <Icon size={18} />
                        </span>
                        <h3 className="text-white font-semibold text-sm leading-tight">{item.title}</h3>
                        <p className="text-neutral-400 text-xs leading-relaxed">{item.content}</p>
                    </div>
                );
            })}
        </div>
    );
}
