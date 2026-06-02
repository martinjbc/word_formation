// app.js

// --- STATE MANAGEMENT ---
let appState = {
  currentTab: 'roadmap',
  activeTheoryLevel: 1,
  practice: {
    selectedLevel: 'all',
    questions: [],
    currentIndex: 0,
    score: 0,
    answers: [], // tracks status of each question: 'correct' or 'incorrect'
    isSubmitted: false
  }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initRoadmap();
  initTheory();
  initWordMatrix();
  initPractice();
});

// --- NAVIGATION ---
function initNavigation() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');
      switchTab(target);
    });
  });
}

function switchTab(tabId) {
  // Update state
  appState.currentTab = tabId;

  // Update navbar UI
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.getAttribute('data-target') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update views UI
  document.querySelectorAll('.view-section').forEach(section => {
    if (section.id === tabId) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });

  // Special hooks on tab changes
  if (tabId === 'practice' && appState.practice.questions.length === 0) {
    startNewPracticeSession();
  }
}

// --- ROADMAP VIEW ---
function initRoadmap() {
  const container = document.getElementById('roadmap-levels-container');
  container.innerHTML = '';

  if (WORD_FORMATION_DATA.studyPlan) {
    renderStudyPlan(container, WORD_FORMATION_DATA.studyPlan);
  }

  WORD_FORMATION_DATA.levels.forEach(level => {
    const card = document.createElement('div');
    card.className = 'roadmap-card';
    card.innerHTML = `
      <span class="level-badge">Nivel ${level.id}</span>
      <h3>${level.name}</h3>
      <p>${level.description}</p>
      <div style="display: flex; gap: 10px; margin-top: auto;">
        <button class="btn btn-primary btn-study" data-level="${level.id}">Estudiar</button>
        <button class="btn btn-practice" data-level="${level.id}">Practicar</button>
      </div>
    `;

    // Event listeners for roadmap actions
    card.querySelector('.btn-study').addEventListener('click', (e) => {
      const lvlId = parseInt(e.target.getAttribute('data-level'));
      appState.activeTheoryLevel = lvlId;
      renderTheoryContent();
      switchTab('theory');
    });

    card.querySelector('.btn-practice').addEventListener('click', (e) => {
      const lvlId = e.target.getAttribute('data-level');
      appState.practice.selectedLevel = lvlId;
      document.getElementById('practice-level-select').value = lvlId;
      startNewPracticeSession();
      switchTab('practice');
    });

    container.appendChild(card);
  });
}

function renderStudyPlan(container, plan) {
  const section = document.createElement('div');
  section.className = 'study-plan-panel';
  section.innerHTML = `
    <div class="study-plan-header">
      <span class="level-badge">Metodo de estudio</span>
      <h3>${plan.title}</h3>
      <p>${plan.description}</p>
    </div>
    <div class="study-plan-grid">
      ${plan.steps.map(step => `
        <div class="study-step">
          <strong>${step.label}</strong>
          <span>${step.detail}</span>
        </div>
      `).join('')}
    </div>
    <div class="weekly-review">
      <h4>Plan de repaso de 7 dias</h4>
      <ul>
        ${plan.weeklyReview.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;
  container.appendChild(section);
}

// --- THEORY VIEW ---
function initTheory() {
  // Initialize levels sidebar
  const menuList = document.getElementById('theory-menu-list');
  menuList.innerHTML = '';

  WORD_FORMATION_DATA.levels.forEach(level => {
    const li = document.createElement('li');
    li.className = 'theory-nav-item';
    li.innerHTML = `
      <button class="theory-nav-link ${level.id === appState.activeTheoryLevel ? 'active' : ''}" data-level="${level.id}">
        <span>Nivel ${level.id}</span>
        <svg class="icon-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    `;

    li.querySelector('button').addEventListener('click', (e) => {
      const btn = e.currentTarget;
      const lvlId = parseInt(btn.getAttribute('data-level'));
      
      // Update sidebar UI selection
      document.querySelectorAll('.theory-nav-link').forEach(link => link.classList.remove('active'));
      btn.classList.add('active');

      appState.activeTheoryLevel = lvlId;
      renderTheoryContent();
    });

    menuList.appendChild(li);
  });

  // Render initial theory content
  renderTheoryContent();
}

