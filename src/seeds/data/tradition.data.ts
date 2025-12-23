const traditionsData = [
  // --- SUMATERA ---
  {
    province_name: 'Aceh',
    name: 'Meugang',
    description: 'Tradisi memasak daging dan menikmatinya bersama keluarga sehari sebelum Ramadhan, Idul Fitri, dan Idul Adha.',
    event_date: '1 Ramadhan, 1 Syawal, 10 Dzulhijjah',
  },
  {
    province_name: 'Sumatera Utara',
    name: 'Fahombo (Lompat Batu)',
    description: 'Tradisi pendewasaan pemuda Nias dengan melompati tumpukan batu setinggi 2 meter.',
    event_date: 'Fleksibel (Upacara Adat)',
  },
  {
    province_name: 'Sumatera Barat',
    name: 'Tabuik',
    description: 'Perayaan memperingati Asyura (gugurnya Imam Husein) dengan mengarak "Tabuik" ke laut di Pariaman.',
    event_date: '10 Muharram',
  },
  {
    province_name: 'Riau',
    name: 'Pacu Jalur',
    description: 'Lomba dayung perahu panjang tradisional di Sungai Kuantan yang melibatkan ratusan pendayung.',
    event_date: 'Agustus (HUT RI)',
  },
  {
    province_name: 'Kepulauan Riau',
    name: 'Mandi Safar',
    description: 'Ritual mandi bersama di laut untuk menolak bala dan menyucikan diri.',
    event_date: 'Rabu terakhir bulan Safar',
  },
  {
    province_name: 'Jambi',
    name: 'Kenduri Sko',
    description: 'Upacara adat pemberian gelar kepada pemimpin adat dan pembersihan benda pusaka.',
    event_date: 'Fleksibel (Pascapanen)',
  },
  {
    province_name: 'Sumatera Selatan',
    name: 'Lomba Bidar',
    description: 'Lomba perahu tradisional di Sungai Musi yang sudah ada sejak zaman Kesultanan Palembang.',
    event_date: '17 Agustus / Hari Jadi Palembang',
  },
  {
    province_name: 'Kepulauan Bangka Belitung',
    name: 'Perang Ketupat',
    description: 'Tradisi saling melempar ketupat di Pantai Tempilang sebagai simbol tolak bala.',
    event_date: 'Masuk bulan Ruwah (Sya\'ban)',
  },
  {
    province_name: 'Bengkulu',
    name: 'Tabot',
    description: 'Upacara tradisional mengenang kisah kepahlawanan dan kematian cucu Nabi Muhammad SAW, Husein.',
    event_date: '1-10 Muharram',
  },
  {
    province_name: 'Lampung',
    name: 'Begawi',
    description: 'Upacara adat pengambilan gelar (adok) bagi masyarakat adat Lampung Saibatin dan Pepadun.',
    event_date: 'Pernikahan / Acara Besar',
  },

  // --- JAWA ---
  {
    province_name: 'Jakarta Raya',
    name: 'Palang Pintu',
    description: 'Tradisi adu pantun dan silat dalam prosesi pernikahan adat Betawi sebelum pengantin pria masuk.',
    event_date: 'Resepsi Pernikahan',
  },
  {
    province_name: 'Banten',
    name: 'Seba Baduy',
    description: 'Tradisi warga Suku Baduy berjalan kaki menyerahkan hasil bumi kepada pemerintah daerah (Bapak Gede).',
    event_date: 'Bulan Safar (Kalender Baduy)',
  },
  {
    province_name: 'Jawa Barat',
    name: 'Seren Taun',
    description: 'Upacara adat panen padi masyarakat Sunda (Cigugur Kuningan) sebagai wujud syukur.',
    event_date: '22 Rayagung (Kalender Sunda)',
  },
  {
    province_name: 'Jawa Tengah',
    name: 'Dugderan',
    description: 'Festival di Semarang untuk menandai dimulainya ibadah puasa bulan Ramadhan.',
    event_date: 'Sehari sebelum Ramadhan',
  },
  {
    province_name: 'Daerah Istimewa Yogyakarta',
    name: 'Sekaten',
    description: 'Rangkaian kegiatan tahunan memperingati Maulid Nabi Muhammad SAW di Alun-alun Utara.',
    event_date: '5-12 Rabiul Awal',
  },
  {
    province_name: 'Jawa Timur',
    name: 'Karapan Sapi',
    description: 'Lomba pacuan sapi khas masyarakat Madura yang sangat bergengsi.',
    event_date: 'Agustus - Oktober',
  },

  // --- BALI & NUSA TENGGARA ---
  {
    province_name: 'Bali',
    name: 'Ogoh-ogoh',
    description: 'Parade patung raksasa (simbol Bhuta Kala) yang diarak keliling desa lalu dibakar sebelum Nyepi.',
    event_date: 'Malam Pengerupukan (H-1 Nyepi)',
  },
  {
    province_name: 'Nusa Tenggara Barat',
    name: 'Bau Nyale',
    description: 'Tradisi masyarakat Sasak menangkap cacing laut (Nyale) yang dipercaya jelmaan Putri Mandalika.',
    event_date: 'Februari / Maret',
  },
  {
    province_name: 'Nusa Tenggara Timur',
    name: 'Pasola',
    description: 'Permainan ketangkasan saling melempar lembing kayu dari atas kuda di Sumba.',
    event_date: 'Februari / Maret (Musim Tanam)',
  },

  // --- KALIMANTAN ---
  {
    province_name: 'Kalimantan Barat',
    name: 'Robo-robo',
    description: 'Ritual tolak bala masyarakat Mempawah dengan makan bersama di luar rumah.',
    event_date: 'Rabu terakhir bulan Safar',
  },
  {
    province_name: 'Kalimantan Tengah',
    name: 'Tiwah',
    description: 'Upacara kematian tingkat akhir suku Dayak Ngaju untuk mengantarkan roh leluhur ke Lewu Tatau.',
    event_date: 'Musim Kemarau (Juli-September)',
  },
  {
    province_name: 'Kalimantan Selatan',
    name: 'Aruh Baharin',
    description: 'Upacara syukuran panen padi oleh masyarakat Dayak Meratus.',
    event_date: 'Usai Panen Raya',
  },
  {
    province_name: 'Kalimantan Timur',
    name: 'Erau',
    description: 'Festival budaya Kesultanan Kutai Kartanegara Ing Martadipura.',
    event_date: 'September',
  },
  {
    province_name: 'Kalimantan Utara',
    name: 'Iraw Tengkayu',
    description: 'Upacara adat suku Tidung menurunkan Padaw Tuju Dulung (perahu) ke laut.',
    event_date: 'Desember (2 tahun sekali)',
  },

  // --- SULAWESI ---
  {
    province_name: 'Sulawesi Utara',
    name: 'Tulude',
    description: 'Upacara adat masyarakat Nusa Utara (Sangihe) sebagai ucapan syukur tahun yang lalu.',
    event_date: '31 Januari',
  },
  {
    province_name: 'Gorontalo',
    name: 'Tumbilotohe',
    description: 'Tradisi pasang lampu (minyak tanah) serentak menjelang Idul Fitri.',
    event_date: '3 malam terakhir Ramadhan',
  },
  {
    province_name: 'Sulawesi Tengah',
    name: 'Mora\'a',
    description: 'Tradisi menangkap ikan bersama-sama saat air laut surut di Danau Poso atau pesisir.',
    event_date: 'Saat air surut',
  },
  {
    province_name: 'Sulawesi Barat',
    name: 'Sayyang Pattu\'du',
    description: 'Tradisi Kuda Menari untuk merayakan anak yang telah menamatkan bacaan Al-Qur\'an.',
    event_date: 'Bulan Maulid',
  },
  {
    province_name: 'Sulawesi Selatan',
    name: 'Rambu Solo',
    description: 'Upacara pemakaman adat Toraja yang megah untuk mengantar arwah ke alam roh.',
    event_date: 'Juli - September',
  },
  {
    province_name: 'Sulawesi Tenggara',
    name: 'Karia',
    description: 'Tradisi pingitan bagi gadis Muna yang beranjak dewasa sebelum menikah.',
    event_date: 'Pasca Idul Fitri',
  },

  // --- MALUKU & PAPUA ---
  {
    province_name: 'Maluku',
    name: 'Pukul Manyapu',
    description: 'Atraksi saling memukul dengan lidi enau di Desa Mamala dan Morella.',
    event_date: '7 Syawal',
  },
  {
    province_name: 'Maluku Utara',
    name: 'Kololi Kie',
    description: 'Tradisi mengelilingi gunung Gamalama atau pulau Ternate sebagai tolak bala.',
    event_date: 'Festival Ternate',
  },
  {
    province_name: 'Papua',
    name: 'Bakar Batu',
    description: 'Tradisi memasak bersama menggunakan batu panas sebagai simbol perdamaian dan syukur.',
    event_date: 'Acara Adat / Syukuran',
  },
  {
    province_name: 'Papua Barat',
    name: 'Mansorandak',
    description: 'Tradisi injak piring untuk menyambut keluarga yang baru pulang dari perantauan jauh.',
    event_date: 'Saat penyambutan tamu',
  },
  {
    province_name: 'Papua Selatan',
    name: 'Pesta Ulat Sagu',
    description: 'Tradisi suku Asmat dan Marind mengumpulkan dan menyantap ulat sagu dalam upacara adat.',
    event_date: 'Musim Panen Sagu',
  },
  {
    province_name: 'Papua Tengah',
    name: 'Yuwo',
    description: 'Upacara pembayaran maskawin atau penyelesaian masalah adat di wilayah Meepago.',
    event_date: 'Pernikahan / Konflik Adat',
  },
  {
    province_name: 'Papua Pegunungan',
    name: 'Festival Lembah Baliem',
    description: 'Simulasi perang antar suku Dani, Lani, dan Yali yang kini menjadi festival budaya damai.',
    event_date: 'Agustus',
  },
  {
    province_name: 'Papua Barat Daya',
    name: 'Suling Tambur',
    description: 'Festival musik tradisional menggunakan suling bambu dan tambur besar di Raja Ampat.',
    event_date: 'Oktober / Festival Bahari',
  },
];

export default traditionsData;