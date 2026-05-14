// Icons8 Fluency CDN — https://icons8.com
const I8 = (slug, size = 96) =>
  `https://img.icons8.com/fluency/${size}/${slug}.png`;

const RESOURCES = [
  // ─── ESPAÑOL ───────────────────────────────────────────────────────────
  {
    id: 1, subject: 'espanol', type: 'link',
    title_de: 'RAE Wörterbuch',       title_es: 'Diccionario RAE',
    desc_de:  'Offizielles Spanisch-Wörterbuch der Real Academia Española',
    desc_es:  'Diccionario oficial de la Real Academia Española',
    url: 'https://dle.rae.es', shortUrl: 'dle.rae.es',
    icon: I8('books'),
  },
  {
    id: 2, subject: 'espanol', type: 'video',
    title_de: 'Spanisch Grammatik',   title_es: 'Gramática Española',
    desc_de:  'Erklärvideos zu Grammatik und Vokabeln auf YouTube',
    desc_es:  'Videos explicativos de gramática y vocabulario en YouTube',
    url: 'https://www.youtube.com/@profeele', shortUrl: 'yt/@ProfedeELE',
    icon: I8('video-file'),
  },
  {
    id: 3, subject: 'espanol', type: 'qr',
    title_de: 'Duolingo Kurs',         title_es: 'Curso Duolingo',
    desc_de:  'Tritt unserem Klassen-Kurs auf Duolingo bei — täglich 5 min',
    desc_es:  'Únete a nuestro curso de clase en Duolingo — 5 min al día',
    url: 'https://www.duolingo.com', shortUrl: 'duolingo.com',
    icon: I8('language-skill'),
  },
  {
    id: 4, subject: 'espanol', type: 'worksheet',
    title_de: 'Konjugationsübungen', title_es: 'Ejercicios de Conjugación',
    desc_de:  'Interaktive Verbkonjugation — selbst korrigierend',
    desc_es:  'Conjugación verbal interactiva — autocorrección',
    url: 'https://conjuguemos.com', shortUrl: 'conjuguemos.com',
    icon: I8('translation'),
  },
  {
    id: 5, subject: 'espanol', type: 'link',
    title_de: 'Spanisch Hörübungen',  title_es: 'Comprensión Auditiva',
    desc_de:  'Hörverständnis-Übungen für alle Niveaus — A1 bis C2',
    desc_es:  'Ejercicios de comprensión auditiva — niveles A1 a C2',
    url: 'https://www.languagesonline.org.uk/Spanish/', shortUrl: 'languagesonline.org.uk',
    icon: I8('headphones'),
  },
  {
    id: 6, subject: 'espanol', type: 'worksheet',
    title_de: 'Wordwall Spanisch',    title_es: 'Wordwall Español',
    desc_de:  'Interaktive Spiele und Aktivitäten für den Spanischunterricht',
    desc_es:  'Juegos y actividades interactivos para la clase de español',
    url: 'https://wordwall.net/es/community/español', shortUrl: 'wordwall.net',
    icon: I8('gamepad'),
  },

  // ─── INFORMATIK ────────────────────────────────────────────────────────
  {
    id: 7, subject: 'informatik', type: 'link',
    title_de: 'Scratch Programmieren', title_es: 'Scratch: Programar',
    desc_de:  'Visuelles Programmieren für Einsteiger — drag & drop',
    desc_es:  'Programación visual para principiantes — drag & drop',
    url: 'https://scratch.mit.edu', shortUrl: 'scratch.mit.edu',
    icon: I8('code'),
  },
  {
    id: 8, subject: 'informatik', type: 'video',
    title_de: 'Python Grundlagen',    title_es: 'Fundamentos de Python',
    desc_de:  'Einstieg in die Programmierung mit Python',
    desc_es:  'Introducción a la programación con Python',
    url: 'https://www.youtube.com/watch?v=rfscVS0vtbw', shortUrl: 'yt/python-full',
    icon: I8('python'),
  },
  {
    id: 9, subject: 'informatik', type: 'qr',
    title_de: 'Code.org Aufgaben',    title_es: 'Actividades Code.org',
    desc_de:  'Programmierübungen und Kurse auf Code.org — kostenlos',
    desc_es:  'Ejercicios y cursos de programación en Code.org — gratis',
    url: 'https://code.org', shortUrl: 'code.org',
    icon: I8('programming'),
  },
  {
    id: 10, subject: 'informatik', type: 'worksheet',
    title_de: 'Algorithmus-Aufgaben', title_es: 'Ejercicios de Algoritmos',
    desc_de:  'Interaktive Übungen zu Algorithmen und Datenstrukturen',
    desc_es:  'Ejercicios interactivos de algoritmos y estructuras de datos',
    url: 'https://learningapps.org', shortUrl: 'learningapps.org',
    icon: I8('laptop-coding'),
  },
  {
    id: 11, subject: 'informatik', type: 'link',
    title_de: 'Tynker Spiele-Coding', title_es: 'Tynker: Programar Juegos',
    desc_de:  'Spieleentwicklung lernen durch spielerisches Programmieren',
    desc_es:  'Aprender desarrollo de juegos programando de forma lúdica',
    url: 'https://www.tynker.com', shortUrl: 'tynker.com',
    icon: I8('game-controller'),
  },
  {
    id: 12, subject: 'informatik', type: 'video',
    title_de: 'Binärsystem erklärt',  title_es: 'Sistema Binario explicado',
    desc_de:  'Wie Computer rechnen — das Binärsystem einfach erklärt',
    desc_es:  'Cómo calculan las computadoras — sistema binario explicado',
    url: 'https://www.youtube.com/watch?v=1GSjbWt0c9M', shortUrl: 'yt/binaersystem',
    icon: I8('binary-code'),
  },

  // ─── SPORT ─────────────────────────────────────────────────────────────
  {
    id: 13, subject: 'sport', type: 'link',
    title_de: 'DFB Sportregeln',      title_es: 'Reglas Deportivas DFB',
    desc_de:  'Offizielle Fußballregeln und Trainingsmaterialien des DFB',
    desc_es:  'Reglas oficiales de fútbol y materiales del DFB',
    url: 'https://www.dfb.de', shortUrl: 'dfb.de',
    icon: I8('football2'),
  },
  {
    id: 14, subject: 'sport', type: 'video',
    title_de: 'Aufwärmroutine',       title_es: 'Rutina de Calentamiento',
    desc_de:  'Strukturiertes Aufwärmen für den Sportunterricht — 10 min',
    desc_es:  'Calentamiento estructurado para clase de deporte — 10 min',
    url: 'https://www.youtube.com/watch?v=R0mMyV5OtcM', shortUrl: 'yt/aufwaermen',
    icon: I8('running'),
  },
  {
    id: 15, subject: 'sport', type: 'qr',
    title_de: 'Trainingsplan Woche',  title_es: 'Plan de Entrenamiento',
    desc_de:  'Wöchentlicher Trainingsplan — scan und direkt loslegen',
    desc_es:  'Plan de entrenamiento semanal — escanear y empezar',
    url: 'https://www.nike.com/running/training-plans', shortUrl: 'nike.com/training',
    icon: I8('schedule'),
  },
  {
    id: 16, subject: 'sport', type: 'worksheet',
    title_de: 'Fitness-Test Bogen',   title_es: 'Ficha de Aptitud Física',
    desc_de:  'Interaktiver Fitness-Test — Ergebnisse direkt online eintragen',
    desc_es:  'Test de aptitud física interactivo — resultados en línea',
    url: 'https://forms.google.com', shortUrl: 'forms.gle/fitness',
    icon: I8('dumbbell'),
  },
  {
    id: 17, subject: 'sport', type: 'link',
    title_de: 'Sportregeln Olympia',  title_es: 'Reglas Olímpicas',
    desc_de:  'Offizielle Regelwerke aller olympischen Sportarten — deutsch',
    desc_es:  'Reglamentos oficiales de todos los deportes olímpicos',
    url: 'https://www.olympics.com/de', shortUrl: 'olympics.com/de',
    icon: I8('olympic-rings'),
  },
  {
    id: 18, subject: 'sport', type: 'video',
    title_de: 'Yoga für Sportler',    title_es: 'Yoga para Deportistas',
    desc_de:  'Entspannung und Dehnung nach dem Training — 15 Minuten',
    desc_es:  'Relajación y estiramiento después del entrenamiento — 15 min',
    url: 'https://www.youtube.com/watch?v=v7AYKMP6rOE', shortUrl: 'yt/yoga-sport',
    icon: I8('yoga'),
  },
];

