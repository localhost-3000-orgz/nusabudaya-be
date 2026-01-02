const traditionalWeaponsData = [
  // --- SUMATERA ---
  {
    province_name: 'Aceh',
    name: 'Rencong',
    description: 'Senjata tikam belati yang mata pisaunya melengkung berbentuk huruf L, melambangkan lafaz "Bismillah". Dahulu digunakan para pejuang Aceh melawan penjajah.',
    image_url: 'https://example.com/weapons/rencong.jpg',
  },
  {
    province_name: 'Sumatera Utara',
    name: 'Piso Surit',
    description: 'Senjata khas suku Batak Karo. Bentuknya melengkung seperti ular dan gagangnya sering dihiasi ornamen. "Surit" berarti melengkung atau menyisir.',
    image_url: 'https://example.com/weapons/piso-surit.jpg',
  },
  {
    province_name: 'Sumatera Barat',
    name: 'Kerambit',
    description: 'Senjata genggam kecil berbentuk melengkung seperti cakar harimau. Sangat berbahaya karena digunakan untuk serangan jarak dekat yang mematikan.',
    image_url: 'https://example.com/weapons/kerambit.jpg',
  },
  {
    province_name: 'Riau',
    name: 'Pedang Jenawi',
    description: 'Pedang panjang yang lurus dan tajam, biasanya digunakan oleh para panglima perang kerajaan Melayu atau bangsawan.',
    image_url: 'https://example.com/weapons/pedang-jenawi.jpg',
  },
  {
    province_name: 'Kepulauan Riau',
    name: 'Badik Tumbuk Lada',
    description: 'Senjata tikam pendek sekitar 27-29 cm, sarungnya sering dilapisi lempengan perak atau emas dengan ukiran rumit.',
    image_url: 'https://example.com/weapons/tumbuk-lada.jpg',
  },
  {
    province_name: 'Jambi',
    name: 'Keris Siginjai',
    description: 'Pusaka kebesaran Kesultanan Jambi. Memiliki lekuk (luk) berjumlah ganjil (biasanya 5) dan sarungnya terbuat dari emas murni.',
    image_url: 'https://example.com/weapons/keris-siginjai.jpg',
  },
  {
    province_name: 'Sumatera Selatan',
    name: 'Tombak Trisula',
    description: 'Tombak bermata tiga yang diyakini merupakan peninggalan pengaruh budaya Hindu-Budha pada masa Kerajaan Sriwijaya.',
    image_url: 'https://example.com/weapons/trisula.jpg',
  },
  {
    province_name: 'Kepulauan Bangka Belitung',
    name: 'Siwar Panjang',
    description: 'Menyerupai parang panjang dengan ujung yang meruncing, digunakan baik untuk senjata pertahanan diri maupun alat bekerja di hutan.',
    image_url: 'https://example.com/weapons/siwar.jpg',
  },
  {
    province_name: 'Bengkulu',
    name: 'Keris Bengkulu',
    description: 'Senjata tikam dengan bilah berlekuk, namun memiliki ciri khas gagang dan warangka yang lebih sederhana dibandingkan Keris Jawa.',
    image_url: 'https://example.com/weapons/keris-bengkulu.jpg',
  },
  {
    province_name: 'Lampung',
    name: 'Terapang',
    description: 'Senjata sejenis keris namun bilahnya agak lebar dan lurus (sedikit lekuk), sering menjadi benda pusaka dalam upacara adat Lampung.',
    image_url: 'https://example.com/weapons/terapang.jpg',
  },

  // --- JAWA ---
  {
    province_name: 'Jakarta Raya',
    name: 'Golok Betawi',
    description: 'Parang pendek dengan satu sisi tajam. Simbol jawara Betawi, namun juga alat serbaguna sehari-hari. Ada jenis Golok Simpenan (pusaka) dan Golok Gawe (kerja).',
    image_url: 'https://example.com/weapons/golok-betawi.jpg',
  },
  {
    province_name: 'Banten',
    name: 'Golok Ciomas',
    description: 'Golok legendaris dari wilayah Ciomas yang proses pembuatannya penuh ritual mistis dan hanya dilakukan pada bulan Maulid.',
    image_url: 'https://example.com/weapons/golok-ciomas.jpg',
  },
  {
    province_name: 'Jawa Barat',
    name: 'Kujang',
    description: 'Senjata pusaka tanah Pasundan dengan bentuk unik melengkung dan berlubang. Awalnya peralatan pertanian yang bertransformasi menjadi benda sakral.',
    image_url: 'https://example.com/weapons/kujang.jpg',
  },
  {
    province_name: 'Jawa Tengah',
    name: 'Keris (Jawa)',
    description: 'Senjata tikam asimetris dengan kelokan (luk) pada bilahnya. Dibuat dari logam berlapis (pamor) dan dianggap memiliki kekuatan spiritual.',
    image_url: 'https://example.com/weapons/keris-jawa.jpg',
  },
  {
    province_name: 'Daerah Istimewa Yogyakarta',
    name: 'Tombak Kyai Pleret',
    description: 'Selain Keris, tombak merupakan senjata utama prajurit keraton. Kyai Pleret adalah pusaka legendaris Mataram Islam.',
    image_url: 'https://example.com/weapons/tombak-yogya.jpg',
  },
  {
    province_name: 'Jawa Timur',
    name: 'Celurit',
    description: 'Senjata berbentuk bulan sabit khas suku Madura. Melambangkan keberanian dan harga diri (Carok).',
    image_url: 'https://example.com/weapons/celurit.jpg',
  },

  // --- BALI & NUSA TENGGARA ---
  {
    province_name: 'Bali',
    name: 'Keris Tayuhan',
    description: 'Keris khas Bali dengan ukuran yang umumnya lebih besar dan panjang dari Keris Jawa, gagangnya sering diukir bentuk dewa atau raksasa.',
    image_url: 'https://example.com/weapons/keris-bali.jpg',
  },
  {
    province_name: 'Nusa Tenggara Barat',
    name: 'Tulup',
    description: 'Senjata tiup (sumpit) suku Sasak yang digunakan untuk berburu, anak sumpitnya (ancar) biasanya diolesi racun getah pohon.',
    image_url: 'https://example.com/weapons/tulup.jpg',
  },
  {
    province_name: 'Nusa Tenggara Timur',
    name: 'Sundu',
    description: 'Sejenis keris lurus khas NTT. Bentuknya lurus tanpa lekuk, dengan gagang yang menyerupai sayap burung.',
    image_url: 'https://example.com/weapons/sundu.jpg',
  },

  // --- KALIMANTAN ---
  {
    province_name: 'Kalimantan Barat',
    name: 'Mandau',
    description: 'Parang pusaka suku Dayak. Bilahnya dihiasi ukiran dan lubang-lubang, gagangnya dari tanduk rusa, dan dilengkapi pisau kecil (Langgei).',
    image_url: 'https://example.com/weapons/mandau-kalbar.jpg',
  },
  {
    province_name: 'Kalimantan Tengah',
    name: 'Sipet (Sumpit)',
    description: 'Senjata tiup sepanjang 1,5-2 meter. Akurasinya sangat tinggi dan anak sumpitnya (damekl) beracun, digunakan untuk berburu atau perang senyap.',
    image_url: 'https://example.com/weapons/sipet.jpg',
  },
  {
    province_name: 'Kalimantan Selatan',
    name: 'Keris Bujak Beliung',
    description: 'Senjata tikam khas Banjar, mirip keris namun bilahnya lebih pendek dan lurus, sering digunakan dalam pertahanan diri jarak dekat.',
    image_url: 'https://example.com/weapons/bujak-beliung.jpg',
  },
  {
    province_name: 'Kalimantan Timur',
    name: 'Mandau',
    description: 'Senjata utama Dayak di Kaltim, sering diberi hiasan rambut manusia di gagangnya sebagai simbol keberanian masa lalu.',
    image_url: 'https://example.com/weapons/mandau-kaltim.jpg',
  },
  {
    province_name: 'Kalimantan Utara',
    name: 'Mandau',
    description: 'Senjata tajam sejenis parang yang digunakan suku Dayak di perbatasan, simbol kehormatan dan ksatria.',
    image_url: 'https://example.com/weapons/mandau-kaltara.jpg',
  },

  // --- SULAWESI ---
  {
    province_name: 'Sulawesi Utara',
    name: 'Santi',
    description: 'Pedang lurus khas Minahasa yang digunakan oleh para Waraney (ksatria) untuk berperang dan melindungi wilayah.',
    image_url: 'https://example.com/weapons/santi.jpg',
  },
  {
    province_name: 'Gorontalo',
    name: 'Wamilo',
    description: 'Senjata tajam seperti golok namun bagian ujungnya agak melebar dan melengkung ke bawah, sarungnya terbuat dari kayu kuning.',
    image_url: 'https://example.com/weapons/wamilo.jpg',
  },
  {
    province_name: 'Sulawesi Tengah',
    name: 'Pasatimpo',
    description: 'Pedang pendek dengan hulu bengkok ke bawah, sarungnya sering diberi tali anyaman. Dahulu digunakan untuk penyembuhan dan pengusir roh.',
    image_url: 'https://example.com/weapons/pasatimpo.jpg',
  },
  {
    province_name: 'Sulawesi Barat',
    name: 'Gayang',
    description: 'Senjata tikam suku Mandar, mirip dengan Badik atau Keris namun bilahnya lurus dan polos tanpa pamor.',
    image_url: 'https://example.com/weapons/gayang.jpg',
  },
  {
    province_name: 'Sulawesi Selatan',
    name: 'Badik',
    description: 'Senjata tikam bugis-makassar berukuran pendek. Dianggap sebagai identitas diri seorang laki-laki (siri\'), sisi tajamnya hanya satu.',
    image_url: 'https://example.com/weapons/badik.jpg',
  },
  {
    province_name: 'Sulawesi Tenggara',
    name: 'Parang Taawu',
    description: 'Parang khas suku Tolaki yang digunakan dalam perang serta upacara adat, dianggap benda keramat warisan leluhur.',
    image_url: 'https://example.com/weapons/parang-taawu.jpg',
  },

  // --- MALUKU & PAPUA ---
  {
    province_name: 'Maluku',
    name: 'Parang Salawaku',
    description: 'Satu set senjata yang terdiri dari Parang (pisau panjang) dan Salawaku (perisai ramping dengan motif kerang laut).',
    image_url: 'https://example.com/weapons/parang-salawaku.jpg',
  },
  {
    province_name: 'Maluku Utara',
    name: 'Parang Salawaku',
    description: 'Sama seperti Maluku, menjadi simbol kepahlawanan Kapitan Pattimura. Perisainya dihiasi motif "kakaktua" dari kerang mutiara.',
    image_url: 'https://example.com/weapons/parang-salawaku-utara.jpg',
  },
  {
    province_name: 'Papua',
    name: 'Busur dan Panah',
    description: 'Senjata utama masyarakat Papua untuk berburu dan berperang. Mata panah terbuat dari tulang hewan atau kayu keras yang diruncingkan.',
    image_url: 'https://example.com/weapons/panah-papua.jpg',
  },
  {
    province_name: 'Papua Barat',
    name: 'Parang',
    description: 'Parang kerja yang juga difungsikan sebagai senjata. Biasanya memiliki gagang kayu sederhana namun bilah bajanya sangat kuat.',
    image_url: 'https://example.com/weapons/parang-papua.jpg',
  },
  {
    province_name: 'Papua Selatan',
    name: 'Busur Marind',
    description: 'Busur panah khas suku Marind yang berukuran besar, terbuat dari bambu pilihan dengan tali busur dari rotan.',
    image_url: 'https://example.com/weapons/busur-marind.jpg',
  },
  {
    province_name: 'Papua Tengah',
    name: 'Pisau Belati Tulang',
    description: 'Pisau unik yang terbuat dari tulang kaki burung Kasuari. Sering dihiasi anyaman serat kulit kayu dan bulu kasuari pada gagangnya.',
    image_url: 'https://example.com/weapons/belati-tulang.jpg',
  },
  {
    province_name: 'Papua Pegunungan',
    name: 'Tombak Kanake',
    description: 'Tombak panjang suku Dani yang digunakan dalam perang suku jarak dekat, terbuat dari kayu hitam yang sangat keras.',
    image_url: 'https://example.com/weapons/tombak-kanake.jpg',
  },
  {
    province_name: 'Papua Barat Daya',
    name: 'Parang Raja Ampat',
    description: 'Senjata parang masyarakat pesisir yang digunakan untuk membuka hutan dan menjaga diri saat melaut.',
    image_url: 'https://example.com/weapons/parang-rajaampat.jpg',
  },
];

export default traditionalWeaponsData;