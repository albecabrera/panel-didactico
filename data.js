const RESOURCES = [
  // ─── ESPAÑOL ───────────────────────────────────────────────────────────
  {
    id: 1, subject: 'espanol', type: 'link',
    title_de: 'RAE Wörterbuch',       title_es: 'Diccionario RAE',
    desc_de:  'Offizielles Spanisch-Wörterbuch der Real Academia Española',
    desc_es:  'Diccionario oficial de la Real Academia Española',
    url: 'https://dle.rae.es', shortUrl: 'dle.rae.es', emoji: '📖',
  },
  {
    id: 2, subject: 'espanol', type: 'video',
    title_de: 'Spanisch Grammatik',   title_es: 'Gramática Española',
    desc_de:  'Erklärvideos zu Grammatik und Vokabeln auf YouTube',
    desc_es:  'Videos explicativos de gramática y vocabulario en YouTube',
    url: 'https://www.youtube.com/@profeele', shortUrl: 'yt/@ProfedeELE', emoji: '🎬',
  },
  {
    id: 3, subject: 'espanol', type: 'qr',
    title_de: 'Duolingo Kurs',         title_es: 'Curso Duolingo',
    desc_de:  'Tritt unserem Klassen-Kurs auf Duolingo bei — täglich 5 min',
    desc_es:  'Únete a nuestro curso de clase en Duolingo — 5 min al día',
    url: 'https://www.duolingo.com', shortUrl: 'duolingo.com', emoji: '🦉',
  },
  {
    id: 4, subject: 'espanol', type: 'worksheet',
    title_de: 'Konjugationsübungen', title_es: 'Ejercicios de Conjugación',
    desc_de:  'Interaktive Verbkonjugation — selbst korrigierend',
    desc_es:  'Conjugación verbal interactiva — autocorrección',
    url: 'https://conjuguemos.com', shortUrl: 'conjuguemos.com', emoji: '✏️',
  },
  {
    id: 5, subject: 'espanol', type: 'link',
    title_de: 'Spanisch Hörübungen',  title_es: 'Comprensión Auditiva',
    desc_de:  'Hörverständnis-Übungen für alle Niveaus — A1 bis C2',
    desc_es:  'Ejercicios de comprensión auditiva — niveles A1 a C2',
    url: 'https://www.languagesonline.org.uk/Spanish/', shortUrl: 'languagesonline.org.uk', emoji: '🎧',
  },
  {
    id: 6, subject: 'espanol', type: 'worksheet',
    title_de: 'Wordwall Spanisch',    title_es: 'Wordwall Español',
    desc_de:  'Interaktive Spiele und Aktivitäten für den Spanischunterricht',
    desc_es:  'Juegos y actividades interactivos para la clase de español',
    url: 'https://wordwall.net/es/community/español', shortUrl: 'wordwall.net/español', emoji: '🎮',
  },

  // ─── INFORMATIK ────────────────────────────────────────────────────────
  {
    id: 7, subject: 'informatik', type: 'link',
    title_de: 'Scratch Programmieren', title_es: 'Scratch: Programar',
    desc_de:  'Visuelles Programmieren für Einsteiger — drag & drop',
    desc_es:  'Programación visual para principiantes — drag & drop',
    url: 'https://scratch.mit.edu', shortUrl: 'scratch.mit.edu', emoji: '🐱',
  },
  {
    id: 8, subject: 'informatik', type: 'video',
    title_de: 'Python Grundlagen',    title_es: 'Fundamentos de Python',
    desc_de:  'Einstieg in die Programmierung mit Python — Deutsch',
    desc_es:  'Introducción a la programación con Python — en alemán',
    url: 'https://www.youtube.com/watch?v=rfscVS0vtbw', shortUrl: 'yt/python-full-course', emoji: '🐍',
  },
  {
    id: 9, subject: 'informatik', type: 'qr',
    title_de: 'Code.org Aufgaben',    title_es: 'Actividades Code.org',
    desc_de:  'Programmierübungen und Kurse auf Code.org — kostenlos',
    desc_es:  'Ejercicios y cursos de programación en Code.org — gratis',
    url: 'https://code.org', shortUrl: 'code.org', emoji: '💻',
  },
  {
    id: 10, subject: 'informatik', type: 'worksheet',
    title_de: 'Algorithmus-Aufgaben', title_es: 'Ejercicios de Algoritmos',
    desc_de:  'Interaktive Übungen zu Algorithmen und Datenstrukturen',
    desc_es:  'Ejercicios interactivos de algoritmos y estructuras de datos',
    url: 'https://learningapps.org', shortUrl: 'learningapps.org', emoji: '🔢',
  },
  {
    id: 11, subject: 'informatik', type: 'link',
    title_de: 'Tynker Spiele-Coding', title_es: 'Tynker: Programar Juegos',
    desc_de:  'Spieleentwicklung lernen durch spielerisches Programmieren',
    desc_es:  'Aprender desarrollo de juegos programando de forma lúdica',
    url: 'https://www.tynker.com', shortUrl: 'tynker.com', emoji: '🎯',
  },
  {
    id: 12, subject: 'informatik', type: 'video',
    title_de: 'Binärsystem erklärt',  title_es: 'Sistema Binario explicado',
    desc_de:  'Wie Computer rechnen — das Binärsystem einfach erklärt',
    desc_es:  'Cómo calculan las computadoras — el sistema binario explicado',
    url: 'https://www.youtube.com/watch?v=1GSjbWt0c9M', shortUrl: 'yt/binaersystem', emoji: '🔵',
  },

  // ─── SPORT ─────────────────────────────────────────────────────────────
  {
    id: 13, subject: 'sport', type: 'link',
    title_de: 'DFB Sportregeln',      title_es: 'Reglas Deportivas DFB',
    desc_de:  'Offizielle Fußballregeln und Trainingsmaterialien des DFB',
    desc_es:  'Reglas oficiales de fútbol y materiales del DFB',
    url: 'https://www.dfb.de', shortUrl: 'dfb.de', emoji: '⚽',
  },
  {
    id: 14, subject: 'sport', type: 'video',
    title_de: 'Aufwärmroutine',       title_es: 'Rutina de Calentamiento',
    desc_de:  'Strukturiertes Aufwärmen für den Sportunterricht — 10 min',
    desc_es:  'Calentamiento estructurado para clase de deporte — 10 min',
    url: 'https://www.youtube.com/watch?v=R0mMyV5OtcM', shortUrl: 'yt/aufwaermen', emoji: '🏃',
  },
  {
    id: 15, subject: 'sport', type: 'qr',
    title_de: 'Trainingsplan Woche',  title_es: 'Plan de Entrenamiento',
    desc_de:  'Wöchentlicher Trainingsplan — scan und direkt loslegen',
    desc_es:  'Plan de entrenamiento semanal — escanear y empezar',
    url: 'https://www.nike.com/running/training-plans', shortUrl: 'nike.com/training', emoji: '📋',
  },
  {
    id: 16, subject: 'sport', type: 'worksheet',
    title_de: 'Fitness-Test Bogen',   title_es: 'Ficha de Aptitud Física',
    desc_de:  'Interaktiver Fitness-Test — Ergebnisse direkt online eintragen',
    desc_es:  'Test de aptitud física interactivo — resultados en línea',
    url: 'https://forms.google.com', shortUrl: 'forms.gle/fitness-test', emoji: '💪',
  },
  {
    id: 17, subject: 'sport', type: 'link',
    title_de: 'Sportregeln Olympia',  title_es: 'Reglas Olímpicas',
    desc_de:  'Offizielle Regelwerke aller olympischen Sportarten — deutsch',
    desc_es:  'Reglamentos oficiales de todos los deportes olímpicos',
    url: 'https://www.olympics.com/de', shortUrl: 'olympics.com/de', emoji: '🏅',
  },
  {
    id: 18, subject: 'sport', type: 'video',
    title_de: 'Yoga für Sportler',    title_es: 'Yoga para Deportistas',
    desc_de:  'Entspannung und Dehnung nach dem Training — 15 Minuten',
    desc_es:  'Relajación y estiramiento después del entrenamiento — 15 min',
    url: 'https://www.youtube.com/watch?v=v7AYKMP6rOE', shortUrl: 'yt/yoga-sport', emoji: '🧘',
  },
];

