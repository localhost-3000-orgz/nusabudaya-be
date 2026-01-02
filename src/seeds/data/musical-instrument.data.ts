const musicalInstrumentsData = [
  // --- SUMATERA ---
  {
    province_name: 'Aceh',
    name: 'Serune Kalee',
    cara_main: 'Ditiup',
    image_url: 'https://example.com/music/serune-kalee.jpg',
  },
  {
    province_name: 'Sumatera Utara',
    name: 'Aramba',
    cara_main: 'Dipukul',
    image_url: 'https://example.com/music/aramba.jpg',
  },
  {
    province_name: 'Sumatera Barat',
    name: 'Saluang',
    cara_main: 'Ditiup',
    image_url: 'https://example.com/music/saluang.jpg',
  },
  {
    province_name: 'Riau',
    name: 'Gambus',
    cara_main: 'Dipetik',
    image_url: 'https://example.com/music/gambus-riau.jpg',
  },
  {
    province_name: 'Kepulauan Riau',
    name: 'Gendang Panjang',
    cara_main: 'Ditepuk',
    image_url: 'https://example.com/music/gendang-panjang.jpg',
  },
  {
    province_name: 'Jambi',
    name: 'Serangko',
    cara_main: 'Ditiup',
    image_url: 'https://example.com/music/serangko.jpg',
  },
  {
    province_name: 'Sumatera Selatan',
    name: 'Genggong',
    cara_main: 'Ditiup/Digetar',
    image_url: 'https://example.com/music/genggong.jpg',
  },
  {
    province_name: 'Kepulauan Bangka Belitung',
    name: 'Dambus',
    cara_main: 'Dipetik',
    image_url: 'https://example.com/music/dambus.jpg',
  },
  {
    province_name: 'Bengkulu',
    name: 'Doll',
    cara_main: 'Dipukul',
    image_url: 'https://example.com/music/doll.jpg',
  },
  {
    province_name: 'Lampung',
    name: 'Bapang / Cetik',
    cara_main: 'Dipukul',
    image_url: 'https://example.com/music/bapang.jpg',
  },

  // --- JAWA ---
  {
    province_name: 'Jakarta Raya',
    name: 'Tehyan',
    cara_main: 'Digesek',
    image_url: 'https://example.com/music/tehyan.jpg',
  },
  {
    province_name: 'Banten',
    name: 'Dogdog Lojor',
    cara_main: 'Ditepuk',
    image_url: 'https://example.com/music/dogdog-lojor.jpg',
  },
  {
    province_name: 'Jawa Barat',
    name: 'Angklung',
    cara_main: 'Digoyangkan',
    image_url: 'https://example.com/music/angklung.jpg',
  },
  {
    province_name: 'Jawa Tengah',
    name: 'Gamelan (Saron)',
    cara_main: 'Dipukul',
    image_url: 'https://example.com/music/gamelan.jpg',
  },
  {
    province_name: 'Daerah Istimewa Yogyakarta',
    name: 'Gamelan (Bonang)',
    cara_main: 'Dipukul',
    image_url: 'https://example.com/music/bonang.jpg',
  },
  {
    province_name: 'Jawa Timur',
    name: 'Gamelan (Kendang)',
    cara_main: 'Dipukul/Ditepuk',
    image_url: 'https://example.com/music/kendang.jpg',
  },

  // --- BALI & NUSA TENGGARA ---
  {
    province_name: 'Bali',
    name: 'Ceng-ceng',
    cara_main: 'Dipukul/Diadu',
    image_url: 'https://example.com/music/ceng-ceng.jpg',
  },
  {
    province_name: 'Nusa Tenggara Barat',
    name: 'Sarone',
    cara_main: 'Ditiup',
    image_url: 'https://example.com/music/sarone.jpg',
  },
  {
    province_name: 'Nusa Tenggara Timur',
    name: 'Sasando',
    cara_main: 'Dipetik',
    image_url: 'https://example.com/music/sasando.jpg',
  },

  // --- KALIMANTAN ---
  {
    province_name: 'Kalimantan Barat',
    name: 'Tuma',
    cara_main: 'Ditepuk',
    image_url: 'https://example.com/music/tuma.jpg',
  },
  {
    province_name: 'Kalimantan Tengah',
    name: 'Japen',
    cara_main: 'Dipetik',
    image_url: 'https://example.com/music/japen.jpg',
  },
  {
    province_name: 'Kalimantan Selatan',
    name: 'Panting',
    cara_main: 'Dipetik',
    image_url: 'https://example.com/music/panting.jpg',
  },
  {
    province_name: 'Kalimantan Timur',
    name: 'Sampe',
    cara_main: 'Dipetik',
    image_url: 'https://example.com/music/sampe.jpg',
  },
  {
    province_name: 'Kalimantan Utara',
    name: 'Rebab / Babun',
    cara_main: 'Digesek',
    image_url: 'https://example.com/music/rebab.jpg',
  },

  // --- SULAWESI ---
  {
    province_name: 'Sulawesi Utara',
    name: 'Kolintang',
    cara_main: 'Dipukul',
    image_url: 'https://example.com/music/kolintang.jpg',
  },
  {
    province_name: 'Gorontalo',
    name: 'Polopalo',
    cara_main: 'Dipukul/Digetar',
    image_url: 'https://example.com/music/polopalo.jpg',
  },
  {
    province_name: 'Sulawesi Tengah',
    name: 'Ganda',
    cara_main: 'Ditepuk',
    image_url: 'https://example.com/music/ganda.jpg',
  },
  {
    province_name: 'Sulawesi Barat',
    name: 'Kecapi Mandar',
    cara_main: 'Dipetik',
    image_url: 'https://example.com/music/kecapi-mandar.jpg',
  },
  {
    province_name: 'Sulawesi Selatan',
    name: 'Kesok-kesok',
    cara_main: 'Digesek',
    image_url: 'https://example.com/music/kesok-kesok.jpg',
  },
  {
    province_name: 'Sulawesi Tenggara',
    name: 'Ladolado',
    cara_main: 'Dipukul',
    image_url: 'https://example.com/music/ladolado.jpg',
  },

  // --- MALUKU & PAPUA ---
  {
    province_name: 'Maluku',
    name: 'Tahuri',
    cara_main: 'Ditiup',
    image_url: 'https://example.com/music/tahuri.jpg',
  },
  {
    province_name: 'Maluku Utara',
    name: 'Fu',
    cara_main: 'Ditiup',
    image_url: 'https://example.com/music/fu.jpg',
  },
  {
    province_name: 'Papua',
    name: 'Tifa',
    cara_main: 'Ditepuk',
    image_url: 'https://example.com/music/tifa.jpg',
  },
  {
    province_name: 'Papua Barat',
    name: 'Guoto',
    cara_main: 'Dipetik',
    image_url: 'https://example.com/music/guoto.jpg',
  },
  {
    province_name: 'Papua Selatan',
    name: 'Tifa Syak',
    cara_main: 'Ditepuk',
    image_url: 'https://example.com/music/tifa-syak.jpg',
  },
  {
    province_name: 'Papua Tengah',
    name: 'Pikon',
    cara_main: 'Ditiup/Digetar',
    image_url: 'https://example.com/music/pikon.jpg',
  },
  {
    province_name: 'Papua Pegunungan',
    name: 'Pikon',
    cara_main: 'Ditiup/Digetar',
    image_url: 'https://example.com/music/pikon-pegunungan.jpg',
  },
  {
    province_name: 'Papua Barat Daya',
    name: 'Triton',
    cara_main: 'Ditiup',
    image_url: 'https://example.com/music/triton.jpg',
  },
];

export default musicalInstrumentsData;