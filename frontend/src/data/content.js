import fotoAbout from '../assets/foto01.webp';
import estruturaFoto from '../assets/estrutura.jpg';

export const WHATSAPP_NUMBER = "5515996984251";
export const INSTAGRAM_HANDLE = "treinador_rone";

const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WHATSAPP_URL = waLink("Olá, Rone! Vi seu site e gostaria de saber mais sobre o seu trabalho.");
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const IMAGES = {
    hero: estruturaFoto, 
    about: fotoAbout,
    journey: [
        { url: "https://images.unsplash.com/photo-1773289337904-c8b3e110b9f1?q=80&w=800&auto=format&fit=crop", caption: "Treino com aparadores", description: "[Sua descrição aqui]", cat: "treinos" },
        { url: "https://images.unsplash.com/photo-1525680996651-0222228be6f0?q=80&w=800&auto=format&fit=crop", caption: "Dia de luta", description: "[Sua descrição aqui]", cat: "lutas" },
        { url: "https://images.unsplash.com/photo-1762336219284-a0a5488342a0?q=80&w=800&auto=format&fit=crop", caption: "Seminários e cursos", description: "[Sua descrição aqui]", cat: "seminarios" },
        { url: "https://images.unsplash.com/photo-1737381508529-a110d717d5a7?q=80&w=800&auto=format&fit=crop", caption: "Preparação no ringue", description: "[Sua descrição aqui]", cat: "lutas" },
        { url: "https://images.unsplash.com/photo-1558366972-9db89881cbdb?q=80&w=800&auto=format&fit=crop", caption: "Competição", description: "[Sua descrição aqui]", cat: "lutas" },
        { url: "https://images.unsplash.com/photo-1561532325-7d5231a2dede?q=80&w=800&auto=format&fit=crop", caption: "Aulas em Itapeva", description: "[Sua descrição aqui]", cat: "treinos" },
    ],
    gallery: [
        {
            url: estruturaFoto,
            alt: "Estrutura de treino",
            step: "Aquecimento",
            span: "md:col-span-2 md:row-span-2",
        },
        {
            url: estruturaFoto,
            alt: "Estrutura de treino",
            step: "Alongamento",
            span: "",
        },
        {
            url: estruturaFoto,
            alt: "Estrutura de treino",
            step: "Aquecimento técnico",
            span: "",
        },
        {
            url: estruturaFoto,
            alt: "Estrutura de treino",
            step: "Técnica",
            span: "",
        },
        {
            url: estruturaFoto,
            alt: "Estrutura de treino",
            step: "Sparring",
            span: "",
        },
    ],
};
export const FORMATS = [
    {
        number: "01",
        title: "Academia",
        description:
            "Treinamento em um espaço preparado com estrutura completa. Variedade de estímulos em um ambiente dinâmico focado no seu desenvolvimento físico e técnico.",
        includes: ["Aulas de 60 minutos", "Estrutura completa", "Treino dinâmico e focado em seu objetivo"],
    },
    {
        number: "02",
        title: "Domicílio ou Local Público",
        description:
            "Atendimento exclusivo com máxima comodidade. Levo a experiência do Muay Thai até a sua residência, condomínio, parque ou local de preferência, sem que precise se preocupar com transporte.",
        includes: ["Aulas de 60 minutos", "Locais flexíveis", "Treino dinâmico e focado em seu objetivo"],
    },
];

export const BENEFITS = [
    { icon: "Activity", title: "Condicionamento Físico", text: "Treinos intensos que elevam fôlego, força e resistência." },
    { icon: "Shield", title: "Autodefesa Real", text: "Técnicas eficientes para se proteger em caso de necessidade." },
    { icon: "Flame", title: "Queima de Gordura", text: "Até 1200 calorias por treino de alta intensidade." },
    { icon: "Brain", title: "Disciplina Mental", text: "Foco, constância e controle emocional dentro e fora do tatâme." },
    { icon: "HeartPulse", title: "Redução de Estresse", text: "Descarregue a tensão do dia a dia em cada golpe." },
    { icon: "Moon", title: "Melhoria do Sono", text: "Tenha uma melhor noite de sono desde a primeira aula." },
];

