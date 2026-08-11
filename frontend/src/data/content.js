export const WHATSAPP_NUMBER = "5515996984251";
export const INSTAGRAM_HANDLE = "ronebatista.muaythai";

const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WHATSAPP_URL = waLink("Olá, Rone! Vi seu site e quero agendar uma aula particular de Muaythai.");
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const IMAGES = {
    hero: "https://images.unsplash.com/photo-1525680996651-0222228be6f0?q=80&w=1920&auto=format&fit=crop",
    about: "https://images.unsplash.com/photo-1773289337904-c8b3e110b9f1?q=80&w=1200&auto=format&fit=crop",
    journey: [
        { url: "https://images.unsplash.com/photo-1773289337904-c8b3e110b9f1?q=80&w=800&auto=format&fit=crop", caption: "Treino com aparadores", cat: "aulas" },
        { url: "https://images.unsplash.com/photo-1525680996651-0222228be6f0?q=80&w=800&auto=format&fit=crop", caption: "Dia de luta", cat: "lutas" },
        { url: "https://images.unsplash.com/photo-1762336219284-a0a5488342a0?q=80&w=800&auto=format&fit=crop", caption: "Seminários e cursos", cat: "seminarios" },
        { url: "https://images.unsplash.com/photo-1737381508529-a110d717d5a7?q=80&w=800&auto=format&fit=crop", caption: "Preparação no ringue", cat: "lutas" },
        { url: "https://images.unsplash.com/photo-1558366972-9db89881cbdb?q=80&w=800&auto=format&fit=crop", caption: "Competição", cat: "lutas" },
        { url: "https://images.unsplash.com/photo-1561532325-7d5231a2dede?q=80&w=800&auto=format&fit=crop", caption: "Aulas em Itapeva", cat: "aulas" },
    ],
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
];

export const BENEFITS = [
    { icon: "Activity", title: "Condicionamento Físico", text: "Treinos intensos que elevam fôlego, força e resistência." },
    { icon: "Shield", title: "Autodefesa Real", text: "Técnicas eficientes para se proteger em caso de necessidade." },
    { icon: "Flame", title: "Queima de Gordura", text: "Até 1200 calorias por treino de alta intensidade." },
    { icon: "Brain", title: "Disciplina Mental", text: "Foco, constância e controle emocional dentro e fora do tatâme." },
    { icon: "HeartPulse", title: "Redução de Estresse", text: "Descarregue a tensão do dia a dia em cada golpe." },
];

export const PRICING = {
    subtitle: "Planos semanais ou mensais · Individual, Dupla ou Grupos",
    formats: [
        {
            id: "individual",
            label: "Individual",
            note: "100% focado em você",
            perPerson: false,
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
            perPerson: true,
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
            perPerson: true,
            cta: "Quero treinar em grupo",
            waUrl: waLink("Olá, Rone! Quero montar um plano em grupo de Muaythai."),
            rows: [
                { freq: "1x por semana", weekly: "R$ 35", monthly: "R$ 125" },
                { freq: "2x por semana", weekly: "R$ 30", monthly: "R$ 215" },
                { freq: "3x por semana", weekly: "R$ 25", monthly: "R$ 270" },
            ],
        },
    ],
    extrasTitle: "Valores Adicionais",
    extras: [
        { icon: "Home", text: "Aulas a domicílio ou em espaços públicos:", price: "R$ 20 por aula" },
        { icon: "Dumbbell", text: "Aluguel de equipamento (bandagem, luvas e caneleiras):", price: "R$ 10 por aula" },
    ],
};

export const POLICY = [
    { icon: "Clock", title: "Avise com antecedência", text: "Para desmarcar, avise pelo WhatsApp com pelo menos 12 horas de antecedência." },
    { icon: "CalendarCheck", title: "Remarcação sem custo", text: "Aulas desmarcadas no prazo podem ser remarcadas sem custo dentro do mesmo mês." },
    { icon: "AlertTriangle", title: "Falta sem aviso", text: "A aula que não for desmarcada no prazo é computada como realizada no plano." },
    { icon: "Timer", title: "Atrasos", text: "Tolerância de 15 minutos. Após esse período, a aula pode ser encurtada ou remarcada." },
];

export const HOMEPACK = {
    waUrl: waLink("Olá, Rone! Quero ser avisado do lançamento do Pack Treine em Casa."),
    packs: [
        {
            name: "Pack Iniciante",
            description: "Fundamentos: postura, guarda, socos e chutes básicos para começar do zero em casa.",
            price: "[valor]",
            buyUrl: "",
            includes: ["4 semanas de treino", "Vídeos de apoio", "Progressão semanal"],
        },
        {
            name: "Pack Condicionamento",
            description: "Treinos físicos intensos: queima de gordura, explosão e resistência sem equipamento.",
            price: "[valor]",
            buyUrl: "",
            includes: ["4 semanas de treino", "Circuitos em casa", "Tabela de evolução"],
        },
        {
            name: "Pack Completo",
            description: "Técnica + condicionamento: o programa completo de Muaythai para treinar em casa.",
            price: "[valor]",
            buyUrl: "",
            includes: ["8 semanas de treino", "Sequências de golpes", "Suporte via WhatsApp"],
        },
    ],
};

export const TESTIMONIALS = [
    {
        name: "Gabriel M.",
        role: "Aluno há 6 anos",
        quote: "Comecei do zero e o Rone me deu base, confiança e condicionamento. Melhor decisão que tomei.",
    },
    {
        name: "Diogo A.",
        role: "Aluno online",
        quote: "Mesmo online, a correção de técnica é impressionante. Perdi 8kg em quatro meses de treino.",
    },
    {
        name: "Jamil",
        role: "Aulas em domicílio",
        quote: "Treino em casa com horário flexível. A disciplina que aprendi no Muaythai mudou minha rotina.",
    },
    {
        name: "André",
        role: "Aluno na academia",
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
