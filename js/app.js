// Main UI controller
const EXAM_DATE = new Date('2026-05-23T13:30:00+08:00');
let state = State.load();
let session = null; // active quiz session
let learnSubject = 1; // active subject in Learn tab
let learnView = 'list'; // 'list' or 'map'

const app = document.getElementById('app');
const navButtons = document.querySelectorAll('#bottom-nav button');

// ============ Countdown ============
function updateCountdown() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const examDay = new Date(EXAM_DATE.getFullYear(), EXAM_DATE.getMonth(), EXAM_DATE.getDate());
  const days = Math.round((examDay - today) / 86400000);
  const el = document.getElementById('countdown');
  if (days < 0) { el.textContent = '考試已過'; return; }
  if (days === 0) { el.textContent = '今天考試,加油!'; el.classList.add('urgent'); return; }
  el.textContent = `距離 5/23 還有 ${days} 天`;
  if (days <= 7) el.classList.add('urgent');
}

// ============ Routing ============
const routes = {
  learn: renderLearn,
  reader: renderReader, // in-place from learn
  practice: renderPractice,
  quiz: renderQuiz,
  result: renderResult,
  stats: renderStats,
};

function go(screen, ...args) {
  app.innerHTML = '';
  // Highlight bottom nav
  let navTab = screen;
  if (screen === 'reader') navTab = 'learn';
  if (screen === 'quiz' || screen === 'result') navTab = 'practice';
  navButtons.forEach(b => b.classList.toggle('active', b.dataset.screen === navTab));
  (routes[screen] || renderLearn)(...args);
  window.scrollTo(0, 0);
}

navButtons.forEach(b => {
  b.addEventListener('click', () => go(b.dataset.screen));
});

// ============ LEARN TAB ============
function renderLearn() {
  const subjects = [1, 2];
  const chapters = CHAPTERS.filter(c => c.subject === learnSubject).sort((a, b) => a.order - b.order);

  const wrap = document.createElement('div');

  // Subject tabs
  const tabs = document.createElement('div');
  tabs.className = 'subject-tabs';
  tabs.innerHTML = subjects.map(s => `
    <button data-s="${s}" class="${s === learnSubject ? 'active' : ''}">
      ${s === 1 ? '科目1 · AI 技術' : '科目2 · 大數據'}
    </button>
  `).join('');
  tabs.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      learnSubject = parseInt(btn.dataset.s);
      go('learn');
    });
  });
  wrap.appendChild(tabs);

  // View toggle: list vs map
  const toggle = document.createElement('div');
  toggle.className = 'view-toggle';
  toggle.innerHTML = `
    <button data-v="list" class="${learnView === 'list' ? 'active' : ''}">章節列表</button>
    <button data-v="map" class="${learnView === 'map' ? 'active' : ''}">知識地圖</button>
  `;
  toggle.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      learnView = btn.dataset.v;
      go('learn');
    });
  });
  wrap.appendChild(toggle);

  if (learnView === 'map') {
    wrap.appendChild(renderKnowledgeMap(learnSubject));
  } else {
    // Chapter sections
    for (const ch of chapters) {
      const cards = CONCEPTS.filter(c => c.chapter === ch.id).sort((a, b) => a.order - b.order);
      if (cards.length === 0) continue;
      const prog = State.chapterProgress(state, ch.id);

      const section = document.createElement('div');
      section.className = 'chapter-section';
      section.innerHTML = `
        <div class="chapter-head">
          <div class="chapter-name">
            <span class="chapter-num">Ch ${ch.order}</span>
            ${escapeHtml(ch.name)}
          </div>
          <div class="chapter-progress-text">${prog.read}/${prog.total}${prog.mastered > 0 ? ` · ${prog.mastered} ✓` : ''}</div>
        </div>
        <div class="chapter-desc">${escapeHtml(ch.desc)}</div>
        <div class="chapter-progress-bar">
          <div class="fill ${prog.mastered === prog.total && prog.total > 0 ? 'mastered' : ''}" style="width: ${prog.ratio * 100}%"></div>
        </div>
        <div class="card-grid">
          ${cards.map(card => {
            const status = State.cardStatus(state, card);
            const lockedReason = status === 'locked'
              ? `需先讀:${(card.prerequisites || []).map(pid => {
                  const p = CONCEPTS.find(c => c.id === pid);
                  return p ? p.title : pid;
                }).join('、')}`
              : '';
            return `
              <button class="concept-card" data-card="${card.id}" data-status="${status}" ${status === 'locked' ? 'disabled' : ''}>
                <div class="title">${escapeHtml(card.title)}</div>
                <div class="status-dot"></div>
                ${lockedReason ? `<div class="prereq-hint">${escapeHtml(lockedReason)}</div>` : ''}
              </button>
            `;
          }).join('')}
        </div>
      `;
      section.querySelectorAll('.concept-card[data-card]').forEach(btn => {
        if (btn.dataset.status === 'locked') return;
        btn.addEventListener('click', () => {
          go('reader', btn.dataset.card);
        });
      });
      wrap.appendChild(section);
    }

    if (chapters.length === 0) {
      wrap.innerHTML += `<div class="empty-state"><div>本科目尚未加入概念卡。請跟 Claude Code 說「加 X 主題卡片」。</div></div>`;
    }
  }

  app.appendChild(wrap);
}

