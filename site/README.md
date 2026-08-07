# Site Rone Batista — Versão HTML/CSS/JS

Versão estática (sem frameworks) da landing page. Basta abrir o `index.html` no navegador
ou subir a pasta inteira para qualquer hospedagem (Netlify, Vercel, Hostinger, GitHub Pages etc.).

## Estrutura

```
site/
├── index.html      → todo o conteúdo e textos da página
├── css/styles.css  → todo o visual (cores, fontes, tamanhos, responsivo)
└── js/script.js    → menu mobile, animações ao rolar, parallax do topo
```

## Como editar (guia rápido)

Abra o `index.html` em qualquer editor de texto e use Ctrl+F:

| O que trocar | Buscar por |
|---|---|
| Número do WhatsApp | `5515999999999` (formato: país + DDD + número, só dígitos) |
| Instagram | `ronebatista.muaythai` |
| Preços | `[valor]` |
| Fotos | links `https://images.unsplash.com/...` — troque pelo caminho da sua foto (ex.: `img/foto1.jpg`) |
| Textos | cada seção tem um comentário `<!-- SEÇÃO: ... -->` |

## Cores e fontes

No início do `css/styles.css`, em `:root`, estão as cores principais:
`--red` (vermelho), `--gold` (dourado), `--bg` (fundo preto), `--surface` (cards).

Fontes: Bebas Neue (títulos) e Barlow (textos), carregadas do Google Fonts no `<head>` do HTML.

## Mobile-first

O CSS foi escrito mobile-first: os estilos base são do celular e os ajustes de
tablet/desktop estão nos blocos `@media (min-width: 768px)` e `@media (min-width: 1024px)`.
