const hamburger = document.querySelector('.left');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
sidebar.classList.add('open');
overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
sidebar.classList.remove('open');
overlay.classList.remove('active');
});
