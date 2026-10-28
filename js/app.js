// ==========================================================================
// INFRA-TECH JOURNAL - MAIN APPLICATION ORCHESTRATOR
// Core Router, State Store, I18n Engine & UI Controller
// ==========================================================================

class InfraTechApp {
  constructor() {
    this.state = {
      lang: StorageManager.getLang() || "vi",
      theme: StorageManager.getTheme() || "dark",
      activeCategory: "all",
      searchQuery: "",
      onlyBookmarked: false,
      activeModalId: null,
      activeModalTab: "overview"
    };

    window.appState = this.state;
    this.viewer3d = null;
    this.comparator = null;
    this.matrix = null;
    this.calculators = null;
    this.quizEngine = null;
  }

  init() {
    // 1. Apply saved theme
    document.documentElement.setAttribute("data-theme", this.state.theme);

    // 2. Setup Subcomponents
    this.viewer3d = new TechnicalViewer3D("viewer3d-canvas-container");
    this.comparator = new TechnicalComparator();
    this.matrix = new TechnicalMatrix();
    this.calculators = new TechnicalCalculators();
    this.quizEngine = new TechnicalQuizEngine();

    // 3. Render Initial UI Elements
    this.applyTranslations();
    this.renderCategories();
    this.renderMaterialsGrid();

    // 4. Initialize Subcomponents
    this.viewer3d.init();
    this.comparator.init();
    this.matrix.init();
    this.calculators.init();
    this.quizEngine.init();

    // 5. Setup Event Listeners
    this.bindEvents();
    this.checkUrlHash();

    console.log("⚡ INFRA-TECH JOURNAL Initialized successfully.");
  }

