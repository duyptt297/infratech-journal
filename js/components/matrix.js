// Ma trận lựa chọn vật tư kỹ thuật công nghiệp (Engineering Decision Matrix)
class TechnicalMatrix {
  constructor() {
    this.container = document.getElementById("matrix-results");
    this.envSelect = document.getElementById("matrix-env-select");
    this.prioritySelect = document.getElementById("matrix-priority-select");
    this.btnRun = document.getElementById("btn-run-matrix");
  }

  init() {
    if (this.btnRun) {
      this.btnRun.addEventListener("click", () => this.analyze());
    }
  }

  analyze() {
    if (!this.container || !this.envSelect || !this.prioritySelect) return;
    const env = this.envSelect.value;
    const priority = this.prioritySelect.value;
    const lang = window.appState ? window.appState.lang : "vi";
    const i18n = lang === "vi" ? I18N_VI : I18N_EN;

    let recommended = [];
    let warnings = [];

    if (env === "chemical") {
      recommended = [
        {
          id: "epoxy-self-leveling-floor",
          reasonVi: "Màng polyme không lỗ xốp kháng 100% dung môi, axit loãng và kiềm công nghiệp.",
          reasonEn: "Zero-porosity polymer barrier resistant to solvents, mild acids, and industrial alkalis."
        },
        {
          id: "cat7-sftp-industrial",
          reasonVi: "Vỏ ngoài PUR (Polyurethane) không bị biến tính rã rời khi tiếp xúc dầu khoáng và hóa chất.",
          reasonEn: "Rugged PUR jacket impervious to hydrocarbon coolants and caustic aerosol degradation."
        }
      ];
      warnings = [
        {
          titleVi: "Tránh dùng ống thép đúc carbon không sơn phủ ngoài trời",
          titleEn: "Avoid bare uninsulated carbon steel piping",
          descVi: "Môi trường hơi axit hoặc muối mặn sẽ ăn mòn điện hóa làm thủng ống sau 2-3 năm.",
          descEn: "Accelerated electrochemical galvanic pitting causes pin-hole breaches within 2-3 years."
        },
        {
          titleVi: "Cẩn trọng với van cổng thân gang thông thường",
          titleEn: "Never use cast iron gate valves in chemical streams",
          descVi: "Bắt buộc nâng cấp lên Inox vi sinh CF8M hoặc lót đệm PTFE/PFA.",
          descEn: "Upgrade to CF8M stainless or fluoropolymer PTFE/PFA linings."
        }
      ];
    } else if (env === "highTemp") {
      recommended = [
        {
          id: "sch40-seamless-pipe",
          reasonVi: "Thép đúc A106 Gr.B chịu áp lực hơi nước bão hòa tới 427°C mà không nứt đường hàn.",
          reasonEn: "A106 Gr.B seamless steel sustains saturated steam headers up to 427°C with zero seam failure risk."
        },
        {
          id: "flanged-gate-valve",
          reasonVi: "Đệm graphite mềm và đĩa kim loại Stellite chịu quá nhiệt tốt nhất trong các dòng van.",
          reasonEn: "Flexible graphite packing and Stellite hardfacing provide superior thermal endurance."
        }
      ];
      warnings = [
        {
          titleVi: "Tránh dùng panel PIR ở nhiệt độ bề mặt vượt quá 120°C liên tục",
          titleEn: "Avoid PIR panels on surfaces continuously above 120°C",
          descVi: "Xốp hữu cơ sẽ bị suy giảm khả năng chịu nén và co ngót; hãy dùng panel Rockwool.",
          descEn: "Organic foams suffer thermal creep; mineral rockwool is required for high heat barriers."
        }
      ];
    } else if (env === "fireCritical") {
      recommended = [
        {
          id: "fire-cable-fr-pvc",
          reasonVi: "Băng Mica Phlogopite duy trì điện nguồn bơm PCCC trong đám cháy 950°C suốt 180 phút (BS 6387 CWZ).",
          reasonEn: "Phlogopite mica tape safeguards emergency life-safety power in 950°C fire for 180 minutes."
        },
        {
          id: "sprinkler-pendent-bulb",
          reasonVi: "Hoạt động cơ học 100% tự động dập tắt ngọn lửa tại chỗ không phụ thuộc điện năng.",
          reasonEn: "100% autonomous mechanical activation suppressing local fire without power dependency."
        },
        {
          id: "fm200-clean-agent",
          reasonVi: "Dập cháy phòng máy chủ IT trong 10 giây không dẫn điện và không để lại giọt cặn.",
          reasonEn: "Extinguishes IT server hall blazes in 10 seconds leaving zero conductive residue."
        }
      ];
      warnings = [
        {
          titleVi: "Nghiêm cấm dùng cáp Chậm Cháy (Flame Retardant) thay cho Cáp Chống Cháy",
          titleEn: "Never substitute Flame Retardant (FR) for Fire-Resistant cables",
          descVi: "Cáp chậm cháy chỉ không bén lửa lan, nhưng ruột sẽ chập mạch mất điện sau 3 phút!",
          descEn: "Flame retardant cables only arrest surface spread; core conductors short out within 3 minutes!"
        }
      ];
    } else if (env === "cleanroom") {
      recommended = [
        {
          id: "pir-sandwich-panel",
          reasonVi: "Cấu trúc ngàm Z-lock kín khít, tôn mạ kẽm phủ sơn kháng khuẩn đạt chuẩn GMP / ISO 14644.",
          reasonEn: "Airtight tongue-and-groove cam locks and antimicrobial PVDF coatings fulfill GMP & ISO 14644."
        },
        {
          id: "epoxy-self-leveling-floor",
          reasonVi: "Bề mặt phẳng lì nguyên khối không ron nối, ngăn vi khuẩn trú ngụ và không sinh bụi cát.",
          reasonEn: "Monolithic joint-free mirror surface halts microbial colonies and eliminates cement dusting."
        }
      ];
      warnings = [
        {
          titleVi: "Tránh dùng sàn rải bột Hardener xi măng thông thường trong phòng sạch Class 1000",
          titleEn: "Avoid dry-shake cementitious hardeners in Class 1000 cleanrooms",
          descVi: "Sàn hardener vẫn có thể phát sinh bụi khoáng vi mô khi bánh xe nâng ma sát.",
          descEn: "Cementitious surfaces eventually shed micro-fine mineral dust under high wheel friction."
        }
      ];
    } else {
      recommended = [
        {
          id: "busway-compact-al",
          reasonVi: "Tối ưu hóa không gian máng cáp, sụt áp cực nhỏ và lắp đặt linh hoạt phụ tải máy móc.",
          reasonEn: "Slashes riser shaft space, slashes voltage drop, and allows flexible live machine tap-offs."
        },
        {
          id: "cast-resin-transformer",
          reasonVi: "Đặt ngay trong trạm điện xưởng an toàn tuyệt đối không lo nổ dầu hay bảo trì phức tạp.",
          reasonEn: "Direct in-factory substation placement with zero explosion risk and near-zero maintenance."
        }
      ];
      warnings = [
        {
          titleVi: "Lưu ý siết bu-lông Busway đúng mô-men quy định",
          titleEn: "Enforce calibrated torqueing on all busway joint stacks",
          descVi: "Siết lỏng sẽ phát sinh điểm nóng (hotspot) đánh lửa hồ quang khi chạy đầy tải.",
          descEn: "Under-torqued joints form thermal hotspots and lethal arc flashes under heavy load."
        }
      ];
    }

    const recMaterials = recommended.map(item => {
      const mat = MATERIALS.find(m => m.id === item.id);
      return { mat, reasonVi: item.reasonVi, reasonEn: item.reasonEn };
    }).filter(x => x.mat);

    this.container.innerHTML = `
      <div class="matrix-output-grid">
        <!-- Recommended Column -->
        <div class="matrix-card rec-box">
          <div class="output-header rec-header">
            <span class="icon-tag">★</span>
            <h4>${i18n.matrixSection.recommendedTitle}</h4>
          </div>
          <div class="rec-list">
            ${recMaterials.map(({ mat, reasonVi, reasonEn }) => `
              <div class="rec-item">
                <div class="rec-top">
                  <span class="badge-tag">${mat.category.toUpperCase()}</span>
                  <strong>${lang === "vi" ? mat.name.vi : mat.name.en}</strong>
                </div>
                <p class="rec-reason">${lang === "vi" ? reasonVi : reasonEn}</p>
                <button class="btn btn-sm btn-outline" onclick="window.app.openMaterialModal('${mat.id}')">
                  ${i18n.materialCard.viewDetails}
                </button>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Warnings Column -->
        <div class="matrix-card warn-box">
          <div class="output-header warn-header">
            <span class="icon-tag">⚠</span>
            <h4>${i18n.matrixSection.warningTitle}</h4>
          </div>
          <div class="warn-list">
            ${warnings.map(w => `
              <div class="warn-item">
                <strong class="warn-title">${lang === "vi" ? w.titleVi : w.titleEn}</strong>
                <p class="warn-desc">${lang === "vi" ? w.descVi : w.descEn}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }
}

window.TechnicalMatrix = TechnicalMatrix;
