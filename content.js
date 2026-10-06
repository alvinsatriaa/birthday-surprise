/*
  ================================
  EDIT NARASI WEBSITE DI SINI
  ================================
  Kamu cukup mengubah teks di file ini.
  Tidak perlu mengubah index.html.

  Catatan:
  - Boleh memakai emoji.
  - <br> membuat pindah baris.
  - {{restaurant}} otomatis diganti dengan pilihan restoran.
*/

const CONTENT = {
  pageTitle: "A Little Birthday Surprise ❤️",

  opening: {
    badge: "A little surprise",
    emoji: "🎂",
    title: "Happy Birthday, Syf!",
    text: "Hari ini ada satu hal kecil yang sengaja aku siapkan untuk kamu.<br>Dan kamu punya satu tugas penting untuk merayakan ulang tahunmu",
    button: "Buka Surprise ✨"
  },

  choices: {
    badge: "Birthday's date",
    title: "Kita dinner di mana?",
    text: "Pilih satu. Aku ingin tahu tempat mana yang paling pas untuk merayakan ulang tahun kamu😄"
  },

  restaurants: [
    {
      label: "Option 01",
      emoji: "🍝",
      title: "Italian Night",
      name: "Nanamia Pizzeria",
      description: "Pasta, pizza, serba Italiaa.",
      hint: "mama mia lezatos"
    },
    {
      label: "Option 02",
      emoji: "🥩",
      title: "Steak Night",
      name: "Waroeng Steak",
      description: "Dinner isi daging.",
      hint: "Dinner dengan menu daging tapi ada ayamnya"
    },
    {
      label: "Option 03",
      emoji: "🍣",
      title: "Japanese Date",
      name: "Golden Geisha",
      description: "all about japanese food, sushi, ramen, umamii",
      hint: "itadakimasu!"
    }
  ],

  reveal: {
    emoji: "💖",
    badge: "Perfect choice",
    title: "So... we're going to",
    text: "Pilihanmu jatuh pada <b>{{restaurant}}</b>.<br><br>Semoga tempat ini bisa jadi bagian kecil dari ulang tahun yang menyenangkan buat kamu.",
    quote: "Sebenarnya aku cuma butuh satu hal: merayakan ulang tahunmu berdua sama kamu. ❤️",
    button: "Lanjut 💌",
    backButton: "Ganti pilihan"
  },

  final: {
    emoji: "✨",
    badge: "One last thing",
    title: "Happy Birthday Syf❤️",
    text: "Terima kasih sudah hadir di hidupku, sudah menjadi tempat cerita, tempat berkeluh kesah, dan partner untuk banyak hal kecil maupun besar.",
    quote: "Dress well.<br><br>Just get ready. I'm taking you to dinner. 😄",
    signature: "— dari Al, seseorang yang sayang sama kamu",
    tiny: "Made with a huge amount of love."
  }
};
