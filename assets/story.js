const steps = document.querySelectorAll(".story-step");
const headline = document.getElementById("story-headline");
const summary = document.getElementById("story-summary");
const detail = document.getElementById("story-detail");

const updateActiveStep = (target) => {
  steps.forEach((step) => step.classList.remove("is-active"));
  target.classList.add("is-active");

  if (headline && summary && detail) {
    headline.textContent = target.dataset.headline ?? headline.textContent;
    summary.textContent = target.dataset.summary ?? summary.textContent;
    detail.textContent = target.dataset.detail ?? detail.textContent;
  }
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateActiveStep(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0.1
    }
  );

  steps.forEach((step) => observer.observe(step));
} else {
  // Fallback: highlight the first step if IntersectionObserver is unsupported.
  steps[0]?.classList.add("is-active");
}

if (steps[0]) {
  updateActiveStep(steps[0]);
}
