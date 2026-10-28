// Dữ liệu so sánh đối đầu kỹ thuật chuyên sâu (Side-by-Side Comparison Engine)
const COMPARISONS = [
  {
    id: "busway-vs-cables",
    category: "mep-elec",
    title: {
      vi: "Thanh Dẫn Điện Busway Compact vs Bó Cáp Ngầm Cu/XLPE Truyền Thống",
      en: "Compact Busway Trunking vs Parallel Multi-Run Power Cables"
    },
    itemA: {
      name: { vi: "Thanh Dẫn Busway Sandwich", en: "Compact Sandwich Busway" },
      id: "busway-compact-al",
      specs: {
        currentRange: "800A - 6300A",
        spaceFootprint: "Rất nhỏ (15 x 30 cm cho 3200A)",
        installationSpeed: "Nhanh hơn 60% (Lắp module bu-lông)",
        fireSafety: "Vỏ nhôm kín, không khói độc halogen",
        reconfigurability: "Cắm thêm tủ phụ Tap-off trong 15 phút",
        voltageDrop: "Cực thấp (Điện kháng cảm ứng triệt tiêu)",
        costInitial: "Cao hơn 20% - 35%",
        maintenanceCost: "Rất thấp (Bảo trì khớp nối bằng camera nhiệt)"
      },
      scores: [9, 9, 5, 9, 9, 8] // [Thermal, Mechanical, CostEff, Maintenance, Speed, Reliability]
    },
    itemB: {
      name: { vi: "Bó Cáp Điện Cu/XLPE/PVC", en: "Parallel Cu/XLPE/PVC Cables" },
      id: "fire-cable-fr-pvc",
      specs: {
        currentRange: "Lên tới 2500A (Bó nhiều sợi song song)",
        spaceFootprint: "Rất lớn (Chiếm 2 tầng máng cáp rộng 80cm)",
        installationSpeed: "Chậm (Kéo cáp nặng nhọc, uốn nắn tốn công)",
        fireSafety: "Nguy cơ cháy lan dọc máng cáp, sinh khói",
        reconfigurability: "Khó khăn (Phải cắt cáp và kéo mới toàn bộ)",
        voltageDrop: "Cao hơn do khoảng cách giữa các pha lớn",
        costInitial: "Thấp hơn ở các cự ly ngắn",
        maintenanceCost: "Trung bình (Khó phát hiện điểm chạm chập ngầm)"
      },
      scores: [7, 7, 8, 6, 5, 7]
    },
    metrics: [
      { key: "spaceEfficiency", labelVi: "Tiết kiệm không gian máng trục", labelEn: "Space Efficiency" },
      { key: "installSpeed", labelVi: "Tốc độ thi công lắp đặt", labelEn: "Installation Velocity" },
      { key: "voltageStability", labelVi: "Độ ổn định điện áp (Ít sụt áp)", labelEn: "Voltage Regulation" },
      { key: "modularity", labelVi: "Khả năng mở rộng phụ tải linh hoạt", labelEn: "System Modularity" },
      { key: "fireContainment", labelVi: "Độ an toàn khi xảy ra hỏa hoạn", labelEn: "Fire Containment" },
      { key: "costCapEx", labelVi: "Chi phí mua sắm ban đầu", labelEn: "Upfront Capex Economy" }
    ],
    verdict: {
      vi: "Với dòng tải từ 1200A trở lên và chiều cao công trình trên 4 tầng hoặc chiều dài xưởng trên 100m, Busway hoàn toàn áp đảo về độ an toàn, tính thẩm mỹ công nghiệp và chi phí tổng vòng đời (TCO). Ngược lại, với dòng tải nhỏ dưới 630A và lộ đơn lẻ ngoằn ngoèo, cáp điện truyền thống vẫn là lựa chọn kinh tế nhất.",
      en: "For currents exceeding 1200A and factory runs above 100 meters, Busway unequivocally surpasses cabling in safety, aesthetics, and 10-year Total Cost of Ownership (TCO). Conversely, for small feeders under 630A with intricate winding paths, traditional cabling remains the cost-effective selection."
    }
  },
  {
    id: "pir-vs-rockwool",
    category: "infra",
    title: {
      vi: "Panel PIR Cách Nhiệt vs Panel Rockwool Bông Khoáng Chống Cháy",
      en: "PIR Thermal Panel vs Rockwool Mineral Fiber Fire Panel"
    },
    itemA: {
      name: { vi: "Panel PIR Polyisocyanurate", en: "PIR Sandwich Panel" },
      id: "pir-sandwich-panel",
      specs: {
        thermalK: "0.021 W/m.K (Siêu cách nhiệt)",
        fireRating: "Chống cháy lan B1/B2, tự tắt lửa (EI 15 - 30)",
        weight: "Nhẹ (10 - 12 kg/m²)",
        waterAbsorption: "< 1% (Kháng nước tuyệt đối)",
        structuralSpan: "Cứng vững, nhịp xà gồ lớn 4-6m",
        idealApplication: "Kho lạnh, phòng sạch GMP, trần bảo ôn"
      },
      scores: [10, 7, 7, 9, 9, 8]
    },
    itemB: {
      name: { vi: "Panel Bông Khoáng Rockwool", en: "Mineral Rockwool Panel" },
      id: "rockwool-panel",
      specs: {
        thermalK: "0.040 W/m.K (Cách nhiệt trung bình)",
        fireRating: "Không cháy Class A1 (Đạt chuẩn EI 60, EI 120, EI 150)",
        weight: "Nặng (18 - 25 kg/m²)",
        waterAbsorption: "Hút ẩm nếu lớp tôn bị thủng",
        structuralSpan: "Kém cứng hơn, cần tăng cường xương đỡ",
        idealApplication: "Vách ngăn cháy bắt buộc PCCC, phòng máy phát điện"
      },
      scores: [6, 8, 6, 7, 7, 10]
    },
    metrics: [
      { key: "thermalK", labelVi: "Hiệu quả cách nhiệt bảo tồn năng lượng", labelEn: "Thermal Insulation Performance" },
      { key: "fireHours", labelVi: "Giới hạn chịu lửa tính bằng giờ (EI)", labelEn: "Fire Barrier Rating (EI-hours)" },
      { key: "acousticAbsorption", labelVi: "Khả năng tiêu âm cách âm buồng máy", labelEn: "Acoustic Attenuation" },
      { key: "waterProof", labelVi: "Kháng ẩm mục nát phòng lạnh", labelEn: "Moisture & Mold Immunity" },
      { key: "lightweight", labelVi: "Tối ưu tải trọng lên dầm kết cấu", labelEn: "Structural Lightweight Advantage" }
    ],
    verdict: {
      vi: "Nếu mục tiêu số 1 là tiết kiệm năng lượng điện lạnh cho kho lạnh âm sâu hoặc phòng sạch tiệt trùng: Panel PIR là lựa chọn số một. Nếu bản vẽ thẩm duyệt PCCC yêu cầu vách ngăn kho phải ngăn cháy lan trong 60 đến 120 phút (EI 60 / EI 120) hoặc bao che phòng máy phát điện ồn ào: Bắt buộc phải sử dụng Panel Rockwool bông khoáng.",
      en: "When your primary objective is cryogenic cooling efficiency or GMP cleanroom sterilization: PIR is unmatched. When local fire codes mandate strict 60 to 120-minute structural compartmentation (EI 60 / EI 120) or noisy generator acoustic attenuation: Rockwool panels are legally and technically compulsory."
    }
  },
  {
    id: "fm200-vs-novec",
    category: "pccc",
    title: {
      vi: "Khí Chữa Cháy FM-200 (HFC-227ea) vs Novec 1230 (FK-5-1-12)",
      en: "FM-200 (HFC-227ea) vs Novec 1230 (FK-5-1-12 Fluid)"
    },
    itemA: {
      name: { vi: "FM-200 (HFC-227ea)", en: "FM-200 Clean Agent" },
      id: "fm200-clean-agent",
      specs: {
        storageState: "Khí hóa lỏng áp suất 25/42 bar",
        globalWarmingGWP: "3220 (Chỉ số nóng lên toàn cầu cao)",
        atmosphericLifetime: "34 năm trong bầu khí quyển",
        safetyMargin: "Biên an toàn con người ~20%",
        marketMaturity: "Rất phổ biến, nhiều trạm nạp sẵn có tại VN",
        cylinderCost: "Tiết kiệm hơn 30% so với Novec 1230"
      },
      scores: [9, 8, 7, 8, 8, 6]
    },
    itemB: {
      name: { vi: "Novec 1230 (FK-5-1-12)", en: "Novec 1230 Fluid" },
      id: "novec-1230",
      specs: {
        storageState: "Chất lỏng ở điều kiện thường, bay hơi tức thì",
        globalWarmingGWP: "< 1 (Tương đương CO2, siêu xanh)",
        atmosphericLifetime: "Chỉ 5 ngày (Bị ánh nắng phân hủy tự nhiên)",
        safetyMargin: "Biên an toàn con người cực cao ~140%",
        marketMaturity: "Yêu cầu trạm nạp đặc thù",
        cylinderCost: "Chi phí bản quyền và nạp khí cao hơn"
      },
      scores: [9, 8, 5, 8, 8, 10]
    },
    metrics: [
      { key: "ecoFriendliness", labelVi: "Chỉ số thân thiện môi trường (GWP/ODP)", labelEn: "Eco & Climate Index (GWP/ODP)" },
      { key: "humanSafety", labelVi: "Biên độ an toàn cho người trong phòng", labelEn: "Human Safety Margin (NOAEL)" },
      { key: "refillAvailability", labelVi: "Độ sẵn có của trạm nạp khí tại Việt Nam", labelEn: "Local Recharge Infrastructure" },
      { key: "capExEconomy", labelVi: "Kinh tế mua sắm ban đầu", labelEn: "Initial System Acquisition Cost" },
      { key: "futureRegulationProof", labelVi: "Khả năng không bị cấm bởi thỏa ước F-gas", labelEn: "Future-Proof Environmental Regulatory Compliance" }
    ],
    verdict: {
      vi: "FM-200 là giải pháp chín muồi, chi phí hợp lý và mạng lưới trạm nạp rộng khắp. Tuy nhiên, theo lộ trình cắt giảm khí nhà kính (Kigali Amendment & Montreal Protocol), Novec 1230 đang là tương lai của các tập đoàn đa quốc gia yêu cầu chuẩn ESG (Environment, Social, Governance) cao nhất nhờ chỉ số GWP < 1.",
      en: "FM-200 delivers the most proven economic balance with accessible local recharge hubs. However, under international Kigali Amendment fluorinated-gas phase-downs, Novec 1230 is the future standard for multinational firms enforcing strict ESG environmental benchmarks due to its near-zero GWP of 1."
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = COMPARISONS;
}
