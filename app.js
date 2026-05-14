/* EduPanel — Application Logic */

const STATE = { lang: 'de', theme: 'dark', subject: 'all', type: 'all', search: '' };

const I18N = {
  heroTitle:   { de: 'Willkommen im Lernportal',       es: 'Bienvenido al Portal Educativo' },
  heroSub:     { de: 'Dein digitaler Unterrichtszugang', es: 'Tu acceso digital al aula' },
  searchPH:    { de: 'Suchen…  /  Buscar…',             es: 'Buscar…  /  Suchen…' },
  tabAll:      { de: 'Alle',        es: 'Todo' },
  filterAll:   { de: 'Alles',       es: 'Todo' },
  filterQR:    { de: 'QR-Codes',    es: 'QR-Codes' },
  filterLink:  { de: 'Links',       es: 'Enlaces' },
  filterVideo: { de: 'Videos',      es: 'Vídeos' },
  filterSheet: { de: 'Arbeitsblätter', es: 'Fichas' },
  btnOpen:     { de: 'Öffnen',      es: 'Abrir' },
  btnQR:       { de: 'QR anzeigen', es: 'Ver QR' },
  btnCopy:     { de: 'Link kopieren', es: 'Copiar enlace' },
  btnCopied:   { de: '✓ Kopiert!',  es: '✓ Copiado!' },
  btnDownload: { de: 'QR speichern', es: 'Guardar QR' },
  statResources: { de: 'Ressourcen', es: 'Recursos' },
  statSubjects:  { de: 'Fächer',    es: 'Materias' },
  statTypes:     { de: 'Kategorien', es: 'Categorías' },
  empty:       { de: 'Keine Ergebnisse gefunden', es: 'No se encontraron resultados' },
  emptySub:    { de: 'Andere Filter ausprobieren', es: 'Intenta con otros filtros' },
};

function t(key) { return I18N[key]?.[STATE.lang] ?? key; }

// ── Init ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  setupLang();
  setupSubjectTabs();
  setupTypeFilters();
  setupSearch();
  setupModal();
  render();
  animateCounters();
});

// ── Theme ───────────────────────────────────────────────────────────────────

function setupTheme() {
  const btn = document.getElementById('btnTheme');
  const html = document.documentElement;
  const icon = btn.querySelector('.theme-icon');
  btn.addEventListener('click', () => {
    STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = STATE.theme;
    icon.textContent = STATE.theme === 'dark' ? '🌙' : '☀️';
    btn.title = STATE.theme === 'dark' ? 'Heller Modus / Modo claro' : 'Dunkler Modus / Modo oscuro';
  });
}

// ── Language ────────────────────────────────────────────────────────────────

function setupLang() {
  const btn = document.getElementById('btnLang');
  btn.addEventListener('click', () => {
    STATE.lang = STATE.lang === 'de' ? 'es' : 'de';
    btn.innerHTML = STATE.lang === 'de'
      ? '<span class="lang-on">DE</span><span class="lang-sep">·</span><span class="lang-off">ES</span>'
      : '<span class="lang-off">DE</span><span class="lang-sep">·</span><span class="lang-on">ES</span>';
    applyI18n();
    render();
  });
}

function applyI18n() {
  document.getElementById('heroTitle').textContent = t('heroTitle');
  document.getElementById('heroSub').textContent   = t('heroSub');
  document.getElementById('searchInput').placeholder = t('searchPH');
  document.getElementById('statLabelResources').textContent = t('statResources');
  document.getElementById('statLabelSubjects').textContent  = t('statSubjects');
  document.getElementById('statLabelTypes').textContent     = t('statTypes');

  document.querySelectorAll('[data-tab]').forEach(tab => {
    const key = tab.dataset.tab;
    tab.querySelector('.tab-label').textContent =
      key === 'all' ? t('tabAll')
      : SUBJECT_CONFIG[key][`label_${STATE.lang}`];
  });

  document.querySelectorAll('[data-filter]').forEach(btn => {
    const k = btn.dataset.filter;
    btn.querySelector('.filter-label').textContent =
      k === 'all'       ? t('filterAll')
      : k === 'qr'      ? t('filterQR')
      : k === 'link'    ? t('filterLink')
      : k === 'video'   ? t('filterVideo')
      : t('filterSheet');
  });

  const copyBtn = document.getElementById('modalCopy');
  if (copyBtn && !copyBtn.classList.contains('copied')) {
    copyBtn.textContent = t('btnCopy');
  }
  const dlBtn = document.getElementById('modalDownload');
  if (dlBtn) dlBtn.textContent = t('btnDownload');
}

// ── Filters ─────────────────────────────────────────────────────────────────

function setupSubjectTabs() {
  document.querySelectorAll('[data-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('[data-tab]').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      STATE.subject = tab.dataset.tab;
      render();
    });
  });
}

function setupTypeFilters() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.type = btn.dataset.filter;
      render();
    });
  });
}

function setupSearch() {
  document.getElementById('searchInput').addEventListener('input', e => {
    STATE.search = e.target.value.toLowerCase().trim();
    render();
  });
}

// ── Render ───────────────────────────────────────────────────────────────────

function getFiltered() {
  return RESOURCES.filter(r => {
    if (STATE.subject !== 'all' && r.subject !== STATE.subject) return false;
    if (STATE.type !== 'all' && r.type !== STATE.type) return false;
    if (STATE.search) {
      const haystack = `${r.title_de} ${r.title_es} ${r.desc_de} ${r.desc_es}`.toLowerCase();
      if (!haystack.includes(STATE.search)) return false;
    }
    return true;
  });
}

