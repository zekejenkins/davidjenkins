document.addEventListener('DOMContentLoaded', () => {
  const lightIcon = document.getElementById('light-icon');
  const darkIcon = document.getElementById('dark-icon');
  const themeToggle = document.getElementById('theme-toggle');
  const skillsGridImages = document.querySelectorAll('.skills-grid img');

  // Function to update the theme
  function updateTheme(isDarkMode) {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      lightIcon.style.display = 'inline';
      darkIcon.style.display = 'none';

      // Invert icons in the skills grid
      skillsGridImages.forEach((img) => {
        img.style.filter = 'invert(1)';
      });
    } else {
      document.body.classList.remove('dark-theme');
      darkIcon.style.display = 'inline';
      lightIcon.style.display = 'none';

      // Remove inversion from icons in the skills grid
      skillsGridImages.forEach((img) => {
        img.style.filter = 'none';
      });
    }
  }

  // Check for saved theme preference in localStorage
  const savedTheme = localStorage.getItem('theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const isDarkMode =
    savedTheme === 'dark' || (!savedTheme && prefersDarkScheme);
  updateTheme(isDarkMode);

  // Toggle theme on click
  themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-theme');

    // Save the user's preference
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }

    updateTheme(isDarkMode);
  });
});
