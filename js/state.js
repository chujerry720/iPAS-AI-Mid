// localStorage state management
const STATE_KEY = 'ipas-ai-mid-v1';

const State = {
  load() {
    try {
      const raw = localStorage.getItem(STATE_KEY);
      if (!raw) return this.empty();
      const data = JSON.parse(raw);
      return { ...this.empty(), ...data };
    } catch (e) {
      console.warn('State load failed', e);
      return this.empty();
    }
  },

  save(state) {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  },

  empty() {
    return {
      version: 1,
      questionStats: {}, // qid -> { seen, correct, lastSeen, lastResult, history: [{ts, correct}] }
      sessionHistory: [], // [{ts, count, correct, subjects}]
      mistakeNotes: {}, // qid -> note
      preferences: { subjects: [1, 2] }, // 預設兩科都練
      conceptProgress: {}, // cardId -> { read: bool, readAt: ts, lastView: ts, viewCount }
    };
  },

  recordConceptRead(state, cardId) {
    const now = Date.now();
    const cur = state.conceptProgress[cardId] || { read: false, viewCount: 0 };
    cur.read = true;
    cur.readAt = cur.readAt || now;
    cur.lastView = now;
    cur.viewCount = (cur.viewCount || 0) + 1;
    state.conceptProgress[cardId] = cur;
    return state;
  },

  // Compute card status: available / read / mastered (no longer locks by prerequisite)
  cardStatus(state, card) {
    const cur = state.conceptProgress[card.id];
    if (!cur || !cur.read) return 'available';
    // Mastery: read + 2+ correct answers on related questions
    const relQs = card.relatedQids || [];
    let correctCount = 0;
    for (const qid of relQs) {
      const s = state.questionStats[qid];
      if (s && s.correct > 0) correctCount += 1;
    }
    if (relQs.length >= 2 && correctCount >= 2) return 'mastered';
    if (relQs.length === 1 && correctCount >= 1 && cur.viewCount >= 2) return 'mastered';
    return 'read';
  },

  chapterProgress(state, chapterId) {
    const cards = CONCEPTS.filter(c => c.chapter === chapterId);
    const total = cards.length;
    let read = 0, mastered = 0;
    for (const c of cards) {
      const s = this.cardStatus(state, c);
      if (s === 'read' || s === 'mastered') read += 1;
      if (s === 'mastered') mastered += 1;
    }
    return { total, read, mastered, ratio: total ? read / total : 0 };
  },

  recordAnswer(state, qid, isCorrect) {
    const now = Date.now();
    const stats = state.questionStats[qid] || { seen: 0, correct: 0, lastSeen: 0, lastResult: null, history: [] };
    stats.seen += 1;
    if (isCorrect) stats.correct += 1;
    stats.lastSeen = now;
    stats.lastResult = isCorrect;
    stats.history.push({ ts: now, correct: isCorrect });
    if (stats.history.length > 10) stats.history = stats.history.slice(-10);
    state.questionStats[qid] = stats;
    return state;
  },

  recordSession(state, sessionData) {
    state.sessionHistory.push({ ts: Date.now(), ...sessionData });
    if (state.sessionHistory.length > 100) {
      state.sessionHistory = state.sessionHistory.slice(-100);
    }
    return state;
  },

  // Compute aggregated stats
  summary(state) {
    const allStats = Object.values(state.questionStats);
    const totalSeen = allStats.reduce((a, s) => a + s.seen, 0);
    const totalCorrect = allStats.reduce((a, s) => a + s.correct, 0);
    const uniqueSeen = allStats.length;
    return {
      totalSeen,
      totalCorrect,
      accuracy: totalSeen ? totalCorrect / totalSeen : 0,
      uniqueSeen,
      sessions: state.sessionHistory.length,
    };
  },

  // Per-topic accuracy
  topicAccuracy(state) {
    const map = {}; // topic -> { seen, correct }
    for (const q of QUESTIONS) {
      const s = state.questionStats[q.id];
      if (!s) continue;
      const t = q.topic;
      if (!map[t]) map[t] = { seen: 0, correct: 0, subject: q.subject };
      map[t].seen += s.seen;
      map[t].correct += s.correct;
    }
    const out = [];
    for (const [topic, v] of Object.entries(map)) {
      out.push({ topic, ...v, acc: v.seen ? v.correct / v.seen : 0 });
    }
    out.sort((a, b) => a.acc - b.acc); // weakest first
    return out;
  },

  // Get currently-active mistakes (last result was wrong)
  currentMistakes(state) {
    const list = [];
    for (const q of QUESTIONS) {
      const s = state.questionStats[q.id];
      if (s && s.lastResult === false) {
        list.push({ q, lastSeen: s.lastSeen, seenCount: s.seen, correctCount: s.correct });
      }
    }
    list.sort((a, b) => b.lastSeen - a.lastSeen);
    return list;
  },

  reset() {
    localStorage.removeItem(STATE_KEY);
  },

  exportJSON(state) {
    return JSON.stringify(state);
  },

  importJSON(text) {
    const data = JSON.parse(text);
    if (!data || typeof data !== 'object') throw new Error('內容不是 JSON 物件');
    if (!data.questionStats || !data.conceptProgress) {
      throw new Error('看起來不是這個 App 的進度資料');
    }
    const merged = { ...this.empty(), ...data };
    this.save(merged);
    return merged;
  },
};
