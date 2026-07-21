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

### Los 2 demos (decisión Sesión 4)
Vamos a mantener **dos demos** en paralelo:
1. **Demo "cool"** (el que estamos armando ahora) → aura luminosa en canvas. **Es el home actual (`index.html`).**
2. **Demo "sobrio"** (el de letras rojas, multi-sección) → **reservado**. No se borra: vive en el
   historial de git y sus estilos (`styles.css`, `main.js`) siguen en el repo. Se revive cuando toque.

### Stack y estructura (estado actual)
```
index.html      HOME = demo "cool": hero con aura en canvas (estrellas + pétalos radiales + grano)
                Autocontenido (CSS y JS inline). Sliders de ajuste ocultos salvo con ?tune en la URL.
styles.css      Estilos del demo "sobrio" (rojo). NO usados por el home actual; reservados.
main.js         JS del demo "sobrio" (starfield, transición scroll, reveals). Reservado.
vercel.json     Config de hosting estático (clean URLs, headers, caché)
design/         Fuente original .dc.html (referencia, no se toca)
progreso.md     Este archivo
README.md       Doc de instalación/deploy
```
> ⚠️ El demo "sobrio" (home rojo con todas las secciones) está en el historial de git.
> Para revivirlo: `git show <commit>:index.html` de la Sesión 2/3, o restaurarlo desde el commit previo al PR #5.

### Sistema de diseño (referencia rápida)
- **Colores:** cosmos `#0B0E1A` · crema `#F2EDE4` · tinta `#14120F` · rojo profundo `#8B1A1A` · rojo brillante `#C0392B` · rojo CTA `#9E2422`
- **Tipografía:** `Fraunces` (display, serif) · `Inter` (texto)
- Las variables de color viven en `:root` dentro de `styles.css`.

---

## 2. Estado actual

**Fase:** 🎨 Iterando el **demo "cool"** (aura). El aura ya es el home.

- [x] Diseño importado desde Claude Design
- [x] Demo "sobrio" (rojo) implementado y desplegado — ahora **reservado**
- [x] Prototipo de aura construido y aprobado por Ariana ("va bien")
- [x] **Aura promovida a home** (`index.html`); subpágina `aura.html` eliminada → **PR #5**
- [ ] Distribuir CTAs/enlaces según las **fases del día** (ver backlog) — pendiente próxima sesión

**PR abierto:** #5 — "Aura como home (demo cool)" → falta mergear.
**URL de producción (Vercel):** `⟶ PENDIENTE: pega aquí la URL del deploy`
**Nota de ruta:** el aura vive en la **raíz** (`/`), ya **no** en `/aura.html` (eso da 404).

---

## 3. Backlog / próximos pasos

Prioridad sugerida (ajústala según lo que quieras atacar):

- [ ] **🔴 Botones / CTAs — NO van debajo del wordmark.** Ahora mismo "Join the Academy" y
  "Free yoga on YouTube" están centrados bajo el tagline solo como colocación temporal.
  **Decisión de Ariana:** se van a **distribuir según las "fases del día"** (concepto por definir
  la próxima sesión). Rediseñar su ubicación/agrupación con esa lógica antes de dar el home por bueno.
- [ ] **Sistema de cielos / fases** — el aura cambia según fase del día (ver `PLAN-experiencia-cosmica.md`).
  Ligar aquí la distribución de los CTAs del punto anterior.
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

### 2026-07-21 — Sesión 4 · Aura → home + decisión de 2 demos
- Aclarado un malentendido de flujo: todo el trabajo **sí** llega a `main` vía PR; la confusión era
  que el aura estaba en `/aura.html` (subpágina) y no en la home. Ariana no quería subpágina.
- **`index.html` reescrito**: ahora es el **hero con el aura** (antes `aura.html`). Autocontenido,
  con `<title>`/meta reales. **`aura.html` eliminado.**
- **Decisión clave: dos demos** — "cool" (aura, home actual) y "sobrio" (rojo, reservado en git).
  El rojo NO se borra; `styles.css`/`main.js` quedan en el repo para revivirlo luego.
- Sliders del aura ocultos por defecto; se muestran con `?tune` en la URL.
- CTAs añadidos temporalmente bajo el tagline **pero Ariana avisa que ahí NO van**: se
  distribuirán según las "fases del día" (a trabajar en la próxima sesión).
- **PR #5** creado. Commit `26e55ab`.
- Recordatorio de trabajo: hacer **solo lo pedido**, sin crear páginas/extras por iniciativa propia.
- **Siguiente sesión:** definir concepto de "fases del día" y distribuir los CTAs con esa lógica.

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
