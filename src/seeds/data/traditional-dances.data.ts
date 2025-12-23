const traditionalDancesData = [
  // --- SUMATERA ---
  {
    province_name: 'Aceh',
    name: 'Tari Saman',
    description: 'Tarian "Tangan Seribu" yang menampilkan kekompakan gerakan tangan, badan, dan kepala yang sangat cepat tanpa iringan musik, hanya nyanyian syair.',
    video_url: 'https://www.youtube.com/watch?v=dummy_saman',
  },
  {
    province_name: 'Sumatera Utara',
    name: 'Tari Tor-Tor',
    description: 'Tarian seremonial suku Batak yang diiringi musik gondang. Gerakan tangan (manortor) memiliki makna penghormatan kepada roh leluhur dan raja.',
    video_url: 'https://www.youtube.com/watch?v=dummy_tortor',
  },
  {
    province_name: 'Sumatera Barat',
    name: 'Tari Piring',
    description: 'Tarian atraktif menggunakan piring di kedua tangan yang diayunkan dengan cepat tanpa terlepas, diakhiri dengan menari di atas pecahan kaca.',
    video_url: 'https://www.youtube.com/watch?v=dummy_piring',
  },
  {
    province_name: 'Riau',
    name: 'Tari Zapin',
    description: 'Tarian rumpun Melayu yang kental dengan pengaruh Arab/Islam, mengutamakan gerakan kaki (langkah) yang lincah mengikuti irama gambus.',
    video_url: 'https://www.youtube.com/watch?v=dummy_zapin',
  },
  {
    province_name: 'Kepulauan Riau',
    name: 'Tari Melemang',
    description: 'Tarian keraton dari Bintan yang dahulu hanya dipersembahkan bagi Raja, menampilkan kecakapan mengambil koin sambil melentingkan tubuh.',
    video_url: 'https://www.youtube.com/watch?v=dummy_melemang',
  },
  {
    province_name: 'Jambi',
    name: 'Tari Sekapur Sirih',
    description: 'Tarian penyambutan tamu kehormatan yang menggambarkan ketulusan dan keramahan masyarakat Jambi, diakhiri pemberian kapur sirih.',
    video_url: 'https://www.youtube.com/watch?v=dummy_sekapursirih',
  },
  {
    province_name: 'Sumatera Selatan',
    name: 'Tari Gending Sriwijaya',
    description: 'Tarian kolosal peninggalan kemegahan Kerajaan Sriwijaya untuk menyambut tamu raja, penari membawa tepak berisi kapur sirih.',
    video_url: 'https://www.youtube.com/watch?v=dummy_gending',
  },
  {
    province_name: 'Kepulauan Bangka Belitung',
    name: 'Tari Campak',
    description: 'Tarian pergaulan muda-mudi yang menggambarkan keceriaan, biasanya dipentaskan saat musim panen padi.',
    video_url: 'https://www.youtube.com/watch?v=dummy_campak',
  },
  {
    province_name: 'Bengkulu',
    name: 'Tari Andun',
    description: 'Tarian rakyat yang dilakukan pada pesta perkawinan, seringkali menjadi ajang mencari jodoh bagi muda-mudi (nari adu-adu).',
    video_url: 'https://www.youtube.com/watch?v=dummy_andun',
  },
  {
    province_name: 'Lampung',
    name: 'Tari Sigeh Pengunten',
    description: 'Tarian penyambutan tamu agung sebagai representasi penghormatan (Nemui Nyimah), penari mengenakan mahkota Siger.',
    video_url: 'https://www.youtube.com/watch?v=dummy_sigeh',
  },

  // --- JAWA ---
  {
    province_name: 'Jakarta Raya',
    name: 'Tari Topeng Betawi',
    description: 'Pertunjukan teater tari di mana penari mengenakan topeng kayu dan bercerita melalui gerakan lincah khas Betawi.',
    video_url: 'https://www.youtube.com/watch?v=dummy_topeng',
  },
  {
    province_name: 'Banten',
    name: 'Tari Rampak Bedug',
    description: 'Perpaduan seni tari dan musik bedug yang dimainkan secara serempak (rampak), menggambarkan semangat religius.',
    video_url: 'https://www.youtube.com/watch?v=dummy_rampak',
  },
  {
    province_name: 'Jawa Barat',
    name: 'Tari Jaipong',
    description: 'Tarian pergaulan dengan gerakan yang dinamis, erotis, dan penuh semangat (3G: Goyang, Gevok, Geol).',
    video_url: 'https://www.youtube.com/watch?v=dummy_jaipong',
  },
  {
    province_name: 'Jawa Tengah',
    name: 'Tari Gambyong',
    description: 'Tarian klasik keraton Surakarta yang lemah gemulai, awalnya merupakan tarian rakyat untuk memanggil Dewi Padi.',
    video_url: 'https://www.youtube.com/watch?v=dummy_gambyong',
  },
  {
    province_name: 'Daerah Istimewa Yogyakarta',
    name: 'Tari Serimpi',
    description: 'Tarian sakral keraton yang ditarikan oleh empat orang putri, melambangkan empat unsur dunia (api, air, angin, tanah).',
    video_url: 'https://www.youtube.com/watch?v=dummy_serimpi',
  },
  {
    province_name: 'Jawa Timur',
    name: 'Tari Reog Ponorogo',
    description: 'Seni pertunjukan magis yang menampilkan penari utama mengenakan topeng kepala singa berhias bulu merak seberat 50kg.',
    video_url: 'https://www.youtube.com/watch?v=dummy_reog',
  },

  // --- BALI & NUSA TENGGARA ---
  {
    province_name: 'Bali',
    name: 'Tari Kecak',
    description: 'Drama tari yang mengisahkan Ramayana, ditarikan oleh puluhan pria yang duduk melingkar menyerukan "cak-cak-cak" tanpa alat musik.',
    video_url: 'https://www.youtube.com/watch?v=dummy_kecak',
  },
  {
    province_name: 'Nusa Tenggara Barat',
    name: 'Tari Gandrung Lombok',
    description: 'Tarian pergaulan mirip dengan Gandrung Jawa, di mana penari wanita menari bersama penari pria (pengibing) dari penonton.',
    video_url: 'https://www.youtube.com/watch?v=dummy_gandrung',
  },
  {
    province_name: 'Nusa Tenggara Timur',
    name: 'Tari Caci',
    description: 'Tarian perang sekaligus permainan rakyat Manggarai berupa pertarungan saling cambuk antara dua laki-laki.',
    video_url: 'https://www.youtube.com/watch?v=dummy_caci',
  },

  // --- KALIMANTAN ---
  {
    province_name: 'Kalimantan Barat',
    name: 'Tari Monong',
    description: 'Tarian penyembuhan suku Dayak untuk menolak penyakit dan memohon kesembuhan dari Jubata (Tuhan).',
    video_url: 'https://www.youtube.com/watch?v=dummy_monong',
  },
  {
    province_name: 'Kalimantan Tengah',
    name: 'Tari Giring-Giring',
    description: 'Tarian pergaulan suku Dayak Maanyan menggunakan tongkat bambu yang berisi biji-bijian sehingga menghasilkan suara musik.',
    video_url: 'https://www.youtube.com/watch?v=dummy_giring',
  },
  {
    province_name: 'Kalimantan Selatan',
    name: 'Tari Baksa Kembang',
    description: 'Tarian klasik keraton Banjar untuk menyambut tamu agung, penari membawa rangkaian bunga melati (Bogam).',
    video_url: 'https://www.youtube.com/watch?v=dummy_baksa',
  },
  {
    province_name: 'Kalimantan Timur',
    name: 'Tari Datun Julud',
    description: 'Tarian wanita suku Dayak Kenyah yang menggunakan bulu burung enggang di jari-jari tangan, melambangkan keanggunan.',
    video_url: 'https://www.youtube.com/watch?v=dummy_datun',
  },
  {
    province_name: 'Kalimantan Utara',
    name: 'Tari Magunatip',
    description: 'Tarian ketangkasan kaki suku Dayak Tahol yang melompat di sela-sela jepitan batang bambu yang dipukul (mirip Tari Tongkat).',
    video_url: 'https://www.youtube.com/watch?v=dummy_magunatip',
  },

  // --- SULAWESI ---
  {
    province_name: 'Sulawesi Utara',
    name: 'Tari Maengket',
    description: 'Tarian rakyat Minahasa yang terdiri dari tiga babak: panen padi (Makamberu), rumah baru (Marambak), dan pergaulan (Lalayaan).',
    video_url: 'https://www.youtube.com/watch?v=dummy_maengket',
  },
  {
    province_name: 'Gorontalo',
    name: 'Tari Saronde',
    description: 'Tarian pergaulan yang diangkat dari tradisi pernikahan adat Gorontalo, dilakukan oleh mempelai pria dan wanita.',
    video_url: 'https://www.youtube.com/watch?v=dummy_saronde',
  },
  {
    province_name: 'Sulawesi Tengah',
    name: 'Tari Dero',
    description: 'Tarian massal masyarakat Poso di mana penari membentuk lingkaran sambil bergandengan tangan, melambangkan persaudaraan.',
    video_url: 'https://www.youtube.com/watch?v=dummy_dero',
  },
  {
    province_name: 'Sulawesi Barat',
    name: 'Tari Patuddu',
    description: 'Tarian penyambutan tamu yang dibawakan oleh wanita Mandar dengan gerakan lemah gemulai memainkan kipas.',
    video_url: 'https://www.youtube.com/watch?v=dummy_patuddu',
  },
  {
    province_name: 'Sulawesi Selatan',
    name: 'Tari Kipas Pakarena',
    description: 'Tarian klasik Gowa yang mengekspresikan kelembutan wanita namun diiringi tabuhan gendang yang sangat keras dan cepat.',
    video_url: 'https://www.youtube.com/watch?v=dummy_pakarena',
  },
  {
    province_name: 'Sulawesi Tenggara',
    name: 'Tari Lulo (Molulo)',
    description: 'Tarian persahabatan suku Tolaki yang dilakukan secara massal membentuk lingkaran, wajib ada dalam setiap pesta rakyat.',
    video_url: 'https://www.youtube.com/watch?v=dummy_lulo',
  },

  // --- MALUKU & PAPUA ---
  {
    province_name: 'Maluku',
    name: 'Tari Cakalele',
    description: 'Tarian perang tradisional yang dibawakan pria dengan parang (golok) dan salawaku (tameng), melambangkan jiwa kepahlawanan.',
    video_url: 'https://www.youtube.com/watch?v=dummy_cakalele',
  },
  {
    province_name: 'Maluku Utara',
    name: 'Tari Soya-Soya',
    description: 'Tarian heroisme untuk mengenang perjuangan rakyat Ternate mengusir penjajah Portugis, ditarikan secara massal.',
    video_url: 'https://www.youtube.com/watch?v=dummy_soya',
  },
  {
    province_name: 'Papua',
    name: 'Tari Yospan',
    description: 'Singkatan dari Yosim Pancar, tarian pergaulan yang energik dan jenaka, terkenal dengan gerakan "seka" dan "pancar".',
    video_url: 'https://www.youtube.com/watch?v=dummy_yospan',
  },
  {
    province_name: 'Papua Barat',
    name: 'Tari Suanggi',
    description: 'Tarian ritual yang bernuansa magis untuk mengusir roh jahat (Suanggi) yang dipercaya membawa kematian.',
    video_url: 'https://www.youtube.com/watch?v=dummy_suanggi',
  },
  {
    province_name: 'Papua Selatan',
    name: 'Tari Gatzi',
    description: 'Tarian adat suku Marind-Anim yang dilakukan saat upacara sasi atau pesta adat dengan iringan tifa yang khas.',
    video_url: 'https://www.youtube.com/watch?v=dummy_gatzi',
  },
  {
    province_name: 'Papua Tengah',
    name: 'Tari Waita',
    description: 'Tarian perang atau tarian semangat dari suku Mee yang dilakukan secara massal sambil berlari-lari kecil membentuk lingkaran.',
    video_url: 'https://www.youtube.com/watch?v=dummy_waita',
  },
  {
    province_name: 'Papua Pegunungan',
    name: 'Tari Perang Dani',
    description: 'Simulasi perang suku Dani di Lembah Baliem, penari pria membawa tombak dan panah, menampilkan kekuatan fisik dan strategi.',
    video_url: 'https://www.youtube.com/watch?v=dummy_perangdani',
  },
  {
    province_name: 'Papua Barat Daya',
    name: 'Tari Lalayon',
    description: 'Tarian pergaulan dari daerah Sorong untuk mencari jodoh, melambangkan hubungan romantis muda-mudi.',
    video_url: 'https://www.youtube.com/watch?v=dummy_lalayon',
  },
];

export default traditionalDancesData;