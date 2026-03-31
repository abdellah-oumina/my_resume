/* ============================================================
   APP.JS  — Reads from DATA in data.js and builds the page
   ============================================================ */

'use strict';

/* ── Theme ────────────────────────────────────────────────── */
const THEME_KEY = 'portfolio-theme';

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(saved);
}

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  document.getElementById('themeToggle').innerHTML =
    theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
}

/* ── Navbar scroll / active link ─────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link');
  const sections = [...document.querySelectorAll('section[id]')];

  window.addEventListener('scroll', () => {
    // Scrolled shadow
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    // Active section highlight
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    links.forEach(l => {
      const href = l.getAttribute('href').slice(1);
      l.classList.toggle('active', href === current);
    });
  }, { passive: true });
}

/* ── Mobile menu ──────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const drawer = document.getElementById('nav-drawer');
  const links = document.querySelectorAll('#nav-drawer .nav-link');

  toggle.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    drawer.setAttribute('aria-hidden', !open);
  });

  links.forEach(l => l.addEventListener('click', () => {
    drawer.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }));
}

/* ── Scroll reveal ────────────────────────────────────────── */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ── Lightbox ─────────────────────────────────────────────── */
let lbImages = [];
let lbIndex = 0;

function openLightbox(images, index) {
  lbImages = images;
  lbIndex = index;
  renderLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.getElementById('lightbox').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lightbox').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
  renderLightbox();
}

function renderLightbox() {
  const img = document.getElementById('lb-img');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = lbImages[lbIndex];
    img.style.opacity = '1';
  }, 120);
  document.getElementById('lb-counter').textContent = `${lbIndex + 1} / ${lbImages.length}`;
  document.getElementById('lb-prev').style.display = lbImages.length <= 1 ? 'none' : '';
  document.getElementById('lb-next').style.display = lbImages.length <= 1 ? 'none' : '';
}

function initLightbox() {
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', () => navigateLightbox(-1));
  document.getElementById('lb-next').addEventListener('click', () => navigateLightbox(1));

  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
  });
}

/* ── Project Modal ────────────────────────────────────────── */
function openProjectModal(project) {
  const overlay = document.getElementById('project-modal');

  document.getElementById('modal-icon').src = project.icon;
  document.getElementById('modal-icon').alt = project.name;
  document.getElementById('modal-project-title').textContent = project.name;
  document.getElementById('modal-desc').innerHTML = project.description;

  // Tech tags
  document.getElementById('modal-tech').innerHTML = project.tech
    .map(t => `<span class="tag accent-tag">${t}</span>`).join('');

  // Gallery
  const gallery = document.getElementById('modal-gallery');
  if (project.screenshots && project.screenshots.length) {
    gallery.innerHTML = project.screenshots.map((src, i) => `
      <div class="gallery-item" data-index="${i}" role="button" tabindex="0" aria-label="View screenshot ${i + 1}">
        <img src="${src}" alt="${project.name} screenshot ${i + 1}" loading="lazy">
      </div>
    `).join('');

    gallery.querySelectorAll('.gallery-item').forEach(el => {
      const handler = () => openLightbox(project.screenshots, Number(el.dataset.index));
      el.addEventListener('click', handler);
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handler(); });
    });
  } else {
    gallery.innerHTML = '<p style="color:var(--text-muted);font-size:.85rem;">No screenshots available.</p>';
  }

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const overlay = document.getElementById('project-modal');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModal() {
  document.getElementById('modal-close-btn').addEventListener('click', closeProjectModal);
  document.getElementById('project-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('project-modal')) closeProjectModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.getElementById('project-modal').classList.contains('open')) {
      closeProjectModal();
    }
  });
}

/* ─────────────────────────────────────────────────────────── */
/* RENDER FUNCTIONS                                            */
/* ─────────────────────────────────────────────────────────── */

