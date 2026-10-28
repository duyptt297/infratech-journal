// Bộ hiển thị mô hình 3D tương tác (Interactive 3D Engineering Model Viewer)
// Hỗ trợ WebGL Three.js kết hợp tương tác cảm ứng / chuột, chế độ bóc tách (Exploded View) và Callouts
class TechnicalViewer3D {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentModelType = "gate-valve";
    this.isRotating = true;
    this.isExploded = false;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.modelGroup = null;
    this.parts = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotationX = 0.3;
    this.targetRotationY = 0.5;
    this.currentRotationX = 0.3;
    this.currentRotationY = 0.5;
    this.zoomLevel = 1.0;
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.animationFrameId = null;

    this.hotspotsData = {
      "gate-valve": [
        { titleVi: "Vô Lăng Quay (Handwheel)", titleEn: "Cast Steel Handwheel", descVi: "Đúc bằng thép chịu lực mô-men xoắn cao, có chỉ thị chiều MỞ/ĐÓNG.", descEn: "High-torque cast steel wheel with embossed Open/Close indicators." },
        { titleVi: "Trục Ty Ren Thang (Acme Rising Stem)", titleEn: "Acme Rising Stem", descVi: "Thép không gỉ 410 chống mài mòn, tiện ren thang tịnh tiến đĩa van.", descEn: "410 Stainless steel stem with precision Acme threads for smooth travel." },
        { titleVi: "Nắp Van & Cổ Chèn (Bonnet & Gland)", titleEn: "Bolted Bonnet & Gland Packing", descVi: "Chứa các vòng graphite bện sợi Inconel chống rò rỉ khí áp cao.", descEn: "Houses die-formed graphite rings with Inconel mesh for low-emission seal." },
        { titleVi: "Đĩa Chêm Dẻo (Flexible Wedge)", titleEn: "Flexible Wedge Disc", descVi: "Cửa van chêm chặt vào 2 vành đệm, bù giãn nở nhiệt tránh kẹt.", descEn: "Tapered wedge seating tightly into twin hardfaced Stellite rings." },
        { titleVi: "Mặt Bích Tiêu Chuẩn (ASME B16.5 Flange)", titleEn: "ASME B16.5 RF Flange", descVi: "Khoét lỗ bu-lông chuẩn Class 150/300 bề mặt gờ nổi tiếp xúc gioăng kim loại.", descEn: "Class 150/300 raised face with serrated spiral phonographic finish." }
      ],
      "fire-cable": [
        { titleVi: "Lớp 1: Ruột Đồng Ủ Mềm Class 2", titleEn: "Core 1: Electrolytic Annealed Copper", descVi: "Đồng 99.99% dẫn điện tối đa, xoắn tròn định hình chịu lực kéo.", descEn: "99.99% high-purity Cu strands for optimal conductivity and flex life." },
        { titleVi: "Lớp 2: Băng Mica Phlogopite Chịu Nhiệt 950°C", titleEn: "Core 2: Dual Phlogopite Mica Tape", descVi: "Trái tim chống cháy: Thủy tinh hóa thành gốm khoáng vô cơ khi gặp lửa.", descEn: "Mission-critical barrier: Vitrifies into ceramic insulator in 950°C blaze." },
        { titleVi: "Lớp 3: Cách Điện XLPE Liên Kết Chéo", titleEn: "Core 3: Cross-Linked Polyethylene (XLPE)", descVi: "Độ bền điện môi cao, chịu nhiệt độ làm việc liên tục 90°C.", descEn: "Superior dielectric strength sustaining 90°C continuous service." },
        { titleVi: "Lớp 4: Giáp Sợi Thép Tròn Chống Va Đập (SWA)", titleEn: "Core 4: Steel Wire Armor (SWA)", descVi: "Bảo vệ cáp khỏi va quẹt của xe cơ giới và sức kéo căng lớn.", descEn: "Heavy galvanized steel wires shielding cable against mechanical crushed loads." },
        { titleVi: "Lớp 5: Vỏ Ngoài Chậm Cháy LSZH Màu Cam", titleEn: "Core 5: Safety Orange LSZH Outer Jacket", descVi: "Không sinh khói đen mù mịt và hoàn toàn không sinh axit Halogen độc hại.", descEn: "Zero-halogen thermoplastic emitting zero corrosive acid gases during fires." }
      ],
      "sprinkler": [
        { titleVi: "Bóng Thủy Tinh Nhạy Nhiệt 68°C (Red Bulb)", titleEn: "68°C Red Quartz Bulb", descVi: "Chứa dung dịch cồn dãn nở chính xác, vỡ tan giải phóng nút bịt khi đạt 68°C.", descEn: "Hermetically sealed thermo-fluid bursts precisely at 68°C fire heat." },
        { titleVi: "Đĩa Định Hướng Tán Nước (Deflector Plate)", titleEn: "Precision Umbrella Deflector", descVi: "Rãnh khía hình hoa dập mỏng xòe tia nước hình nón đường kính 4-6 mét.", descEn: "Engineered multi-tooth deflector spreading full-coverage conical water umbrella." },
        { titleVi: "Khung Đồng Thau Đúc Rèn (Forged Brass Frame)", titleEn: "Heavy-Gauge Forged Brass Frame", descVi: "Chịu áp lực nước 175 psi (12 bar) liên tục trong 50 năm không mỏi kim loại.", descEn: "High-integrity forged frame sustaining 175 psi pressure for decades." },
        { titleVi: "Nút Bịt Đệm Lò Xo Belleville (Spring Seal)", titleEn: "Belleville Spring Teflon Seal", descVi: "Đĩa lò xo niken mạ teflon ngăn ngừa rò rỉ nước tuyệt đối trong điều kiện bình thường.", descEn: "Nickel-alloy Belleville spring with Teflon seal preventing static drip." }
      ],
      "busway": [
        { titleVi: "Thanh Dẫn Đồng Mạ Thiếc ETP 99.9%", titleEn: "Electro-Tin Plated Copper Bars", descVi: "Mặt tiếp xúc phẳng lì ép sát triệt tiêu điện kháng cảm ứng sụt áp.", descEn: "Ultra-flat busbars clamped in sandwich layout to kill reactive reactance." },
        { titleVi: "Vỏ Nhôm Đùn Định Hình Tản Nhiệt", titleEn: "Extruded Aluminum Heatsink Housing", descVi: "Vừa làm vỏ bảo vệ IP54/66 vừa đóng vai trò cánh tản nhiệt tự nhiên.", descEn: "Dual-piece extruded housing acting as continuous integral heat radiator." },
        { titleVi: "Lớp Cách Điện Màng Mylar / Epoxy Class F", titleEn: "Class F Mylar / Epoxy Insulation", descVi: "Cách điện giữa các pha chịu nhiệt 155°C chống phóng điện hồ quang.", descEn: "155°C Class F film barrier withstanding 5000V dielectric flashover tests." },
        { titleVi: "Bu-lông Lực Hai Đầu Bẻ Khớp (Shear Bolt)", titleEn: "Calibrated Shear-Head Joint Bolt", descVi: "Tự động gãy đầu lục giác khi đạt chuẩn lực 70 N.m đảm bảo tiếp xúc hoàn hảo.", descEn: "Outer hex snaps off cleanly at 70 N.m guaranteeing uniform joint pressure." }
      ]
    };
  }

  init() {
    if (!this.container) return;
    this.container.innerHTML = "";

    // Kiểm tra hỗ trợ Three.js
    if (typeof THREE !== 'undefined') {
      this.initThreeJS();
    } else {
      this.initCanvasFallback();
    }

    this.renderHotspots();
    this.setupEventListeners();
  }

  initThreeJS() {
    const width = this.container.clientWidth || 600;
    const height = this.container.clientHeight || 450;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0f1d);

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 5, 12);
    this.camera.lookAt(0, 0, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 1.2);
    dirLight1.position.set(5, 10, 7);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xff6b00, 0.8);
    dirLight2.position.set(-5, -5, -5);
    this.scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffffff, 1.0, 50);
    pointLight.position.set(0, 8, 4);
    this.scene.add(pointLight);

    // Model Container
    this.modelGroup = new THREE.Group();
    this.scene.add(this.modelGroup);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(16, 20, 0x00f0ff, 0x1e293b);
    gridHelper.position.y = -3.2;
    this.scene.add(gridHelper);

    // Build Current Model
    this.buildModel(this.currentModelType);

    // Start Animation Loop
    this.animate();
  }

  buildModel(type) {
    if (!this.modelGroup) return;

    // Clear previous parts
    while (this.modelGroup.children.length > 0) {
      const obj = this.modelGroup.children[0];
      this.modelGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    }
    this.parts = [];

    if (type === "gate-valve") {
      this.buildGateValve();
    } else if (type === "fire-cable") {
      this.buildFireCable();
    } else if (type === "sprinkler") {
      this.buildSprinkler();
    } else if (type === "busway") {
      this.buildBusway();
    }
  }

  buildGateValve() {
    const valveGroup = new THREE.Group();

    // Steel material
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.8,
      roughness: 0.3
    });
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.2
    });
    const redMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      metalness: 0.4,
      roughness: 0.4
    });
    const darkSteel = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.7,
      roughness: 0.5
    });

    // 1. Valve Body Pipe
    const bodyGeom = new THREE.CylinderGeometry(1.4, 1.4, 4.5, 32);
    const bodyMesh = new THREE.Mesh(bodyGeom, steelMat);
    bodyMesh.rotation.z = Math.PI / 2;
    bodyMesh.position.y = -1;
    valveGroup.add(bodyMesh);

    // 2. Left & Right Flanges
    const flangeGeom = new THREE.CylinderGeometry(2.2, 2.2, 0.4, 32);
    const leftFlange = new THREE.Mesh(flangeGeom, darkSteel);
    leftFlange.rotation.z = Math.PI / 2;
    leftFlange.position.set(-2.25, -1, 0);
    valveGroup.add(leftFlange);

    const rightFlange = leftFlange.clone();
    rightFlange.position.set(2.25, -1, 0);
    valveGroup.add(rightFlange);

    // 3. Central Bonnet Cavity
    const cavityGeom = new THREE.CylinderGeometry(1.6, 1.3, 2.0, 32);
    const cavityMesh = new THREE.Mesh(cavityGeom, steelMat);
    cavityMesh.position.set(0, 0, 0);
    valveGroup.add(cavityMesh);

    // 4. Bonnet Top Assembly (Explodable UP)
    const bonnetAssembly = new THREE.Group();
    bonnetAssembly.userData = { explodeOffset: new THREE.Vector3(0, 2.2, 0) };

    const bonnetPlateGeom = new THREE.CylinderGeometry(1.7, 1.7, 0.3, 32);
    const bonnetPlate = new THREE.Mesh(bonnetPlateGeom, darkSteel);
    bonnetPlate.position.set(0, 1.1, 0);
    bonnetAssembly.add(bonnetPlate);

    // Yoke legs
    const yokeLegGeom = new THREE.CylinderGeometry(0.18, 0.18, 2.4, 16);
    const yokeLeg1 = new THREE.Mesh(yokeLegGeom, steelMat);
    yokeLeg1.position.set(-0.8, 2.2, 0);
    bonnetAssembly.add(yokeLeg1);

    const yokeLeg2 = yokeLeg1.clone();
    yokeLeg2.position.set(0.8, 2.2, 0);
    bonnetAssembly.add(yokeLeg2);

    // Yoke top head
    const yokeHeadGeom = new THREE.BoxGeometry(2.0, 0.4, 1.2);
    const yokeHead = new THREE.Mesh(yokeHeadGeom, steelMat);
    yokeHead.position.set(0, 3.4, 0);
    bonnetAssembly.add(yokeHead);

    valveGroup.add(bonnetAssembly);
    this.parts.push(bonnetAssembly);

    // 5. Rising Stem (Trục ty ren)
    const stemGeom = new THREE.CylinderGeometry(0.15, 0.15, 4.2, 16);
    const stemMesh = new THREE.Mesh(stemGeom, brassMat);
    stemMesh.position.set(0, 1.5, 0);
    stemMesh.userData = { explodeOffset: new THREE.Vector3(0, 1.2, 0) };
    valveGroup.add(stemMesh);
    this.parts.push(stemMesh);

    // 6. Handwheel (Explodable UP high)
    const handwheelAssembly = new THREE.Group();
    handwheelAssembly.userData = { explodeOffset: new THREE.Vector3(0, 3.5, 0) };

    const wheelRimGeom = new THREE.TorusGeometry(1.6, 0.18, 16, 32);
    const wheelRim = new THREE.Mesh(wheelRimGeom, redMat);
    wheelRim.rotation.x = Math.PI / 2;
    wheelRim.position.set(0, 3.8, 0);
    handwheelAssembly.add(wheelRim);

    // Spokes
    for (let i = 0; i < 4; i++) {
      const spokeGeom = new THREE.CylinderGeometry(0.08, 0.08, 1.5, 8);
      const spoke = new THREE.Mesh(spokeGeom, redMat);
      spoke.rotation.z = (i * Math.PI) / 4;
      spoke.rotation.x = Math.PI / 2;
      spoke.position.set(0, 3.8, 0);
      handwheelAssembly.add(spoke);
    }
    valveGroup.add(handwheelAssembly);
    this.parts.push(handwheelAssembly);

    // 7. Wedge Gate (Explodable DOWN)
    const wedgeGeom = new THREE.CylinderGeometry(1.1, 0.9, 1.2, 4);
    const wedgeMesh = new THREE.Mesh(wedgeGeom, brassMat);
    wedgeMesh.rotation.y = Math.PI / 4;
    wedgeMesh.position.set(0, -0.9, 0);
    wedgeMesh.userData = { explodeOffset: new THREE.Vector3(0, -1.8, 0) };
    valveGroup.add(wedgeMesh);
    this.parts.push(wedgeMesh);

    this.modelGroup.add(valveGroup);
  }

  buildFireCable() {
    const cableGroup = new THREE.Group();
    cableGroup.rotation.z = Math.PI / 3;

    // Layer Materials
    const copperMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.95, roughness: 0.15 });
    const micaMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, metalness: 0.3, roughness: 0.5, transparent: true, opacity: 0.9 });
    const xlpeMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, metalness: 0.1, roughness: 0.7 });
    const steelArmorMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2, wireframe: false });
    const lszhMat = new THREE.MeshStandardMaterial({ color: 0xf97316, metalness: 0.2, roughness: 0.4 });

    // Step-cut staggered cylinders
    // 1. Bare Copper core
    const c1 = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 7.0, 32), copperMat);
    c1.position.y = 0;
    cableGroup.add(c1);

    // 2. Mica tape layer
    const c2 = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 5.5, 32), micaMat);
    c2.position.y = -0.75;
    c2.userData = { explodeOffset: new THREE.Vector3(0.5, 0, 0) };
    cableGroup.add(c2);
    this.parts.push(c2);

    // 3. XLPE Insulation
    const c3 = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.68, 4.2, 32), xlpeMat);
    c3.position.y = -1.4;
    c3.userData = { explodeOffset: new THREE.Vector3(1.0, 0, 0) };
    cableGroup.add(c3);
    this.parts.push(c3);

    // 4. Steel Wire Armor
    const c4 = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 3.0, 24), steelArmorMat);
    c4.position.y = -2.0;
    c4.userData = { explodeOffset: new THREE.Vector3(1.5, 0, 0) };
    cableGroup.add(c4);
    this.parts.push(c4);

    // 5. Orange LSZH Sheath
    const c5 = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 2.0, 32), lszhMat);
    c5.position.y = -2.5;
    c5.userData = { explodeOffset: new THREE.Vector3(2.0, 0, 0) };
    cableGroup.add(c5);
    this.parts.push(c5);

    this.modelGroup.add(cableGroup);
  }

  buildSprinkler() {
    const sprinklerGroup = new THREE.Group();

    const brassMat = new THREE.MeshStandardMaterial({ color: 0xeab308, metalness: 0.85, roughness: 0.25 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.95, roughness: 0.1 });
    const redFluidMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.1, transparent: true, opacity: 0.85 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, transparent: true, opacity: 0.4 });

    // 1. Threaded Base (Top Nipple)
    const threadGeom = new THREE.CylinderGeometry(0.6, 0.65, 1.2, 24);
    const threadMesh = new THREE.Mesh(threadGeom, brassMat);
    threadMesh.position.y = 1.8;
    sprinklerGroup.add(threadMesh);

    // Hex wrench flat
    const hexGeom = new THREE.CylinderGeometry(0.85, 0.85, 0.4, 6);
    const hexMesh = new THREE.Mesh(hexGeom, brassMat);
    hexMesh.position.y = 1.0;
    sprinklerGroup.add(hexMesh);

    // 2. Twin Frame Arms
    const armGeom = new THREE.TorusGeometry(1.1, 0.12, 16, 32, Math.PI);
    const frameArms = new THREE.Mesh(armGeom, chromeMat);
    frameArms.rotation.z = Math.PI;
    frameArms.position.y = 1.0;
    sprinklerGroup.add(frameArms);

    // 3. Red Glass Bulb (Explodable outward/down)
    const bulbGroup = new THREE.Group();
    bulbGroup.userData = { explodeOffset: new THREE.Vector3(0, -1.0, 0) };

    const bulbGlassGeom = new THREE.CylinderGeometry(0.18, 0.18, 1.4, 16);
    const bulbGlass = new THREE.Mesh(bulbGlassGeom, glassMat);
    bulbGroup.add(bulbGlass);

    const fluidCoreGeom = new THREE.CylinderGeometry(0.12, 0.12, 1.2, 16);
    const fluidCore = new THREE.Mesh(fluidCoreGeom, redFluidMat);
    bulbGroup.add(fluidCore);

    bulbGroup.position.y = 0.0;
    sprinklerGroup.add(bulbGroup);
    this.parts.push(bulbGroup);

    // 4. Umbrella Deflector (Explodable DOWN)
    const deflectorGroup = new THREE.Group();
    deflectorGroup.userData = { explodeOffset: new THREE.Vector3(0, -2.5, 0) };

    const deflectorGeom = new THREE.CylinderGeometry(1.3, 1.0, 0.1, 18);
    const deflectorMesh = new THREE.Mesh(deflectorGeom, chromeMat);
    deflectorGroup.add(deflectorMesh);

    // Deflector prongs
    for (let i = 0; i < 8; i++) {
      const toothGeom = new THREE.BoxGeometry(0.15, 0.08, 0.5);
      const tooth = new THREE.Mesh(toothGeom, chromeMat);
      tooth.rotation.y = (i * Math.PI) / 4;
      tooth.position.set(Math.sin((i * Math.PI) / 4) * 1.3, 0, Math.cos((i * Math.PI) / 4) * 1.3);
      deflectorGroup.add(tooth);
    }

    deflectorGroup.position.y = -1.1;
    sprinklerGroup.add(deflectorGroup);
    this.parts.push(deflectorGroup);

    this.modelGroup.add(sprinklerGroup);
  }

  buildBusway() {
    const buswayGroup = new THREE.Group();

    const alHousingMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8, roughness: 0.3 });
    const copperMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.95, roughness: 0.2 });
    const boltMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.1 });
    const mylarMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 });

    // 1. Top Aluminum Housing (Explodable UP)
    const topHousing = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.35, 6.0), alHousingMat);
    topHousing.position.set(0, 1.1, 0);
    topHousing.userData = { explodeOffset: new THREE.Vector3(0, 1.8, 0) };
    buswayGroup.add(topHousing);
    this.parts.push(topHousing);

    // 2. Bottom Aluminum Housing (Explodable DOWN)
    const bottomHousing = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.35, 6.0), alHousingMat);
    bottomHousing.position.set(0, -1.1, 0);
    bottomHousing.userData = { explodeOffset: new THREE.Vector3(0, -1.8, 0) };
    buswayGroup.add(bottomHousing);
    this.parts.push(bottomHousing);

    // 3. Phase Copper Busbars (L1, L2, L3, Neutral) - Explodable LATERAL
    const phases = [-0.6, -0.2, 0.2, 0.6];
    phases.forEach((xPos, idx) => {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.6, 6.2), copperMat);
      bar.position.set(xPos, 0, 0);
      bar.userData = { explodeOffset: new THREE.Vector3(xPos * 1.8, 0, 0) };
      buswayGroup.add(bar);
      this.parts.push(bar);

      // Insulation sheets
      const sheet = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.7, 5.8), mylarMat);
      sheet.position.set(xPos + 0.12, 0, 0);
      buswayGroup.add(sheet);
    });

    // 4. Joint Bolt Stack
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 3.2, 16), boltMat);
    bolt.position.set(0, 0, 1.5);
    bolt.userData = { explodeOffset: new THREE.Vector3(0, 2.5, 0) };
    buswayGroup.add(bolt);
    this.parts.push(bolt);

    this.modelGroup.add(buswayGroup);
  }

  initCanvasFallback() {
    // 2D High-Tech Canvas Renderer Fallback
    const canvas = document.createElement("canvas");
    canvas.width = this.container.clientWidth || 600;
    canvas.height = this.container.clientHeight || 450;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    this.container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let angle = 0;

    const render = () => {
      ctx.fillStyle = "#0a0f1d";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Tech Grid
      ctx.strokeStyle = "rgba(0, 240, 255, 0.1)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw Isometric Blueprint wireframe
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      const offsetExplode = this.isExploded ? 45 : 0;
      angle += this.isRotating ? 0.015 : 0;

      // Draw interactive schematic
      ctx.strokeStyle = "#00f0ff";
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(14, 165, 233, 0.15)";

      const w = 180;
      const h = 120;
      const rot = Math.sin(angle) * 0.3;

      ctx.rotate(rot);

      // Component boxes
      ctx.strokeRect(-w / 2, -h / 2 - offsetExplode, w, 40);
      ctx.fillRect(-w / 2, -h / 2 - offsetExplode, w, 40);

      ctx.fillStyle = "rgba(245, 158, 11, 0.2)";
      ctx.strokeStyle = "#f59e0b";
      ctx.strokeRect(-w / 2, -10, w, 50);
      ctx.fillRect(-w / 2, -10, w, 50);

      ctx.fillStyle = "rgba(239, 68, 68, 0.2)";
      ctx.strokeStyle = "#ef4444";
      ctx.strokeRect(-w / 2, 50 + offsetExplode, w, 40);
      ctx.fillRect(-w / 2, 50 + offsetExplode, w, 40);

      // Model label
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 16px monospace";
      ctx.textAlign = "center";
      ctx.fillText(`3D SCHEMATIC: ${this.currentModelType.toUpperCase()}`, 0, -h / 2 - offsetExplode - 15);

      ctx.font = "12px sans-serif";
      ctx.fillStyle = "#94a3b8";
      ctx.fillText(this.isExploded ? "[ EXPLODED VIEW ACTIVE ]" : "[ ASSEMBLED COMPACT VIEW ]", 0, 115 + offsetExplode);

      ctx.restore();

      this.animationFrameId = requestAnimationFrame(render);
    };

    render();
  }

  animate() {
    if (!this.renderer || !this.scene || !this.camera) return;

    this.animationFrameId = requestAnimationFrame(() => this.animate());

    if (this.isRotating && !this.isDragging) {
      this.targetRotationY += 0.008;
    }

    // Smooth rotation lerp
    this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.1;
    this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.1;

    if (this.modelGroup) {
      this.modelGroup.rotation.x = this.currentRotationX;
      this.modelGroup.rotation.y = this.currentRotationY;

      // Animate explosion offset
      this.parts.forEach(part => {
        if (part.userData && part.userData.explodeOffset) {
          const target = this.isExploded ? part.userData.explodeOffset : new THREE.Vector3(0, 0, 0);
          if (!part.userData.originalPos) {
            part.userData.originalPos = part.position.clone();
          }
          const destination = part.userData.originalPos.clone().add(target);
          part.position.lerp(destination, 0.1);
        }
      });
    }

    this.renderer.render(this.scene, this.camera);
  }

  setupEventListeners() {
    const domElement = this.renderer ? this.renderer.domElement : this.container.querySelector("canvas");
    if (!domElement) return;

    domElement.addEventListener("mousedown", (e) => {
      this.isDragging = true;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener("mouseup", () => {
      this.isDragging = false;
    });

    domElement.addEventListener("mousemove", (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      this.targetRotationY += deltaX * 0.01;
      this.targetRotationX += deltaY * 0.01;

      // Clamp X rotation to prevent flipping upside-down
      this.targetRotationX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, this.targetRotationX));

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    // Touch support for mobile / tablets
    domElement.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    domElement.addEventListener("touchmove", (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
      const deltaY = e.touches[0].clientY - this.previousMousePosition.y;

      this.targetRotationY += deltaX * 0.012;
      this.targetRotationX += deltaY * 0.012;

      this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });

    window.addEventListener("touchend", () => {
      this.isDragging = false;
    });

    // Wheel Zoom
    domElement.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (this.camera) {
        this.camera.position.z += e.deltaY * 0.005;
        this.camera.position.z = Math.max(5, Math.min(22, this.camera.position.z));
      }
    }, { passive: false });

    // Window resize
    window.addEventListener("resize", () => {
      if (!this.renderer || !this.camera || !this.container) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight || 450;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });
  }

  switchModel(type) {
    this.currentModelType = type;
    this.isExploded = false;
    if (this.scene) {
      this.buildModel(type);
    }
    this.renderHotspots();
  }

  toggleRotation() {
    this.isRotating = !this.isRotating;
    return this.isRotating;
  }

  toggleExplode() {
    this.isExploded = !this.isExploded;
    return this.isExploded;
  }

  resetCamera() {
    this.targetRotationX = 0.3;
    this.targetRotationY = 0.5;
    if (this.camera) {
      this.camera.position.set(0, 5, 12);
      this.camera.lookAt(0, 0, 0);
    }
  }

  renderHotspots() {
    const list = document.getElementById("hotspots-list");
    if (!list) return;

    const lang = window.appState ? window.appState.lang : "vi";
    const data = this.hotspotsData[this.currentModelType] || [];

    list.innerHTML = data.map((item, index) => `
      <div class="hotspot-item" data-index="${index}">
        <div class="hotspot-index">${index + 1}</div>
        <div class="hotspot-info">
          <div class="hotspot-title">${lang === "vi" ? item.titleVi : item.titleEn}</div>
          <div class="hotspot-desc">${lang === "vi" ? item.descVi : item.descEn}</div>
        </div>
      </div>
    `).join("");
  }
}

window.TechnicalViewer3D = TechnicalViewer3D;
