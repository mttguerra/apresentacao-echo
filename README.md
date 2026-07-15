# Apresentação Echo — Call de Venda para Advogados

Deck web (Vite + Reveal.js + GSAP) usado nas calls de venda da Echo Agency com leads de advogados.

## Stack

- **Vite 8** — bundler / dev server
- **Reveal.js 6** — engine de slides (linear, sem controles)
- **GSAP 3** — animações por bloco
- **Space Grotesk + Inter + JetBrains Mono** — tipografia self-hostada via `@fontsource`
- **Web Components vanilla** — `<slide-image>` como placeholder de imagem

## Rodar

```bash
npm install
npm run dev          # http://localhost:8080
npm run build        # dist/ estático
npm run preview      # preview do build em http://localhost:8080
npm test             # testes Vitest do <slide-image>
```

## Navegação (call)

- `→` / `Space`: avançar
- `←`: voltar
- `S`: janela de notas do palestrante
- `F`: fullscreen
- `Esc` / `O`: **desabilitados** (evita saída acidental no meio da call)

## Estrutura

```
apresentacao-echo/
├── docs/superpowers/       # spec e plano de implementação
├── public/img/             # imagens reais entram aqui
├── src/
│   ├── main.js             # boot + hooks Reveal → registry
│   ├── reveal-config.js
│   ├── styles/             # tokens, reset, typography, reveal-overrides, ambient, components
│   ├── components/slide-image.js
│   ├── animations/         # helpers (GSAP) + registry central
│   └── blocks/             # 15 pares bNN-slug.{html,js}
├── tests/slide-image.test.js
├── index.html
└── vite.config.js
```

## Antes de cada call — checklist de personalização

Placeholders a preencher no `src/blocks/*.html`:

| Placeholder | Bloco | O que preencher |
|---|---|---|
| `{{NOME_PACOTE}}` | b12-investimento | nome comercial do pacote |
| `{{VALOR}}` | b12-investimento | valor mensal (ex: "R$ 4.997/mês") |
| `{{PRAZO_KICKOFF}}` | b14-cta | quando começa (ex: "próxima segunda") |

Busca global: `grep -r "{{" src/blocks/`

## Plano B no palco

Sempre leve 2 fallbacks no pendrive:

1. **Build estático:** `npm run build` → copie `dist/` pro pendrive. Roda offline.
2. **PDF exportado:** abrir `http://localhost:8080/?print-pdf`, `Ctrl+P` → "Salvar como PDF", tamanho personalizado 1920×1080px, margens "Nenhum".

## Identidade visual

Tokens em `src/styles/tokens.css`:

| Token | Valor | Uso |
|---|---|---|
| `--bg-1` | `#0a0a0a` | canvas |
| `--bg-2` | `#131313` | cards |
| `--bg-3` | `#1a1a1a` | popovers |
| `--text-1` | `#fafafa` | principal |
| `--text-2` | `#a0a0a0` | secundário |
| `--text-3` | `#888888` | muted |
| `--accent` | `#005eda` | azul Echo |
| `--success` | `#22c55e` | ✓ aprovado |
| `--danger` | `#ef4444` | ✕ objeção |
