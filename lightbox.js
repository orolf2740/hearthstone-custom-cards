document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';
  const img = document.createElement('img');
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  document.querySelectorAll('.card-item img, .keyword-row img, .hero-power-item img, .portrait-grid img').forEach(el => {
    el.addEventListener('click', () => {
      img.src = el.src;
      overlay.classList.add('active');
    });
  });

  overlay.addEventListener('click', () => overlay.classList.remove('active'));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') overlay.classList.remove('active');
  });
});
