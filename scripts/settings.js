document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");
  const isDark = localStorage.getItem("darkMode") === "true";

  // Apply dark mode on page load
  if (isDark) {
    document.body.classList.add("dark-mode");
  }

  // Only attach toggle logic if button exists (i.e. in settings.html)
  if (toggleBtn) {
    toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    toggleBtn.setAttribute("aria-pressed", isDark);

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const darkModeEnabled = document.body.classList.contains("dark-mode");
      localStorage.setItem("darkMode", darkModeEnabled);
      toggleBtn.textContent = darkModeEnabled ? "☀️ Light Mode" : "🌙 Dark Mode";
      toggleBtn.setAttribute("aria-pressed", darkModeEnabled);
    });
  }
});