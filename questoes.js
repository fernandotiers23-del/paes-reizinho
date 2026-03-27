/* ==============================================
   BANCO DE QUESTÕES — PAES UEMA
   60 questões no estilo PAES
   ============================================== */

const QUESTOES = [

  /* ===== LINGUAGENS E CÓDIGOS — 15 questões ===== */

  { id:1, area:"Linguagens e Códigos", disciplina:"Língua Portuguesa",
    enunciado:`Leia o trecho: <em>"O sol abraçou a cidade ao amanhecer, acordando cada rua com seu toque dourado."</em><br><br>A figura de linguagem predominante no trecho é:`,
    a:"Metáfora", b:"Metonímia", c:"Personificação", d:"Hipérbole", e:"Antítese",
    gabarito:"C",
    explicacao:"O sol é descrito com ações humanas (abraçar, acordar), caracterizando a <strong>personificação</strong> (prosopopeia)."
  },

  { id:2, area:"Linguagens e Códigos", disciplina:"Língua Portuguesa",
    enunciado:`Assinale a alternativa em que a concordância verbal está de acordo com a norma culta:`,
    a:"Haviam muitas pessoas na praça naquele dia",
    b:"Houveram vários problemas durante a reunião",
    c:"Havia muitas pessoas aguardando na praça",
    d:"Fazem dez anos que me formei na universidade",
    e:"Fizeram muitos anos desde que nos encontramos",
    gabarito:"C",
    explicacao:"O verbo <strong>haver</strong> com sentido de <em>existir</em> é impessoal e permanece no singular: <em>havia muitas pessoas</em>."
  },

  { id:3, area:"Linguagens e Códigos", disciplina:"Língua Portuguesa",
    enunciado:`Na frase <em>"Embora chovesse muito, a festa continuou animada"</em>, o conectivo em destaque expressa relação de:`,
    a:"Causa", b:"Consequência", c:"Concessão", d:"Condição", e:"Conclusão",
    gabarito:"C",
    explicacao:"A conjunção <strong>embora</strong> indica concessão — admite uma ideia contrária sem comprometer a ideia principal da oração."
  },

  { id:4, area:"Linguagens e Códigos", disciplina:"Língua Portuguesa",
    enunciado:`Qual das alternativas apresenta o uso CORRETO da crase?`,
    a:"Fui à escola cedo esta manhã",
    b:"Fui à pé para casa ontem",
    c:"Entreguei o relatório à ele pessoalmente",
    d:"Vou à São Paulo amanhã cedo",
    e:"Refiro-me à tempos muito difíceis",
    gabarito:"A",
    explicacao:"A crase ocorre antes de palavras femininas que admitem artigo. <em>Escola</em> é feminina e aceita o artigo <em>a</em>, logo: <strong>fui à escola</strong>. Não se usa crase antes de pronome pessoal, de cidade estrangeira nem de palavras masculinas."
  },

  { id:5, area:"Linguagens e Códigos", disciplina:"Língua Portuguesa",
    enunciado:`O verbo que exige a preposição <strong>"a"</strong> em sua regência é:`,
    a:"Informar alguém", b:"Obedecer alguém", c:"Namorar alguém", d:"Visitar alguém", e:"Chamar alguém",
    gabarito:"B",
    explicacao:"O verbo <strong>obedecer</strong> é transitivo indireto e exige a preposição <em>a</em>: obedecer <strong>a</strong> alguém / às regras."
  },

  { id:6, area:"Linguagens e Códigos", disciplina:"Língua Portuguesa",
    enunciado:`Leia o verso de Carlos Drummond de Andrade: <em>"No meio do caminho tinha uma pedra / tinha uma pedra no meio do caminho."</em><br><br>O recurso expressivo predominante é:`,
    a:"Sinestesia", b:"Gradação", c:"Anáfora", d:"Eufemismo", e:"Ironia",
    gabarito:"C",
    explicacao:"<strong>Anáfora</strong> é a repetição de palavras no início de versos ou frases. Drummond repete a estrutura criando o efeito rítmico característico do poema."
  },

  { id:7, area:"Linguagens e Códigos", disciplina:"Língua Portuguesa",
    enunciado:`Identifique a alternativa em que a palavra está grafada CORRETAMENTE de acordo com a norma ortográfica:`,
    a:"Excessão", b:"Excursão", c:"Discursão", d:"Expontâneo", e:"Errôneo",
    gabarito:"B",
    explicacao:"<strong>Excursão</strong> está correta. As formas corretas das demais são: exceção, discussão, espontâneo. <em>Errôneo</em> também é correto, mas a questão pede a palavra grafada corretamente dentre as erradas; excursão não apresenta erro."
  },

  { id:8, area:"Linguagens e Códigos", disciplina:"Língua Portuguesa",
    enunciado:`Em <em>"Comprei um carro novo, elegante e econômico"</em>, os adjetivos exercem a função de:`,
    a:"Predicativo do sujeito", b:"Adjunto adverbial", c:"Complemento nominal", d:"Adjunto adnominal", e:"Aposto",
    gabarito:"D",
    explicacao:"Os adjetivos <em>novo</em>, <em>elegante</em> e <em>econômico</em> acompanham diretamente o substantivo <em>carro</em> como <strong>adjuntos adnominais</strong>."
  },

  { id:9, area:"Linguagens e Códigos", disciplina:"Literatura",
    enunciado:`A Semana de Arte Moderna de 1922 é o marco do Modernismo brasileiro. Assinale a alternativa que apresenta uma característica CORRETA desse movimento:`,
    a:"Valorização das formas clássicas e da linguagem culta e rebuscada",
    b:"Ruptura com os padrões tradicionais e valorização da cultura e identidade nacional",
    c:"Idealização da natureza brasileira e sentimentalismo exacerbado",
    d:"Imitação fiel dos modelos literários europeus renascentistas",
    e:"Foco na perfeição formal e objetividade de cunho científico",
    gabarito:"B",
    explicacao:"O Modernismo de 1922 buscou a <strong>ruptura</strong> com o parnasianismo e o simbolismo, valorizando a identidade brasileira, o folclore, a língua falada e os elementos nacionais."
  },

  { id:10, area:"Linguagens e Códigos", disciplina:"Literatura",
    enunciado:`Gonçalves Dias, poeta maranhense e grande representante do Romantismo brasileiro, é autor de qual famoso poema que expressa saudade da terra natal?`,
    a:"O Guarani", b:"Canção do Exílio", c:"Dom Casmurro", d:"Iracema", e:"A Moreninha",
    gabarito:"B",
    explicacao:"<strong>Canção do Exílio</strong> foi escrito por Gonçalves Dias enquanto estudava em Portugal e expressa sua saudade do Brasil. É um dos poemas mais conhecidos da literatura brasileira."
  },

  { id:11, area:"Linguagens e Códigos", disciplina:"Literatura",
    enunciado:`Machado de Assis, principal escritor do Realismo brasileiro, é autor de qual das obras abaixo?`,
    a:"O Cortiço", b:"A Escrava Isaura", c:"Memórias Póstumas de Brás Cubas", d:"Til", e:"O Ateneu",
    gabarito:"C",
    explicacao:"<strong>Memórias Póstumas de Brás Cubas</strong> (1881) é considerado o marco do Realismo brasileiro, escrito por Machado de Assis. <em>O Cortiço</em> é de Aluísio Azevedo."
  },

  { id:12, area:"Linguagens e Códigos", disciplina:"Literatura",
    enunciado:`A literatura de cordel, presente no Nordeste e no Maranhão, caracteriza-se principalmente por:`,
    a:"Prosa longa em volumes encadernados, com temática histórica acadêmica",
    b:"Poesia em versos rimados impressa em folhetos, com temas populares e cotidianos",
    c:"Teatro de máscaras de origem africana encenado em festas religiosas",
    d:"Canções de ninar transmitidas exclusivamente de forma oral",
    e:"Poesia erudita com influência clássica greco-latina",
    gabarito:"B",
    explicacao:"A literatura de cordel é poesia popular em folhetos (originalmente pendurados em cordas). Seus temas incluem o cotidiano, o sobrenatural, heróis populares e o humor nordestino."
  },

  { id:13, area:"Linguagens e Códigos", disciplina:"Língua Inglesa",
    enunciado:`Read the text and answer the question.<br><br><em>"Climate change is one of the biggest challenges of our century. Scientists warn that rising temperatures could affect food production, water availability, and biodiversity worldwide. Governments must act now to reduce carbon emissions."</em><br><br>According to the text, climate change can affect:`,
    a:"Only developed countries in the northern hemisphere",
    b:"Only the biodiversity of tropical forests",
    c:"Food production, water availability and biodiversity worldwide",
    d:"Only carbon emissions from factories",
    e:"Only water availability in dry regions",
    gabarito:"C",
    explicacao:"The text clearly states that rising temperatures 'could affect <strong>food production, water availability, and biodiversity worldwide</strong>'."
  },

  { id:14, area:"Linguagens e Códigos", disciplina:"Língua Inglesa",
    enunciado:`Choose the correct translation of <strong>'actually'</strong> in: <em>"He said he was tired, but actually he just didn't want to go."</em>`,
    a:"Atualmente", b:"Na verdade", c:"Finalmente", d:"Ativamente", e:"Talvez",
    gabarito:"B",
    explicacao:"<strong>Actually</strong> é um falso cognato. Apesar de parecer 'atualmente', significa <em>na verdade / de fato</em>. 'Atualmente' em inglês é <em>currently</em> ou <em>nowadays</em>."
  },

  { id:15, area:"Linguagens e Códigos", disciplina:"Língua Inglesa",
    enunciado:`Complete the sentence with the correct verb form:<br><em>"She ___ her homework every day after school."</em>`,
    a:"is doing", b:"do", c:"does", d:"are doing", e:"did",
    gabarito:"C",
    explicacao:"Com terceira pessoa do singular (she/he/it) no Simple Present, acrescenta-se <strong>-s</strong> ao verbo: <em>she <strong>does</strong></em>. A frase indica hábito (<em>every day</em>)."
  },

  /* ===== CIÊNCIAS HUMANAS — 15 questões ===== */

  { id:16, area:"Ciências Humanas", disciplina:"História",
    enunciado:`A Proclamação da República brasileira, em 15 de novembro de 1889, resultou principalmente de:`,
    a:"Uma invasão estrangeira ao território brasileiro",
    b:"A insatisfação do Exército e o enfraquecimento da Monarquia após a abolição da escravidão",
    c:"Um plebiscito popular que elegeu o sistema republicano",
    d:"A pressão direta dos Estados Unidos sobre o governo imperial",
    e:"A falência econômica do Império após a Guerra do Paraguai",
    gabarito:"B",
    explicacao:"A queda da Monarquia resultou da insatisfação militar (que queria mais poder político), do enfraquecimento do apoio dos fazendeiros após a Abolição (1888) e do crescimento do movimento republicano."
  },

  { id:17, area:"Ciências Humanas", disciplina:"História",
    enunciado:`O Estado Novo (1937–1945), período ditatorial de Getúlio Vargas, caracterizou-se por:`,
    a:"Democracia plena com eleições livres e multipartidárias",
    b:"Centralização do poder, fechamento do Congresso, censura e propaganda nacionalista",
    c:"Governo exclusivamente militar sem participação civil",
    d:"República parlamentarista com poder concentrado no Legislativo",
    e:"Governo socialista inspirado na Revolução Russa de 1917",
    gabarito:"B",
    explicacao:"O Estado Novo foi uma ditadura com centralização no Executivo, fechamento do Congresso, censura à imprensa, perseguição a opositores e forte apelo ao nacionalismo."
  },

  { id:18, area:"Ciências Humanas", disciplina:"História",
    enunciado:`O Ato Institucional nº 5 (AI-5), decretado em dezembro de 1968 durante a Ditadura Militar brasileira:`,
    a:"Permitiu eleições diretas para presidente da República",
    b:"Concedeu anistia política a presos e exilados",
    c:"Suspendeu direitos constitucionais e legitimou a perseguição e tortura de opositores",
    d:"Estabeleceu o processo de redemocratização do país",
    e:"Criou a abertura política gradual conhecida como 'distensão'",
    gabarito:"C",
    explicacao:"O AI-5 suspendeu direitos constitucionais, autorizou a cassação de mandatos, fechou o Congresso, decretou censura e legitimou a perseguição, prisão e tortura de opositores do regime."
  },

  { id:19, area:"Ciências Humanas", disciplina:"História",
    enunciado:`A Segunda Guerra Mundial (1939–1945) teve como estopim imediato:`,
    a:"A disputa entre EUA e URSS pelo controle do Oriente Médio",
    b:"A invasão da Polônia pela Alemanha nazista em setembro de 1939",
    c:"O ataque japonês à base americana de Pearl Harbor",
    d:"A Revolução Comunista na China",
    e:"O conflito entre França e Alemanha pela Alsácia-Lorena",
    gabarito:"B",
    explicacao:"O estopim da Segunda Guerra foi a <strong>invasão da Polônia pela Alemanha</strong> em 1º de setembro de 1939, que levou França e Inglaterra a declararem guerra à Alemanha nazista."
  },

  { id:20, area:"Ciências Humanas", disciplina:"História",
    enunciado:`A cidade de São Luís do Maranhão é uma das poucas capitais brasileiras que foi fundada por outro país europeu, não pelos portugueses. Quem fundou São Luís e em que ano?`,
    a:"Portugueses, em 1500", b:"Franceses, em 1612", c:"Holandeses, em 1624", d:"Espanhóis, em 1580", e:"Ingleses, em 1630",
    gabarito:"B",
    explicacao:"São Luís foi fundada pelos <strong>franceses</strong> em <strong>1612</strong> (Daniel de La Touche). Os portugueses expulsaram os franceses e assumiram o controle em 1615. Por isso São Luís é chamada de 'cidade fundada por franceses'."
  },

  { id:21, area:"Ciências Humanas", disciplina:"Geografia",
    enunciado:`O bioma Cerrado, segundo maior bioma brasileiro, é caracterizado por:`,
    a:"Clima equatorial, vegetação densa e alta pluviosidade o ano todo",
    b:"Vegetação xerófila com plantas adaptadas a secas prolongadas",
    c:"Vegetação de savana tropical com árvores retorcidas de raízes profundas e casca grossa",
    d:"Florestas de mangue em áreas litorâneas alagadiças",
    e:"Campos abertos sem vegetação arbórea e com intenso frio",
    gabarito:"C",
    explicacao:"O Cerrado é uma savana tropical com árvores baixas e retorcidas, casca espessa e raízes profundas (adaptadas à seca sazonal e ao fogo). É considerado hotspot de biodiversidade."
  },

  { id:22, area:"Ciências Humanas", disciplina:"Geografia",
    enunciado:`O Maranhão é o único estado brasileiro que está localizado em uma área de transição entre três grandes biomas. Quais são eles?`,
    a:"Amazônia, Cerrado e Caatinga",
    b:"Pampa, Pantanal e Cerrado",
    c:"Mata Atlântica, Cerrado e Pampa",
    d:"Caatinga, Pantanal e Cerrado",
    e:"Amazônia, Pampa e Restinga",
    gabarito:"A",
    explicacao:"O Maranhão abriga três grandes biomas: <strong>Amazônia</strong> (oeste), <strong>Cerrado</strong> (sul/centro) e <strong>Caatinga</strong> (sul/sudoeste). Essa condição de ecótono confere grande biodiversidade ao estado."
  },

  { id:23, area:"Ciências Humanas", disciplina:"Geografia",
    enunciado:`A urbanização acelerada no Brasil intensificou-se principalmente a partir de:`,
    a:"A colonização portuguesa no século XVI",
    b:"A Guerra do Paraguai no século XIX",
    c:"A industrialização e o êxodo rural nas décadas de 1950 a 1970",
    d:"A chegada de imigrantes europeus no final do século XIX",
    e:"A abolição da escravidão em 1888",
    gabarito:"C",
    explicacao:"A urbanização acelerada ocorreu entre 1950 e 1980, impulsionada pela <strong>industrialização</strong> (especialmente em São Paulo), que atraiu migrantes das áreas rurais para as cidades (<strong>êxodo rural</strong>)."
  },

  { id:24, area:"Ciências Humanas", disciplina:"Geografia",
    enunciado:`Os Lençóis Maranhenses, patrimônio natural no Maranhão, formam-se devido a:`,
    a:"Erosão do vento que cria dunas de areia branca, com lagoas formadas pela água da chuva",
    b:"Depósitos de sal deixados pelo recuo do oceano Atlântico",
    c:"Formações rochosas esculpidas por rios ao longo de milênios",
    d:"Atividade vulcânica subterrânea que cria lama e areia vulcânica",
    e:"Recifes de corais cobertos por areia fina trazida das praias",
    gabarito:"A",
    explicacao:"Os Lençóis Maranhenses são formados por <strong>dunas de areia branca</strong> criadas pelos ventos alisos. Entre as dunas, lagoas temporárias de água doce se formam pelas chuvas (jan–jun), criando a paisagem única do parque."
  },

  { id:25, area:"Ciências Humanas", disciplina:"Geografia",
    enunciado:`Uma consequência NEGATIVA da globalização é:`,
    a:"O aumento da circulação de informações e conhecimento entre países",
    b:"A homogeneização cultural com risco de extinção de culturas locais",
    c:"A redução das distâncias pelo avanço das tecnologias de comunicação",
    d:"O livre comércio que beneficia igualmente todos os países",
    e:"O crescimento da troca de experiências culturais entre povos",
    gabarito:"B",
    explicacao:"A <strong>homogeneização cultural</strong> é uma consequência negativa: a dominância de culturas hegemônicas (principalmente a norte-americana) ameaça línguas, tradições e culturas locais."
  },

  { id:26, area:"Ciências Humanas", disciplina:"Filosofia",
    enunciado:`Sócrates desenvolveu um método filosófico chamado <em>maiêutica</em>, que consistia em:`,
    a:"Transmitir diretamente o conhecimento ao aluno por meio de discursos elaborados",
    b:"Conduzir o interlocutor ao conhecimento através de perguntas e questionamentos",
    c:"Meditar em silêncio para alcançar a verdade espiritual interior",
    d:"Observar a natureza sistematicamente para descobrir leis universais",
    e:"Memorizar os textos dos grandes filósofos gregos anteriores",
    gabarito:"B",
    explicacao:"A maiêutica socrática (do grego: <em>arte da parteira</em>) usa perguntas sucessivas para conduzir o interlocutor a <em>descobrir</em> o conhecimento que já está dentro de si mesmo."
  },

  { id:27, area:"Ciências Humanas", disciplina:"Filosofia",
    enunciado:`O Iluminismo, movimento filosófico do século XVIII, defendia principalmente:`,
    a:"A fé religiosa como único caminho seguro para a verdade",
    b:"O poder absoluto dos monarcas por direito divino",
    c:"A razão como instrumento de progresso, liberdade e crítica ao poder estabelecido",
    d:"O retorno às tradições medievais e à autoridade da Igreja Católica",
    e:"A supremacia das emoções sobre a razão na condução da vida humana",
    gabarito:"C",
    explicacao:"O Iluminismo (Luzes) valorizava a <strong>razão</strong> e a ciência como instrumentos de progresso. Seus ideais de liberdade, igualdade e fraternidade influenciaram as revoluções americana (1776) e francesa (1789)."
  },

  { id:28, area:"Ciências Humanas", disciplina:"Filosofia",
    enunciado:`René Descartes é conhecido pela frase <em>"Cogito, ergo sum"</em> (Penso, logo existo). Isso significa que:`,
    a:"O corpo é mais importante que a mente na construção do conhecimento humano",
    b:"A existência humana depende exclusivamente das emoções e sentimentos",
    c:"A única certeza indubitável é a própria atividade do pensamento como prova de existência",
    d:"O conhecimento verdadeiro vem apenas da experiência sensorial",
    e:"A existência de Deus é a prova máxima da existência do ser humano",
    gabarito:"C",
    explicacao:"Descartes duvidou de tudo até encontrar uma certeza irrefutável: o próprio ato de duvidar prova que há um ser pensante. O <strong>pensamento</strong> é, portanto, o fundamento do conhecimento filosófico."
  },

  { id:29, area:"Ciências Humanas", disciplina:"Sociologia",
    enunciado:`A estratificação social refere-se à divisão da sociedade em grupos hierárquicos. O sistema de estratificação historicamente mais rígido é:`,
    a:"O sistema de classes sociais capitalista moderno",
    b:"O sistema de castas da Índia, onde a posição social é hereditária e imutável",
    c:"O sistema feudal europeu medieval",
    d:"O sistema republicano democrático contemporâneo",
    e:"O sistema tribal das sociedades primitivas pré-históricas",
    gabarito:"B",
    explicacao:"O sistema de <strong>castas hinduístas</strong> é o mais rígido: a casta é hereditária e não há mobilidade social — o indivíduo nasce e morre na mesma casta."
  },

  { id:30, area:"Ciências Humanas", disciplina:"Sociologia",
    enunciado:`O Bumba Meu Boi, manifestação cultural maranhense tombada pelo IPHAN como patrimônio imaterial, é resultado da fusão de quais matrizes culturais?`,
    a:"Apenas cultura europeia portuguesa trazida pelos colonizadores",
    b:"Apenas cultura africana dos escravizados trazidos para o Maranhão",
    c:"Indígena, africana e europeia, sintetizadas na cultura popular maranhense",
    d:"Cultura greco-romana e árabe trazidas por comerciantes",
    e:"Cultura francesa e portuguesa do período colonial",
    gabarito:"C",
    explicacao:"O Bumba Meu Boi sintetiza as três matrizes étnicas do Brasil: <strong>europeia</strong> (enredo cristão, instrumentos), <strong>africana</strong> (percussão, dança) e <strong>indígena</strong> (personagens, elementos naturais)."
  },

  /* ===== CIÊNCIAS DA NATUREZA — 15 questões ===== */

  { id:31, area:"Ciências da Natureza", disciplina:"Biologia",
    enunciado:`A principal diferença entre mitose e meiose é:`,
    a:"A mitose ocorre apenas em animais; a meiose, apenas em vegetais",
    b:"A mitose gera células com cromossomos reduzidos à metade; a meiose mantém o número original",
    c:"A mitose gera 2 células diploides geneticamente idênticas; a meiose gera 4 células haploides com variabilidade genética",
    d:"Na mitose há crossing-over; na meiose, não",
    e:"A mitose é exclusiva de células reprodutivas; a meiose é de células somáticas",
    gabarito:"C",
    explicacao:"<strong>Mitose</strong>: 2 células filhas diploides (2n), geneticamente idênticas. <strong>Meiose</strong>: 4 células filhas haploides (n), com variabilidade genética (crossing-over). A meiose ocorre na formação de gametas."
  },

  { id:32, area:"Ciências da Natureza", disciplina:"Biologia",
    enunciado:`Ao cruzar uma planta de ervilha de semente amarela (AA) com uma de semente verde (aa), qual será o fenótipo da geração F1?`,
    a:"50% amarela e 50% verde", b:"100% verde", c:"100% amarela (todas Aa)", d:"75% amarela e 25% verde", e:"25% amarela e 75% verde",
    gabarito:"C",
    explicacao:"No cruzamento AA × aa, toda F1 terá genótipo <strong>Aa</strong>. Como o alelo A (amarelo) é dominante sobre a (verde), <strong>100% serão amarelas</strong> fenotipicamente."
  },

  { id:33, area:"Ciências da Natureza", disciplina:"Biologia",
    enunciado:`Na cadeia alimentar: Grama → Gafanhoto → Rã → Cobra → Gavião<br><br>Os produtores são representados pela:`,
    a:"Grama, pois realiza fotossíntese e produz matéria orgânica",
    b:"Rã, pois está no nível médio da cadeia",
    c:"Cobra, pois é predadora de consumidores primários",
    d:"Gavião, pois está no topo da cadeia trófica",
    e:"Gafanhoto, pois consome diretamente a grama",
    gabarito:"A",
    explicacao:"<strong>Produtores</strong> são os organismos autotróficos que realizam fotossíntese. A grama é o único autótrofo da cadeia; os demais são consumidores (heterótrofos)."
  },

  { id:34, area:"Ciências da Natureza", disciplina:"Biologia",
    enunciado:`De acordo com a Teoria da Seleção Natural de Charles Darwin, os indivíduos que sobrevivem e se reproduzem preferencialmente são aqueles que:`,
    a:"São maiores e fisicamente mais fortes que os demais",
    b:"Apresentam características mais favoráveis ao ambiente em que vivem",
    c:"Sofrem mutações benéficas ao longo de sua vida adulta",
    d:"São os mais velhos e experientes da população",
    e:"Possuem maior quantidade total de variações no DNA",
    gabarito:"B",
    explicacao:"A <strong>seleção natural</strong> favorece indivíduos com variações hereditárias que melhor se adaptam ao ambiente, aumentando suas chances de sobrevivência e reprodução."
  },

  { id:35, area:"Ciências da Natureza", disciplina:"Biologia",
    enunciado:`As vacinas funcionam estimulando o sistema imunológico. O mecanismo principal de ação das vacinas baseia-se na:`,
    a:"Destruição direta de bactérias e vírus por substâncias químicas presentes na vacina",
    b:"Produção de memória imunológica, preparando o organismo para combater infecções futuras",
    c:"Inibição da reprodução de vírus no interior das células",
    d:"Substituição de anticorpos fracos por anticorpos sintéticos da vacina",
    e:"Eliminação dos microrganismos pelo calor gerado pela febre vacinal",
    gabarito:"B",
    explicacao:"As vacinas introduzem antígenos (vírus atenuados, mortos ou fragmentos) que estimulam o sistema imune a produzir anticorpos e <strong>células de memória</strong>. Em contato futuro com o agente, a resposta é mais rápida e eficiente."
  },

  { id:36, area:"Ciências da Natureza", disciplina:"Biologia",
    enunciado:`O gás oxigênio (O₂) liberado durante a fotossíntese é proveniente de:`,
    a:"A decomposição do gás carbônico (CO₂) absorvido pelas folhas",
    b:"A fotólise da água (H₂O) que ocorre na fase clara (fotoquímica)",
    c:"A degradação das moléculas de glicose na fase escura",
    d:"A respiração celular mitocondrial das células vegetais",
    e:"A quebra simultânea de CO₂ e H₂O no estroma dos cloroplastos",
    gabarito:"B",
    explicacao:"O O₂ vem da <strong>fotólise da água</strong> na fase clara: 2H₂O → 4H⁺ + 4e⁻ + <strong>O₂</strong>. O oxigênio liberado é um subproduto da quebra da água pela luz solar."
  },

  { id:37, area:"Ciências da Natureza", disciplina:"Química",
    enunciado:`Sobre a Tabela Periódica, assinale a alternativa CORRETA:`,
    a:"Elementos do mesmo período têm o mesmo número de elétrons na última camada",
    b:"Elementos do mesmo grupo têm o mesmo número de prótons no núcleo",
    c:"Elementos do mesmo grupo (família) têm propriedades químicas semelhantes",
    d:"Os metais estão localizados no lado direito da tabela periódica",
    e:"Os gases nobres são altamente reativos quimicamente",
    gabarito:"C",
    explicacao:"Elementos do mesmo <strong>grupo</strong> têm o mesmo número de elétrons na camada de valência, o que determina propriedades químicas semelhantes. Metais ficam à <em>esquerda</em> e gases nobres são <em>inertes</em> (pouco reativos)."
  },

  { id:38, area:"Ciências da Natureza", disciplina:"Química",
    enunciado:`Balanceando a equação de combustão do metano:<br>CH₄ + O₂ → CO₂ + H₂O<br><br>Os coeficientes estequiométricos corretos são:`,
    a:"1, 1, 1, 1", b:"1, 2, 1, 2", c:"2, 2, 2, 4", d:"1, 2, 2, 1", e:"2, 1, 1, 2",
    gabarito:"B",
    explicacao:"CH₄ + <strong>2</strong>O₂ → CO₂ + <strong>2</strong>H₂O.<br>C: 1=1✓ | H: 4=4✓ | O: 4=4✓. Coeficientes: 1, 2, 1, 2."
  },

  { id:39, area:"Ciências da Natureza", disciplina:"Química",
    enunciado:`Uma solução aquosa com pH = 3 é classificada como:`,
    a:"Básica, pois o pH é menor que 7",
    b:"Ácida, pois o pH é menor que 7 e há alta concentração de H⁺",
    c:"Neutra, pois está relativamente próxima do valor 7",
    d:"Básica, pois a concentração de OH⁻ supera a de H⁺",
    e:"Neutra, pois o pH é múltiplo de 3",
    gabarito:"B",
    explicacao:"Escala de pH: pH &lt; 7 → <strong>ácido</strong>; pH = 7 → neutro; pH &gt; 7 → básico. pH = 3 indica solução ácida com alta concentração de íons H⁺."
  },

  { id:40, area:"Ciências da Natureza", disciplina:"Química",
    enunciado:`A ligação IÔNICA forma-se entre:`,
    a:"Dois átomos de não-metais com diferença de eletronegatividade pequena",
    b:"Um metal e um não-metal, com transferência de elétrons entre os átomos",
    c:"Dois átomos iguais que compartilham elétrons de valência",
    d:"Carbono e hidrogênio em moléculas orgânicas diversas",
    e:"Hidrogênio e átomos altamente eletronegativos por atração dipolo-dipolo",
    gabarito:"B",
    explicacao:"A ligação iônica ocorre entre <strong>metal e não-metal</strong>: o metal cede elétrons (torna-se cátion +) e o não-metal recebe (torna-se ânion −). Exemplo clássico: NaCl (cloreto de sódio)."
  },

  { id:41, area:"Ciências da Natureza", disciplina:"Química",
    enunciado:`Os alcanos têm fórmula geral C<sub>n</sub>H<sub>2n+2</sub>. Qual é a fórmula molecular do propano (n = 3)?`,
    a:"C₃H₄", b:"C₃H₆", c:"C₃H₈", d:"C₃H₁₀", e:"C₃H₁₂",
    gabarito:"C",
    explicacao:"C<sub>n</sub>H<sub>2n+2</sub> com n=3: C₃H<sub>2(3)+2</sub> = <strong>C₃H₈</strong>. O propano é usado em botijões de gás doméstico (GLP)."
  },

  { id:42, area:"Ciências da Natureza", disciplina:"Física",
    enunciado:`De acordo com a 2ª Lei de Newton (F = m · a), se uma força resultante de 30 N é aplicada a um objeto de massa 5 kg, a aceleração resultante é:`,
    a:"150 m/s²", b:"25 m/s²", c:"6 m/s²", d:"3 m/s²", e:"0,17 m/s²",
    gabarito:"C",
    explicacao:"a = F/m = 30/5 = <strong>6 m/s²</strong>. A 2ª Lei de Newton relaciona força (N), massa (kg) e aceleração (m/s²)."
  },

  { id:43, area:"Ciências da Natureza", disciplina:"Física",
    enunciado:`Um objeto de massa 2 kg está a 10 m de altura. Considerando g = 10 m/s², sua energia potencial gravitacional é:`,
    a:"20 J", b:"100 J", c:"200 J", d:"50 J", e:"2 J",
    gabarito:"C",
    explicacao:"E<sub>p</sub> = m · g · h = 2 × 10 × 10 = <strong>200 J</strong>."
  },

  { id:44, area:"Ciências da Natureza", disciplina:"Física",
    enunciado:`Ao passar do vácuo para um meio como o vidro, a velocidade da luz:`,
    a:"Permanece igual, pois a velocidade da luz é sempre constante",
    b:"Aumenta, pois o meio comprime as ondas eletromagnéticas",
    c:"Diminui, pois o meio oferece resistência à propagação",
    d:"Torna-se zero enquanto atravessa o material",
    e:"Aumenta proporcionalmente à densidade do material",
    gabarito:"C",
    explicacao:"Ao entrar em qualquer meio material, a luz <strong>reduz sua velocidade</strong>. Isso causa a refração (mudança de direção). O índice de refração n = c/v indica a razão entre a velocidade no vácuo e no meio."
  },

  { id:45, area:"Ciências da Natureza", disciplina:"Física",
    enunciado:`Em um circuito elétrico com tensão V = 12 V e resistência R = 4 Ω, a corrente elétrica (I = V/R) é:`,
    a:"48 A", b:"8 A", c:"3 A", d:"16 A", e:"0,33 A",
    gabarito:"C",
    explicacao:"I = V/R = 12/4 = <strong>3 A</strong>. A Lei de Ohm descreve a relação linear entre tensão (V), corrente (I) e resistência (R)."
  },

  /* ===== MATEMÁTICA — 15 questões ===== */

  { id:46, area:"Matemática", disciplina:"Matemática",
    enunciado:`As raízes da função quadrática f(x) = x² − 6x + 8 são:`,
    a:"x = 2 e x = 4", b:"x = −2 e x = −4", c:"x = 1 e x = 8", d:"x = 3 e x = 3", e:"x = 2 e x = −4",
    gabarito:"A",
    explicacao:"Δ = b² − 4ac = 36 − 32 = 4; √Δ = 2.<br>x₁ = (6+2)/2 = <strong>4</strong>; x₂ = (6−2)/2 = <strong>2</strong>.<br>Verificação: (x−2)(x−4) = x²−6x+8 ✓"
  },

  { id:47, area:"Matemática", disciplina:"Matemática",
    enunciado:`Em uma progressão aritmética (PA), o primeiro termo é a₁ = 3 e a razão é r = 5. Qual é o 10º termo?`,
    a:"50", b:"48", c:"45", d:"53", e:"55",
    gabarito:"B",
    explicacao:"aₙ = a₁ + (n−1)·r<br>a₁₀ = 3 + (10−1)×5 = 3 + 45 = <strong>48</strong>"
  },

  { id:48, area:"Matemática", disciplina:"Matemática",
    enunciado:`Uma urna contém 4 bolas vermelhas e 6 bolas azuis. Retirando uma bola ao acaso, a probabilidade de ser vermelha é:`,
    a:"2/5", b:"3/5", c:"2/3", d:"1/4", e:"1/6",
    gabarito:"A",
    explicacao:"P(vermelha) = 4/10 = <strong>2/5</strong> = 0,4 = 40%."
  },

  { id:49, area:"Matemática", disciplina:"Matemática",
    enunciado:`Um triângulo tem base de 8 cm e altura de 6 cm. Sua área é:`,
    a:"48 cm²", b:"28 cm²", c:"24 cm²", d:"14 cm²", e:"12 cm²",
    gabarito:"C",
    explicacao:"A = (base × altura) / 2 = (8 × 6) / 2 = 48/2 = <strong>24 cm²</strong>"
  },

  { id:50, area:"Matemática", disciplina:"Matemática",
    enunciado:`Em um triângulo retângulo, sen α = 3/5 e cos α = 4/5. O valor de tg α é:`,
    a:"7/5", b:"5/3", c:"3/4", d:"4/3", e:"1/2",
    gabarito:"C",
    explicacao:"tg α = sen α / cos α = (3/5) ÷ (4/5) = 3/4 = <strong>0,75</strong>"
  },

  { id:51, area:"Matemática", disciplina:"Matemática",
    enunciado:`O valor de log₂ 32 é:`,
    a:"4", b:"5", c:"16", d:"6", e:"3",
    gabarito:"B",
    explicacao:"log₂ 32 = x ⟹ 2ˣ = 32 = 2⁵ ⟹ x = <strong>5</strong>"
  },

  { id:52, area:"Matemática", disciplina:"Matemática",
    enunciado:`O volume de uma esfera de raio r = 3 cm é (use π ≈ 3):`,
    a:"36 cm³", b:"72 cm³", c:"108 cm³", d:"27 cm³", e:"54 cm³",
    gabarito:"C",
    explicacao:"V = (4/3) × π × r³ = (4/3) × 3 × 3³ = 4 × 27 = <strong>108 cm³</strong>"
  },

  { id:53, area:"Matemática", disciplina:"Matemática",
    enunciado:`De quantas maneiras diferentes podemos escolher 3 alunos de um grupo de 5 para formar uma comissão (sem considerar a ordem)?`,
    a:"15", b:"60", c:"10", d:"20", e:"6",
    gabarito:"C",
    explicacao:"C(5,3) = 5! / (3! × 2!) = (5 × 4) / (2 × 1) = <strong>10</strong> combinações."
  },

  { id:54, area:"Matemática", disciplina:"Matemática",
    enunciado:`O determinante da matriz A = [[3, 1], [2, 4]] é:`,
    a:"10", b:"14", c:"8", d:"12", e:"6",
    gabarito:"A",
    explicacao:"det(A) = (3 × 4) − (1 × 2) = 12 − 2 = <strong>10</strong>"
  },

  { id:55, area:"Matemática", disciplina:"Matemática",
    enunciado:`O discriminante (Δ) da equação x² − 5x + 6 = 0 é:`,
    a:"1", b:"49", c:"11", d:"−1", e:"25",
    gabarito:"A",
    explicacao:"Δ = b² − 4ac = (−5)² − 4×1×6 = 25 − 24 = <strong>1</strong>. Como Δ > 0, há duas raízes reais e distintas."
  },

  { id:56, area:"Matemática", disciplina:"Matemática",
    enunciado:`Para a função exponencial f(x) = 2ˣ, o valor de f(3) é:`,
    a:"6", b:"8", c:"9", d:"12", e:"16",
    gabarito:"B",
    explicacao:"f(3) = 2³ = 2 × 2 × 2 = <strong>8</strong>"
  },

  { id:57, area:"Matemática", disciplina:"Matemática",
    enunciado:`Em uma progressão geométrica (PG) com a₁ = 2 e razão q = 3, o 4º termo é:`,
    a:"24", b:"54", c:"18", d:"162", e:"6",
    gabarito:"B",
    explicacao:"aₙ = a₁ × q^(n−1)<br>a₄ = 2 × 3^(4−1) = 2 × 27 = <strong>54</strong>"
  },

  { id:58, area:"Matemática", disciplina:"Matemática",
    enunciado:`A média aritmética dos dados 4, 7, 2, 9, 8 é:`,
    a:"7", b:"6", c:"5", d:"8", e:"9",
    gabarito:"B",
    explicacao:"Média = (4 + 7 + 2 + 9 + 8) / 5 = 30 / 5 = <strong>6</strong>"
  },

  { id:59, area:"Matemática", disciplina:"Matemática",
    enunciado:`Em um triângulo retângulo com catetos medindo 6 cm e 8 cm, a hipotenusa mede (Teorema de Pitágoras):`,
    a:"12 cm", b:"14 cm", c:"10 cm", d:"16 cm", e:"√100 cm",
    gabarito:"C",
    explicacao:"h² = 6² + 8² = 36 + 64 = 100 ⟹ h = √100 = <strong>10 cm</strong>"
  },

  { id:60, area:"Matemática", disciplina:"Matemática",
    enunciado:`O módulo do número complexo z = 3 + 4i é:`,
    a:"7", b:"12", c:"5", d:"25", e:"√7",
    gabarito:"C",
    explicacao:"|z| = √(a² + b²) = √(3² + 4²) = √(9 + 16) = √25 = <strong>5</strong>"
  }
];

/* Pré-calcular mapa de gabaritos */
const GABARITO_MAP = {};
QUESTOES.forEach(q => { GABARITO_MAP[q.id] = q.gabarito; });
