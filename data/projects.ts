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
    slug: "portable-emergency-solar-power-system",
    title: "Perancangan Sistem Energi Darurat Berbasis PLTS Portable untuk Wilayah Pascabencana",
    category: "electrical",
    categoryLabel: "Electrical Engineering",
    description:
      "Proyek ini merupakan implementasi sistem PLTS portable yang dikembangkan untuk mendukung kebutuhan listrik di wilayah pascabencana banjir di Desa Geunci, Sawang, Aceh. Sistem dirancang berdasarkan hasil survei lapangan, estimasi kebutuhan energi, serta keterbatasan anggaran agar mampu menyediakan sumber listrik yang aman, mudah dipindahkan, dan siap digunakan pada kondisi darurat.",
    tech: ["Panel Surya (2x 100 WP)", "Baterai VRLA (12V 100Ah)", "Solar Charge Controller (PWM)", "Inverter 500W", "MCB Proteksi (AC 2A, DC 20A)", "Microsoft Visio"],
    result: "Sistem PLTS portable berhasil diimplementasikan dalam waktu dua minggu menggunakan konfigurasi 200 Wp panel surya, baterai VRLA 100 Ah, dan inverter 500 W. Sistem beroperasi secara stabil di lapangan, mampu melayani kebutuhan listrik masyarakat selama lebih dari satu bulan, serta tetap andal meskipun menghadapi kondisi cuaca dan lingkungan pascabencana.",
    overview:
      "Merancang dan membangun sistem energi darurat berbasis PLTS portable untuk menyediakan pasokan listrik sementara bagi masyarakat terdampak banjir hingga jaringan PLN kembali beroperasi.",
    problem:
      "Bencana banjir menyebabkan terputusnya pasokan listrik PLN selama lebih dari satu bulan sehingga aktivitas di posko, musholla, dan dapur umum menjadi sangat terbatas. Dibutuhkan sistem energi darurat yang dapat dipasang dengan cepat, aman, serta mudah dioperasikan di lapangan.",
    approach:
      "Melakukan survei kebutuhan masyarakat, mengestimasi kebutuhan energi, menentukan kapasitas sistem, memilih konfigurasi komponen berdasarkan kebutuhan dan anggaran, kemudian merancang wiring diagram, melakukan perakitan, instalasi, serta pengujian sistem sebelum digunakan masyarakat.",
    implementation:
      "Saya tergabung dalam tim riset yang bertanggung jawab menentukan kapasitas sistem, menyusun wiring diagram, membantu proses perakitan, melakukan commissioning dan pengujian menggunakan dummy load, serta memastikan sistem bekerja dengan baik melalui pengujian proses pengisian baterai dan sistem proteksi. Selain itu, saya juga melakukan sosialisasi kepada masyarakat mengenai cara pengoperasian dan perawatan dasar sistem agar dapat digunakan secara mandiri selama masa pemulihan.",
    outcome:
      "Sistem berhasil menyediakan sumber listrik sementara bagi fasilitas umum di wilayah terdampak dan digunakan hingga jaringan PLN kembali pulih. Instalasi mendukung kebutuhan dasar seperti penerangan, pengisian perangkat elektronik, serta operasional musholla dan dapur umum selama masa tanggap darurat.",
    images: [
      "/images/projects/DisSolar1.jpg",
      "/images/projects/DisSolar2.jpg",
      "/images/projects/DisSolar4.jpg",
    ],
    projectUrl: "https://drive.google.com/your-link-here",
    publishedAt: "2025",
  },
  {
    slug: "dol-induction-motor-control-panel",
    title: "Implementasi Panel Kontrol Motor Induksi 3 Fasa Berbasis DOL untuk Feed Pump CPO",
    category: "electrical",
    categoryLabel: "Electrical Engineering",
    description:
      "Proyek ini merupakan implementasi panel kontrol motor induksi tiga fasa berbasis DOL pada sistem feed pump di industri kelapa sawit. Seluruh proses dilakukan berdasarkan wiring diagram dan spesifikasi yang diberikan oleh engineer perusahaan, mulai dari perakitan panel, wiring, hingga pengujian sistem sebelum dioperasikan.",
    tech: ["Motor Induksi 3 Fasa (37 kW, 400V)", "Magnetic Contactor", "Circuit Breaker (CB)", "Thermal Overload Relay (TOR)", "Push Button (Start / Stop / Emergency)", "Lampu Indikator", "Panel Modular Drawer System", "Alat Ukur (Monitoring)"],
    result: "Implementasi berhasil diselesaikan dalam waktu satu minggu dengan seluruh panel beroperasi sesuai desain perusahaan. Pengujian menunjukkan sistem kontrol, proteksi, dan operasi motor berjalan normal setelah proses wiring dan commissioning selesai dilakukan.",
    overview:
      "Mengimplementasikan panel kontrol motor induksi tiga fasa berbasis Direct On Line (DOL) untuk sistem feed pump CPO guna mendukung operasi industri yang aman, andal, dan mudah dipelihara.",
    problem:
      "Sistem kontrol motor industri harus mampu mengoperasikan feed pump secara aman dan andal, sekaligus memudahkan proses pemeliharaan melalui penggunaan panel tipe drawer yang dapat dilepas tanpa mengganggu panel lainnya.",
    approach:
      "Mempelajari wiring diagram, menerjemahkan desain menjadi panel fisik, melakukan wiring setiap komponen sesuai SOP perusahaan, kemudian melaksanakan pengujian fungsi kontrol dan sistem proteksi sebelum panel dioperasikan.",
    implementation:
      "Saya memimpin tim magang dalam pelaksanaan pekerjaan berdasarkan arahan supervisor, mulai dari membaca wiring diagram, mengoordinasikan pembagian tugas, melakukan perakitan panel, wiring komponen kontrol, hingga pengujian indikator, emergency stop, tegangan, arus, dan fungsi sistem sebelum panel digunakan pada lingkungan produksi.",
    outcome:
      "Sebanyak 10 panel drawer berhasil dirakit dan diimplementasikan pada sistem feed pump CPO. Seluruh panel beroperasi sesuai fungsi dan tetap digunakan dalam proses produksi industri.",
    images: [
      "/images/projects/DOL1.jpg",
      "/images/projects/DOL2.jpg",
      "/images/projects/DOL3.jpg",
    ],
    projectUrl: "https://drive.google.com/your-link-here",
    publishedAt: "2025",
  },
  {
    slug: "embedded-energy-management-system",
    title: "Embedded Energy Management System for Multi-Source Energy Harvesting",
    category: "electrical",
    categoryLabel: "Electrical Engineering",
    description:
      "Proyek ini berfokus pada pengembangan Embedded Energy Management System (EMS) yang mengatur proses sinkronisasi sumber energi piezoelectric, photovoltaic, dan pico hydro ke dalam satu sistem penyimpanan dan distribusi daya. Sistem dirancang menggunakan pendekatan single-source switching untuk menjaga stabilitas suplai, menghindari konflik antar sumber, serta memastikan proses perpindahan sumber berlangsung secara aman dan otomatis.",
    tech: [
      "ESP32",
      "INA219 Current Sensor",
      "Li-ion Battery",
      "DC-DC Boost Converter",
      "DC-DC Buck Converter",
      "Bridge Rectifier",
      "Schottky Diode",
      "MOSFET Switching",
      "Breadboard"
    ],
    result: "Embedded Energy Management System berhasil beroperasi sesuai rancangan dengan menjaga stabilitas bus 5V pada skenario light load, medium load, heavy load, maupun dynamic load. Pengujian menunjukkan sistem mampu melakukan perpindahan sumber secara otomatis serta mempertahankan kontinuitas suplai daya tanpa konflik operasi antar sumber energi.",
    overview:
      "Merancang sistem manajemen energi berbasis embedded untuk mengintegrasikan tiga sumber energi terbarukan ke dalam satu jalur suplai daya yang stabil, aman, dan siap digunakan oleh sistem berbasis DC.",
    problem:
      "Karakteristik tegangan dan arus dari piezoelectric, photovoltaic, dan pico hydro berbeda sehingga tidak dapat langsung digabungkan dalam satu jalur daya. Tanpa mekanisme manajemen energi yang tepat, sistem berisiko mengalami konflik antar sumber, arus balik (reverse current), serta ketidakstabilan tegangan keluaran.",
    approach:
      "Merancang arsitektur Energy Management System berbasis embedded dengan pendekatan single-source switching, menggunakan MOSFET sebagai aktuator switching dan konfigurasi diode OR-ing sebagai proteksi arus balik. Seluruh sumber energi dikondisikan menjadi keluaran DC sebelum disalurkan menuju sistem penyimpanan dan didistribusikan melalui bus 5V yang stabil.",
    implementation:
      "Saya bertanggung jawab merancang keseluruhan sistem sinkronisasi sumber energi, mulai dari penyusunan arsitektur EMS, pemilihan metode switching, perancangan rangkaian daya, integrasi komponen proteksi, hingga pengujian performa sistem pada berbagai skenario beban. Fokus utama implementasi adalah memastikan proses perpindahan sumber berlangsung otomatis tanpa mengganggu kestabilan suplai daya.",
    outcome:
      "Sistem berhasil mengintegrasikan tiga sumber energi berbeda ke dalam satu jalur distribusi daya yang stabil menggunakan pendekatan single-source switching. Proses perpindahan sumber berlangsung otomatis dengan proteksi terhadap arus balik sehingga sistem mampu menyuplai beban DC secara konsisten pada berbagai kondisi pengujian.",
    images: [
      "/images/projects/energy-harvesting-1.jpg",
      "/images/projects/energy-harvesting-2.jpg",
      "/images/projects/energy-harvesting-3.jpg",
    ],
    projectUrl: "https://drive.google.com/your-link-here",
    publishedAt: "2026",
  },

  // ===== MACHINE LEARNING =====
  {
    slug: "adaptive-battery-soc-estimation",
    title: "Adaptive Battery State of Charge Estimation using Machine Learning",
    category: "ml",
    categoryLabel: "Machine Learning",
    description:
      "Proyek ini menggabungkan machine learning dan embedded system untuk mengestimasi SoC baterai secara adaptif. Model dilatih menggunakan kombinasi dataset pribadi dan publik, kemudian diimplementasikan dalam bentuk C code pada ESP32 untuk inference real-time.",
    tech: [
      "Python",
      "Google Colab",
      "Scikit-learn",
      "LightGBM",
      "Random Forest",
      "Polynomial Regression",
      "Pandas & NumPy",
      "Matplotlib",
      "ESP32",
      "Arduino IDE",
      "INA219 Current Sensor",
      "Li-ion Battery"
    ],
    result: "Eksperimen menunjukkan bahwa machine learning mampu mengestimasi SoC dengan akurasi tinggi. LightGBM memperoleh MAE terendah sebesar 3,64%, diikuti Random Forest dan Polynomial Regression sebesar 3,94%, sehingga berpotensi menjadi alternatif metode estimasi SoC konvensional pada Battery Management System.",
    overview:
      "Mengembangkan sistem estimasi State of Charge (SoC) baterai Li-Ion berbasis machine learning sebagai alternatif yang lebih adaptif terhadap metode estimasi konvensional pada Battery Management System, dengan mempertimbangkan keterbatasan perangkat embedded.",
    problem:
      "Metode estimasi SoC konvensional seperti Coulomb Counting dan Open Circuit Voltage memiliki keterbatasan ketika digunakan pada sistem dengan kondisi operasi yang dinamis karena rentan terhadap akumulasi kesalahan dan perubahan karakteristik baterai.",
    approach:
      "Mengevaluasi beberapa algoritma regresi machine learning menggunakan empat parameter operasional baterai (tegangan, arus, daya, dan waktu), kemudian memilih model terbaik berdasarkan trade-off antara akurasi prediksi dan kesesuaian implementasi pada perangkat embedded.",
    implementation:
      "Saya bertanggung jawab terhadap keseluruhan pipeline machine learning, mulai dari pengumpulan dan preprocessing dataset, feature engineering, pelatihan beberapa kandidat model regresi, evaluasi performa, hyperparameter tuning, hingga persiapan model untuk implementasi pada perangkat embedded.",
    outcome:
      "Proyek menghasilkan pipeline estimasi SoC berbasis machine learning yang menjadi fondasi untuk implementasi lebih lanjut pada sistem Battery Management System berbasis ESP32.",
    images: [
      "/images/projects/SOC-estimation-1.jpg",
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
      "/images/projects/power1.jpg",
      "/images/projects/power-quality-2.jpg",
      "/images/projects/power-quality-3.jpg",
    ],
    projectUrl: "https://github.com/username/power-quality-classifier",
    publishedAt: "2023",
  },
    {
    slug: "mirage-emotion-recognition-system",
    title: "MIRAGE: AI-Based Emotion Recognition & Recommendation System",
    category: "ml",
    categoryLabel: "Machine Learning",
    description:
      "MIRAGE merupakan aplikasi berbasis web yang mengintegrasikan model CNN dengan sistem rekomendasi berbasis rule-based untuk mendeteksi lima kategori emosi melalui gambar maupun webcam. Proyek ini dikembangkan sebagai capstone bootcamp dengan fokus pada deployment model machine learning ke aplikasi yang dapat digunakan secara nyata.",
    tech: ["Tensorflow", "Python", "Keras", "OpenCV", "Streamlit", "React", "TypeScript", "Vite", "Express.js", "Axios", "MongoDB", "Hugging Face API"],
    result: "Model mencapai test accuracy 86.47%, Macro F1-Score 0.8620, dan Weighted F1-Score 0.8640 dengan lima kelas emosi. Sistem berhasil di-deploy ke Hugging Face dan terintegrasi dengan aplikasi web untuk kebutuhan prediksi secara interaktif.",
    overview:
      "Sistem deteksi emosi berbasis Convolutional Neural Network (CNN) yang mampu mengenali lima ekspresi wajah dan memberikan rekomendasi berbasis AI untuk meningkatkan self-awareness serta mendukung screening awal kondisi emosional.",
    problem:
      "Banyak pengguna kesulitan mengenali kondisi emosionalnya secara objektif, sementara proses screening awal umumnya masih memerlukan observasi manual. Diperlukan sistem yang mampu melakukan deteksi emosi secara cepat dan memberikan rekomendasi awal yang mudah diakses.",
    approach:
      "Membangun model CNN empat lapis menggunakan dataset Human Face Emotions, menerapkan preprocessing untuk meningkatkan kualitas data, serta mengoptimalkan performa model melalui hyperparameter tuning dan early stopping sebelum diintegrasikan ke dalam aplikasi web.",
    implementation:
      "Saya berperan sebagai Project Manager sekaligus penanggung jawab pipeline machine learning, mulai dari perancangan alur pengembangan, preprocessing data, training, hyperparameter tuning, hingga deployment model ke Hugging Face. Sistem mendukung prediksi melalui upload gambar maupun webcam, menampilkan probabilitas setiap emosi, serta menghasilkan rekomendasi berbasis rule-based yang terintegrasi pada aplikasi web.",
    outcome:
      "Model berhasil diimplementasikan ke dalam aplikasi web dengan fitur autentikasi, dashboard, riwayat prediksi, serta inference berbasis API sehingga dapat digunakan sebagai media self-assessment kondisi emosional.",
    images: [
      "/images/projects/power1.jpg",
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