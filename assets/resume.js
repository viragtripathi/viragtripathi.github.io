/* A brief visual introduction to the already-built resume. No build runs in the browser. */
(() => {
  const dialog = document.querySelector('#resume-intro');
  const replay = document.querySelector('#replay-intro');
  const main = document.querySelector('#resume-content');
  const command = document.querySelector('#build-command');
  const lines = [...document.querySelectorAll('.build-line')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sessionKey = 'vt-resume-intro-v1';
  let timers = [];
  let active = false;
  let replaying = false;
  let previousFocus = null;

  if (!dialog || typeof dialog.showModal !== 'function') return;
  replay.hidden = false;
  const later = (fn, delay) => timers.push(window.setTimeout(fn, delay));
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function seen() {
    try { return sessionStorage.getItem(sessionKey) === 'seen'; }
    catch { return false; }
  }
  function remember() {
    try { sessionStorage.setItem(sessionKey, 'seen'); } catch { /* Storage is optional. */ }
  }
  function finish(animate = true) {
    if (!active) return;
    active = false;
    clearTimers();
    dialog.close();
    document.body.classList.remove('intro-open');
    main.classList.remove('resume-reveal');
    if (animate && !reduced.matches) {
      main.classList.add('resume-reveal');
      later(() => main.classList.remove('resume-reveal'), 850);
    }
    // Replay returns to its control; first-time visitors land at the resume heading.
    const target = replaying && previousFocus ? previousFocus : document.querySelector('.resume-header h1');
    target?.focus({ preventScroll: true });
  }
  function start(isReplay = false) {
    if (active) return;
    replaying = isReplay;
    previousFocus = document.activeElement;
    clearTimers();
    main.classList.remove('resume-reveal');
    if (reduced.matches) {
      document.querySelector('#resume-status').textContent = 'Resume ready. Animation skipped for reduced motion.';
      return;
    }
    remember();
    active = true;
    command.textContent = '';
    lines.forEach(line => { line.hidden = true; });
    document.querySelector('#resume-status').textContent = '';
    dialog.showModal();
    document.body.classList.add('intro-open');
    const text = 'make resume';
    [...text].forEach((_, i) => later(() => { command.textContent = text.slice(0, i + 1); }, 35 * (i + 1)));
    lines.forEach((line, i) => later(() => { line.hidden = false; }, 550 + i * 270));
    later(() => finish(), 1550);
  }
  replay.addEventListener('click', () => start(true));
  document.querySelector('#skip-intro').addEventListener('click', () => finish(false));
  dialog.addEventListener('cancel', event => { event.preventDefault(); finish(false); });
  document.querySelector('#intro-download').addEventListener('click', () => finish(false));
  window.addEventListener('beforeprint', () => { finish(false); main.classList.remove('resume-reveal'); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) finish(false); });
  reduced.addEventListener('change', () => { if (reduced.matches) { finish(false); main.classList.remove('resume-reveal'); } });
  if (!seen() && !location.hash && !reduced.matches && !window.matchMedia('print').matches) start();
})();
