// Đấu trường so sánh kỹ thuật trực diện (Side-by-Side Comparator Engine)
class TechnicalComparator {
  constructor() {
    this.container = document.getElementById("comparator-content");
    this.selectA = document.getElementById("comparator-select-a");
    this.selectB = document.getElementById("comparator-select-b");
    this.presetContainer = document.getElementById("comparator-presets");
    this.radarCanvas = null;
  }

  init() {
    this.populateSelects();
    this.renderPresets();
    this.bindEvents();
    // Default comparison
    if (COMPARISONS.length > 0) {
      this.loadComparison(COMPARISONS[0].id);
    }
  }

  populateSelects() {
    if (!this.selectA || !this.selectB) return;
    const lang = window.appState ? window.appState.lang : "vi";

    const optionsHtml = MATERIALS.map(m => `
      <option value="${m.id}">${lang === "vi" ? m.name.vi : m.name.en}</option>
    `).join("");

    this.selectA.innerHTML = optionsHtml;
    this.selectB.innerHTML = optionsHtml;

    if (MATERIALS.length > 1) {
      this.selectA.value = MATERIALS[1].id; // fire-cable or busway
      this.selectB.value = MATERIALS[3].id; // busway
    }
  }

  renderPresets() {
    if (!this.presetContainer) return;
    const lang = window.appState ? window.appState.lang : "vi";

    this.presetContainer.innerHTML = COMPARISONS.map((comp, idx) => `
      <button class="preset-pill ${idx === 0 ? 'active' : ''}" data-comp-id="${comp.id}">
        ${lang === "vi" ? comp.title.vi : comp.title.en}
      </button>
    `).join("");
  }

