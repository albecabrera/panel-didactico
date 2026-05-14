/* EduPanel — Application Logic */

const STATE = { lang: 'de', theme: 'dark', subject: 'all', type: 'all', search: '' };

// ── LocalStorage overrides ───────────────────────────────────────────────────

const OVERRIDES_KEY = 'edu_overrides';

function getLiveResources() {
  const ov = JSON.parse(localStorage.getItem(OVERRIDES_KEY) || '{}');
  return RESOURCES.map(r => ov[r.id] ? { ...r, ...ov[r.id] } : r);
}
function saveOverride(id, patch) {
  const ov = JSON.parse(localStorage.getItem(OVERRIDES_KEY) || '{}');
  ov[id] = { ...(ov[id] || {}), ...patch };
  localStorage.setItem(OVERRIDES_KEY, JSON.stringify(ov));
}
function resetOverride(id) {
  const ov = JSON.parse(localStorage.getItem(OVERRIDES_KEY) || '{}');
  delete ov[id];
  localStorage.setItem(OVERRIDES_KEY, JSON.stringify(ov));
}

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
  setupEditModal();
  setupViewer();
  setupCardGlow();
  setupScrollReveal();
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
    const key  = tab.dataset.tab;
    const label = key === 'all'
      ? t('tabAll')
      : SUBJECT_CONFIG[key][`label_${STATE.lang}`];
    tab.querySelector('.tab-label').textContent = label;
    // swap tab icon when subject config has one
    if (key !== 'all' && SUBJECT_CONFIG[key]?.tabIcon) {
      const img = tab.querySelector('.tab-icon-img');
      if (img) img.src = SUBJECT_CONFIG[key].tabIcon;
    }
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
  return getLiveResources().filter(r => {
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
  const cfg  = SUBJECT_CONFIG[r.subject];
  const tcfg = TYPE_CONFIG[r.type];
  const lang = STATE.lang;
  const title        = r[`title_${lang}`];
  const desc         = r[`desc_${lang}`];
  const subjectLabel = cfg[`label_${lang}`];
  const typeLabel    = tcfg[`label_${lang}`];

  const card = document.createElement('article');
  card.className = 'card';
  card.style.setProperty('--card-grad', cfg.gradient);
  card.style.setProperty('--card-glow', cfg.glow);
  card.style.animationDelay = `${i * 0.045}s`;
  card.setAttribute('role', 'listitem');

  card.innerHTML = `
    <div class="card-header">
      <div class="card-icon-box">
        <img class="card-icon-img" src="${r.icon}" alt=""
             loading="lazy" onerror="this.style.opacity='.2'">
      </div>
      <span class="type-chip">${tcfg.icon}&thinsp;${typeLabel}</span>
    </div>

    <div class="card-body">
      <p class="card-subject">${subjectLabel}</p>
      <h3 class="card-title">${title}</h3>
      <p class="card-desc">${desc}</p>
    </div>

    <div class="card-actions">
      <button class="btn-card-primary" data-open="${r.url}">${t('btnOpen')} ↗</button>
      <button class="btn-card-ghost"   data-qr="${r.id}">QR</button>
    </div>
    <button class="btn-card-edit" data-edit="${r.id}" aria-label="Bearbeiten / Editar">✎</button>`;

  card.querySelector('[data-open]').addEventListener('click', e => {
    e.stopPropagation();
    openViewer(r.url, title);
  });
  card.querySelector('[data-qr]').addEventListener('click', e => {
    e.stopPropagation();
    openModal(r);
  });
  card.querySelector('[data-edit]').addEventListener('click', e => {
    e.stopPropagation();
    openEditModal(r);
  });

  return card;
}

// ── Scroll reveal ────────────────────────────────────────────────────────────

function setupScrollReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
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

// ── In-App Viewer ────────────────────────────────────────────────────────────

function toEmbedUrl(url) {
  // YouTube: watch?v=ID → embed/ID
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s?]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?rel=0&modestbranding=1`;
  return url;
}

function setupViewer() {
  document.getElementById('viewerBack').addEventListener('click', closeViewer);
  document.getElementById('viewerScrim').addEventListener('click', closeViewer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeViewer();
  });
}

function openViewer(url, title) {
  if (toEmbedUrl(url) === url) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }
  const panel      = document.getElementById('viewerPanel');
  const scrim      = document.getElementById('viewerScrim');
  const iframe     = document.getElementById('viewerIframe');
  const fallback   = document.getElementById('viewerFallback');
  const titleEl    = document.getElementById('viewerTitle');
  const extLink    = document.getElementById('viewerExternal');
  const hintLink   = document.getElementById('viewerHintLink');
  const fbBtn      = document.getElementById('viewerFallbackBtn');

  titleEl.textContent = title;
  extLink.href  = url;
  hintLink.href = url;
  fbBtn.href    = url;

  fallback.classList.remove('show');
  iframe.src = toEmbedUrl(url);

  // Detect embed blocks after a brief load attempt
  let loaded = false;
  iframe.onload = () => { loaded = true; };
  setTimeout(() => {
    if (!loaded) {
      iframe.style.display = 'none';
      fallback.classList.add('show');
    } else {
      iframe.style.display = '';
    }
  }, 6000);

  panel.classList.add('open');
  scrim.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeViewer() {
  const panel  = document.getElementById('viewerPanel');
  const scrim  = document.getElementById('viewerScrim');
  const iframe = document.getElementById('viewerIframe');
  panel.classList.remove('open');
  scrim.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    iframe.src = '';
    iframe.style.display = '';
    document.getElementById('viewerFallback').classList.remove('show');
  }, 400);
}

// ── Card cursor glow ─────────────────────────────────────────────────────────

function setupCardGlow() {
  const grid = document.getElementById('grid');
  grid.addEventListener('mousemove', e => {
    const card = e.target.closest('.card');
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${((e.clientX - left) / width * 100).toFixed(1)}%`);
    card.style.setProperty('--my', `${((e.clientY - top) / height * 100).toFixed(1)}%`);
  });
}

