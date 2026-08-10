export const WHATSAPP_NUMBER = "5515999999999"; // PLACEHOLDER — trocar pelo número real
export const INSTAGRAM_HANDLE = "ronebatista.muaythai"; // PLACEHOLDER — trocar pelo perfil real

const waText = encodeURIComponent(
    "Olá, Rone! Vi seu site e quero agendar uma aula particular de Muaythai.",
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const IMAGES = {
    hero: "https://images.unsplash.com/photo-1525680996651-0222228be6f0?q=80&w=1920&auto=format&fit=crop",
    about: "https://images.unsplash.com/photo-1773289337904-c8b3e110b9f1?q=80&w=1200&auto=format&fit=crop",
    gallery: [
        {
            url: "https://images.unsplash.com/photo-1561532325-7d5231a2dede?q=80&w=1200&auto=format&fit=crop",
            alt: "Luvas de boxe vermelhas em detalhe",
            span: "md:col-span-2 md:row-span-2",
        },
        {
            url: "https://images.unsplash.com/photo-1737381508529-a110d717d5a7?q=80&w=900&auto=format&fit=crop",
            alt: "Lutador no ringue em luz dramática",
            span: "",
        },
        {
            url: "https://images.unsplash.com/photo-1558366972-9db89881cbdb?q=80&w=900&auto=format&fit=crop",
            alt: "Combate de boxe em preto e branco",
            span: "",
        },
        {
            url: "https://images.unsplash.com/photo-1762336219284-a0a5488342a0?q=80&w=1200&auto=format&fit=crop",
            alt: "Dois lutadores treinando no ringue",
            span: "md:col-span-2",
        },
    ],
};

export const FORMATS = [
    {
        number: "01",
        title: "Presencial na Academia",
        description:
            "Treino individual em espaço estruturado em Itapeva-SP, com todo o material disponível: luvas, aparadores, saco de pancada e ringue.",
        includes: ["Aulas de 60 minutos", "Material de treino incluso", "Acompanhamento individual"],
    },
    {
        number: "02",
        title: "Presencial em Domicílio",
        description:
            "O treino vai até você. Atendimento na sua casa, condomínio ou espaço preferido, em Itapeva e região, com equipamentos levados pelo professor.",
        includes: ["Aulas de 60 minutos", "Equipamentos levados pelo professor", "Horários flexíveis"],
    },
    {
        number: "03",
        title: "Online ao Vivo",
        description:
            "Aulas particulares por videochamada, com correção de técnica em tempo real e plano de treino para você praticar onde estiver.",
        includes: ["Aulas de 50 minutos", "Correção técnica em tempo real", "Plano de treino semanal"],
    },
];

export const BENEFITS = [
    { icon: "Activity", title: "Condicionamento Físico", text: "Treinos intensos que elevam fôlego, força e explosão." },
    { icon: "Shield", title: "Autodefesa Real", text: "Técnicas eficientes da arte das oito armas para se proteger." },
    { icon: "Flame", title: "Queima de Gordura", text: "Até 800 calorias por sessão de alta intensidade." },
    { icon: "Brain", title: "Disciplina Mental", text: "Foco, constância e controle emocional dentro e fora do treino." },
    { icon: "HeartPulse", title: "Redução de Estresse", text: "Descarregue a tensão do dia a dia em cada golpe." },
];

const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const PRICING = {
    formats: [
        {
            id: "individual",
            label: "Individual",
            note: "100% focado em você",
            cta: "Quero treinar individual",
            waUrl: waLink("Olá, Rone! Quero montar meu plano individual de Muaythai."),
            rows: [
                { freq: "1x por semana", weekly: "R$ 60", monthly: "R$ 200", perClass: "R$ 50 por aula" },
                { freq: "2x por semana", weekly: "R$ 100", weeklyNote: "R$ 50 por aula", monthly: "R$ 360", perClass: "R$ 45 por aula" },
                { freq: "3x por semana", weekly: "R$ 135", weeklyNote: "R$ 45 por aula", monthly: "R$ 480", perClass: "R$ 40 por aula" },
            ],
        },
        {
            id: "dupla",
            label: "Dupla",
            note: "valor por pessoa",
            cta: "Quero treinar em dupla",
            waUrl: waLink("Olá, Rone! Quero montar um plano em dupla de Muaythai."),
            rows: [
                { freq: "1x por semana", weekly: "R$ 45", monthly: "R$ 160", perClass: "R$ 40 por aula" },
                { freq: "2x por semana", weekly: "R$ 80", weeklyNote: "R$ 40 por aula", monthly: "R$ 290", perClass: "R$ 36,25 por aula" },
                { freq: "3x por semana", weekly: "R$ 105", weeklyNote: "R$ 35 por aula", monthly: "R$ 380", perClass: "R$ 31,66 por aula" },
            ],
        },
        {
            id: "grupo",
            label: "Grupo 4–8",
            note: "valor por pessoa",
            cta: "Quero treinar em grupo",
            waUrl: waLink("Olá, Rone! Quero montar um plano em grupo de Muaythai."),
            rows: [
                { freq: "1x por semana", weekly: "R$ 35", monthly: "R$ 125" },
                { freq: "2x por semana", weekly: "R$ 30", monthly: "R$ 215" },
                { freq: "3x por semana", weekly: "R$ 25", monthly: "R$ 270" },
            ],
        },
    ],
    extras: [
        "Na academia ou na casa do aluno — em domicílio, + R$ 20 por aula",
        "Aluguel de equipamento (luvas e caneleiras): R$ 10 por aula",
        "Pague por semana ou feche o mês — o plano mensal sempre tem desconto",
    ],
};

export const TESTIMONIALS = [
    {
        name: "Marcos V.",
        role: "Aluno há 1 ano",
        quote: "Comecei do zero e o Rone me deu base, confiança e condicionamento. Melhor decisão que tomei.",
    },
    {
        name: "Juliana R.",
        role: "Aluna online",
        quote: "Mesmo online, a correção de técnica é impressionante. Perdi 8kg em quatro meses de treino.",
    },
    {
        name: "Felipe A.",
        role: "Aulas em domicílio",
        quote: "Treino em casa com horário flexível. A disciplina que aprendi no Muaythai mudou minha rotina.",
    },
    {
        name: "Camila T.",
        role: "Aluna na academia",
        quote: "Ambiente respeitoso e treino desafiador. O Rone cobra na medida certa e celebra cada evolução.",
    },
];

export const FAQ_ITEMS = [
    {
        q: "Preciso ter experiência prévia em luta?",
        a: "Não. As aulas particulares atendem do iniciante absoluto ao avançado. O treino é montado de acordo com o seu nível e evolui no seu ritmo, com progressão segura de técnica e intensidade.",
    },
    {
        q: "Como funcionam as aulas online?",
        a: "As aulas online acontecem ao vivo por videochamada (Google Meet ou WhatsApp). Você precisa apenas de um espaço pequeno, celular ou notebook posicionado e, se tiver, luvas. A correção técnica é feita em tempo real.",
    },
    {
        q: "Você atende em domicílio em toda Itapeva?",
        a: "Sim, atendo em todos os bairros de Itapeva-SP e também em cidades vizinhas da região, mediante agendamento. Entre em contato pelo WhatsApp para confirmar a disponibilidade para o seu endereço.",
    },
    {
        q: "O que preciso levar para a primeira aula?",
        a: "Apenas roupas confortáveis, água e vontade de treinar. Nas aulas presenciais na academia, todo o equipamento (luvas, caneleiras e aparadores) está disponível. Nas aulas em domicílio, o professor leva o material.",
    },
    {
        q: "Com quantas aulas por semana eu vejo resultado?",
        a: "Com 2 a 3 sessões semanais, a maioria dos alunos sente diferença no condicionamento e na disposição já no primeiro mês. Resultados de técnica e composição corporal aparecem de forma consistente a partir de 8 a 12 semanas.",
    },
];
