const traditionalHousesData = [
  // --- SUMATERA ---
  {
    province_name: 'Aceh',
    name: 'Rumoh Aceh (Krong Bade)',
    description: 'Rumah panggung kayu dengan tinggi tiang 2,5-3 meter. Memiliki tangga ganjil di depan dan pintu rendah yang mengharuskan tamu menunduk sebagai tanda hormat.',
    image_url: 'https://example.com/houses/rumoh-aceh.jpg',
  },
  {
    province_name: 'Sumatera Utara',
    name: 'Rumah Bolon',
    description: 'Rumah adat suku Batak berbentuk panggung persegi panjang dengan atap melengkung lancip di kedua ujungnya, dihiasi ukiran Gorga.',
    image_url: 'https://example.com/houses/rumah-bolon.jpg',
  },
  {
    province_name: 'Sumatera Barat',
    name: 'Rumah Gadang',
    description: 'Ikonik dengan atap "Gonjong" yang runcing menyerupai tanduk kerbau. Didesain tahan gempa dengan tiang yang tidak ditanam ke tanah, melainkan di atas batu datar.',
    image_url: 'https://example.com/houses/rumah-gadang.jpg',
  },
  {
    province_name: 'Riau',
    name: 'Selaso Jatuh Kembar',
    description: 'Rumah adat yang umumnya digunakan sebagai balai pertemuan adat, bukan tempat tinggal. Memiliki kolong dan selasar (balkon) yang lebih rendah dari ruang tengah.',
    image_url: 'https://example.com/houses/selaso-jatuh.jpg',
  },
  {
    province_name: 'Kepulauan Riau',
    name: 'Rumah Belah Bubung',
    description: 'Rumah panggung di atas air atau tepian sungai dengan atap berbentuk seperti punggung kuda (bubung) yang terbelah.',
    image_url: 'https://example.com/houses/belah-bubung.jpg',
  },
  {
    province_name: 'Jambi',
    name: 'Rumah Panggung Kajang Lako',
    description: 'Rumah panggung tradisional marga Batin dengan atap yang dinamakan "Kajang Lako" (perahu yang diberi atap), melambangkan kehidupan bahari masa lalu.',
    image_url: 'https://example.com/houses/kajang-lako.jpg',
  },
  {
    province_name: 'Sumatera Selatan',
    name: 'Rumah Limas',
    description: 'Rumah panggung bertingkat-tingkat (Bengkilas) yang melambangkan jenjang sosial masyarakat Palembang, dengan atap berbentuk limas.',
    image_url: 'https://example.com/houses/rumah-limas.jpg',
  },
  {
    province_name: 'Kepulauan Bangka Belitung',
    name: 'Rumah Rakit',
    description: 'Rumah yang dibangun mengapung di atas sungai atau tepian pantai dengan pondasi bambu/kayu yang disusun seperti rakit.',
    image_url: 'https://example.com/houses/rumah-rakit.jpg',
  },
  {
    province_name: 'Bengkulu',
    name: 'Rumah Bubungan Lima',
    description: 'Rumah panggung dengan material kayu medang kemuning dan atap ijuk, didesain untuk menahan banjir dan serangan binatang buas.',
    image_url: 'https://example.com/houses/bubungan-lima.jpg',
  },
  {
    province_name: 'Lampung',
    name: 'Nuwo Sesat',
    description: 'Awalnya berfungsi sebagai balai pertemuan adat (Sesat Agung) para penyimbang (kepala adat), berbentuk panggung dengan ornamen khas Lampung.',
    image_url: 'https://example.com/houses/nuwo-sesat.jpg',
  },

  // --- JAWA ---
  {
    province_name: 'Jakarta Raya',
    name: 'Rumah Kebaya',
    description: 'Rumah adat Betawi dengan atap berbentuk pelana yang dilipat, jika dilihat dari samping terlihat seperti lipatan kebaya. Memiliki teras luas untuk menerima tamu.',
    image_url: 'https://example.com/houses/rumah-kebaya.jpg',
  },
  {
    province_name: 'Banten',
    name: 'Sulah Nyanda (Baduy)',
    description: 'Rumah adat Suku Baduy yang sangat menyatu dengan alam, dibangun tanpa paku (menggunakan pasak/tali ijuk) dan menghadap utara/selatan.',
    image_url: 'https://example.com/houses/sulah-nyanda.jpg',
  },
  {
    province_name: 'Jawa Barat',
    name: 'Julang Ngapak',
    description: 'Salah satu jenis rumah adat Sunda dengan atap yang melebar di kedua sisi seolah-olah burung yang sedang mengepakkan sayap.',
    image_url: 'https://example.com/houses/julang-ngapak.jpg',
  },
  {
    province_name: 'Jawa Tengah',
    name: 'Rumah Joglo',
    description: 'Memiliki struktur utama berupa 4 tiang penyangga (Soko Guru) di tengah dan atap yang tinggi (Tajug), melambangkan status sosial priyayi.',
    image_url: 'https://example.com/houses/joglo-jateng.jpg',
  },
  {
    province_name: 'Daerah Istimewa Yogyakarta',
    name: 'Bangsal Kencono',
    description: 'Bagian utama dari Keraton Yogyakarta, sebuah paviliun terbuka (pendopo) agung dengan arsitektur Joglo yang sangat megah dan sakral.',
    image_url: 'https://example.com/houses/bangsal-kencono.jpg',
  },
  {
    province_name: 'Jawa Timur',
    name: 'Joglo Situbondo',
    description: 'Varian Joglo khas Jawa Timur dengan ciri khas tumpukan kayu (dara gepak) pada atap dan ukiran yang lebih sederhana namun tegas.',
    image_url: 'https://example.com/houses/joglo-situbondo.jpg',
  },

  // --- BALI & NUSA TENGGARA ---
  {
    province_name: 'Bali',
    name: 'Gapura Candi Bentar',
    description: 'Sebenarnya adalah gerbang masuk pekarangan rumah atau pura yang terbelah dua simetris, melambangkan keseimbangan alam semesta.',
    image_url: 'https://example.com/houses/candi-bentar.jpg',
  },
  {
    province_name: 'Nusa Tenggara Barat',
    name: 'Dalam Loka',
    description: 'Istana tua Kesultanan Sumbawa yang berbentuk panggung raksasa dengan 99 tiang penyangga, melambangkan Asmaul Husna.',
    image_url: 'https://example.com/houses/dalam-loka.jpg',
  },
  {
    province_name: 'Nusa Tenggara Timur',
    name: 'Musalaki',
    description: 'Rumah adat suku Ende Lio yang berfungsi sebagai tempat tinggal kepala suku (Mosalaki), dengan atap ilalang menjulang tinggi.',
    image_url: 'https://example.com/houses/musalaki.jpg',
  },

  // --- KALIMANTAN ---
  {
    province_name: 'Kalimantan Barat',
    name: 'Rumah Radakng',
    description: 'Rumah panjang suku Dayak Kanayatn yang bisa mencapai panjang 180 meter, dihuni oleh puluhan kepala keluarga dalam satu atap.',
    image_url: 'https://example.com/houses/rumah-radakng.jpg',
  },
  {
    province_name: 'Kalimantan Tengah',
    name: 'Rumah Betang',
    description: 'Rumah panggung panjang suku Dayak Ngaju yang dihuni secara komunal, melambangkan filosofi Huma Betang (kebersamaan dan gotong royong).',
    image_url: 'https://example.com/houses/rumah-betang.jpg',
  },
  {
    province_name: 'Kalimantan Selatan',
    name: 'Rumah Bubungan Tinggi',
    description: 'Jenis rumah Banjar yang paling ikonik dengan atap yang sangat curam (bubungan tinggi), dulunya merupakan kediaman sultan.',
    image_url: 'https://example.com/houses/bubungan-tinggi.jpg',
  },
  {
    province_name: 'Kalimantan Timur',
    name: 'Rumah Lamin',
    description: 'Rumah adat suku Dayak Kenyah yang terkenal dengan ukiran etnik berwarna cerah (kuning, merah, hitam) dan patung totem di depannya.',
    image_url: 'https://example.com/houses/rumah-lamin.jpg',
  },
  {
    province_name: 'Kalimantan Utara',
    name: 'Rumah Baloy',
    description: 'Perpaduan arsitektur rumah Tidung dan Dayak, berbahan kayu ulin, memiliki 4 ruang utama yang menghadap ke utara.',
    image_url: 'https://example.com/houses/rumah-baloy.jpg',
  },

  // --- SULAWESI ---
  {
    province_name: 'Sulawesi Utara',
    name: 'Walewangko',
    description: 'Rumah pewaris (rumah adat Minahasa) berbentuk panggung kayu dengan dua tangga di bagian depan kiri dan kanan.',
    image_url: 'https://example.com/houses/walewangko.jpg',
  },
  {
    province_name: 'Gorontalo',
    name: 'Dulohupa',
    description: 'Rumah panggung yang digunakan untuk musyawarah kerabat kerajaan, memiliki atap pelana dan pilar kayu yang kokoh.',
    image_url: 'https://example.com/houses/dulohupa.jpg',
  },
  {
    province_name: 'Sulawesi Tengah',
    name: 'Rumah Tambi',
    description: 'Rumah adat suku Lore berbentuk prisma segitiga di mana atap ijuk sekaligus berfungsi sebagai dinding, berukuran mungil.',
    image_url: 'https://example.com/houses/rumah-tambi.jpg',
  },
  {
    province_name: 'Sulawesi Barat',
    name: 'Rumah Boyang',
    description: 'Rumah adat suku Mandar berbentuk panggung. Ciri khasnya adalah "Tumbaq Layar" (penutup bubungan) yang menandakan status sosial pemiliknya.',
    image_url: 'https://example.com/houses/rumah-boyang.jpg',
  },
  {
    province_name: 'Sulawesi Selatan',
    name: 'Tongkonan',
    description: 'Rumah adat Toraja yang sangat terkenal dengan atap melengkung menyerupai perahu atau tanduk kerbau, dihiasi tanduk kerbau asli di tiang depan.',
    image_url: 'https://example.com/houses/tongkonan.jpg',
  },
  {
    province_name: 'Sulawesi Tenggara',
    name: 'Banua Tada',
    description: 'Rumah siku Buton yang dibangun tanpa paku, melainkan menggunakan pasak dan simpul. "Banua Tada" berarti rumah siku.',
    image_url: 'https://example.com/houses/banua-tada.jpg',
  },

  // --- MALUKU & PAPUA ---
  {
    province_name: 'Maluku',
    name: 'Baileo',
    description: 'Rumah adat yang tidak berdinding (terbuka) sebagai representasi keterbukaan masyarakat Maluku, digunakan untuk musyawarah dan upacara.',
    image_url: 'https://example.com/houses/baileo.jpg',
  },
  {
    province_name: 'Maluku Utara',
    name: 'Sasadu',
    description: 'Rumah adat suku Sahu di Halmahera Barat, berupa aula terbuka dengan tiang-tiang kayu besar, melambangkan kesetaraan.',
    image_url: 'https://example.com/houses/sasadu.jpg',
  },
  {
    province_name: 'Papua',
    name: 'Kariwari',
    description: 'Rumah adat suku Tobati-Enggros di Danau Sentani. Berbentuk limas segi delapan dengan atap kerucut, dikhususkan untuk pendidikan remaja laki-laki.',
    image_url: 'https://example.com/houses/kariwari.jpg',
  },
  {
    province_name: 'Papua Barat',
    name: 'Mod Aki Aksa (Kaki Seribu)',
    description: 'Rumah adat suku Arfak yang memiliki tiang penyangga yang sangat banyak (seperti kaki seribu) untuk pertahanan dan kestabilan di pegunungan.',
    image_url: 'https://example.com/houses/kaki-seribu.jpg',
  },
  {
    province_name: 'Papua Selatan',
    name: 'Rumah Jew',
    description: 'Rumah bujang suku Asmat yang panjangnya bisa mencapai 50 meter. Dibangun tanpa paku besi, hanya menggunakan tali rotan dan akar.',
    image_url: 'https://example.com/houses/rumah-jew.jpg',
  },
  {
    province_name: 'Papua Tengah',
    name: 'Rumah Ewa (Igkoje)',
    description: 'Rumah adat suku Mee, berbentuk panggung persegi menyerupai Honai namun dindingnya terbuat dari papan kayu yang kuat.',
    image_url: 'https://example.com/houses/rumah-ewa.jpg',
  },
  {
    province_name: 'Papua Pegunungan',
    name: 'Honai',
    description: 'Rumah khas suku Dani di pegunungan. Berbentuk jamur dengan atap jerami menutup hingga ke bawah untuk menahan hawa dingin ekstrem.',
    image_url: 'https://example.com/houses/honai.jpg',
  },
  {
    province_name: 'Papua Barat Daya',
    name: 'Rumah Rakit Raja Ampat',
    description: 'Rumah tradisional masyarakat pesisir Raja Ampat yang dibangun mengapung di atas air laut yang jernih.',
    image_url: 'https://example.com/houses/rumah-rakit-rajaampat.jpg',
  },
];

export default traditionalHousesData;