const SUBJECT_CONFIG = {
  espanol: {
    label_de: 'Spanisch',     label_es: 'Español',
    // Wine-crimson → Spanish amber: warm, Mediterranean, not generic red
    gradient: 'linear-gradient(145deg, #7C1D3B 0%, #B91C1C 50%, #D97706 100%)',
    glow: 'rgba(185,28,28,0.40)',
    badge_bg: 'rgba(185,28,28,0.15)',
    badge_border: 'rgba(185,28,28,0.35)',
    badge_color: '#FCA5A5',
    tabIcon: I8('language-skill', 48),
  },
  informatik: {
    label_de: 'Informatik',   label_es: 'Informática',
    // Midnight navy → royal blue: precise, technical depth
    gradient: 'linear-gradient(145deg, #0F172A 0%, #1E40AF 55%, #2563EB 100%)',
    glow: 'rgba(37,99,235,0.40)',
    badge_bg: 'rgba(37,99,235,0.15)',
    badge_border: 'rgba(37,99,235,0.35)',
    badge_color: '#93C5FD',
    tabIcon: I8('laptop-coding', 48),
  },
  sport: {
    label_de: 'Sport',        label_es: 'Deporte',
    // Forest → emerald: natural energy, athletic, not generic green
    gradient: 'linear-gradient(145deg, #064E3B 0%, #065F46 45%, #059669 100%)',
    glow: 'rgba(5,150,105,0.40)',
    badge_bg: 'rgba(5,150,105,0.15)',
    badge_border: 'rgba(5,150,105,0.35)',
    badge_color: '#6EE7B7',
    tabIcon: I8('football2', 48),
  },
};

const TYPE_CONFIG = {
  qr:        { label_de: 'QR-Code',      label_es: 'QR-Code',  icon: '▣' },
  link:      { label_de: 'Link',         label_es: 'Enlace',   icon: '↗' },
  video:     { label_de: 'Video',        label_es: 'Vídeo',    icon: '▷' },
  worksheet: { label_de: 'Arbeitsblatt', label_es: 'Ficha',    icon: '◻' },
};