// ============ Knowledge Tree (skill-tree style) ============
function computeLevels(cards) {
  const levels = {};
  function getLevel(card) {
    if (levels[card.id] !== undefined) return levels[card.id];
    let max = 0;
    for (const preId of (card.prerequisites || [])) {
      const pre = cards.find(c => c.id === preId);
      if (pre) max = Math.max(max, getLevel(pre) + 1);
    }
    levels[card.id] = max;
    return max;
  }
  cards.forEach(c => getLevel(c));
  return levels;
}

function renderKnowledgeMap(subject) {
  const subjectChapters = CHAPTERS.filter(c => c.subject === subject);
  const subjectChapterIds = new Set(subjectChapters.map(c => c.id));
  const cards = CONCEPTS.filter(c => subjectChapterIds.has(c.chapter));

  if (cards.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = '<div>尚無概念卡</div>';
    return empty;
  }

  const levels = computeLevels(cards);
  const maxLevel = Math.max(...Object.values(levels));

  // Group by level
  const byLevel = {};
  for (const c of cards) {
    const l = levels[c.id];
    if (!byLevel[l]) byLevel[l] = [];
    byLevel[l].push(c);
  }
  // Sort within level by chapter order then card order for stability
  for (const l of Object.keys(byLevel)) {
    byLevel[l].sort((a, b) => {
      const ca = subjectChapters.find(ch => ch.id === a.chapter);
      const cb = subjectChapters.find(ch => ch.id === b.chapter);
      return (ca.order - cb.order) || (a.order - b.order);
    });
  }

  // Compute layout dimensions dynamically based on available width
  let maxPerLevel = 1;
  for (const l of Object.values(byLevel)) maxPerLevel = Math.max(maxPerLevel, l.length);

  const vw = window.innerWidth;
  const mainContentW = Math.min(vw - 32, 688); // main padding 16 each side, max 720
  const mapBreakout = Math.max(0, (vw - 720) / 2 - 16); // matches CSS breakout
  const mapContentW = mainContentW + mapBreakout * 2 - 32; // map own padding 16 each side
  const GAP_X = 12;
  const PAD_X = 16;
  const availableForCards = mapContentW - 2 * PAD_X - (maxPerLevel - 1) * GAP_X;
  const CARD_W = Math.max(104, Math.min(160, Math.floor(availableForCards / maxPerLevel)));
  const CARD_H = Math.round(CARD_W * 0.62);
  const LEVEL_H = CARD_H + 38;
  const PAD_Y = 22;

  const containerW = PAD_X * 2 + maxPerLevel * CARD_W + Math.max(0, maxPerLevel - 1) * GAP_X;
  const containerH = PAD_Y * 2 + (maxLevel + 1) * LEVEL_H - (LEVEL_H - CARD_H);

  // Compute positions (centered per level)
  const positions = {};
  for (let l = 0; l <= maxLevel; l++) {
    const cardsInLevel = byLevel[l] || [];
    const n = cardsInLevel.length;
    const usedW = n * CARD_W + (n - 1) * GAP_X;
    const startX = (containerW - usedW) / 2;
    cardsInLevel.forEach((card, i) => {
      positions[card.id] = {
        x: startX + i * (CARD_W + GAP_X),
        y: PAD_Y + l * LEVEL_H,
        card,
        level: l,
        chapter: subjectChapters.find(ch => ch.id === card.chapter),
        status: State.cardStatus(state, card),
      };
    });
  }

  // Build container
  const wrap = document.createElement('div');
  wrap.className = 'knowledge-map';

  const tree = document.createElement('div');
  tree.className = 'knowledge-tree';
  tree.style.position = 'relative';
  tree.style.width = containerW + 'px';
  tree.style.height = containerH + 'px';

  // Level labels (above each row, centered-left)
  for (let l = 0; l <= maxLevel; l++) {
    const lbl = document.createElement('div');
    lbl.className = 'level-label';
    lbl.style.top = (PAD_Y + l * LEVEL_H - 14) + 'px';
    lbl.style.left = PAD_X + 'px';
    lbl.textContent = l === 0 ? '基礎入門' : `第 ${l} 階`;
    tree.appendChild(lbl);
  }

  // SVG layer for arrows
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${containerW} ${containerH}`);
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.style.position = 'absolute';
  svg.style.top = '0';
  svg.style.left = '0';
  svg.style.width = '100%';
  svg.style.height = '100%';
  svg.style.pointerEvents = 'none';
  svg.classList.add('km-arrows');

  // Defs marker
  const defs = document.createElementNS(svgNS, 'defs');
  defs.innerHTML = `
    <marker id="km-arrow-active" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0,0 L8,4 L0,8 z" />
    </marker>
    <marker id="km-arrow-dim" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0,0 L8,4 L0,8 z" />
    </marker>
  `;
  svg.appendChild(defs);

  // Draw arrows
  for (const card of cards) {
    const p = positions[card.id];
    if (!p) continue;
    for (const preId of (card.prerequisites || [])) {
      const pp = positions[preId];
      if (!pp) continue;
      const x1 = pp.x + CARD_W / 2;
      const y1 = pp.y + CARD_H;
      const x2 = p.x + CARD_W / 2;
      const y2 = p.y;
      const midY = (y1 + y2) / 2;
      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2 - 3}`);
      // Active = both ends are read or mastered
      const active = ['read', 'mastered'].includes(pp.status) && ['read', 'mastered', 'available'].includes(p.status);
      path.setAttribute('class', active ? 'km-edge active' : 'km-edge');
      path.setAttribute('marker-end', active ? 'url(#km-arrow-active)' : 'url(#km-arrow-dim)');
      svg.appendChild(path);
    }
  }
  tree.appendChild(svg);

  // Draw cards as HTML buttons (full theme support)
  for (const card of cards) {
    const p = positions[card.id];
    if (!p) continue;
    const btn = document.createElement('button');
    btn.className = 'tree-card';
    btn.dataset.status = p.status;
    btn.dataset.card = card.id;
    btn.style.position = 'absolute';
    btn.style.top = p.y + 'px';
    btn.style.left = p.x + 'px';
    btn.style.width = CARD_W + 'px';
    btn.style.height = CARD_H + 'px';
    btn.title = card.title;
    if (p.status === 'locked') btn.disabled = true;

    const lockedReason = p.status === 'locked'
      ? (card.prerequisites || []).map(pid => {
          const pre = cards.find(c => c.id === pid);
          if (!pre) return '';
          // Take first segment before — / : / space for compactness
          return pre.title.split(/—|:| /)[0].trim();
        }).filter(Boolean).join('、')
      : '';

    btn.innerHTML = `
      <div class="tc-chapter">Ch ${p.chapter.order} · ${escapeHtml(p.chapter.name.slice(0, 4))}</div>
      <div class="tc-title">${escapeHtml(card.title)}</div>
      ${p.status === 'locked' ? `<div class="tc-lock">需先讀:${escapeHtml(lockedReason)}</div>` : ''}
      ${p.status === 'mastered' ? '<div class="tc-badge">✓</div>' : ''}
      ${p.status === 'read' ? '<div class="tc-badge dot"></div>' : ''}
    `;

    if (p.status !== 'locked') {
      btn.addEventListener('click', () => go('reader', card.id));
    }
    tree.appendChild(btn);
  }

  wrap.appendChild(tree);

  // Legend
  const legend = document.createElement('div');
  legend.className = 'km-legend';
  legend.innerHTML = `
    <span><span class="swatch available"></span>未讀</span>
    <span><span class="swatch read"></span>已讀</span>
    <span><span class="swatch mastered"></span>精熟</span>
    <span class="muted">→ 建議的學習順序</span>
  `;
  wrap.appendChild(legend);

  return wrap;
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ============ Reader (concept detail) ============
function renderReader(cardId) {
  const card = CONCEPTS.find(c => c.id === cardId);
  if (!card) return go('learn');

  // Mark as read
  state = State.recordConceptRead(state, card.id);
  State.save(state);

  const chapter = CHAPTERS.find(c => c.id === card.chapter) || {};

  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <button class="back-btn" id="back-btn">← 返回章節</button>
    <div class="reader">
      <div class="reader-header">
        <div class="reader-chapter-tag">Ch ${chapter.order ?? ''} · ${escapeHtml(chapter.name || '')}</div>
        <h2>${escapeHtml(card.title)}</h2>
      </div>
      ${card.diagram ? `<div class="reader-diagram">${card.diagram}</div>` : ''}
      <div class="reader-section">
        <h3>核心直覺</h3>
        <div class="reader-intuition">${formatIntuition(card.intuition)}</div>
      </div>
      ${card.keyTerms && card.keyTerms.length > 0 ? `
        <div class="reader-section">
          <h3>關鍵字對照</h3>
          <ul class="term-list">
            ${card.keyTerms.map(t => `
              <li><span class="term">${escapeHtml(t.term)}</span>${escapeHtml(t.def)}</li>
            `).join('')}
          </ul>
        </div>
      ` : ''}
      ${card.confusions && card.confusions.length > 0 ? `
        <div class="reader-section">
          <h3>易混淆陷阱</h3>
          <ul class="confusion-list">
            ${card.confusions.map(c => `<li>${formatIntuition(c)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      ${card.examPattern ? `
        <div class="reader-section">
          <h3>出題模式</h3>
          <div class="pattern-text">${formatIntuition(card.examPattern)}</div>
        </div>
      ` : ''}
      <div class="reader-actions">
        ${(card.relatedQids && card.relatedQids.length > 0) ? `
          <button class="btn-primary" id="quiz-related">考我這 ${card.relatedQids.length} 題</button>
        ` : `<button class="btn-secondary" id="quiz-topic" style="flex:1">考我相關主題</button>`}
      </div>
    </div>
  `;
  app.appendChild(wrap);

  document.getElementById('back-btn').addEventListener('click', () => go('learn'));

  const qbtn = document.getElementById('quiz-related');
  if (qbtn) {
    qbtn.addEventListener('click', () => {
      const qs = (card.relatedQids || []).map(qid => QUESTIONS.find(q => q.id === qid)).filter(Boolean);
      if (qs.length === 0) return;
      session = {
        questions: qs,
        index: 0,
        answers: [],
        startTs: Date.now(),
        plannedMinutes: Math.max(5, qs.length * 2),
        subjects: [...new Set(qs.map(q => q.subject))],
      };
      go('quiz');
    });
  }
  const tbtn = document.getElementById('quiz-topic');
  if (tbtn) {
    tbtn.addEventListener('click', () => {
      const topics = card.relatedTopics || [];
      const qs = QUESTIONS.filter(q => topics.includes(q.topic));
      if (qs.length === 0) {
        alert('沒有對應的歷屆題');
        return;
      }
      // Pick at most 5
      const picked = qs.sort(() => Math.random() - 0.5).slice(0, 5);
      session = {
        questions: picked,
        index: 0,
        answers: [],
        startTs: Date.now(),
        plannedMinutes: 10,
        subjects: [...new Set(picked.map(q => q.subject))],
      };
      go('quiz');
    });
  }
}

function formatIntuition(text) {
  let s = escapeHtml(text);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Markdown tables: consecutive lines starting and ending with |
  s = s.replace(/(?:^\|[^\n]*\|[ \t]*\n)+/gm, (block) => {
    const rows = block.trim().split('\n').map(line =>
      line.replace(/^\||\|$/g, '').split('|').map(c => c.trim())
    );
    if (rows.length < 2) return block;
    // Row 2 must be separator (---)
    const isSep = rows[1].every(c => /^:?-+:?$/.test(c.replace(/\s/g, '')));
    if (!isSep) return block;
    let html = '<table class="md-table"><thead><tr>';
    rows[0].forEach(c => html += `<th>${c}</th>`);
    html += '</tr></thead><tbody>';
    for (let i = 2; i < rows.length; i++) {
      html += '<tr>' + rows[i].map(c => `<td>${c}</td>`).join('') + '</tr>';
    }
    return html + '</tbody></table>';
  });
  // Bullet list: lines starting with • or -
  s = s.replace(/(?:^[•\-] [^\n]+\n?)+/gm, (block) => {
    const items = block.trim().split('\n').map(l => l.replace(/^[•\-] /, '').trim());
    return '<ul class="md-list">' + items.map(i => `<li>${i}</li>`).join('') + '</ul>';
  });
  s = s.replace(/\n/g, '<br>');
  return s;
}

// ============ PRACTICE TAB ============
function renderPractice() {
  const sug = Scheduler.suggestion(state);
  const subjects = state.preferences.subjects;

  const el = document.createElement('div');
  el.innerHTML = `
    <div class="practice-suggestion">${sug.text}</div>

    <div class="time-prompt">今天有多少時間?</div>
    <div class="time-buttons">
      <button class="time-btn" data-min="5"><span class="min">5</span><span class="label">分鐘 / 5 題</span></button>
      <button class="time-btn" data-min="15"><span class="min">15</span><span class="label">分鐘 / 12 題</span></button>
      <button class="time-btn" data-min="30"><span class="min">30</span><span class="label">分鐘 / 20 題</span></button>
    </div>

    <div class="subject-filter">
      <span>科目:</span>
      <button class="chip ${subjects.includes(1) ? 'active' : ''}" data-subj="1">科目1</button>
      <button class="chip ${subjects.includes(2) ? 'active' : ''}" data-subj="2">科目2</button>
      <button class="chip ${subjects.includes(3) ? 'active' : ''}" data-subj="3">第三科補充</button>
    </div>

    ${(() => {
      const mistakes = State.currentMistakes(state);
      if (mistakes.length === 0) return '';
      return `
        <div style="margin-top:24px">
          <button class="btn-secondary" id="retry-mistakes" style="width:100%">複習 ${Math.min(mistakes.length, 10)} 題錯題</button>
        </div>`;
    })()}
  `;
  app.appendChild(el);

  el.querySelectorAll('.time-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const minutes = parseInt(btn.dataset.min);
      startSession(minutes, state.preferences.subjects);
    });
  });

  el.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const s = parseInt(chip.dataset.subj);
      const arr = state.preferences.subjects;
      const idx = arr.indexOf(s);
      if (idx >= 0) arr.splice(idx, 1);
      else arr.push(s);
      if (arr.length === 0) arr.push(s);
      state.preferences.subjects = arr;
      State.save(state);
      go('practice');
    });
  });

  const mb = document.getElementById('retry-mistakes');
  if (mb) {
    mb.addEventListener('click', () => {
      const mistakes = State.currentMistakes(state).slice(0, 10).map(m => m.q);
      session = {
        questions: mistakes,
        index: 0,
        answers: [],
        startTs: Date.now(),
        plannedMinutes: 15,
        subjects: [...new Set(mistakes.map(q => q.subject))],
      };
      go('quiz');
    });
  }
}

// ============ Session ============
function startSession(minutes, subjects) {
  const count = Scheduler.questionsForTime(minutes);
  const questions = Scheduler.pick(state, count, subjects);
  if (questions.length === 0) {
    alert('沒有可選題目 — 請至少選一個科目');
    return;
  }
  session = {
    questions,
    index: 0,
    answers: [],
    startTs: Date.now(),
    plannedMinutes: minutes,
    subjects,
  };
  go('quiz');
}

// ============ Quiz ============
function renderQuiz() {
  if (!session) return go('practice');
  const q = session.questions[session.index];
  const total = session.questions.length;
  const num = session.index + 1;

  const el = document.createElement('div');
  el.innerHTML = `
    <div class="quiz-progress"><div class="bar" style="width: ${(num / total) * 100}%"></div></div>
    <div class="quiz-meta"><span>第 ${num} / ${total} 題</span><span id="timer">⏱ 0:00</span></div>
    <div class="question-card">
      <div class="question-tags">
        <span class="tag subject">科目${q.subject}</span>
        <span class="tag">${q.topic}</span>
        ${q.source === 'authored'
          ? `<span class="tag source-authored">自編 #${q.number}</span>`
          : `<span class="tag source-past">歷屆 Q${q.number}</span>`}
      </div>
      <div class="question-text">${escapeHtml(q.question)}</div>
      <div class="options">
        ${['A','B','C','D'].map(L => `
          <button class="option" data-letter="${L}">
            <span class="letter">${L}</span>
            <span class="text">${escapeHtml(q.options[L] || '')}</span>
          </button>
        `).join('')}
      </div>
      <div class="feedback" id="feedback" style="display:none"></div>
      <button class="btn-primary" id="next-btn" style="display:none">下一題</button>
    </div>
  `;
  app.appendChild(el);

  // Timer
  const startTs = Date.now();
  const timerEl = document.getElementById('timer');
  const timerInt = setInterval(() => {
    if (!timerEl.isConnected) { clearInterval(timerInt); return; }
    const sec = Math.floor((Date.now() - startTs) / 1000);
    timerEl.textContent = `⏱ ${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
  }, 1000);

  // Option click
  let answered = false;
  el.querySelectorAll('.option').forEach(opt => {
    opt.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      const picked = opt.dataset.letter;
      const isCorrect = picked === q.answer;

      el.querySelectorAll('.option').forEach(o => {
        o.disabled = true;
        const L = o.dataset.letter;
        if (L === q.answer) o.classList.add('correct');
        else if (L === picked) o.classList.add('wrong');
        else o.classList.add('dim');
      });

      const fb = document.getElementById('feedback');
      fb.style.display = 'block';
      fb.classList.add(isCorrect ? 'correct' : 'wrong');
      fb.textContent = isCorrect
        ? `✓ 答對!正解 ${q.answer}`
        : `✗ 答錯,正解是 ${q.answer}(你選 ${picked})`;

      const nextBtn = document.getElementById('next-btn');
      nextBtn.style.display = 'block';
      nextBtn.textContent = session.index + 1 === total ? '查看結果' : '下一題';
      nextBtn.addEventListener('click', () => {
        state = State.recordAnswer(state, q.id, isCorrect);
        State.save(state);
        session.answers.push({ qid: q.id, picked, correct: isCorrect });
        session.index += 1;
        if (session.index >= total) {
          finishSession();
        } else {
          go('quiz');
        }
      });
    });
  });
}

