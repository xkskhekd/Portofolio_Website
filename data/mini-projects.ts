export type MiniProject = {
  title: string;
  category: "electrical" | "ml" | "other";
  year: string;
  context: string;
  overview: string;
};

export const miniProjects: MiniProject[] = [
  // ===== ELECTRICAL =====
  {
    title: "Instalasi Panel Penerangan Sederhana",
    category: "electrical",
    year: "2023",
    context: "Praktikum Lab Teknik Elektro",
    overview: "Perakitan panel penerangan sederhana dengan MCB dan saklar tukar untuk simulasi instalasi rumah tinggal.",
  },
  {
    title: "Pengukuran dan Analisis Harmonik Beban Non-Linear",
    category: "electrical",
    year: "2023",
    context: "Tugas Akhir Mata Kuliah Kualitas Daya",
    overview: "Pengukuran Total Harmonic Distortion (THD) pada beban non-linear menggunakan power analyzer dan analisis dampaknya terhadap sistem.",
  },
  {
    title: "Simulasi Proteksi Relay Arus Lebih",
    category: "electrical",
    year: "2022",
    context: "Praktikum Sistem Proteksi",
    overview: "Simulasi koordinasi relay arus lebih menggunakan software ETAP untuk jaringan distribusi radial sederhana.",
  },

  // ===== ML =====
  {
    title: "Klasifikasi Kondisi Bearing dengan SVM",
    category: "ml",
    year: "2024",
    context: "Proyek Mandiri",
    overview: "Eksperimen klasifikasi kondisi bearing (normal, inner race fault, outer race fault) menggunakan Support Vector Machine pada dataset CWRU.",
  },
  {
    title: "Time Series Forecasting Konsumsi Energi",
    category: "ml",
    year: "2023",
    context: "Proyek Mandiri",
    overview: "Prediksi konsumsi energi listrik harian menggunakan model ARIMA dan Prophet, dibandingkan performanya pada data meter gedung.",
  },
  {
    title: "Deteksi Anomali Tegangan dengan Autoencoder",
    category: "ml",
    year: "2023",
    context: "Eksperimen Lab",
    overview: "Implementasi autoencoder sederhana untuk mendeteksi anomali pada data tegangan sintetis sebagai proof of concept.",
  },

  // ===== OTHER =====
  {
    title: "Dashboard Monitoring Konsumsi Listrik",
    category: "other",
    year: "2024",
    context: "Proyek Freelance Kecil",
    overview: "Web dashboard sederhana berbasis React untuk visualisasi data konsumsi listrik dari smart meter, lengkap dengan grafik harian dan bulanan.",
  },
];