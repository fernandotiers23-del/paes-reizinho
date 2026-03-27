/* ==============================================
   CÁLCULO DE RESULTADO — PAES UEMA
   Inclui simulação de Desvio Padrão
   ============================================== */

/* Gera 300 notas simuladas de outros participantes (distribuição normal) */
function gerarNotasSimuladas(seed) {
  const rng = (function() {
    let s = seed || 42;
    return function() { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; };
  })();

  const notas = [];
  for (let i = 0; i < 300; i++) {
    // Box-Muller — média ~35, desvio ~8
    const u1 = rng(), u2 = rng();
    const z = Math.sqrt(-2 * Math.log(u1 + 0.0001)) * Math.cos(2 * Math.PI * u2);
    const nota = Math.round(35 + 8 * z);
    notas.push(Math.max(0, Math.min(60, nota)));
  }
  return notas;
}

function calcularMedia(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function calcularDesvio(arr, media) {
  const variancia = arr.reduce((acc, v) => acc + Math.pow(v - media, 2), 0) / arr.length;
  return Math.sqrt(variancia);
}

/* Calcula acertos por área */
function calcularPorArea(respostas) {
  const areas = {
    "Linguagens e Códigos":  { total: 0, acertos: 0, cor: '#1565C0' },
    "Ciências Humanas":      { total: 0, acertos: 0, cor: '#6C3483' },
    "Ciências da Natureza":  { total: 0, acertos: 0, cor: '#27AE60' },
    "Matemática":            { total: 0, acertos: 0, cor: '#C0392B' }
  };

  QUESTOES.forEach(q => {
    if (!areas[q.area]) return;
    areas[q.area].total++;
    const resp = respostas[q.id];
    if (resp && resp === q.gabarito) areas[q.area].acertos++;
  });

  return areas;
}

/* ── Renderiza página de resultado ── */
function renderResultado() {
  const raw = localStorage.getItem('ultimo_resultado');
  if (!raw) {
    document.getElementById('resultado-container').innerHTML = `
      <div style="text-align:center;padding:3rem">
        <h2 style="color:var(--navy)">Nenhum resultado encontrado</h2>
        <p style="color:var(--gray);margin:1rem 0">Você precisa realizar um simulado primeiro.</p>
        <a href="simulado.html" class="btn btn-gold" style="display:inline-flex;margin-top:1rem">Ir para o Simulado</a>
      </div>`;
    return;
  }

  const dados = JSON.parse(raw);
  const { respostas, tempoGasto, dataHora } = dados;

  /* Acertos brutos */
  let acertos = 0;
  QUESTOES.forEach(q => {
    if (respostas[q.id] && respostas[q.id] === q.gabarito) acertos++;
  });

  /* Notas simuladas de participantes */
  const notasOutros = gerarNotasSimuladas(12345);
  notasOutros.push(acertos); // inclui o candidato

  const media = calcularMedia(notasOutros);
  const desvio = calcularDesvio(notasOutros, media);
  const notaNormalizada = Math.round(500 + 100 * ((acertos - media) / desvio));

  /* Ranking */
  const ranking = notasOutros.filter(n => n < acertos).length + 1;
  const total = notasOutros.length;
  const percentil = Math.round((1 - ranking / total) * 100);

  /* Área */
  const porArea = calcularPorArea(respostas);

  /* Classificação */
  let classeNota = '', classeMsg = '';
  if (notaNormalizada >= 650) { classeNota = 'excelente'; classeMsg = '🏆 Excelente! Você está no topo!'; }
  else if (notaNormalizada >= 600) { classeNota = 'otimo'; classeMsg = '✅ Ótimo! Bem acima da média!'; }
  else if (notaNormalizada >= 500) { classeNota = 'medio'; classeMsg = '📊 Na média — continue estudando!'; }
  else if (notaNormalizada >= 400) { classeNota = 'atencao'; classeMsg = '⚠️ Abaixo da média — intensifique os estudos!'; }
  else { classeNota = 'critico'; classeMsg = '🚨 Zona crítica — é hora de uma virada!'; }

  /* ── Render HTML ── */
  const c = document.getElementById('resultado-container');
  c.innerHTML = `
    <!-- Cabeçalho -->
    <div class="res-header">
      <div class="res-header-info">
        <span class="badge badge-gold">PAES UEMA</span>
        <h1>Seu Resultado</h1>
        <p class="res-data">Realizado em ${dataHora} &nbsp;|&nbsp; Tempo: ${tempoGasto}</p>
      </div>
    </div>

    <!-- Painel principal -->
    <div class="res-grid">
      <!-- Nota e Desvio Padrão -->
      <div class="res-card res-nota-card">
        <div class="res-nota-num">${notaNormalizada}</div>
        <div class="res-nota-label">Nota Normalizada</div>
        <div class="res-acertos">${acertos} / 60 acertos</div>
        <div class="res-classificacao ${classeNota}">${classeMsg}</div>

        <div class="res-stats">
          <div class="res-stat-item">
            <span class="res-stat-val">${ranking}º</span>
            <span class="res-stat-label">Posição</span>
          </div>
          <div class="res-stat-item">
            <span class="res-stat-val">Top ${percentil}%</span>
            <span class="res-stat-label">Percentil</span>
          </div>
          <div class="res-stat-item">
            <span class="res-stat-val">${total}</span>
            <span class="res-stat-label">Participantes</span>
          </div>
        </div>
      </div>

      <!-- Fórmula desvio padrão -->
      <div class="res-card res-formula-card">
        <h3>📐 Cálculo pelo Desvio Padrão</h3>
        <div class="formula-box">Nota = 500 + 100 × [(NB − X̄) / σ]</div>
        <div class="formula-dados">
          <div class="formula-item">
            <span class="formula-sigla">NB</span>
            <span class="formula-desc">Seus acertos</span>
            <span class="formula-val">${acertos}</span>
          </div>
          <div class="formula-item">
            <span class="formula-sigla">X̄</span>
            <span class="formula-desc">Média dos participantes</span>
            <span class="formula-val">${media.toFixed(1)}</span>
          </div>
          <div class="formula-item">
            <span class="formula-sigla">σ</span>
            <span class="formula-desc">Desvio padrão</span>
            <span class="formula-val">${desvio.toFixed(1)}</span>
          </div>
          <div class="formula-item formula-resultado">
            <span class="formula-sigla">Nota</span>
            <span class="formula-desc">Sua pontuação final</span>
            <span class="formula-val">${notaNormalizada}</span>
          </div>
        </div>
        <div class="faixas-notas">
          ${[
            {r:'≥ 650', l:'Excelente', c:'#27AE60'},
            {r:'600–649', l:'Ótimo', c:'#1565C0'},
            {r:'500–599', l:'Na Média', c:'#E6A817'},
            {r:'400–499', l:'Abaixo da Média', c:'#E67E22'},
            {r:'< 400', l:'Zona Crítica', c:'#C0392B'}
          ].map(f => `
            <div class="faixa-item ${notaNormalizada >= parseInt(f.r) || (f.r.includes('≥') && notaNormalizada >= 650) || f.r === '< 400' && notaNormalizada < 400 ? 'faixa-ativa' : ''}" style="--faixa-cor:${f.c}">
              <span class="faixa-range">${f.r}</span>
              <span class="faixa-label">${f.l}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- Desempenho por área -->
    <div class="res-card mt-3">
      <div class="card-header-custom"><h3>📊 Desempenho por Área</h3></div>
      <div class="areas-grid">
        ${Object.entries(porArea).map(([area, dados]) => {
          const pct = Math.round((dados.acertos / dados.total) * 100);
          return `
            <div class="area-card">
              <div class="area-header" style="background:${dados.cor}">
                <span>${area}</span>
                <span class="area-nota">${dados.acertos}/${dados.total}</span>
              </div>
              <div class="area-body">
                <div class="progress-bar-wrap">
                  <div class="progress-bar-fill" style="width:${pct}%;background:${dados.cor}"></div>
                </div>
                <div class="area-pct">${pct}%</div>
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>

    <!-- Gabarito -->
    <div class="res-card mt-3">
      <div class="card-header-custom">
        <h3>📋 Gabarito Completo</h3>
        <div class="gabarito-legenda">
          <span class="leg-certo">✔ Certo</span>
          <span class="leg-errado">✘ Errado</span>
          <span class="leg-branco">— Em branco</span>
        </div>
      </div>
      <div class="gabarito-grid">
        ${QUESTOES.map(q => {
          const resp = respostas[q.id];
          const acertou = resp === q.gabarito;
          const branco = !resp;
          const cls = branco ? 'gab-branco' : acertou ? 'gab-certo' : 'gab-errado';
          return `
            <div class="gab-item ${cls}" title="${q.disciplina}: ${q.area}">
              <span class="gab-num">${q.id}</span>
              <span class="gab-resp">${resp || '—'}</span>
              <span class="gab-correto">${q.gabarito}</span>
            </div>`;
        }).join('')}
      </div>
    </div>

    <!-- Resolução detalhada -->
    <div class="res-card mt-3">
      <div class="card-header-custom"><h3>📚 Resolução Detalhada</h3></div>
      <div class="resolucao-list">
        ${QUESTOES.map(q => {
          const resp = respostas[q.id];
          const acertou = resp === q.gabarito;
          const branco = !resp;
          const cor = branco ? '#8B9CB0' : acertou ? '#27AE60' : '#C0392B';
          const icone = branco ? '—' : acertou ? '✔' : '✘';
          return `
            <div class="resolucao-item">
              <div class="res-q-header" onclick="toggleResolucao(${q.id})">
                <div class="res-q-left">
                  <span class="res-q-icone" style="color:${cor}">${icone}</span>
                  <span class="res-q-num">Questão ${q.id}</span>
                  <span class="res-q-disc">${q.disciplina}</span>
                </div>
                <div class="res-q-right">
                  <span style="color:${cor}">${branco ? 'Em branco' : acertou ? 'Acertou' : `Errou — Certo: <strong>${q.gabarito}</strong>`}</span>
                  <span class="res-toggle">▼</span>
                </div>
              </div>
              <div class="res-q-body" id="res-q-${q.id}" style="display:none">
                <div class="res-q-enunciado">${q.enunciado}</div>
                <div class="res-q-alternativas">
                  ${['a','b','c','d','e'].map(l => {
                    let altCls = '';
                    if (l.toUpperCase() === q.gabarito) altCls = 'alt-certa';
                    if (resp === l.toUpperCase() && !acertou) altCls = 'alt-errada';
                    return `<div class="res-alt ${altCls}"><strong>${l.toUpperCase()})</strong> ${q[l]}</div>`;
                  }).join('')}
                </div>
                <div class="res-q-explicacao"><strong>💡 Explicação:</strong> ${q.explicacao}</div>
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>

    <!-- Botões -->
    <div class="res-botoes">
      <a href="simulado.html" class="btn btn-gold btn-lg">🔁 Refazer Simulado</a>
      <a href="provas.html" class="btn btn-navy btn-lg">📂 Provas Anteriores</a>
      <a href="assuntos.html" class="btn btn-blue btn-lg">📖 Estudar Assuntos</a>
      <a href="index.html" class="btn btn-green btn-lg">🏠 Voltar ao Início</a>
    </div>
  `;
}

function toggleResolucao(id) {
  const el = document.getElementById('res-q-' + id);
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}
window.toggleResolucao = toggleResolucao;

document.addEventListener('DOMContentLoaded', renderResultado);
