const services = [
  {
    title: "Hair Cut Premium",
    desc: "Hair Cut Premium merupakan layanan potong rambut eksklusif yang diawali dengan sesi konsultasi mendalam mengenai bentuk wajah, karakter rambut, serta gaya hidup klien. Proses pemotongan dilakukan oleh stylist profesional menggunakan teknik presisi dan peralatan higienis untuk menghasilkan potongan yang rapi, seimbang, dan mudah ditata. Layanan ini dirancang agar hasil potongan tidak hanya terlihat menarik saat selesai, tetapi juga tetap stylish dan nyaman digunakan dalam aktivitas sehari-hari."
  },
  {
    title: "Hair Spa & Creambath",
    desc: "Hair Spa & Creambath adalah perawatan menyeluruh untuk rambut dan kulit kepala yang bertujuan menutrisi, melembapkan, serta mengurangi kerusakan akibat polusi dan styling. Dilengkapi dengan pijatan relaksasi profesional yang membantu melancarkan peredaran darah, mengurangi stres, dan memberikan sensasi rileks yang mendalam."
  },
  {
    title: "Hair Color & Balayage",
    desc: "Layanan pewarnaan rambut dengan teknik modern seperti full color dan balayage yang disesuaikan dengan warna kulit serta karakter wajah. Menggunakan produk berkualitas tinggi untuk menjaga kesehatan rambut, menghasilkan warna yang lembut, natural, tahan lama, dan tidak merusak struktur rambut."
  },
  {
    title: "Smoothing & Rebonding",
    desc: "Perawatan pelurusan rambut menggunakan teknik smoothing dan rebonding profesional untuk mendapatkan hasil rambut lurus, halus, dan mudah diatur. Proses dilakukan dengan produk aman yang tetap menjaga kelembapan serta kekuatan rambut."
  },
  {
    title: "Facial Glow",
    desc: "Facial Glow merupakan perawatan wajah yang membantu membersihkan pori-pori, mengangkat sel kulit mati, serta meningkatkan kecerahan alami kulit. Cocok untuk kamu yang ingin wajah tampak segar, lembap, dan bercahaya."
  },
  {
    title: "Facial Acne Treatment",
    desc: "Facial Acne Treatment adalah perawatan khusus untuk kulit berjerawat yang difokuskan pada pengurangan inflamasi, kemerahan, dan bakteri penyebab jerawat. Dilakukan secara bertahap dan aman agar kulit tetap seimbang dan sehat."
  },
  {
    title: "Make Up Wisuda",
    desc: "Make Up Wisuda dirancang untuk memberikan tampilan soft–glam yang natural, tahan lama, dan fotogenik. Disesuaikan dengan karakter wajah serta konsep acara agar kamu tampil percaya diri di hari spesial."
  },
  {
    title: "Make Up Wedding",
    desc: "Riasan pengantin profesional dengan detail presisi yang menonjolkan kecantikan alami. Menggunakan teknik dan produk premium agar make up tahan lama, flawless, dan tetap nyaman sepanjang acara pernikahan."
  },
  {
    title: "Nail Care & Nail Art",
    desc: "Perawatan kuku higienis yang meliputi pembersihan, perapian, serta aplikasi nail art dengan desain modern dan elegan. Cocok untuk menunjang penampilan agar terlihat rapi dan berkelas."
  },
  {
    title: "Glow Up Treatment",
    desc: "Glow Up Treatment merupakan paket perawatan lengkap yang mengombinasikan perawatan rambut dan wajah untuk memberikan efek segar, sehat, dan bercahaya secara menyeluruh."
  },
  {
    title: "Bride To Be Package",
    desc: "Paket persiapan menyeluruh bagi calon pengantin yang mencakup perawatan rambut, wajah, dan tubuh sebelum hari pernikahan agar tampil maksimal dan percaya diri."
  },
  {
    title: "Body Scrub & Relax Massage",
    desc: "Perawatan tubuh dengan scrub lembut untuk mengangkat sel kulit mati, dikombinasikan dengan pijatan relaksasi profesional guna meredakan pegal, stres, dan memberikan rasa nyaman."
  }
];


const slides = document.querySelectorAll(".slide img");
const titleEl = document.getElementById("detailTitle");
const descEl = document.getElementById("detailDesc");

slides.forEach((img, index) => {
  img.addEventListener("click", () => {
    titleEl.textContent = services[index].title;
    descEl.textContent = services[index].desc;
  });
});
// ===== SLIDER FUNCTION (TAMBAHAN) =====
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const slideWidth = 220; // 200px slide + 20px gap

nextBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: slideWidth,
    behavior: "smooth"
  });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: -slideWidth,
    behavior: "smooth"
  });
});