function renderTheoryContent() {
  const contentPanel = document.getElementById('theory-content-panel');
  const activeLevelData = WORD_FORMATION_DATA.levels.find(l => l.id === appState.activeTheoryLevel);

  if (!activeLevelData) return;

  // Sync sidebar active state just in case we jumped here from roadmap
  document.querySelectorAll('.theory-nav-link').forEach(link => {
    if (parseInt(link.getAttribute('data-level')) === appState.activeTheoryLevel) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  let tipsHtml = '';
  activeLevelData.tips.forEach(tip => {
    tipsHtml += `
      <div class="tip-box">
        <h4>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          ${tip.title}
        </h4>
        <p>${tip.content}</p>
      </div>
    `;
  });

  contentPanel.innerHTML = `
    <div class="theory-header">
      <h2>${activeLevelData.name}</h2>
      <p>${activeLevelData.description}</p>
    </div>
    <div class="theory-body">
      ${tipsHtml}
    </div>
  `;
}

// --- WORD MATRIX VIEW ---
function initWordMatrix() {
  const searchInput = document.getElementById('matrix-search');
  searchInput.addEventListener('input', (e) => {
    renderWordMatrixTable(e.target.value.trim());
  });

  // Initial render with empty filter (displays all)
  renderWordMatrixTable();
}

function renderWordMatrixTable(query = '') {
  const tbody = document.getElementById('matrix-table-body');
  tbody.innerHTML = '';

  const filteredWords = WORD_FORMATION_DATA.words.filter(word => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      word.root.toLowerCase().includes(q) ||
      word.verb.toLowerCase().includes(q) ||
      word.noun.toLowerCase().includes(q) ||
      word.adjective.toLowerCase().includes(q) ||
      word.adverb.toLowerCase().includes(q) ||
      word.negatives.toLowerCase().includes(q)
    );
  });

  if (filteredWords.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-state">
          No se encontraron palabras que coincidan con tu búsqueda.
        </td>
      </tr>
    `;
    return;
  }

  filteredWords.forEach(word => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="root-word">${word.root}</span></td>
      <td>${formatWordTags(word.verb, 'verb')}</td>
      <td>${formatWordTags(word.noun, 'noun')}</td>
      <td>${formatWordTags(word.adjective, 'adjective')}</td>
      <td>${formatWordTags(word.adverb, 'adverb')}</td>
      <td>${formatWordTags(word.negatives, 'negatives')}</td>
    `;
    tbody.appendChild(tr);
  });
}

function formatWordTags(wordString, className) {
  if (!wordString || wordString === 'none') {
    return `<span style="color: var(--text-muted); font-style: italic;">none</span>`;
  }
  
  return wordString.split(',')
    .map(w => w.trim())
    .map(w => `<span class="word-badge ${className === 'negatives' ? 'error' : className}">${w}</span>`)
    .join(' ');
}

// --- PRACTICE ZONE VIEW ---
function initPractice() {
  const levelSelect = document.getElementById('practice-level-select');
  const resetBtn = document.getElementById('reset-practice-btn');

  levelSelect.addEventListener('change', (e) => {
    appState.practice.selectedLevel = e.target.value;
    startNewPracticeSession();
  });

  resetBtn.addEventListener('click', () => {
    startNewPracticeSession();
  });
}

