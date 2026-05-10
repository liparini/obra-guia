export const phases = [
  {
    id: 1,
    name: "Planejamento e Documentação",
    icon: "📋",
    color: "#D4A853",
    duration: "1–2 meses",
    steps: [
      {
        title: "Levantamento topográfico",
        desc: "Contrate um topógrafo para medir e mapear o terreno: cotas, curvas de nível, limites.",
        tips: [
          "Exija ART (Anotação de Responsabilidade Técnica)",
          "Verifique os marcos de divisa com vizinhos",
          "Solicite planta digital em DWG/PDF",
        ],
        warning: null,
      },
      {
        title: "Análise do solo (sondagem SPT)",
        desc: "Ensaio de sondagem para definir tipo de fundação ideal e capacidade de carga do terreno.",
        tips: [
          "Mínimo 2 furos para lotes pequenos, 4+ para médios",
          "Resultado define fundação: sapata, radier, estaca",
          "Sem sondagem, fundação é chute — não faça isso",
        ],
        warning: "Pular esta etapa é uma das causas mais comuns de recalques e trincas.",
      },
      {
        title: "Projeto arquitetônico",
        desc: "Contrate um arquiteto para elaborar plantas, cortes, fachadas e memorial descritivo.",
        tips: [
          "Defina número de quartos, vagas, área total antes",
          "Peça 2–3 opções de layout",
          "Inclua projeto de acessibilidade (NBR 9050)",
        ],
        warning: null,
      },
      {
        title: "Projetos complementares",
        desc: "Estrutural, hidrossanitário, elétrico, SPDA (para-raios). Todos devem ser compatibilizados.",
        tips: [
          "Compatibilização evita conflitos (ex: viga onde passa tubulação)",
          "Exija ART de cada responsável técnico",
          "Projeto elétrico já deve prever carregador de carro (EVSE)",
        ],
        warning: null,
      },
      {
        title: "Alvará de construção",
        desc: "Protocole os projetos na prefeitura e aguarde a aprovação para iniciar legalmente a obra.",
        tips: [
          "Prazo varia: 30–90 dias conforme município",
          "Sem alvará, obra pode ser embargada e multada",
          "Guarde cópia do alvará na obra",
        ],
        warning: "Iniciar sem alvará gera multa e pode exigir demolição.",
      },
    ],
  },
  {
    id: 2,
    name: "Muro de Arrimo & Contenção",
    icon: "🪨",
    color: "#8B6F47",
    duration: "2–6 semanas",
    steps: [
      {
        title: "Verificação da necessidade",
        desc: "Se o terreno tem desnível ≥ 1,5 m em relação ao vizinho ou via pública, contenção é obrigatória.",
        tips: [
          "Avalie inclinação com o levantamento topográfico",
          "Muro < 1,5 m: pode ser bloco ou tijolo reforçado",
          "Muro > 1,5 m: exige projeto estrutural específico",
        ],
        warning: null,
      },
      {
        title: "Projeto do muro de arrimo",
        desc: "Engenheiro estrutural dimensiona o muro conforme empuxo do solo, água e sobrecargas.",
        tips: [
          "Tipos: gravidade (pedra/concreto maciço), cantilever (em L), gabião",
          "Inclua sistema de drenagem no projeto",
          "Para talude natural: estudo de estabilidade de encosta",
        ],
        warning: "Muro sem projeto adequado pode tombar, causando acidentes graves.",
      },
      {
        title: "Implantação da drenagem",
        desc: "Drenos por gravidade atrás do muro evitam pressão de água que provoca colapso.",
        tips: [
          "Use tubo dreno ø100mm com brita e manta geotêxtil",
          "Barba-d'água a cada 2–3 m² de parede",
          "Desnível mínimo 1% para escoar",
        ],
        warning: null,
      },
      {
        title: "Execução do muro",
        desc: "Escavação, fôrma, armação e concretagem conforme projeto. Cura mínima 28 dias.",
        tips: [
          "Não aterrar antes da cura completa do concreto",
          "Cimbrar escoramento enquanto concreta",
          "Impermeabilize o tardoz (face que recebe solo)",
        ],
        warning: null,
      },
      {
        title: "Aterro controlado atrás do muro",
        desc: "Somente após cura total: aterrar em camadas de 20 cm, compactando cada uma.",
        tips: [
          "Use compactador de placa ou soquete manual próximo ao muro",
          "Evite compactador de rolo pesado (força excessiva)",
          "Registre as camadas com fotos",
        ],
        warning: null,
      },
    ],
  },
  {
    id: 3,
    name: "Terraplanagem & Aterramento",
    icon: "🏗️",
    color: "#5A7A4E",
    duration: "2–4 semanas",
    steps: [
      {
        title: "Limpeza e destocamento",
        desc: "Remova vegetação, raízes, entulho e material orgânico da camada superficial (20–40 cm).",
        tips: [
          "Solo orgânico não serve como base de fundação",
          "Descarte correto: aterro sanitário licenciado",
          "Registre com fotos antes/depois para prefeitura",
        ],
        warning: null,
      },
      {
        title: "Corte e aterro do terreno",
        desc: "Nivelar o lote conforme projeto: cortar os pontos altos e aterrar os baixos.",
        tips: [
          "Use o levantamento topográfico como referência",
          "Equilíbrio corte-aterro reduz custo de transporte",
          "Matéria-prima ideal: saibro ou argila compactável",
        ],
        warning: null,
      },
      {
        title: "Compactação do aterro",
        desc: "Cada camada de 20 cm deve atingir mínimo 95% Proctor Normal antes da próxima.",
        tips: [
          "Peça ensaio de compactação (Proctor e Densímetro Nuclear)",
          "Sem compactação adequada = recalque na fundação",
          "Controle com relatório de campo assinado pelo engenheiro",
        ],
        warning: "Aterro mal compactado é causa frequente de trincas e desníveis na construção.",
      },
      {
        title: "Marcação da obra (locação)",
        desc: "Engenheiro ou mestre de obras posiciona os eixos da planta no terreno com gabaritos.",
        tips: [
          "Use gabaritos de madeira (sarrafos) + linha de náilon",
          "Confira diagonal dos ângulos (Pitágoras: a²+b²=c²)",
          "Fotografe e salve cotas para conferência posterior",
        ],
        warning: null,
      },
    ],
  },
  {
    id: 4,
    name: "Fundação",
    icon: "⚙️",
    color: "#4A6B8A",
    duration: "3–6 semanas",
    steps: [
      {
        title: "Definição do tipo de fundação",
        desc: "Com base na sondagem SPT: sapata isolada, radier, tubulão, estaca hélice ou raiz.",
        tips: [
          "Sapata: solo firme a pouca profundidade (< 2 m)",
          "Radier: carga distribuída, solo de média resistência",
          "Estacas: solo fraco ou carga concentrada alta",
        ],
        warning: null,
      },
      {
        title: "Escavação das fundações",
        desc: "Abrir valas ou poços até cota definida em projeto, sem disturbar o solo virgem.",
        tips: [
          "Não deixar escavação exposta à chuva",
          "Se tiver lençol freático: bombear água antes de concretar",
          "Largura mínima da vala: 40 cm para trabalho humano",
        ],
        warning: null,
      },
      {
        title: "Armação e concretagem",
        desc: "Montar armadura conforme projeto estrutural, usar espaçadores e concretar com fck mínimo C20.",
        tips: [
          "Cobrimento mínimo: 3 cm (agressividade moderada)",
          "Adensamento: vibrador de imersão para todo concreto estrutural",
          "Coletar corpos-de-prova para ensaio aos 28 dias",
        ],
        warning: null,
      },
      {
        title: "Cura e desforma",
        desc: "Manter concreto úmido por 7 dias. Desformar somente após resistência mínima atingida.",
        tips: [
          "Cobrir com lona ou estopa úmida",
          "Temperatura acima de 30°C exige cura mais frequente",
          "Sem pressa: fundação determina toda a vida útil da obra",
        ],
        warning: null,
      },
    ],
  },
  {
    id: 5,
    name: "Estrutura",
    icon: "🏛️",
    color: "#6B4A8A",
    duration: "2–4 meses",
    steps: [
      {
        title: "Pilares e vigas baldrame",
        desc: "Pilares erguidos sobre as fundações; vigamentos ao nível do piso formam o baldrame.",
        tips: [
          "Usar espaçadores plásticos para garantir cobrimento",
          "Pilares devem ser prumos (use nível de bolha e prumo)",
          "Concretar pilar inteiro sem juntas de concretagem no meio",
        ],
        warning: null,
      },
      {
        title: "Laje e vigas intermediárias",
        desc: "Escorar, montar fôrma, armar e concretar cada pavimento conforme projeto.",
        tips: [
          "Escoras só saem com 75% da resistência (mínimo 14 dias)",
          "Laje maciça, nervurada ou steel deck — conforme projeto",
          "Não sobrecarregar laje durante obra (materiais empilhados)",
        ],
        warning: "Remover escoras antes do tempo é causa de colapso estrutural.",
      },
      {
        title: "Caixas d'água e reservatórios",
        desc: "Prever estrutura para reservatório superior (mínimo 500 L/pessoa) e inferior.",
        tips: [
          "Cisterna inferior: considerar lençol freático na profundidade",
          "Estrutura deve suportar peso da água (1 L = 1 kg)",
          "Reservatório inferior é obrigatório em muitos códigos municipais",
        ],
        warning: null,
      },
      {
        title: "Cobertura/telhado",
        desc: "Estrutura de madeira ou metálica, telhas e calhas conforme projeto arquitetônico.",
        tips: [
          "Inclinação mínima por tipo: colonial ≥30%, ondulada ≥10%, sanduíche ≥5%",
          "Rufo e contra-rufo em toda emenda com parede",
          "Calha com caimento mínimo de 0,5%",
        ],
        warning: null,
      },
    ],
  },
  {
    id: 6,
    name: "Instalações",
    icon: "⚡",
    color: "#8A4A4A",
    duration: "1–2 meses",
    steps: [
      {
        title: "Instalações hidrossanitárias",
        desc: "Passagem de tubulações de água fria, quente, esgoto e águas pluviais conforme projeto.",
        tips: [
          "Teste hidrostático antes de fechar paredes (10 kgf/cm² por 4h)",
          "Caimentos: esgoto ≥2%, pluvial ≥1%",
          "Respeitar raios mínimos de curva (sem cotovelos 90° em esgoto)",
        ],
        warning: null,
      },
      {
        title: "Instalações elétricas",
        desc: "Eletrodutos, caixas, fiação conforme projeto. Circuitos separados por ambiente e carga.",
        tips: [
          "Bitola mínima: 1,5 mm² iluminação, 2,5 mm² tomadas",
          "Aterramento obrigatório (NBR 5410)",
          "Prever circuito exclusivo para chuveiro, AR e fogão",
        ],
        warning: null,
      },
      {
        title: "SPDA (para-raios)",
        desc: "Sistema de proteção contra descargas atmosféricas. Obrigatório conforme NBR 5419.",
        tips: [
          "Necessário para edificações acima de certa altura ou risco",
          "Integrar com aterramento elétrico geral",
          "Exige laudo e ART do engenheiro responsável",
        ],
        warning: null,
      },
      {
        title: "Gás (se aplicável)",
        desc: "Tubulação de gás canalizado ou ponto para GLP conforme projeto e distribuidora.",
        tips: [
          "Instalação deve seguir NBR 15526 (gás canalizado) ou NBR 13523",
          "Teste de estanqueidade obrigatório",
          "Prever ventilação nos ambientes com equipamentos a gás",
        ],
        warning: null,
      },
    ],
  },
  {
    id: 7,
    name: "Vedação & Acabamentos",
    icon: "🧱",
    color: "#7A8A4A",
    duration: "2–4 meses",
    steps: [
      {
        title: "Alvenaria de vedação",
        desc: "Levantamento das paredes internas e externas com bloco cerâmico ou de concreto.",
        tips: [
          "Espessura externa ≥14 cm para conforto térmico e acústico",
          "Amarração da alvenaria com estrutura (ferros de espera)",
          "Não usar alvenaria para apoiar laje — só estrutura",
        ],
        warning: null,
      },
      {
        title: "Revestimentos e chapisco/reboco",
        desc: "Chapisco, emboço e reboco nas paredes. Contrapiso no piso.",
        tips: [
          "Chapisco: traço 1:3 (cimento:areia grossa), jato ou rodo serrilhado",
          "Reboco: traço 1:6 ou argamassa industrializada",
          "Contrapiso: espessura mínima 4 cm sobre laje",
        ],
        warning: null,
      },
      {
        title: "Impermeabilização",
        desc: "Aplicar nas áreas molhadas (banheiro, cozinha, varanda, calha, terraço) antes do revestimento.",
        tips: [
          "Impermeabilizar até 30 cm acima do piso nas paredes de banheiro",
          "Teste com lâmina d'água por 72h antes de fechar",
          "Tipos: manta asfáltica, cristalizante, argamassa polimérica",
        ],
        warning: "Impermeabilização mal executada é a maior causa de infiltrações e reformas caras.",
      },
      {
        title: "Revestimentos finais",
        desc: "Cerâmica, porcelanato, gesso, pintura, esquadrias (portas e janelas).",
        tips: [
          "Nivelar base antes: desnivelamento > 3 mm gera peças quebradas",
          "Argamassa colante e rejunte específicos para área molhada",
          "Esquadrias: instalar com contramarco e espuma de poliuretano",
        ],
        warning: null,
      },
    ],
  },
  {
    id: 8,
    name: "Finalização & Entrega",
    icon: "🏠",
    color: "#4A8A6B",
    duration: "2–4 semanas",
    steps: [
      {
        title: "Limpeza fina e ajustes",
        desc: "Limpeza de obra, remoção de entulho, ajuste de esquadrias, retoques de pintura.",
        tips: [
          "Use removedor de argamassa nas cerâmicas (ácido muriático diluído)",
          "Verificar funcionamento de todas as torneiras, interruptores e tomadas",
          "Testar esgoto com carga d'água em todos os pontos",
        ],
        warning: null,
      },
      {
        title: "Habite-se (aprovação final)",
        desc: "Solicitar vistoria da prefeitura para emissão do Habite-se — documento que legaliza a obra.",
        tips: [
          "Sem Habite-se: imóvel não pode ser financiado nem vendido formalmente",
          "Leve: alvará, ART dos responsáveis e plantas aprovadas",
          "Prazo: 15–60 dias dependendo do município",
        ],
        warning: "Sem Habite-se a obra está irregular perante a lei.",
      },
      {
        title: "Averbação na matrícula",
        desc: "Levar Habite-se ao cartório de registro de imóveis para averbar a construção na matrícula do terreno.",
        tips: [
          "Necessário para financiamento, venda ou inventário futuro",
          "Custo: 0,5–1% do valor da obra (tabela do cartório)",
          "Combine com o INSS da obra (GFIP) se ainda não recolheu",
        ],
        warning: null,
      },
      {
        title: "Manutenção preventiva",
        desc: "Monte o manual do proprietário com prazos de manutenção de cada sistema.",
        tips: [
          "Caixa d'água: limpeza semestral",
          "Impermeabilização terraço: inspeção anual",
          "SPDA: inspeção anual pela norma",
          "Fiação: revisão elétrica a cada 10 anos",
        ],
        warning: null,
      },
    ],
  },
];
