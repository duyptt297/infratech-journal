// Bộ ngôn ngữ Tiếng Việt (Vietnamese Localization Dictionary)
const I18N_VI = {
  brand: {
    title: "INFRA-TECH JOURNAL",
    subTitle: "TẠP CHÍ VẬT TƯ & CƠ SỞ HẠ TẦNG KỸ THUẬT CÔNG NGHIỆP",
    tagline: "Cơ sở dữ liệu khoa học thực chiến song ngữ về vật tư, thiết bị MEP, PCCC và hạ tầng xưởng thông minh"
  },
  nav: {
    home: "Trang Chủ",
    materials: "Tra Cứu Vật Tư",
    viewer3d: "Mô Hình 3D",
    comparator: "So Sánh Đối Đầu",
    matrix: "Bộ Chọn Giải Pháp",
    calculator: "Công Cụ Tính Toán",
    quiz: "Thử Thách Kỹ Sư",
    bookmarks: "Đã Lưu",
    langToggle: "EN / VI",
    themeToggle: "Giao Diện"
  },
  hero: {
    badge: "GEN-Z INDUSTRIAL ENGINEERING HUB • SONG NGỮ ANH - VIỆT",
    title: "Giải Mã Bí Mật Vật Tư Kỹ Thuật Công Nghiệp",
    titleHighlight: "Chính Xác, Trực Quan & Đột Phá",
    description: "Khám phá cấu trúc giải phẫu 3D, nguyên lý nhiệt động lực học, điểm mạnh & tử huyệt của từng loại vật tư từ hạ tầng xây dựng, điện động lực, đường ống MEP, mạng công nghiệp đến phòng cháy chữa cháy.",
    btnExplore: "Khám Phá Vật Tư Ngay",
    btnViewer3D: "Mở Trình Xem 3D",
    btnComparator: "So Sánh Vật Tư",
    stat1: "Vật tư & Linh kiện",
    stat2: "Tiêu chuẩn ASTM/NFPA",
    stat3: "Mô hình 3D tương tác",
    stat4: "Độ chính xác khoa học"
  },
  search: {
    placeholder: "Tìm kiếm vật tư, mác thép, tiêu chuẩn ASTM, NFPA, IEC (vd: Sprinkler, Busway, A106, 950°C)...",
    filterAll: "Tất Cả",
    resultsCount: "Tìm thấy {count} loại vật tư phù hợp",
    noResults: "Không tìm thấy vật tư nào khớp với từ khóa của bạn."
  },
  materialCard: {
    viewDetails: "Xem Chi Tiết Kỹ Thuật",
    view3D: "Mô Hình 3D",
    compare: "Thêm So Sánh",
    bookmark: "Lưu",
    standard: "Tiêu chuẩn:",
    prosLabel: "Điểm mạnh nổi trội",
    consLabel: "Hạn chế & Lưu ý rủi ro"
  },
  detailModal: {
    tabOverview: "Tổng Quan & Cấu Tạo",
    tabSpecs: "Thông Số Kỹ Thuật",
    tabProsCons: "Phân Tích Ưu - Nhược Điểm",
    tabFailures: "Sự Cố Thực Tế & Khắc Phục",
    tabStandards: "Tiêu Chuẩn Viện Dẫn",
    tabMedia: "Mô Hình 3D & Video",
    workingPrincipleTitle: "Nguyên Lý Hoạt Động & Cơ Chế Vật Lý",
    specsTableTitle: "Bảng Thông Số Kỹ Thuật Chi Tiết (Datasheet Standards)",
    prosTitle: "Điểm Mạnh & Tình Huống Ứng Dụng Tối Ưu",
    consTitle: "Tử Huyệt, Điểm Yếu & Rủi Ro Tiềm Ẩn",
    failuresTitle: "Hồ Sơ Sự Cố Hiện Trường Điển Hình (Failure Case Studies)",
    standardsTitle: "Quy Chuẩn & Tiêu Chuẩn Quốc Tế Viện Dẫn",
    btnBookmarkAdd: "Lưu Vào Danh Sách",
    btnBookmarkRemove: "Bỏ Lưu",
    btnClose: "Đóng",
    printSheet: "In Bản Tóm Tắt"
  },
  viewer3dSection: {
    title: "Phòng Thí Nghiệm 3D Tương Tác (Interactive 3D Lab)",
    subTitle: "Xoay, phóng to, bóc tách mặt cắt và kiểm tra từng chi tiết cấu thành bên trong",
    hint: "Kéo chuột để xoay góc nhìn • Cuộn chuột để phóng to / thu nhỏ • Nhấn các nút chức năng để khám phá",
    selectModel: "Chọn mô hình kiểm tra:",
    btnRotate: "Tự Động Xoay",
    btnExplode: "Bóc Tách Mặt Cắt (Exploded View)",
    btnReset: "Đặt Lại Góc Nhìn",
    hotspotsTitle: "Chi Tiết Điểm Nóng Kỹ Thuật (Engineering Hotspots)"
  },
  comparatorSection: {
    title: "Đấu Trường Kỹ Thuật (Side-by-Side Comparator)",
    subTitle: "So sánh trực diện 2 vật tư kỹ thuật để đưa ra quyết định thiết kế tối ưu nhất",
    selectA: "Chọn Vật Tư Thứ Nhất (A):",
    selectB: "Chọn Vật Tư Thứ Hai (B):",
    btnCompare: "Tiến Hành Đối Đầu",
    specComparisonTitle: "Bảng Đối Chiếu Thông Số Trực Diện",
    radarTitle: "Biểu Đồ Radar Đánh Giá Năng Lực Toàn Diện",
    verdictTitle: "Kết Luận Khoa Học & Lời Khuyên Cho Kỹ Sư",
    scoreCategories: {
      thermal: "Khả năng chịu nhiệt",
      mechanical: "Độ bền cơ học",
      costEff: "Hiệu quả chi phí đầu tư",
      maintenance: "Dễ dàng bảo trì",
      speed: "Tốc độ thi công lắp đặt",
      reliability: "Độ tin cậy môi trường"
    }
  },
  matrixSection: {
    title: "Ma Trận Chọn Vật Tư Kỹ Thuật (Scenario Selector)",
    subTitle: "Chọn điều kiện môi trường công trường để nhận khuyến cáo chuẩn xác",
    envLabel: "1. Môi trường vận hành công xưởng:",
    envOptions: {
      normal: "Môi trường văn phòng / Xưởng khô ráo thông thường",
      chemical: "Môi trường hóa chất ăn mòn, hơi axit, sương muối ven biển",
      highTemp: "Môi trường nhiệt độ cao, lò hơi, ống khói, nhiệt bức xạ",
      fireCritical: "Hệ thống an toàn tính mạng khẩn cấp, chống cháy nổ tuyệt đối",
      cleanroom: "Phòng sạch bán dẫn, dược phẩm GMP, chế biến thực phẩm",
      vibration: "Rung chấn cơ học mạnh, máy dập, xe nâng di chuyển nặng"
    },
    priorityLabel: "2. Ưu tiên hàng đầu của dự án:",
    priorityOptions: {
      safety: "An toàn sinh mạng & Không gián đoạn sự cố (Max Reliability)",
      cost: "Tiết kiệm ngân sách chi phí đầu tư ban đầu (Low Capex)",
      speed: "Tiến độ thi công thần tốc, mở rộng linh hoạt (Fast Track)",
      durability: "Tuổi thọ bền bỉ trên 25 năm không bảo dưỡng (Long Lifespan)"
    },
    btnRecommend: "Phân Tích & Đề Xuất",
    recommendedTitle: "Vật Tư Tối Ưu Được Đề Xuất",
    warningTitle: "Vật Tư Cần Tránh Hoặc Lưu Ý Rủi Ro"
  },
  calculatorSection: {
    title: "Bộ Công Cụ Tính Toán Kỹ Sư (Engineering Calculators)",
    subTitle: "Tính toán lưu lượng PCCC, sụt áp cáp điện và áp suất nổ đường ống chuẩn xác",
    sprinklerTab: "Lưu Lượng Đầu Phun Sprinkler",
    pipeTab: "Áp Suất Giới Hạn Ống Thép (Barlow)",
    cableTab: "Độ Sụt Áp Tuyến Cáp Điện",
    sprinkler: {
      kFactor: "Hệ số K-Factor của đầu phun:",
      k56: "K = 5.6 (80 mét) - Tiêu chuẩn 1/2 inch",
      k80: "K = 8.0 (115 mét) - Tiêu chuẩn 3/4 inch",
      k112: "K = 11.2 (160 mét) - Lưu lượng lớn ELO",
      pressure: "Áp suất thủy lực tại đầu phun (bar):",
      btnCalculate: "Tính Lưu Lượng Q (L/phút)",
      formulaNotice: "Công thức NFPA 13: Q = K_metric × √P"
    },
    pipe: {
      diameter: "Đường kính ngoài ống D (mm):",
      wallThickness: "Độ dày thành ống t (mm):",
      yieldStrength: "Giới hạn chảy vật liệu S (MPa - vd A106 Gr.B = 240 MPa):",
      btnCalculate: "Tính Áp Suất Chịu Đựng (Bar)",
      formulaNotice: "Công thức Barlow: P = (2 × S × t) / D"
    }
  },
  quizSection: {
    badge: "GEN-Z ENGINEERING CHALLENGE",
    title: "Đấu Trí Kỹ Sư Thực Chiến (Quiz Mode)",
    subTitle: "Vượt qua các câu hỏi hóc búa, nhận huy hiệu danh dự Kỹ Sư Trưởng",
    currentQuestion: "Câu hỏi {current} / {total}",
    score: "Điểm số:",
    streak: "Chuỗi đúng:",
    btnSubmit: "Xác Nhận Đáp Án",
    btnNext: "Câu Kế Tiếp",
    btnRestart: "Chơi Lại",
    congratsTitle: "Chúc Mừng Kỹ Sư!",
    congratsDesc: "Bạn đã hoàn thành bài thử nghiệm vật tư kỹ thuật với số điểm {score}/{total}!",
    badgeRank: "Danh hiệu đạt được:"
  },
  bookmarksSection: {
    title: "Danh Sách Vật Tư Đã Lưu Của Bạn",
    empty: "Bạn chưa lưu vật tư nào. Hãy nhấn biểu tượng Bookmark trên các thẻ vật tư để lưu lại tra cứu nhanh!",
    clearAll: "Xóa Toàn Bộ"
  },
  footer: {
    about: "Tạp chí CSHT & MEP là nền tảng học thuật trực quan dành cho sinh viên kỹ thuật, kỹ sư cơ điện MEP, giám sát PCCC và nhà thầu xây dựng công nghiệp.",
    quickLinks: "Liên Kết Nhanh",
    categories: "Danh Mục",
    academicNotice: "Mọi dữ liệu kỹ thuật được chuẩn hóa đối chiếu theo ASME, ASTM, NFPA, IEC và TCVN.",
    copyright: "© 2026 INFRA-TECH JOURNAL. Phát triển cho cộng đồng Kỹ Sư Việt Nam & Quốc Tế. Mã nguồn mở trên GitHub."
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18N_VI;
}
