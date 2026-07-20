# 🌌 CosmicAry — Bitácora de progreso

Registro vivo del proyecto para poder trabajar en **varias sesiones** sin perder contexto.
Cuando empieces una sesión nueva, lee este archivo primero. Cuando termines, actualízalo.

---

## 1. Contexto del proyecto

- **Qué es:** Landing page de **Ariana Del Rosario / CosmicAry** — *Awakening Academy*, escuela de transformación y manifestación.
- **Origen del diseño:** proyecto Claude Design **"CosmicAry demo"** (`CosmicAry Demo.dc.html`).
  El fuente original está en `design/` como referencia (usa el runtime de Claude Design, no se despliega tal cual).
- **Implementación:** sitio estático **sin dependencias** (HTML + CSS + JS vanilla), pensado para Vercel.
- **Repo / rama de trabajo:** `aguacateconqueso-projects/cosmic_ary` → rama `claude/cosmicary-demo-setup-fzjsc7`

### Stack y estructura
```
index.html      Todas las secciones: hero, retrato, Academy, Stories, free door, footer
styles.css      Sistema de diseño: paleta, tipografía, layout responsive, reveals
main.js         Campo de estrellas (canvas), transición de fondo al scroll, smooth-scroll, reveals
vercel.json     Config de hosting estático (clean URLs, headers, caché)
design/         Fuente original .dc.html (referencia, no se toca)
progreso.md     Este archivo
README.md       Doc de instalación/deploy
```

### Sistema de diseño (referencia rápida)
- **Colores:** cosmos `#0B0E1A` · crema `#F2EDE4` · tinta `#14120F` · rojo profundo `#8B1A1A` · rojo brillante `#C0392B` · rojo CTA `#9E2422`
- **Tipografía:** `Fraunces` (display, serif) · `Inter` (texto)
- Las variables de color viven en `:root` dentro de `styles.css`.

---

## 2. Estado actual

**Fase:** ✅ Base desplegada y funcionando. Empezando iteración de ajustes.

- [x] Diseño importado desde Claude Design
- [x] Implementado como sitio estático (verificado en navegador: hero, starfield, transición cosmos→crema, reveals)
- [x] Commiteado y pusheado a la rama de trabajo
- [x] Desplegado en Vercel

**URL de producción (Vercel):** `⟶ PENDIENTE: pega aquí la URL del deploy`

---

## 3. Backlog / próximos pasos

Prioridad sugerida (ajústala según lo que quieras atacar):

- [ ] **Foto de Ariana** en el hero — hoy es un placeholder con la forma de arco. Sustituir `.image-slot` por `<img>` real (ver README). *(Necesito la imagen.)*
- [ ] **Enlaces reales** — YouTube, Instagram, TikTok, Spotify, podcast, WhatsApp community (hoy son `#`).
- [ ] **CTA "Become a Member" / "Join the Academy"** — conectar a la pasarela de pago o formulario real.
- [ ] **Testimonios reales** en la sección Stories (hoy son placeholders "A real story, soon").
- [ ] **SEO/meta** — favicon, imagen Open Graph real, título/descr afinados.
- [ ] **Dominio propio** en Vercel (si se quiere).
- [ ] Revisar copy final con Ariana (textos definitivos ES/EN).

### Ideas / mejoras opcionales
- [ ] Versión en español del contenido (o toggle ES/EN).
- [ ] Analítica (Vercel Analytics / Plausible).
- [ ] Sección de agenda/eventos para los lives mensuales.

---

## 4. Cómo retomar el trabajo

**Desarrollo local** (sin build):
```bash
npx serve .            # o: python3 -m http.server 3000
# abrir http://localhost:3000
```

**Flujo de commits:**
```bash
git add -A
git commit -m "..."
git push -u origin claude/cosmicary-demo-setup-fzjsc7
```
Vercel redespliega solo al hacer push (si el repo está conectado).

---

## 5. Bitácora por sesión

### 2026-07-20 — Sesión 1 · Setup inicial
- Importado el diseño `CosmicAry Demo.dc.html` desde Claude Design vía MCP.
- Portado el runtime de Claude Design (DCLogic) a JS vanilla en `main.js`:
  starfield con semilla (mulberry32), transición de fondo por scroll (smoothstep
  cosmos→crema cerca de "Academy"), parallax/fade del canvas, smooth-scroll y reveals.
- Creados `index.html`, `styles.css`, `main.js`, `vercel.json`, `README.md`, `.gitignore`.
- Verificado en Chromium (hero + Academy) — sin errores de app.
- Commit `3307f4e`, push a la rama de trabajo.
- Desplegado en Vercel (por el usuario).
- Creado este `progreso.md`.

### 2026-07-20 — Sesión 2 · Banner del hero
- Reemplazadas las frases inventadas por Design ("Everything you want is in the unknown."
  / "Transformational mentor…") por el **banner real de Ariana**: wordmark **CosmicAry**
  (Fraunces, rojo) + tagline **"Reprogram your mind & create your dream life"**, manteniendo
  la noche estrellada de fondo.
- Nuevos estilos `.wordmark` / `.hero__tagline` en `styles.css`; verificado en desktop y móvil.
- Se conservan los CTAs "Join the Academy" / "Free yoga on YouTube".
- Flujo acordado: **un PR por mejora** hacia `main` (rama de trabajo → PR → merge → deploy).
- Pendiente inmediato: animar el fondo de la noche (siguiente paso pedido por Ariana).

### 2026-07-20 — Sesión 3 · Análisis de referencia + prototipo de aura
- Analizado el video de referencia ("Capturing Aura") extrayendo fotogramas con ffmpeg:
  flor/aura orgánica radial que respira, rota y deriva de rosa a azul, sobre fondo claro.
- Consultoría de dirección: se decide **reestructurar** el sitio a un **storefront inmersivo**
  (Ariana vende, no cuenta historia). Concepto: pantalla única con aura central +
  **constelación de ofertas** + **cielo que cambia** (hover desktop / tap + scroll móvil).
- Creado `PLAN-experiencia-cosmica.md` (checklist + roadmap por PRs).
- Decisiones: orden por conversión (flagship primero) · fallback móvil = tap + scroll ·
  empezar con 4 cielos · foto de Ariana NO se usa aún · links = placeholders primero.
- **Construido `aura.html`** (primer bloque): aura en canvas sobre la noche, con pétalos
  radiales alternos, deriva de color rosa↔azul, latido, grano y panel de ajustes en vivo.
- Pendiente: feedback del aura → luego sistema de cielos.

<!-- Plantilla para la próxima entrada:
### AAAA-MM-DD — Sesión N · Título
- Qué se hizo
- Decisiones tomadas
- Commit(s)
- Qué queda pendiente / siguiente paso
-->

---

## 6. Decisiones clave (por qué se hizo así)

- **Sitio estático vanilla en vez de framework:** la landing es de una sola página sin
  estado complejo; cero dependencias = deploy trivial, carga rápida y fácil de mantener.
- **No usar el runtime de Claude Design en producción:** el `.dc.html` depende de
  `support.js`/`DCLogic`; se portó la lógica a JS plano para tener un artefacto autónomo.
- **`design/` se conserva como referencia** para poder volver a comparar contra el diseño original.
