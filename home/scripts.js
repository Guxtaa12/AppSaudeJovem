// Abrir e fechar offcanvas
const menuBtn = document.getElementById('menu-btn');
const offcanvas = document.getElementById('offcanvas');
const closeBtn = document.getElementById('close-btn');

// Criar overlay dinamicamente
const overlay = document.createElement('div');
overlay.id = 'offcanvas-overlay';
document.body.appendChild(overlay);

menuBtn.addEventListener('click', () => {
  offcanvas.classList.add('open');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  offcanvas.classList.remove('open');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  offcanvas.classList.remove('open');
  overlay.classList.remove('active');
});

const bannerBg = document.querySelector('.navbar-bg');
const apresentationSection = document.querySelector('#apresentation');

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      bannerBg.classList.add('scrolled'); // saiu da seção do vídeo
    } else {
      bannerBg.classList.remove('scrolled'); // ainda está sobre o vídeo
    }
  },
  { root: null, threshold: 0.1 }
);

const aboutSection = document.querySelector('.about-content');

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutSection.classList.add('animate');
        aboutObserver.unobserve(aboutSection); // roda só 1 vez
      }
    });
  },
  { threshold: 0.2 }
);

if (aboutSection) {
  aboutObserver.observe(aboutSection);
}

observer.observe(apresentationSection);
