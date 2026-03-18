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
    slug: "power-distribution-monitoring",
    title: "Sistem Monitoring Distribusi Daya",
    category: "electrical",
    categoryLabel: "Electrical Engineering",
    description:
      "Sistem real-time untuk memantau kualitas daya pada jaringan distribusi listrik 20kV menggunakan mikrokontroler dan protokol Modbus.",
    tech: ["STM32", "Modbus RTU", "Python", "InfluxDB", "Grafana"],
    result: "Deteksi anomali daya 40% lebih cepat, downtime berkurang 25%",
    overview:
      "Proyek ini dirancang untuk memantau kualitas daya secara real-time pada infrastruktur distribusi 20kV. Data dikumpulkan setiap 500ms dan dikirim ke server pusat untuk analisis.",
    problem:
      "Gangguan kualitas daya (tegangan drop, harmonik) sering tidak terdeteksi sampai terjadi kerusakan peralatan yang memakan biaya besar.",
    approach:
      "Menggunakan sensor CT dan PT yang terhubung ke STM32 sebagai ADC presisi tinggi. Data dikirim via Modbus RTU ke gateway Raspberry Pi, kemudian disimpan di InfluxDB.",
    implementation:
      "Firmware STM32 ditulis dalam C dengan sampling rate 2kHz. Script Python menangani komunikasi Modbus dan preprocessing data. Dashboard Grafana menampilkan metrik real-time.",
    outcome:
      "Sistem berhasil diimplementasikan di 3 gardu distribusi. Anomali tegangan terdeteksi rata-rata 40% lebih cepat dibanding inspeksi manual.",
  },
  {
    slug: "solar-mppt-controller",
    title: "MPPT Controller Panel Surya",
    category: "electrical",
    categoryLabel: "Electrical Engineering",
    description:
      "Perancangan dan implementasi Maximum Power Point Tracking controller untuk sistem panel surya off-grid 5kWp dengan efisiensi konversi tinggi.",
    tech: ["Arduino", "Buck Converter", "MATLAB/Simulink", "PCB Design", "Altium"],
    result: "Efisiensi MPPT mencapai 97.3%, output daya meningkat 18% vs fixed voltage",
    overview:
      "MPPT Controller yang dirancang untuk memaksimalkan ekstraksi daya dari panel surya pada kondisi irradiance yang berubah-ubah.",
    problem:
      "Controller konvensional menggunakan tegangan tetap yang menyebabkan kehilangan daya hingga 20% pada kondisi awan bergerak.",
    approach:
      "Implementasi algoritma Perturb & Observe (P&O) yang dioptimasi dengan adaptive step size untuk konvergensi lebih cepat pada kondisi dinamis.",
    implementation:
      "Buck converter dirancang dengan frekuensi switching 100kHz menggunakan MOSFET IRFZ44N. Kontroler berbasis Arduino Due dengan resolusi ADC 12-bit.",
    outcome:
      "Efisiensi tracking rata-rata 97.3% selama pengujian 30 hari. Output energi meningkat 18% dibanding sistem fixed voltage pada lokasi uji.",
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