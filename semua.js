document.addEventListener("DOMContentLoaded", () => {

  // ===== ACTIVE MENU ON NAVBAR =====
  const path = window.location.pathname.split("/").pop();
  document.querySelectorAll(".navbar a").forEach(a => {
    if (a.getAttribute("href") === path) {
      a.classList.add("active");
    }
  });

  // ===== NAVBAR SHRINK ON SCROLL =====
  const nav = document.querySelector(".navbar");
  if (nav) {
    window.addEventListener("scroll", () => {
      (window.scrollY > 15)
        ? nav.classList.add("shrink")
        : nav.classList.remove("shrink");
    });
  }

  // ===== LAZY LOAD IMAGES =====
  document.querySelectorAll("img").forEach(img => {
    img.loading = "lazy";
  });

  // ===== SCROLL REVEAL =====
  const revealElements = document.querySelectorAll(`
    .card,
    .service-card,
    .info-card,
    .wa-card,
    .quote-card,
    .info-tags,
    .gallery figure,
    .intro,
    .info
  `);

  const revealOnScroll = () => {
    revealElements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) {
        el.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  //AUTO SELECT LAYANAN FROM URL (kontak)
  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");

  if (service) {
    const select = document.querySelector("select[name='layanan']");
    if (select) select.value = decodeURIComponent(service);
  }

  //FORM VALIDATION + SEND WHATSAPP
  const form = document.getElementById("form-booking");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const nama = form.nama.value.trim();
      const wa   = form.wa.value.trim();
      const lay  = form.layanan.value;
      const tgl  = form.tanggal.value;
      const cat  = form.catatan.value.trim();

      if (!nama || !wa || !lay || !tgl) {
        alert("Mohon lengkapi semua kolom wajib.");
        return;
      }

      const msg =
        `Halo Rini Salon,%0A%0A` +
        `Nama: ${nama}%0A` +
        `WA: ${wa}%0A` +
        `Layanan: ${lay}%0A` +
        `Tanggal: ${tgl}%0A` +
        `Catatan: ${cat || "-"}%0A%0A` +
        `Mohon konfirmasi jadwal ya.`;

      window.open(`https://wa.me/6285609645426?text=${msg}`, "_blank");
    });
  }

  //WHATSAPP CTA
  const waBtn = document.querySelector(".wa-button");
  if (waBtn) {
    waBtn.addEventListener("click", e => {
      e.preventDefault();
      window.open(
        "https://wa.me/6285609645426?text=Halo, saya ingin tanya ketersediaan jadwal treatment.",
        "_blank"
      );
    });
  }

  //  DYNAMIC YEAR FOOTER 
  const footer = document.querySelector("footer p");
  if (footer) {
    footer.innerHTML = `&copy; ${new Date().getFullYear()} Rini Beauty Salon`;
  }

});
