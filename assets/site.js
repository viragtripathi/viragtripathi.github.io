'use strict';
const controls = document.querySelector('.archive-controls');
if (controls) {
  const items = [...document.querySelectorAll('.archive-item')];
  controls.hidden = false;
  controls.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    for (const option of controls.querySelectorAll('button')) {
      option.setAttribute('aria-pressed', String(option === button));
    }
    for (const item of items) {
      item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
    }
    const count = items.filter(item => !item.hidden).length;
    document.querySelector('#archive-status').textContent = `${count} projects shown`;
  });
}
