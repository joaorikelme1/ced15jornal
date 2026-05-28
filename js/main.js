// Jornal CEd 15 — main.js

// ==================== DATE ====================
function updateDate() {
  const el = document.getElementById('current-date');
  if (!el) return;
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  el.textContent = now.toLocaleDateString('pt-BR', options);
}

// ==================== ACTIVE NAV ====================
function setActiveNav() {
  const links = document.querySelectorAll('.site-nav a');
  const page = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ==================== TICKER ====================
function duplicateTicker() {
  const inner = document.querySelector('.ticker-inner');
  if (!inner) return;
  const clone = inner.cloneNode(true);
  inner.parentNode.appendChild(clone);
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  updateDate();
  setActiveNav();
  duplicateTicker();
});
