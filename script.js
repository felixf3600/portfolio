document.addEventListener("DOMContentLoaded", function() {
  const about = document.getElementById("contact-button");
  const foundation = document.getElementById("foundation-button");
  const experience = document.getElementById("experience-button");
  const game = document.getElementById("games-button");
  const portfolio = document.getElementById("portfolio-button");
  const hard = document.getElementById("hard-skills-button");
  const soft = document.getElementById("soft-skills-button");
  const container = document.getElementsByClassName("content");
  const contactContent = document.getElementById("contact-content");

  about.addEventListener("click", function(event) {
    event.preventDefault();
    contactContent.classList.toggle("animate-side");
  });

  foundation.onclick = function(event) {
    event.preventDefault();
    container[0].classList.toggle("animate-content");
  };
  experience.onclick = function(e) {
    e.preventDefault();
    container[1].classList.toggle("animate-content");
  };
  game.onclick = function(e) {
    e.preventDefault();
    container[2].classList.toggle("animate-content");
  };
  portfolio.onclick = function(e) {
    e.preventDefault();
    container[3].classList.toggle("animate-content");
  };
  hard.onclick = function(e) {
    e.preventDefault();
    container[4].classList.toggle("animate-content");
  };
  soft.onclick = function(e) {
    e.preventDefault();
    container[5].classList.toggle("animate-content");
  };
});
