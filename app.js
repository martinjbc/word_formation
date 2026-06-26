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
  },
  exam: {
    questions: [],
    currentIndex: 0,
    isSubmitted: false
  },
  flashcards: {
    cards: [],
    currentIndex: 0,
    revealed: false
  }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initRoadmap();
  initTheory();
  initWordMatrix();
  initWordFamilies();
  initExamMode();
  initFlashcards();
  initPractice();
  initRepasoI10();
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
  if (tabId === 'exam' && appState.exam.questions.length === 0) {
    startNewExamSession();
  }
  if (tabId === 'flashcards' && appState.flashcards.cards.length === 0) {
    startFlashcardSession();
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
    <div class="study-theory">
      <h4>Teoria para usar la ruta</h4>
      <div class="study-theory-grid">
        ${plan.theory.map(item => `
          <div class="study-theory-card">
            <strong>${item.title}</strong>
            <p>${item.content}</p>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="guided-practice">
      <h4>Practica guiada: piensa antes de escribir</h4>
      <div class="guided-practice-grid">
        ${plan.guidedPractice.map(item => `
          <div class="guided-practice-card">
            <p class="guided-sentence">${item.sentence}</p>
            <div class="guided-meta">
              <span>Base: ${item.base}</span>
              <span>Categoria: ${item.category}</span>
            </div>
            <ol>
              <li>${item.clue}</li>
              <li>${item.paraphrase}</li>
              <li>Respuesta: <strong>${item.answer}</strong></li>
            </ol>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="family-reference">
      <div class="family-reference-header">
        <h4>Palabras frecuentes en sus diferentes formas</h4>
        <p>Usa esta tabla como ayuda memoria rapida antes de practicar. Mira especialmente los cambios de escritura y negativos.</p>
      </div>
      <div class="family-reference-table-wrapper">
        <table class="family-reference-table">
          <thead>
            <tr>
              <th>Base</th>
              <th>Noun</th>
              <th>Verb</th>
              <th>Adjective</th>
              <th>Adverb</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            ${plan.highFrequencyFamilies.map(item => `
              <tr>
                <td><strong>${item.base}</strong></td>
                <td>${item.noun}</td>
                <td>${item.verb}</td>
                <td>${item.adjective}</td>
                <td>${item.adverb}</td>
                <td>${item.note}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div class="paraphrase-reference">
      <div class="paraphrase-reference-header">
        <h4>La misma idea escrita de varias formas</h4>
        <p>Estos ejemplos entrenan la habilidad de parafrasear: misma idea, distinta categoria gramatical.</p>
      </div>
      <div class="paraphrase-set-grid">
        ${plan.paraphraseSets.map(set => `
          <div class="paraphrase-set-card">
            <strong>${set.idea}</strong>
            <ul>
              ${set.examples.map(example => `<li>${example}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="route-practice">
      <div class="route-practice-header">
        <h4>Ejercicios para resolver con la ruta</h4>
        <p>Primero marca la categoria que falta, luego escribe la palabra correcta. Al comprobar veras la parafrasis y el razonamiento.</p>
      </div>
      <div class="route-practice-grid">
        ${plan.routePractice.map((item, index) => `
          <div class="route-practice-card" data-route-index="${index}">
            <span class="route-practice-number">Ejercicio ${index + 1}</span>
            <p class="route-sentence">${item.sentence}</p>
            <span class="word-hint route-word-hint">Base Word: ${item.base}</span>
            <div class="route-category-options" role="group" aria-label="Categoria gramatical">
              ${['noun', 'verb', 'adjective', 'adverb'].map(category => `
                <button type="button" class="category-chip" data-category="${category}">${category}</button>
              `).join('')}
            </div>
            <div class="route-answer-row">
              <input type="text" class="route-answer-input" placeholder="Palabra transformada">
              <button type="button" class="btn btn-primary route-check-btn">Comprobar</button>
            </div>
            <div class="route-feedback" aria-live="polite"></div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="weekly-review">
      <h4>Plan de repaso de 7 dias</h4>
      <ul>
        ${plan.weeklyReview.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;
  container.appendChild(section);
  initRoutePractice(section, plan.routePractice);
}

function initRoutePractice(section, exercises) {
  section.querySelectorAll('.route-practice-card').forEach(card => {
    let selectedCategory = '';
    const index = parseInt(card.getAttribute('data-route-index'), 10);
    const exercise = exercises[index];
    const chips = card.querySelectorAll('.category-chip');
    const input = card.querySelector('.route-answer-input');
    const feedback = card.querySelector('.route-feedback');

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        selectedCategory = chip.getAttribute('data-category');
        chips.forEach(item => item.classList.remove('selected'));
        chip.classList.add('selected');
      });
    });

    card.querySelector('.route-check-btn').addEventListener('click', () => {
      const userAnswer = input.value.trim().toLowerCase();
      const categoryOk = selectedCategory === exercise.category;
      const answerOk = userAnswer === exercise.answer.toLowerCase();
      const statusClass = categoryOk && answerOk ? 'correct' : 'incorrect';

      feedback.className = `route-feedback show ${statusClass}`;
      feedback.innerHTML = `
        <strong>${categoryOk && answerOk ? 'Correcto' : 'Revisa el razonamiento'}</strong>
        <p><b>Categoria:</b> ${exercise.category}${selectedCategory ? ` (marcaste: ${selectedCategory})` : ' (no marcaste categoria)'}</p>
        <p><b>Respuesta:</b> ${exercise.answer}${userAnswer ? ` (escribiste: ${input.value.trim()})` : ''}</p>
        <p><b>Parafrasis:</b> ${exercise.paraphrase}</p>
        <p><b>Por que:</b> ${exercise.explanation}</p>
      `;
    });
  });
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

// --- WORD FAMILIES DATABASE ---
function initWordFamilies() {
  if (!window.WORD_FAMILY_DATABASE && typeof WORD_FAMILY_DATABASE === 'undefined') return;

  populateFamilyLevelFilter();
  renderFamilyDashboard();
  renderQuickRules();
  renderFamilyCards();

  ['family-search', 'family-level-filter', 'family-priority-filter', 'family-category-filter'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', renderFamilyCards);
    if (el) el.addEventListener('change', renderFamilyCards);
  });
}

function getFamilyData() {
  return typeof WORD_FAMILY_DATABASE !== 'undefined' ? WORD_FAMILY_DATABASE : { families: [], quickRules: [], essentials: [] };
}

function populateFamilyLevelFilter() {
  const select = document.getElementById('family-level-filter');
  if (!select) return;

  const levels = [...new Set(getFamilyData().families.map(family => family.level))].sort();
  levels.forEach(level => {
    const option = document.createElement('option');
    option.value = level;
    option.textContent = level;
    select.appendChild(option);
  });
}

function renderFamilyDashboard() {
  const container = document.getElementById('family-dashboard');
  if (!container) return;

  const data = getFamilyData();
  container.innerHTML = `
    <section class="essentials-panel">
      <div class="section-heading">
        <span class="level-badge">Indispensables Britanico</span>
        <h3>Lo que mas aparece en Form Words</h3>
      </div>
      <div class="essentials-grid">
        ${data.essentials.map(item => `
          <article class="essential-card">
            <strong>${item.title}</strong>
            <p>${item.detail}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderQuickRules() {
  const container = document.getElementById('quick-rules-panel');
  if (!container) return;

  container.innerHTML = `
    <div class="section-heading">
      <span class="level-badge">Reglas rapidas</span>
      <h3>Detecta la categoria antes de transformar</h3>
    </div>
    <div class="rules-grid">
      ${getFamilyData().quickRules.map(rule => `<div class="rule-card">${rule}</div>`).join('')}
    </div>
  `;
}

function renderFamilyCards() {
  const container = document.getElementById('family-grid');
  if (!container) return;

  const search = (document.getElementById('family-search')?.value || '').trim().toLowerCase();
  const level = document.getElementById('family-level-filter')?.value || 'all';
  const priority = document.getElementById('family-priority-filter')?.value || 'all';
  const category = document.getElementById('family-category-filter')?.value || 'all';

  const filteredFamilies = getFamilyData().families.filter(family => {
    const matchesSearch = !search || familyToSearchText(family).includes(search);
    const matchesLevel = level === 'all' || family.level === level;
    const matchesPriority = priority === 'all' || family.priority >= parseInt(priority, 10);
    const matchesCategory = category === 'all' || (family.forms[category] && family.forms[category].length > 0);
    return matchesSearch && matchesLevel && matchesPriority && matchesCategory;
  });

  if (filteredFamilies.length === 0) {
    container.innerHTML = `<div class="empty-state family-empty">No se encontraron familias con esos filtros.</div>`;
    return;
  }

  container.innerHTML = filteredFamilies
    .sort((a, b) => b.priority - a.priority || a.base.localeCompare(b.base))
    .map(renderFamilyCard)
    .join('');
}

function familyToSearchText(family) {
  const formsText = Object.values(family.forms)
    .flat()
    .map(item => `${item.word} ${item.translation}`)
    .join(' ');
  return `${family.base} ${family.level} ${formsText} ${family.commonMistakes.join(' ')}`.toLowerCase();
}

function renderFamilyCard(family) {
  return `
    <article class="family-card">
      <div class="family-card-header">
        <div>
          <span class="level-badge">${family.level}</span>
          <h3>${family.base}</h3>
        </div>
        <div class="priority-stars" title="Prioridad ${family.priority} de 5">${renderStars(family.priority)}</div>
      </div>
      <div class="family-forms">
        ${['verb', 'noun', 'adjective', 'adverb'].map(category => renderFormGroup(category, family.forms[category] || [])).join('')}
      </div>
      <div class="family-notes">
        <h4>Errores comunes</h4>
        <ul>${family.commonMistakes.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div class="family-examples">
        <h4>Ejemplo tipo examen</h4>
        ${family.examExamples.map(example => `
          <div class="exam-example">
            <p>${example.sentence}</p>
            <span>Respuesta: <strong>${example.answer}</strong></span>
            <small>${example.explanation}</small>
          </div>
        `).join('')}
      </div>
    </article>
  `;
}

function renderFormGroup(category, forms) {
  const label = category.charAt(0).toUpperCase() + category.slice(1);
  const content = forms.length
    ? forms.map(form => `
      <span class="family-word ${category}">
        <strong>${form.word}</strong>
        <em>${form.translation}</em>
        ${form.frequency ? `<small>${renderStars(form.frequency)}</small>` : ''}
      </span>
    `).join('')
    : `<span class="family-word empty">-</span>`;

  return `
    <div class="form-group ${category}">
      <h4>${label}</h4>
      <div class="form-list">${content}</div>
    </div>
  `;
}

function renderStars(value) {
  return `${'★'.repeat(value)}${'☆'.repeat(5 - value)}`;
}

// --- EXAM MODE ---
function initExamMode() {
  const container = document.getElementById('exam-content-area');
  if (container) {
    container.innerHTML = `<div class="empty-state">Abre este modo para generar preguntas con las familias disponibles.</div>`;
  }
}

function startNewExamSession() {
  appState.exam.questions = shuffleArray(getFamilyData().families.flatMap(family =>
    family.examExamples.map(example => ({
      base: family.base,
      level: family.level,
      priority: family.priority,
      ...example
    }))
  ));
  appState.exam.currentIndex = 0;
  appState.exam.isSubmitted = false;
  renderExamQuestion();
}

function renderExamQuestion() {
  const container = document.getElementById('exam-content-area');
  if (!container) return;

  const total = appState.exam.questions.length;
  const index = appState.exam.currentIndex % total;
  const question = appState.exam.questions[index];
  appState.exam.isSubmitted = false;

  container.innerHTML = `
    <div class="question-card exam-card">
      <div class="question-meta">
        <span class="question-level">${question.level} &bull; Pregunta ${index + 1} de ${total}</span>
        <span class="priority-stars">${renderStars(question.priority)}</span>
      </div>
      <div class="sentence-display">${question.sentence.replace('____', '<span class="gap">____</span>')}</div>
      <div style="text-align: center;">
        <span class="word-hint">Base Word: ${question.base.toUpperCase()}</span>
      </div>
      <form class="answer-form" id="exam-form" autocomplete="off">
        <input type="text" id="exam-answer-input" class="answer-input" placeholder="Escribe la respuesta..." required>
        <button type="submit" class="btn btn-primary">Verificar</button>
      </form>
      <div class="feedback-box" id="exam-feedback"></div>
      <div class="mode-actions">
        <button class="btn" id="restart-exam-btn">Reiniciar</button>
        <button class="btn btn-success" id="next-exam-btn" style="display: none;">Siguiente pregunta</button>
      </div>
    </div>
  `;

  document.getElementById('exam-answer-input').focus();
  document.getElementById('exam-form').addEventListener('submit', (event) => {
    event.preventDefault();
    checkExamAnswer(question);
  });
  document.getElementById('next-exam-btn').addEventListener('click', () => {
    appState.exam.currentIndex++;
    renderExamQuestion();
  });
  document.getElementById('restart-exam-btn').addEventListener('click', startNewExamSession);
}

function checkExamAnswer(question) {
  if (appState.exam.isSubmitted) return;
  appState.exam.isSubmitted = true;

  const input = document.getElementById('exam-answer-input');
  const feedback = document.getElementById('exam-feedback');
  const isCorrect = input.value.trim().toLowerCase() === question.answer.toLowerCase();

  input.disabled = true;
  input.classList.add(isCorrect ? 'correct' : 'incorrect');
  feedback.className = `feedback-box ${isCorrect ? 'correct-box' : 'incorrect-box'} show`;
  feedback.innerHTML = `
    <div class="feedback-title">${isCorrect ? 'Correcto' : 'Incorrecto'}</div>
    <div class="feedback-text">
      ${isCorrect ? '' : `Respuesta correcta: <span class="correct-answer-text">${question.answer}</span><br>`}
      ${question.explanation}
    </div>
  `;
  document.getElementById('next-exam-btn').style.display = 'inline-flex';
}

// --- FLASHCARDS ---
function initFlashcards() {
  const container = document.getElementById('flashcard-content-area');
  if (container) {
    container.innerHTML = `<div class="empty-state">Abre este modo para mezclar tus tarjetas de familias.</div>`;
  }
}

function startFlashcardSession() {
  appState.flashcards.cards = shuffleArray(getFamilyData().families);
  appState.flashcards.currentIndex = 0;
  appState.flashcards.revealed = false;
  renderFlashcard();
}

function renderFlashcard() {
  const container = document.getElementById('flashcard-content-area');
  if (!container) return;

  const total = appState.flashcards.cards.length;
  const index = appState.flashcards.currentIndex % total;
  const family = appState.flashcards.cards[index];

  container.innerHTML = `
    <div class="flashcard">
      <div class="question-meta">
        <span class="question-level">${family.level} &bull; Tarjeta ${index + 1} de ${total}</span>
        <span class="priority-stars">${renderStars(family.priority)}</span>
      </div>
      <div class="flashcard-base">${family.base}</div>
      <div id="flashcard-family" class="${appState.flashcards.revealed ? '' : 'hidden'}">
        <div class="family-forms flashcard-forms">
          ${['verb', 'noun', 'adjective', 'adverb'].map(category => renderFormGroup(category, family.forms[category] || [])).join('')}
        </div>
        <div class="family-notes">
          <h4>Trampa</h4>
          <ul>${family.commonMistakes.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="mode-actions">
        <button class="btn btn-primary" id="reveal-flashcard-btn">${appState.flashcards.revealed ? 'Ocultar familia' : 'Mostrar familia'}</button>
        <button class="btn" id="next-flashcard-btn">Siguiente</button>
        <button class="btn" id="shuffle-flashcards-btn">Mezclar</button>
      </div>
    </div>
  `;

  document.getElementById('reveal-flashcard-btn').addEventListener('click', () => {
    appState.flashcards.revealed = !appState.flashcards.revealed;
    renderFlashcard();
  });
  document.getElementById('next-flashcard-btn').addEventListener('click', () => {
    appState.flashcards.currentIndex++;
    appState.flashcards.revealed = false;
    renderFlashcard();
  });
  document.getElementById('shuffle-flashcards-btn').addEventListener('click', startFlashcardSession);
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

// --- REPASO INTERMEDIO 10 VIEW ---
function initRepasoI10() {
  const wordsListContainer = document.getElementById('repaso-words-list');
  const detailPanel = document.getElementById('repaso-detail-panel');

  if (!wordsListContainer || !detailPanel) return;

  // Render the list of words
  wordsListContainer.innerHTML = '';
  REPASO_I10_DATA.forEach(word => {
    const li = document.createElement('li');
    li.className = 'repaso-nav-item';
    li.innerHTML = `
      <button class="repaso-nav-link" data-id="${word.id}">
        <span class="repaso-number">${word.id}.</span>
        <span class="repaso-root-word">${word.root}</span>
        <span class="repaso-root-trans">(${word.translation})</span>
      </button>
    `;
    
    li.querySelector('button').addEventListener('click', (e) => {
      const btn = e.currentTarget;
      document.querySelectorAll('.repaso-nav-link').forEach(link => link.classList.remove('active'));
      btn.classList.add('active');
      renderRepasoWordDetail(word.id);
    });

    wordsListContainer.appendChild(li);
  });

  // Render default state: Consejo de memorización
  renderRepasoDefaultState();
}

function renderRepasoDefaultState() {
  const detailPanel = document.getElementById('repaso-detail-panel');
  if (!detailPanel) return;

  detailPanel.innerHTML = `
    <div class="repaso-welcome-card">
      <div class="welcome-badge">💡 RECOMENDACIÓN DE EXAMEN</div>
      <h3>Consejo para Memorizar</h3>
      <p class="welcome-text">
        En los exámenes de <strong>Word Formation</strong>, primero identifica qué tipo de palabra necesita el espacio antes de intentar transformar la palabra base:
      </p>
      <div class="welcome-rules-grid">
        <div class="welcome-rule-item">
          <span class="rule-type badge-verb">Verbo</span>
          <p>They <strong>decided</strong> to leave.</p>
        </div>
        <div class="welcome-rule-item">
          <span class="rule-type badge-noun">Sustantivo</span>
          <p>It was a difficult <strong>decision</strong>.</p>
        </div>
        <div class="welcome-rule-item">
          <span class="rule-type badge-adj">Adjetivo</span>
          <p>It was a <strong>decisive</strong> moment.</p>
        </div>
        <div class="welcome-rule-item">
          <span class="rule-type badge-adv">Adverbio</span>
          <p>She answered <strong>decisively</strong>.</p>
        </div>
      </div>
      <div class="welcome-footer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="footer-icon"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        <span>Selecciona una palabra de la lista de la izquierda para comenzar el repaso detallado de sus formas y ejemplos.</span>
      </div>
    </div>
  `;
}

function renderRepasoWordDetail(wordId) {
  const detailPanel = document.getElementById('repaso-detail-panel');
  if (!detailPanel) return;

  const word = REPASO_I10_DATA.find(w => w.id === wordId);
  if (!word) return;

  // Generate rows for the forms table
  const tableRowsHtml = word.forms.map(form => {
    // Determine badge class
    let badgeClass = 'badge-noun';
    const typeLower = form.type.toLowerCase();
    if (typeLower.includes('verb')) badgeClass = 'badge-verb';
    else if (typeLower.includes('adj')) badgeClass = 'badge-adj';
    else if (typeLower.includes('adv')) badgeClass = 'badge-adv';

    return `
      <tr>
        <td class="col-type"><span class="form-badge ${badgeClass}">${form.type}</span></td>
        <td class="col-word"><strong>${form.word}</strong></td>
        <td class="col-translation">${form.translation}</td>
        <td class="col-examples">
          <div class="example-box">
            <div class="ex-en"><strong>EN:</strong> ${form.en}</div>
            <div class="ex-es"><strong>ES:</strong> ${form.es}</div>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  detailPanel.innerHTML = `
    <div class="repaso-detail-card">
      <div class="detail-header">
        <div class="detail-title-wrapper">
          <span class="detail-number">Palabra ${word.id} de ${REPASO_I10_DATA.length}</span>
          <h2>${word.root}</h2>
          <p class="detail-subtitle">Traducción principal: <strong>${word.translation}</strong></p>
        </div>
        <button class="btn btn-secondary btn-back-list" onclick="renderRepasoDefaultState(); document.querySelectorAll('.repaso-nav-link').forEach(l => l.classList.remove('active'));">
          Volver a Consejos
        </button>
      </div>

      <div class="detail-table-wrapper">
        <table class="repaso-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Palabra</th>
              <th>Traducción</th>
              <th>Ejemplos de Uso</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
