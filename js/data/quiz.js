// Ngân hàng câu hỏi thử thách kỹ sư công nghiệp thực chiến (Gen Z Interactive Engineering Quiz)
const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: "pccc",
    question: {
      vi: "Đầu phun Sprinkler PCCC tự động có bóng thủy tinh chứa dung dịch màu ĐỎ (Red Bulb) sẽ kích hoạt và xả nước ở mức nhiệt độ nào?",
      en: "An automatic fire sprinkler with a RED glass bulb is calibrated to shatter and discharge water at which temperature?"
    },
    options: [
      { id: "A", textVi: "57°C (Cam)", textEn: "57°C (Orange)" },
      { id: "B", textVi: "68°C (Đỏ tiêu chuẩn văn phòng/xưởng)", textEn: "68°C (Standard Red for offices/factories)" },
      { id: "C", textVi: "93°C (Xanh lục)", textEn: "93°C (Green)" },
      { id: "D", textVi: "141°C (Xanh lam)", textEn: "141°C (Blue)" }
    ],
    correct: "B",
    explanation: {
      vi: "Chính xác! Theo NFPA 13 và ISO 6182-1, bóng thủy tinh màu ĐỎ có ngưỡng nổ danh định là 68°C (155°F). Đây là loại thông dụng nhất trong nhà xưởng và văn phòng nơi nhiệt độ môi trường trần không vượt quá 38°C.",
      en: "Correct! Per NFPA 13 and ISO 6182-1, RED liquid bulbs are calibrated for 68°C (155°F) nominal rupture. This is the industry standard for ordinary temperature ratings where ceiling ambient does not exceed 38°C."
    }
  },
  {
    id: 2,
    category: "mep-elec",
    question: {
      vi: "Tiêu chuẩn quốc tế nào chứng nhận cáp điện có khả năng DUY TRÌ TÍNH TOÀN VẸN MẠCH ĐIỆN (Circuit Integrity) trong đám cháy 950°C suốt 3 giờ?",
      en: "Which international standard certifies that a power cable maintains CIRCUIT INTEGRITY under 950°C fire for 3 hours?"
    },
    options: [
      { id: "A", textVi: "IEC 60332 (Chỉ thử nghiệm khả năng không bắt lửa lan truyền dọc vỏ)", textEn: "IEC 60332 (Tests flame retardancy along cable vertical bunch)" },
      { id: "B", textVi: "IEC 60331 & BS 6387 CWZ (Duy trì dòng điện trong lửa 950°C kèm rung đập)", textEn: "IEC 60331 & BS 6387 CWZ (Maintains electrical circuit in 950°C fire with shock)" },
      { id: "C", textVi: "IEC 60529 (Cấp độ bảo vệ chống nước và bụi IP)", textEn: "IEC 60529 (Ingress Protection IP rating for enclosures)" },
      { id: "D", textVi: "IEEE 802.3 (Chuẩn giao thức Ethernet)", textEn: "IEEE 802.3 (Ethernet network transmission protocol)" }
    ],
    correct: "B",
    explanation: {
      vi: "Xuất sắc! IEC 60331 và BS 6387 CWZ là chuẩn cao nhất cho cáp chống cháy (Fire-Resistant) có lớp băng Mica. IEC 60332 chỉ là cáp chậm cháy (Flame Retardant) - vỏ nhựa sẽ cháy rụi và mất điện chỉ sau vài phút!",
      en: "Spot on! IEC 60331 and BS 6387 CWZ are the definitive circuit integrity benchmarks requiring mica tape barrier wraps. IEC 60332 only checks flame retarding; it short-circuits in minutes under actual structural blazes."
    }
  },
  {
    id: 3,
    category: "mep-plumb",
    question: {
      vi: "Tại sao van cổng (Gate Valve) bị cấm ngặt nghèo trong việc sử dụng để điều tiết lưu lượng (hé mở 20-30%)?",
      en: "Why are Gate Valves strictly prohibited from being throttled (throttling at 20-30% partial opening)?"
    },
    options: [
      { id: "A", textVi: "Vì van sẽ quay ngược tay quay tự động đóng lại", textEn: "Because the handwheel spins backwards and closes automatically" },
      { id: "B", textVi: "Vì vận tốc dòng chảy qua khe hẹp gây xoáy xâm thực (Cavitation) phá hủy đĩa và mặt tựa", textEn: "High fluid velocity across the narrow slit causes cavitation erosion, destroying wedge and seats" },
      { id: "C", textVi: "Vì làm tăng trọng lượng của van", textEn: "Because it increases the overall weight of the valve" },
      { id: "D", textVi: "Vì làm giảm độ kín của mặt bích nối ống", textEn: "Because it weakens pipe flange bolt tension" }
    ],
    correct: "B",
    explanation: {
      vi: "Đúng 100%! Van cổng chỉ thiết kế cho 2 trạng thái: Mở hết (Full Open) hoặc Đóng kín (Full Closed). Khi mở hé, tốc độ dòng chảy tăng vọt qua khe đĩa chêm tạo ra hiện tượng xâm thực rung lắc dữ dội, làm mòn rỗ mặt kim loại và gây rò rỉ vĩnh viễn.",
      en: "100% correct! Gate valves are strictly on/off devices. Throttling creates severe high-velocity fluid jets and vortex cavitation that scour the seating face, causing irreversible leakages."
    }
  },
  {
    id: 4,
    category: "mep-elec",
    question: {
      vi: "Ưu điểm vật lý then chốt của thanh dẫn Busway dạng kẹp ép chặt (Compact Sandwich) so với thanh cái hở truyền thống là gì?",
      en: "What is the key physical advantage of Compact Sandwich Busway over traditional open ventilated busbars?"
    },
    options: [
      { id: "A", textVi: "Triệt tiêu khoảng cách không khí giữa các pha giúp giảm 75% điện kháng cảm ứng (Reactance) và tăng tản nhiệt", textEn: "Eliminating air gaps between phase conductors reduces inductive reactance by 75% and enhances conduction cooling" },
      { id: "B", textVi: "Làm thanh dẫn nhẹ hơn gấp 10 lần", textEn: "Makes conductors 10 times lighter" },
      { id: "C", textVi: "Có thể uốn cong bằng tay tùy ý tại công trường", textEn: "Allows field bending by hand on site" },
      { id: "D", textVi: "Không cần sử dụng vỏ nhôm bảo vệ", textEn: "Eliminates the requirement for metal enclosures" }
    ],
    correct: "A",
    explanation: {
      vi: "Chính xác! Cấu trúc sandwich ép chặt không để khe hở không khí làm giảm khoảng cách hình học giữa các pha, từ đó triệt tiêu điện kháng cảm ứng và sụt áp; đồng thời nhiệt truyền trực tiếp qua vỏ nhôm tản ra ngoài.",
      en: "Exact! The compressed sandwich topology minimizes phase-to-phase distance, slashing inductive reactance and voltage drop while conducting ohmic heat straight into the external aluminum heatsink."
    }
  },
  {
    id: 5,
    category: "infra",
    question: {
      vi: "Nếu sàn bê tông nhà xưởng có độ ẩm đo được là 8% (> 4%), điều gì sẽ xảy ra nếu nhà thầu vẫn cố tình thi công sơn sàn Epoxy tự san phẳng 3mm?",
      en: "If concrete substrate moisture is measured at 8% (> 4%), what failure occurs if 3mm self-leveling epoxy is applied anyway?"
    },
    options: [
      { id: "A", textVi: "Sơn sẽ đóng rắn nhanh hơn bình thường", textEn: "Epoxy cures faster than normal" },
      { id: "B", textVi: "Áp suất hơi ẩm bốc lên gây phồng rộp (Osmotic Blistering) và bong tróc từng mảng lớn", textEn: "Rising hydrostatic vapor pressure causes osmotic blistering and massive peeling delamination" },
      { id: "C", textVi: "Sàn sẽ có độ bóng cao hơn", textEn: "The floor achieves a higher gloss finish" },
      { id: "D", textVi: "Tăng khả năng chống mài mòn bánh xe nâng", textEn: "Improves forklift wheel traction" }
    ],
    correct: "B",
    explanation: {
      vi: "Tuyệt vời! Epoxy là màng kín tuyệt đối không thở được. Khi hơi nước từ đất hoặc bê tông ẩm bốc lên gặp màng cản sẽ tạo áp suất thủy tĩnh hàng chục bar, làm nổ rộp những bọng nước khổng lồ xé toạc lớp sơn.",
      en: "Brilliant! Epoxy forms an impermeable non-breathable skin. Hydrostatic moisture trapped inside concrete exerts immense upward pressure, creating osmotic bubbles that cleanly delaminate the entire floor coating."
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_QUESTIONS;
}