function finishSession() {
  const correct = session.answers.filter(a => a.correct).length;
  const total = session.answers.length;
  state = State.recordSession(state, { count: total, correct, subjects: session.subjects, plannedMinutes: session.plannedMinutes });
  State.save(state);
  go('result');
}

// ============ Result ============
function renderResult() {
  if (!session) return go('practice');
  const correct = session.answers.filter(a => a.correct).length;
  const total = session.answers.length;
  const acc = Math.round((correct / total) * 100);

  const topicCount = {};
  for (const a of session.answers) {
    const q = QUESTIONS.find(qq => qq.id === a.qid);
    if (!q) continue;
    const t = q.topic;
    if (!topicCount[t]) topicCount[t] = { seen: 0, correct: 0 };
    topicCount[t].seen += 1;
    if (a.correct) topicCount[t].correct += 1;
  }
  const topicList = Object.entries(topicCount)
    .map(([t, v]) => ({ t, seen: v.seen, correct: v.correct, acc: v.correct / v.seen }))
    .sort((a, b) => a.acc - b.acc);

  // Suggest next concept to read based on weakest topic
  let suggestion = '';
  if (topicList.length > 0 && topicList[0].acc < 0.6) {
    const weakTopic = topicList[0].t;
    const card = CONCEPTS.find(c => (c.relatedTopics || []).includes(weakTopic) && (!state.conceptProgress[c.id] || !state.conceptProgress[c.id].read));
    if (card) {
      suggestion = `<div class="practice-suggestion" style="margin-top:16px">弱項在 ${escapeHtml(weakTopic)},建議讀《${escapeHtml(card.title)}》<br><button class="btn-secondary" id="goto-card" style="margin-top:8px">前往閱讀</button></div>`;
    }
  }

  const el = document.createElement('div');
  el.innerHTML = `
    <div class="result-header">
      <div class="result-score">${correct}/${total}</div>
      <div class="result-meta">${acc}% · 答了 ${total} 題</div>
    </div>
    ${topicList.length > 0 ? `
      <div class="weakness-card">
        <h3>本次主題表現</h3>
        <ul class="weakness-list">
          ${topicList.map(t => `
            <li>
              <span>${escapeHtml(t.t)}</span>
              <span class="acc ${t.acc < 0.5 ? 'bad' : ''}">${t.correct}/${t.seen}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    ` : ''}
    ${suggestion}
    <button class="btn-primary" id="again-btn">再來一輪</button>
    <button class="btn-secondary" id="practice-btn" style="margin-top:8px;width:100%">回練習頁</button>
  `;
  app.appendChild(el);

  document.getElementById('again-btn').addEventListener('click', () => {
    startSession(session.plannedMinutes, session.subjects);
  });
  document.getElementById('practice-btn').addEventListener('click', () => {
    session = null;
    go('practice');
  });
  const goCard = document.getElementById('goto-card');
  if (goCard) {
    goCard.addEventListener('click', () => {
      // Find first matching unread card
      const weakTopic = topicList[0].t;
      const card = CONCEPTS.find(c => (c.relatedTopics || []).includes(weakTopic) && (!state.conceptProgress[c.id] || !state.conceptProgress[c.id].read));
      if (card) {
        learnSubject = card.chapter.startsWith('s1') ? 1 : 2;
        go('reader', card.id);
      }
    });
  }
}

// ============ Stats ============
function renderStats() {
  const summary = State.summary(state);
  const topics = State.topicAccuracy(state);
  const mistakes = State.currentMistakes(state);

  // Concept progress overall
  let conceptRead = 0, conceptMastered = 0;
  for (const c of CONCEPTS) {
    const s = State.cardStatus(state, c);
    if (s === 'read' || s === 'mastered') conceptRead += 1;
    if (s === 'mastered') conceptMastered += 1;
  }

  const el = document.createElement('div');
  el.innerHTML = `
    <div class="stat-grid">
      <div class="stat-card">
        <div class="num">${summary.totalSeen}</div>
        <div class="label">總答題次數</div>
      </div>
      <div class="stat-card">
        <div class="num">${Math.round(summary.accuracy * 100)}%</div>
        <div class="label">正確率</div>
      </div>
      <div class="stat-card">
        <div class="num">${conceptRead}/${CONCEPTS.length}</div>
        <div class="label">概念卡讀過</div>
      </div>
      <div class="stat-card">
        <div class="num">${conceptMastered}</div>
        <div class="label">已精熟概念</div>
      </div>
    </div>

    ${topics.length > 0 ? `
      <div class="weakness-card">
        <h3>各主題正確率(由弱到強)</h3>
        <ul class="weakness-list">
          ${topics.map(t => `
            <li>
              <span>科目${t.subject} · ${escapeHtml(t.topic)}</span>
              <span class="acc ${t.acc < 0.5 ? 'bad' : ''}">${t.correct}/${t.seen} (${Math.round(t.acc * 100)}%)</span>
            </li>
          `).join('')}
        </ul>
      </div>
    ` : `<div class="empty-state"><div class="empty-title">尚無資料</div><div class="empty-hint">先做幾題,這裡會顯示你的學習表現</div></div>`}

    ${mistakes.length > 0 ? `
      <div class="weakness-card">
        <h3>待複習錯題 · ${mistakes.length}</h3>
        ${mistakes.slice(0, 10).map(m => `
          <div class="mistake-item" style="margin-top:8px">
            <div class="qmeta">科目${m.q.subject} · ${escapeHtml(m.q.topic)} · 原 Q${m.q.number}</div>
            <div class="qtext">${escapeHtml(m.q.question.slice(0, 80))}${m.q.question.length > 80 ? '...' : ''}</div>
          </div>
        `).join('')}
        <button class="btn-primary" id="retry-mistakes" style="margin-top:12px">複習錯題</button>
      </div>
    ` : ''}

    <div class="weakness-card">
      <h3>跨裝置同步進度</h3>
      <p style="color:var(--text-2);font-size:13px;margin:8px 0;line-height:1.6">
        換瀏覽器或裝置會看不到進度。在原裝置點「匯出」,把文字複製或下載成檔,在新裝置點「匯入」貼上即可帶過。
      </p>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button class="btn-secondary" id="export-btn" style="flex:1">匯出進度</button>
        <button class="btn-secondary" id="import-btn" style="flex:1">匯入進度</button>
      </div>
    </div>

    <button class="btn-secondary" id="reset-btn" style="width:100%;margin-top:24px;color:var(--wrong)">⚠️ 清除所有進度</button>
  `;
  app.appendChild(el);

  document.getElementById('export-btn').addEventListener('click', showExportDialog);
  document.getElementById('import-btn').addEventListener('click', showImportDialog);

  const mb = document.getElementById('retry-mistakes');
  if (mb) {
    mb.addEventListener('click', () => {
      const qs = mistakes.slice(0, 10).map(m => m.q);
      session = {
        questions: qs,
        index: 0,
        answers: [],
        startTs: Date.now(),
        plannedMinutes: 15,
        subjects: [...new Set(qs.map(q => q.subject))],
      };
      go('quiz');
    });
  }
  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('確定要清除所有學習紀錄?概念卡進度也會一併清除。')) {
      State.reset();
      state = State.load();
      go('learn');
    }
  });
}

// ============ Sync Dialogs ============
function showExportDialog() {
  const text = State.exportJSON(state);
  const d = document.createElement('dialog');
  d.className = 'sync-dialog';
  d.innerHTML = `
    <h3>匯出進度</h3>
    <p class="sync-hint">複製下方文字,或下載成 .json 檔。在新裝置點「匯入進度」貼上即可。</p>
    <textarea id="exp-ta" readonly></textarea>
    <div class="sync-msg" id="exp-msg"></div>
    <div class="sync-actions">
      <button class="btn-primary" id="exp-copy">複製</button>
      <button class="btn-secondary" id="exp-dl">下載檔案</button>
      <button class="btn-secondary" id="exp-close">關閉</button>
    </div>
  `;
  document.body.appendChild(d);
  d.querySelector('#exp-ta').value = text;
  d.showModal();
  d.querySelector('#exp-copy').addEventListener('click', async () => {
    const msg = d.querySelector('#exp-msg');
    try {
      await navigator.clipboard.writeText(text);
      msg.textContent = '✓ 已複製到剪貼簿';
      msg.style.color = 'var(--accent)';
    } catch {
      d.querySelector('#exp-ta').select();
      msg.textContent = '無法自動複製,請手動 Ctrl+C / ⌘C';
      msg.style.color = 'var(--wrong)';
    }
  });
  d.querySelector('#exp-dl').addEventListener('click', () => {
    const blob = new Blob([text], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    const ts = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    a.download = `ipas-progress-${ts}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  });
  d.querySelector('#exp-close').addEventListener('click', () => { d.close(); d.remove(); });
}

