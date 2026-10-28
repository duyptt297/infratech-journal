// English Localization Dictionary
const I18N_EN = {
  brand: {
    title: "INFRA-TECH JOURNAL",
    subTitle: "INDUSTRIAL INFRASTRUCTURE & TECHNICAL MATERIALS MAGAZINE",
    tagline: "Bilingual hands-on engineering intelligence on MEP, fire safety, and smart industrial materials"
  },
  nav: {
    home: "Home",
    materials: "Materials Directory",
    viewer3d: "3D Models",
    comparator: "Comparator",
    matrix: "Decision Matrix",
    calculator: "Calculators",
    quiz: "Quiz Challenge",
    bookmarks: "Saved",
    langToggle: "VI / EN",
    themeToggle: "Theme"
  },
  hero: {
    badge: "GEN-Z INDUSTRIAL ENGINEERING HUB • BILINGUAL VIETNAMESE - ENGLISH",
    title: "Demystifying Industrial Technical Materials",
    titleHighlight: "Accurate, Interactive & Unfiltered",
    description: "Explore 3D anatomical cutaways, thermodynamic principles, superpowers & fatal flaws of materials across civil structures, power distribution, MEP piping, industrial automation, and fire life safety.",
    btnExplore: "Explore Database",
    btnViewer3D: "Launch 3D Lab",
    btnComparator: "Compare Materials",
    stat1: "Engineered Materials",
    stat2: "ASTM/NFPA Standards",
    stat3: "Interactive 3D Cutaways",
    stat4: "Scientific Precision"
  },
  search: {
    placeholder: "Search materials, steel grades, ASTM, NFPA, IEC codes (e.g. Sprinkler, Busway, A106, 950°C)...",
    filterAll: "All",
    resultsCount: "Found {count} matching materials",
    noResults: "No industrial materials matched your query."
  },
  materialCard: {
    viewDetails: "Technical Deep-Dive",
    view3D: "3D Cutaway",
    compare: "Add to Compare",
    bookmark: "Save",
    standard: "Standard:",
    prosLabel: "Key Strengths",
    consLabel: "Failure Risks & Cons"
  },
  detailModal: {
    tabOverview: "Overview & Structure",
    tabSpecs: "Datasheet Specs",
    tabProsCons: "Pros & Cons Matrix",
    tabFailures: "Field Failures & Fixes",
    tabStandards: "Standards & Codes",
    tabMedia: "3D Model & Video",
    workingPrincipleTitle: "Working Principle & Physics Mechanism",
    specsTableTitle: "Comprehensive Technical Datasheet Standards",
    prosTitle: "Engineering Superpowers & Optimal Scenarios",
    consTitle: "Vulnerabilities, Pitfalls & Inherent Risks",
    failuresTitle: "Job-Site Failure Case Studies & Forensic Solutions",
    standardsTitle: "Governing International Codes & Standards",
    btnBookmarkAdd: "Save to Bookmarks",
    btnBookmarkRemove: "Remove Bookmark",
    btnClose: "Close",
    printSheet: "Print Summary Sheet"
  },
  viewer3dSection: {
    title: "Interactive 3D Engineering Lab",
    subTitle: "Orbit, zoom, inspect exploded cutaways, and study internal structural assemblies",
    hint: "Click & drag to rotate • Scroll to zoom • Use toggle controls to interact",
    selectModel: "Select Component to Inspect:",
    btnRotate: "Auto-Rotate",
    btnExplode: "Exploded Cutaway",
    btnReset: "Reset Camera",
    hotspotsTitle: "Engineering Callout Hotspots"
  },
  comparatorSection: {
    title: "Engineering Arena: Side-by-Side Comparator",
    subTitle: "Directly pit two materials head-to-head to determine the optimal engineering choice",
    selectA: "Select First Material (A):",
    selectB: "Select Second Material (B):",
    btnCompare: "Execute Comparison",
    specComparisonTitle: "Direct Datasheet Comparison Table",
    radarTitle: "Radar Assessment Matrix",
    verdictTitle: "Scientific Verdict & Engineering Guidelines",
    scoreCategories: {
      thermal: "Thermal Resistance",
      mechanical: "Mechanical Rigidity",
      costEff: "Capital Cost Efficiency",
      maintenance: "Maintenance Ease",
      speed: "Installation Velocity",
      reliability: "Environmental Reliability"
    }
  },
  matrixSection: {
    title: "Material Decision Matrix (Scenario Selector)",
    subTitle: "Select operational job-site conditions to receive rigorous recommendations",
    envLabel: "1. Industrial Operational Environment:",
    envOptions: {
      normal: "Standard indoor ambient dry warehouse",
      chemical: "Aggressive chemicals, acid vapors, marine saline aerosols",
      highTemp: "High-temperature steam lines, furnaces, radiant boilers",
      fireCritical: "Mission-critical life safety, explosion-proof zones",
      cleanroom: "Semiconductor cleanrooms, GMP pharma, sterile food processing",
      vibration: "Heavy mechanical vibration, drop presses, forklift shock"
    },
    priorityLabel: "2. Primary Engineering Objective:",
    priorityOptions: {
      safety: "Life safety & zero unplanned downtime (Max Reliability)",
      cost: "Minimal upfront initial capital expenditure (Low Capex)",
      speed: "Ultra-rapid fast-track delivery & modular expansion",
      durability: "25+ year maintenance-free design life"
    },
    btnRecommend: "Analyze & Recommend",
    recommendedTitle: "Recommended Optimal Material",
    warningTitle: "Materials to Avoid / Severe Hazards"
  },
  calculatorSection: {
    title: "Engineering Quick Calculators",
    subTitle: "Accurate formulas for fire flow, cable voltage drop, and bursting pipe pressure",
    sprinklerTab: "Sprinkler Flow Rate",
    pipeTab: "Barlow's Pipe Bursting Pressure",
    cableTab: "Feeder Voltage Drop",
    sprinkler: {
      kFactor: "Sprinkler K-Factor:",
      k56: "K = 5.6 US (80 metric) - 1/2\" NPT",
      k80: "K = 8.0 US (115 metric) - 3/4\" NPT",
      k112: "K = 11.2 US (160 metric) - ELO Extra-Large Orifice",
      pressure: "Hydraulic gauge pressure at head (bar):",
      btnCalculate: "Compute Flow Q (L/min)",
      formulaNotice: "NFPA 13 Formula: Q = K_metric × √P"
    },
    pipe: {
      diameter: "Pipe Outside Diameter D (mm):",
      wallThickness: "Wall Thickness t (mm):",
      yieldStrength: "Material Yield Strength S (MPa - e.g. A106 Gr.B = 240 MPa):",
      btnCalculate: "Compute Maximum Yield Pressure (Bar)",
      formulaNotice: "Barlow's Formula: P = (2 × S × t) / D"
    }
  },
  quizSection: {
    badge: "GEN-Z ENGINEERING CHALLENGE",
    title: "Field Engineering Quiz Challenge",
    subTitle: "Conquer tough site scenarios, earn the Chief Site Engineer badge",
    currentQuestion: "Question {current} / {total}",
    score: "Score:",
    streak: "Streak:",
    btnSubmit: "Confirm Answer",
    btnNext: "Next Question",
    btnRestart: "Retry Quiz",
    congratsTitle: "Congratulations, Engineer!",
    congratsDesc: "You conquered the industrial engineering test with a score of {score}/{total}!",
    badgeRank: "Rank Honor Awarded:"
  },
  bookmarksSection: {
    title: "Your Saved Materials Library",
    empty: "No saved materials yet. Click the bookmark icon on any material card to save for quick reference!",
    clearAll: "Clear All"
  },
  footer: {
    about: "INFRA-TECH JOURNAL is an open visual academic platform designed for engineering students, MEP contractors, fire consultants, and industrial facility directors.",
    quickLinks: "Quick Navigation",
    categories: "Categories",
    academicNotice: "All technical metrics cross-referenced against ASME, ASTM, NFPA, IEC, and TCVN standards.",
    copyright: "© 2026 INFRA-TECH JOURNAL. Engineered for the Vietnamese & Global Engineering Community. Open Source on GitHub."
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18N_EN;
}
