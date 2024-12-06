const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.classList.remove('bi-sun');
    icon.classList.add('bi-moon');
  } else {
    icon.classList.remove('bi-moon');
    icon.classList.add('bi-sun');
  }
});