function showImportDialog() {
  const d = document.createElement('dialog');
  d.className = 'sync-dialog';
  d.innerHTML = `
    <h3>匯入進度</h3>
    <p class="sync-hint">貼上原裝置匯出的文字,或選一個 .json 檔。<strong>套用後會覆蓋目前進度</strong>。</p>
    <textarea id="imp-ta" placeholder="在這貼上匯出的進度文字..."></textarea>
    <input type="file" id="imp-file" accept="application/json,.json" style="margin-top:8px">
    <div class="sync-msg" id="imp-msg" style="color:var(--wrong)"></div>
    <div class="sync-actions">
      <button class="btn-primary" id="imp-confirm">套用並覆蓋</button>
      <button class="btn-secondary" id="imp-close">取消</button>
    </div>
  `;
  document.body.appendChild(d);
  d.showModal();

  d.querySelector('#imp-file').addEventListener('change', e => {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => { d.querySelector('#imp-ta').value = r.result; };
    r.readAsText(f);
  });

  d.querySelector('#imp-confirm').addEventListener('click', () => {
    const text = d.querySelector('#imp-ta').value.trim();
    const msg = d.querySelector('#imp-msg');
    if (!text) { msg.textContent = '請先貼上文字或選檔案'; return; }
    if (!confirm('套用後會覆蓋目前進度,確定?')) return;
    try {
      state = State.importJSON(text);
      d.close(); d.remove();
      go('learn');
    } catch (err) {
      msg.textContent = '匯入失敗:' + err.message;
    }
  });

  d.querySelector('#imp-close').addEventListener('click', () => { d.close(); d.remove(); });
}

// ============ Utils ============
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ============ Theme toggle ============
function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
  // Follow system preference if user hasn't explicitly chosen
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });
}

// ============ Init ============
updateCountdown();
setInterval(updateCountdown, 60 * 60 * 1000);
setupThemeToggle();

// Re-render knowledge map on resize so card sizes adapt
let resizeTimer;
window.addEventListener('resize', () => {
  if (learnView !== 'map') return;
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => go('learn'), 200);
});

go('learn');
