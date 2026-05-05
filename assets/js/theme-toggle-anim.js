(function () {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return;
  }

  function init() {
    const btn = document.getElementById('light-toggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      const icon = document.getElementById('light-toggle-icon');
      if (!icon) return;
      icon.classList.remove('theme-icon-anim');
      // Force reflow so re-adding the class restarts the animation.
      void icon.offsetWidth;
      icon.classList.add('theme-icon-anim');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
