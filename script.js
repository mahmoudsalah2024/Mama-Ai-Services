const articleMenu = document.querySelector('.articleMenu .nav-link');
articleMenu.addEventListener('click', (e) => {
  e.currentTarget.parentElement.classList.toggle('show');
  // close all other dropdown menus
  document.querySelectorAll('.show').forEach(el => {
    if (el !== e.currentTarget.parentElement) {
      el.classList.remove('show');
    }
  });
});


// Get the dropdown element
const dropdowns = document.querySelector('.megaMenu .nav-link');

// Add event listener to the dropdown link to show the mega menu
dropdowns.addEventListener('click', (e) => {
  e.currentTarget.parentElement.classList.toggle('show');
  document.querySelectorAll('.show').forEach(el => {
    if (el !== e.currentTarget.parentElement) {
      el.classList.remove('show');
    }
  });
});

const profileMenu = document.querySelector('.profileContainer .dropdown-item');

// Add event listener to the dropdown link to show the mega menu
profileMenu.addEventListener('click', (e) => {
  e.currentTarget.parentElement.classList.toggle('show');
  document.querySelectorAll('.show').forEach(el => {
    if (el !== e.currentTarget.parentElement) {
      el.classList.remove('show');
    }
  });
});

const langMenu = document.querySelector('.langMenu .nav-link');

// Add event listener to the dropdown link to show the mega menu
langMenu.addEventListener('click', (e) => {
  e.currentTarget.parentElement.classList.toggle('show');
  document.querySelectorAll('.show').forEach(el => {
    if (el !== e.currentTarget.parentElement) {
      el.classList.remove('show');
    }
  });
});


// Remove the show class when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-link') && !e.target.closest('.dropdown-menu')) {
    document.querySelectorAll('.show').forEach(el => {
      el.classList.remove('show');
    });
  }
});
