//code to handle cards scroll
let currentIndex = 0;
const totalCards = document.querySelectorAll('.card').length;

const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');

function moveSlider() {
  const slider = document.querySelector('.slider'); 
  const cardWidth = document.querySelector('.card').offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

rightButton.addEventListener('click', () => {
  if (currentIndex < totalCards - 1) {
    currentIndex += 1;
  } 
  moveSlider();
});

leftButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
  } 
  moveSlider();
});


//code to handle nav bar toggle
const menuBar = document.getElementById('menu-bar');
const toggleMenu = document.getElementById('nav-toggle');

menuBar.addEventListener('click', () => {
  if (toggleMenu.style.visibility === 'hidden') {
    toggleMenu.style.visibility = 'visible';
  } else {
    toggleMenu.style.visibility = 'hidden';
  }
});
