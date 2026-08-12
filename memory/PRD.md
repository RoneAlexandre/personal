# PRD — Rone Batista | Aulas Particulares de Muaythai (Itapeva-SP)

## Problem Statement (original)
Landing page (vitrine) para Rone Batista, professor particular de Muaythai em Itapeva-SP, com objetivo de apresentar o trabalho e converter visitantes em alunos. Estilo: moderno, esportivo/marcial, tons escuros (preto, vermelho, dourado, cinza-chumbo), tipografia forte, contraste alto, sensação de disciplina e energia. Seções: Hero, Sobre, Formatos de aula (presencial academia / domicílio / online), Benefícios, Planos com "[valor]" placeholder, Depoimentos, Galeria, FAQ, CTA final WhatsApp + Instagram. Requisitos técnicos: responsivo mobile-first, botão flutuante de WhatsApp, scroll reveal, SEO local ("Muaythai Itapeva").

## Arquitetura
- Duas versões do mesmo site:
  1. **React** (preview ao vivo): `/app/frontend/` — React 19 + Tailwind + Framer Motion + Lenis. Conteúdo centralizado em `/app/frontend/src/data/content.js`.
  2. **Estática HTML/CSS/JS puros** (pedida pelo usuário para edição manual): `/app/site/` — `index.html` + `css/styles.css` (mobile-first) + `js/script.js` + `README.md` com guia de edição. Sem frameworks; FAQ usa `<details>` nativo; reveal via IntersectionObserver.
- Sem backend necessário para o MVP.

## User Personas
- Visitante de Itapeva-SP buscando aula particular de luta (iniciante ou avançado), acessando majoritariamente pelo celular.
- Rone Batista (dono): precisa trocar placeholders (número, Instagram, preços, fotos) facilmente.

## Core Requirements (estáticos)
- Hero com nome, frase de impacto e CTA WhatsApp
- 3 formatos de aula explicados; benefícios com ícones; planos com "[valor]"
- Depoimentos, galeria, FAQ, CTA final; botão flutuante WhatsApp; SEO local

## Implementado (2026-08-06)
- (2026-08-13) 8 melhorias na versão estática (index.html do usuário já continha edições manuais: WhatsApp real 5515996984251, hero "PERSONAL FIGHT", 2 formatos, depoimentos reais): carrossel Trajetória (#trajetoria), banner Formação de Atletas no Sobre, selo "Promoção" via CSS ::before em .cell.best, nota "valores por pessoa" nos painéis dupla/grupo, banner "escolha a data do pagamento" (.pay-banner), h1 "Valores Adicionais" formatado, seção Política de Remarcação (#regras), teaser Pack "Treine em Casa" (#treine-em-casa, "Em breve" + CTA WhatsApp). (2026-08-12) Seção Benefícios substituída por linha do tempo orbital (componente radial-orbital-timeline do 21st.dev adaptado para JSX, cores vermelho/dourado, dados em ORBITAL_BENEFITS no content.js, raio responsivo). Carrosséis com auto-scroll lento (useAutoScroll em Reveal.jsx), filtros minimalistas na trajetória, menu hambúrguer mobile na Navbar. (2026-08-13) Versão React (/app/frontend) totalmente sincronizada com todas as edições manuais do usuário (WhatsApp real, hero PERSONAL FIGHT, 2 formatos, depoimentos reais) + as 8 melhorias (componentes novos Journey/Policy/HomePack, athletes banner, promo badge, per-person, pay banner). A pasta /app/site ficou congelada a pedido do usuário — o preview exibe a versão React.
- Landing page completa com todas as 9 seções pedidas, em pt-BR
- Direção de arte dark premium: obsidiana #0A0A0A, vermelho #DC2626, dourado #D4AF37; Bebas Neue + Barlow
- Hero com reveal mascarado linha a linha (nome em outline), parallax na imagem de fundo, estatísticas
- Marquee editorial lenta (Disciplina • Respeito • Força...)
- Sobre em capítulos numerados (01 Formação, 02 Experiência, 03 Filosofia) com foto emoldurada em dourado
- Scroll reveal com Framer Motion em todas as seções; scroll suave com Lenis
- Botão flutuante de WhatsApp com animação de pulso; CTAs apontando para wa.me com mensagem pré-preenchida
- FAQ em acordeão (shadcn), planos com card mensal destacado em dourado, galeria em grid tetris com hover
- SEO local: title, description, keywords, Open Graph, lang pt-BR
- (2026-08-06) Versão estática HTML/CSS/JS mobile-first em `/app/site/`, com guia de edição (README.md) e comentários no HTML para troca de WhatsApp, Instagram, preços e fotos. Verificada em desktop e mobile (menu hamburger, FAQ, CTAs).

## Placeholders pendentes (MOCKED — trocar em /app/frontend/src/data/content.js)
- WhatsApp: 5515999999999 (placeholder)
- Instagram: @ronebatista.muaythai (placeholder)
- Preços: "[valor]" nos 3 planos
- Fotos: stock do Unsplash (hero, sobre, galeria) — trocar por fotos reais
- Depoimentos: textos de exemplo com avatares de iniciais

## Backlog priorizado
- P0: Inserir número real de WhatsApp, Instagram real e valores dos planos
- P0: Substituir fotos de stock pelas fotos reais do professor/treinos
- P1: Fotos reais nos depoimentos; adicionar vídeo curto na galeria
- P2: Formulário de lead com fallback para WhatsApp; Google Business/Schema.org LocalBusiness

## Próximas tarefas
1. Receber credenciais/dados reais do Rone e atualizar content.js
2. Subir fotos reais (object storage) e plugar na galeria/sobre
