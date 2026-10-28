// Động cơ trò chơi đấu trí kỹ thuật (Gamified Interactive Quiz Engine)
class TechnicalQuizEngine {
  constructor() {
    this.container = document.getElementById("quiz-card-container");
    this.currentIdx = 0;
    this.score = 0;
    this.streak = 0;
    this.selectedOption = null;
    this.isAnswered = false;
  }

  init() {
    this.currentIdx = 0;
    this.score = 0;
    this.streak = 0;
    this.selectedOption = null;
    this.isAnswered = false;
    this.renderQuestion();
  }

  renderQuestion() {
    if (!this.container) return;
    const lang = window.appState ? window.appState.lang : "vi";
    const i18n = lang === "vi" ? I18N_VI : I18N_EN;

    if (this.currentIdx >= QUIZ_QUESTIONS.length) {
      this.renderCompletion();
      return;
    }

    const q = QUIZ_QUESTIONS[this.currentIdx];
    this.isAnswered = false;
    this.selectedOption = null;

    this.container.innerHTML = `
      <div class="quiz-box">
        <div class="quiz-top-bar">
          <div class="quiz-progress-text">
            ${i18n.quizSection.currentQuestion.replace("{current}", this.currentIdx + 1).replace("{total}", QUIZ_QUESTIONS.length)}
          </div>
          <div class="quiz-stats">
            <span class="stat-badge"><span class="icon">★</span> ${i18n.quizSection.score} ${this.score}</span>
            <span class="stat-badge streak-badge"><span class="icon">🔥</span> ${i18n.quizSection.streak} ${this.streak}</span>
          </div>
        </div>

        <div class="quiz-progress-track">
          <div class="quiz-progress-fill" style="width: ${((this.currentIdx) / QUIZ_QUESTIONS.length) * 100}%"></div>
        </div>

        <div class="quiz-question-body">
          <span class="category-badge">${q.category.toUpperCase()}</span>
          <h3 class="question-text">${lang === "vi" ? q.question.vi : q.question.en}</h3>

          <div class="options-list">
            ${q.options.map(opt => `
              <button class="option-btn" data-opt-id="${opt.id}">
                <span class="opt-prefix">${opt.id}</span>
                <span class="opt-text">${lang === "vi" ? opt.textVi : opt.textEn}</span>
              </button>
            `).join("")}
          </div>
        </div>

        <div id="quiz-feedback-box" class="quiz-feedback" style="display: none;"></div>

        <div class="quiz-footer-actions">
          <button id="btn-next-question" class="btn btn-primary" style="display: none;">
            ${i18n.quizSection.btnNext} →
          </button>
        </div>
      </div>
    `;

    this.bindOptions();
  }

  bindOptions() {
    const btns = this.container.querySelectorAll(".option-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.isAnswered) return;
        this.submitAnswer(btn.dataset.optId);
      });
    });

    const btnNext = document.getElementById("btn-next-question");
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        this.currentIdx++;
        this.renderQuestion();
      });
    }
  }

  submitAnswer(selectedId) {
    this.isAnswered = true;
    const q = QUIZ_QUESTIONS[this.currentIdx];
    const lang = window.appState ? window.appState.lang : "vi";
    const isCorrect = selectedId === q.correct;

    const btns = this.container.querySelectorAll(".option-btn");
    btns.forEach(b => {
      b.disabled = true;
      if (b.dataset.optId === q.correct) {
        b.classList.add("correct");
      } else if (b.dataset.optId === selectedId && !isCorrect) {
        b.classList.add("wrong");
      }
    });

    if (isCorrect) {
      this.score += 100;
      this.streak += 1;
      this.playAudioTone(523.25, 0.15); // C5 sound
      setTimeout(() => this.playAudioTone(659.25, 0.2), 150); // E5
    } else {
      this.streak = 0;
      this.playAudioTone(220, 0.3); // Low tone
    }

    // Show feedback explanation
    const feedbackBox = document.getElementById("quiz-feedback-box");
    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.className = `quiz-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
      feedbackBox.innerHTML = `
        <div class="feedback-title">
          ${isCorrect ? "✓ CHÍNH XÁC (EXCELLENT)" : "✗ CHƯA CHÍNH XÁC"}
        </div>
        <p class="feedback-desc">${lang === "vi" ? q.explanation.vi : q.explanation.en}</p>
      `;
    }

    const btnNext = document.getElementById("btn-next-question");
    if (btnNext) btnNext.style.display = "inline-block";
  }

  renderCompletion() {
    const lang = window.appState ? window.appState.lang : "vi";
    const i18n = lang === "vi" ? I18N_VI : I18N_EN;

    let rankTitleVi = "Kỹ Sư Trưởng MEP Dự Án (Lead Site Engineer)";
    let rankTitleEn = "Chief Lead MEP Project Director";
    let badgeIcon = "🏆";

    if (this.score >= 500) {
      rankTitleVi = "Tổng Chỉ Huy Kỹ Thuật (Chief Project Engineer)";
      rankTitleEn = "Chief Project Engineer";
      badgeIcon = "👑";
    } else if (this.score >= 300) {
      rankTitleVi = "Chuyên Viên Giám Sát Cao Cấp (Senior MEP Specialist)";
      rankTitleEn = "Senior MEP Specialist";
      badgeIcon = "🎖️";
    } else {
      rankTitleVi = "Kỹ Sư Tập Sự Đầy Tiềm Năng (Engineering Apprentice)";
      rankTitleEn = "Engineering Apprentice";
      badgeIcon = "📘";
    }

    this.container.innerHTML = `
      <div class="quiz-completion-card">
        <div class="completion-icon">${badgeIcon}</div>
        <h2>${i18n.quizSection.congratsTitle}</h2>
        <p class="completion-desc">
          ${i18n.quizSection.congratsDesc.replace("{score}", this.score).replace("{total}", QUIZ_QUESTIONS.length * 100)}
        </p>

        <div class="rank-award-box">
          <span class="rank-tag">${i18n.quizSection.badgeRank}</span>
          <div class="rank-name">${lang === "vi" ? rankTitleVi : rankTitleEn}</div>
        </div>

        <div class="completion-actions">
          <button id="btn-restart-quiz" class="btn btn-primary">
            ${i18n.quizSection.btnRestart}
          </button>
        </div>
      </div>
    `;

    document.getElementById("btn-restart-quiz")?.addEventListener("click", () => {
      this.init();
    });
  }

  playAudioTone(frequency, duration) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy catch
    }
  }
}

window.TechnicalQuizEngine = TechnicalQuizEngine;