// ── Edit Modal ───────────────────────────────────────────────────────────────

function setupEditModal() {
  document.getElementById('editOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeEditModal();
  });
  document.getElementById('editClose').addEventListener('click', closeEditModal);
  document.getElementById('editReset').addEventListener('click', () => {
    const id = Number(document.getElementById('editOverlay').dataset.editId);
    if (!id) return;
    resetOverride(id);
    closeEditModal();
    render();
  });
  document.getElementById('editForm').addEventListener('submit', e => {
    e.preventDefault();
    const id = Number(document.getElementById('editOverlay').dataset.editId);
    if (!id) return;
    saveOverride(id, {
      title_de: document.getElementById('editTitleDe').value.trim(),
      title_es: document.getElementById('editTitleEs').value.trim(),
      desc_de:  document.getElementById('editDescDe').value.trim(),
      desc_es:  document.getElementById('editDescEs').value.trim(),
      url:      document.getElementById('editUrl').value.trim(),
      shortUrl: document.getElementById('editShortUrl').value.trim(),
    });
    closeEditModal();
    render();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeEditModal();
  });
}

function openEditModal(r) {
  const overlay = document.getElementById('editOverlay');
  overlay.dataset.editId = r.id;

  document.getElementById('editTitleDe').value  = r.title_de;
  document.getElementById('editTitleEs').value  = r.title_es;
  document.getElementById('editDescDe').value   = r.desc_de;
  document.getElementById('editDescEs').value   = r.desc_es;
  document.getElementById('editUrl').value      = r.url;
  document.getElementById('editShortUrl').value = r.shortUrl;

  const ov = JSON.parse(localStorage.getItem(OVERRIDES_KEY) || '{}');
  document.getElementById('editReset').style.display = ov[r.id] ? '' : 'none';

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('editTitleDe').focus();
}

function closeEditModal() {
  document.getElementById('editOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
