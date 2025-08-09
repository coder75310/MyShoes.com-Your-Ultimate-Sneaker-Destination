document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.lang-header');
    const dropdown = document.querySelector('.lang-dropdown');
    header.addEventListener('click', function() {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        const track = document.getElementById('brandsTrack');
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const languageRadios = document.querySelectorAll('input[name="language"]');

  languageRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      const selectedLabel = radio.parentElement.textContent.trim();
      console.log(`Selected language: ${selectedLabel}`);

      // You can also store the selection in localStorage or make further changes
      // Example: localStorage.setItem('selectedLanguage', selectedLabel);
      
      // Optional: Display the selection somewhere on the page
      // document.querySelector('.shopping-note').textContent = `Language selected: ${selectedLabel}`;
    });
  });
});





const track = document.getElementById('brandsTrack');
const leftBtn = document.getElementById('arrowLeft');
const rightBtn = document.getElementById('arrowRight');

// Click arrows to scroll
leftBtn.addEventListener('click', () => {
  track.scrollBy({ left: -100, behavior: 'smooth' });
});
rightBtn.addEventListener('click', () => {
  track.scrollBy({ left: 100, behavior: 'smooth' });
});

// Drag to scroll (desktop & mobile)
let isDown = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', (e) => {
  isDown = true;
  track.classList.add('active');
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});
track.addEventListener('mouseleave', () => {
  isDown = false;
  track.classList.remove('active');
});
track.addEventListener('mouseup', () => {
  isDown = false;
  track.classList.remove('active');
});
track.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  track.scrollLeft = scrollLeft - walk;
});

// Touch support
track.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});
track.addEventListener('touchend', () => {
  isDown = false;
});
track.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - track.offsetLeft;
  const walk = (x - startX) * 2;
  track.scrollLeft = scrollLeft - walk;
});









// window.addEventListener('load', () => {
//   const track = document.getElementById('carouselTrack');
//   const btnLeft = document.getElementById('arrowLeft');
//   const btnRight = document.getElementById('arrowRight');

//   const item = track.querySelector('.item');
//   const scrollAmount = item.offsetWidth;

//   btnLeft.addEventListener('click', () => {
//     track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//   });

//   btnRight.addEventListener('click', () => {
//     track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//   });
// });












// const slider = document.getElementById('slider');
// const leftArrow = document.getElementById('left-arrow');
// const rightArrow = document.getElementById('right-arrow');

// leftArrow.addEventListener('click', () => {
//   slider.scrollBy({ left: -220, behavior: 'smooth' });
// });

// rightArrow.addEventListener('click', () => {
//   slider.scrollBy({ left: 220, behavior: 'smooth' });
// });




const slider = document.getElementById('custom-slider');


const slider = document.getElementById('custom-slider');
