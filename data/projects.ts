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

  // ===== OTHER =====
  {
    slug: "ar-3d-image-tracking-unity-vuforia",
    title: "AR 3D Image Tracking Application using Unity & Vuforia",
    category: "other",
    categoryLabel: "Other Engineering",
    description:
      "Proyek ini mengembangkan aplikasi AR menggunakan Unity dan Vuforia dengan pendekatan marker-based tracking. Sistem memanfaatkan QR code sebagai marker untuk memunculkan objek 3D beserta animasinya secara real-time di perangkat mobile.",
    tech: ["Unity", "Vuforia", "C#", "Android (APK)", "Image Tracking"],
    result: "Sistem berjalan dengan baik di perangkat Android, dengan performa tracking yang cukup stabil dalam kondisi pencahayaan yang memadai.",
    overview:
      "Aplikasi Augmented Reality berbasis Android menggunakan image tracking untuk menampilkan model 3D interaktif sebagai media edukasi.",
    problem:
      "Tracking objek tidak selalu stabil akibat pengaruh kualitas marker dan kondisi pencahayaan, sehingga posisi dan orientasi objek 3D tidak konsisten.",
    approach:
      "Menggunakan Vuforia image tracking dengan optimasi marker dan pengujian di berbagai kondisi pencahayaan untuk meningkatkan stabilitas tracking.",
    implementation:
      "Mengembangkan aplikasi di Unity dengan integrasi Vuforia SDK untuk image tracking berbasis QR code. Sistem dirancang untuk menampilkan model 3D dengan animasi saat marker terdeteksi, serta di-build menjadi aplikasi Android (APK) yang dapat digunakan secara langsung.",
    outcome:
      "Aplikasi berhasil menampilkan objek 3D dengan animasi secara real-time dan dapat digunakan sebagai media edukasi berbasis AR.",
    images: [
      "/images/projects/scada-1.jpg",
      "/images/projects/scada-2.jpg",
      "/images/projects/scada-3.jpg",
    ],
    projectUrl: "https://github.com/username/scada-dashboard",
    publishedAt: "2023",
  },
  {
    slug: "3d-character-animation-blender-ar",
    title: "3D Character Modeling & Animation for AR Application (Blender)",
    category: "other",
    categoryLabel: "Other Engineering",
    description:
      "Proyek ini mencakup pembuatan tiga karakter 3D bergaya semi-realistic low-poly beserta environment untuk kebutuhan aplikasi AR. Karakter dianimasikan untuk merepresentasikan skenario edukatif dan diintegrasikan langsung ke dalam aplikasi.",
    tech: ["Blender", "Photoshop", "3D Modeling", "Rigging", "Animation"],
    result: "Asset usable dan terintegrasi dengan baik, meskipun masih pada level dasar dari segi detail dan animasi.",
    overview:
      "Pembuatan karakter 3D beserta animasi untuk aplikasi Augmented Reality berbasis edukasi.",
    problem:
      "Proses rigging dan animasi cukup kompleks, terutama pada sinkronisasi sendi dan pergerakan agar terlihat natural.",
    approach:
      "Menggunakan base model sebagai dasar, lalu melakukan modeling lanjutan, rigging, dan animasi secara manual untuk menghasilkan gerakan yang sesuai dengan kebutuhan aplikasi.",
    implementation:
      "Melakukan pembuatan karakter dari base model, texturing, rigging, hingga animasi (aksi dan reaksi). Asset kemudian digunakan dalam aplikasi AR sebagai bagian dari visualisasi interaktif.",
    outcome:
      "Karakter 3D berhasil digunakan dalam aplikasi AR dan mampu menampilkan animasi sesuai skenario yang dirancang.",
    images: [
      "/images/projects/energy-audit-1.jpg",
      "/images/projects/energy-audit-2.jpg",
      "/images/projects/energy-audit-3.jpg",
    ],
    projectUrl: "https://github.com/username/energy-audit-tool",
    publishedAt: "2023",
  },
  {
    slug: "web-logbook-management-system",
    title: "Web-Based Logbook Management System with PDF Reporting",
    category: "other",
    categoryLabel: "Other Engineering",
    description:
      "Proyek ini mengembangkan sistem logbook mingguan untuk pekerja dan peserta magang dengan dashboard admin. Sistem dirancang untuk mempermudah pencatatan kegiatan, pengelolaan data user, serta pembuatan laporan dalam format PDF.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "mPDF"],
    result: "Fitur utama berjalan dengan baik (input, filtering, export PDF), meskipun terdapat kendala pada tampilan PDF dan UI, serta sistem sempat mengalami masalah keamanan saat di-hosting.",
    overview:
      "Sistem logbook digital berbasis web untuk pencatatan kegiatan magang dengan fitur manajemen user, pembatasan waktu, dan export laporan PDF.",
    problem:
      "Pencatatan logbook manual tidak efisien dan sulit dikelola, serta membutuhkan sistem terstruktur dengan pembatasan waktu dan akses yang jelas.",
    approach:
      "Membangun sistem berbasis web dengan role user dan admin, serta menerapkan kontrol akses berbasis waktu untuk memastikan integritas data logbook.",
    implementation:
      "Mengembangkan fitur input logbook mingguan dengan batas edit 7 hari, sistem penguncian otomatis, filtering berdasarkan divisi, serta export PDF menggunakan mPDF. Admin memiliki kontrol penuh terhadap data user dan logbook. Sistem diimplementasikan secara fullstack dan digunakan langsung dalam lingkungan kerja.",
    outcome:
      "Sistem berhasil digunakan untuk pencatatan logbook secara digital dan membantu pengelolaan data kegiatan secara lebih terstruktur.",
    images: [
      "/images/projects/energy-audit-1.jpg",
      "/images/projects/energy-audit-2.jpg",
      "/images/projects/energy-audit-3.jpg",
    ],
    projectUrl: "https://github.com/username/energy-audit-tool",
    publishedAt: "2023",
  },
];