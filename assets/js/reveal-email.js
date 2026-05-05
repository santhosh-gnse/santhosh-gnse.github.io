(function () {
  const CHARSET =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@._-';

  function randChar() {
    return CHARSET[Math.floor(Math.random() * CHARSET.length)];
  }

  function decode(b64) {
    try {
      return atob(b64);
    } catch (e) {
      return '';
    }
  }

  function shuffleReveal(btn) {
    const user = decode(btn.dataset.user);
    const domain = decode(btn.dataset.domain);
    const email = user + '@' + domain;
    if (!user || !domain) return;

    const span = document.createElement('span');
    span.className = 'reveal-email-shuffle';
    span.setAttribute('aria-live', 'polite');
    span.style.fontFamily =
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
    span.style.whiteSpace = 'nowrap';
    btn.replaceWith(span);

    const total = email.length;
    let locked = 0;
    let tick = 0;
    const tickMs = 35;
    const ticksPerLock = 2;

    const id = setInterval(function () {
      let out = '';
      for (let i = 0; i < total; i++) {
        out += i < locked ? email[i] : randChar();
      }
      span.textContent = out;
      tick++;
      if (tick % ticksPerLock === 0) {
        locked++;
        if (locked > total) {
          clearInterval(id);
          const a = document.createElement('a');
          a.href = 'mailto:' + email;
          a.textContent = email;
          a.className = 'reveal-email-link';
          span.replaceWith(a);
        }
      }
    }, tickMs);
  }

  function init() {
    const btns = document.querySelectorAll('[data-reveal-email]');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        shuffleReveal(btn);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
