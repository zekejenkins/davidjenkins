document.addEventListener('DOMContentLoaded', () => {
  const lightIcon = document.getElementById('light-icon');
  const darkIcon = document.getElementById('dark-icon');

  // Check for saved theme preference in localStorage
  const savedTheme = localStorage.getItem('theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme)) {
    document.body.classList.add('dark-theme');
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'inline';
  } else {
    document.body.classList.remove('dark-theme');
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'inline';
  }

  // Toggle theme on click
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDarkMode = document.body.classList.contains('dark-theme');

    // Save the user's preference
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
