// mobile nav

const mobileOpen = document.querySelector(".hamburger");
const mobileClose = document.querySelector(".mobile__close");
const navBar = document.querySelector(".nav__links");
const navLinks = document.querySelectorAll(".links");

mobileOpen.addEventListener("click", () => {
  navBar.classList.toggle("active");
  mobileClose.classList.add("active");
});
mobileClose.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.toggle("active");
    mobileClose.classList.add("active");
  });
});

//tabs
const tabs = document.querySelectorAll(".btn__tab");
const allContent = document.querySelectorAll(".content");

tabs[0].classList.add("active");
allContent[0].classList.add("active");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    allContent.forEach((content) => {
      content.classList.remove("active");
    });
    allContent[index].classList.add("active");
  });
});

document.querySelector("form").addEventListener("submit", function (e) {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(email)) {
    e.preventDefault(); // Prevent form submission
    showAlert("Please enter a valid email address.");
    emailInput.focus(); // Focus on the email input
  }
});

function showAlert(message) {
  const alertBox = document.getElementById("customAlert");
  document.getElementById("alertMessage").textContent = message;
  alertBox.style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}
