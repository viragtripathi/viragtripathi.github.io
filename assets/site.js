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

// Keep Tampa time independent of the visitor's timezone, including DST.
const localClock = document.querySelector('[data-local-clock]');
if (localClock) {
  const clockFormat = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit', hour12: true
  });
  const updateClock = () => {
    localClock.textContent = `${clockFormat.format(new Date())} ET`;
  };
  updateClock();
  setInterval(updateClock, 15000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateClock();
  });
}

const connectionMap = document.querySelector('.system-map');
const mapCaption = document.querySelector('#map-caption');
if (connectionMap && mapCaption) {
  const defaultCaption = mapCaption.textContent;
  let hoveredConnection = null;
  const updateConnection = () => {
    const focused = connectionMap.querySelector('.map-node:focus');
    const active = hoveredConnection || focused;
    if (active) {
      connectionMap.dataset.active = active.dataset.connection;
      mapCaption.textContent = active.dataset.description;
    } else {
      delete connectionMap.dataset.active;
      mapCaption.textContent = defaultCaption;
    }
  };
  for (const node of connectionMap.querySelectorAll('.map-node')) {
    node.addEventListener('pointerenter', event => {
      if (event.pointerType === 'touch') return;
      hoveredConnection = node;
      updateConnection();
    });
    node.addEventListener('pointerleave', () => {
      hoveredConnection = null;
      updateConnection();
    });
  }
  connectionMap.addEventListener('focusin', updateConnection);
  connectionMap.addEventListener('focusout', () => queueMicrotask(updateConnection));
}
