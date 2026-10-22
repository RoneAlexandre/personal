import React from "react";
import { Check, ShieldCheck, Zap } from "lucide-react";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-[#0A0A0A] text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#99602B] font-semibold uppercase tracking-wider text-sm block mb-3">
                        Investimento e Planos
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Escolha o formato ideal para a sua evolução
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg">
                        Compromisso com a sua performance, disciplina e resultados reais no Muay Thai e Kickboxing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Plano Mensal */}
                    <div className="bg-[#121212] border-2 border-[#99602B] rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#99602B] text-white text-xs uppercase font-bold py-1 px-4 rounded-full tracking-wider">
                            Mais Popular & Consistência
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-4 mt-2">
                                <h3 className="text-2xl font-bold">Plano Mensal</h3>
                                <Zap className="text-[#99602B] w-6 h-6" />
                            </div>
                            <p className="text-gray-400 text-sm mb-6">
                                Foco total na evolução contínua, condicionamento físico e aperfeiçoamento técnico.
                            </p>
                            <div className="mb-6">
                                <span className="text-4xl font-extrabold">Sob Consulta</span>
                                <span className="text-gray-400 text-sm block mt-1">Pacote mensal estruturado</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-sm text-gray-300">
                                <li className="flex items-center gap-2">
                                    <Check className="text-[#99602B] w-4 h-4 shrink-0" /> Aulas presenciais personalizadas
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="text-[#99602B] w-4 h-4 shrink-0" /> Anamnese e acompanhamento de evolução
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="text-[#99602B] w-4 h-4 shrink-0" /> Flexibilidade de horários e locais
                                </li>
                            </ul>
                        </div>
                        <a
                            href="https://wa.me/55..."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#99602B] hover:bg-[#7d4e22] text-white text-center font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg"
                        >
                            Garantir Vaga Mensal
                        </a>
                    </div>

                    {/* Aula Avulsa */}
                    <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 flex flex-col justify-between transition-all hover:border-neutral-700">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold">Aula Avulsa</h3>
                                <ShieldCheck className="text-gray-400 w-6 h-6" />
                            </div>
                            <p className="text-gray-400 text-sm mb-6">
                                Ideal para testar a metodologia, ajustar detalhes técnicos ou treinar pontualmente.
                            </p>
                            <div className="mb-6">
                                <span className="text-4xl font-extrabold">Avulsa</span>
                                <span className="text-gray-400 text-sm block mt-1">Sessão única intensiva</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-sm text-gray-300">
                                <li className="flex items-center gap-2">
                                    <Check className="text-gray-500 w-4 h-4 shrink-0" /> Treino focado em manoplas/técnica
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="text-gray-500 w-4 h-4 shrink-0" /> Sessão de alta intensidade
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="text-gray-500 w-4 h-4 shrink-0" /> Agendamento conforme disponibilidade
                                </li>
                            </ul>
                        </div>
                        <a
                            href="https://wa.me/55..."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-neutral-800 hover:bg-neutral-700 text-white text-center font-bold py-3 px-6 rounded-xl transition-all duration-300"
                        >
                            Agendar Aula Avulsa
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}