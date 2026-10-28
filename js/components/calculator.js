// Bộ công cụ tính toán kỹ sư công nghiệp (Engineering Calculators)
class TechnicalCalculators {
  constructor() {
    this.container = document.getElementById("calculators-container");
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Sprinkler Calculator
    const btnSprinkler = document.getElementById("btn-calc-sprinkler");
    if (btnSprinkler) {
      btnSprinkler.addEventListener("click", () => this.calculateSprinkler());
    }

    // Pipe Calculator
    const btnPipe = document.getElementById("btn-calc-pipe");
    if (btnPipe) {
      btnPipe.addEventListener("click", () => this.calculatePipe());
    }

    // Cable Calculator
    const btnCable = document.getElementById("btn-calc-cable");
    if (btnCable) {
      btnCable.addEventListener("click", () => this.calculateCable());
    }
  }

  calculateSprinkler() {
    const kVal = parseFloat(document.getElementById("sprinkler-k")?.value || "80");
    const pVal = parseFloat(document.getElementById("sprinkler-p")?.value || "1.5");
    const headsVal = parseInt(document.getElementById("sprinkler-heads")?.value || "4");
    const durationVal = parseInt(document.getElementById("sprinkler-duration")?.value || "60");

    if (isNaN(kVal) || isNaN(pVal) || pVal <= 0) return;

    // Metric Formula: Q = K_metric * sqrt(P_bar)
    const singleFlow = kVal * Math.sqrt(pVal); // Liters / minute
    const totalFlow = singleFlow * headsVal;
    const requiredWaterM3 = (totalFlow * durationVal) / 1000;

    const lang = window.appState ? window.appState.lang : "vi";
    const resBox = document.getElementById("sprinkler-calc-result");

    if (resBox) {
      resBox.innerHTML = `
        <div class="calc-result-card">
          <div class="calc-headline">
            <span class="calc-number">${singleFlow.toFixed(1)}</span>
            <span class="calc-unit">Lít / phút (mỗi đầu phun)</span>
          </div>
          <div class="calc-details-grid">
            <div class="calc-sub-item">
              <span class="label">${lang === "vi" ? "Tổng lưu lượng cụm (" + headsVal + " đầu):" : "Total Flow (" + headsVal + " heads):"}</span>
              <strong>${totalFlow.toFixed(1)} L/min (${(totalFlow / 60).toFixed(2)} L/s)</strong>
            </div>
            <div class="calc-sub-item">
              <span class="label">${lang === "vi" ? "Dung tích bể PCCC tối thiểu (" + durationVal + " phút):" : "Min Fire Water Tank Volume (" + durationVal + " min):"}</span>
              <strong>${requiredWaterM3.toFixed(1)} m³</strong>
            </div>
            <div class="calc-sub-item">
              <span class="label">${lang === "vi" ? "Tiêu chuẩn áp dụng:" : "Governing Standard:"}</span>
              <span>NFPA 13 & TCVN 7336:2021</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  calculatePipe() {
    const dVal = parseFloat(document.getElementById("pipe-d")?.value || "114.3"); // 4 inch
    const tVal = parseFloat(document.getElementById("pipe-t")?.value || "6.02");  // SCH40
    const sVal = parseFloat(document.getElementById("pipe-s")?.value || "240");   // MPa
    const sfVal = parseFloat(document.getElementById("pipe-sf")?.value || "2.5"); // Safety factor

    if (isNaN(dVal) || isNaN(tVal) || isNaN(sVal) || dVal <= 0) return;

    // Barlow Formula: P = (2 * S * t) / D
    // S in MPa, t in mm, D in mm -> P in MPa -> * 10 = Bar
    const burstPressureMpa = (2 * sVal * tVal) / dVal;
    const burstPressureBar = burstPressureMpa * 10;
    const workingPressureBar = burstPressureBar / sfVal;

    const lang = window.appState ? window.appState.lang : "vi";
    const resBox = document.getElementById("pipe-calc-result");

    if (resBox) {
      resBox.innerHTML = `
        <div class="calc-result-card">
          <div class="calc-headline">
            <span class="calc-number">${workingPressureBar.toFixed(1)}</span>
            <span class="calc-unit">Bar (Áp suất làm việc an toàn)</span>
          </div>
          <div class="calc-details-grid">
            <div class="calc-sub-item">
              <span class="label">${lang === "vi" ? "Áp suất nổ vỡ lý thuyết (Barlow P_burst):" : "Theoretical Yield Bursting Pressure:"}</span>
              <strong>${burstPressureBar.toFixed(1)} Bar (${burstPressureMpa.toFixed(1)} MPa)</strong>
            </div>
            <div class="calc-sub-item">
              <span class="label">${lang === "vi" ? "Hệ số an toàn thiết kế (Safety Factor):" : "Design Safety Factor:"}</span>
              <strong>${sfVal}x (ASME B31.1 Power Piping)</strong>
            </div>
            <div class="calc-sub-item">
              <span class="label">${lang === "vi" ? "Đánh giá khả năng áp dụng:" : "Engineering Suitability:"}</span>
              <span class="status-pass">✓ ${lang === "vi" ? "Đạt chuẩn đường hơi nóng bão hòa 10-25 bar" : "Passes 10-25 bar saturated steam headers"}</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  calculateCable() {
    const current = parseFloat(document.getElementById("cable-i")?.value || "200");
    const length = parseFloat(document.getElementById("cable-l")?.value || "120");
    const size = parseFloat(document.getElementById("cable-size")?.value || "95"); // mm2
    const cosPhi = 0.85;

    // Copper resistivity rho = 0.0185 ohm.mm2/m at 70C
    // R = rho * L / size
    const rLine = (0.0185 * length) / size;
    // Delta V = sqrt(3) * I * (R * cosPhi)
    const deltaV = Math.sqrt(3) * current * rLine * cosPhi;
    const percentDrop = (deltaV / 380) * 100;

    const lang = window.appState ? window.appState.lang : "vi";
    const resBox = document.getElementById("cable-calc-result");
    const isPass = percentDrop <= 3.0;

    if (resBox) {
      resBox.innerHTML = `
        <div class="calc-result-card">
          <div class="calc-headline">
            <span class="calc-number ${isPass ? '' : 'text-danger'}">${percentDrop.toFixed(2)}%</span>
            <span class="calc-unit">Sụt áp trên lưới 380V (ΔV = ${deltaV.toFixed(1)}V)</span>
          </div>
          <div class="calc-details-grid">
            <div class="calc-sub-item">
              <span class="label">${lang === "vi" ? "Quy định IEC 60364-5-52:" : "IEC 60364-5-52 Criterion:"}</span>
              <span>${lang === "vi" ? "Tối đa 3% cho mạch động lực chiếu sáng" : "Maximum 3% for power distribution"}</span>
            </div>
            <div class="calc-sub-item">
              <span class="label">${lang === "vi" ? "Kết luận kỹ thuật:" : "Compliance Status:"}</span>
              <strong class="${isPass ? 'status-pass' : 'status-fail'}">
                ${isPass 
                  ? (lang === "vi" ? "✓ ĐẠT TIÊU CHUẨN AN TOÀN" : "✓ PASS COMPLIANT") 
                  : (lang === "vi" ? "✗ KHÔNG ĐẠT - HÃY TĂNG TIẾT DIỆN CÁP HOẶC DÙNG BUSWAY" : "✗ FAIL - INCREASE CABLE SIZE OR SPECIFY BUSWAY")}
              </strong>
            </div>
          </div>
        </div>
      `;
    }
  }
}

window.TechnicalCalculators = TechnicalCalculators;
