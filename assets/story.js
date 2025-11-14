const steps = Array.from(document.querySelectorAll(".story-step"));
let currentStep = null;

const setActiveStep = (target) => {
  if (!target || currentStep === target) return;
  currentStep = target;
  steps.forEach((step) => step.classList.toggle("is-active", step === target));
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
