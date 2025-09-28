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
const apresentationSection = document.querySelector('#hero');

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

observer.observe(apresentationSection);

// Acordeão com animação
document.querySelectorAll(".tip").forEach(tip => {
  tip.addEventListener("click", () => {
    // se já está aberto, fecha ele
    if (tip.classList.contains("open")) {
      tip.classList.remove("open");
      return;
    }

    // fecha todos os outros
    document.querySelectorAll(".tip").forEach(t => t.classList.remove("open"));

    // abre só o clicado
    tip.classList.add("open");
  });
});

