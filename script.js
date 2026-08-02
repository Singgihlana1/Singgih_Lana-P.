// Inisialisasi AOS (Animate On Scroll)
AOS.init({ offset: 0 });

/* NAVBAR SCROLL */
window.addEventListener("scroll", () => {
    document.querySelector("header")
        .classList.toggle("sticky", window.scrollY > 50);
});

/* EXPERIENCE ANIMATION */
const experienceObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animate");
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll(".experience-box")
    .forEach(box => experienceObserver.observe(box));

/* PROJECT SLIDER DUPLICATE */
const track = document.querySelector('.project-track');
if (track) {
    const cards = Array.from(track.children);
    cards.forEach(card => {
        track.appendChild(card.cloneNode(true));
    });
}