const mobileNav = document.querySelector(".mobile__nav-open");
const navMenu = document.querySelector(".nav__bar");
const navClose = document.querySelector(".mobile__nav-close");
const navLinks = document.querySelectorAll(".nav__links li a");

mobileNav.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navClose.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
});

sr.reveal(".main__text-box", {
  origin: "left",
});

sr.reveal(".phuket", {
  origin: "top",
});
sr.reveal(".bangkok", {
  origin: "right",
});
sr.reveal(".pattaya", {
  origin: "left",
});
sr.reveal(".krabi", {
  origin: "top",
});

// social share

// Set href for all Facebook share links
document.querySelectorAll(".facebook-share").forEach((el) => {
  el.href = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
});

// Set href for all Twitter share links
document.querySelectorAll(".twitter-share").forEach((el) => {
  el.href = `https://twitter.com/share?url=${window.location.href}&text=Check%20out%20this%20Muay%20Thai%20blog!`;
});

// Set href for all Instagram share links
document.querySelectorAll(".instagram-share").forEach((el) => {
  el.href = `https://www.instagram.com/?url=${encodeURIComponent(
    window.location.href
  )}`;
});

// Set href for all LinkedIn share links
document.querySelectorAll(".linkedin-share").forEach((el) => {
  el.href = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`;
});

