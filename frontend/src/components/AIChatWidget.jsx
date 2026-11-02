import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { SITE_KNOWLEDGE } from "../data/siteContent";

// Componente SVG do Robô mapeado exatamente a partir da imagem enviada
const RobotIcon = ({ size = 22, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        stroke="currentColor"
        strokeWidth="36"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {/* Antena Esquerda */}
        <line x1="120" y1="180" x2="120" y2="90" />
        <circle cx="120" cy="70" r="24" fill="currentColor" />
        <rect x="96" y="180" width="48" height="110" rx="24" fill="none" />

        {/* Antena Direita */}
        <line x1="392" y1="180" x2="392" y2="90" />
        <circle cx="392" cy="70" r="24" fill="currentColor" />
        <rect x="368" y="180" width="48" height="110" rx="24" fill="none" />

        {/* Cabeça Principal */}
        <path d="M 120,290 C 120,160 170,110 256,110 C 342,110 392,160 392,290 L 392,340 C 392,390 350,420 256,420 C 162,420 120,390 120,340 Z" />

        {/* Visor Central */}
        <rect x="180" y="210" width="152" height="96" rx="48" fill="none" />

        {/* Olhos dentro do Visor */}
        <circle cx="226" cy="258" r="18" fill="currentColor" />
        <circle cx="286" cy="258" r="18" fill="currentColor" />
    </svg>
);

export const AIChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "E aí! Tudo bem? Sou o assistente do Rone Batista. Troca ideia comigo: o que estás a procurar nos treinos de Muay Thai ou Kickboxing?"
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
                let botResponse = "Com certeza! O foco aqui é alinhar o treino exato para o teu objetivo. Tens preferência por treinar em casa, num espaço ao ar livre ou num ginásio?";
                const lower = userMessage.toLowerCase();

                if (lower.includes("olá") || lower.includes("ola") || lower.includes("eae") || lower.includes("fala") || lower.includes("tudo bem")) {
                    botResponse = "Tudo ótimo por aqui! Conta-me: já tens alguma experiência com lutas ou estás a começar do zero?";
                } else if (lower.includes("preço") || lower.includes("valor") || lower.includes("quanto") || lower.includes("plano")) {
                    botResponse = "Trabalhamos exclusivamente com planos mensais e aulas avulsas, desenhados para garantir uma evolução contínua (o plano semanal foi descontinuado). Querias focar em treinos individuais ou em dupla?";
                } else if (lower.includes("onde") || lower.includes("local") || lower.includes("espaço") || lower.includes("atende") || lower.includes("bairro")) {
                    botResponse = "O atendimento é totalmente móvel e personalizado! O Rone desloca-se até ao teu condomínio, residência, praças/espaços ao ar livre ou ginásios parceiros. Qual é a tua zona?";
                } else if (lower.includes("iniciante") || lower.includes("nunca") || lower.includes("experiência") || lower.includes("zero")) {
                    botResponse = "Isso não é problema nenhum! Pelo contrário, começar do zero permite construir uma base técnica limpa e sem vícios. As aulas adaptam-se inteiramente ao teu ritmo.";
                } else if (lower.includes("estrutura") || lower.includes("como é") || lower.includes("aula") || lower.includes("funciona")) {
                    botResponse = "Cada aula é estruturada com aquecimento focado na mobilidade, parte técnica intensa de socos, chutes, joelhadas e cotoveladas (trabalho em manoplas e sacos), e um bloco final de condicionamento e alongamento. É puxado, mas muito gratificante!";
                } else if (lower.includes("pacote") || lower.includes("online")) {
                    botResponse = "Sim! Temos os Pacotes Online (Home Pack), ideais para quem quer seguir uma programação de treinos estruturada pelo Rone mesmo à distância.";
                } else if (lower.includes("agendar") || lower.includes("marcar") || lower.includes("quero") || lower.includes("fechar")) {
                    botResponse = "Excelente decisão! Para fecharmos o teu horário e acertarmos os detalhes finais, podes falar diretamente com o Rone no WhatsApp.";
                }

                setMessages((prev) => [...prev, { role: "assistant", content: botResponse }]);
                setIsLoading(false);
            }, 800);
        } catch (error) {
            setMessages((prev) => [...prev, { role: "assistant", content: "Tivemos um pequeno soluço na conexão. Podes repetir?" }]);
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
                    <RobotIcon size={26} className="text-[#9C8674] group-hover:scale-110 transition-transform" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-terracota rounded-full animate-pulse" />
                </button>
            )}

            {isOpen && (
                <div className="w-[340px] sm:w-[380px] h-[480px] bg-[#141414] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                    <div className="bg-[#0D0D0D] px-4 py-3.5 border-b border-neutral-800 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-[#9C8674]/15 border border-[#9C8674]/40 flex items-center justify-center text-[#9C8674]">
                                <RobotIcon size={20} />
                            </div>
                            <div>
                                <h3 className="text-cream font-display text-sm tracking-wide">Assistente Personal Fight</h3>
                                <span className="flex items-center gap-1.5 text-[10px] text-emerald-500 uppercase tracking-widest">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online
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
                                    className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
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

                    <form onSubmit={handleSend} className="p-3 bg-[#0D0D0D] border-t border-neutral-800 flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Manda a tua dúvida..."
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