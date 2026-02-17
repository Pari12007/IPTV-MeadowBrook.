import "./style.css"

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// WhatsApp link generator (edit these)
const WHATSAPP_NUMBER = "14379226778"; // country code + number, no plus sign

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const topBtn = document.getElementById("whatsappTop");
const waBtn = document.getElementById("whatsappBtn");
const waText = document.getElementById("waNumberText");

const message = `I would like information about your TV services.`;

if (topBtn) topBtn.href = whatsappLink(message);
if (waBtn) waBtn.href = whatsappLink(message);
if (waText) waText.textContent = `+${WHATSAPP_NUMBER}`;

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