export const PRICING = {
    subtitle: "Descubra o plano ideal para você",
    formats: [
        {
            id: "individual",
            label: "Individual",
            perPerson: false,
            cta: "Quero treinar individual",
            waUrl: waLink("Olá, Rone! Quero montar meu plano individual de Muay Thai."),
            rows: [
                { freq: "1x por semana", price: "R$ 240", perClass: "R$ 60 por aula" },
                { freq: "2x por semana", price: "R$ 440", perClass: "R$ 55 por aula" },
                { freq: "3x por semana", price: "R$ 600", perClass: "R$ 50 por aula" },
            ],
        },
        {
            id: "dupla",
            label: "Dupla",
            perPerson: true,
            cta: "Quero treinar em dupla",
            waUrl: waLink("Olá, Rone! Quero montar um plano em dupla de Muay Thai."),
            rows: [
                { freq: "1x por semana", price: "R$ 180", perClass: "R$ 45 por aula" },
                { freq: "2x por semana", price: "R$ 320", perClass: "R$ 40 por aula" },
                { freq: "3x por semana", price: "R$ 420", perClass: "R$ 35 por aula" },
            ],
        },
        {
            id: "grupo",
            label: "Grupo 4–8",
            perPerson: true,
            cta: "Quero treinar em grupo",
            waUrl: waLink("Olá, Rone! Quero montar um plano em grupo de Muay Thai."),
            rows: [
                { freq: "1x por semana", price: "R$ 130", perClass: "R$ 32,50 por aula" },
                { freq: "2x por semana", price: "R$ 220", perClass: "R$ 27,50 por aula" },
                { freq: "3x por semana", price: "R$ 280", perClass: "R$ 23,33 por aula" },
            ],
        },
    ],
    dropIn: "R$ 70",
    extrasTitle: "Valores Adicionais",
   extras: [
        { icon: "Home", text: "Aulas a domicílio", price: "R$ 20 por aula" },
        { icon: "Dumbbell", text: "Aluguel de equipamentos", price: "R$ 10 por aula" },
    ],
};

export const HOME_PACKS = [
    {
        waUrl: waLink("Olá, Rone! Quero ser avisado do lançamento do Pack Treine em Casa."),
        title: 'Pack: Treine em Casa',
        description:
            "Um E-book de treinos físicos completos para fazer em casa, no seu ritmo e para o seu nível.",
        includes: [    
            "Condicionamento físico sem equipamento",
            "Movimentos de luta junto aos exercícios",
            "Exercícios para realizar em qualquer lugar",
            "Sequências de treinos com progressão diária",
            "Treino físico para auxiliar seu treino de luta",
        ],
    },
    {
        waUrl: waLink("Olá, Rone! Quero ser avisado do lançamento do Pack Muay Thai do Zero."),
        title: 'Pack: Muay Thai do Zero',
        description:
            "Video aulas para você aprender muay thai, do primeiro contato ao nível avançado, sem sair de casa.",
        includes: [
            "Os pilares do Muay Thai",
            "Trabalho de movimentação e efetividade",
            "Da base à golpes avançados, passo a passo",
            "Sequências técnicas para praticar sozinho",
            "Fundamentos para treinar em qualquer lugar",
        ],
    }
];

export const HOMEPACK = HOME_PACKS[0];

export const TESTIMONIALS = [
     {
        name: "Nome",
        role: "Subtítulo",
        quote: "Depoimento",
    },    
    {
        name: "André",
        role: "Aulas em domicílio",
        quote: "###",
    },
     {
        name: "Vitor",
        role: "Treino individual",
        quote: "Ta sendo uma experiência muito boa, as aulas estão sendo ótimas, estou gostando demais!",
    },
     {
        name: "Mariana",
        role: "Aulas em domicílio",
        quote: "###",
    },
     {
        name: "Rosilma",
        role: "Atleta de competição",
        quote: "Minha experiência durante as aulas foi muito boa. Aprendi bastante, evoluí não só tecnicamente, mas também na disciplina, na confiança e na superação dos meus próprios limites. A dedicação, a paciência e o incentivo durante os treinos fizeram toda a diferença para mim. Sou grata por cada ensinamento e por todo o incentivo para continuar evoluindo e acreditando no meu potencial.",
    },
     {
        name: "Matheus",
        role: "Treino em grupo",
        quote: "Irmão, antes das aulas eu já tinha uma noção básica sobre luta, porém não sentia tanta segurança se precisasse entrar em combate. Depois das suas aulas eu me sinto seguro e tranquilo tanto se for para lutar ou se for em caso de defesa pessoal! Com certeza você mudou a minha mentalidade e ampliou minhas técnicas.",
    },
];

export const FAQ_ITEMS = [
    {
        q: "Preciso ter experiência prévia em luta?",
        a: "Não. As aulas particulares atendem do iniciante ao avançado. O treino é montado de acordo com o seu nível e evolui no seu ritmo, com progressão de técnica e intensidade.",
    },
    {
        q: "Você atende em domicílio em toda Itapeva?",
        a: "Sim, atendo em todos os bairros de Itapeva, mediante agendamento. Entre em contato para confirmar a disponibilidade de dias e horários.",
    },
    {
        q: "O que preciso levar para a primeira aula?",
        a: "Apenas roupas confortáveis e garrafa de água. Nas aulas na academia, contamos com equipamentos de uso compartilhado (luvas e caneleiras). Nas aulas em domicílio, é cobrada uma taxa referente ao aluguel dos equipamentos (luvas, bandagem e caneleiras de uso pessoal e higienizados).",
    },
];