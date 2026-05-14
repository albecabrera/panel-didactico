<div align="center">

# 🎓 EduPanel

### Panel educativo digital · Digitales Lernportal

Acceso rápido para alumnos de Español, Informática y Deporte  
Schnellzugang für Schüler in Spanisch, Informatik und Sport

---

## 🔗 Acceso Directo · Direktzugang

<a href="https://albecabrera.github.io/panel-didactico/">
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&color=667eea&bgcolor=04070f&qzone=2&data=https%3A%2F%2Falbecabrera.github.io%2Fpanel-didactico%2F" alt="QR Code — EduPanel" width="180">
</a>

**[→ albecabrera.github.io/panel-didactico](https://albecabrera.github.io/panel-didactico/)**

*Escanear el QR o abrir el enlace — Código QR scannen oder Link öffnen*

---

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222?style=flat-square&logo=github&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## ¿Qué es EduPanel? · Was ist EduPanel?

Panel de control digital de una sola página para estudiantes. Centraliza todos los recursos de clase — QR-Codes, enlaces, vídeos y fichas interactivas — en un único lugar accesible desde cualquier dispositivo.

Digitales Single-Page-Dashboard für Schüler. Bündelt alle Unterrichtsressourcen — QR-Codes, Links, Videos und interaktive Arbeitsblätter — an einem Ort, zugänglich von jedem Gerät.

---

## Funcionalidades · Funktionen

| Función · Funktion | Descripción · Beschreibung |
|---|---|
| **Bilingüe DE / ES** | Toggle en tiempo real — sin recargar la página |
| **Modo oscuro / claro** | Persistente por sesión, aurora animada en fondo |
| **18 recursos** | 6 por materia, 4 tipos de recurso |
| **QR-Codes** | Generación en tiempo real + descarga como PNG |
| **Filtros en vivo** | Por materia, tipo y búsqueda de texto |
| **Efecto 3-D** | Tilt parallax en cada card al mover el ratón |
| **Animaciones fluidas** | Spring transitions, stagger de cards, contadores |
| **100% sin backend** | HTML + CSS + JS puro — cero dependencias de servidor |
| **Responsive** | Mobile, tablet y desktop |

---

## Materias y recursos · Fächer und Ressourcen

### 🇪🇸 Español / Spanisch
| Recurso | Tipo | URL |
|---|---|---|
| Diccionario RAE | 🔗 Link | dle.rae.es |
| Gramática — YouTube | ▶ Video | youtube.com/@ProfedeELE |
| Duolingo Kurs | ⬛ QR | duolingo.com |
| Ejercicios Conjugación | 📄 Ficha | conjuguemos.com |
| Comprensión Auditiva | 🔗 Link | languagesonline.org.uk |
| Wordwall Español | 📄 Ficha | wordwall.net |

### 💻 Informatik / Informática
| Recurso | Tipo | URL |
|---|---|---|
| Scratch | 🔗 Link | scratch.mit.edu |
| Python — YouTube | ▶ Video | youtube.com/python-full |
| Code.org Aufgaben | ⬛ QR | code.org |
| LearningApps Algoritmos | 📄 Ficha | learningapps.org |
| Tynker | 🔗 Link | tynker.com |
| Sistema Binario — YouTube | ▶ Video | youtube.com/binaersystem |

### ⚽ Sport / Deporte
| Recurso | Tipo | URL |
|---|---|---|
| DFB Regeln | 🔗 Link | dfb.de |
| Calentamiento — YouTube | ▶ Video | youtube.com/aufwaermen |
| Trainingsplan | ⬛ QR | nike.com/training |
| Fitness-Test | 📄 Ficha | forms.google.com |
| Olympia Regeln | 🔗 Link | olympics.com/de |
| Yoga para Deportistas — YouTube | ▶ Video | youtube.com/yoga-sport |

---

## Estructura del proyecto · Projektstruktur

```
panel-didactico/
│
├── index.html     # Estructura HTML semántica — semantisches HTML-Gerüst
├── styles.css     # Sistema de diseño — Design-System (Aurora, Glassmorphism, 3-D)
├── data.js        # Datos de recursos + configuración de materias
└── app.js         # Lógica: filtros, render, QR, i18n, tilt 3-D
```

---

## Cómo personalizar recursos · Ressourcen anpassen

Editar `data.js`. Cada recurso tiene esta forma:

```js
{
  id: 19,                          // número único
  subject: 'espanol',              // 'espanol' | 'informatik' | 'sport'
  type: 'link',                    // 'link' | 'qr' | 'video' | 'worksheet'
  title_de: 'Mein Link',           // título en alemán
  title_es: 'Mi enlace',           // título en español
  desc_de:  'Beschreibung...',     // descripción en alemán
  desc_es:  'Descripción...',      // descripción en español
  url:      'https://ejemplo.com', // URL completa (se usa para el QR también)
  shortUrl: 'ejemplo.com/ruta',    // versión corta — solo visual
  emoji:    '📘',                  // emoji del icono
}
```

**Agregar una materia nueva · Neues Fach hinzufügen:**

1. Agregar entrada en `SUBJECT_CONFIG` en `data.js` con `label_de`, `label_es`, `gradient`, `glow`, `badge_bg`, `badge_border`, `badge_color`
2. Agregar el botón `.tab` correspondiente en `index.html`
3. Agregar los recursos con el nuevo `subject`

---

## Tecnologías · Technologien

| Tech | Uso |
|---|---|
| HTML5 semántico | Estructura accesible con roles ARIA |
| CSS custom properties | Sistema de variables para dark/light theming |
| CSS backdrop-filter | Efecto glassmorphism en cards y header |
| CSS perspective + rotateX/Y | Efecto 3-D en tabs e iconos |
| JavaScript ES2022 | Render dinámico, filtros, i18n sin framework |
| [qrcodejs](https://github.com/davidshimjs/qrcodejs) | Generación de QR en el cliente |
| Google Fonts — Outfit | Tipografía premium |
| GitHub Pages | Hosting gratuito, cero configuración |

---

## Despliegue · Deployment

El panel se despliega automáticamente con GitHub Pages desde la rama `main`.

```bash
# Clonar el repo
git clone https://github.com/albecabrera/panel-didactico.git
cd panel-didactico

# Abrir localmente (no requiere servidor)
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

Para publicar cambios:

```bash
git add .
git commit -m "feat: agregar nuevo recurso"
git push origin main
# GitHub Pages actualiza automáticamente en ~60 segundos
```

---

## Licencia · Lizenz

MIT — libre para uso educativo personal y en el aula.  
MIT — frei für persönlichen und schulischen Unterrichtseinsatz.

---

<div align="center">
  Hecho con ❤️ para el aula · Mit ❤️ für den Unterricht gemacht
</div>
