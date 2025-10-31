document.addEventListener("DOMContentLoaded", () => {
  const dateTag = document.getElementById("build-date");
  if (dateTag) {
    const now = new Date();
    const formatted = now.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
    dateTag.textContent = formatted;
  }
});
