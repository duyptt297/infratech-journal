// Danh mục vật tư kỹ thuật công nghiệp / Industrial Material Categories
const CATEGORIES = [
  {
    id: "all",
    icon: "layers",
    name: {
      vi: "Tất Cả Danh Mục",
      en: "All Categories"
    },
    description: {
      vi: "Toàn bộ cơ sở dữ liệu vật tư và linh kiện công nghiệp hiện đại",
      en: "Complete modern industrial materials and technical components database"
    },
    count: 12
  },
  {
    id: "infra",
    icon: "building-2",
    badge: "CIVIL",
    accent: "#38bdf8",
    name: {
      vi: "Cơ Sở Hạ Tầng & Kết Cấu",
      en: "Civil & Infrastructure"
    },
    description: {
      vi: "Sàn epoxy chịu tải, panel chống cháy PIR, kết cấu thép tiền chế và vách ngăn kỹ thuật",
      en: "Heavy-duty epoxy flooring, PIR fire panels, pre-engineered steel and partitions"
    },
    count: 2
  },
  {
    id: "mep-elec",
    icon: "zap",
    badge: "ELECTRICAL",
    accent: "#f59e0b",
    name: {
      vi: "Điện Động Lực & Phân Phối",
      en: "Electrical & Power Systems"
    },
    description: {
      vi: "Thanh dẫn Busway compact, cáp chống cháy chịu 950°C, máy biến áp khô Cast Resin",
      en: "Compact Busway trunking, 950°C fire-resistant cables, Cast Resin dry transformers"
    },
    count: 3
  },
  {
    id: "mep-hvac",
    icon: "fan",
    badge: "HVAC",
    accent: "#06b6d4",
    name: {
      vi: "Cơ Điện Lạnh & HVAC",
      en: "Mechanical & HVAC"
    },
    description: {
      vi: "Hệ thống Chiller giải nhiệt nước, ống gió chống cháy chuẩn EI, van điều khiển PICV",
      en: "Water-cooled Chiller systems, EI fire-rated air ducts, PICV control valves"
    },
    count: 2
  },
  {
    id: "mep-plumb",
    icon: "droplets",
    badge: "PLUMBING",
    accent: "#10b981",
    name: {
      vi: "Đường Ống Công Nghệ & Van",
      en: "Process Piping & Valves"
    },
    description: {
      vi: "Ống thép đúc ASTM A106 SCH40/80, van cổng mặt bích, bẫy hơi đồng tiền nhiệt động",
      en: "ASTM A106 SCH40/80 seamless pipes, flanged gate valves, thermodynamic steam traps"
    },
    count: 2
  },
  {
    id: "pccc",
    icon: "flame",
    badge: "FIRE SAFETY",
    accent: "#ef4444",
    name: {
      vi: "PCCC & An Toàn Sinh Mạng",
      en: "Fire Safety & Protection"
    },
    description: {
      vi: "Đầu phun Sprinkler phản ứng nhanh, van báo động thủy lực, hệ chữa cháy khí sạch FM-200",
      en: "Fast-response Sprinkler heads, hydraulic alarm valves, FM-200 clean agent systems"
    },
    count: 2
  },
  {
    id: "net-auto",
    icon: "cpu",
    badge: "AUTOMATION",
    accent: "#8b5cf6",
    name: {
      vi: "Mạng Công Nghiệp & Tự Động Hóa",
      en: "Industrial Network & OT"
    },
    description: {
      vi: "Cáp mạng công nghiệp Cat.7 S/FTP chống nhiễu, switch DIN-Rail chuẩn Ruggedized",
      en: "Shielded Cat.7 S/FTP industrial Ethernet, ruggedized DIN-Rail switches, HART/IO-Link"
    },
    count: 1
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CATEGORIES;
}
