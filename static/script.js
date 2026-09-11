"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myBtn");
  if (!button) return;
  const update = () => { button.hidden = window.scrollY < 400; };
  window.addEventListener("scroll", update, { passive: true });
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  });
  update();
});
