document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';

  const btnPrev = document.createElement('button');
  btnPrev.className = 'lb-prev';
  btnPrev.innerHTML = '&#8249;';

  const img = document.createElement('img');

  const btnNext = document.createElement('button');
  btnNext.className = 'lb-next';
  btnNext.innerHTML = '&#8250;';

  overlay.appendChild(btnPrev);
  overlay.appendChild(img);
  overlay.appendChild(btnNext);
  document.body.appendChild(overlay);

  const images = Array.from(
    document.querySelectorAll('.card-item img, .keyword-row img, .hero-power-item img, .portrait-grid img')
  );
  let current = 0;

  function show(index) {
    current = (index + images.length) % images.length;
    img.src = images[current].src;
  }

  images.forEach((el, i) => {
    el.addEventListener('click', () => {
      show(i);
      overlay.classList.add('active');
    });
  });

  btnPrev.addEventListener('click', e => { e.stopPropagation(); show(current - 1); });
  btnNext.addEventListener('click', e => { e.stopPropagation(); show(current + 1); });

  overlay.addEventListener('click', () => overlay.classList.remove('active'));

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') overlay.classList.remove('active');
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
});