function renderHero() {
  document.getElementById('hero-name').textContent = DATA.name;
  document.getElementById('hero-title').textContent = DATA.title;
  document.getElementById('hero-subtitle').textContent = DATA.subtitle;
  document.getElementById('hero-img').src = DATA.image;

  // CTA buttons
  const dlHandler = () => {
    const a = document.createElement('a');
    a.href = DATA.cvLink;
    a.download = 'Abdellah_Oumina_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  document.getElementById('hero-cv-btn').addEventListener('click', dlHandler);

  // Contact chips
  const c = DATA.contact;
  const chips = [
    { href: `mailto:${c.email}`, icon: 'fa-envelope', label: c.email },
    { href: `tel:${c.phone}`, icon: 'fa-phone', label: c.phone },
    { href: c.linkedin, target: '_blank', icon: 'fa-linkedin fab', label: 'LinkedIn' },
    { href: '#', icon: 'fa-map-marker-alt', label: c.location, nolink: true },
  ].filter(Boolean);

  document.getElementById('hero-contact').innerHTML = chips.map(ch => {
    if (ch.nolink) return `<span class="contact-chip"><i class="fas ${ch.icon}"></i>${ch.label}</span>`;
    return `<a href="${ch.href}" ${ch.target ? `target="${ch.target}"` : ''} class="contact-chip">
              <i class="${ch.icon.includes('fab') ? ch.icon : 'fas ' + ch.icon}"></i>${ch.label}
            </a>`;
  }).join('');

  // Stats
  document.getElementById('hero-stats').innerHTML = DATA.stats.map(s => `
    <div class="stat-item reveal">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

function renderAbout() {
  document.getElementById('about-text').innerHTML = DATA.summary;
  document.getElementById('about-text').classList.add('reveal');
}

function renderExperience() {
  const el = document.getElementById('experience-container');
  el.innerHTML = DATA.experience.map(exp => `
    <div class="exp-card reveal">
      <div class="exp-header">
        <div>
          <div class="exp-title">${exp.title}</div>
          <div class="exp-meta">
            <span><i class="fas fa-building"></i>${exp.company}</span>
            <span><i class="fas fa-map-marker-alt"></i>${exp.location}</span>
          </div>
        </div>
        <span class="exp-badge"><i class="fas fa-calendar-alt" style="margin-right:.4rem;"></i>${exp.period}</span>
      </div>
      <div class="timeline">
        ${exp.timeline.map(t => `
          <div class="timeline-item">
            ${t.period ? `<div class="timeline-period">${t.period}</div>` : ''}
            <div class="timeline-role">${t.role}</div>
            <ul class="timeline-list">
              ${t.items.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = DATA.projects.map((p, i) => `
    <div class="project-card reveal" 
         role="button" tabindex="0"
         aria-label="Open ${p.name} details"
         data-index="${i}">
      <div class="project-icon-wrap">
        <img src="${p.icon}" alt="${p.name} icon" loading="lazy">
      </div>
      <div class="project-card-name">${p.name}</div>
      <div class="project-card-tags">
        ${p.tech.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
        ${p.tech.length > 3 ? `<span class="tag">+${p.tech.length - 3}</span>` : ''}
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.project-card').forEach(card => {
    const handler = () => openProjectModal(DATA.projects[Number(card.dataset.index)]);
    card.addEventListener('click', handler);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handler(); });
  });
}

function renderSkills() {
  document.getElementById('skills-container').innerHTML = DATA.skills.map(s => `
    <div class="skill-card reveal">
      <div class="skill-card-header">
        <div class="skill-card-icon"><i class="fas ${s.icon}"></i></div>
        <h3>${s.category}</h3>
      </div>
      <div class="skill-tags">
        ${s.items.map(item => `<span class="skill-badge">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderEducation() {
  const flags = ['🎓', '📚'];
  document.getElementById('edu-container').innerHTML = DATA.education.map((e, i) => `
    <div class="edu-card reveal">
      <div class="edu-icon">${flags[i] || '🎓'}</div>
      <div>
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-field">${e.field}</div>
        <div class="edu-meta">
          <span><i class="fas fa-university"></i>${e.institution}</span>
          <span><i class="fas fa-calendar-alt"></i>${e.period}</span>
          <span><i class="fas fa-map-marker-alt"></i>${e.location}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCertificates() {
  document.getElementById('certs-container').innerHTML = DATA.certificates.map(c => `
    <a href="${c.link}" target="_blank" rel="noopener" class="cert-card reveal" aria-label="View certificate: ${c.name}">
      <div class="cert-icon"><i class="fas fa-certificate"></i></div>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-meta">${c.organization} &middot; ${c.date}</div>
      </div>
      <i class="fas fa-arrow-right cert-link-hint"></i>
    </a>
  `).join('');
}

function renderLanguages() {
  const flagMap = { Arabic: '🇲🇦', French: '🇫🇷', English: '🇬🇧' };
  document.getElementById('lang-container').innerHTML = DATA.languages.map(l => `
    <div class="lang-card reveal">
      <div class="lang-flag">${flagMap[l.lang] || '🌍'}</div>
      <div>
        <div class="lang-name">${l.lang}</div>
        <div class="lang-level">${l.level}</div>
      </div>
    </div>
  `).join('');
}

function renderNavDrawer() {
  const sections = [
    ['#hero', 'Home'], ['#projects', 'Projects'], ['#experience', 'Experience'],
    ['#skills', 'Skills'], ['#education', 'Education'], ['#certificates', 'Certificates'],
  ];
  document.getElementById('nav-drawer').innerHTML = sections.map(([href, label]) =>
    `<li><a href="${href}" class="nav-link">${label}</a></li>`
  ).join('');
}

function renderFooter() {
  document.getElementById('footer-name').textContent = DATA.name;
  document.getElementById('year').textContent = new Date().getFullYear() + " - 2022";

  const c = DATA.contact;
  const links = [
    { href: c.linkedin, icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: c.github, icon: 'fab fa-github', label: 'GitHub' },
    { href: `mailto:${c.email}`, icon: 'fas fa-envelope', label: 'Email' },
  ].filter(l => l.href);

  document.getElementById('footer-links').innerHTML = links.map(l => `
    <a href="${l.href}" target="_blank" rel="noopener" class="footer-link" aria-label="${l.label}">
      <i class="${l.icon}"></i>
    </a>
  `).join('');
}

/* ─────────────────────────────────────────────────────────── */
/* INIT                                                        */
/* ─────────────────────────────────────────────────────────── */
function init() {
  initTheme();

  // Render all sections
  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();
  renderCertificates();
  renderLanguages();
  renderNavDrawer();
  renderFooter();

  // Wire up interactivity
  initNavbar();
  initMobileMenu();
  initModal();
  initLightbox();

  // Scroll reveal (must come after render)
  requestAnimationFrame(initReveal);

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
