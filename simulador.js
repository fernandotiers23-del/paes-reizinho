/* ==============================================
   LÓGICA DO SIMULADOR — PAES UEMA
   ============================================== */

let respostas = {};        // {id: "A" | "B" | "C" | "D" | "E"}
let questaoAtual = 1;
let timerInterval = null;
let tempoRestante = 9000; // 2h30min em segundos

/* ── Init ── */
function initSimulador() {
  renderQuestao(questaoAtual);
  renderNavegacao();
  iniciarTimer();
  atualizarProgresso();
}

/* ── Timer ── */
function iniciarTimer() {
  atualizarDisplayTimer();
  timerInterval = setInterval(() => {
    tempoRestante--;
    atualizarDisplayTimer();
    if (tempoRestante <= 0) {
      clearInterval(timerInterval);
      encerrarSimulado(true);
    }
    if (tempoRestante === 600) { // aviso 10 min
      document.getElementById('timer').style.background = '#C0392B';
      alert('⚠️ Atenção! Faltam apenas 10 minutos!');
    }
  }, 1000);
}

function atualizarDisplayTimer() {
  const h = Math.floor(tempoRestante / 3600);
  const m = Math.floor((tempoRestante % 3600) / 60);
  const s = tempoRestante % 60;
  const str = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  const el = document.getElementById('timer');
  if (el) el.textContent = str;
  if (tempoRestante <= 1800) { // últimos 30 min
    if (el) el.style.color = '#FFD700';
  }
}

/* ── Render questão ── */
function renderQuestao(id) {
  const q = QUESTOES[id - 1];
  if (!q) return;

  document.getElementById('q-numero').textContent = `Questão ${id} de 60`;
  document.getElementById('q-area').textContent = q.area;
  document.getElementById('q-disciplina').textContent = q.disciplina;
  document.getElementById('q-enunciado').innerHTML = q.enunciado;

  const alternativasEl = document.getElementById('q-alternativas');
  alternativasEl.innerHTML = '';

  ['a','b','c','d','e'].forEach(letra => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'alt-btn';
    btn.dataset.letra = letra.toUpperCase();
    btn.dataset.qid = id;
    btn.innerHTML = `<span class="alt-letra">${letra.toUpperCase()}</span> <span class="alt-texto">${q[letra]}</span>`;

    if (respostas[id] === letra.toUpperCase()) {
      btn.classList.add('selecionada');
    }

    btn.addEventListener('click', () => selecionarResposta(id, letra.toUpperCase(), btn));
    li.appendChild(btn);
    alternativasEl.appendChild(li);
  });

  // Atualizar botões nav
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  if (prevBtn) prevBtn.disabled = id === 1;
  if (nextBtn) nextBtn.disabled = id === 60;

  // Destacar na navegação
  document.querySelectorAll('.nav-q-btn').forEach(b => b.classList.remove('atual'));
  const atual = document.querySelector(`.nav-q-btn[data-id="${id}"]`);
  if (atual) {
    atual.classList.add('atual');
    atual.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  questaoAtual = id;
}

/* ── Selecionar resposta ── */
function selecionarResposta(qid, letra, btnClicado) {
  // Toggle: se já estava marcada, desmarca
  if (respostas[qid] === letra) {
    delete respostas[qid];
    btnClicado.classList.remove('selecionada');
  } else {
    respostas[qid] = letra;
    document.querySelectorAll(`.alt-btn[data-qid="${qid}"]`).forEach(b => b.classList.remove('selecionada'));
    btnClicado.classList.add('selecionada');
  }

  // Atualizar botão de navegação
  const navBtn = document.querySelector(`.nav-q-btn[data-id="${qid}"]`);
  if (navBtn) {
    navBtn.classList.toggle('respondida', !!respostas[qid]);
  }

  atualizarProgresso();
}

/* ── Navegação ── */
function renderNavegacao() {
  const container = document.getElementById('nav-questoes');
  if (!container) return;
  container.innerHTML = '';

  const areas = {};
  QUESTOES.forEach(q => {
    if (!areas[q.area]) areas[q.area] = [];
    areas[q.area].push(q);
  });

  Object.entries(areas).forEach(([area, qs]) => {
    const label = document.createElement('div');
    label.className = 'nav-area-label';
    label.textContent = area;
    container.appendChild(label);

    const grid = document.createElement('div');
    grid.className = 'nav-grid';

    qs.forEach(q => {
      const btn = document.createElement('button');
      btn.className = 'nav-q-btn';
      btn.dataset.id = q.id;
      btn.textContent = q.id;
      if (respostas[q.id]) btn.classList.add('respondida');
      btn.addEventListener('click', () => renderQuestao(q.id));
      grid.appendChild(btn);
    });

    container.appendChild(grid);
  });
}

/* ── Progresso ── */
function atualizarProgresso() {
  const total = QUESTOES.length;
  const resp = Object.keys(respostas).length;
  const pct = Math.round((resp / total) * 100);

  const el = document.getElementById('progresso-texto');
  if (el) el.textContent = `${resp}/${total} respondidas`;

  const bar = document.getElementById('progresso-bar');
  if (bar) bar.style.width = pct + '%';

  const pctEl = document.getElementById('progresso-pct');
  if (pctEl) pctEl.textContent = pct + '%';
}

/* ── Encerrar ── */
function encerrarSimulado(forcado = false) {
  const respondidas = Object.keys(respostas).length;
  const naoRespondidas = 60 - respondidas;

  if (!forcado && naoRespondidas > 0) {
    const confirmar = confirm(`⚠️ Você ainda tem ${naoRespondidas} questão(ões) sem resposta.\n\nDeseja encerrar mesmo assim?`);
    if (!confirmar) return;
  }

  clearInterval(timerInterval);

  // Calcular tempo gasto
  const tempoGasto = 9000 - tempoRestante;
  const hG = Math.floor(tempoGasto / 3600);
  const mG = Math.floor((tempoGasto % 3600) / 60);
  const sG = tempoGasto % 60;

  // Montar resultado
  const resultado = {
    respostas,
    tempoGasto: `${String(hG).padStart(2,'0')}:${String(mG).padStart(2,'0')}:${String(sG).padStart(2,'0')}`,
    dataHora: new Date().toLocaleString('pt-BR'),
    simuladoId: 'PAES_' + Date.now()
  };

  localStorage.setItem('ultimo_resultado', JSON.stringify(resultado));
  window.location.href = 'resultado.html';
}

/* ── Exposição global ── */
window.irParaQuestao = renderQuestao;
window.proximaQuestao = () => { if (questaoAtual < 60) renderQuestao(questaoAtual + 1); };
window.questaoAnterior = () => { if (questaoAtual > 1) renderQuestao(questaoAtual - 1); };
window.encerrarSimulado = encerrarSimulado;

document.addEventListener('DOMContentLoaded', initSimulador);
