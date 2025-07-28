// Animación de entrada al hacer scroll
const sections = document.querySelectorAll("section");
const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", showOnScroll);
showOnScroll();