  bindEvents() {
    if (this.presetContainer) {
      this.presetContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".preset-pill");
        if (!btn) return;
        this.presetContainer.querySelectorAll(".preset-pill").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        this.loadComparison(btn.dataset.compId);
      });
    }

    const btnExec = document.getElementById("btn-run-compare");
    if (btnExec) {
      btnExec.addEventListener("click", () => {
        this.compareCustom(this.selectA.value, this.selectB.value);
      });
    }
  }

  loadComparison(presetId) {
    const comp = COMPARISONS.find(c => c.id === presetId);
    if (!comp) return;

    const lang = window.appState ? window.appState.lang : "vi";
    const i18n = lang === "vi" ? I18N_VI : I18N_EN;

    // Set dropdowns if possible
    if (this.selectA) this.selectA.value = comp.itemA.id;
    if (this.selectB) this.selectB.value = comp.itemB.id;

    const html = `
      <div class="comparison-grid">
        <!-- Item A Card -->
        <div class="comp-col card-a">
          <div class="comp-header">
            <span class="badge-tag">OPTION A</span>
            <h3>${lang === "vi" ? comp.itemA.name.vi : comp.itemA.name.en}</h3>
          </div>
          <div class="comp-specs-list">
            ${Object.entries(comp.itemA.specs).map(([k, v]) => `
              <div class="spec-row">
                <span class="spec-label">${k}</span>
                <span class="spec-val">${v}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Item B Card -->
        <div class="comp-col card-b">
          <div class="comp-header">
            <span class="badge-tag">OPTION B</span>
            <h3>${lang === "vi" ? comp.itemB.name.vi : comp.itemB.name.en}</h3>
          </div>
          <div class="comp-specs-list">
            ${Object.entries(comp.itemB.specs).map(([k, v]) => `
              <div class="spec-row">
                <span class="spec-label">${k}</span>
                <span class="spec-val">${v}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <!-- Radar Comparison Chart & Scientific Verdict -->
      <div class="comp-analytics-section">
        <div class="radar-box">
          <h4>${i18n.comparatorSection.radarTitle}</h4>
          <canvas id="radar-canvas" width="360" height="320"></canvas>
          <div class="radar-legend">
            <span class="legend-item"><span class="color-dot dot-a"></span> ${lang === "vi" ? comp.itemA.name.vi : comp.itemA.name.en}</span>
            <span class="legend-item"><span class="color-dot dot-b"></span> ${lang === "vi" ? comp.itemB.name.vi : comp.itemB.name.en}</span>
          </div>
        </div>

        <div class="verdict-box">
          <div class="verdict-badge">EXPERT VERDICT</div>
          <h4>${i18n.comparatorSection.verdictTitle}</h4>
          <p class="verdict-text">${lang === "vi" ? comp.verdict.vi : comp.verdict.en}</p>
          <div class="action-row">
            <button class="btn btn-outline" onclick="window.app.openMaterialModal('${comp.itemA.id}')">
              ${i18n.materialCard.viewDetails} (A)
            </button>
            <button class="btn btn-outline" onclick="window.app.openMaterialModal('${comp.itemB.id}')">
              ${i18n.materialCard.viewDetails} (B)
            </button>
          </div>
        </div>
      </div>
    `;

    if (this.container) {
      this.container.innerHTML = html;
      this.drawRadarChart(comp.itemA.scores, comp.itemB.scores, [
        i18n.comparatorSection.scoreCategories.thermal,
        i18n.comparatorSection.scoreCategories.mechanical,
        i18n.comparatorSection.scoreCategories.costEff,
        i18n.comparatorSection.scoreCategories.maintenance,
        i18n.comparatorSection.scoreCategories.speed,
        i18n.comparatorSection.scoreCategories.reliability
      ]);
    }
  }

  compareCustom(idA, idB) {
    const matA = MATERIALS.find(m => m.id === idA);
    const matB = MATERIALS.find(m => m.id === idB);
    if (!matA || !matB) return;

    const lang = window.appState ? window.appState.lang : "vi";
    const i18n = lang === "vi" ? I18N_VI : I18N_EN;

    const scoresA = [
      matA.matrixScores.thermalResistance,
      matA.matrixScores.mechanicalStrength,
      matA.matrixScores.costEfficiency,
      matA.matrixScores.maintenanceEase,
      matA.matrixScores.installationSpeed,
      matA.matrixScores.chemicalResistance
    ];

    const scoresB = [
      matB.matrixScores.thermalResistance,
      matB.matrixScores.mechanicalStrength,
      matB.matrixScores.costEfficiency,
      matB.matrixScores.maintenanceEase,
      matB.matrixScores.installationSpeed,
      matB.matrixScores.chemicalResistance
    ];

    const html = `
      <div class="comparison-grid">
        <div class="comp-col card-a">
          <div class="comp-header">
            <span class="badge-tag">${matA.category.toUpperCase()}</span>
            <h3>${lang === "vi" ? matA.name.vi : matA.name.en}</h3>
          </div>
          <div class="comp-specs-list">
            ${matA.specifications.slice(0, 5).map(s => `
              <div class="spec-row">
                <span class="spec-label">${lang === "vi" ? s.labelVi : s.labelEn}</span>
                <span class="spec-val">${lang === "vi" ? s.valueVi : s.valueEn}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="comp-col card-b">
          <div class="comp-header">
            <span class="badge-tag">${matB.category.toUpperCase()}</span>
            <h3>${lang === "vi" ? matB.name.vi : matB.name.en}</h3>
          </div>
          <div class="comp-specs-list">
            ${matB.specifications.slice(0, 5).map(s => `
              <div class="spec-row">
                <span class="spec-label">${lang === "vi" ? s.labelVi : s.labelEn}</span>
                <span class="spec-val">${lang === "vi" ? s.valueVi : s.valueEn}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="comp-analytics-section">
        <div class="radar-box">
          <h4>${i18n.comparatorSection.radarTitle}</h4>
          <canvas id="radar-canvas" width="360" height="320"></canvas>
          <div class="radar-legend">
            <span class="legend-item"><span class="color-dot dot-a"></span> ${lang === "vi" ? matA.name.vi : matA.name.en}</span>
            <span class="legend-item"><span class="color-dot dot-b"></span> ${lang === "vi" ? matB.name.vi : matB.name.en}</span>
          </div>
        </div>

        <div class="verdict-box">
          <div class="verdict-badge">COMPARATIVE ANALYSIS</div>
          <h4>${i18n.comparatorSection.verdictTitle}</h4>
          <p class="verdict-text">
            ${lang === "vi" 
              ? `${matA.name.vi} vượt trội hơn ở khía cạnh chịu lực và nhiệt độ, trong khi ${matB.name.vi} đem lại sự cân bằng về chi phí và tính đa năng tùy theo từng bài toán thiết kế cụ thể.` 
              : `${matA.name.en} stands out for thermal and mechanical resilience, whereas ${matB.name.en} presents advantages in capital cost and versatile modularity depending on project parameters.`}
          </p>
          <div class="action-row">
            <button class="btn btn-outline" onclick="window.app.openMaterialModal('${matA.id}')">
              ${i18n.materialCard.viewDetails} (A)
            </button>
            <button class="btn btn-outline" onclick="window.app.openMaterialModal('${matB.id}')">
              ${i18n.materialCard.viewDetails} (B)
            </button>
          </div>
        </div>
      </div>
    `;

    if (this.container) {
      this.container.innerHTML = html;
      this.drawRadarChart(scoresA, scoresB, [
        i18n.comparatorSection.scoreCategories.thermal,
        i18n.comparatorSection.scoreCategories.mechanical,
        i18n.comparatorSection.scoreCategories.costEff,
        i18n.comparatorSection.scoreCategories.maintenance,
        i18n.comparatorSection.scoreCategories.speed,
        i18n.comparatorSection.scoreCategories.reliability
      ]);
    }
  }

  drawRadarChart(scoresA, scoresB, labels) {
    const canvas = document.getElementById("radar-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 45;
    const numPoints = labels.length;

    ctx.clearRect(0, 0, width, height);

    // Draw concentric polygon webs
    for (let level = 1; level <= 5; level++) {
      const r = (radius / 5) * level;
      ctx.beginPath();
      ctx.strokeStyle = "rgba(148, 163, 184, 0.2)";
      ctx.lineWidth = 1;
      for (let i = 0; i < numPoints; i++) {
        const angle = (i * 2 * Math.PI) / numPoints - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // Draw radial axes and labels
    ctx.font = "10px sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.textAlign = "center";
    for (let i = 0; i < numPoints; i++) {
      const angle = (i * 2 * Math.PI) / numPoints - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      ctx.beginPath();
      ctx.strokeStyle = "rgba(148, 163, 184, 0.3)";
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Label offset
      const labelX = centerX + (radius + 20) * Math.cos(angle);
      const labelY = centerY + (radius + 15) * Math.sin(angle);
      ctx.fillText(labels[i], labelX, labelY);
    }

    // Draw Polygon A (Electric Cyan)
    this.drawDataPolygon(ctx, centerX, centerY, radius, scoresA, numPoints, "rgba(0, 240, 255, 0.3)", "#00f0ff");

    // Draw Polygon B (Safety Orange)
    this.drawDataPolygon(ctx, centerX, centerY, radius, scoresB, numPoints, "rgba(249, 115, 22, 0.3)", "#f97316");
  }

  drawDataPolygon(ctx, cx, cy, maxRadius, scores, count, fillColor, strokeColor) {
    ctx.beginPath();
    for (let i = 0; i < count; i++) {
      const angle = (i * 2 * Math.PI) / count - Math.PI / 2;
      const val = (scores[i] || 5) / 10;
      const r = maxRadius * val;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw point dots
    for (let i = 0; i < count; i++) {
      const angle = (i * 2 * Math.PI) / count - Math.PI / 2;
      const val = (scores[i] || 5) / 10;
      const r = maxRadius * val;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = strokeColor;
      ctx.fill();
    }
  }
}

window.TechnicalComparator = TechnicalComparator;