function startNewPracticeSession() {
  const level = appState.practice.selectedLevel;
  
  // Filter questions based on selected level
  let filtered = [];
  if (level === 'all') {
    filtered = [...WORD_FORMATION_DATA.questions];
  } else {
    const levelId = parseInt(level);
    filtered = WORD_FORMATION_DATA.questions.filter(q => q.levelId === levelId);
  }

  // Shuffle questions for variety
  appState.practice.questions = shuffleArray(filtered);
  appState.practice.currentIndex = 0;
  appState.practice.score = 0;
  appState.practice.answers = [];
  appState.practice.isSubmitted = false;

  updatePracticeUI();
  renderCurrentQuestion();
}

function updatePracticeUI() {
  const current = appState.practice.currentIndex;
  const total = appState.practice.questions.length;
  const score = appState.practice.score;

  // Update Score badge
  document.getElementById('score-display').innerText = `Puntaje: ${score} / ${current}`;

  // Update progress bar
  const progressPercent = total > 0 ? (current / total) * 100 : 0;
  document.getElementById('practice-progress-fill').style.width = `${progressPercent}%`;
  document.getElementById('practice-progress-text').innerText = `${current} / ${total}`;
}

function renderCurrentQuestion() {
  const container = document.getElementById('practice-content-area');
  const index = appState.practice.currentIndex;
  const total = appState.practice.questions.length;

  if (total === 0) {
    container.innerHTML = `
      <div class="roadmap-card" style="text-align: center; padding: 40px;">
        <p style="color: var(--text-muted); font-size: 16px;">No hay preguntas disponibles para este nivel.</p>
      </div>
    `;
    return;
  }

  if (index >= total) {
    renderFinishScreen();
    return;
  }

  const q = appState.practice.questions[index];
  appState.practice.isSubmitted = false;

  // Create UI for sentence with a physical blank space input
  // Replace ______ with an actual HTML form or input layout
  const formattedSentence = q.sentence.replace('______', `<span class="gap" id="sentence-gap-placeholder">${q.word}</span>`);

  container.innerHTML = `
    <div class="question-card">
      <div class="question-meta">
        <span class="question-level">Nivel ${q.levelId} &bull; Ejercicio ${index + 1} de ${total}</span>
        <span style="font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Ortografía Británica (UK)</span>
      </div>
      
      <div class="sentence-display">
        ${formattedSentence}
      </div>

      <div style="text-align: center;">
        <span class="word-hint">Base Word: ${q.word}</span>
      </div>

      <form class="answer-form" id="question-form" autocomplete="off">
        <input type="text" id="answer-input" class="answer-input" placeholder="Escribe la palabra transformada..." required>
        <button type="submit" class="btn btn-primary" id="submit-answer-btn">Comprobar</button>
      </form>

      <!-- Feedback Box -->
      <div class="feedback-box" id="feedback-panel">
        <div class="feedback-title" id="feedback-title"></div>
        <div class="feedback-text" id="feedback-desc"></div>
      </div>

      <div style="display: flex; justify-content: flex-end; margin-top: 24px;">
        <button class="btn btn-success" id="next-question-btn" style="display: none;">
          Siguiente Pregunta
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  `;

  // Input styling dynamic updating
  const inputEl = document.getElementById('answer-input');
  const gapEl = document.getElementById('sentence-gap-placeholder');
  
  inputEl.focus();

  inputEl.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (val) {
      gapEl.innerText = val.toUpperCase();
      gapEl.style.color = 'var(--primary)';
    } else {
      gapEl.innerText = q.word;
      gapEl.style.color = 'var(--accent)';
    }
  });

  // Form submit handler
  const form = document.getElementById('question-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (appState.practice.isSubmitted) return;
    submitAnswer(inputEl.value.trim(), q);
  });
}

