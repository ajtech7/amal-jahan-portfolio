
// =================================
// AMAL JAHAN M - PORTFOLIO
// JavaScript
// =================================

// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Smoothly reveal sections when scrolling
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

sections.forEach((section) => {
    observer.observe(section);
});

console.log("Amal Jahan M Portfolio Loaded Successfully!");
