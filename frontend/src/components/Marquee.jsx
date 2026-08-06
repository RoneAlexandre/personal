const WORDS = ["Disciplina", "Respeito", "Força", "Tradição", "Muaythai", "Foco", "Coragem", "Evolução"];

export const Marquee = () => (
    <div
        data-testid="marquee"
        className="relative border-y border-neutral-800 bg-[#0D0D0D] py-5 overflow-hidden select-none"
        aria-hidden="true"
    >
        <div className="flex w-max animate-marquee">
            {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0">
                    {WORDS.map((w) => (
                        <span key={`${dup}-${w}`} className="flex items-center">
                            <span className="font-display text-2xl sm:text-3xl uppercase tracking-widest text-neutral-500 px-6">
                                {w}
                            </span>
                            <span className="text-red-600 text-xl">✦</span>
                        </span>
                    ))}
                </div>
            ))}
        </div>
    </div>
);