function submitAnswer(userVal, questionObj) {
  appState.practice.isSubmitted = true;
  
  const correctVal = questionObj.correctAnswer.toLowerCase().trim();
  const rawUserVal = userVal.toLowerCase().trim();
  
  // Clean inputs for matching (remove spaces, etc.)
  const isCorrect = (rawUserVal === correctVal);
  
  const inputEl = document.getElementById('answer-input');
  const submitBtn = document.getElementById('submit-answer-btn');
  const nextBtn = document.getElementById('next-question-btn');
  const feedbackPanel = document.getElementById('feedback-panel');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackDesc = document.getElementById('feedback-desc');
  const gapEl = document.getElementById('sentence-gap-placeholder');

  // Disable input & check button
  inputEl.disabled = true;
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.5';

  if (isCorrect) {
    appState.practice.score++;
    appState.practice.answers.push('correct');
    
    // UI adjustment
    inputEl.classList.add('correct');
    gapEl.style.color = 'var(--success)';
    gapEl.style.borderBottomColor = 'var(--success)';

    // Feedback content
    feedbackPanel.className = 'feedback-box correct-box show';
    feedbackTitle.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      ¡Excelente! Correcto
    `;
    feedbackDesc.innerHTML = `La respuesta es correcta. ${questionObj.explanation}`;
  } else {
    appState.practice.answers.push('incorrect');

    // UI adjustment
    inputEl.classList.add('incorrect');
    gapEl.innerText = questionObj.correctAnswer.toUpperCase();
    gapEl.style.color = 'var(--error)';
    gapEl.style.borderBottomColor = 'var(--error)';

    // Feedback content
    feedbackPanel.className = 'feedback-box incorrect-box show';
    feedbackTitle.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
      Incorrecto
    `;
    feedbackDesc.innerHTML = `
      Escribiste: <strong style="color: var(--error); text-decoration: line-through;">${userVal}</strong>.<br>
      La respuesta correcta es: <span class="correct-answer-text">${questionObj.correctAnswer}</span>.<br><br>
      <strong>Explicación:</strong> ${questionObj.explanation}
    `;
  }

  // Update general score stats
  const total = appState.practice.questions.length;
  const current = appState.practice.currentIndex + 1; // since index is 0-based
  document.getElementById('score-display').innerText = `Puntaje: ${appState.practice.score} / ${current}`;
  
  // Show Next Button
  nextBtn.style.display = 'inline-flex';
  nextBtn.focus();
  nextBtn.addEventListener('click', () => {
    appState.practice.currentIndex++;
    updatePracticeUI();
    renderCurrentQuestion();
  });
}

function renderFinishScreen() {
  const container = document.getElementById('practice-content-area');
  const score = appState.practice.score;
  const total = appState.practice.questions.length;
  const percent = Math.round((score / total) * 100);

  let emoji = "🎉";
  let title = "¡Excelente Trabajo!";
  let feedback = "Tienes un dominio increíble de Word Formation. Estás listo para tu examen.";

  if (percent < 50) {
    emoji = "📚";
    title = "Sigue Practicando";
    feedback = "Word Formation requiere práctica y constancia. Revisa la pestaña de 'Teoría' y vuelve a intentarlo.";
  } else if (percent < 85) {
    emoji = "💪";
    title = "¡Buen Intento!";
    feedback = "Vas por muy buen camino. Estudia los errores puntuales que tuviste y pronto lograrás la nota perfecta.";
  }

  container.innerHTML = `
    <div class="question-card finish-card">
      <span class="finish-icon">${emoji}</span>
      <h3>${title}</h3>
      <p>${feedback}</p>

      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-val">${percent}%</div>
          <div class="stat-label">Precisión</div>
        </div>
        <div class="stat-item">
          <div class="stat-val">${score} / ${total}</div>
          <div class="stat-label">Respuestas Correctas</div>
        </div>
      </div>

      <div style="margin-top: 30px; display: flex; gap: 12px; justify-content: center;">
        <button class="btn btn-primary" id="retry-practice-btn">Repetir Cuestionario</button>
        <button class="btn" id="go-to-theory-btn">Revisar Teoría</button>
      </div>
    </div>
  `;

  document.getElementById('retry-practice-btn').addEventListener('click', () => {
    startNewPracticeSession();
  });

  document.getElementById('go-to-theory-btn').addEventListener('click', () => {
    switchTab('theory');
  });
}

// --- HELPERS ---
function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
