import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap, Activity, Shield, Flame, Brain, HeartPulse } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ICONS = { Activity, Shield, Flame, Brain, HeartPulse };

// Duração de uma volta completa da órbita (segundos). A rotação é feita via
// CSS (animação no compositor/GPU do navegador) em vez de recalculada a cada
// frame em JS — muito mais fluida e leve, especialmente no mobile.
const ROTATION_DURATION = 60;

export default function OrbitalBenefits({ timelineData }) {
    const [expandedItems, setExpandedItems] = useState({});
    const [isPaused, setIsPaused] = useState(false);
    const [pulseEffect, setPulseEffect] = useState({});
    const [activeNodeId, setActiveNodeId] = useState(null);
    const [radius, setRadius] = useState(200);
    const containerRef = useRef(null);
    const resumeTimer = useRef(null);

    useEffect(() => {
        const update = () => {
            if (containerRef.current) {
                setRadius(Math.min(200, containerRef.current.clientWidth / 2 - 60));
            }
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => () => clearTimeout(resumeTimer.current), []);

    const scheduleResume = () => {
        clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => setIsPaused(false), 2000);
    };

    const handleContainerClick = (e) => {
        if (e.target.closest("[data-node]")) return;
        setExpandedItems({});
        setActiveNodeId(null);
        setPulseEffect({});
        scheduleResume();
    };

    const toggleItem = (id) => {
        setExpandedItems((prev) => {
            const newState = { ...prev };
            Object.keys(newState).forEach((key) => {
                if (parseInt(key) !== id) newState[parseInt(key)] = false;
            });
            newState[id] = !prev[id];

            if (!prev[id]) {
                setActiveNodeId(id);
                clearTimeout(resumeTimer.current);
                setIsPaused(true);
                const relatedItems = getRelatedItems(id);
                const newPulseEffect = {};
                relatedItems.forEach((relId) => (newPulseEffect[relId] = true));
                setPulseEffect(newPulseEffect);
            } else {
                setActiveNodeId(null);
                scheduleResume();
                setPulseEffect({});
            }
            return newState;
        });
    };

    const getRelatedItems = (itemId) => {
        const currentItem = timelineData.find((item) => item.id === itemId);
        return currentItem ? currentItem.relatedIds : [];
    };

    const isRelatedToActive = (itemId) => {
        if (!activeNodeId) return false;
        return getRelatedItems(activeNodeId).includes(itemId);
    };

    const getStatusStyles = (status) => {
        switch (status) {
            case "completed":
                return "text-white bg-red-600 border-red-600";
            case "in-progress":
                return "text-black bg-[#D4AF37] border-[#D4AF37]";
            default:
                return "text-white bg-transparent border-white/40";
        }
    };

    const total = timelineData.length;

    return (
        <div
            className="w-full h-[540px] sm:h-[620px] flex flex-col items-center justify-center overflow-hidden"
            ref={containerRef}
            onClick={handleContainerClick}
            data-testid="orbital-benefits"
        >
            <style>{`
                @keyframes orbital-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes orbital-spin-reverse {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                .orbital-rotator {
                    animation: orbital-spin ${ROTATION_DURATION}s linear infinite;
                    will-change: transform;
                }
                .orbital-counter {
                    animation: orbital-spin-reverse ${ROTATION_DURATION}s linear infinite;
                    will-change: transform;
                }
                .orbital-paused {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                <div
                    className="absolute rounded-full border border-white/10"
                    style={{ width: radius * 2, height: radius * 2 }}
                ></div>

                <div
                    className={`absolute w-full h-full flex items-center justify-center orbital-rotator ${isPaused ? "orbital-paused" : ""}`}
                >
                    {timelineData.map((item, index) => {
                        const baseAngle = (index / total) * 360;
                        const isExpanded = expandedItems[item.id];
                        const isRelated = isRelatedToActive(item.id);
                        const isPulsing = pulseEffect[item.id];
                        const Icon = ICONS[item.icon];

                        return (
                            <div
                                key={item.id}
                                className="absolute"
                                style={{ transform: `rotate(${baseAngle}deg) translateX(${radius}px)` }}
                            >
                                <div
                                    data-node="true"
                                    data-testid={`benefit-node-${item.id}`}
                                    className={`orbital-counter cursor-pointer ${isPaused ? "orbital-paused" : ""}`}
                                    style={{ zIndex: isExpanded ? 200 : 100 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleItem(item.id);
                                    }}
                                >
                                    <div
                                        className="relative transition-transform duration-300"
                                        style={{
                                            transform: `translate(-50%, -50%) rotate(${-baseAngle}deg) scale(${isExpanded ? 1.15 : 1})`,
                                        }}
                                    >
                                        <div
                                            className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""}`}
                                            style={{
                                                background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0) 70%)",
                                                width: `${item.energy * 0.5 + 40}px`,
                                                height: `${item.energy * 0.5 + 40}px`,
                                                left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                                top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                            }}
                                        ></div>

                                        <div
                                            className={`
                                            w-10 h-10 rounded-full flex items-center justify-center border-2
                                            transition-all duration-300
                                            ${isExpanded ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg shadow-[#D4AF37]/30"
                                                : isRelated ? "bg-red-600/60 text-white border-red-500 animate-pulse"
                                                : "bg-[#141414] text-white border-red-600/50"}
                                            `}
                                        >
                                            <Icon size={16} />
                                        </div>

                                        <div
                                            className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300
                                            ${isExpanded ? "text-[#D4AF37] scale-125" : "text-white/70"}`}
                                        >
                                            {item.title}
                                        </div>

                                        {isExpanded && (
                                            <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border-[#D4AF37]/40 shadow-xl shadow-black/50 overflow-visible">
                                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[#D4AF37]/50"></div>
                                                <CardHeader className="pb-2">
                                                    <div className="flex justify-between items-center">
                                                        <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>
                                                            {item.category}
                                                        </Badge>
                                                        <span className="text-xs font-mono text-white/50">{item.date}</span>
                                                    </div>
                                                    <CardTitle className="text-sm mt-2 text-white">{item.title}</CardTitle>
                                                </CardHeader>
                                                <CardContent className="text-xs text-white/80">
                                                    <p>{item.content}</p>

                                                    <div className="mt-4 pt-3 border-t border-white/10">
                                                        <div className="flex justify-between items-center text-xs mb-1">
                                                            <span className="flex items-center">
                                                                <Zap size={10} className="mr-1 text-[#D4AF37]" />
                                                                Intensidade
                                                            </span>
                                                            <span className="font-mono">{item.energy}%</span>
                                                        </div>
                                                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-full bg-gradient-to-r from-red-600 to-[#D4AF37]"
                                                                style={{ width: `${item.energy}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>

                                                    {item.relatedIds.length > 0 && (
                                                        <div className="mt-4 pt-3 border-t border-white/10">
                                                            <div className="flex items-center mb-2">
                                                                <Link size={10} className="text-white/70 mr-1" />
                                                                <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
                                                                    Relacionados
                                                                </h4>
                                                            </div>
                                                            <div className="flex flex-wrap gap-1">
                                                                {item.relatedIds.map((relatedId) => {
                                                                    const relatedItem = timelineData.find((i) => i.id === relatedId);
                                                                    return (
                                                                        <Button
                                                                            key={relatedId}
                                                                            variant="outline"
                                                                            size="sm"
                                                                            className="flex items-center h-6 px-2 py-0 text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 hover:border-[#D4AF37]/60 text-white/80 hover:text-white transition-all"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                toggleItem(relatedId);
                                                                            }}
                                                                        >
                                                                            {relatedItem?.title}
                                                                            <ArrowRight size={8} className="ml-1 text-[#D4AF37]/70" />
                                                                        </Button>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
