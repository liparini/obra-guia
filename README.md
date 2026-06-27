# 🏗️ Guia de Obra Residencial

Sistema de acompanhamento de construção residencial com orientações técnicas passo a passo, totalmente responsivo (computador, tablet e celular).

## Funcionalidades

- ✅ **8 fases completas** — do planejamento ao habite-se
- 🪨 **Muro de arrimo & contenção** — projeto, drenagem e execução
- 🏗️ **Terraplanagem & aterramento** — compactação e locação
- ⚙️ **Fundação, estrutura e instalações** — guias técnicos detalhados
- ⚠️ **Alertas de risco** — avisos sobre erros comuns e graves
- 📋 **Checklist interativo** — marque cada etapa como concluída
- 📱 **Totalmente responsivo** — menu lateral some e fica num menu (drawer) no celular

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

## Estrutura do projeto

```
obra-guia/
├── src/
│   ├── components/
│   │   ├── PhaseStep.jsx     # Card de cada etapa
│   │   └── Sidebar.jsx       # Menu lateral / drawer de fases
│   ├── data/
│   │   └── phases.js         # Dados de todas as fases e etapas
│   ├── App.jsx                # Componente principal
│   ├── App.css                # Layout e regras responsivas
│   ├── main.jsx                # Ponto de entrada
│   └── index.css              # Estilos globais e variáveis
├── index.html
├── vite.config.js
└── package.json
```

## Tecnologias

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)

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
