const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');
const menuLinks = document.querySelectorAll('.side-menu a');

window.addEventListener('load', () => {
  window.setTimeout(() => {
    document.body.classList.add('hero-visible');
  }, 4000);
});

if (menuToggle && sideMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = sideMenu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      // Natív, hibás ugrás megakadályozása
      event.preventDefault(); 
      
      // Menü bezárása
      sideMenu.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');

      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // A sticky elemeknél a getBoundingClientRect() fals értéket ad, ha már le van tapadva.
          // Helyette az offsetTop megadja a szekció eredeti, abszolút pozícióját a dokumentumban.
          const offsetPosition = targetElement.offsetTop;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  document.addEventListener('click', (event) => {
    const clickedInsideMenu = sideMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle && sideMenu.classList.contains('is-open')) {
      sideMenu.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// A kód többi része (carousel és form JS) jöhet ide módosítás nélkül...

const track = document.querySelector('.carousel__track');
const cards = Array.from(document.querySelectorAll('.mentor-card'));
const dots = Array.from(document.querySelectorAll('.dot'));
const prevButton = document.querySelector('.carousel__nav--prev');
const nextButton = document.querySelector('.carousel__nav--next');

if (track && cards.length) {
  let activeIndex = 0;

  function updateCarousel(index) {
    activeIndex = (index + cards.length) % cards.length;
    track.style.transform = `translateX(-${activeIndex * 100}%)`;

    cards.forEach((card, cardIndex) => {
      card.classList.toggle('is-visible', cardIndex === activeIndex);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === activeIndex);
    });
  }

  prevButton?.addEventListener('click', () => updateCarousel(activeIndex - 1));
  nextButton?.addEventListener('click', () => updateCarousel(activeIndex + 1));

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateCarousel(index));
  });

  setInterval(() => {
    updateCarousel(activeIndex + 1);
  }, 5000);
}

const form = document.querySelector('.newsletter-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = form.querySelector('input');
    if (input) {
      const email = input.value.trim();
      if (email) {
        input.value = '';
        input.placeholder = 'Thanks for subscribing!';
      }
    }
  });
}