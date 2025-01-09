document.addEventListener('DOMContentLoaded', () => {
  const lightIcon = document.getElementById('light-icon');
  const darkIcon = document.getElementById('dark-icon');
  const themeLabel = document.getElementById('theme-label');

  // Check for saved theme preference in localStorage
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'inline';
  } else {
    document.body.classList.remove('dark-mode');
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'inline';
  }

  // Add click event listener to the toggle
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Update icons and save preference
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
      lightIcon.style.display = 'inline';
      darkIcon.style.display = 'none';
    } else {
      localStorage.setItem('theme', 'light');
      darkIcon.style.display = 'inline';
      lightIcon.style.display = 'none';
    }
  });
});

