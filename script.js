const articleMenu = document.querySelectorAll('.articleMenu');

// Add event listener to the dropdown link to show the mega menu
articleMenu.forEach(dropdown => {
  dropdown.querySelector('.nav-link').addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });
});

// Get the dropdown element
const dropdowns = document.querySelectorAll('.megaMenu');

// Add event listener to the dropdown link to show the mega menu
dropdowns.forEach(dropdown => {
  dropdown.querySelector('.nav-link').addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });
});

const profileMenu = document.querySelectorAll('.profileContainer');

// Add event listener to the dropdown link to show the mega menu
profileMenu.forEach(dropdown => {
  dropdown.querySelector('.dropdown-item').addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });
});

const langMenu = document.querySelectorAll('.langMenu');

// Add event listener to the dropdown link to show the mega menu
langMenu.forEach(dropdown => {
  dropdown.querySelector('.nav-link').addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });
});
