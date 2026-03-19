export type Project = {
  slug: string;
  title: string;
  category: "electrical" | "ml" | "other";
  categoryLabel: string;
  description: string;
  tech: string[];
  result: string;
  overview: string;
  problem: string;
  approach: string;
  implementation: string;
  outcome: string;
  images: [string, string, string];
  projectUrl: string;
  publishedAt: string;
};

export const projects: Project[] = [
  // ===== ELECTRICAL ENGINEERING =====
  {
    slug: "disaster-relief-solar-power-system",
    title: "Disaster Relief Solar Power System Deployment",
    category: "electrical",
    categoryLabel: "Electrical Engineering",
    description:
      "Perancangan dan implementasi sistem energi surya off-grid di Desa Geunci, Sawang, untuk menyediakan listrik dasar seperti penerangan dan pengisian perangkat saat jaringan PLN tidak tersedia.",
    tech: ["Panel Surya (2x 100 WP)", "Baterai VRLA (12V 100Ah)", "Solar Charge Controller (PWM)", "Inverter 500W", "MCB Proteksi (AC 2A, DC 20A)", "Distribusi Beban Manual"],
    result: "Berhasil menyediakan listrik untuk kebutuhan dasar warga di area bencana, membantu aktivitas selama masa pemulihan sebelum listrik utama kembali.",
    overview:
      "Sistem tenaga surya semi-portabel yang dideploy di area pasca banjir untuk menyediakan listrik sementara bagi masyarakat terdampak yang kehilangan akses ke jaringan listrik.",
    problem:
      "Pasca banjir, wilayah mengalami pemadaman listrik total sehingga warga tidak memiliki akses listrik untuk kebutuhan dasar.",
    approach:
      "Membangun sistem tenaga surya semi-portabel yang mudah dipasang dan dapat langsung digunakan di kondisi lapangan terbatas.",
    implementation:
      "Sistem menggunakan 2 panel 100Wp yang terhubung ke baterai VRLA melalui PWM SCC, dengan inverter 500W untuk output AC dan proteksi MCB. Instalasi dilakukan langsung di lokasi dengan penyesuaian posisi panel sesuai kondisi lapangan.",
    outcome:
      "Sistem berhasil menyediakan sumber listrik stabil untuk penerangan dan pengisian perangkat, serta meningkatkan kondisi operasional di posko bencana.",
    images: [
      "/images/projects/disaster-solar-1.jpg",
      "/images/projects/disaster-solar-2.jpg",
      "/images/projects/disaster-solar-3.jpg",
    ],
    projectUrl: "https://drive.google.com/your-link-here",
    publishedAt: "2024",
  },
  {
    slug: "37kw-3phase-dol-motor-control-panel-cpo",
    title: "3-Phase 37 kW Induction Motor DOL Control Panel for CPO Pump System",
    category: "electrical",
    categoryLabel: "Electrical Engineering",
    description:
      "Panel kontrol dirakit menggunakan metode Direct-On-Line (DOL) dengan sistem modular drawer untuk memudahkan instalasi dan maintenance. Dilengkapi kontrol manual, indikator, dan emergency stop untuk keamanan operasional.",
    tech: ["Motor Induksi 3 Fasa (37 kW, 400V)", "Magnetic Contactor", "Circuit Breaker (CB)", "Relay Kontrol", "Push Button (Start / Stop / Emergency)", "Lampu Indikator", "Panel Modular Drawer System", "Alat Ukur (Monitoring)"],
    result: "Sistem kontrol berfungsi sesuai kebutuhan dan mendukung operasional pompa CPO. Motor berjalan stabil dengan kontrol yang mudah dioperasikan dan dipelihara.",
    overview:
      "Perakitan panel kontrol motor induksi 3 fasa 37 kW menggunakan metode Direct-On-Line (DOL) untuk sistem pompa CPO di lingkungan industri.",
    problem:
      "Dibutuhkan sistem kontrol motor berdaya besar (37 kW) untuk pompa CPO yang dapat dioperasikan secara langsung, dengan tetap mempertahankan keandalan dan kemudahan maintenance dalam lingkungan industri.",
    approach:
      "Menggunakan metode Direct-On-Line (DOL) sesuai requirement industri, dengan pendekatan modular melalui sistem drawer untuk meningkatkan efisiensi instalasi dan kemudahan perawatan.",
    implementation:
      "Perakitan panel, wiring, dan testing berdasarkan desain yang diberikan, termasuk troubleshooting saat terjadi kesalahan wiring dan trip.",
    outcome:
      "Panel digunakan langsung di industri dan motor berjalan stabil.",
    images: [
      "/images/projects/dol-panel-1.jpg",
      "/images/projects/dol-panel-2.jpg",
      "/images/projects/dol-panel-3.jpg",
    ],
    projectUrl: "https://drive.google.com/your-link-here",
    publishedAt: "2024",
  },
  {
    slug: "multi-source-energy-harvesting-sync-esp32",
    title: "Multi-Source Energy Harvesting Synchronization System (5V DC, ESP32)",
    category: "electrical",
    categoryLabel: "Electrical Engineering",
    description:
      "Proyek ini berfokus pada integrasi dan sinkronisasi multi-source energy menjadi satu power bus 5V DC. Sistem menggabungkan sumber dengan karakteristik berbeda melalui proses rectifikasi, konversi, dan kontrol switching untuk menghasilkan output yang dapat digunakan.",
    tech: ["ESP32", "DC-DC Converter", "Rectifier", "MPPT/Buck Converter", "Li-ion Battery", "Switching Control"],
    result: "Output masih fluktuatif namun sudah usable dan menunjukkan potensi untuk pengembangan lebih lanjut.",
    overview:
      "Sinkronisasi tiga sumber energi (piezo, photovoltaic, pico hydro) menjadi output DC 5V menggunakan sistem kontrol berbasis ESP32.",
    problem:
      "Perbedaan karakteristik sumber (AC/DC, fluktuatif, intermittent) menyebabkan konflik antar sumber, reverse current, dan ketidakstabilan tegangan.",
    approach:
      "Menstandarkan semua sumber ke DC, lalu mengatur aliran energi menggunakan converter dan kontrol switching berbasis ESP32 untuk menjaga kestabilan sistem.",
    implementation:
      "Mengintegrasikan piezo, photovoltaic, dan pico hydro ke dalam satu power bus melalui rangkaian rectifier dan DC-DC converter. Sistem dikontrol menggunakan ESP32 untuk mengatur switching on/off tiap sumber. Dilakukan troubleshooting terhadap masalah seperti drop tegangan, konflik antar sumber, dan reverse current selama proses pengujian.",
    outcome:
      "Sistem berhasil menggabungkan beberapa sumber energi menjadi satu output 5V DC yang dapat digunakan untuk menyalakan perangkat.",
    images: [
      "/images/projects/energy-harvesting-1.jpg",
      "/images/projects/energy-harvesting-2.jpg",
      "/images/projects/energy-harvesting-3.jpg",
    ],
    projectUrl: "https://drive.google.com/your-link-here",
    publishedAt: "2024",
  },

  // ===== MACHINE LEARNING =====
  {
    slug: "embedded-soc-estimation-random-forest-esp32",
    title: "Embedded Battery SoC Estimation using Random Forest on ESP32",
    category: "ml",
    categoryLabel: "Machine Learning",
    description:
      "Proyek ini menggabungkan machine learning dan embedded system untuk mengestimasi SoC baterai secara adaptif. Model dilatih menggunakan kombinasi dataset pribadi dan publik, kemudian diimplementasikan dalam bentuk C code pada ESP32 untuk inference real-time.",
    tech: ["ESP32", "Random Forest", "Python", "OLED Display", "Sensor Data (Voltage, Current, dll)"],
    result: "(MAE: ~5%), (RMSE: ~6%), (R²: 0.92) Estimasi cukup akurat dan dapat digunakan dalam sistem kontrol.",
    overview:
      "Estimasi State of Charge (SoC) baterai Li-ion secara real-time menggunakan model Random Forest yang di-deploy pada ESP32.",
    problem:
      "Estimasi SoC sulit dilakukan secara akurat karena data bersifat non-linear, noisy, dan bergantung pada banyak parameter.",
    approach:
      "Menggunakan model Random Forest untuk menangani hubungan non-linear, lalu mengintegrasikan hasil model ke dalam sistem embedded untuk estimasi real-time.",
    implementation:
      "Melakukan pengumpulan dan penggabungan dataset (~5k data), preprocessing, serta training model di Python. Model kemudian dikonversi ke C code dan di-deploy ke ESP32 untuk inference real-time, dengan output ditampilkan dalam bentuk persentase SoC pada OLED display.Dilakukan penanganan terhadap masalah overfitting, noise data, dan keterbatasan resource pada ESP32 selama proses pengembangan.",
    outcome:
      "Sistem mampu melakukan estimasi SoC secara real-time dengan performa yang cukup stabil di perangkat embedded.",
    images: [
      "/images/projects/predictive-maintenance-1.jpg",
      "/images/projects/predictive-maintenance-2.jpg",
      "/images/projects/predictive-maintenance-3.jpg",
    ],
    projectUrl: "https://github.com/username/predictive-maintenance",
    publishedAt: "2023",
  },
  {
    slug: "energy-consumption-prediction-xgboost",
    title: "Household Energy Consumption Prediction using XGBoost",
    category: "ml",
    categoryLabel: "Machine Learning",
    description:
      "Proyek ini berfokus pada prediksi konsumsi energi harian menggunakan dataset publik (~140k data) yang berisi histori konsumsi per jam dan timestamp. Model dibangun menggunakan XGBoost untuk menangani pola konsumsi yang bersifat temporal.",
    tech: ["XGBoost", "Python", "Pandas", "Scikit-learn", "Streamlit Dashboard", "Matplotlib"],
    result: "(MAE: 34544), (RMSE: 47112). (R²: 0.82) Model mampu menangkap pola konsumsi dengan baik, namun masih memiliki keterbatasan akurasi akibat minimnya fitur.",
    overview:
      "Prediksi konsumsi energi rumah tangga per hari menggunakan model regresi XGBoost berbasis data historis.",
    problem:
      "Prediksi konsumsi energi sulit akurat karena keterbatasan fitur dan pola penggunaan yang berubah-ubah.",
    approach:
      "Menggunakan XGBoost karena performa lebih baik dibanding model lain dalam menangkap pola non-linear pada data historis konsumsi energi.",
    implementation:
      "Melakukan preprocessing data time-series, training model XGBoost, serta evaluasi performa menggunakan metrik regresi. Hasil prediksi ditampilkan dalam bentuk dashboard menggunakan Streamlit.",
    outcome:
      "Model mampu melakukan prediksi konsumsi energi harian, namun masih memiliki keterbatasan akurasi akibat minimnya fitur.",
    images: [
      "/images/projects/power-quality-1.jpg",
      "/images/projects/power-quality-2.jpg",
      "/images/projects/power-quality-3.jpg",
    ],
    projectUrl: "https://github.com/username/power-quality-classifier",
    publishedAt: "2023",
  },
  {
    slug: "capstone",
    title: "capstone",
    category: "ml",
    categoryLabel: "Machine Learning",
    description:
      "dfshsg",
    tech: ["afhdf"],
    result: "afdhadfh",
    overview:
      "afgdha",
    problem:
      "afgfdag",
    approach:
      "agfd",
    implementation:
      "fagfasfg",
    outcome:
      "gadget bisa hidup",
    images: [
      "/images/projects/power-quality-1.jpg",
      "/images/projects/power-quality-2.jpg",
      "/images/projects/power-quality-3.jpg",
    ],
    projectUrl: "https://github.com/username/power-quality-classifier",
    publishedAt: "2023",
  },

  // ===== OTHER =====
  {
    slug: "scada-dashboard",
    title: "SCADA Dashboard Real-Time",
    category: "other",
    categoryLabel: "Other Engineering",
    description:
      "Dashboard SCADA berbasis web untuk monitoring dan kontrol sistem utilitas gedung menggunakan OPC-UA protocol dan React.",
    tech: ["React", "Node.js", "OPC-UA", "WebSocket", "PostgreSQL", "Docker"],
    result: "Response time < 200ms, mendukung 500+ data point real-time simultaneously",
    overview:
      "Platform SCADA modern berbasis web yang menggantikan SCADA legacy untuk monitoring sistem HVAC, lighting, dan power di gedung komersial.",
    problem:
      "SCADA legacy berbasis desktop sulit diakses remote dan tidak mobile-friendly. Integrasi dengan sistem baru juga terbatas.",
    approach:
      "Arsitektur microservices dengan OPC-UA client di backend untuk komunikasi dengan PLC/sensor. WebSocket untuk update real-time ke frontend.",
    implementation:
      "Backend Node.js dengan library node-opcua. Frontend React dengan recharts untuk visualisasi. PostgreSQL untuk penyimpanan histori data.",
    outcome:
      "Dashboard digunakan di 2 gedung komersial. Operator dapat memantau dan mengontrol sistem dari tablet/smartphone tanpa VPN.",
    images: [
      "/images/projects/scada-1.jpg",
      "/images/projects/scada-2.jpg",
      "/images/projects/scada-3.jpg",
    ],
    projectUrl: "https://github.com/username/scada-dashboard",
    publishedAt: "2023",
  },
  {
    slug: "energy-audit-tool",
    title: "Tool Audit Energi Otomatis",
    category: "other",
    categoryLabel: "Other Engineering",
    description:
      "Aplikasi web untuk otomatisasi proses audit energi gedung, mengintegrasikan data meter dengan perhitungan standar SNI dan rekomendasi efisiensi berbasis AI.",
    tech: ["Next.js", "Python", "FastAPI", "OpenAI API", "Chart.js", "PostgreSQL"],
    result: "Waktu audit berkurang dari 2 minggu ke 3 hari, laporan auto-generated",
    overview:
      "Platform digital untuk engineer yang melakukan audit energi, mengotomasi pengumpulan data, kalkulasi, dan pembuatan laporan.",
    problem:
      "Proses audit energi masih sangat manual — pengumpulan data spreadsheet, kalkulasi manual, dan penulisan laporan memakan waktu berminggu-minggu.",
    approach:
      "Data meter diinput atau diimport otomatis. Engine kalkulasi berbasis standar SNI 03-6196-2000. GPT-4 digunakan untuk menghasilkan narasi rekomendasi.",
    implementation:
      "Next.js frontend dengan form wizard untuk input data. FastAPI backend untuk kalkulasi intensitas energi. OpenAI API untuk generasi teks rekomendasi.",
    outcome:
      "Digunakan oleh tim konsultan energi untuk 5 proyek audit. Waktu pengerjaan berkurang dari rata-rata 2 minggu menjadi 3 hari.",
    images: [
      "/images/projects/energy-audit-1.jpg",
      "/images/projects/energy-audit-2.jpg",
      "/images/projects/energy-audit-3.jpg",
    ],
    projectUrl: "https://github.com/username/energy-audit-tool",
    publishedAt: "2023",
  },
  {
    slug: "energyfgsdfgdsfgdfs-audit-tool",
    title: "Tool Audit Energi Otomatis",
    category: "other",
    categoryLabel: "Other Engineering",
    description:
      "Aplikasi web untuk otomatisasi proses audit energi gedung, mengintegrasikan data meter dengan perhitungan standar SNI dan rekomendasi efisiensi berbasis AI.",
    tech: ["Next.js", "Python", "FastAPI", "OpenAI API", "Chart.js", "PostgreSQL"],
    result: "Waktu audit berkurang dari 2 minggu ke 3 hari, laporan auto-generated",
    overview:
      "Platform digital untuk engineer yang melakukan audit energi, mengotomasi pengumpulan data, kalkulasi, dan pembuatan laporan.",
    problem:
      "Proses audit energi masih sangat manual — pengumpulan data spreadsheet, kalkulasi manual, dan penulisan laporan memakan waktu berminggu-minggu.",
    approach:
      "Data meter diinput atau diimport otomatis. Engine kalkulasi berbasis standar SNI 03-6196-2000. GPT-4 digunakan untuk menghasilkan narasi rekomendasi.",
    implementation:
      "Next.js frontend dengan form wizard untuk input data. FastAPI backend untuk kalkulasi intensitas energi. OpenAI API untuk generasi teks rekomendasi.",
    outcome:
      "Digunakan oleh tim konsultan energi untuk 5 proyek audit. Waktu pengerjaan berkurang dari rata-rata 2 minggu menjadi 3 hari.",
    images: [
      "/images/projects/energy-audit-1.jpg",
      "/images/projects/energy-audit-2.jpg",
      "/images/projects/energy-audit-3.jpg",
    ],
    projectUrl: "https://github.com/username/energy-audit-tool",
    publishedAt: "2023",
  },
];