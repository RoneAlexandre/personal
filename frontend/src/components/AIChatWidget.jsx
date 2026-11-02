import { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles } from "lucide-react";
import { SITE_KNOWLEDGE } from "../data/siteContent";
import { WHATSAPP_URL } from "../data/content";

// Componente SVG do Robô personalizado baseado no design enviado
const RobotIcon = ({ size = 22, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Cabeça do robô em formato de balão de fala */}
        <path d="M12 2a9 9 0 0 0-9 9c0 3.14 1.62 5.91 4.09 7.5L6 21l3.5-1.25C10.3 20.08 11.13 20.2 12 20.2a9 9 0 0 0 9-9 9 9 0 0 0-9-9z" />
        {/* Olhos */}
        <circle cx="9" cy="10" r="1.2" fill="currentColor" />
        <circle cx="15" cy="10" r="1.2" fill="currentColor" />
        {/* Sorriso */}
        <path d="M9.5 13.5c1 1 4 1 5 0" />
        {/* Antenas */}
        <line x1="7" y1="4.5" x2="7" y2="2" />
        <circle cx="7" cy="1.8" r="0.8" fill="currentColor" />
        <line x1="17" y1="4.5" x2="17" y2="2" />
        <circle cx="17" cy="1.8" r="0.8" fill="currentColor" />
    </svg>
);

export const AIChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Fala! Sou o assistente virtual do Rone Batista. Conheço todos os detalhes sobre os treinos de Muay Thai, Kickboxing, planos e locais. Como posso ajudar?"
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        
        const updatedMessages = [...messages, { role: "user", content: userMessage }];
        setMessages(updatedMessages);
        setIsLoading(true);

        try {
            setTimeout(() => {
                let botResponse = "Podes consultar todos os detalhes ou agendar diretamente comigo pelo WhatsApp!";
                const lower = userMessage.toLowerCase();

                const isAskingAboutPrice = lower.includes("preço") || lower.includes("valor") || lower.includes("quanto") || lower.includes("plano");
                const isAskingAboutLocation = lower.includes("onde") || lower.includes("local") || lower.includes("espaço") || lower.includes("atende") || lower.includes("bairro");

                if (isAskingAboutPrice) {
                    botResponse = "Trabalhamos exclusivamente com planos mensais e aulas avulsas (o plano semanal foi descontinuado). Gostarias de ver os valores detalhados pelo WhatsApp?";
                } else if (isAskingAboutLocation) {
                    botResponse = "As aulas são móveis e personalizadas: o Rone vai até ao teu condomínio, residência, espaço ao ar livre ou ginásio parceiro. Qual é a tua região?";
                } else if (lower.includes("iniciante") || lower.includes("nunca") || lower.includes("experiência")) {
                    botResponse = "Sim! Os treinos são totalmente adaptados para iniciantes e avançados, focando na tua evolução técnica e segurança.";
                } else if (lower.includes("estrutura") || lower.includes("como é") || lower.includes("aula")) {
                    botResponse = "A estrutura inclui aquecimento específico, técnica de Muay Thai/Kickboxing (manoplas/sacos), condicionamento físico e alongamento.";
                } else if (lower.includes("pacote") || lower.includes("online")) {
                    botResponse = "Temos disponíveis os Pacotes Online (Home Pack) para orientação de treinos à distância.";
                } else {
                    botResponse = "Com base nas diretrizes do Rone Batista Personal Fight, os treinos são focados na tua máxima performance técnica. Queres falar diretamente com ele no WhatsApp?";
                }

                setMessages((prev) => [...prev, { role: "assistant", content: botResponse }]);
                setIsLoading(false);
            }, 800);
        } catch (error) {
            setMessages((prev) => [...prev, { role: "assistant", content: "Ocorreu um erro de conexão. Podes chamar direto no WhatsApp!" }]);
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 font-sans">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Abrir chat de atendimento"
                    className="group relative flex items-center justify-center w-14 h-14 bg-[#141414] hover:bg-neutral-900 border border-neutral-800 hover:border-[#9C8674] text-cream rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
                >
                    <RobotIcon size={24} className="text-[#9C8674] group-hover:scale-110 transition-transform" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-terracota rounded-full animate-pulse" />
                </button>
            )}

            {isOpen && (
                <div className="w-[340px] sm:w-[380px] h-[480px] bg-[#141414] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                    <div className="bg-[#0D0D0D] px-4 py-3.5 border-b border-neutral-800 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-[#9C8674]/15 border border-[#9C8674]/40 flex items-center justify-center text-[#9C8674]">
                                <RobotIcon size={18} />
                            </div>
                            <div>
                                <h3 className="text-cream font-display text-sm tracking-wide">Assistente Personal Fight</h3>
                                <span className="flex items-center gap-1.5 text-[10px] text-emerald-500 uppercase tracking-widest">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Memória Ativa
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Fechar chat"
                            className="text-neutral-400 hover:text-cream transition-colors p-1"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-sm bg-[#121212]">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                                        msg.role === "user"
                                            ? "bg-[#9C8674] text-black font-medium rounded-br-none"
                                            : "bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-bl-none"
                                    }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-neutral-900 border border-neutral-800 px-4 py-3 rounded-xl rounded-bl-none flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                    <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                    <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="px-4 py-2 bg-[#0D0D0D]/60 border-t border-neutral-800/60 flex items-center justify-between text-xs">
                        <span className="text-neutral-400">Atendimento direto:</span>
                        <a
                            href={WHATSAPP_URL || "https://wa.me/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#9C8674] hover:underline font-semibold"
                        >
                            Chamar no WhatsApp &rarr;
                        </a>
                    </div>

                    <form onSubmit={handleSend} className="p-3 bg-[#0D0D0D] border-t border-neutral-800 flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Pergunta sobre os treinos..."
                            className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-base sm:text-sm text-cream placeholder-neutral-500 focus:outline-none focus:border-[#9C8674] transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            aria-label="Enviar mensagem"
                            className="bg-[#9C8674] hover:bg-[#857161] disabled:opacity-50 text-black p-2 rounded-lg transition-colors"
                        >
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};