const SUBJECT_CONFIG = {
  espanol: {
    label_de: 'Spanisch',     label_es: 'Español',
    gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 50%, #ffd93d 100%)',
    glow: 'rgba(255, 107, 107, 0.35)',
    badge_bg: 'rgba(255,107,107,0.15)',
    badge_border: 'rgba(255,107,107,0.4)',
    badge_color: '#ff8e53',
  },
  informatik: {
    label_de: 'Informatik',   label_es: 'Informática',
    gradient: 'linear-gradient(135deg, #667eea 0%, #7c4dff 50%, #9c27b0 100%)',
    glow: 'rgba(102, 126, 234, 0.35)',
    badge_bg: 'rgba(102,126,234,0.15)',
    badge_border: 'rgba(102,126,234,0.4)',
    badge_color: '#a78bfa',
  },
  sport: {
    label_de: 'Sport',        label_es: 'Deporte',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #00b4d8 50%, #38f9d7 100%)',
    glow: 'rgba(67, 233, 123, 0.35)',
    badge_bg: 'rgba(67,233,123,0.15)',
    badge_border: 'rgba(67,233,123,0.4)',
    badge_color: '#34d399',
  },
};

const TYPE_CONFIG = {
  qr:        { label_de: 'QR-Code',      label_es: 'QR-Code',  icon: '⬛' },
  link:      { label_de: 'Link',         label_es: 'Enlace',   icon: '🔗' },
  video:     { label_de: 'Video',        label_es: 'Vídeo',    icon: '▶' },
  worksheet: { label_de: 'Arbeitsblatt', label_es: 'Ficha',    icon: '📄' },
};
