const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved user theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (currentTheme === 'dark-theme') {
    icon.classList.remove('bi-sun');
    icon.classList.add('bi-moon');
  }
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  let theme = 'light-theme';
  if (document.body.classList.contains('dark-theme')) {
    icon.classList.remove('bi-sun');
    icon.classList.add('bi-moon');
    theme = 'dark-theme';
  } else {
    icon.classList.remove('bi-moon');
    icon.classList.add('bi-sun');
  }
  // Save user theme preference
  localStorage.setItem('theme', theme);
});