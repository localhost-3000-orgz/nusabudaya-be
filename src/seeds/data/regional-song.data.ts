const regionalSongsData = [
  // --- SUMATERA ---
  {
    province_name: 'Aceh',
    title: 'Bungong Jeumpa',
    lyrics: `Bungong jeumpa bungong jeumpa megah di Aceh\nBungong teuleubeh, teuleubeh indah lagoina\nPutih kuneng meujampu mirah\nBungong si ulah indah lagoina`,
    audio_url: 'https://example.com/songs/bungong-jeumpa.mp3',
  },
  {
    province_name: 'Sumatera Utara',
    title: 'Sinanggar Tullo',
    lyrics: `Sinanggar tullo tullo a tullo\nSinanggar tullo tullo a tullo\nTudia ma luluan\nDa goring-goring bahen soban\nSai tudia ma luluan\nDa boru tobing bahen dongan`,
    audio_url: 'https://example.com/songs/sinanggar-tullo.mp3',
  },
  {
    province_name: 'Sumatera Barat',
    title: 'Ayam Den Lapeh',
    lyrics: `Luruihlah jalan Payakumbuah\nBabelok jalan Kayu Jati\nDimahati indak karusuah\nAwak takicuah\nAi ai ayam den lapeh`,
    audio_url: 'https://example.com/songs/ayam-den-lapeh.mp3',
  },
  {
    province_name: 'Riau',
    title: 'Soleram',
    lyrics: `Soleram soleram\nSoleram anak yang manis\nAnak manis janganlah dicium sayang\nKalau dicium merahlah pipinya`,
    audio_url: 'https://example.com/songs/soleram.mp3',
  },
  {
    province_name: 'Kepulauan Riau',
    title: 'Segantang Lada',
    lyrics: `Segantang lada namanya kepulauan Riau\nIbukotanya di Tanjung Pinang\nPulau Penyengat indera sakti\nDi sanalah raja, di sanalah raja memerintah negeri`,
    audio_url: 'https://example.com/songs/segantang-lada.mp3',
  },
  {
    province_name: 'Jambi',
    title: 'Injit-Injit Semut',
    lyrics: `Injit injit semut\nSiapa sakit naik diatas\nInjit injit semut\nWalau sakit jangan dilepas`,
    audio_url: 'https://example.com/songs/injit-injit-semut.mp3',
  },
  {
    province_name: 'Sumatera Selatan',
    title: 'Dek Sangke',
    lyrics: `Dek sangke aku dek sangke\nAwak tunak ngaku juare\nAlamat badan kan saro\nKalu awak, kalu awak lali gawe`,
    audio_url: 'https://example.com/songs/dek-sangke.mp3',
  },
  {
    province_name: 'Kepulauan Bangka Belitung',
    title: 'Yo Miak',
    lyrics: `Yo miak kito miak\nKito pulang ke Bangka\nUrang nunggu la lame\nNunggu kito semue`,
    audio_url: 'https://example.com/songs/yo-miak.mp3',
  },
  {
    province_name: 'Bengkulu',
    title: 'Lalan Belek',
    lyrics: `Oi lalan belek, lalan belek\nKeta lale keta kule\nLalan belek, lalan belek\nKeta lale keta kule`,
    audio_url: 'https://example.com/songs/lalan-belek.mp3',
  },
  {
    province_name: 'Lampung',
    title: 'Cangget Agung',
    lyrics: `Sesat agung sai wawai\nTalo butabuh tarei cangget\nGawei adat Tano Sumbay\nCaket nyamak bates kangen`,
    audio_url: 'https://example.com/songs/cangget-agung.mp3',
  },

  // --- JAWA ---
  {
    province_name: 'Jakarta Raya',
    title: 'Kicir-Kicir',
    lyrics: `Kicir kicir ini lagunya\nLagu lama ya tuan dari Jakarta\nSaya menyanyi ya tuan memang sengaja\nUntuk menghibur menghibur hati nan duka`,
    audio_url: 'https://example.com/songs/kicir-kicir.mp3',
  },
  {
    province_name: 'Banten',
    title: 'Dayung Sampan',
    lyrics: `Dayung sampan, dayung sampan\nDatang dari pengkalan\nSampan wahai sampan\nMendarat di pelabuhan`,
    audio_url: 'https://example.com/songs/dayung-sampan.mp3',
  },
  {
    province_name: 'Jawa Barat',
    title: 'Manuk Dadali',
    lyrics: `Mesat ngapung luhur jauh di awang-awang\nMeberkeun jangjangna bangun taya karingrang\nKukuna ranggoas reujeung pamatukna ngeluk\nNgapak mega bari hiberna tarik nyuruwuk`,
    audio_url: 'https://example.com/songs/manuk-dadali.mp3',
  },
  {
    province_name: 'Jawa Tengah',
    title: 'Gundul-Gundul Pacul',
    lyrics: `Gundul gundul pacul cul gembelengan\nNyunggi nyunggi wakul kul gembelengan\nWakul ngglimpang segane dadi sak latar\nWakul ngglimpang segane dadi sak latar`,
    audio_url: 'https://example.com/songs/gundul-pacul.mp3',
  },
  {
    province_name: 'Daerah Istimewa Yogyakarta',
    title: 'Suwe Ora Jamu',
    lyrics: `Suwe ora jamu\nJamu godhong telo\nSuwe ora ketemu\nKetemu pisan gawe gelo`,
    audio_url: 'https://example.com/songs/suwe-ora-jamu.mp3',
  },
  {
    province_name: 'Jawa Timur',
    title: 'Rek Ayo Rek',
    lyrics: `Rek ayo rek mlaku mlaku nang Tunjungan\nRek ayo rek rame rame bebarengan\nCak ayo cak sopo gelem melu aku\nCak ayo cak golek kenalan cah ayu`,
    audio_url: 'https://example.com/songs/rek-ayo-rek.mp3',
  },

  // --- BALI & NUSA TENGGARA ---
  {
    province_name: 'Bali',
    title: 'Janger',
    lyrics: `Ara sijak jangi janger, jangi janger\nSengseng reok sengseng reok\nKelap kelap ngalap bulan\nNgalap bulan si angka dua`,
    audio_url: 'https://example.com/songs/janger.mp3',
  },
  {
    province_name: 'Nusa Tenggara Barat',
    title: 'Tutu Koda',
    lyrics: `O ina lele une, ina lele une\nOne nusa tana to one tana to\nLayang, layang keka, layang keka\nNggari keka ne keka ne`,
    audio_url: 'https://example.com/songs/tutu-koda.mp3',
  },
  {
    province_name: 'Nusa Tenggara Timur',
    title: 'Bolelebo',
    lyrics: `Bolelebo ita nusa lelebo\nBolelebo ita nusa lelebo\nMalole simalole\nIta nusa lemalole`,
    audio_url: 'https://example.com/songs/bolelebo.mp3',
  },

  // --- KALIMANTAN ---
  {
    province_name: 'Kalimantan Barat',
    title: 'Cik Cik Periuk',
    lyrics: `Cik cik periuk bilanga sumping dari Jawe\nDatang nek kecibok bawa kepiting dua ekok\nCik cik periuk bilanga sumping dari Jawe\nDatang nek kecibok bawa kepiting dua ekok`,
    audio_url: 'https://example.com/songs/cik-cik-periuk.mp3',
  },
  {
    province_name: 'Kalimantan Tengah',
    title: 'Kalayar',
    lyrics: `Kalayar, kalayar...\nHaut layu kai anak wara\nLayu kai, layu kai...\nLayu kai anak wara`,
    audio_url: 'https://example.com/songs/kalayar.mp3',
  },
  {
    province_name: 'Kalimantan Selatan',
    title: 'Ampar-Ampar Pisang',
    lyrics: `Ampar ampar pisang\nPisangku belum masak\nMasak bigi dihurung bari-bari\nMasak bigi dihurung bari-bari`,
    audio_url: 'https://example.com/songs/ampar-pisang.mp3',
  },
  {
    province_name: 'Kalimantan Timur',
    title: 'Indung-Indung',
    lyrics: `Indung indung kepala lindung\nHujan di udik di sini mendung\nAnak siapa pakai kerudung\nMata melirik kaki kesandung`,
    audio_url: 'https://example.com/songs/indung-indung.mp3',
  },
  {
    province_name: 'Kalimantan Utara',
    title: 'Bebalin',
    lyrics: `Iwal imun inindaw\nKembeng kembeng manuk\nSawal sawal kembeng manuk\nManuk pulas kembeng pulas`,
    audio_url: 'https://example.com/songs/bebalin.mp3',
  },

  // --- SULAWESI ---
  {
    province_name: 'Sulawesi Utara',
    title: 'Si Patokaan',
    lyrics: `Sayang sayang si patokaan\nMatego tego gorokan sayang\nSayang sayang si patokaan\nMatego tego gorokan sayang`,
    audio_url: 'https://example.com/songs/si-patokaan.mp3',
  },
  {
    province_name: 'Gorontalo',
    title: 'Hulondalo Lipu\'u',
    lyrics: `Hulondalo Lipu'u\nPilo tutua ola\nLipu'u ilo ponu\nDilata olipata`,
    audio_url: 'https://example.com/songs/hulondalo-lipuu.mp3',
  },
  {
    province_name: 'Sulawesi Tengah',
    title: 'Tondok Kadadingku',
    lyrics: `Tondok kadadingku\nTondok ponan bulawan\nNafero tondokku\nTondok tau mata mapia`,
    audio_url: 'https://example.com/songs/tondok-kadadingku.mp3',
  },
  {
    province_name: 'Sulawesi Barat',
    title: 'Tenggang-Tenggang Lopi',
    lyrics: `Tenggang tenggang lopi\nLopinna i anak koda\nAnak koda di panja’ja’\nDi panja’ja’ uluanna`,
    audio_url: 'https://example.com/songs/tenggang-lopi.mp3',
  },
  {
    province_name: 'Sulawesi Selatan',
    title: 'Anging Mammiri',
    lyrics: `Anging mammiri ku pasang\nPitujui tontonganna\nTusaroa takkan lupa`,
    audio_url: 'https://example.com/songs/anging-mammiri.mp3',
  },
  {
    province_name: 'Sulawesi Tenggara',
    title: 'Peia Tawa-Tawa',
    lyrics: `Peia tawa tawa\nPeia tawa tawa\nNo maito mokonau\nNo maito mokonau`,
    audio_url: 'https://example.com/songs/peia-tawa-tawa.mp3',
  },

  // --- MALUKU & PAPUA ---
  {
    province_name: 'Maluku',
    title: 'Rasa Sayange',
    lyrics: `Rasa sayange rasa sayang sayange\nEeee lihat dari jauh rasa sayang sayange\nKalau ada sumur di ladang, boleh kita menumpang mandi\nKalau ada umur panjang, boleh kita berjumpa lagi`,
    audio_url: 'https://example.com/songs/rasa-sayange.mp3',
  },
  {
    province_name: 'Maluku Utara',
    title: 'Borero',
    lyrics: `Borero o borero\nRo nofo kanga kote dia\nMe me kie ma dudu\nKie ma dudu kanga o`,
    audio_url: 'https://example.com/songs/borero.mp3',
  },
  {
    province_name: 'Papua',
    title: 'Apuse',
    lyrics: `Apuse kokon dao\nYarabe soren doreri\nWuf lenso bani nema baki pase\nApuse kokon dao`,
    audio_url: 'https://example.com/songs/apuse.mp3',
  },
  {
    province_name: 'Papua Barat',
    title: 'Yamko Rambe Yamko',
    lyrics: `Hee yamko rambe yamko\naronawa kombe\nHee yamko rambe yamko\naronawa kombe\nTeomi nokibe kubano ko bombe ko\nYuma no bungo awe ade`,
    audio_url: 'https://example.com/songs/yamko-rambe.mp3',
  },
  {
    province_name: 'Papua Selatan',
    title: 'Izakod Bekai Izakod Kai',
    lyrics: `Izakod bekai izakod kai\nSatu hati satu tujuan\nMembangun negeri tercinta\nMerauke tanah harapan`,
    audio_url: 'https://example.com/songs/izakod-bekai.mp3',
  },
  {
    province_name: 'Papua Tengah',
    title: 'Akai Bipa Mare',
    lyrics: `Akai bipa mare\nKou tapa tapa bipa\nKou tapa tapa bipa\nIyee.. iyee..`,
    audio_url: 'https://example.com/songs/akai-bipa-mare.mp3',
  },
  {
    province_name: 'Papua Pegunungan',
    title: 'Wesupe',
    lyrics: `Wesupe... wesupe...\nNinabua ninabua\nWa wa wa wa\n(Lagu ucapan syukur dan kebersamaan)`,
    audio_url: 'https://example.com/songs/wesupe.mp3',
  },
  {
    province_name: 'Papua Barat Daya',
    title: 'Sajojo',
    lyrics: `Sajojo, sajojo\nYumanampo misa papa\nSamuna muna muna keke\nSamuna muna muna keke`,
    audio_url: 'https://example.com/songs/sajojo.mp3',
  },
];

export default regionalSongsData;