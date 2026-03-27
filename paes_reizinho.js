const pptxgen = require("pptxgenjs");

// Paleta de cores
const NAVY    = "0D1B2A";
const NAVY2   = "1B2A4A";
const GOLD    = "FFD700";
const GOLD2   = "E6A817";
const RED     = "C0392B";
const WHITE   = "FFFFFF";
const LIGHT   = "F5F7FA";
const GRAY    = "8B9CB0";
const GREEN   = "27AE60";
const BLUE    = "1565C0";
const PURPLE  = "6C3483";

const makeShadow = () => ({ type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.18 });

async function build() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title  = "O Reizinho do PAES - Thiago Tiers";
  pres.author = "Thiago Tiers";

  // ══════════════════════════════════════════
  // SLIDE 1 — CAPA
  // ══════════════════════════════════════════
  {
    let sl = pres.addSlide();
    sl.background = { color: NAVY };

    // Painel lateral esquerdo mais escuro
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 3.6, h: 5.625,
      fill: { color: "060F1A" }, line: { color: "060F1A" }
    });

    // Faixa dourada horizontal
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 3.6, y: 0, w: 6.4, h: 0.1,
      fill: { color: GOLD }, line: { color: GOLD }
    });

    // Coroa (texto emoji grande)
    sl.addText("♛", {
      x: 3.7, y: 0.25, w: 1.6, h: 1.3,
      fontSize: 72, color: GOLD, align: "left", fontFace: "Arial"
    });

    // Título principal
    sl.addText("O REIZINHO DO PAES", {
      x: 3.7, y: 1.35, w: 6.0, h: 0.9,
      fontSize: 34, bold: true, color: GOLD,
      align: "left", fontFace: "Arial Black", margin: 0
    });

    // Nome
    sl.addText("THIAGO TIERS", {
      x: 3.7, y: 2.25, w: 6.0, h: 0.65,
      fontSize: 24, bold: true, color: WHITE,
      align: "left", fontFace: "Arial", margin: 0
    });

    // Badge PAES UEMA
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 3.7, y: 3.1, w: 2.8, h: 0.55,
      fill: { color: RED }, line: { color: RED },
      shadow: makeShadow()
    });
    sl.addText("PAES  •  UEMA", {
      x: 3.7, y: 3.1, w: 2.8, h: 0.55,
      fontSize: 15, bold: true, color: WHITE,
      align: "center", valign: "middle", margin: 0, fontFace: "Arial"
    });

    // Linha separadora no painel esquerdo
    sl.addShape(pres.shapes.LINE, {
      x: 0.3, y: 1.0, w: 3.0, h: 0,
      line: { color: GOLD2, width: 1 }
    });

    // Tópicos no painel esquerdo
    const topics = [
      "✦  Simulados Remotos",
      "✦  Correção com Desvio Padrão",
      "✦  Provas Anteriores",
      "✦  Assuntos que Mais Caem",
      "✦  Gabarito e Ranking"
    ];
    topics.forEach((t, i) => {
      sl.addText(t, {
        x: 0.15, y: 1.15 + i * 0.6, w: 3.3, h: 0.5,
        fontSize: 11, color: GOLD, align: "left",
        fontFace: "Arial", margin: 0
      });
    });

    // Faixa inferior
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 5.2, w: 10, h: 0.425,
      fill: { color: GOLD }, line: { color: GOLD }
    });
    sl.addText("Sua aprovação na UEMA começa AQUI!  👑", {
      x: 0, y: 5.2, w: 10, h: 0.425,
      fontSize: 13, bold: true, color: NAVY,
      align: "center", valign: "middle", margin: 0, fontFace: "Arial Black"
    });
  }

  // ══════════════════════════════════════════
  // SLIDE 2 — VISÃO GERAL DO PAES
  // ══════════════════════════════════════════
  {
    let sl = pres.addSlide();
    sl.background = { color: LIGHT };

    // Header
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 1.05,
      fill: { color: NAVY }, line: { color: NAVY }
    });
    sl.addText("O QUE É O PAES UEMA?", {
      x: 0.5, y: 0, w: 9, h: 1.05,
      fontSize: 26, bold: true, color: GOLD,
      align: "left", valign: "middle", fontFace: "Arial Black", margin: 0
    });

    // 4 cards de destaque
    const cards = [
      { num: "60",     label: "Questões\nObjetivas",        col: NAVY  },
      { num: "4",      label: "Áreas do\nConhecimento",     col: BLUE  },
      { num: "2h30",   label: "Duração\nda Prova",          col: RED   },
      { num: "1x",     label: "Por Ano\n(Processo Seletivo)", col: GREEN }
    ];
    cards.forEach((c, i) => {
      const x = 0.35 + i * 2.35;
      sl.addShape(pres.shapes.RECTANGLE, {
        x, y: 1.25, w: 2.1, h: 2.0,
        fill: { color: c.col }, line: { color: c.col },
        shadow: makeShadow()
      });
      sl.addText(c.num, {
        x, y: 1.35, w: 2.1, h: 0.9,
        fontSize: 42, bold: true, color: GOLD,
        align: "center", fontFace: "Arial Black", margin: 0
      });
      sl.addText(c.label, {
        x, y: 2.35, w: 2.1, h: 0.8,
        fontSize: 13, color: WHITE, bold: false,
        align: "center", valign: "middle", margin: 0
      });
    });

    // Descrição abaixo dos cards
    sl.addText("O PAES é o processo seletivo da Universidade Estadual do Maranhão (UEMA). A prova é composta por 60 questões de múltipla escolha, abrangendo Linguagens, Ciências Humanas, Ciências da Natureza e Matemática.", {
      x: 0.4, y: 3.55, w: 9.2, h: 1.0,
      fontSize: 14, color: NAVY2, align: "justify", fontFace: "Arial",
      lineSpacingMultiple: 1.4
    });

    // Faixa inferior destaque
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 4.75, w: 10, h: 0.85,
      fill: { color: NAVY2 }, line: { color: NAVY2 }
    });
    sl.addText("A nota final considera um sistema de pontuação com desvio padrão — entenda como funciona nos próximos slides!", {
      x: 0.5, y: 4.75, w: 9, h: 0.85,
      fontSize: 13, color: GOLD, align: "center", valign: "middle",
      italic: true, fontFace: "Arial", margin: 0
    });
  }

  // ══════════════════════════════════════════
  // SLIDE 3 — ESTRUTURA DA PROVA (60 QUESTÕES)
  // ══════════════════════════════════════════
  {
    let sl = pres.addSlide();
    sl.background = { color: LIGHT };

    // Header
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 1.05,
      fill: { color: NAVY2 }, line: { color: NAVY2 }
    });
    sl.addText("ESTRUTURA DA PROVA — 60 QUESTÕES", {
      x: 0.5, y: 0, w: 9, h: 1.05,
      fontSize: 24, bold: true, color: GOLD,
      align: "left", valign: "middle", fontFace: "Arial Black", margin: 0
    });

    // Tabela de distribuição
    const areas = [
      { area: "Linguagens e Códigos", materia: "Língua Portuguesa / Literatura / Inglês / Arte", qtd: "15", pct: "25%", color: BLUE },
      { area: "Ciências Humanas",     materia: "História / Geografia / Filosofia / Sociologia",  qtd: "15", pct: "25%", color: PURPLE },
      { area: "Ciências da Natureza", materia: "Biologia / Química / Física",                     qtd: "15", pct: "25%", color: GREEN },
      { area: "Matemática",           materia: "Matemática (todas as subáreas)",                  qtd: "15", pct: "25%", color: RED },
    ];

    // Cabeçalho da tabela
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0.3, y: 1.2, w: 9.4, h: 0.45,
      fill: { color: NAVY }, line: { color: NAVY }
    });
    ["ÁREA", "DISCIPLINAS", "Nº QUESTÕES", "%"].forEach((h, i) => {
      const xs = [0.35, 2.35, 6.7, 8.6];
      const ws = [1.9, 4.2, 1.8, 1.0];
      sl.addText(h, {
        x: xs[i], y: 1.2, w: ws[i], h: 0.45,
        fontSize: 12, bold: true, color: GOLD,
        align: "center", valign: "middle", margin: 0
      });
    });

    // Linhas da tabela
    areas.forEach((row, i) => {
      const y = 1.7 + i * 0.75;
      const bg = i % 2 === 0 ? WHITE : "EEF2F7";
      sl.addShape(pres.shapes.RECTANGLE, {
        x: 0.3, y, w: 9.4, h: 0.72,
        fill: { color: bg }, line: { color: "D0D8E4", width: 0.5 }
      });
      // Barra colorida lateral
      sl.addShape(pres.shapes.RECTANGLE, {
        x: 0.3, y, w: 0.12, h: 0.72,
        fill: { color: row.color }, line: { color: row.color }
      });
      sl.addText(row.area, {
        x: 0.45, y, w: 1.88, h: 0.72,
        fontSize: 11, bold: true, color: row.color,
        align: "left", valign: "middle", fontFace: "Arial", margin: 4
      });
      sl.addText(row.materia, {
        x: 2.35, y, w: 4.25, h: 0.72,
        fontSize: 10.5, color: NAVY2,
        align: "left", valign: "middle", fontFace: "Arial", margin: 4
      });
      sl.addText(row.qtd, {
        x: 6.7, y, w: 1.8, h: 0.72,
        fontSize: 22, bold: true, color: row.color,
        align: "center", valign: "middle", margin: 0
      });
      sl.addText(row.pct, {
        x: 8.6, y, w: 1.1, h: 0.72,
        fontSize: 14, bold: true, color: NAVY2,
        align: "center", valign: "middle", margin: 0
      });
    });

    // Total
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0.3, y: 4.7, w: 9.4, h: 0.5,
      fill: { color: NAVY }, line: { color: NAVY }
    });
    sl.addText("TOTAL", {
      x: 0.45, y: 4.7, w: 4.0, h: 0.5,
      fontSize: 14, bold: true, color: WHITE,
      align: "left", valign: "middle", margin: 4
    });
    sl.addText("60", {
      x: 6.7, y: 4.7, w: 1.8, h: 0.5,
      fontSize: 22, bold: true, color: GOLD,
      align: "center", valign: "middle", margin: 0
    });
    sl.addText("100%", {
      x: 8.6, y: 4.7, w: 1.1, h: 0.5,
      fontSize: 14, bold: true, color: GOLD,
      align: "center", valign: "middle", margin: 0
    });
  }

  // ══════════════════════════════════════════
  // SLIDE 4 — ASSUNTOS QUE MAIS CAEM
  // ══════════════════════════════════════════
  {
    let sl = pres.addSlide();
    sl.background = { color: LIGHT };

    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 1.05,
      fill: { color: RED }, line: { color: RED }
    });
    sl.addText("ASSUNTOS QUE MAIS CAEM NO PAES", {
      x: 0.5, y: 0, w: 9, h: 1.05,
      fontSize: 24, bold: true, color: WHITE,
      align: "left", valign: "middle", fontFace: "Arial Black", margin: 0
    });

    // 4 colunas por área
    const cols = [
      {
        title: "LINGUAGENS", color: BLUE,
        items: ["Interpretação de Texto", "Coerência e Coesão", "Classes Gramaticais", "Movimentos Literários", "Figuras de Linguagem", "Inglês: Compreensão Leitora"]
      },
      {
        title: "HUM. / SOCIAIS", color: PURPLE,
        items: ["Brasil República", "Guerra Fria", "Geopolítica Mundial", "Biomas Brasileiros", "Urbanização", "Filosofia Moderna"]
      },
      {
        title: "C. DA NATUREZA", color: GREEN,
        items: ["Genética Mendeliana", "Ecologia e Cadeias", "Cinética Química", "Eletroquímica", "Leis de Newton", "Eletricidade"]
      },
      {
        title: "MATEMÁTICA", color: GOLD2,
        items: ["Funções (Quadrática)", "Trigonometria", "Probabilidade", "Geometria Plana", "Progressões A/G", "Logaritmos"]
      }
    ];

    cols.forEach((col, i) => {
      const x = 0.2 + i * 2.45;
      // Cabeçalho da coluna
      sl.addShape(pres.shapes.RECTANGLE, {
        x, y: 1.15, w: 2.3, h: 0.5,
        fill: { color: col.color }, line: { color: col.color }
      });
      sl.addText(col.title, {
        x, y: 1.15, w: 2.3, h: 0.5,
        fontSize: 11, bold: true, color: WHITE,
        align: "center", valign: "middle", margin: 0
      });
      // Items
      col.items.forEach((item, j) => {
        const yItem = 1.72 + j * 0.6;
        sl.addShape(pres.shapes.RECTANGLE, {
          x, y: yItem, w: 2.3, h: 0.54,
          fill: { color: j % 2 === 0 ? WHITE : "EEF2F7" },
          line: { color: "D0D8E4", width: 0.5 }
        });
        sl.addShape(pres.shapes.RECTANGLE, {
          x, y: yItem, w: 0.07, h: 0.54,
          fill: { color: col.color }, line: { color: col.color }
        });
        sl.addText(item, {
          x: x + 0.1, y: yItem, w: 2.18, h: 0.54,
          fontSize: 10, color: NAVY2,
          align: "left", valign: "middle", fontFace: "Arial", margin: 3
        });
      });
    });
  }

  // ══════════════════════════════════════════
  // SLIDE 5 — SIMULADOS REMOTOS
  // ══════════════════════════════════════════
  {
    let sl = pres.addSlide();
    sl.background = { color: NAVY };

    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 1.05,
      fill: { color: "060F1A" }, line: { color: "060F1A" }
    });
    sl.addText("SIMULADOS REMOTOS — COMO FUNCIONA?", {
      x: 0.5, y: 0, w: 9, h: 1.05,
      fontSize: 24, bold: true, color: GOLD,
      align: "left", valign: "middle", fontFace: "Arial Black", margin: 0
    });

    // Steps
    const steps = [
      { n: "01", title: "Acesse o Simulado",     desc: "Disponibilizado online, no dia e horário marcados. Pode ser feito pelo celular ou computador.",          color: BLUE   },
      { n: "02", title: "Resolva as 60 Questões", desc: "60 questões objetivas seguindo o mesmo modelo do PAES UEMA. Tempo controlado de 2h30min.",              color: PURPLE },
      { n: "03", title: "Envie suas Respostas",   desc: "Marque seu gabarito diretamente na plataforma. Ao encerrar, suas respostas são registradas automaticamente.", color: GREEN  },
      { n: "04", title: "Resultado Imediato",     desc: "Ao final, você recebe sua nota bruta, pontuação por área e posição no ranking geral dos participantes.",  color: GOLD2  },
      { n: "05", title: "Correção Detalhada",     desc: "Gabarito comentado, resolução de cada questão e indicação dos pontos a melhorar por disciplina.",        color: RED    }
    ];

    steps.forEach((s, i) => {
      const x = i < 3 ? 0.3 + i * 3.15 : 1.57 + (i - 3) * 3.15;
      const y = i < 3 ? 1.3 : 3.35;
      const w = 2.9;
      const h = 1.65;

      sl.addShape(pres.shapes.RECTANGLE, {
        x, y, w, h,
        fill: { color: NAVY2 }, line: { color: s.color, width: 1.5 },
        shadow: makeShadow()
      });
      // número
      sl.addShape(pres.shapes.OVAL, {
        x: x + 0.12, y: y + 0.12, w: 0.5, h: 0.5,
        fill: { color: s.color }, line: { color: s.color }
      });
      sl.addText(s.n, {
        x: x + 0.12, y: y + 0.12, w: 0.5, h: 0.5,
        fontSize: 12, bold: true, color: WHITE,
        align: "center", valign: "middle", margin: 0
      });
      sl.addText(s.title, {
        x: x + 0.7, y: y + 0.12, w: 2.1, h: 0.48,
        fontSize: 12, bold: true, color: s.color,
        align: "left", valign: "middle", fontFace: "Arial", margin: 0
      });
      sl.addText(s.desc, {
        x: x + 0.12, y: y + 0.65, w: 2.7, h: 0.9,
        fontSize: 10.5, color: WHITE,
        align: "left", valign: "top", fontFace: "Arial",
        lineSpacingMultiple: 1.3, margin: 3
      });
    });
  }

  // ══════════════════════════════════════════
  // SLIDE 6 — CORREÇÃO E DESVIO PADRÃO
  // ══════════════════════════════════════════
  {
    let sl = pres.addSlide();
    sl.background = { color: LIGHT };

    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 1.05,
      fill: { color: NAVY2 }, line: { color: NAVY2 }
    });
    sl.addText("COMO A NOTA É CALCULADA — DESVIO PADRÃO", {
      x: 0.5, y: 0, w: 9, h: 1.05,
      fontSize: 22, bold: true, color: GOLD,
      align: "left", valign: "middle", fontFace: "Arial Black", margin: 0
    });

    // Coluna Esquerda - fórmula
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0.3, y: 1.2, w: 4.3, h: 4.1,
      fill: { color: NAVY }, line: { color: NAVY },
      shadow: makeShadow()
    });
    sl.addText("FÓRMULA DE PONTUAÇÃO", {
      x: 0.35, y: 1.25, w: 4.2, h: 0.5,
      fontSize: 13, bold: true, color: GOLD,
      align: "center", fontFace: "Arial Black", margin: 0
    });
    sl.addShape(pres.shapes.LINE, {
      x: 0.5, y: 1.78, w: 3.9, h: 0,
      line: { color: GOLD2, width: 0.5 }
    });

    // Fórmula em destaque
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0.55, y: 1.9, w: 3.8, h: 0.85,
      fill: { color: "0A1628" }, line: { color: GOLD2, width: 1 }
    });
    sl.addText("Nota = 500 + 100 × [(NB − X̄) / σ]", {
      x: 0.55, y: 1.9, w: 3.8, h: 0.85,
      fontSize: 14, bold: true, color: GOLD,
      align: "center", valign: "middle", fontFace: "Consolas", margin: 0
    });

    // Legenda
    const legenda = [
      { sigla: "NB",   def: "= Número de acertos do candidato" },
      { sigla: "X̄",    def: "= Média geral dos participantes"   },
      { sigla: "σ",    def: "= Desvio Padrão da turma"          },
      { sigla: "500",  def: "= Nota base (ponto médio)"         },
      { sigla: "100",  def: "= Fator de escala"                  }
    ];
    legenda.forEach((l, i) => {
      sl.addText(l.sigla + "  " + l.def, {
        x: 0.55, y: 2.88 + i * 0.43, w: 3.85, h: 0.4,
        fontSize: 11, color: WHITE, fontFace: "Arial",
        align: "left", valign: "middle", margin: 3
      });
    });

    // Coluna Direita - interpretação
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 5.0, y: 1.2, w: 4.7, h: 4.1,
      fill: { color: WHITE }, line: { color: "D0D8E4", width: 1 },
      shadow: makeShadow()
    });
    sl.addText("COMO INTERPRETAR SUA NOTA?", {
      x: 5.1, y: 1.28, w: 4.5, h: 0.45,
      fontSize: 13, bold: true, color: NAVY2,
      align: "left", fontFace: "Arial Black", margin: 0
    });
    sl.addShape(pres.shapes.LINE, {
      x: 5.1, y: 1.76, w: 4.4, h: 0,
      line: { color: "D0D8E4", width: 0.5 }
    });

    const faixas = [
      { range: "Acima de 650", label: "Excelente — Está no topo!",          color: GREEN },
      { range: "600 a 649",    label: "Ótimo — Bem acima da média",          color: BLUE  },
      { range: "500 a 599",    label: "Na Média — Zona de atenção",          color: GOLD2 },
      { range: "400 a 499",    label: "Abaixo da Média — Precisa melhorar",  color: RED   },
      { range: "Abaixo de 400",label: "Zona Crítica — Intensifique estudos", color: "7F0000" }
    ];
    faixas.forEach((f, i) => {
      const y = 1.88 + i * 0.68;
      sl.addShape(pres.shapes.RECTANGLE, {
        x: 5.05, y, w: 0.3, h: 0.58,
        fill: { color: f.color }, line: { color: f.color }
      });
      sl.addText(f.range, {
        x: 5.42, y, w: 1.6, h: 0.58,
        fontSize: 12, bold: true, color: f.color,
        align: "left", valign: "middle", fontFace: "Consolas", margin: 0
      });
      sl.addText(f.label, {
        x: 7.05, y, w: 2.55, h: 0.58,
        fontSize: 10.5, color: NAVY2,
        align: "left", valign: "middle", fontFace: "Arial", margin: 3
      });
    });
  }

  // ══════════════════════════════════════════
  // SLIDE 7 — PROVAS ANTERIORES
  // ══════════════════════════════════════════
  {
    let sl = pres.addSlide();
    sl.background = { color: NAVY };

    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 1.05,
      fill: { color: "060F1A" }, line: { color: "060F1A" }
    });
    sl.addText("PROVAS ANTERIORES DO PAES UEMA", {
      x: 0.5, y: 0, w: 9, h: 1.05,
      fontSize: 24, bold: true, color: GOLD,
      align: "left", valign: "middle", fontFace: "Arial Black", margin: 0
    });

    // Anos disponíveis em cards
    const anos = [
      { ano: "2024", status: "✔ Disponível", color: GREEN  },
      { ano: "2023", status: "✔ Disponível", color: GREEN  },
      { ano: "2022", status: "✔ Disponível", color: GREEN  },
      { ano: "2021", status: "✔ Disponível", color: GREEN  },
      { ano: "2020", status: "✔ Disponível", color: GREEN  },
      { ano: "2019", status: "✔ Disponível", color: GREEN  },
      { ano: "2018", status: "✔ Disponível", color: GREEN  },
      { ano: "2017", status: "✔ Disponível", color: GOLD2  },
      { ano: "2016", status: "✔ Disponível", color: GOLD2  },
      { ano: "2015", status: "✔ Disponível", color: GOLD2  },
    ];

    anos.forEach((a, i) => {
      const col = i % 5;
      const row = Math.floor(i / 5);
      const x = 0.35 + col * 1.88;
      const y = 1.25 + row * 1.6;

      sl.addShape(pres.shapes.RECTANGLE, {
        x, y, w: 1.75, h: 1.45,
        fill: { color: NAVY2 }, line: { color: a.color, width: 1.5 },
        shadow: makeShadow()
      });
      sl.addText(a.ano, {
        x, y: y + 0.15, w: 1.75, h: 0.7,
        fontSize: 32, bold: true, color: a.color,
        align: "center", fontFace: "Arial Black", margin: 0
      });
      sl.addText(a.status, {
        x, y: y + 0.88, w: 1.75, h: 0.45,
        fontSize: 10.5, color: WHITE,
        align: "center", valign: "middle", margin: 0
      });
    });

    // Legenda na parte inferior
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 4.9, w: 10, h: 0.725,
      fill: { color: "0A1628" }, line: { color: "0A1628" }
    });
    sl.addText("Cada prova inclui: Caderno de Questões  •  Gabarito Oficial  •  Resolução Comentada  •  Estatísticas de desempenho por questão", {
      x: 0.5, y: 4.9, w: 9, h: 0.725,
      fontSize: 12, color: GOLD, align: "center", valign: "middle",
      fontFace: "Arial", italic: true, margin: 0
    });
  }

  // ══════════════════════════════════════════
  // SLIDE 8 — RESULTADO DO SIMULADO (MODELO)
  // ══════════════════════════════════════════
  {
    let sl = pres.addSlide();
    sl.background = { color: LIGHT };

    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 1.05,
      fill: { color: GREEN }, line: { color: GREEN }
    });
    sl.addText("EXEMPLO DE RESULTADO — SIMULADO PAES", {
      x: 0.5, y: 0, w: 9, h: 1.05,
      fontSize: 22, bold: true, color: WHITE,
      align: "left", valign: "middle", fontFace: "Arial Black", margin: 0
    });

    // Card de resultado geral
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0.3, y: 1.15, w: 3.4, h: 4.1,
      fill: { color: NAVY }, line: { color: NAVY },
      shadow: makeShadow()
    });
    sl.addText("SEU RESULTADO", {
      x: 0.35, y: 1.2, w: 3.3, h: 0.45,
      fontSize: 13, bold: true, color: GOLD,
      align: "center", fontFace: "Arial Black", margin: 0
    });
    sl.addShape(pres.shapes.LINE, {
      x: 0.45, y: 1.68, w: 3.1, h: 0,
      line: { color: GOLD2, width: 0.5 }
    });
    sl.addText("580", {
      x: 0.35, y: 1.75, w: 3.3, h: 1.1,
      fontSize: 72, bold: true, color: GOLD,
      align: "center", fontFace: "Arial Black", margin: 0
    });
    sl.addText("PONTOS", {
      x: 0.35, y: 2.75, w: 3.3, h: 0.4,
      fontSize: 14, color: WHITE, align: "center", margin: 0
    });
    sl.addShape(pres.shapes.LINE, {
      x: 0.45, y: 3.2, w: 3.1, h: 0,
      line: { color: NAVY2, width: 0.5 }
    });
    const stats = [
      { label: "Acertos",      val: "42 / 60" },
      { label: "Ranking",      val: "#73 / 850" },
      { label: "Percentil",    val: "Top 9%"    },
    ];
    stats.forEach((s, i) => {
      sl.addText(s.label + ":", {
        x: 0.4, y: 3.35 + i * 0.58, w: 1.6, h: 0.5,
        fontSize: 12, color: GRAY, align: "left", margin: 0
      });
      sl.addText(s.val, {
        x: 2.0, y: 3.35 + i * 0.58, w: 1.65, h: 0.5,
        fontSize: 13, bold: true, color: WHITE, align: "right", margin: 0
      });
    });

    // Desempenho por área (barras)
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 4.0, y: 1.15, w: 5.7, h: 4.1,
      fill: { color: WHITE }, line: { color: "D0D8E4", width: 1 },
      shadow: makeShadow()
    });
    sl.addText("DESEMPENHO POR ÁREA", {
      x: 4.1, y: 1.22, w: 5.5, h: 0.45,
      fontSize: 13, bold: true, color: NAVY2,
      align: "left", fontFace: "Arial Black", margin: 0
    });
    sl.addShape(pres.shapes.LINE, {
      x: 4.1, y: 1.7, w: 5.4, h: 0,
      line: { color: "D0D8E4", width: 0.5 }
    });

    const areas = [
      { label: "Linguagens",      pct: 80, cor: BLUE,   acertos: "12/15" },
      { label: "C. Humanas",      pct: 67, cor: PURPLE, acertos: "10/15" },
      { label: "C. da Natureza",  pct: 73, cor: GREEN,  acertos: "11/15" },
      { label: "Matemática",      pct: 60, cor: RED,    acertos: "9/15"  }
    ];
    const BAR_MAX_W = 3.8;
    areas.forEach((a, i) => {
      const y = 1.88 + i * 0.82;
      sl.addText(a.label, {
        x: 4.1, y, w: 2.0, h: 0.35,
        fontSize: 11, color: NAVY2, bold: true,
        align: "left", valign: "middle", margin: 0
      });
      sl.addText(a.acertos, {
        x: 9.1, y, w: 0.55, h: 0.35,
        fontSize: 11, bold: true, color: a.cor,
        align: "right", valign: "middle", margin: 0
      });
      // fundo da barra
      sl.addShape(pres.shapes.RECTANGLE, {
        x: 4.1, y: y + 0.38, w: BAR_MAX_W, h: 0.28,
        fill: { color: "E9ECEF" }, line: { color: "E9ECEF" }
      });
      // barra preenchida
      sl.addShape(pres.shapes.RECTANGLE, {
        x: 4.1, y: y + 0.38, w: BAR_MAX_W * (a.pct / 100), h: 0.28,
        fill: { color: a.cor }, line: { color: a.cor }
      });
      sl.addText(a.pct + "%", {
        x: 4.1 + BAR_MAX_W * (a.pct / 100) + 0.08, y: y + 0.36, w: 0.5, h: 0.32,
        fontSize: 10, bold: true, color: a.cor,
        align: "left", valign: "middle", margin: 0
      });
    });
  }

  // ══════════════════════════════════════════
  // SLIDE 9 — CRONOGRAMA DE ESTUDOS
  // ══════════════════════════════════════════
  {
    let sl = pres.addSlide();
    sl.background = { color: LIGHT };

    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 1.05,
      fill: { color: PURPLE }, line: { color: PURPLE }
    });
    sl.addText("CRONOGRAMA SUGERIDO DE ESTUDOS", {
      x: 0.5, y: 0, w: 9, h: 1.05,
      fontSize: 24, bold: true, color: WHITE,
      align: "left", valign: "middle", fontFace: "Arial Black", margin: 0
    });

    const fases = [
      {
        fase: "FASE 1", titulo: "Diagnóstico", periodo: "Semana 1-2", color: BLUE,
        items: ["Fazer prova anterior", "Mapear pontos fracos", "Definir metas por área"]
      },
      {
        fase: "FASE 2", titulo: "Conteúdo", periodo: "Semana 3-8", color: GREEN,
        items: ["Estudar os assuntos mais cobrados", "Listas de exercícios", "Revisão semanal"]
      },
      {
        fase: "FASE 3", titulo: "Simulados", periodo: "Semana 9-14", color: GOLD2,
        items: ["1 simulado completo por semana", "Análise do desvio padrão", "Corrigir os erros"]
      },
      {
        fase: "FASE 4", titulo: "Revisão Final", periodo: "Semana 15-16", color: RED,
        items: ["Revisar fórmulas e conceitos", "Simulado intensivo", "Descanso e preparação"]
      }
    ];

    fases.forEach((f, i) => {
      const x = 0.3 + i * 2.38;
      // Cabeçalho
      sl.addShape(pres.shapes.RECTANGLE, {
        x, y: 1.2, w: 2.22, h: 0.55,
        fill: { color: f.color }, line: { color: f.color }
      });
      sl.addText(f.fase, {
        x, y: 1.2, w: 2.22, h: 0.3,
        fontSize: 11, bold: true, color: WHITE,
        align: "center", valign: "middle", fontFace: "Arial Black", margin: 0
      });
      sl.addText(f.titulo, {
        x, y: 1.5, w: 2.22, h: 0.25,
        fontSize: 10, color: WHITE,
        align: "center", valign: "middle", margin: 0
      });
      // Período
      sl.addShape(pres.shapes.RECTANGLE, {
        x, y: 1.78, w: 2.22, h: 0.38,
        fill: { color: "0A1628" }, line: { color: f.color, width: 1 }
      });
      sl.addText("⏱  " + f.periodo, {
        x, y: 1.78, w: 2.22, h: 0.38,
        fontSize: 10.5, color: GOLD,
        align: "center", valign: "middle", margin: 0
      });
      // Itens
      sl.addShape(pres.shapes.RECTANGLE, {
        x, y: 2.2, w: 2.22, h: 3.0,
        fill: { color: WHITE }, line: { color: "D0D8E4", width: 1 },
        shadow: makeShadow()
      });
      f.items.forEach((item, j) => {
        sl.addShape(pres.shapes.OVAL, {
          x: x + 0.12, y: 2.32 + j * 0.88, w: 0.3, h: 0.3,
          fill: { color: f.color }, line: { color: f.color }
        });
        sl.addText(item, {
          x: x + 0.5, y: 2.27 + j * 0.88, w: 1.65, h: 0.48,
          fontSize: 10.5, color: NAVY2,
          align: "left", valign: "middle", fontFace: "Arial",
          lineSpacingMultiple: 1.2, margin: 2
        });
      });
    });
  }

  // ══════════════════════════════════════════
  // SLIDE 10 — ENCERRAMENTO / CTA
  // ══════════════════════════════════════════
  {
    let sl = pres.addSlide();
    sl.background = { color: NAVY };

    // Fundo decorativo
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 3.8, w: 10, h: 1.825,
      fill: { color: "060F1A" }, line: { color: "060F1A" }
    });
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.08,
      fill: { color: GOLD }, line: { color: GOLD }
    });
    sl.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 3.8, w: 10, h: 0.06,
      fill: { color: GOLD }, line: { color: GOLD }
    });

    // Coroa
    sl.addText("♛", {
      x: 3.8, y: 0.25, w: 2.4, h: 1.4,
      fontSize: 80, color: GOLD, align: "center", fontFace: "Arial"
    });

    // Título
    sl.addText("PRONTO PARA REINAR?", {
      x: 1.0, y: 1.5, w: 8.0, h: 0.85,
      fontSize: 38, bold: true, color: GOLD,
      align: "center", fontFace: "Arial Black", margin: 0
    });

    // Subtítulo
    sl.addText("Acesse os simulados, resolva provas anteriores e acompanhe sua evolução com análise estatística completa!", {
      x: 1.2, y: 2.35, w: 7.6, h: 1.1,
      fontSize: 15, color: WHITE, align: "center",
      lineSpacingMultiple: 1.45, fontFace: "Arial", margin: 0
    });

    // 3 botões de ação
    const btns = [
      { label: "FAZER SIMULADO",    color: RED,   x: 1.0 },
      { label: "VER PROVAS ANTIGAS", color: BLUE,  x: 3.85 },
      { label: "TIRAR DÚVIDAS",     color: GREEN, x: 6.7  }
    ];
    btns.forEach(b => {
      sl.addShape(pres.shapes.RECTANGLE, {
        x: b.x, y: 3.95, w: 2.6, h: 0.6,
        fill: { color: b.color }, line: { color: b.color },
        shadow: makeShadow()
      });
      sl.addText(b.label, {
        x: b.x, y: 3.95, w: 2.6, h: 0.6,
        fontSize: 11, bold: true, color: WHITE,
        align: "center", valign: "middle", fontFace: "Arial Black", margin: 0
      });
    });

    // Rodapé
    sl.addText("O REIZINHO DO PAES  •  THIAGO TIERS  •  PAES UEMA  ♛", {
      x: 0, y: 4.98, w: 10, h: 0.645,
      fontSize: 12, color: GOLD, align: "center", valign: "middle",
      fontFace: "Arial", italic: true, margin: 0
    });
  }

  // ── Salvar ──────────────────────────────
  const outPath = "C:/Users/User/OneDrive/Desktop/Curso/PAES_Reizinho_ThiagoTiers.pptx";
  await pres.writeFile({ fileName: outPath });
  console.log("✔  Arquivo salvo em:", outPath);
}

build().catch(err => { console.error(err); process.exit(1); });
