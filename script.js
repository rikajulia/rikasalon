//NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolling", window.scrollY > 15);
});


//REVEAL ANIMATION ON SCROLL
const revealItems = document.querySelectorAll(
  ".hero-text, .hero-image, .feature-card, .highlight-card"
);

function revealOnScroll() {
  revealItems.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (pos < screen - 80) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


//FLOATING CARD PARALLAX
const floatingCard = document.querySelector(".floating-card");
window.addEventListener("mousemove", (e) => {
  if (!floatingCard) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  floatingCard.style.transform = `translate(${x}px, ${y}px)`;
});


// BUTTON HOVER BOUNCE
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-2px) scale(1.04)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0) scale(1)";
  });
});


//SMOOTH SCROLL ANCHOR
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
const heroVideo = document.querySelector(".hero-video");
const heroPhoto = document.querySelector(".hero-photo");

if (heroVideo) {
  heroVideo.addEventListener("error", ()=> {
    heroVideo.style.display = "none";
    heroPhoto.style.display = "block";
  });
}
