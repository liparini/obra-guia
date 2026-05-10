# 🏗️ Guia de Obra Residencial

Sistema de acompanhamento de construção residencial com orientações técnicas passo a passo e assistente de IA integrado.

## Funcionalidades

- ✅ **8 fases completas** — do planejamento ao habite-se
- 🪨 **Muro de arrimo & contenção** — projeto, drenagem e execução
- 🏗️ **Terraplanagem & aterramento** — compactação e locação
- ⚙️ **Fundação, estrutura e instalações** — guias técnicos detalhados
- ⚠️ **Alertas de risco** — avisos sobre erros comuns e graves
- 📋 **Checklist interativo** — marque cada etapa como concluída
- 🤖 **Engenheiro Virtual** — tire dúvidas com IA (powered by Claude)

## Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/obra-guia.git
cd obra-guia

# Instale as dependências
npm install

# Inicie em modo de desenvolvimento
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

## Build para produção

```bash
npm run build
npm run preview
```

## Configuração da API (Engenheiro Virtual)

O assistente de IA usa a [API da Anthropic](https://www.anthropic.com). Para funcionar fora do Claude.ai, você precisa configurar sua chave de API.

1. Crie uma conta em [console.anthropic.com](https://console.anthropic.com)
2. Gere uma API key
3. Crie um arquivo `.env` na raiz do projeto:

```env
VITE_ANTHROPIC_API_KEY=sk-ant-...
```

4. Em `src/components/AIAssistant.jsx`, adicione o header da chave:

```js
headers: {
  "Content-Type": "application/json",
  "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
  "anthropic-version": "2023-06-01",
},
```

> ⚠️ **Atenção:** Nunca exponha sua API key em repositórios públicos. Use variáveis de ambiente e adicione `.env` ao `.gitignore`.

## Estrutura do projeto

```
obra-guia/
├── src/
│   ├── components/
│   │   ├── AIAssistant.jsx   # Painel do engenheiro virtual
│   │   ├── PhaseStep.jsx     # Card de cada etapa
│   │   └── Sidebar.jsx       # Menu lateral de fases
│   ├── data/
│   │   └── phases.js         # Dados de todas as fases e etapas
│   ├── App.jsx               # Componente principal
│   ├── main.jsx              # Ponto de entrada
│   └── index.css             # Estilos globais
├── index.html
├── vite.config.js
└── package.json
```

## Tecnologias

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Anthropic API](https://docs.anthropic.com/) — Claude Sonnet

## Fases da obra

| # | Fase | Duração estimada |
|---|------|-----------------|
| 1 | Planejamento e Documentação | 1–2 meses |
| 2 | Muro de Arrimo & Contenção | 2–6 semanas |
| 3 | Terraplanagem & Aterramento | 2–4 semanas |
| 4 | Fundação | 3–6 semanas |
| 5 | Estrutura | 2–4 meses |
| 6 | Instalações | 1–2 meses |
| 7 | Vedação & Acabamentos | 2–4 meses |
| 8 | Finalização & Entrega | 2–4 semanas |

## Licença

MIT
