document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  const toggle = () => {
    if (window.scrollY > 200) {
      btn.classList.add("is-visible");
    } else {
      btn.classList.remove("is-visible");
    }
  };

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggle, { passive: true });
  toggle();
});
