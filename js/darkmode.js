const toggleModeBtn = document.querySelector('#toggle-theme');
let pageTheme = document.body;
// Check if the preferred theme is stored in local storage
const preferredTheme = localStorage.getItem('preferredTheme');

// Set the theme based on the stored preference or default to light mode
if (preferredTheme === 'dark') {
  enableDarkMode();
} else {
  enableLightMode();
}

// Function to enable dark mode
function enableDarkMode() {
    pageTheme.classList.add('dark-mode');
  localStorage.setItem('preferredTheme', 'dark');
}

// Function to enable light mode
function enableLightMode() {
    pageTheme.classList.remove('dark-mode');
  localStorage.setItem('preferredTheme', 'light');
}

toggleModeBtn.addEventListener('click', function () {
  if (pageTheme.classList.contains('dark-mode')) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

// toggleModeBtn.addEventListener("click", toggleTheme);
