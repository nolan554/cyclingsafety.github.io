const steps = Array.from(document.querySelectorAll(".story-step"));
const dotsContainer = document.querySelector(".story-progress__dots");
const titleLabel = document.querySelector(".story-progress__title");
let dots = [];
let currentStep = null;

if (dotsContainer && steps.length) {
  dots = steps.map((step, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "story-progress__dot";
    dot.setAttribute("aria-label", `Go to step ${index + 1}`);
    dot.addEventListener("click", () => {
      step.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    dotsContainer.appendChild(dot);
    return dot;
  });
}

const setActiveStep = (target) => {
  if (!target || currentStep === target) return;
  currentStep = target;
  steps.forEach((step, idx) => {
    const isActive = step === target;
    step.classList.toggle("is-active", isActive);
    if (dots[idx]) dots[idx].classList.toggle("is-active", isActive);
  });

  if (titleLabel) {
    const heading = target.querySelector("h3");
    titleLabel.textContent = heading ? heading.textContent : "Collision overview";
  }
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveStep(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "-35% 0px -40% 0px",
      threshold: 0.25
    }
  );

  steps.forEach((step) => observer.observe(step));
} else if (steps[0]) {
  steps[0].classList.add("is-active");
}

if (steps[0]) {
  setActiveStep(steps[0]);
}
