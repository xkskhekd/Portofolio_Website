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
      "Mengintegrasikan piezo, photovoltaic, dan pico hydro ke dalam satu power bus melalui rangkaian rectifier dan DC-DC converter. Sistem dikontrol menggunakan ESP32 untuk mengatur switching on/off tiap sumber.Dilakukan troubleshooting terhadap masalah seperti drop tegangan, konflik antar sumber, dan reverse current selama proses pengujian.",
    outcome:
      "Sistem berhasil menggabungkan beberapa sumber energi menjadi satu output 5V DC yang dapat digunakan untuk menyalakan perangkat.",
  },
  

  // ===== MACHINE LEARNING =====
  {
    slug: "predictive-maintenance-motor",
    title: "Predictive Maintenance Motor Industri",
    category: "ml",
    categoryLabel: "Machine Learning",
    description:
      "Model ML untuk memprediksi kegagalan motor induksi berdasarkan data vibration dan thermal menggunakan LSTM dan anomaly detection.",
    tech: ["Python", "TensorFlow", "LSTM", "scikit-learn", "MQTT", "FastAPI"],
    result: "Akurasi prediksi 94.2%, false positive rate < 3%, penghematan biaya 35%",
    overview:
      "Sistem predictive maintenance berbasis ML yang menganalisis sinyal vibration dan suhu motor untuk memprediksi kegagalan sebelum terjadi.",
    problem:
      "Maintenance terjadwal (preventive) terlalu mahal dan sering tidak tepat waktu, sementara breakdown mendadak menghentikan produksi.",
    approach:
      "LSTM digunakan untuk menangkap pola temporal dalam data sensor. Feature engineering meliputi FFT decomposition, RMS, kurtosis, dan crest factor.",
    implementation:
      "Data dikumpulkan via accelerometer MPU6050 dan sensor suhu DS18B20. Model LSTM dengan 2 layer (64 units each) dilatih pada 6 bulan data historis.",
    outcome:
      "Deployed pada 12 motor di fasilitas manufaktur. Berhasil memprediksi 8 dari 9 kegagalan dalam periode validasi 3 bulan.",
  },
  {
    slug: "power-quality-classifier",
    title: "Klasifikasi Gangguan Kualitas Daya dengan CNN",
    category: "ml",
    categoryLabel: "Machine Learning",
    description:
      "Sistem klasifikasi otomatis gangguan kualitas daya (harmonik, sag, swell, interupsi) menggunakan Convolutional Neural Network pada sinyal waveform.",
    tech: ["Python", "PyTorch", "CNN", "Wavelet Transform", "NumPy", "Matplotlib"],
    result: "Akurasi klasifikasi 96.8% untuk 7 jenis gangguan, inference time < 50ms",
    overview:
      "Model CNN yang mengklasifikasikan jenis gangguan kualitas daya secara otomatis dari sinyal gelombang tegangan/arus.",
    problem:
      "Identifikasi manual gangguan power quality membutuhkan engineer berpengalaman dan memakan waktu lama, sementara gangguan dapat terjadi dalam milidetik.",
    approach:
      "Sinyal diproses menggunakan Continuous Wavelet Transform (CWT) untuk menghasilkan scalogram yang kemudian diklasifikasikan oleh CNN.",
    implementation:
      "Dataset 10.000 sampel sinyal sintetis (IEEE 1159 standard) + data lapangan. CNN 5-layer dengan batch normalization dan dropout untuk regularisasi.",
    outcome:
      "Akurasi 96.8% pada test set. Model berhasil diintegrasikan ke dalam sistem monitoring distribusi sebagai modul real-time classifier.",
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
  },
];