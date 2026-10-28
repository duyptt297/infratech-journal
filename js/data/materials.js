// Cơ sở dữ liệu chuyên sâu Vật tư Kỹ thuật Công nghiệp
// Industrial Technical Materials Comprehensive Database
const MATERIALS = [
  {
    id: "flanged-gate-valve",
    category: "mep-plumb",
    modelType: "gate-valve",
    has3DModel: true,
    rating: 4.9,
    badge: "HEAVY DUTY",
    name: {
      vi: "Van Cổng Mặt Bích Công Nghiệp (Gate Valve)",
      en: "Industrial Flanged Gate Valve"
    },
    tagline: {
      vi: "Thiết bị đóng cắt dòng chảy toàn phần chịu áp suất và nhiệt độ cao",
      en: "Full-bore isolation valve engineered for severe pressure and thermal conditions"
    },
    tags: ["ASME B16.34", "API 600", "Van Chặn", "WCB / CF8M", "Class 150-600"],
    image: "assets/images/valve-diagram.svg",
    videoUrl: "https://www.youtube-nocookie.com/embed/n42s_hY938c",
    overview: {
      vi: "Van cổng (Gate Valve) là loại van chặn công nghiệp đóng ngắt dòng chảy bằng một cửa van (đĩa chêm) tịnh tiến vuông góc với phương của dòng môi chất. Khi mở hoàn toàn, tiết diện dòng chảy không bị thu hẹp, giúp giảm thiểu tổn thất áp suất và duy trì hệ số lưu lượng Cv cao nhất trong các dòng van công nghiệp.",
      en: "A gate valve is a heavy-duty industrial isolation valve that controls fluid flow by lifting a rectangular or wedge gate out of the fluid path. When fully open, it provides an unobstructed flow bore, resulting in negligible pressure drop and the highest flow coefficient (Cv) among shutoff valves."
    },
    workingPrinciple: {
      vi: "Truyền động quay từ tay quay vô lăng (Handwheel) qua trục ty van (Stem) có ren thang (Acme thread), biến chuyển động quay thành chuyển động tịnh tiến hạ hoặc nâng đĩa chêm (Flexible Wedge). Đĩa chêm ép chặt vào 2 mặt tựa (Seat rings) để làm kín nhờ lực chêm cơ học.",
      en: "Rotational torque applied to the handwheel is converted into linear motion by the Acme-threaded rising stem, raising or lowering the flexible wedge. The wedge compresses against two hardfaced seat rings, achieving bubble-tight metal-to-metal sealing."
    },
    specifications: [
      { labelVi: "Kích cỡ danh định", labelEn: "Nominal Size", valueVi: "DN50 - DN1200 (2 inch - 48 inch)", valueEn: "DN50 - DN1200 (2\" - 48\")", standard: "ASME B16.10" },
      { labelVi: "Cấp áp suất", labelEn: "Pressure Class", valueVi: "Class 150, 300, 600, 900 (PN16 - PN100)", valueEn: "Class 150, 300, 600, 900 (PN16 - PN100)", standard: "ASME B16.34" },
      { labelVi: "Vật liệu thân (Body)", labelEn: "Body Material", valueVi: "Thép đúc WCB (A216), Inox CF8M (A351)", valueEn: "Cast Carbon Steel WCB, Stainless CF8M", standard: "ASTM A216 / A351" },
      { labelVi: "Dải nhiệt độ làm việc", labelEn: "Temperature Range", valueVi: "-29°C đến 425°C (với thân WCB)", valueEn: "-29°C to 425°C (with WCB body)", standard: "API 600" },
      { labelVi: "Kiểu kết nối", labelEn: "End Connection", valueVi: "Mặt bích RF/RTJ, Hàn đối đầu Butt-Weld", valueEn: "Flanged RF/RTJ, Butt-Weld (BW)", standard: "ASME B16.5" },
      { labelVi: "Đệm làm kín cổ", labelEn: "Stem Packing", valueVi: "Graphite mềm ép khuôn bện Inconel", valueEn: "Die-formed flexible graphite with Inconel", standard: "API 622 low-emission" }
    ],
    pros: [
      {
        titleVi: "Tổn thất áp suất cực thấp (Minimal Pressure Loss)",
        titleEn: "Negligible Head Loss",
        descVi: "Khi mở hoàn toàn, cửa van rút hẳn khỏi buồng chảy tạo thành đường thẳng thông suốt, ma sát dòng chảy tương đương một đoạn ống trơn cùng kích thước.",
        descEn: "Full-bore unobstructed passage ensures flow resistance is virtually equal to a straight pipe of the same length.",
        scenarioVi: "Hệ thống cấp nước làm mát chính Chiller, đường ống dẫn dầu tải nhiệt, tuyến truyền dẫn lưu lượng lớn.",
        scenarioEn: "Main chiller condenser loops, thermal oil distribution, long-distance high-volume fluid conduits."
      },
      {
        titleVi: "Chặn dòng hai chiều (Bi-directional Sealing)",
        titleEn: "Bi-directional Shutoff",
        descVi: "Cấu trúc đĩa chêm đối xứng cho phép chặn dòng chất lỏng từ cả 2 hướng mà không giảm hiệu quả làm kín.",
        descEn: "Symmetrical wedge design reliably isolates high-pressure fluid regardless of flow direction.",
        scenarioVi: "Đường ống tuần hoàn đa nhánh, hệ thống bơm đảo chiều hoặc vòng lặp mạch kín.",
        scenarioEn: "Multi-branch loop mains, dual-pumping loops, and reverse-flow contingency circuits."
      },
      {
        titleVi: "Độ bền cơ học vượt trội dưới áp suất cao",
        titleEn: "High Mechanical Rigidity Under Heavy Shock",
        descVi: "Thân van đúc dày chịu được áp lực búa nước (Water Hammer) và nhiệt độ môi trường công nghiệp khắc nghiệt hơn hẳn các dòng van bướm thông thường.",
        descEn: "Heavy-gauge cast steel body sustains severe water hammer surges and high thermal stress better than butterfly valves.",
        scenarioVi: "Nhà máy phát điện, trạm lò hơi công nghiệp, hệ thống nước làm mát áp cao.",
        scenarioEn: "Power generation stations, high-pressure industrial boiler headers, industrial utility rooms."
      }
    ],
    cons: [
      {
        titleVi: "Tuyệt đối không dùng để điều tiết lưu lượng (Throttling)",
        titleEn: "Strictly Prohibited for Throttling / Flow Regulation",
        descVi: "Nếu chỉ mở hé một phần, vận tốc dòng chảy qua khe hẹp sẽ gây ra hiện tượng xâm thực (cavitation), rung lắc đĩa van dữ dội và xé rách bề mặt tựa (Seat erosion).",
        descEn: "Partial opening induces high-velocity turbulence, severe cavitation, and rapid erosion on the seating surfaces, causing permanent leakage.",
        riskVi: "Hư hỏng vĩnh viễn mặt tựa van chỉ sau vài tuần vận hành sai mục đích.",
        riskEn: "Permanent seat destruction within weeks if improperly used to control flow rates."
      },
      {
        titleVi: "Tốc độ đóng mở chậm (Slow Actuation)",
        titleEn: "Slow Multi-Turn Operation",
        descVi: "Phải quay tay quay từ 10 đến 40 vòng tùy kích cỡ để dịch chuyển hết hành trình đĩa van, không phù hợp cho trường hợp cần ngắt khẩn cấp tích tắc.",
        descEn: "Requires 15-40 full turns of the handwheel, unsuitable for emergency rapid isolation unless fitted with quick pneumatic actuators.",
        riskVi: "Mất nhiều thời gian xử lý khi rò rỉ sự cố tràn dung dịch hóa chất.",
        riskEn: "Slow emergency cutoff during pipeline rupture or hazardous fluid releases."
      },
      {
        titleVi: "Kích thước cồng kềnh, ty van nâng chiếm không gian lớn",
        titleEn: "Bulky Envelope & Rising Stem Clearance",
        descVi: "Cần không gian trên đỉnh van gấp đôi chiều cao thân để ty van nhô lên khi mở hết cỡ. Trọng lượng van lớn cần giá treo đỡ chịu tải nặng.",
        descEn: "OS&Y (Outside Screw & Yoke) rising stem requires extensive overhead clearance equal to pipe diameter.",
        riskVi: "Dễ va quẹt với máng cáp, ống gió khác trong không gian trần kỹ thuật chật hẹp.",
        riskEn: "Interference with cable trays or HVAC ductwork in congested pipe racks."
      }
    ],
    matrixScores: {
      thermalResistance: 9,
      mechanicalStrength: 10,
      costEfficiency: 6,
      maintenanceEase: 6,
      installationSpeed: 5,
      chemicalResistance: 8
    },
    standards: [
      { code: "API 600", titleVi: "Thiết kế van cổng thép cho ngành công nghiệp dầu khí", titleEn: "Steel Gate Valves - Flanged and Butt-welding Ends, Bolted Bonnets", organization: "American Petroleum Institute", url: "https://www.api.org" },
      { code: "ASME B16.34", titleVi: "Định mức áp suất và nhiệt độ van công nghiệp", titleEn: "Valves - Flanged, Threaded, and Welding End", organization: "American Society of Mechanical Engineers", url: "https://www.asme.org" },
      { code: "TCVN 10830:2015", titleVi: "Van công nghiệp - Yêu cầu kỹ thuật và thử nghiệm", titleEn: "Industrial valves - Testing of metallic valves", organization: "Vietnam Standards Institute", url: "https://tcvn.gov.vn" }
    ],
    failureCases: [
      {
        titleVi: "Hiện tượng kẹt đĩa van do giãn nở nhiệt (Thermal Binding)",
        titleEn: "Thermal Binding / Wedge Jamming in Hot Lines",
        symptomVi: "Van đóng khi đường ống ở nhiệt độ 300°C, sau khi nguội hoặc được nung nóng lại thì không thể quay tay quay để mở van dù đã dùng đòn bẩy.",
        symptomEn: "Valve closed tightly while pipeline was hot; after cool-down or restart, handwheel cannot be turned.",
        causeVi: "Đĩa đặc (Solid Wedge) bị kẹp cứng giữa 2 mặt tựa do tốc độ co ngót của thân van nhanh hơn đĩa van.",
        causeEn: "Differential thermal contraction pinches the solid wedge tightly between seats.",
        solutionVi: "Thay thế bằng đĩa chêm dẻo (Flexible Wedge) hoặc đĩa hai nửa (Split Wedge) có khả năng tự co dãn bù sai lệch nhiệt.",
        solutionEn: "Upgrade to flexible wedge or split wedge trim designs that accommodate thermal differential expansion."
      },
      {
        titleVi: "Rò rỉ môi chất qua cổ ty van (Stem Packing Leakage)",
        titleEn: "Fugitive Emissions via Gland Packing",
        symptomVi: "Hơi nước hoặc dung môi xì ra xung quanh ty van, tạo vệt muối bám trắng hoặc khói mù mịt trong phòng máy.",
        symptomEn: "Steam or solvent escaping around the stem gland, depositing scale crust or vapor clouds.",
        causeVi: "Vòng đệm graphite bị chai cứng sau hàng nghìn chu kỳ đóng mở, hoặc bu-lông siết nắp chèn lỏng không đều.",
        causeEn: "Graphite packing consolidation over cycles, or uneven gland flange bolt torque.",
        solutionVi: "Siết đều lực nắp chèn gland theo mô-men xoắn quy định, sử dụng bộ đệm nạp lò xo tải trước (Live-loaded packing).",
        solutionEn: "Torque gland studs with calibrated wrenches; retrofit with disc-spring live-loading Belleville washers."
      }
    ]
  },
  {
    id: "fire-cable-fr-pvc",
    category: "mep-elec",
    modelType: "fire-cable",
    has3DModel: true,
    rating: 4.95,
    badge: "CRITICAL SAFETY",
    name: {
      vi: "Cáp Điện Chống Cháy 950°C (Cu/Mica/XLPE/FR-PVC/LSZH)",
      en: "Fire-Resistant Power Cable 950°C (Cu/Mica/XLPE/LSZH)"
    },
    tagline: {
      vi: "Đảm bảo tính toàn vẹn mạch điện cứu nạn trong đám cháy dữ dội suốt 3 giờ",
      en: "Ensuring 3-hour circuit integrity under severe 950°C blaze and direct water spray"
    },
    tags: ["IEC 60331", "BS 6387 CWZ", "Cu/Mica/XLPE", "LSZH Cáp Chậm Cháy", "Cứu Nạn"],
    image: "assets/images/cable-diagram.svg",
    videoUrl: "https://www.youtube-nocookie.com/embed/Q4Xw-bXU4q4",
    overview: {
      vi: "Cáp điện chống cháy (Fire-Resistant Cable) là thành phần sống còn trong hệ thống hạ tầng MEP, có nhiệm vụ duy trì nguồn điện cấp cho quạt hút khói sự cố, bơm chữa cháy, thang máy cứu hộ và hệ thống đèn thoát hiểm khi toàn bộ tòa nhà hoặc xưởng sản xuất đang chìm trong biển lửa ở nhiệt độ vượt quá 950°C.",
      en: "Fire-resistant cables are mission-critical electrical assets engineered to maintain continuous power to emergency smoke purge fans, fire booster pumps, evacuation lifts, and emergency exit illumination when buildings endure direct flames exceeding 950°C."
    },
    workingPrinciple: {
      vi: "Cấu tạo gồm 5 tầng bảo vệ chuyên dụng: Lõi đồng ủ mềm bọc 2 lớp băng Mica dẻo (Phlogopite Mica tape). Khi nhiệt độ vượt quá 600°C, lớp nhựa XLPE cách điện bị cháy rụi hoàn toàn, nhưng lớp Mica thủy tinh hóa tạo thành lớp gốm khoáng vô cơ chịu nhiệt, cách điện tuyệt đối giữa các pha đến 950°C mà không bị phóng điện đánh thủng.",
      en: "Constructed with five engineered layers: Annealed electrolytic copper conductors wound with overlapping synthetic phlogopite mica tape. When intense fire destroys the outer polymer insulation above 600°C, the mica vitrifies into a ceramic inorganic barrier, preserving dielectric insulation between conductors at 950°C without short circuiting."
    },
    specifications: [
      { labelVi: "Điện áp danh định", labelEn: "Rated Voltage", valueVi: "0.6/1 kV (Um = 1.2 kV)", valueEn: "0.6/1 kV (Um = 1.2 kV)", standard: "IEC 60502-1" },
      { labelVi: "Giới hạn chịu lửa", labelEn: "Fire Resistance Standard", valueVi: "950°C trong 180 phút (Hạng C), chịu nước (W), chịu va đập (Z)", valueEn: "950°C for 180 min (Cat C), Water spray (W), Mechanical shock (Z)", standard: "BS 6387 Cat CWZ" },
      { labelVi: "Vật liệu ruột dẫn", labelEn: "Conductor Material", valueVi: "Đồng điện phân ủ mềm Class 2 (99.99% Cu)", valueEn: "Plain annealed electrolytic copper Class 2", standard: "IEC 60228" },
      { labelVi: "Lớp chống cháy cốt lõi", labelEn: "Fire Barrier Tape", valueVi: "Băng Mica Phlogopite quấn chéo độ phủ > 50%", valueEn: "Dual-layer overlapping Phlogopite mica tape", standard: "IEC 60331" },
      { labelVi: "Vỏ bọc ngoài", labelEn: "Outer Sheath", valueVi: "LSZH (Ít khói, không halogen, chống cháy lan)", valueEn: "LSZH (Low Smoke Zero Halogen, flame retardant)", standard: "IEC 60754 / 61034" },
      { labelVi: "Nhiệt độ làm việc liên tục", labelEn: "Max Operating Temperature", valueVi: "90°C (nhiệt độ ngắn mạch tức thời 250°C)", valueEn: "90°C continuous (250°C short-circuit limit)", standard: "IEC 60502" }
    ],
    pros: [
      {
        titleVi: "Bảo toàn mạch điện tuyệt đối trong thảm họa (Circuit Integrity)",
        titleEn: "Absolute Circuit Integrity in Blazes",
        descVi: "Duy trì cấp điện cho bơm PCCC và quạt tạo áp cầu thang không bị gián đoạn, cứu sống tính mạng hàng trăm công nhân viên trong nhà xưởng.",
        descEn: "Guarantees continuous electrical feed to emergency smoke extraction blowers and fire pumps during full-scale combustion.",
        scenarioVi: "Nhà xưởng nhiều tầng, kho logistics cao tầng, tầng hầm để xe, phòng máy chủ dữ liệu.",
        scenarioEn: "Multi-tier industrial parks, automated high-bay warehouses, data center power risers."
      },
      {
        titleVi: "Không sinh khí độc Halogen gây ngạt (Zero Acid Gas Emission)",
        titleEn: "Zero Toxic Halogen Gas Emissions",
        descVi: "Vỏ bọc LSZH không chứa Clo hay Flo, khi gặp lửa không tạo khí Hydrochloric Acid (HCl) gây bỏng rát đường hô hấp và ăn mòn vi mạch điện tử.",
        descEn: "LSZH jacket contains no chlorine or fluorine; does not emit toxic hydrochloric acid (HCl) vapors that corrode electronics and asphyxiate evacuees.",
        scenarioVi: "Hành lang thoát hiểm kín, phòng điều khiển trung tâm SCADA, xưởng sản xuất chất bán dẫn.",
        scenarioEn: "Confined evacuation routes, central control SCADA rooms, semiconductor clean facilities."
      },
      {
        titleVi: "Chịu va đập cơ học và tia nước dập lửa (CWZ Tested)",
        titleEn: "Simultaneous Shock and Water Spray Resistance",
        descVi: "Đạt chuẩn BS 6387 CWZ cao nhất: vừa chịu lửa 950°C, vừa chịu búa thép đập rung chấn và vòi phun nước cứu hỏa mà không gãy nứt rò điện.",
        descEn: "Complies with severe BS 6387 CWZ protocol: withstands 950°C fire combined with periodic steel hammer strikes and direct hose stream immersion.",
        scenarioVi: "Khu vực có nguy cơ sập đổ giàn giáo, dầm thép kỹ thuật khi hỏa hoạn.",
        scenarioEn: "Zones susceptible to structural beam deflections and falling debris during fire events."
      }
    ],
    cons: [
      {
        titleVi: "Bán kính uốn cong lớn (Large Bending Radius)",
        titleEn: "Stiff Geometry & High Minimum Bending Radius",
        descVi: "Do lớp băng Mica mỏng giòn và lớp giáp thép, bán kính uốn cong tối thiểu gấp 12 - 15 lần đường kính ngoài của cáp. Uốn gập quá gắt sẽ làm rách lớp Mica.",
        descEn: "Brittle mica layers dictate a strict minimum bending radius of 12-15x overall cable diameter; sharper bends rupture the fire barrier.",
        riskVi: "Mica bị rách tại khúc cua dẫn đến chập pha tức thời khi xảy ra hỏa hoạn.",
        riskEn: "Cracked mica tapes fail dielectric tests during actual flame exposure."
      },
      {
        titleVi: "Chi phí đầu tư cao gấp 2.5 - 3.5 lần cáp thường",
        titleEn: "Substantially Higher Initial Capital Expenditure",
        descVi: "Quy trình chế tạo phức tạp với vật liệu Mica khoáng cao cấp và hạt nhựa LSZH đẩy giá thành lên rất cao so với cáp PVC/XLPE thông thường.",
        descEn: "Complex precision taping and specialized LSZH compounding raise unit cost 2.5x to 3.5x over standard PVC/XLPE cables.",
        riskVi: "Dễ bị nhà thầu cắt giảm hoặc thay bằng cáp chậm cháy (Flame Retardant - FR) sai chuẩn.",
        riskEn: "Often mistakenly substituted with flame-retardant (FR) cables which only delay spread but fail in minutes."
      },
      {
        titleVi: "Cần máng cáp và phụ kiện chống cháy đồng bộ",
        titleEn: "Requires Certified Fire-Rated Tray & Fixings",
        descVi: "Cáp chống cháy nếu treo trên máng tôn mỏng hoặc nở nhựa thông thường sẽ bị rơi xuống sàn khi bu-lông nhựa nóng chảy ở 200°C.",
        descEn: "Cable integrity is meaningless if installed on non-rated trays secured by plastic anchor plugs that melt at 200°C.",
        riskVi: "Toàn bộ tuyến cáp bị rơi đứt gãy do hệ giá đỡ phi tiêu chuẩn sụp đổ.",
        riskEn: "Catastrophic collapse of entire cable run due to uncertified hanging brackets."
      }
    ],
    matrixScores: {
      thermalResistance: 10,
      mechanicalStrength: 8,
      costEfficiency: 4,
      maintenanceEase: 8,
      installationSpeed: 6,
      chemicalResistance: 8
    },
    standards: [
      { code: "IEC 60331", titleVi: "Thử nghiệm cáp điện trong điều kiện cháy - Tính toàn vẹn mạch điện", titleEn: "Tests for electric cables under fire conditions - Circuit integrity", organization: "International Electrotechnical Commission", url: "https://www.iec.ch" },
      { code: "BS 6387 CWZ", titleVi: "Quy chuẩn thử nghiệm cáp duy trì mạch điện trong đám cháy", titleEn: "Specification for requirements for cables maintaining circuit integrity under fire conditions", organization: "British Standards Institution", url: "https://www.bsigroup.com" },
      { code: "TCVN 8038:2009", titleVi: "Cáp điện chống cháy dùng cho hệ thống khẩn cấp", titleEn: "Fire-resistant cables for emergency systems", organization: "Vietnam Standards Institute", url: "https://tcvn.gov.vn" }
    ],
    failureCases: [
      {
        titleVi: "Nhầm lẫn tai hại giữa cáp 'Chống cháy' (Fire Resistant) và cáp 'Chậm cháy' (Flame Retardant)",
        titleEn: "Lethal Confusion: Fire Resistant (FR) vs Flame Retardant",
        symptomVi: "Khi xảy ra cháy thử nghiệm nghiệm thu, cáp mất điện sau 3 phút, toàn bộ bơm chữa cháy không thể kích hoạt.",
        symptomEn: "During acceptance live burn test, power failed after 3 minutes, rendering all booster pumps dead.",
        causeVi: "Hồ sơ thầu mua nhầm cáp Chậm cháy (IEC 60332 - chỉ dập tắt ngọn lửa lan, vỏ nhựa cháy rụi và chập mạch ngay lập tức) thay vì cáp Chống cháy duy trì dòng điện (IEC 60331).",
        causeEn: "Installed IEC 60332 flame-retardant cable (which stops flame propagation along cable but short-circuits instantly) instead of true IEC 60331 circuit-integrity cable.",
        solutionVi: "Kiểm tra chứng chỉ xuất xưởng, yêu cầu ghi rõ IEC 60331 / BS 6387 CWZ và kiểm tra bằng dao bóc thấy 2 lớp Mica óng ánh quấn trên lõi đồng.",
        solutionEn: "Mandate third-party IEC 60331/BS 6387 CWZ test certificates and verify dual sparkling mica tape wrapping on conductors."
      }
    ]
  },
  {
    id: "sprinkler-pendent-bulb",
    category: "pccc",
    modelType: "sprinkler",
    has3DModel: true,
    rating: 4.92,
    badge: "AUTOMATIC LIFE SAFETY",
    name: {
      vi: "Đầu Phun Sprinkler PCCC Tự Động (Pendent Glass Bulb)",
      en: "Automatic Pendent Glass Bulb Sprinkler"
    },
    tagline: {
      vi: "Thiết bị cảm biến nhiệt và dập lửa tự động cơ học 100% không phụ thuộc nguồn điện",
      en: "100% mechanical thermo-sensitive automatic fire suppression head with zero electrical dependency"
    },
    tags: ["NFPA 13", "UL Listed / FM Approved", "K-Factor 5.6 / 8.0", "Phản Ứng Nhanh (Quick Response)", "PCCC"],
    image: "assets/images/sprinkler-diagram.svg",
    videoUrl: "https://www.youtube-nocookie.com/embed/fW49Y93uJbM",
    overview: {
      vi: "Đầu phun Sprinkler PCCC tự động hướng xuống (Pendent Sprinkler) là lá chắn đầu tiên kiểm soát và dập tắt đám cháy ngay từ giai đoạn bùng phát cục bộ. Được chế tạo từ đồng thau đúc cường độ cao với bóng thủy tinh chứa chất lỏng nhạy nhiệt chính xác từng độ C, thiết bị hoạt động hoàn toàn cơ năng độc lập.",
      en: "The automatic pendent glass bulb sprinkler is the frontline automated firefighting device engineered to detect, control, and suppress industrial fires in their nascent stages. Fabricated from precision forged brass with a hermetically sealed thermo-sensitive liquid bulb, it operates purely mechanically with zero external power requirements."
    },
    workingPrinciple: {
      vi: "Dưới tác động của nhiệt lượng bốc lên từ đám cháy, chất lỏng màu (thường là cồn đặc chủng hoặc hydrocarbon tổng hợp) trong bầu thủy tinh giãn nở mạnh mẽ. Khi nhiệt độ vượt ngưỡng thiết kế (ví dụ 68°C đối với màu đỏ), áp suất nội sinh làm vỡ tan bóng thủy tinh. Lò xo đĩa bung ra nhả nút bịt, dòng nước áp lực cao (từ 0.5 đến 12 bar) phóng thẳng vào đĩa định hướng (Deflector) tán đều thành các giọt nước hình nón bao trùm khu vực cháy.",
      en: "Convective heat from rising combustion gases heats the calibrated thermo-sensitive fluid sealed inside the glass bulb. Upon reaching nominal rating (e.g. 68°C for red bulb), internal vapor pressure shatters the bulb. The Belleville spring releases the Teflon seal, liberating high-pressure water (0.5 to 12 bar) to slam against the notched deflector plate, creating a uniform umbrella water droplet pattern."
    },
    specifications: [
      { labelVi: "Hệ số lưu lượng K-Factor", labelEn: "Discharge Coefficient (K)", valueVi: "K = 5.6 (80 metric) hoặc K = 8.0 (115 metric)", valueEn: "K = 5.6 US (80 LPM/bar^0.5) or K = 8.0", standard: "NFPA 13" },
      { labelVi: "Nhiệt độ kích hoạt & Màu bóng", labelEn: "Temperature Rating & Bulb Color", valueVi: "68°C (Đỏ), 79°C (Vàng), 93°C (Lục), 141°C (Lam)", valueEn: "68°C (Red), 79°C (Yellow), 93°C (Green), 141°C (Blue)", standard: "ISO 6182-1" },
      { labelVi: "Thời gian đáp ứng nhiệt (RTI)", labelEn: "Response Time Index (RTI)", valueVi: "RTI < 50 (m.s)^0.5 (Loại phản ứng nhanh QR)", valueEn: "RTI < 50 (m.s)^0.5 (Quick Response QR type)", standard: "UL 199 / FM 2000" },
      { labelVi: "Áp suất làm việc tối đa", labelEn: "Max Working Pressure", valueVi: "175 psi (12.1 bar) - Thử áp thử nghiệm 500 psi", valueEn: "175 psi (12.1 bar) - Hydrostatic test 500 psi", standard: "UL Listed" },
      { labelVi: "Ren kết nối", labelEn: "Thread Size", valueVi: "1/2 inch NPT (DN15) hoặc 3/4 inch NPT (DN20)", valueEn: "1/2\" NPT (DN15) or 3/4\" NPT (DN20)", standard: "ASME B1.20.1" },
      { labelVi: "Vật liệu khung thân", labelEn: "Frame Material", valueVi: "Đồng thau rèn nóng mạ Chrome sáng bóng", valueEn: "Hot forged brass alloy with chrome electroplate", standard: "ASTM B124" }
    ],
    pros: [
      {
        titleVi: "Kích hoạt cục bộ chính xác, không gây ngập lụt toàn diện",
        titleEn: "Localized Actuation - Zero Indiscriminate Flooding",
        descVi: "Chỉ đầu phun nào nằm ngay phía trên tâm nhiệt đám cháy mới vỡ bóng và xả nước; các đầu phun khác ở xa hoàn toàn không hoạt động, bảo vệ hàng hóa khỏi hư hỏng nước không đáng có.",
        descEn: "Unlike movies, only heads subjected to localized fire heat shatter; adjacent heads remain tightly sealed, preventing widespread facility flooding.",
        scenarioVi: "Kho hàng điện tử, nhà máy dệt may, khu sản xuất linh kiện chính xác.",
        scenarioEn: "Precision electronics assembly, apparel warehousing, server utility corridors."
      },
      {
        titleVi: "Tự động hóa 100% bằng định luật nhiệt động lực học",
        titleEn: "100% Autonomous Thermodynamic Actuation",
        descVi: "Hoạt động ngay cả khi toàn bộ nguồn điện tòa nhà bị cắt, hệ thống vi xử lý BMS bị sập hoặc con người hoảng loạn bỏ chạy.",
        descEn: "Functions instantaneously during complete electrical blackouts, BMS failures, or human evacuation delays.",
        scenarioVi: "Khu vực lưu trữ hàng ban đêm, hầm máy kỹ thuật không có người trực.",
        scenarioEn: "Unattended night-shift storehouses, mechanical sub-levels, chemical vaults."
      },
      {
        titleVi: "Hiệu quả dập tắt đám cháy thành công trên 96%",
        titleEn: "Statistically Proven 96%+ Fire Containment Rate",
        descVi: "Thống kê của NFPA chứng minh 90% các vụ cháy công nghiệp được dập tắt hoặc kiểm soát hoàn toàn chỉ bởi 1 đến 2 đầu phun sprinkler kích hoạt sớm.",
        descEn: "NFPA empirical data verifies 90% of structural fires are contained or extinguished by just 1 or 2 operating heads.",
        scenarioVi: "Mọi công trình công nghiệp và dân dụng đạt chuẩn PCCC quốc tế.",
        scenarioEn: "Global manufacturing hubs adhering to FM Global / NFPA underwriting criteria."
      }
    ],
    cons: [
      {
        titleVi: "Bóng thủy tinh dễ vỡ khi va chạm cơ học bất cẩn",
        titleEn: "Vulnerability to Mechanical Impact & Accidental Rupture",
        descVi: "Cần trục, xe nâng hàng hoặc thang bảo trì va quẹt vào bóng thủy tinh sẽ làm vỡ đầu phun, phóng ra hàng nghìn lít nước làm ướt thiết bị.",
        descEn: "Forklift masts, scaffolding, or material handling equipment bumping the 2.5mm glass bulb causes immediate discharge.",
        riskVi: "Thiệt hại hàng triệu đô la linh kiện điện tử do xe nâng tông trúng đầu sprinkler không có rọ bảo vệ.",
        riskEn: "Heavy financial losses due to forklift collisions in un-caged sprinkler zones."
      },
      {
        titleVi: "Không thích hợp cho đám cháy dầu mỡ hoặc kim loại phản ứng nước",
        titleEn: "Incompatible with Combustible Metals or Grease",
        descVi: "Xả nước vào đám cháy Natri, Magie, Kali sẽ giải phóng Hydro gây nổ; xả vào chảo dầu nhiệt độ cao gây bùng dầu bắn tung tóe.",
        descEn: "Discharging water onto Class D reactive metals triggers hydrogen explosion; Class K oils cause violent boil-over.",
        riskVi: "Nguy cơ nổ lò nấu kim loại hoặc đám cháy bùng phát dữ dội hơn.",
        riskEn: "Extreme explosion hazard in molten metal die-casting foundries."
      },
      {
        titleVi: "Ăn mòn hóa chất trong môi trường mạ hoặc hơi axit",
        titleEn: "Corrosion Degradation in Chemical Vapor Environments",
        descVi: "Khung đồng thau và lò xo đĩa có thể bị rỉ sét, bám muội hoặc đóng cặn khoáng làm kẹt nút bịt không bung ra được khi có cháy.",
        descEn: "Acid plating fumes or saline sea-air corrode brass frames and bond the sealing plug, preventing release under fire.",
        riskVi: "Đầu phun bị kẹt câm nín khi hỏa hoạn thực sự bùng phát.",
        riskEn: "Frozen deflector assembly fails to deploy during true thermal emergence."
      }
    ],
    matrixScores: {
      thermalResistance: 9,
      mechanicalStrength: 7,
      costEfficiency: 9,
      maintenanceEase: 8,
      installationSpeed: 8,
      chemicalResistance: 6
    },
    standards: [
      { code: "NFPA 13", titleVi: "Tiêu chuẩn lắp đặt hệ thống Sprinkler tự động", titleEn: "Standard for the Installation of Sprinkler Systems", organization: "National Fire Protection Association", url: "https://www.nfpa.org" },
      { code: "UL 199", titleVi: "Tiêu chuẩn an toàn đầu phun Sprinkler chữa cháy", titleEn: "Standard for Automatic Sprinklers for Fire-Protection Service", organization: "Underwriters Laboratories", url: "https://www.ul.com" },
      { code: "TCVN 7336:2021", titleVi: "PCCC - Hệ thống chữa cháy tự động bằng nước - Thiết kế và lắp đặt", titleEn: "Fire protection - Automatic water sprinkler systems - Design and installation", organization: "Vietnam Standards Institute", url: "https://tcvn.gov.vn" }
    ],
    failureCases: [
      {
        titleVi: "Nổ bóng giả do nhiệt bức xạ đèn chiếu điểm hoặc máy sấy cục bộ",
        titleEn: "False Tripping via Radiant Lamp / Heating Coil Proximity",
        symptomVi: "Đầu sprinkler 68°C tự động bung lúc 2 giờ chiều khi không có bất kỳ ngọn lửa nào trong xưởng.",
        symptomEn: "Sprinkler discharges spontaneously during afternoon operation with zero fire present.",
        causeVi: "Đèn halogen công suất 1000W hoặc ống gió nóng lắp quá gần (dưới 0.5m) tích tụ nhiệt cục bộ trên 70°C làm vỡ bầu thủy tinh.",
        causeEn: "High-output halogen luminaire mounted 30cm away created a thermal micro-pocket exceeding 70°C.",
        solutionVi: "Thay bằng đầu phun bầu xanh lục (93°C) hoặc dịch chuyển vị trí đèn cách xa tối thiểu 1.2 mét theo chỉ dẫn NFPA 13.",
        solutionEn: "Upgrade to higher-temperature intermediate bulb (93°C green) and enforce NFPA clearance offsets."
      }
    ]
  },
  {
    id: "busway-compact-al",
    category: "mep-elec",
    modelType: "busway",
    has3DModel: true,
    rating: 4.88,
    badge: "MODERN POWER",
    name: {
      vi: "Thanh Dẫn Điện Busway Compact (Sandwich Busduct)",
      en: "Compact Sandwich Busway Trunking System"
    },
    tagline: {
      vi: "Giải pháp truyền tải điện năng dòng lớn từ 800A đến 6300A thay thế bó cáp truyền thống",
      en: "High-amperage feeder distribution replacing bulky multi-run cable conduits from 800A to 6300A"
    },
    tags: ["IEC 61439-6", "UL 857", "IP54 / IP66", "Thanh Dẫn Nhôm/Đồng", "Dòng Lớn"],
    image: "assets/images/busway-diagram.svg",
    videoUrl: "https://www.youtube-nocookie.com/embed/sLgqUvBqW3c",
    overview: {
      vi: "Hệ thống thanh dẫn Busway dạng kẹp ép chặt (Compact Sandwich) là công nghệ truyền tải và phân phối điện hiện đại bậc nhất cho các nhà xưởng quy mô lớn, trung tâm dữ liệu và tòa tháp chọc trời. Cấu trúc gồm các thanh đồng hoặc nhôm được bọc cách điện Class F/B màng Mylar hoặc Epoxy rồi ép chặt trong vỏ nhôm đúc định hình.",
      en: "Compact sandwich busway trunking is the modern benchmark for high-amperage bulk power transmission in industrial mega-plants, hyper-scale data centers, and high-rise infrastructures. Conductors (copper or aluminum) are wrapped in Class F Mylar or electrostatic epoxy and sandwiched without air gaps inside an extruded aluminum housing."
    },
    workingPrinciple: {
      vi: "Bằng cách triệt tiêu hoàn toàn khoảng cách không khí giữa các thanh pha (No air gap sandwich design), điện kháng cảm ứng (Reactance X) giảm đi 4 lần so với thanh cái truyền thống, giúp sụt áp trên đường dây cực nhỏ. Vỏ nhôm nguyên khối tiếp xúc trực tiếp đóng vai trò như một bộ tản nhiệt khổng lồ, truyền nhiệt trực tiếp ra không khí bằng đối lưu tự nhiên.",
      en: "By compressing phase conductors together without air spaces, inductive reactance is slashed up to 75% compared to open busbars, achieving minimal voltage drop. The heavy-duty extruded aluminum enclosure acts as an integral continuous heatsink, dissipating ohmic I²R heat directly into ambient air."
    },
    specifications: [
      { labelVi: "Dòng điện định mức", labelEn: "Rated Current (In)", valueVi: "800A đến 6300A (3 pha 3 dây, 3 pha 4 dây hoặc 5 dây)", valueEn: "800A to 6300A (3P3W, 3P4W, 3P5W with 100% or 200% Neutral)", standard: "IEC 61439-6" },
      { labelVi: "Vật liệu thanh dẫn", labelEn: "Conductor Alloy", valueVi: "Đồng ETP 99.9% mạ thiếc/bạc hoặc Hợp kim nhôm mạ đồng", valueEn: "ETP 99.9% Copper (tin/silver plated) or Copper-clad Aluminum", standard: "ASTM B187" },
      { labelVi: "Vật liệu vỏ bọc", labelEn: "Housing Construction", valueVi: "Hợp kim nhôm đùn 2 mảnh sơn tĩnh điện, đóng vai trò PE đất", valueEn: "Two-piece extruded aluminum housing serving as integral 50% ground", standard: "UL 857" },
      { labelVi: "Cấp độ bảo vệ môi trường", labelEn: "Ingress Protection Rating", valueVi: "IP54 (trong nhà), IP66 / IP68 (ngoài trời, đúc nhựa resin)", valueEn: "IP54 standard indoor, IP66/IP68 cast resin outdoor", standard: "IEC 60529" },
      { labelVi: "Dòng chịu ngắn mạch", labelEn: "Short-Circuit Withstand (Icw)", valueVi: "Lên tới 120 kA / 1 giây (đỉnh lêm 264 kA)", valueEn: "Up to 120 kA rms for 1s (264 kA peak)", standard: "IEC 61439-6" },
      { labelVi: "Hệ thống trích điện", labelEn: "Tap-Off Unit (Plug-in)", valueVi: "Hộp cắm rẽ nhánh từ 16A đến 800A có khóa liên động an toàn", valueEn: "Plug-in tap-off boxes 16A to 800A with safety mechanical interlock", standard: "IEC 60947-2" }
    ],
    pros: [
      {
        titleVi: "Tiết kiệm 60% không gian và thẩm mỹ công nghiệp hiện đại",
        titleEn: "60% Space Savings & Ultra-Clean Industrial Architecture",
        descVi: "Thay vì phải rải 16 đến 24 sợi cáp ngầm to đùng trên thang máng cáp nặng nề, một đường busway thanh mảnh kích thước chỉ 15x30cm gánh trọn vẹn 3200A.",
        descEn: "Replaces 20+ runs of parallel 500mm² cables on wide racks with a single sleek 15x30cm trunking line.",
        scenarioVi: "Trục đứng kỹ thuật (Electrical Riser Shaft), hành lang trần nhà xưởng chật chội.",
        scenarioEn: "Vertical high-rise riser shafts, congested factory utility ceiling corridors."
      },
      {
        titleVi: "Linh hoạt phân nhánh cắm rút nhanh (Plug-and-Play Tap-Off)",
        titleEn: "Instant Reconfiguration via Plug-In Tap-Off Boxes",
        descVi: "Mỗi 3 mét thân busway đều có các cửa sổ cắm điện; khi di dời dây chuyền máy móc chỉ cần cắm thêm hộp Tap-off Box trong 15 phút mà không cần cắt điện toàn nhà máy.",
        descEn: "Standard tap-off slots every 3 meters permit installing new machine feeder taps live in 15 minutes without plant-wide outages.",
        scenarioVi: "Nhà xưởng may mặc, lắp ráp ô tô, xưởng cơ khí thường xuyên đổi layout máy móc.",
        scenarioEn: "Automotive assembly lines and textile facilities undergoing frequent layout shifts."
      },
      {
        titleVi: "Tổn thất điện áp và điện kháng thấp hơn nhiều so với cáp",
        titleEn: "Superior Voltage Regulation & Minimal Reactance",
        descVi: "Cấu trúc sandwich dẹt làm giảm đáng kể hiện tượng cảm ứng tương hỗ giữa các pha, giữ điện áp cuối nguồn luôn ổn định.",
        descEn: "Close inter-phase capacitive coupling and minimal reactive impedance ensure tighter voltage regulation over long distances.",
        scenarioVi: "Nhà xưởng kéo dài từ 200m đến 500m từ trạm biến áp đến trung tâm phụ tải.",
        scenarioEn: "Mega-scale industrial workshops spanning 200m-500m from substation to load centers."
      }
    ],
    cons: [
      {
        titleVi: "Chi phí mua sắm vật tư ban đầu cao",
        titleEn: "High Initial Upfront Material Procurement Cost",
        descVi: "Giá thành sản xuất busway chính xác theo bản vẽ thiết kế 3D cao hơn chi phí mua cuộn cáp điện bán sẵn trên thị trường.",
        descEn: "Precision engineered prefabricated lengths custom-tailored to site 3D coordinates command a cost premium over loose cable coils.",
        riskVi: "Chủ đầu tư có ngân sách hạn hẹp ban đầu dễ bị áp lực tài chính.",
        riskEn: "Initial budget constraints may tempt clients into undersized traditional cabling."
      },
      {
        titleVi: "Yêu cầu đo đạc khảo sát thực địa cực kỳ chuẩn xác",
        titleEn: "Zero Tolerance for Field Dimension Errors",
        descVi: "Các đoạn cút co lượn (Elbow, Offset, Flange End) phải được chế tạo cố định tại nhà máy; nếu thợ đo lệch tường 5cm sẽ không thể lắp ráp được.",
        descEn: "Prefabricated factory elbows and offsets cannot be bent or shortened on site; a 50mm building survey deviation stalls installation.",
        riskVi: "Phải đặt nhà máy gia công lại thanh bù mất thêm 3-4 tuần nhập khẩu.",
        riskEn: "Weeks of site stoppage awaiting re-manufactured custom transition sections."
      },
      {
        titleVi: "Nhạy cảm với nước rò rỉ nếu dùng chuẩn IP54 trong nhà",
        titleEn: "Vulnerability to Standing Water Ingress in IP54 Models",
        descVi: "Nếu ống nước trên trần bị thủng bắn tia nước vào các khớp nối (Joint Blocks) loại IP54 có thể dẫn đến ngắn mạch phóng điện nổ lớn.",
        descEn: "Ceiling pipe leaks dripping over standard IP54 joint bolts can bridge insulation barriers, causing phase-to-phase flashovers.",
        riskVi: "Nổ trạm biến áp hoặc nổ tung thanh nối busway do nước lọt vào khớp liên kết.",
        riskEn: "Catastrophic arc-flash explosions caused by rainwater or HVAC condensate drips."
      }
    ],
    matrixScores: {
      thermalResistance: 8,
      mechanicalStrength: 9,
      costEfficiency: 5,
      maintenanceEase: 9,
      installationSpeed: 9,
      chemicalResistance: 7
    },
    standards: [
      { code: "IEC 61439-6", titleVi: "Hệ thống thanh dẫn hạ thế (Busbar trunking systems)", titleEn: "Low-voltage switchgear and controlgear assemblies - Part 6: Busbar trunking systems", organization: "IEC", url: "https://www.iec.ch" },
      { code: "UL 857", titleVi: "Tiêu chuẩn an toàn thanh dẫn điện Busway", titleEn: "Standard for Busways", organization: "Underwriters Laboratories", url: "https://www.ul.com" },
      { code: "TCVN 7994-6:2018", titleVi: "Hệ thống thanh dẫn điện Busway theo tiêu chuẩn quốc gia", titleEn: "Low-voltage switchgear assemblies - Part 6", organization: "Vietnam Standards", url: "https://tcvn.gov.vn" }
    ],
    failureCases: [
      {
        titleVi: "Không siết bu-lông lực bằng bu-lông gãy đầu (Shear Bolt Failure)",
        titleEn: "Hotspot Arcing from Improper Joint Bolt Torque",
        symptomVi: "Kiểm tra camera nhiệt phát hiện khớp nối busway nóng rực 140°C, bốc mùi khét lẹt sau 2 tháng chạy đầy tải.",
        symptomEn: "Infrared thermography reveals a joint glowing red at 140°C under full 2000A plant load.",
        causeVi: "Nhân công thi công siết bằng cờ-lê thường không dùng bu-lông 2 đầu bẻ khớp (Break-off torque head) quy định 70 N.m, làm tăng điện trở tiếp xúc bề mặt.",
        causeEn: "Workers used manual wrenches and stopped before the calibrated shear-head snapped, leaving joint plates loose with micro-voids.",
        solutionVi: "Thay thế bộ Joint Block mới, dùng cờ-lê cân lực siết đúng mô-men đến khi bẻ gãy đầu chốt chỉ thị của nhà sản xuất.",
        solutionEn: "Replace scorched joint stack and tighten factory twin-headed bolts until the outer hex shears off cleanly at 70 N.m."
      }
    ]
  },
  {
    id: "pir-sandwich-panel",
    category: "infra",
    modelType: "sandwich-panel",
    has3DModel: false,
    rating: 4.85,
    badge: "INSULATION & FIRE",
    name: {
      vi: "Panel Sandwich PIR Chống Cháy Cách Nhiệt (B1/B2 Fire Rating)",
      en: "PIR Fire-Retardant Cleanroom Sandwich Panel"
    },
    tagline: {
      vi: "Vật liệu vách và trần bảo ôn cao cấp hệ số dẫn nhiệt siêu thấp k = 0.020 W/m.K",
      en: "Thermal insulation wall and ceiling panel featuring ultra-low thermal conductivity k = 0.020 W/m.K"
    },
    tags: ["FM 4880", "EN 13501-1 (B-s1,d0)", "Phòng Sạch Cleanroom", "Lõi Polyisocyanurate", "Tiết Kiệm Năng Lượng"],
    image: "assets/images/panel-diagram.svg",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    overview: {
      vi: "Tấm panel PIR (Polyisocyanurate) là sự tiến hóa vượt bậc so với xốp EPS và PU thông thường. Với cấu trúc liên kết vòng dị thể đẳng nhiệt bền vững, panel PIR mang lại khả năng cách âm, cách nhiệt đỉnh cao cùng đặc tính tự dập tắt lửa, không tạo giọt bắn nóng chảy khi gặp nhiệt độ cao.",
      en: "PIR (Polyisocyanurate) sandwich panels represent a generational leap over outdated EPS and PUR cores. Engineered with tightly cross-linked isocyanurate ring molecular networks, PIR delivers world-class thermal insulation and self-extinguishing fire performance without generating molten flaming droplets."
    },
    workingPrinciple: {
      vi: "Lõi xốp PIR chứa hơn 95% bọt khí tế bào kín (Closed-cell micro-pores) ngăn chặn hoàn toàn hiện tượng dẫn nhiệt và đối lưu khí. Hai mặt là tôn mạ hợp kim nhôm kẽm (Alu-Zinc) sơn tĩnh điện kháng khuẩn với hèm khóa ngàm âm dương (Cam-lock hoặc Z-lock) kín khít không lọt nhiệt.",
      en: "The rigid closed-cell structure (>95% micro-voids) arrests convective and conductive heat transfer. Bonded to twin antimicrobial prepainted galvanized steel skins, interlocking tongue-and-groove cam-lock joints eliminate thermal bridging."
    },
    specifications: [
      { labelVi: "Hệ số dẫn nhiệt (Lambda λ)", labelEn: "Thermal Conductivity (λ)", valueVi: "0.020 - 0.022 W/m.K (Tốt nhất trong các loại vật liệu xốp)", valueEn: "0.020 - 0.022 W/m.K (Highest foam efficiency)", standard: "EN 12667" },
      { labelVi: "Tỷ trọng bọt xốp", labelEn: "Core Foam Density", valueVi: "40 - 45 kg/m³", valueEn: "40 - 45 kg/m³", standard: "ASTM D1622" },
      { labelVi: "Cấp độ chống cháy", labelEn: "Reaction to Fire", valueVi: "Chuẩn B-s1, d0 (Ít khói, không rơi giọt lửa)", valueEn: "Class B-s1, d0 (Zero flaming droplets, low smoke)", standard: "EN 13501-1 / FM 4880" },
      { labelVi: "Độ dày tấm", labelEn: "Panel Thickness Range", valueVi: "50mm, 75mm, 100mm, 150mm đến 200mm (kho đông lạnh)", valueEn: "50mm, 75mm, 100mm, 150mm to 200mm (freezer class)", standard: "ISO 13787" },
      { labelVi: "Kháng nén (Compressive Strength)", labelEn: "Compressive Strength", valueVi: "≥ 150 kPa tại độ nén 10%", valueEn: "≥ 150 kPa at 10% deformation", standard: "EN 826" },
      { labelVi: "Lớp tôn bề mặt", labelEn: "Steel Facing Sheet", valueVi: "Tôn mạ hợp kim nhôm kẽm phủ sơn PVDF / Polyester 0.45 - 0.6mm", valueEn: "0.45 - 0.6mm Prepainted Galvalume with PVDF antibacterial coat", standard: "ASTM A792" }
    ],
    pros: [
      {
        titleVi: "Hiệu suất cách nhiệt vượt trội, giảm 40% tiền điện Chiller",
        titleEn: "Superlative Thermal Insulation (Cut Chiller Bills 40%)",
        descVi: "Hệ số k chỉ 0.021 W/m.K cho phép panel 75mm PIR đạt hiệu quả cách nhiệt tương đương tường gạch dày 80cm hoặc xốp EPS dày 150mm.",
        descEn: "With k=0.021 W/m.K, a 75mm PIR panel matches an 80cm solid masonry wall or 150mm regular EPS foam, substantially lowering HVAC load.",
        scenarioVi: "Kho lạnh bảo quản dược phẩm, phòng sạch bán dẫn, nhà xưởng thực phẩm chế biến.",
        scenarioEn: "Cold-chain pharmaceutical warehouses, semiconductor cleanrooms, food processing plants."
      },
      {
        titleVi: "Tự tạo lớp than hóa bảo vệ khi gặp lửa (Char Formation)",
        titleEn: "Protective Carbonaceous Char Layer in Flames",
        descVi: "Khi tiếp xúc với ngọn lửa trên 300°C, bề mặt PIR tự than hóa thành lớp gốm carbon cứng ngăn chặn oxy xâm nhập vào sâu, không bắt lửa bùng cháy dữ dội như xốp EPS.",
        descEn: "Forms an inert vitreous carbon char when exposed to flames, suffocating oxygen ingress and stopping flashover.",
        scenarioVi: "Vách ngăn nhà xưởng công nghiệp yêu cầu thẩm duyệt PCCC khắt khe.",
        scenarioEn: "Factory partition demising walls undergoing rigorous fire safety code compliance."
      },
      {
        titleVi: "Kháng ẩm tuyệt đối và chống nấm mốc phòng sạch",
        titleEn: "Hydrophobic Closed-Cell Moisture & Mold Resistance",
        descVi: "Cấu trúc tế bào kín không thấm nước (độ hút ẩm < 1%), không bị mục nát hay nảy sinh bào tử nấm mốc trong môi trường độ ẩm cao.",
        descEn: "Closed-cell structure absorbs <1% moisture, impervious to rot and fungal spore cultivation under 95% RH humidity.",
        scenarioVi: "Phòng mổ bệnh viện quốc tế, nhà máy sữa, cơ sở chế biến thủy hải sản.",
        scenarioEn: "Surgical clean suites, dairy processing, and seafood deep-freeze facilities."
      }
    ],
    cons: [
      {
        titleVi: "Không đạt giới hạn chống cháy EI cao như bông khoáng Rockwool",
        titleEn: "Cannot Match Rockwool in High EI-Hour Structural Ratings",
        descVi: "PIR chỉ có thể đạt EI 15 đến EI 30; nếu công trình yêu cầu vách ngăn cháy EI 60 hoặc EI 120 (chịu lửa 1-2 tiếng) thì bắt buộc phải chuyển sang panel Rockwool bông khoáng.",
        descEn: "PIR peaks at EI 15 - EI 30 ratings; applications requiring certified EI 60 or EI 120 firewalls require mineral rockwool panels.",
        riskVi: "Bị cơ quan PCCC từ chối nghiệm thu nếu bản vẽ yêu cầu vách ngăn cháy chuyên dụng EI 60+.",
        riskEn: "Fire inspector non-approval if local regulations mandate structural EI 60 boundary walls."
      },
      {
        titleVi: "Giá thành cao hơn 50% so với panel xốp EPS truyền thống",
        titleEn: "Cost Surcharge Over Commodity EPS Foams",
        descVi: "Nguyên liệu hóa chất isocyanate và polyol nhập khẩu khiến chi phí đầu tư ban đầu cao hơn đáng kể so với xốp EPS rẻ tiền.",
        descEn: "Imported MDI isocyanate formulations command higher unit procurement costs than conventional expanded polystyrene.",
        riskVi: "Vượt dự toán nếu áp dụng tràn lan cho các nhà kho chứa đồ thô không cần kiểm soát nhiệt.",
        riskEn: "Budget overruns when over-specified in ambient, unconditioned bulk storage sheds."
      }
    ],
    matrixScores: {
      thermalResistance: 10,
      mechanicalStrength: 7,
      costEfficiency: 6,
      maintenanceEase: 9,
      installationSpeed: 9,
      chemicalResistance: 8
    },
    standards: [
      { code: "FM 4880", titleVi: "Đánh giá khả năng chống cháy của vật liệu vách và trần cách nhiệt", titleEn: "American National Standard for Evaluating the Fire Performance of Insulated Building Assemblies", organization: "FM Approvals", url: "https://www.fmapprovals.com" },
      { code: "EN 13501-1", titleVi: "Phân loại phản ứng với lửa của sản phẩm xây dựng", titleEn: "Fire classification of construction products and building elements", organization: "CEN European Standards", url: "https://www.cen.eu" },
      { code: "TCVN 9311-1:2012", titleVi: "Thử nghiệm chịu lửa - Các bộ phận kết cấu xây dựng", titleEn: "Fire-resistance tests - Elements of building construction", organization: "TCVN", url: "https://tcvn.gov.vn" }
    ],
    failureCases: [
      {
        titleVi: "Cầu nhiệt đọng sương (Condensation Sweating) tại mối ghép ngàm",
        titleEn: "Thermal Bridging & Condensation at Joint Seams",
        symptomVi: "Nước nhỏ giọt liên tục từ các đường ghép nối panel trên trần kho mát, gây nấm mốc và ẩm ướt sàn.",
        symptomEn: "Continuous water condensation weeping along panel ceiling seams in chilled rooms.",
        causeVi: "Thợ thi công không bơm keo silicone bọt PU tại ngàm Z-lock, khiến không khí nóng ẩm ngoài trời lọt vào tiếp xúc bề mặt lạnh.",
        causeEn: "Omission of continuous butyl gasket or PU expanding foam inside male-female interlocking joints.",
        solutionVi: "Bơm bổ sung keo chuyên dụng chống ẩm màng kín và ốp nẹp nhôm bo góc có xốp đệm cách nhiệt.",
        solutionEn: "Inject closed-cell PU foam into joints and install insulated thermal-break PVC/aluminum capping covers."
      }
    ]
  },
  {
    id: "cast-resin-transformer",
    category: "mep-elec",
    modelType: "transformer",
    has3DModel: false,
    rating: 4.9,
    badge: "SUBSTATION SAFETY",
    name: {
      vi: "Máy Biến Áp Khô Đúc Nhựa Epoxy (Cast Resin Transformer)",
      en: "Cast Resin Dry-Type Power Transformer"
    },
    tagline: {
      vi: "Máy biến áp trung thế 22kV/0.4kV an toàn chống cháy nổ tuyệt đối đặt trong nhà",
      en: "22kV/0.4kV explosion-proof indoor transformer with vacuum-cast epoxy Class F/H insulation"
    },
    tags: ["IEC 60076-11", "Chuẩn E2-C2-F1", "Không Dầu", "An Toàn Chống Nổ", "22kV/400V"],
    image: "assets/images/transformer-diagram.svg",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    overview: {
      vi: "Máy biến áp khô đúc nhựa (Cast Resin Dry-Type Transformer) đã thay thế hoàn toàn máy biến áp dầu trong các trạm điện ngầm, nhà máy công nghiệp thực phẩm, dược phẩm và trung tâm thương mại. Cuộn dây cao thế được bọc chân không bằng nhựa epoxy gia cường sợi thủy tinh, loại bỏ 100% rủi ro cháy nổ và rò rỉ dầu độc hại.",
      en: "Cast resin dry-type transformers have superseded mineral oil transformers across indoor substations, pharmaceutical processing plants, and mission-critical towers. High-voltage windings are encapsulated under high vacuum with fiberglass-reinforced epoxy resin, eliminating fire, explosion, and toxic oil leakage hazards."
    },
    workingPrinciple: {
      vi: "Lõi từ bằng thép silic cán nguội định hướng từ thông cao (Grain-Oriented Silicon Steel) giảm thiểu suy hao không tải (Po). Cuộn dây thứ cấp và sơ cấp đúc chân không hoàn toàn kín khí, tản nhiệt ra môi trường bằng đối lưu không khí tự nhiên (AN) hoặc quạt cưỡng bức (AF) giúp tăng 40% công suất tức thời.",
      en: "High-grade grain-oriented electrical steel minimizes no-load core losses (Po). Windings embedded in solid quartz-filled epoxy dissipate heat through natural air convection (AN) or thermostatically switched forced-air blowers (AF), providing up to 40% overload capacity."
    },
    specifications: [
      { labelVi: "Công suất định mức", labelEn: "Rated Power Capacity", valueVi: "250 kVA đến 3150 kVA (tới 15 MVA cho trạm lớn)", valueEn: "250 kVA up to 3150 kVA (up to 15 MVA for utility stations)", standard: "IEC 60076-11" },
      { labelVi: "Cấp điện áp", labelEn: "Voltage Class", valueVi: "Sơ cấp 22kV / 24kV - Thứ cấp 400V / 230V", valueEn: "Primary 22kV / 24kV - Secondary 400V / 230V (Dyn11)", standard: "IEC 60076-3" },
      { labelVi: "Cấp môi trường, khí hậu, chống cháy", labelEn: "Classification E, C, F", valueVi: "E2 (chống ngưng tụ ẩm), C2 (nhiệt độ -25°C), F1 (chống cháy tự dập tắt)", valueEn: "E2 (condensation), C2 (-25°C operation), F1 (self-extinguishing fire)", standard: "IEC 60076-11" },
      { labelVi: "Cấp cách điện", labelEn: "Insulation Thermal Class", valueVi: "Class F (155°C) hoặc Class H (180°C)", valueEn: "Class F (155°C) or Class H (180°C)", standard: "IEC 60085" },
      { labelVi: "Độ phóng điện cục bộ", labelEn: "Partial Discharge Level", valueVi: "Cực thấp: < 10 pC (Picocoulombs)", valueEn: "Ultra-low: < 10 pC (Picocoulombs)", standard: "IEC 60270" },
      { labelVi: "Vỏ bảo vệ", labelEn: "Enclosure Protection", valueVi: "Vỏ thép sơn tĩnh điện IP21, IP23 hoặc IP31 có lưới chống chuột", valueEn: "Powder-coated steel enclosure IP21, IP23 or IP31 with vermin guards", standard: "IEC 60529" }
    ],
    pros: [
      {
        titleVi: "An toàn chống cháy nổ tuyệt đối, đặt ngay trong xưởng sản xuất",
        titleEn: "Zero Explosion Hazard - Direct In-Plant Placement",
        descVi: "Không chứa dầu biến thế dễ cháy, không cần xây bể thu dầu sự cố hay vách ngăn chống nổ tốn kém hàng trăm triệu đồng.",
        descEn: "Contains no flammable mineral oil; dispenses with costly oil retention catchment pits and reinforced blast walls.",
        scenarioVi: "Tầng hầm kỹ thuật, trạm điện nằm ngay giữa xưởng may mặc, kho hàng hóa giá trị cao.",
        scenarioEn: "Building basements, substations positioned inside high-density manufacturing floors."
      },
      {
        titleVi: "Bảo trì tối thiểu (Virtually Maintenance-Free)",
        titleEn: "Virtually Maintenance-Free Operation",
        descVi: "Không cần định kỳ lấy mẫu kiểm tra độ cách điện của dầu, lọc dầu hay thay hạt hút ẩm silicagel như máy biến áp truyền thống.",
        descEn: "No periodic oil dielectric breakdown testing, no degasification, and no silica-gel desiccant replacement required.",
        scenarioVi: "Nhà máy hoạt động liên tục 24/7 với đội ngũ kỹ thuật tinh gọn.",
        scenarioEn: "24/7 continuous process lines operating with lean maintenance personnel."
      },
      {
        titleVi: "Khả năng chịu ẩm và ô nhiễm môi trường khắc nghiệt (E2 Class)",
        titleEn: "Moisture & Industrial Pollution Proof (E2 Class)",
        descVi: "Khối epoxy đúc chân không ngăn cách hoàn toàn muối biển, bụi dẫn điện và độ ẩm xâm nhập vào cuộn dây đồng.",
        descEn: "Solid vacuum-cast block creates a permanent seal against coastal salt aerosols and industrial airborne dust.",
        scenarioVi: "Khu công nghiệp ven biển, nhà máy sản xuất hóa chất, trạm biến áp ẩm ướt.",
        scenarioEn: "Coastal industrial zones, chemical plants, and high-humidity environments."
      }
    ],
    cons: [
      {
        titleVi: "Chi phí đầu tư ban đầu cao hơn máy biến áp dầu từ 1.8 - 2.2 lần",
        titleEn: "1.8x to 2.2x Higher Capital Expenditure vs Oil-Immersed",
        descVi: "Quy trình đúc chân không phức tạp và vật liệu epoxy tinh khiết cao cấp làm giá thành máy đúc khô cao hơn máy dầu cùng công suất.",
        descEn: "Precision vacuum-mold processing and high-grade resin matrices result in significantly higher initial pricing.",
        riskVi: "Có thể vượt mức ngân sách ban đầu nếu nhà xưởng không có yêu cầu bắt buộc đặt máy trong nhà.",
        riskEn: "Cost penalty if installed in outdoor yards where oil transformers are legally permitted."
      },
      {
        titleVi: "Khả năng quá tải liên tục ngoài trời kém hơn máy dầu",
        titleEn: "Lower Continuous Thermal Dissipation Outdoors",
        descVi: "Dầu khoáng luân chuyển đối lưu giải nhiệt nhanh hơn không khí; khi nhiệt độ môi trường lên quá 45°C, máy biến áp khô cần quạt thổi cưỡng bức để không bị quá nhiệt.",
        descEn: "Epoxy has lower thermal conductivity than circulating mineral oil; relies heavily on forced-air fans when ambient exceeds 40°C.",
        riskVi: "Bị ngắt điện bảo vệ nhiệt độ (Trip Pt100) vào những ngày nắng nóng cực độ nếu quạt gió hỏng.",
        riskEn: "Thermistor trip shutdown during peak summer heat waves if cooling blowers stall."
      }
    ],
    matrixScores: {
      thermalResistance: 8,
      mechanicalStrength: 9,
      costEfficiency: 5,
      maintenanceEase: 10,
      installationSpeed: 8,
      chemicalResistance: 9
    },
    standards: [
      { code: "IEC 60076-11", titleVi: "Máy biến áp lực - Phần 11: Máy biến áp khô", titleEn: "Power transformers - Part 11: Dry-type transformers", organization: "IEC", url: "https://www.iec.ch" },
      { code: "TCVN 6306-11:2009", titleVi: "Tiêu chuẩn quốc gia về máy biến áp khô", titleEn: "Power transformers - Dry-type", organization: "TCVN", url: "https://tcvn.gov.vn" }
    ],
    failureCases: [
      {
        titleVi: "Bụi kim loại tích tụ gây phóng điện bề mặt (Surface Flashover)",
        titleEn: "Conductive Dust Tracking Across High-Voltage Spacers",
        symptomVi: "Nghe tiếng nổ lẹt đẹt (corona discharge) và có mùi Ozone nồng nặc phát ra từ vỏ máy biến áp.",
        symptomEn: "Audible corona hissing crackles and strong ozone odor inside the transformer enclosure.",
        causeVi: "Nhà xưởng cơ khí có nhiều mạt sắt mịn bay vào bám lên bề mặt cuộn dây và sứ cách điện mà không được hút bụi định kỳ 6 tháng/lần.",
        causeEn: "Conductive grinding particulate penetrated IP21 louvers, forming a conductive film across insulation creepage paths.",
        solutionVi: "Cắt điện, dùng máy hút bụi công nghiệp và cồn Isopropyl lau sạch bề mặt nhựa epoxy; nâng cấp vỏ bọc lên IP31 có màng lọc gió.",
        solutionEn: "De-energize, vacuum de-dust, wipe surfaces with pure Isopropyl alcohol; retrofit inlet louvers with synthetic dust filters."
      }
    ]
  },
  {
    id: "sch40-seamless-pipe",
    category: "mep-plumb",
    modelType: "pipe",
    has3DModel: false,
    rating: 4.86,
    badge: "PRESSURE VESSEL",
    name: {
      vi: "Ống Thép Đúc Liền Mạch ASTM A106 Gr.B (SCH40/SCH80)",
      en: "Seamless Carbon Steel Pipe ASTM A106 Grade B (SCH40/80)"
    },
    tagline: {
      vi: "Tiêu chuẩn vàng cho đường ống hơi nóng, khí nén cao áp và dầu thủy lực",
      en: "The global engineering benchmark for high-temperature steam headers and severe fluid conduits"
    },
    tags: ["ASTM A106 Gr.B", "ASME B36.10M", "SCH40 / SCH80", "Không Mối Hàn", "Hơi Nóng Áp Cao"],
    image: "assets/images/pipe-diagram.svg",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    overview: {
      vi: "Ống thép đúc liền mạch (Seamless Carbon Steel Pipe) mác thép ASTM A106 Gr.B được chế tạo từ một phôi thép tròn đặc nung đỏ rực rồi dùng mũi đột xuyên tâm mà không có bất kỳ đường hàn nối nào. Nhờ đó, ống có cấu trúc kim loại đồng nhất 360 độ, triệt tiêu nguy cơ nứt xé dọc thân ống dưới áp lực khủng khiếp.",
      en: "ASTM A106 Grade B seamless carbon steel pipe is hot-extruded from solid cylindrical billets pierced at red-hot forging temperatures. Lacking any longitudinal or helical weld seam, its isotropic 360-degree microstructure guarantees absolute containment integrity under immense pressure surges."
    },
    workingPrinciple: {
      vi: "Khả năng chịu áp lực cao tuân theo công thức Barlow: P = (2 x S x t) / D. Trong đó cấu trúc vi mô Ferrite-Pearlite của thép A106 Gr.B mang lại giới hạn chảy tối thiểu 240 MPa (35,000 psi) và độ bền kéo 415 MPa (60,000 psi) ngay cả khi nhiệt độ chất lỏng bên trong lên tới 427°C.",
      en: "Internal bursting pressure follows Barlow's formula: P = (2·S·t)/D. The refined Ferrite-Pearlite grain morphology of A106 Gr.B yields a minimum yield strength of 240 MPa (35,000 psi) and tensile strength of 415 MPa (60,000 psi) up to 427°C fluid temperatures."
    },
    specifications: [
      { labelVi: "Tiêu chuẩn chế tạo", labelEn: "Manufacturing Specification", valueVi: "ASTM A106 / A106M Grade B", valueEn: "ASTM A106 / A106M Grade B", standard: "ASTM" },
      { labelVi: "Kích thước & Độ dày thành ống", labelEn: "Dimensional Schedule", valueVi: "DN15 đến DN600 - Bảng độ dày SCH40, SCH80, SCH160", valueEn: "1/2\" to 24\" NPS - Wall schedule SCH40, SCH80, SCH160", standard: "ASME B36.10M" },
      { labelVi: "Giới hạn nhiệt độ vận hành", labelEn: "Service Temperature Range", valueVi: "-29°C đến 427°C (-20°F đến 800°F)", valueEn: "-29°C to 427°C (-20°F to 800°F)", standard: "ASME B31.1" },
      { labelVi: "Thử nghiệm thủy tĩnh", labelEn: "Hydrostatic Pressure Test", valueVi: "100% từng cây ống được thử áp tại nhà máy từ 17 MPa đến 20 MPa", valueEn: "100% factory hydrostatic test from 17 MPa to 20 MPa", standard: "ASTM A530" },
      { labelVi: "Kiểu đầu kết nối", labelEn: "End Preparation", valueVi: "Vát mép 37.5° để hàn đối đầu (Beveled End - BE) hoặc tiện ren (NPT)", valueEn: "37.5° Beveled Ends (BE) for butt-welding or NPT threaded", standard: "ASME B16.25" }
    ],
    pros: [
      {
        titleVi: "Triệt tiêu hoàn toàn rủi ro bục vỡ đường hàn (Zero Seam Defect)",
        titleEn: "Zero Longitudinal Seam Weakness",
        descVi: "Ống hàn (ERW) luôn có vùng ảnh hưởng nhiệt (HAZ) tại mối hàn dễ bị xé rách khi búa nước; ống đúc không có mối hàn nên độ an toàn cao hơn 25%.",
        descEn: "Eliminates Heat-Affected Zone (HAZ) weld seam embrittlement common in ERW pipes, providing 100% joint efficiency factor (E=1.0).",
        scenarioVi: "Hệ thống lò hơi mang áp 10-25 bar, đường ống dẫn khí nén áp lực cao 40 bar.",
        scenarioEn: "Industrial boiler saturated steam mains, 40-bar high-pressure compressed air headers."
      },
      {
        titleVi: "Độ uốn nắn và dẻo dai tuyệt vời dưới nhiệt độ cao",
        titleEn: "High Ductility & Superior Thermal Fatigue Resilience",
        descVi: "Thép A106 Grade B chứa hàm lượng carbon và mangan cân bằng, dễ uốn nguội tạo co cong lượn và hàn gắn kết cấu ống mà không bị giòn nứt.",
        descEn: "Balanced C-Mn chemistry permits cold bending and reliable ASME Section IX weldability without preheating on standard walls.",
        scenarioVi: "Ống gia nhiệt uốn lò xo, hệ thống bypass van giảm áp.",
        scenarioEn: "Expansion loops, steam boiler reheat piping, and pressure reducing skids."
      }
    ],
    cons: [
      {
        titleVi: "Bị oxy hóa rỉ sét nếu tiếp xúc môi trường ẩm ướt không bọc sơn",
        titleEn: "Vulnerable to Atmospheric Corrosion (Rusting)",
        descVi: "Là thép carbon không có crom chống gỉ; nếu lắp đặt ngoài trời hoặc âm dưới đất mà không sơn chống rỉ 3 lớp (Primer, Intermediate, Polyurethane) sẽ bị rỉ mục sau 3-5 năm.",
        descEn: "Standard carbon steel rapidly oxidizes; buried or external uninsulated lines require rigorous 3-layer epoxy/polyurethane coatings or hot-dip galvanizing.",
        riskVi: "Bị rỉ mọt thủng lỗ kim (Pin-hole leaks) làm thất thoát áp lực hơi nóng.",
        riskEn: "Pin-hole perforation beneath wet insulation (Corrosion Under Insulation - CUI)."
      },
      {
        titleVi: "Trọng lượng rất nặng, đòi hỏi hệ giá treo ty ren chịu lực lớn",
        titleEn: "Heavy Tonnage Demanding Heavy-Duty Pipe Hangers",
        descVi: "Một cây ống đúc DN200 SCH40 dài 6 mét nặng tới gần 260 kg, đòi hỏi kết cấu giá đỡ dầm thép I/U kiên cố.",
        descEn: "A single 6-meter stick of 8-inch SCH40 pipe weighs ~260 kg empty, requiring structural unistrut or steel beam brackets.",
        riskVi: "Võng ống hoặc quá tải trần nhà xưởng nếu kỹ sư kết cấu tính sai tải trọng tĩnh.",
        riskEn: "Pipe rack sagging or ceiling anchor shear failure if live fluid weights are miscalculated."
      }
    ],
    matrixScores: {
      thermalResistance: 10,
      mechanicalStrength: 10,
      costEfficiency: 7,
      maintenanceEase: 7,
      installationSpeed: 6,
      chemicalResistance: 6
    },
    standards: [
      { code: "ASTM A106/A106M", titleVi: "Đặc tính kỹ thuật ống thép carbon đúc cho nhiệt độ cao", titleEn: "Standard Specification for Seamless Carbon Steel Pipe for High-Temperature Service", organization: "ASTM International", url: "https://www.astm.org" },
      { code: "ASME B31.1", titleVi: "Quy chuẩn đường ống dẫn năng lượng công nghiệp", titleEn: "Power Piping Code", organization: "ASME", url: "https://www.asme.org" }
    ],
    failureCases: [
      {
        titleVi: "Ăn mòn dưới lớp bảo ôn (CUI - Corrosion Under Insulation)",
        titleEn: "Corrosion Under Insulation (CUI) Perforation",
        symptomVi: "Đường ống dẫn hơi bọc bông thủy tinh bên ngoài vẫn nguyên vẹn nhưng bất ngờ nổ bục hơi 200°C làm sập trần nhà xưởng.",
        symptomEn: "Insulated steam header blew out violently with 200°C steam despite pristine outer aluminum cladding.",
        causeVi: "Nước mưa thấm qua khe hở vỏ nhôm vào đọng ướt bông khoáng, phản ứng với sắt ở 80-120°C gây rỉ sét gặm mòn thành ống từ ngoài vào trong.",
        causeEn: "Water breached cladding joint; damp mineral wool held stagnant moisture against 100°C steel, accelerating CUI by 10x.",
        solutionVi: "Bắt buộc sơn phủ lớp sơn Epoxy Phenolic chịu nhiệt lên bề mặt kim loại ống trước khi bọc vật liệu bảo ôn.",
        solutionEn: "Apply 2 coats of immersion-grade High-Temp Epoxy Novolac primer directly to steel prior to lagging."
      }
    ]
  },
  {
    id: "fm200-clean-agent",
    category: "pccc",
    modelType: "gas-cylinder",
    has3DModel: false,
    rating: 4.93,
    badge: "ZERO WATER DAMAGE",
    name: {
      vi: "Hệ Thống Chữa Cháy Khí Sạch FM-200 (HFC-227ea Clean Agent)",
      en: "FM-200 Clean Agent Fire Suppression System"
    },
    tagline: {
      vi: "Dập tắt đám cháy trong 10 giây không để lại cặn, an toàn tuyệt đối cho thiết bị điện tử",
      en: "10-second total flooding extinguishing leaving zero residue, 100% safe for active electronics"
    },
    tags: ["NFPA 2001", "ISO 14520", "HFC-227ea", "Phòng Server Datacenter", "Chữa Cháy Thể Tích"],
    image: "assets/images/fm200-diagram.svg",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    overview: {
      vi: "Hệ thống khí sạch FM-200 (hoạt chất hóa học Heptafluoropropane CF3-CHFC-CF3) là giải pháp dập lửa tối thượng cho các không gian chứa dữ liệu nhạy cảm, phòng máy chủ Server Data Center, phòng điều khiển nhà máy và phòng lưu trữ tài liệu quý giá. Khác với nước hay bọt foam, khí FM-200 dập tắt ngọn lửa mà không để lại bất kỳ giọt ẩm hay hạt cặn nào.",
      en: "The FM-200 clean agent system (chemical agent Heptafluoropropane CF3-CHFC-CF3) is the premier fire protection solution for mission-critical IT infrastructure, cloud server server halls, automated control rooms, and historical archival vaults. Unlike water or foam, FM-200 extinguishes combustion without moisture, particulate, or oily residue."
    },
    workingPrinciple: {
      vi: "Dập tắt đám cháy chủ yếu bằng cơ chế nhiệt học: Phân tử khí hấp thụ nhiệt lượng cực nhanh từ ngọn lửa làm hạ nhiệt độ phản ứng cháy xuống dưới ngưỡng duy trì; đồng thời bẻ gãy các gốc tự do hóa học (Free radicals) của chuỗi phản ứng cháy. Hệ thống được kích hoạt bằng cảm biến khói kép (Cross-zone) và xả toàn bộ bình khí chỉ trong vòng 10 giây qua các đầu phun đặc dụng.",
      en: "Extinguishes primarily through physical heat absorption at the molecular level, cooling the flame front below sustaining temperatures while chemically interrupting chain-reaction free radicals. Cross-zoned smoke detection triggers the solenoid release, discharging the entire cylinder volume within 10 seconds flat."
    },
    specifications: [
      { labelVi: "Tên hoạt chất hóa học", labelEn: "Chemical Formulation", valueVi: "Heptafluoropropane (CF3-CHFC-CF3 / HFC-227ea)", valueEn: "Heptafluoropropane (HFC-227ea)", standard: "NFPA 2001" },
      { labelVi: "Nồng độ thiết kế dập lửa", labelEn: "Design Extinguishing Concentration", valueVi: "7.0% đến 8.7% thể tích phòng", valueEn: "7.0% to 8.7% v/v (Class A & C electrical hazards)", standard: "ISO 14520" },
      { labelVi: "Thời gian xả khí quy định", labelEn: "Max Discharge Time", valueVi: "Dưới 10 giây (Tối đa 10s)", valueEn: "≤ 10.0 seconds", standard: "NFPA 2001" },
      { labelVi: "Mức an toàn sinh học (NOAEL)", labelEn: "No Observed Adverse Effect Level (NOAEL)", valueVi: "9.0% thể tích (Hoàn toàn an toàn cho con người trong phòng khi xả khí)", valueEn: "9.0% v/v (Safe for occupied spaces at design concentration)", standard: "EPA SNAP Listed" },
      { labelVi: "Áp suất nạp bình chứa", labelEn: "Super-pressurization Level", valueVi: "25 bar (360 psi) hoặc 42 bar (500 psi) bằng khí Nitơ khô N2", valueEn: "25 bar (360 psi) or 42 bar (500 psi) with dry Nitrogen", standard: "DOT 4BW / TPED" }
    ],
    pros: [
      {
        titleVi: "Không gây chập mạch hay hư hỏng thiết bị vi mạch điện tử",
        titleEn: "Zero Dielectric Conductivity - Protects Live Electronics",
        descVi: "Khí FM-200 là chất cách điện hoàn hảo; các máy chủ Cloud Server, bộ chuyển mạch Switch vẫn tiếp tục chạy mượt mà ngay cả khi khí đang xả đầy phòng.",
        descEn: "Non-conductive gaseous agent; high-density enterprise servers continue processing transactions undisturbed during full agent discharge.",
        scenarioVi: "Phòng máy chủ Data Center Tier III/IV, phòng điều khiển nhà máy điện hạt nhân.",
        scenarioEn: "Tier III/IV Cloud Datacenters, power utility telecommunication suites."
      },
      {
        titleVi: "Thời gian phục hồi sau sự cố gần như bằng 0 (Zero Downtime)",
        titleEn: "Instant Business Continuity - No Cleanup Delay",
        descVi: "Sau khi dập tắt đám cháy, chỉ cần bật quạt thông gió hút khí ra ngoài trời là phòng máy lại sạch tinh tươm, không tốn hàng tuần dọn bọt hay thay thế thiết bị rỉ sét.",
        descEn: "Post-fire recovery merely requires venting the room via purge exhaust blowers; zero residue cleaning or hardware replacement required.",
        scenarioVi: "Trụ sở giao dịch tài chính, phòng thí nghiệm công nghệ cao.",
        scenarioEn: "Financial trading nerve centers, high-tech R&D semiconductor metrology."
      }
    ],
    cons: [
      {
        titleVi: "Yêu cầu phòng bảo vệ phải kín tuyệt đối (Room Integrity Test)",
        titleEn: "Demands Strict Room Hermetic Sealing (Door Fan Test)",
        descVi: "Khí nặng hơn không khí nên sẽ bị trôi tụt ra ngoài qua khe hở cửa sổ hoặc máng cáp xuyên sàn. Phải đạt bài thử nghiệm quạt đo độ kín phòng (Blower Door Test).",
        descEn: "Dense vapor settles to the floor and escapes through unsealed cable conduits or door gaps, failing the mandatory 10-minute hold-time test.",
        riskVi: "Nồng độ khí bị tụt dưới mức dập lửa làm ngọn lửa bùng phát trở lại.",
        riskEn: "Flame reignition if room leakage drops concentration below critical threshold."
      },
      {
        titleVi: "Chi phí nạp lại khí đắt đỏ khi xả nhầm",
        titleEn: "Expensive Agent Re-Charging Penalties Upon False Alarms",
        descVi: "Mỗi bình khí nạp lại có giá từ vài nghìn đến chục nghìn USD; nếu nhân viên lỡ tay ấn nút xả khẩn cấp hoặc hệ thống cảm biến giả kích hoạt sẽ tốn kém chi phí lớn.",
        descEn: "A full cylinder recharge costs several thousand dollars; accidental discharges caused by single-sensor malfunctions represent substantial financial loss.",
        riskVi: "Tổn thất hàng trăm triệu đồng tiền nạp khí nếu thiết kế cảm biến không đạt chuẩn cross-zone.",
        riskEn: "Costly agent refills due to spurious detector trips without dual cross-confirmation."
      }
    ],
    matrixScores: {
      thermalResistance: 9,
      mechanicalStrength: 8,
      costEfficiency: 4,
      maintenanceEase: 8,
      installationSpeed: 8,
      chemicalResistance: 9
    },
    standards: [
      { code: "NFPA 2001", titleVi: "Tiêu chuẩn hệ thống chữa cháy bằng khí sạch", titleEn: "Standard on Clean Agent Fire Extinguishing Systems", organization: "NFPA", url: "https://www.nfpa.org" },
      { code: "ISO 14520-9", titleVi: "Hệ thống dập cháy bằng khí - Đặc tính hóa chất HFC-227ea", titleEn: "Gaseous fire-extinguishing systems - Physical properties: HFC 227ea", organization: "ISO", url: "https://www.iso.org" }
    ],
    failureCases: [
      {
        titleVi: "Hở máng cáp xuyên tường khiến khí tụt sạch xuống tầng hầm",
        titleEn: "Cable Penetration Breach Causing Hold-Time Failure",
        symptomVi: "Bình xả đầy phòng nhưng ngọn lửa chập điện trên tủ rack không tắt hẳn sau 5 phút.",
        symptomEn: "Full agent discharge occurred but rack fire reignited 5 minutes later.",
        causeVi: "Đội thi công mạng đục tường kéo thêm máng cáp mà không trám lại bằng vữa chống cháy ngăn khí (Firestop sealant).",
        causeEn: "Contractors penetrated perimeter wall for new fiber ducts and failed to install elastomeric firestop caulking.",
        solutionVi: "Bắt buộc thử nghiệm Door Fan Test hàng năm và trám kín toàn bộ lỗ xuyên cáp bằng keo bọt chuyên dụng.",
        solutionEn: "Perform annual NFPA 2001 Door Fan Integrity Retesting and seal all penetrations with UL-classified intumescent putty."
      }
    ]
  },
  {
    id: "cat7-sftp-industrial",
    category: "net-auto",
    modelType: "ethernet-cable",
    has3DModel: false,
    rating: 4.89,
    badge: "INTERFERENCE PROOF",
    name: {
      vi: "Cáp Mạng Công Nghiệp Bọc Giáp Kép Cat.7 S/FTP (Industrial Ethernet)",
      en: "Industrial Shielded Cat.7 S/FTP Ethernet Cable"
    },
    tagline: {
      vi: "Truyền dẫn dữ liệu 10Gbps ổn định tuyệt đối trong môi trường nhiễu điện từ biến tần cực mạnh",
      en: "10Gbps high-throughput transmission immune to severe VFD inverter electromagnetic interference"
    },
    tags: ["ISO/IEC 11801", "TIA-568-C.2", "S/FTP Giáp Kép", "Vỏ PUR Kháng Dầu", "10GbE / PROFINET"],
    image: "assets/images/cat7-diagram.svg",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    overview: {
      vi: "Cáp mạng công nghiệp Cat.7 S/FTP (Screened Fully Shielded Twisted Pair) là huyết mạch truyền dẫn dữ liệu điều khiển cho các hệ thống tự động hóa PLC, SCADA, robot công nghiệp và camera thị giác máy (Machine Vision). Khác với cáp mạng văn phòng UTP mỏng manh, Cat.7 S/FTP được trang bị lớp lá nhôm bọc riêng từng đôi dây cộng thêm lưới đồng mạ thiếc đan dày bao quanh toàn bộ.",
      en: "Industrial Cat.7 S/FTP (Screened/Foiled Twisted Pair) cable constitutes the high-reliability backbone for PLC automation, SCADA networks, industrial robotics, and AI machine vision. Unlike fragile commercial UTP office patch cables, Cat.7 S/FTP features individually foil-shielded pairs enclosed by an overall tinned copper braid."
    },
    workingPrinciple: {
      vi: "Lá nhôm bọc từng cặp dây triệt tiêu hoàn toàn hiện tượng xuyên nhiễu đầu gần (Alien Near-End Crosstalk - NEXT). Lưới đồng mạ thiếc nối đất hấp thụ các xung nhiễu điện từ trường (EMI) do biến tần động cơ lớn (VFD) và contactor hồ quang phóng ra, xả trực tiếp xuống cọc tiếp địa bảo vệ tín hiệu gói tin không bị rơi rụng (Zero packet loss).",
      en: "Individual pair foils eliminate Alien Crosstalk (ANEXT). The outer 85% coverage tinned copper wire braid captures radio frequency and electromagnetic fields radiated by Variable Frequency Drives (VFDs) and arc-welding contactors, channeling parasitic noise harmlessly to protective earth."
    },
    specifications: [
      { labelVi: "Băng thông hoạt động", labelEn: "Operating Frequency Bandwidth", valueVi: "Lên tới 600 MHz (Hỗ trợ 10 Gigabit Ethernet 10GBASE-T)", valueEn: "Up to 600 MHz (Supports 10GBASE-T 10Gbps)", standard: "ISO/IEC 11801 Class F" },
      { labelVi: "Cấu trúc chống nhiễu", labelEn: "Shielding Topology", valueVi: "S/FTP (Mỗi cặp bọc lá nhôm AL/Mylar + Toàn bộ bọc lưới đồng dệt 85%)", valueEn: "S/FTP (Individual Al-Mylar foil per pair + 85% tinned braid)", standard: "EN 50173" },
      { labelVi: "Vật liệu vỏ bọc ngoài", labelEn: "Outer Jacket Compound", valueVi: "Polyurethane (PUR) hoặc FR-LSZH kháng dầu máy cắt gọt và tia UV", valueEn: "Ruggedized Polyurethane (PUR) oil, abrasion and UV resistant", standard: "IEC 60811-2-1" },
      { labelVi: "Đường kính ruột dẫn", labelEn: "Conductor Gauge", valueVi: "23 AWG đồng đặc nguyên chất (Solid bare copper)", valueEn: "23 AWG solid bare electrolytic copper", standard: "ASTM B3" },
      { labelVi: "Độ bền uốn uốn dẻo (C-Track)", labelEn: "Flexing Life in Drag Chains", valueVi: "Chịu được 3 triệu đến 5 triệu chu kỳ uốn gập trong xích kéo máy CNC", valueEn: "Tested for 3-5 million continuous drag chain bending cycles", standard: "UL Style 20549" }
    ],
    pros: [
      {
        titleVi: "Triệt tiêu 99.9% xung nhiễu điện từ EMI từ biến tần và động cơ",
        titleEn: "99.9% EMI / RFI Immunity Near Variable Frequency Drives",
        descVi: "Có thể đi chung máng cáp với dây điện động lực 3 pha 380V trong khoảng cách ngắn mà tín hiệu truyền thông Modbus TCP/IP, PROFINET không hề bị ngắt quãng.",
        descEn: "Can safely coexist in tight raceways adjacent to 400V motor supply cables with zero cyclic redundancy check (CRC) communication faults.",
        scenarioVi: "Cạnh tủ biến tần công suất hàng trăm kW, máy hàn robot tự động.",
        scenarioEn: "Direct proximity to megawatt-class VFD banks and robotic spot-welding cells."
      },
      {
        titleVi: "Vỏ PUR siêu bền kháng dầu khoáng, dung môi và mài mòn",
        titleEn: "High-Tensile Polyurethane (PUR) Oil & Abrasion Barrier",
        descVi: "Không bị bở nhão mục nát khi ngâm trong dầu làm mát máy CNC, chịu được ma sát liên tục trong xích dẫn cáp robot di động.",
        descEn: "Impervious to coolant oil splashing and hydraulic fluids; resists mechanical abrasion inside high-speed robotic cable carriers.",
        scenarioVi: "Xưởng gia công cơ khí chính xác, cánh tay robot lắp ráp ô tô.",
        scenarioEn: "CNC machining shops, high-speed robotic pick-and-place gantry arms."
      }
    ],
    cons: [
      {
        titleVi: "Đòi hỏi bấm đầu jack mạng RJ45 bọc kim loại đồng bộ",
        titleEn: "Requires Full-Shield Metal Modular Plugs & Bonding",
        descVi: "Nếu thợ thi công bấm bằng hạt mạng nhựa thông thường không tiếp xúc với lưới giáp hoặc không nối đất vỏ switch thì tính năng chống nhiễu bị vô hiệu hóa.",
        descEn: "Terminating with cheap unshielded plastic RJ45 jacks or floating the drain wire breaks ground continuity, nullifying the shield.",
        riskVi: "Lớp giáp kim loại trở thành chiếc ăng-ten thu hút sóng nhiễu vào tín hiệu nếu không nối đất đúng cách.",
        riskEn: "Unbonded floating shields act as antennas, amplifying noise into differential signal pairs."
      },
      {
        titleVi: "Dây to cứng, khó thi công luồn ống nhỏ",
        titleEn: "Heavy-Gauge Stiff Cable Profile",
        descVi: "Đường kính ngoài cáp lớn (khoảng 7.8 - 8.5 mm) cùng 2 lớp giáp kim loại khiến sợi cáp cứng hơn hẳn Cat5e/Cat6 văn phòng.",
        descEn: "Thick 8.0mm outer diameter and dual shielding limit flexibility during tight conduit pulling.",
        riskVi: "Không thể luồn nhiều sợi cáp trong các ống ruột gà PVC kích thước nhỏ.",
        riskEn: "Requires larger conduit sizing (minimum 25mm trade size) during rough-in."
      }
    ],
    matrixScores: {
      thermalResistance: 7,
      mechanicalStrength: 9,
      costEfficiency: 6,
      maintenanceEase: 9,
      installationSpeed: 7,
      chemicalResistance: 9
    },
    standards: [
      { code: "ISO/IEC 11801", titleVi: "Hệ thống cáp truyền thông thông tin công nghiệp", titleEn: "Information technology - Generic cabling for customer premises", organization: "ISO/IEC", url: "https://www.iso.org" },
      { code: "PROFINET Guideline", titleVi: "Hướng dẫn lắp đặt cáp truyền thông chuẩn PROFINET", titleEn: "PROFINET Cabling and Interconnection Technology Guideline", organization: "PI International", url: "https://www.profibus.com" }
    ],
    failureCases: [
      {
        titleVi: "Tạo vòng lặp tiếp đất (Ground Loop) làm cháy cổng mạng Switch",
        titleEn: "Ground Loop Current Burning Out Switch PHY Transceivers",
        symptomVi: "Cổng switch mạng PLC bị chết ngắt quãng, đo thấy vỏ cáp mạng ấm lên bất thường.",
        symptomEn: "Repeated port PHY chip burnout on central switch; cable shielding feels warm.",
        causeVi: "Hai đầu cáp cắm vào hai tủ điện ở hai xưởng khác nhau có điện thế tiếp đất chênh lệch 15V, khiến dòng điện san bằng chạy qua lớp lưới giáp cáp mạng.",
        causeEn: "Both shield ends grounded to separate substations with a 15V ground potential difference, driving circulating shield currents.",
        solutionVi: "Thực hiện nối đất trực tiếp 1 đầu tại switch trung tâm, đầu còn lại nối đất qua tụ điện cao tần (RC termination) theo khuyến cáo IEC 61918.",
        solutionEn: "Apply single-point DC grounding or decouple one end via a high-voltage ceramic capacitor RC network."
      }
    ]
  },
  {
    id: "epoxy-self-leveling-floor",
    category: "infra",
    modelType: "floor",
    has3DModel: false,
    rating: 4.87,
    badge: "CLEANROOM SURFACE",
    name: {
      vi: "Sàn Tự San Phẳng Epoxy Kháng Hóa Chất (Self-Leveling Epoxy Flooring)",
      en: "Heavy-Duty Chemical Resistant Self-Leveling Epoxy"
    },
    tagline: {
      vi: "Mặt sàn nguyên khối bóng gương chịu tải trọng xe nâng 15 tấn không phát sinh bụi",
      en: "Seamless high-gloss monolithic floor sustaining 15-ton forklift traffic with zero particle shedding"
    },
    tags: ["ISO 14644 (Class 100)", "GMP / HACCP", "Tự San Phẳng 2-3mm", "Kháng Axit / Kiềm", "Chịu Tải Nặng"],
    image: "assets/images/epoxy-diagram.svg",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    overview: {
      vi: "Sàn tự san phẳng Epoxy (Self-Leveling Epoxy System) là giải pháp tiêu chuẩn bắt buộc cho các xưởng chế biến thực phẩm, phòng sạch sản xuất chip điện tử, nhà máy dược phẩm đạt chuẩn GMP-WHO và xưởng lắp ráp cơ khí chính xác. Khác với sơn lăn mỏng thông thường, hệ sàn này thi công bằng phương pháp cào cán màng dày 2mm - 3mm.",
      en: "Self-leveling epoxy flooring is the mandatory industrial benchmark for food processing, semiconductor fabs, GMP-WHO pharmaceutical labs, and precision aerospace cleanrooms. Unlike thin roll-coat paints, it is troweled at 2mm to 3mm thickness, self-healing under gravity into a mirror-like monolithic surface."
    },
    workingPrinciple: {
      vi: "Nhựa epoxy Bisphenol-A phản ứng trùng ngưng hoàn toàn với chất đóng rắn gốc Cycloaliphatic Amine tạo nên mạng lưới polyme liên kết không gian 3 chiều đặc khít. Bề mặt sau khi đóng rắn không có bất kỳ lỗ rỗng tế vi nào, ngăn chặn 100% hóa chất ngấm vào bê tông và triệt tiêu khả năng phát sinh bụi cát.",
      en: "Bisphenol-A resin chemically cross-links with cycloaliphatic amine hardeners into an impenetrable dense 3D polymer lattice. The fully cured surface has zero porosity, blocking acid/alkali migration into the concrete substrate and permanently stopping cement dust generation."
    },
    specifications: [
      { labelVi: "Độ dày thi công", labelEn: "Application Thickness", valueVi: "2.0 mm đến 3.0 mm (Hệ 3 lớp: Lót, Cát trung gian, Tự san phẳng phủ)", valueEn: "2.0 mm to 3.0 mm (3-coat system: Primer, Body mortar, Finish)", standard: "ASTM C881" },
      { labelVi: "Cường độ nén", labelEn: "Compressive Strength", valueVi: "≥ 75 N/mm² (Gấp đôi bê tông mác 350)", valueEn: "≥ 75 N/mm² (Over 2x standard 35MPa concrete)", standard: "ASTM D695" },
      { labelVi: "Cường độ bám dính bê tông", labelEn: "Adhesion to Concrete", valueVi: "> 2.5 N/mm² (Phá hủy kết cấu bê tông trước khi tróc sơn)", valueEn: "> 2.5 N/mm² (Concrete substrate cohesion failure)", standard: "ASTM D4541" },
      { labelVi: "Kháng mài mòn bánh xe", labelEn: "Abrasion Resistance (Taber)", valueVi: "< 50 mg hao mòn sau 1000 chu kỳ tải đá CS-17 bánh tải 1000g", valueEn: "< 50 mg loss after 1000 cycles (CS-17 wheel, 1000g load)", standard: "ASTM D4060" },
      { labelVi: "Độ bóng quang học", labelEn: "Specular Gloss (60°)", valueVi: "> 95% (Tăng phản xạ ánh sáng tự nhiên tiết kiệm đèn điện 30%)", valueEn: "> 95% (High reflectance reduces lighting energy 30%)", standard: "ASTM D523" }
    ],
    pros: [
      {
        titleVi: "Bề mặt liền khối không khe co giãn, đạt chuẩn phòng sạch GMP",
        titleEn: "Monolithic Joint-Free Surface (GMP Cleanroom Ready)",
        descVi: "Không có đường ron hay khe nứt để vi khuẩn, nấm mốc hoặc dầu mỡ tích tụ; dễ dàng dùng xe lau sàn tẩy rửa sạch bóng trong tích tắc.",
        descEn: "Seamless continuous finish leaves zero crevices for bacteria or grease entrapment; easily sterilized using industrial auto-scrubbers.",
        scenarioVi: "Nhà máy sản xuất thuốc tiêm GMP, xưởng chế biến xúc xích HACCP.",
        scenarioEn: "GMP sterile injectables suites, HACCP meat processing packaging floors."
      },
      {
        titleVi: "Chịu tải trọng nặng xe nâng Forklift di chuyển liên tục",
        titleEn: "Extreme Heavy-Duty Forklift & Pallet Jack Resistance",
        descVi: "Cường độ nén 75 MPa cho phép các dòng xe nâng hàng 5-15 tấn quay đầu tại chỗ mà không làm nứt vỡ hay lún bề mặt sàn.",
        descEn: "75 MPa compressive strength easily withstands repetitive pivoting motions of 10-ton polyurethane forklift tires.",
        scenarioVi: "Kho vận trung chuyển Logistics, xưởng đúc ép kim loại.",
        scenarioEn: "Intensive 24/7 cross-dock logistics hubs, heavy stamping plants."
      }
    ],
    cons: [
      {
        titleVi: "Yêu cầu xử lý mác bê tông và độ ẩm cốt sàn cực kỳ khắt khe",
        titleEn: "Zero Tolerance for Concrete Substrate Moisture (>4%)",
        descVi: "Nếu độ ẩm sàn bê tông vượt quá 4% hoặc không có màng chống thấm ngược PE bên dưới, áp suất hơi nước bốc lên sẽ làm phồng rộp (Osmotic Blistering) toàn bộ mặt sàn.",
        descEn: "Concrete slab relative humidity exceeding 4% without an underside vapor barrier triggers osmotic vapor pressure, blowing blister craters.",
        riskVi: "Bong tróc mảng lớn từng mét vuông sau 6 tháng đưa vào sử dụng.",
        riskEn: "Massive delamination and bubbling requiring complete surface grinding and re-pouring."
      },
      {
        titleVi: "Dễ trơn trượt khi bị dính nước hoặc dầu mỡ",
        titleEn: "Slip Hazard Under Wet or Oily Conditions",
        descVi: "Mặt sàn bóng gương nhẵn thín có hệ số ma sát trượt thấp khi bị ướt; cần rải thêm cát oxit nhôm chống trượt tại khu vực có nước rửa.",
        descEn: "Ultra-smooth mirror gloss exhibits low wet traction; requires aluminum oxide quartz broadcasting in wet-wash washdown bays.",
        riskVi: "Công nhân trượt ngã nếu không đi giày bảo hộ chuyên dụng chống trượt.",
        riskEn: "Workplace slip-and-fall injuries if workers wear smooth-soled street shoes."
      }
    ],
    matrixScores: {
      thermalResistance: 6,
      mechanicalStrength: 9,
      costEfficiency: 7,
      maintenanceEase: 10,
      installationSpeed: 7,
      chemicalResistance: 9
    },
    standards: [
      { code: "ASTM C881", titleVi: "Quy chuẩn chất liên kết epoxy cho bê tông", titleEn: "Standard Specification for Epoxy-Resin-Base Bonding Systems for Concrete", organization: "ASTM", url: "https://www.astm.org" },
      { code: "ISO 14644-1", titleVi: "Tiêu chuẩn phân loại phòng sạch và môi trường kiểm soát", titleEn: "Cleanrooms and associated controlled environments", organization: "ISO", url: "https://www.iso.org" }
    ],
    failureCases: [
      {
        titleVi: "Nổ bong bóng rộp sàn do không mài mở bọng bê tông (Shot Blasting)",
        titleEn: "Catastrophic Delamination from Lack of Mechanical Profiling",
        symptomVi: "Lớp epoxy dày 3mm bị tróc từng mảng to như manh chiếu khi xe nâng chở hàng chạy qua.",
        symptomEn: "Epoxy skin peeled off cleanly like sheets under loaded forklift traffic.",
        causeVi: "Nhà thầu không dùng máy bắn bi (Shot Blaster) mài sạch lớp bụi xi măng yếu (Laitance) trên mặt bê tông trước khi sơn lót.",
        causeEn: "Contractor merely acid-washed instead of shot-blasting, leaving weak surface laitance intact.",
        solutionVi: "Bắt buộc mài sàn đạt chuẩn ICRI CSP-3 và đo độ bám dính bằng máy kéo thử Elcometer trước khi cán lớp hoàn thiện.",
        solutionEn: "Enforce ICRI CSP-3 mechanical surface profile shot-blasting and pull-off adhesion testing per ASTM D4541."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MATERIALS;
}
