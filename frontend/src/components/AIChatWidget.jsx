import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

export const AIChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Fala! Sou o assistente virtual do Rone Batista. Como posso ajudar com os treinos de Muay Thai ou Kickboxing?"
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
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            // Simulador funcional imediato (aqui depois ligaremos à IA real se quiseres)
            setTimeout(() => {
                let botResponse = "Para agendar uma aula ou tirar dúvidas sobre os planos, fala diretamente com o Rone pelo WhatsApp!";
                
                const lower = userMessage.toLowerCase();
                if (lower.includes("preço") || lower.includes("valor") || lower.includes("quanto") || lower.includes("plano")) {
                    botResponse = "Trabalhamos exclusivamente com planos mensais e aulas avulsas. Gostarias de ver os valores detalhados?";
                } else if (lower.includes("horário") || lower.includes("onde") || lower.includes("local") || lower.includes("aula")) {
                    botResponse = "As aulas são personalizadas e podem ser individuais, em duplas ou grupos, em ginásios, condomínios ou ao ar livre.";
                }

                setMessages((prev) => [...prev, { role: "assistant", content: botResponse }]);
                setIsLoading(false);
            }, 800);
        } catch (error) {
            setMessages((prev) => [...prev, { role: "assistant", content: "Erro de conexão. Podes chamar direto no WhatsApp!" }]);
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
                    <MessageSquare size={22} className="text-[#9C8674] group-hover:scale-110 transition-transform" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-terracota rounded-full animate-pulse" />
                </button>
            )}

            {isOpen && (
                <div className="w-[340px] sm:w-[380px] h-[480px] bg-[#141414] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                    <div className="bg-[#0D0D0D] px-4 py-3.5 border-b border-neutral-800 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-[#9C8674]/15 border border-[#9C8674]/40 flex items-center justify-center text-[#9C8674]">
                                <Sparkles size={16} />
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

                    <form onSubmit={handleSend} className="p-3 bg-[#0D0D0D] border-t border-neutral-800 flex items-center gap-2">
                       <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escreve a tua dúvida..."
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