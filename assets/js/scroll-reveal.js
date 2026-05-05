(function () {
  if (!('IntersectionObserver' in window)) return;
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return;
  }

  // Mark the document so the matching CSS selectors take effect only when JS is alive.
  document.documentElement.classList.add('js-reveal');

  const SELECTORS = [
    '.news tr',
    '.publications ol.bibliography > li',
    '.post > h2',
    '.social',
  ].join(', ');

  function init() {
    const targets = document.querySelectorAll(SELECTORS);
    if (!targets.length) return;

    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      // small per-item stagger so a list reveals as a cascade rather than a slab
      el.style.transitionDelay = Math.min(i * 40, 240) + 'ms';
    });

    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach(function (el) {
      io.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
