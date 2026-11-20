/* A visual introduction to prebuilt documents. No build runs in the browser. */
(() => {
  const dialog = document.querySelector('#resume-intro');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const replay = document.querySelector('#replay-intro');
  const main = document.querySelector('#resume-content');
  const command = document.querySelector('#build-command');
  const lines = [...document.querySelectorAll('.build-line')];
  const skip = document.querySelector('#skip-intro');
  const cancel = document.querySelector('#cancel-pdf');
  const openPDF = document.querySelector('#open-pdf');
  const status = document.querySelector('#resume-status');
  const phase = document.querySelector('#build-phase');
  const documentState = document.querySelector('#document-state');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let timers = [];
  let active = false;
  let mode = 'intro';
  let previousFocus = null;
  let replaying = false;
  replay.hidden = false;

  const later = (fn, delay) => timers.push(window.setTimeout(fn, delay));
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function close(animate = false) {
    clearTimers();
    active = false;
    dialog.close();
    dialog.classList.remove('is-leaving');
    document.body.classList.remove('intro-open');
    main.classList.remove('resume-reveal');
    if (animate && !reduced.matches) {
      main.classList.add('resume-reveal');
      later(() => main.classList.remove('resume-reveal'), 1200);
    }
    const target = mode === 'pdf' || replaying ? previousFocus : document.querySelector('.resume-header h1');
    target?.focus({ preventScroll: true });
  }
  function openDocument() {
    close();
    // Same-tab navigation avoids popup blockers and leaves Back available.
    window.location.assign(openPDF.href);
  }
  function finish() {
    if (!active) return;
    clearTimers();
    dialog.classList.add('is-leaving');
    later(() => mode === 'pdf' ? openDocument() : close(true), 320);
  }
  function stage(index) {
    dialog.dataset.step = String(index + 1);
    lines[index]?.classList.add('is-complete');
    phase.textContent = ['Experience', 'Selected work', mode === 'pdf' ? 'Opening PDF' : 'Ready to explore'][index];
    if (index === 2) documentState.textContent = 'Two pages. A lot of building.';
  }
  function start(nextMode = 'intro', isReplay = false) {
    if (active) return;
    mode = nextMode;
    replaying = isReplay;
    previousFocus = document.activeElement;
    clearTimers();
    main.classList.remove('resume-reveal');
    if (reduced.matches) {
      if (mode === 'pdf') window.location.assign(openPDF.href);
      else status.textContent = 'Resume ready. Animation skipped for reduced motion.';
      return;
    }
    active = true;
    dialog.dataset.mode = mode;
    dialog.dataset.step = '0';
    dialog.classList.remove('is-leaving');
    command.textContent = '';
    lines.forEach(line => line.classList.remove('is-complete'));
    phase.textContent = mode === 'pdf' ? 'Your PDF is ready' : 'Experience';
    documentState.textContent = mode === 'pdf' ? 'The portable edition.' : 'Experience, in focus.';
    skip.textContent = mode === 'pdf' ? 'Open now ↗' : 'Skip intro ↗';
    cancel.hidden = mode !== 'pdf';
    document.querySelector('#intro-description').textContent = mode === 'pdf'
      ? 'The ready-made PDF will open in this tab shortly. Choose Open now to skip, or Cancel or Escape to stay on the resume.'
      : 'A brief introduction to the ready-to-read resume. Skip at any time or download the PDF immediately.';
    status.textContent = '';
    dialog.showModal();
    document.body.classList.add('intro-open');
    const text = mode === 'pdf' ? 'open resume.pdf' : 'make resume';
    [...text].forEach((_, i) => later(() => { command.textContent = text.slice(0, i + 1); }, (mode === 'pdf' ? 18 : 40) * (i + 1)));
    [0, 1, 2].forEach(i => later(() => stage(i), mode === 'pdf' ? 250 + i * 220 : 650 + i * 550));
    later(finish, mode === 'pdf' ? 1000 : 2450);
  }
  replay.addEventListener('click', () => start('intro', true));
  openPDF.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || reduced.matches) return;
    event.preventDefault();
    start('pdf');
  });
  skip.addEventListener('click', () => mode === 'pdf' ? openDocument() : close());
  cancel.addEventListener('click', () => close());
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  document.querySelector('#intro-download').addEventListener('click', () => close());
  const reset = () => { if (active) close(); clearTimers(); main.classList.remove('resume-reveal'); };
  window.addEventListener('beforeprint', reset);
  window.addEventListener('pagehide', reset);
  // A restored page must not replay or navigate from a stale timer.
  window.addEventListener('pageshow', event => { if (event.persisted) reset(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) reset(); });
  reduced.addEventListener('change', () => { if (reduced.matches) reset(); });
  // Play on each fresh visit from any Resume link; Back restores without replaying.
  if (!location.hash && !reduced.matches && !window.matchMedia('print').matches) start();
})();