  applyTranslations() {
    const lang = this.state.lang;
    const i18n = lang === "vi" ? I18N_VI : I18N_EN;

    // Brand and Navigation
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = this.getNestedTranslation(i18n, key);
      if (val) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = this.getNestedTranslation(i18n, key);
      if (val) el.placeholder = val;
    });

    // Update Lang button text
    const langBtn = document.getElementById("btn-toggle-lang");
    if (langBtn) {
      langBtn.textContent = lang === "vi" ? "VI / EN" : "EN / VI";
    }

    // Refresh dynamically rendered sections
    this.renderCategories();
    this.renderMaterialsGrid();

    if (this.comparator) {
      this.comparator.populateSelects();
      this.comparator.renderPresets();
    }
  }

  getNestedTranslation(obj, path) {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  }

  renderCategories() {
    const bar = document.getElementById("categories-bar");
    if (!bar) return;
    const lang = this.state.lang;

    bar.innerHTML = CATEGORIES.map(cat => {
      const isActive = this.state.activeCategory === cat.id;
      const count = cat.id === "all" 
        ? MATERIALS.length 
        : MATERIALS.filter(m => m.category === cat.id).length;

      return `
        <button class="category-tab ${isActive ? 'active' : ''}" data-cat-id="${cat.id}">
          <span>${lang === "vi" ? cat.name.vi : cat.name.en}</span>
          <span class="count">(${count})</span>
        </button>
      `;
    }).join("");

    // Bind click events
    bar.querySelectorAll(".category-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        this.state.activeCategory = tab.dataset.catId;
        this.state.onlyBookmarked = false;
        this.renderCategories();
        this.renderMaterialsGrid();
      });
    });
  }

  renderMaterialsGrid() {
    const grid = document.getElementById("materials-grid");
    const countEl = document.getElementById("search-results-count");
    if (!grid) return;

    const lang = this.state.lang;
    const i18n = lang === "vi" ? I18N_VI : I18N_EN;
    const query = this.state.searchQuery.toLowerCase().trim();
    const bookmarks = StorageManager.getBookmarks();

    let filtered = MATERIALS.filter(m => {
      // Category filter
      if (this.state.activeCategory !== "all" && m.category !== this.state.activeCategory) {
        return false;
      }
      // Bookmarked filter
      if (this.state.onlyBookmarked && !bookmarks.includes(m.id)) {
        return false;
      }
      // Query filter
      if (query) {
        const nameMatch = m.name.vi.toLowerCase().includes(query) || m.name.en.toLowerCase().includes(query);
        const taglineMatch = m.tagline.vi.toLowerCase().includes(query) || m.tagline.en.toLowerCase().includes(query);
        const tagMatch = m.tags.some(t => t.toLowerCase().includes(query));
        const specMatch = m.specifications.some(s => 
          s.valueVi.toLowerCase().includes(query) || 
          s.valueEn.toLowerCase().includes(query) || 
          s.standard.toLowerCase().includes(query)
        );
        return nameMatch || taglineMatch || tagMatch || specMatch;
      }
      return true;
    });

    if (countEl) {
      countEl.textContent = i18n.search.resultsCount.replace("{count}", filtered.length);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-dim);">
          <div style="font-size: 3rem; margin-bottom: 14px;">🔍</div>
          <h3>${i18n.search.noResults}</h3>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(mat => {
      const isSaved = StorageManager.isBookmarked(mat.id);
      const topStandard = mat.standards[0] ? mat.standards[0].code : "ISO/IEC";

      return `
        <div class="material-card" data-material-id="${mat.id}">
          <div class="card-media">
            <span class="card-badge">${mat.badge || mat.category.toUpperCase()}</span>
            <button class="card-bookmark-btn ${isSaved ? 'active' : ''}" data-bookmark-id="${mat.id}" title="${i18n.materialCard.bookmark}">
              ★
            </button>
            <img src="${mat.image}" alt="${lang === "vi" ? mat.name.vi : mat.name.en}" loading="lazy"/>
          </div>

          <div class="card-body">
            <span class="card-category">${mat.category.toUpperCase()} • ${topStandard}</span>
            <h3 class="card-title">${lang === "vi" ? mat.name.vi : mat.name.en}</h3>
            <p class="card-tagline">${lang === "vi" ? mat.tagline.vi : mat.tagline.en}</p>

            <div class="card-tags">
              ${mat.tags.slice(0, 4).map(t => `<span class="tag-pill">${t}</span>`).join("")}
            </div>

            <div class="card-footer">
              <button class="btn btn-primary btn-card-details" onclick="window.app.openMaterialModal('${mat.id}')">
                ${i18n.materialCard.viewDetails}
              </button>
              ${mat.has3DModel ? `
                <button class="btn btn-card-3d" onclick="window.app.view3DModel('${mat.modelType}')" title="${i18n.materialCard.view3D}">
                  🧊 3D
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Bind bookmarks in cards
    grid.querySelectorAll(".card-bookmark-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.dataset.bookmarkId;
        const nowSaved = StorageManager.toggleBookmark(id);
        btn.classList.toggle("active", nowSaved);
      });
    });
  }

  openMaterialModal(id) {
    const mat = MATERIALS.find(m => m.id === id);
    if (!mat) return;
    this.state.activeModalId = id;

    const modal = document.getElementById("material-modal");
    if (!modal) return;

    const lang = this.state.lang;
    const i18n = lang === "vi" ? I18N_VI : I18N_EN;
    const isSaved = StorageManager.isBookmarked(mat.id);

    // Title & Badges
    document.getElementById("modal-category").textContent = mat.category.toUpperCase();
    document.getElementById("modal-title").textContent = lang === "vi" ? mat.name.vi : mat.name.en;

    // Bookmark button in modal
    const modalBookmarkBtn = document.getElementById("modal-bookmark-btn");
    if (modalBookmarkBtn) {
      modalBookmarkBtn.textContent = isSaved ? i18n.detailModal.btnBookmarkRemove : i18n.detailModal.btnBookmarkAdd;
      modalBookmarkBtn.className = `btn btn-sm ${isSaved ? 'btn-orange' : 'btn-outline'}`;
      modalBookmarkBtn.onclick = () => {
        const nowSaved = StorageManager.toggleBookmark(mat.id);
        modalBookmarkBtn.textContent = nowSaved ? i18n.detailModal.btnBookmarkRemove : i18n.detailModal.btnBookmarkAdd;
        modalBookmarkBtn.className = `btn btn-sm ${nowSaved ? 'btn-orange' : 'btn-outline'}`;
        this.renderMaterialsGrid();
      };
    }

    // Populate Tab 1: Overview
    document.getElementById("pane-overview").innerHTML = `
      <div style="margin-bottom: 24px;">
        <h4 class="text-cyan" style="margin-bottom: 8px;">${i18n.detailModal.workingPrincipleTitle}</h4>
        <p style="font-size: 1rem; line-height: 1.7; color: var(--text-main); margin-bottom: 16px;">
          ${lang === "vi" ? mat.overview.vi : mat.overview.en}
        </p>
        <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-muted);">
          ${lang === "vi" ? mat.workingPrinciple.vi : mat.workingPrinciple.en}
        </p>
      </div>

      <div style="background: var(--bg-tertiary); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; flex-wrap: gap: 16px;">
        <div>
          <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--cyan-glow);">${mat.badge}</span>
          <div style="font-size: 0.9rem; font-weight: 700;">Hệ Số Đánh Giá Kỹ Thuật: ${mat.rating} / 5.0 ★</div>
        </div>
        ${mat.has3DModel ? `
          <button class="btn btn-sm btn-primary" onclick="window.app.view3DModel('${mat.modelType}'); window.app.closeModal();">
            Mở Mô Hình 3D Ngay 🧊
          </button>
        ` : ''}
      </div>
    `;

    // Populate Tab 2: Specs Table
    document.getElementById("pane-specs").innerHTML = `
      <h4 class="text-cyan" style="margin-bottom: 12px;">${i18n.detailModal.specsTableTitle}</h4>
      <table class="specs-table">
        <thead>
          <tr>
            <th>${lang === "vi" ? "Thông Số Chỉ Tiêu" : "Specification Parameter"}</th>
            <th>${lang === "vi" ? "Giá Trị Định Mức" : "Rated Value"}</th>
            <th>${lang === "vi" ? "Tiêu Chuẩn Viện Dẫn" : "Reference Standard"}</th>
          </tr>
        </thead>
        <tbody>
          ${mat.specifications.map(s => `
            <tr>
              <td><strong>${lang === "vi" ? s.labelVi : s.labelEn}</strong></td>
              <td class="spec-val">${lang === "vi" ? s.valueVi : s.valueEn}</td>
              <td class="spec-std">${s.standard}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;

    // Populate Tab 3: Pros & Cons
    document.getElementById("pane-proscons").innerHTML = `
      <div class="pros-cons-grid">
        <div class="pro-con-box pro-box">
          <h4 class="pro-title" style="margin-bottom: 16px;">✓ ${i18n.detailModal.prosTitle}</h4>
          ${mat.pros.map(p => `
            <div class="pro-con-item">
              <div class="pro-con-title pro-title">${lang === "vi" ? p.titleVi : p.titleEn}</div>
              <p class="pro-con-desc">${lang === "vi" ? p.descVi : p.descEn}</p>
              <div class="pro-con-context">
                <strong>${lang === "vi" ? "Tình huống tối ưu:" : "Optimal scenario:"}</strong> ${lang === "vi" ? p.scenarioVi : p.scenarioEn}
              </div>
            </div>
          `).join("")}
        </div>

        <div class="pro-con-box con-box">
          <h4 class="con-title" style="margin-bottom: 16px;">⚠ ${i18n.detailModal.consTitle}</h4>
          ${mat.cons.map(c => `
            <div class="pro-con-item">
              <div class="pro-con-title con-title">${lang === "vi" ? c.titleVi : c.titleEn}</div>
              <p class="pro-con-desc">${lang === "vi" ? c.descVi : c.descEn}</p>
              <div class="pro-con-context">
                <strong>${lang === "vi" ? "Rủi ro cảnh báo:" : "Hazard risk:"}</strong> ${lang === "vi" ? c.riskVi : c.riskEn}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    // Populate Tab 4: Failures Case Studies
    document.getElementById("pane-failures").innerHTML = `
      <h4 class="text-orange" style="margin-bottom: 16px;">${i18n.detailModal.failuresTitle}</h4>
      ${(mat.failureCases || []).map(f => `
        <div style="background: var(--bg-tertiary); border-left: 4px solid var(--orange-safety); padding: 18px; border-radius: var(--radius-sm); margin-bottom: 16px;">
          <h5 style="font-size: 1.05rem; margin-bottom: 8px; color: var(--text-main);">
            ${lang === "vi" ? f.titleVi : f.titleEn}
          </h5>
          <div style="margin-bottom: 8px;">
            <strong style="color: var(--amber-signal);">${lang === "vi" ? "Hiện tượng thực địa:" : "Field Symptom:"}</strong>
            <span style="color: var(--text-muted);">${lang === "vi" ? f.symptomVi : f.symptomEn}</span>
          </div>
          <div style="margin-bottom: 8px;">
            <strong style="color: var(--red-fire);">${lang === "vi" ? "Nguyên nhân gốc rễ:" : "Root Cause:"}</strong>
            <span style="color: var(--text-muted);">${lang === "vi" ? f.causeVi : f.causeEn}</span>
          </div>
          <div>
            <strong style="color: var(--green-pass);">${lang === "vi" ? "Giải pháp khắc phục triệt để:" : "Forensic Solution:"}</strong>
            <span style="color: var(--text-main);">${lang === "vi" ? f.solutionVi : f.solutionEn}</span>
          </div>
        </div>
      `).join("")}
    `;

    // Populate Tab 5: Standards
    document.getElementById("pane-standards").innerHTML = `
      <h4 class="text-cyan" style="margin-bottom: 16px;">${i18n.detailModal.standardsTitle}</h4>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${mat.standards.map(std => `
          <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-tertiary); padding: 14px 18px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <div>
              <span style="font-family: var(--font-mono); font-weight: 700; color: var(--cyan-glow);">${std.code}</span>
              <div style="font-size: 0.92rem; color: var(--text-main); margin-top: 2px;">${lang === "vi" ? std.titleVi : std.titleEn}</div>
              <div style="font-size: 0.78rem; color: var(--text-dim);">${std.organization}</div>
            </div>
            <a href="${std.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
              ${lang === "vi" ? "Xem Tài Liệu ↗" : "Official Code ↗"}
            </a>
          </div>
        `).join("")}
      </div>
    `;

    // Populate Tab 6: 3D / Media
    document.getElementById("pane-media").innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr; gap: 20px;">
        <div style="text-align: center; background: #090d16; padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <img src="${mat.image}" style="max-height: 280px; width: auto;" alt="${lang === "vi" ? mat.name.vi : mat.name.en}"/>
        </div>
        ${mat.has3DModel ? `
          <div style="text-align: center;">
            <button class="btn btn-primary" onclick="window.app.view3DModel('${mat.modelType}'); window.app.closeModal();">
              Mở Trình Xem 3D Toàn Cảnh (Orbit & Explode) 🧊
            </button>
          </div>
        ` : ''}
      </div>
    `;

    // Reset to default tab
    this.switchModalTab("overview");
    modal.classList.add("open");
  }

  closeModal() {
    const modal = document.getElementById("material-modal");
    if (modal) modal.classList.remove("open");
    this.state.activeModalId = null;
  }

  switchModalTab(tabId) {
    this.state.activeModalTab = tabId;
    document.querySelectorAll(".modal-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
    document.querySelectorAll(".modal-tab-pane").forEach(pane => {
      pane.classList.toggle("active", pane.id === `pane-${tabId}`);
    });
  }

  view3DModel(modelType) {
    const section = document.getElementById("viewer3d");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (this.viewer3d) {
      this.viewer3d.switchModel(modelType);
      document.querySelectorAll(".model-pill").forEach(p => {
        p.classList.toggle("active", p.dataset.modelType === modelType);
      });
    }
  }

  toggleTheme() {
    this.state.theme = this.state.theme === "dark" ? "light" : "dark";
    StorageManager.setTheme(this.state.theme);
    document.documentElement.setAttribute("data-theme", this.state.theme);
  }

  toggleLanguage() {
    this.state.lang = this.state.lang === "vi" ? "en" : "vi";
    StorageManager.setLang(this.state.lang);
    this.applyTranslations();
  }

  bindEvents() {
    // Theme Button
    document.getElementById("btn-toggle-theme")?.addEventListener("click", () => this.toggleTheme());

    // Language Button
    document.getElementById("btn-toggle-lang")?.addEventListener("click", () => this.toggleLanguage());

    // Search Input
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.state.searchQuery = e.target.value;
        this.renderMaterialsGrid();
      });
    }

    // Modal close
    document.getElementById("modal-close-btn")?.addEventListener("click", () => this.closeModal());
    document.getElementById("material-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "material-modal") this.closeModal();
    });

    // Modal Tabs
    document.querySelectorAll(".modal-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => this.switchModalTab(btn.dataset.tab));
    });

    // 3D Controls
    document.querySelectorAll(".model-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".model-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.viewer3d.switchModel(pill.dataset.modelType);
      });
    });

    document.getElementById("btn-3d-rotate")?.addEventListener("click", () => {
      const isRotating = this.viewer3d.toggleRotation();
      const btn = document.getElementById("btn-3d-rotate");
      if (btn) btn.classList.toggle("btn-orange", !isRotating);
    });

    document.getElementById("btn-3d-explode")?.addEventListener("click", () => {
      const isExploded = this.viewer3d.toggleExplode();
      const btn = document.getElementById("btn-3d-explode");
      if (btn) btn.classList.toggle("btn-orange", isExploded);
    });

    document.getElementById("btn-3d-reset")?.addEventListener("click", () => {
      this.viewer3d.resetCamera();
    });

    // Calculator tabs
    document.querySelectorAll(".calc-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".calc-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const target = btn.dataset.calc;
        document.querySelectorAll(".calc-card").forEach(c => {
          c.style.display = c.id === `calc-${target}` ? "grid" : "none";
        });
      });
    });

    // Keyboard Esc to close modal
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.state.activeModalId) {
        this.closeModal();
      }
    });
  }

  checkUrlHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#material/")) {
      const id = hash.replace("#material/", "");
      this.openMaterialModal(id);
    }
  }
}

// Instantiate Global App
window.addEventListener("DOMContentLoaded", () => {
  window.app = new InfraTechApp();
  window.app.init();
});