function render() {
  const grid = document.getElementById('grid');
  const filtered = getFiltered();

  // Fade out existing cards
  const existing = grid.querySelectorAll('.card');
  existing.forEach(c => c.classList.add('card-exit'));

  setTimeout(() => {
    grid.innerHTML = '';
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <p class="empty-title">${t('empty')}</p>
          <p class="empty-sub">${t('emptySub')}</p>
        </div>`;
      return;
    }
    filtered.forEach((r, i) => {
      const card = buildCard(r, i);
      grid.appendChild(card);
    });
  }, existing.length > 0 ? 200 : 0);
}

function buildCard(r, i) {
  const cfg = SUBJECT_CONFIG[r.subject];
  const tcfg = TYPE_CONFIG[r.type];
  const lang = STATE.lang;
  const title = r[`title_${lang}`];
  const desc  = r[`desc_${lang}`];
  const subjectLabel = cfg[`label_${lang}`];
  const typeLabel    = tcfg[`label_${lang}`];

  const card = document.createElement('article');
  card.className = 'card';
  card.style.setProperty('--card-grad', cfg.gradient);
  card.style.setProperty('--card-glow', cfg.glow);
  card.style.animationDelay = `${i * 0.06}s`;

  card.innerHTML = `
    <div class="card-glow-border"></div>
    <div class="card-inner">
      <div class="card-top">
        <div class="card-icon" style="background:${cfg.gradient}; box-shadow:0 8px 24px ${cfg.glow}">
          <span class="card-emoji">${r.emoji}</span>
        </div>
        <div class="card-badges">
          <span class="badge badge-subject"
            style="background:${cfg.badge_bg};border-color:${cfg.badge_border};color:${cfg.badge_color}">
            ${subjectLabel}
          </span>
          <span class="badge badge-type">${tcfg.icon} ${typeLabel}</span>
        </div>
      </div>

      <h3 class="card-title">${title}</h3>
      <p class="card-desc">${desc}</p>

      <div class="card-url">
        <span class="url-icon">🔗</span>
        <span class="url-text">${r.shortUrl}</span>
      </div>

      <div class="card-actions">
        <button class="btn btn-primary" data-open="${r.url}">
          <span>↗</span> ${t('btnOpen')}
        </button>
        <button class="btn btn-ghost" data-qr="${r.id}">
          ⬛ ${t('btnQR')}
        </button>
      </div>
    </div>`;

  // 3-D tilt
  card.addEventListener('mousemove', onTilt);
  card.addEventListener('mouseleave', onUntilt);

  card.querySelector('[data-open]').addEventListener('click', e => {
    e.stopPropagation();
    window.open(r.url, '_blank', 'noopener,noreferrer');
  });
  card.querySelector('[data-qr]').addEventListener('click', e => {
    e.stopPropagation();
    openModal(r);
  });

  return card;
}

// ── 3-D Tilt ─────────────────────────────────────────────────────────────────

function onTilt(e) {
  const c = e.currentTarget;
  const { left, top, width, height } = c.getBoundingClientRect();
  const x = ((e.clientX - left) / width  - 0.5) * 16;
  const y = ((e.clientY - top)  / height - 0.5) * -16;
  c.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-10px) scale(1.02)`;
}

function onUntilt(e) {
  e.currentTarget.style.transform = '';
}

// ── Modal ────────────────────────────────────────────────────────────────────

function setupModal() {
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openModal(r) {
  const modal   = document.getElementById('modalOverlay');
  const title   = document.getElementById('modalTitle');
  const urlEl   = document.getElementById('modalUrl');
  const qrWrap  = document.getElementById('qrWrap');
  const copyBtn = document.getElementById('modalCopy');
  const dlBtn   = document.getElementById('modalDownload');

  title.textContent = r[`title_${STATE.lang}`];
  urlEl.textContent = r.url;
  qrWrap.innerHTML  = '';

  // Color-matched QR
  const cfg = SUBJECT_CONFIG[r.subject];
  document.getElementById('modalAccent').style.background = cfg.gradient;

  new QRCode(qrWrap, {
    text:  r.url,
    width: 220, height: 220,
    colorDark:  '#0a0a1a',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });

  copyBtn.textContent = t('btnCopy');
  copyBtn.classList.remove('copied');
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(r.url).then(() => {
      copyBtn.textContent = t('btnCopied');
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = t('btnCopy');
        copyBtn.classList.remove('copied');
      }, 2500);
    });
  };

  dlBtn.textContent = t('btnDownload');
  dlBtn.onclick = () => {
    const canvas = qrWrap.querySelector('canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `qr-${r.shortUrl.replace(/[^a-z0-9]/gi,'-')}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Animated counters ────────────────────────────────────────────────────────

function animateCounters() {
  const targets = {
    statNumResources: RESOURCES.length,
    statNumSubjects:  Object.keys(SUBJECT_CONFIG).length,
    statNumTypes:     Object.keys(TYPE_CONFIG).length,
  };
  Object.entries(targets).forEach(([id, target]) => {
    const el = document.getElementById(id);
    if (!el) return;
    let n = 0;
    const step = () => {
      n = Math.min(n + Math.ceil(target / 30), target);
      el.textContent = n;
      if (n < target) requestAnimationFrame(step);
    };
    setTimeout(step, 800);
  });
}
