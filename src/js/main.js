// Add this at the start of your file
document.addEventListener("DOMContentLoaded", () => {
  // Prevent scrolling during loading
  document.body.style.overflow = "hidden";

  // Loading animation
  const loadingScreen = document.querySelector(".loading-screen");
  const progressBar = document.querySelector(".progress-bar");
  const counterElement = document.querySelector(".counter");

  // Create timeline
  const tl = gsap.timeline();

  // Animate loading from 0 to 100
  tl.to(progressBar, {
    width: "100%",
    duration: 2,
    ease: "power2.inOut",
    onUpdate: function () {
      const progress = Math.round(this.progress() * 100);
      counterElement.textContent = `${progress}%`;
    },
  });

  // Fade out loading screen
  tl.to(loadingScreen, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      loadingScreen.style.display = "none";
      document.body.style.overflow = "auto"; // Re-enable scrolling

      // Initialize ScrollReveal after loading screen
      initializeScrollReveal();
    },
  });
});

// Move ScrollReveal initialization to a separate function
function initializeScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    // reset: true
  });

  // Start with home section immediately after loading
  sr.reveal(".home .title", {
    origin: "left",
    delay: 0, // Remove initial delay for first animation
  });
  sr.reveal(".home .avatar", {
    origin: "right",
    delay: 200, // Reduced delay for smoother transition
  });

  // Rest of the animations with standard delays
  sr.reveal(".content__people .box", {
    origin: "bottom",
    interval: 200,
  });

  sr.reveal(".risography .button__components", { origin: "left" });
  sr.reveal(".risography h1, .risography p", {
    origin: "right",
    interval: 200,
  });
  sr.reveal(".risography img", { delay: 600 });

  sr.reveal(".soyinks .heading", { origin: "top" });
  sr.reveal(".soyinks .content .img img", {
    origin: "bottom",
    interval: 100,
  });
  sr.reveal(".soyinks .pallent", { delay: 800 });
  sr.reveal(".soyinks .color", { origin: "bottom", delay: 400 });

  sr.reveal(".print .heading", { origin: "top" });
  sr.reveal(".print .box", {
    origin: "bottom",
    interval: 300,
  });

  sr.reveal(".content__image .box", {
    origin: "bottom",
    interval: 200,
  });

  sr.reveal("footer .top", { origin: "top" });
  sr.reveal("footer .center", { delay: 400 });
  sr.reveal("footer .bottom", { origin: "bottom", delay: 600 });
}

// Marquee
var copy = document.querySelector(".marque-content").cloneNode(true);
document.querySelector(".marque").appendChild(copy);

// Navbar
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu__close");
const menuLinks = document.querySelectorAll(".menu__item a");

//========== Open Menu On Click Hamburger ==========//

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

// Remove Menu On Click Close

menuClose.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Remove Menu On Click A Href
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
