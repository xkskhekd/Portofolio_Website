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
  title: "Instalasi Rumah Sederhana",
  category: "electrical",
  year: "2023",
  context: "Pelatihan Kejuruan - Program Pelatihan Jurusan Teknik Elektro",
  overview: "Praktik instalasi kelistrikan rumah sederhana (titik lampu, stop kontak, MCB, saklar) dalam program pelatihan kejuruan jurusan.",
},
{
  title: "Simulasi Proteksi Relay Arus Lebih",
  category: "electrical",
  year: "2025",
  context: "Tugas Dosen Pembimbing",
  overview: "Simulasi koordinasi proteksi relay arus lebih pada jaringan distribusi menggunakan ETAP, sebagai tugas bimbingan dosen.",
},
{
  title: "Mini Keypad Digital Input System PCB Custom Single-Layer",
  category: "electrical",
  year: "2023",
  context: "Tugas Kuliah/Praktikum",
  overview: "Merancang dan membuat prototype sistem input digital berbasis keypad dengan PCB custom single-layer.",
},
{
  title: "Elektro KWUService: Peduli Bencana Servis Elektronik Gratis",
  category: "electrical",
  year: "2025",
  context: "Kegiatan Sosial Jurusan Teknik Elektro - Lhokseumawe",
  overview: "Layanan perbaikan gratis alat elektronik rumah tangga bagi warga sekitar kampus di Lhokseumawe.",
},
{
  title: "SLD Site PMG2 PT Industri Nabati Lestari (AutoCAD)",
  category: "electrical",
  year: "2025",
  context: "Magang - PT Industri Nabati Lestari",
  overview: "Menggambar ulang dan memperbarui Single Line Diagram (SLD) site PMG2 menggunakan AutoCAD.",
},

    // ===== ML =====
{
  title: "Household Energy Consumption Prediction using XGBoost",
  category: "ml",
  year: "2026",
  context: "Eksperimen mandiri - prediksi time-series dengan machine learning",
  overview:
    "Prediksi konsumsi energi harian menggunakan XGBoost pada dataset historis (~140k data), ditampilkan lewat dashboard Streamlit dengan performa R² 0.82.",
},
{
  title: "Seq2Seq LSTM + Custom Attention: Bitcoin Multi-Step Time Series Forecasting",
  category: "ml",
  year: "2026",
  context: "Submission Kelas Dicoding - Membangun Proyek Deep Learning Tingkat Mahir",
  overview:
    "Model Seq2Seq LSTM dengan CustomMultiHeadAttention dan custom training loop untuk prediksi multivariate multi-step harga Bitcoin, lulus predikat Advanced.",
},
{
  title: "CNN Image Classification: Klasifikasi Warna Rambut Karakter Anime",
  category: "ml",
  year: "2026",
  context: "Submission Kelas Dicoding - Belajar Fundamental Deep Learning",
  overview:
    "Model CNN untuk klasifikasi warna rambut karakter anime dari 10.000+ gambar (3+ kelas), akurasi di atas 85% dan diekspor ke SavedModel, TF-Lite, dan TFJS.",
},
{
  title: "Sentiment Analysis: Ulasan Aplikasi IoT Mi Home (Play Store)",
  category: "ml",
  year: "2026",
  context: "Submission Kelas Dicoding - Belajar Fundamental Deep Learning",
  overview:
    "Scraping ulasan aplikasi IoT Mi Home dari Play Store, lalu membangun model deep learning untuk analisis sentimen (3+ kelas, 10.000+ sampel).",
},

  // ===== OTHER =====
{
  title: "Aplikasi Katalog Perpustakaan Pribadi (Android)",
  category: "other",
  year: "2022",
  context: "Submission Kelas Dicoding - Belajar Membuat Aplikasi Android untuk Pemula",
  overview:
    "Aplikasi Android untuk mendata katalog buku fisik pribadi menggunakan Activity, Intent, dan RecyclerView.",
},
{
  title: "Website Submission: HTML, CSS & Flexbox",
  category: "other",
  year: "2022",
  context: "Lintasarta Cloudeka Digischool 2022",
  overview:
    "Halaman website dengan HTML semantic, CSS styling, dan layout responsif menggunakan Flexbox.",
},
{
  title: "Diary Kesehatan Siswa (PHP & MySQL)",
  category: "other",
  year: "2022",
  context: "Ujian Kompetensi Keahlian (UKK) SMK",
  overview:
    "Website pencatatan jurnal kesehatan harian siswa dengan dua role pengguna: siswa dan admin/UKS.",
},
{
  title: "2D Side-Scrolling Shoot 'Em Up (Vanilla JS)",
  category: "other",
  year: "2023",
  context: "Latihan Mandiri - Tutorial freeCodeCamp",
  overview:
    "Game 2D side-scrolling dari nol pakai JavaScript murni & HTML Canvas, sprite animation, collision detection, particle effects.",
},
{
  title: "Catch Ball: Game dengan Hand Tracking (Computer Vision)",
  category: "other",
  year: "2024",
  context: "Tugas Mata Kuliah Pengolahan Citra",
  overview:
    "Game bounce ball dengan paddle dikendalikan gerakan tangan via MediaPipe hand tracking, dipadukan Pygame.",
},
{
  title: "Website Si Gempi: Landing Page & Profil Tim",
  category: "other",
  year: "2025",
  context: "PKM-PM Si Gempi",
  overview:
    "Website resmi Si Gempi (sigempi.com) dengan animasi interaktif. Landing page, profil tim, program, galeri, dan komik.",
},
];