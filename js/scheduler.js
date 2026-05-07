// Adaptive scheduler — picks questions weighted by weakness, freshness, spaced repetition
const Scheduler = {
  // Time budget → number of questions
  questionsForTime(minutes) {
    if (minutes <= 5) return 5;
    if (minutes <= 15) return 12;
    return 20; // 30 min
  },

  // Compute priority score for a question (higher = more likely to pick)
  priority(q, stats, now) {
    const s = stats[q.id];

    // Never seen: medium-high priority (varies by subject coverage)
    if (!s || s.seen === 0) return 5.0 + Math.random() * 0.5;

    // Wrong recently: spaced repetition windows
    if (s.lastResult === false) {
      const hoursSince = (now - s.lastSeen) / (1000 * 60 * 60);
      // Show again at: 1h, 8h, 24h, 72h intervals
      if (hoursSince < 1) return 0.3; // too soon
      if (hoursSince < 4) return 9.0; // hot retry zone
      if (hoursSince < 24) return 7.0;
      if (hoursSince < 72) return 5.5;
      return 4.0;
    }

    // Correct but rusty: weighted by time + accuracy
    const hoursSince = (now - s.lastSeen) / (1000 * 60 * 60);
    const acc = s.correct / s.seen;
    // High accuracy + recent = low priority (it's locked in)
    if (acc >= 0.8 && hoursSince < 24) return 0.5;
    // Medium accuracy or older = mild boost
    let score = 2.0;
    score += (1 - acc) * 3; // weakness
    score += Math.min(hoursSince / 48, 2); // freshness up to 2 days
    return score;
  },

  // Pick N questions adaptively, balancing across subjects
  pick(state, count, allowedSubjects) {
    const now = Date.now();
    const eligible = QUESTIONS.filter(q => allowedSubjects.includes(q.subject));

    // Score each
    const scored = eligible.map(q => ({
      q,
      score: this.priority(q, state.questionStats, now),
    }));

    // Weighted random sampling without replacement (Efraimidis-Spirakis)
    const sampled = scored
      .map(s => ({ ...s, key: Math.pow(Math.random(), 1 / Math.max(s.score, 0.01)) }))
      .sort((a, b) => b.key - a.key)
      .slice(0, count)
      .map(s => s.q);

    // Try to balance subjects: if user has 2 subjects, aim 50/50
    if (allowedSubjects.length === 2 && sampled.length >= 4) {
      const s1 = sampled.filter(q => q.subject === allowedSubjects[0]).length;
      const s2 = sampled.filter(q => q.subject === allowedSubjects[1]).length;
      const target = Math.floor(sampled.length / 2);
      // If imbalanced by >1, swap some
      if (Math.abs(s1 - s2) > 1) {
        // Find weakest from underrepresented, replace strongest from over
        const underSubj = s1 < s2 ? allowedSubjects[0] : allowedSubjects[1];
        const underPool = scored
          .filter(s => s.q.subject === underSubj && !sampled.includes(s.q))
          .sort((a, b) => b.score - a.score);
        const overInSampled = sampled
          .filter(q => q.subject !== underSubj)
          .sort((a, b) => {
            const sa = scored.find(x => x.q.id === a.id).score;
            const sb = scored.find(x => x.q.id === b.id).score;
            return sa - sb; // weakest first
          });
        const swaps = Math.min(Math.abs(s1 - s2) - 1, underPool.length, overInSampled.length);
        for (let i = 0; i < swaps; i++) {
          const idx = sampled.indexOf(overInSampled[i]);
          if (idx >= 0) sampled[idx] = underPool[i].q;
        }
      }
    }

    return sampled;
  },

  // Greeting / suggestion based on user state
  suggestion(state) {
    const summary = State.summary(state);
    if (summary.totalSeen === 0) {
      return { tone: "welcome", text: "第一次來!選一個時間長度開始,我會挑題給你。" };
    }
    const topics = State.topicAccuracy(state);
    const weakest = topics.filter(t => t.seen >= 3).slice(0, 1)[0];
    const recentMistakes = State.currentMistakes(state).length;
    if (recentMistakes >= 5) {
      return { tone: "mistakes", text: `你有 ${recentMistakes} 題錯題待複習。要不要先做幾題複習?` };
    }
    if (weakest && weakest.acc < 0.5) {
      return { tone: "weak", text: `${weakest.topic} 主題對 ${Math.round(weakest.acc * 100)}%,需要加強。` };
    }
    return { tone: "ok", text: `已答 ${summary.totalSeen} 題,正確率 ${Math.round(summary.accuracy * 100)}%。再來一輪?` };
  },
};
