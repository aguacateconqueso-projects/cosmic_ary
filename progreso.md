# 🌌 CosmicAry — Bitácora de progreso

Registro vivo del proyecto para poder trabajar en **varias sesiones** sin perder contexto.
Cuando empieces una sesión nueva, lee este archivo primero. Cuando termines, actualízalo.

---

## 1. Contexto del proyecto

> ⚠️ **IMPORTANTE — naturaleza del proyecto:** esto es un **DEMO para captar a Ariana como cliente**.
> Ariana **NO** está involucrada, **no** revisa ni aprueba nada todavía. Todas las decisiones de diseño
> son **nuestras** (para hacer un pitch convincente), no de ella. **No atribuir decisiones a Ariana.**

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

**Fase:** 🎨 Demo "cool" (aura) es el home. Constelación de ofertas + cielos + botones pulidos, todo en `main`.

- [x] Diseño importado desde Claude Design
- [x] Demo "sobrio" (rojo) implementado — ahora **reservado**
- [x] **Aura promovida a home** (`index.html`)
- [x] **Constelación de CTAs** + **sistema de cielos/fases** (modelo "dos pantallas": scroll despliega los nodos en círculo)
- [x] **Botones pulidos:** fuente Jost, precios ocultos que florecen en hover, Academy arriba al centro, tarjetas compactas (sin espacio muerto), borde arcoíris giratorio en hover
- [ ] Afinar arte de los 7 cielos
- [ ] Enlaces reales (YouTube/IG/TikTok/Spotify/podcast) — hoy `#` placeholder

**PRs recientes mergeados:** #12 (dos pantallas), #13 (botones: fuente/precios/orden), #15 (tarjetas compactas + arcoíris + regla de flujo).
**Sin PRs abiertos.** Último `main`: constelación completa y botones pulidos.
**URL de producción (Vercel):** `⟶ PENDIENTE: pega aquí la URL del deploy`

---

## 3. Backlog / próximos pasos

Prioridad sugerida (ajústala según lo que quieras atacar):

- [ ] **🔴 Reubicar los CTAs (constelación) — NO van debajo del wordmark.** Hoy "Join the Academy" y
  "Free yoga on YouTube" están centrados bajo el tagline solo como colocación temporal.
  **La idea original** era colocarlos como **las puntas de una estrella** alrededor del aura, pero
  **no funciona en móvil**. Quedamos en **experimentar** cómo mostrarlos. Dirección acordada:
  - **Móvil manda** (tráfico casi todo móvil, ~375px): una estrella radial de 7 nodos **no cabe**.
    Regla de oro: **dos layouts** — constelación **radial en desktop**, constelación **vertical
    elegante (apilada)** en móvil. Sigue siendo cósmica, pero apilada.
  - **Agrupar los nodos en órbitas** (no 7 iguales, aplanan la jerarquía). Ofertas de \$50 a \$4,000
    con intenciones distintas. Ejemplo de agrupación: *entrada* (Academy, Masterclass, Subliminal,
    Affirmations) y *premium 1:1* (Coaching, 1-Mo, 4-Mo). Así la constelación tiene lógica.
  - **Divulgación progresiva (encaja con la idea de hover):** cada nodo muestra solo **ícono +
    título + precio**; al hacer **hover/focus se "abre"** revelando detalle + CTA. Evita rodear el
    aura de 7 tarjetas gordas (título, subtítulo, precio, botón) que chocan visualmente.
  - Los CTAs se quedan como **placeholders**; los links reales se pasan después.
- [ ] **Sistema de cielos / fases** — el aura/cielo cambia según fase del día (ver `PLAN-experiencia-cosmica.md`).
  **Va ligado a los botones**: la distribución de la constelación y el cielo van juntos.
- [ ] **Enlaces reales** — YouTube, Instagram, TikTok, Spotify, podcast, WhatsApp community
  (hoy son `#` placeholder). *Se pasan después; por ahora se quedan los placeholders.*

### Descartado / fuera de alcance (NO reabrir sin pedirlo)
- ❌ **Foto de Ariana** — **no se usa**. No hay placeholder de foto pendiente.
- ❌ **Testimonios reales** — Ariana no los tiene y **no está claro que vayan** con este estilo de
  web. No implementar sección de testimonios por iniciativa propia.
- ❌ **Copy / textos "endulzados"** — **no hay copy** y no lo habrá: **solo CTAs, venta pura**, sin
  relleno narrativo. No inventar frases de marketing.
- ❌ **SEO/meta** (favicon, Open Graph, títulos) — **no es necesario ahora**, es un demo para pitch.
- ❌ **Dominio propio** en Vercel — no hace falta; con lo que hay basta.
- ❌ **EN/ES o toggle de idioma** — el público es **100% EN**; su plataforma actual es solo EN.
  El sitio va **solo en inglés**.

### Ideas / mejoras opcionales
- [ ] Analítica (Vercel Analytics / Plausible).
- [ ] Sección de agenda/eventos para los lives mensuales.

---

## 4. Cómo retomar el trabajo

**Desarrollo local** (sin build):
```bash
npx serve .            # o: python3 -m http.server 3000
# abrir http://localhost:3000
```

### ⚠️ REGLA DE FLUJO — PR NUEVO A `main` POR CADA CAMBIO (SIEMPRE, sin excepción)

Todo cambio va a `main` mediante **un PR nuevo**. Nunca commitear directo a `main`, nunca reusar un
PR viejo para trabajo nuevo. **Pero un PR nuevo NO basta por sí solo** — los conflicts que tuvimos en
este proyecto vinieron de ramas cortadas desde un `main` viejo. La regla completa, **en este orden**:

1. **Cortar SIEMPRE desde el `main` más reciente** (esto es lo que evita los conflicts):
   ```bash
   git fetch origin main
   git checkout -B <rama-nueva> origin/main   # arranca de main actualizado, no de una rama vieja
   ```
2. Hacer **un solo cambio** por rama → `commit` → `push -u origin <rama-nueva>`.
3. Abrir **un PR nuevo hacia `main`** (uno por cambio).
4. **Mergear ese PR antes de empezar el siguiente cambio.** No apilar PRs abiertos que toquen los
   mismos archivos (`index.html`, `progreso.md`) — si se apilan, chocan entre ellos.
5. Repetir desde el paso 1 (rama fresca desde el `main` ya actualizado con lo anterior).

> **Por qué se rompió antes (Sesión 8):** la rama de los botones se creó desde un `main` desactualizado
> y acumuló varios cambios mientras `main` avanzaba con otros PRs (#9/#10/#12, modelo "dos pantallas").
> Al mergear, chocó. Se arregló rebasando sobre `main`. La lección: **base fresca + un PR por cambio +
> mergear antes de seguir.**

Vercel redespliega solo al hacer push/merge (si el repo está conectado).

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
- CTAs añadidos temporalmente bajo el tagline **pero ahí NO van**: se
  distribuirán como constelación ligada a las "fases del día" (a trabajar en la próxima sesión).
- **PR #5** creado. Commit `26e55ab`.
- Recordatorio de trabajo: hacer **solo lo pedido**, sin crear páginas/extras por iniciativa propia.
- **Siguiente sesión:** definir el layout de la constelación de CTAs (radial desktop / apilado móvil)
  con divulgación progresiva, y ligarlo al sistema de cielos.

### 2026-07-21 — Sesión 5 · Aclaración de alcance del demo
- **Aclarado que esto es un DEMO para captar a Ariana como cliente** — ella no participa ni aprueba.
  Corregido `progreso.md` para dejar de atribuirle decisiones.
- **Dirección de la constelación de CTAs** definida: dos layouts (radial desktop / vertical apilado
  móvil), nodos agrupados en órbitas (entrada vs premium 1:1), divulgación progresiva en hover/focus
  (ícono+título+precio → se abre con detalle+CTA).
- **Podado el backlog:** descartados foto de Ariana, testimonios, copy endulzado, SEO/meta, dominio
  propio y EN/ES. Enlaces y links de CTA quedan como placeholders hasta que se pasen.
- Pendiente: implementar la constelación + sistema de cielos.

### 2026-07-21 — Sesión 6 · Constelación de CTAs + fases del día
- **Reescrito `index.html`** para reubicar los CTAs como **constelación de 7 ofertas** (las del
  `PLAN`) alrededor del aura, con **sistema de cielos** ligado a cada nodo.
- **Desktop:** layout radial — órbita interior premium (Coaching/1-Month/4-Month, triángulo
  apuntando abajo para no pisar el tagline) + exterior entrada (Masterclass/Subliminal/
  Affirmations/Academy en las esquinas). Líneas de constelación desde el centro. Hover/focus
  abre el nodo (muestra CTA) y funde el cielo a la fase de esa oferta; el aura vira de tono.
- **Móvil:** columna vertical con etiquetas "Begin"/"Go deeper"; el cielo **viaja con el scroll**
  (la tarjeta centrada se activa vía IntersectionObserver).
- **Sin copy:** cada nodo solo título + precio; al abrir aparece solo el CTA (placeholder `#`).
- **7 fases** de amanecer→crepúsculo (cada oferta su hora); base sin foco = noche estrellada,
  que se atenúa según la luz del cielo activo.
- Verificado en Chromium (1440×900 y 390×844): 7 nodos en pantalla, sin scroll horizontal, sin
  errores de app, crossfade de cielos y aura OK.
- Decisiones tomadas (todas del `PLAN`, no inventadas): órbita interior = premium, exterior =
  entrada; Academy resaltado como flagship; orden por fase = precio ascendente.
- Pendiente / siguiente: afinar arte de los 7 cielos, links reales cuando se pasen, y decidir si
  el bloque de identidad lleva "Transformational Mentor".

### 2026-07-21 — Sesión 7 · Modelo "dos pantallas" (scroll-deploy)
- Feedback: el modelo hover-por-nodo "no funcionaba" aunque la idea gustó. Nuevo concepto de
  interacción sobre **una sola pantalla física**:
  - **Estado hero:** nombre + CosmicAry + tagline + estrella, limpio (sin nodos ni socials).
  - **Al hacer scroll:** el texto del hero se desvanece, **se mantiene fondo + estrella**, y los
    botones **se despliegan desde el centro** con animación hasta formar **un círculo** que rodea
    la estrella. El strip de identidad (Free yoga + redes) aparece junto con la constelación.
- **Un solo círculo** de 7 nodos (antes dos órbitas), ordenados por **precio ascendente** = barrido
  de cielos amanecer→crepúsculo. Nodo i en el ángulo −90 + i·(360/7), horario desde arriba.
- Implementación: `body` alto en desktop → el scroll maneja un progreso `p`; el hero hace fade y
  cada nodo interpola posición centro→anillo + escala + opacidad (con leve stagger). Al terminar
  se limpian los estilos inline para que el hover (cielo + aura + CTA) siga funcionando.
- **Móvil:** se conserva el stack vertical con el cielo viajando con el scroll.
- a11y: `prefers-reduced-motion` desactiva el vuelo (los nodos aparecen sin desplazarse).
- Verificado en Chromium (1440×900 y 390×844): hero limpio, despliegue en círculo, hover OK, sin
  scroll horizontal, sin errores. Actualiza el PR de la constelación.
- Pendiente/siguiente: afinar arte de cielos, links reales, y el centro exacto de la estrella.

### 2026-07-21 — Sesión 8 · Pulido de los botones (fuente, precios en hover, orden)
- **Nota de flujo:** esta rama salió de un `main` viejo (modelo de dos órbitas) y chocó con el PR #12
  (modelo "dos pantallas"). Se **rebasó sobre `main`** y se **reaplicaron las mejoras** sobre el
  modelo nuevo de anillo único; se descartó el refactor de ángulos por órbita (ya obsoleto).
- **Tipografía nueva:** el wordmark **CosmicAry** sigue en **Fraunces**. Se cambió a **Jost**
  (geométrica, aireada, celestial) para: **tagline del hero**, **títulos de los nodos**, **CTAs** y
  UI. Los títulos pasan de Fraunces serif 17px a etiquetas Jost en mayúsculas tracked → look boutique.
- **Precios ocultos por defecto → protagonistas en hover:** el precio ya **no se ve** en reposo; al
  hover/focus (desktop) o al centrarse en scroll (móvil) **florece grande** en **Fraunces 27px**
  junto al CTA.
- **Info centrada:** confirmado `align-items:center` + `text-align:center` en `.node`.
- **Reorden en el anillo:** **Awakening Academy** movida al **índice 0 → arriba al centro** (con su
  anillo flagship) y lidera también el stack móvil. **Purpose Masterclass** al índice 3 (donde estaba
  Academy). El resto de nodos conservan su posición. Cada oferta mantiene su propia fase de cielo, así
  que el barrido por el anillo ya **no** es de precio estrictamente ascendente (decisión aceptada).
- Verificado en Chromium (1440×900 desplegado + hover, y 390×844 móvil): sin errores de app, precios
  ocultos→visibles OK, cielo cambia de fase, orden correcto.
- **Fix de espacio muerto:** las tarjetas dejaban un hueco abajo porque el `.node__cta` colapsado
  seguía midiendo ~16px (su padding vertical se renderizaba con `max-height:0`). Se colapsa también
  el padding vertical del CTA → nodo pasa de 95px a 79px, contenido centrado, sin hueco.
- **Borde arcoíris en hover:** pseudo-elemento `::before` con `conic-gradient` enmascarado al borde,
  que **gira** mientras el nodo está activo/hover (variable `@property --nodeAngle`, 4.5s lineal).
  Respeta `prefers-reduced-motion` (aparece estático, sin girar).
- Pendiente/siguiente: afinar arte de los 7 cielos y links reales.

### 2026-07-21 — Sesión 9 · Regla de flujo + reconciliación de PRs (cierre)
- **Lío de PRs (culpa del flujo, ya corregido):** se apilaron commits sobre la misma rama de botones.
  El PR #13 se mergeó **solo con su primer commit** (Jost/precios/orden); el fix de espacio muerto +
  arcoíris quedaron fuera de `main`. Se rerebasó sobre el `main` actual y se abrió el **PR #15** que
  los trajo (+ la regla). Ambos mergeados. `main` quedó completo.
- **Grabada la REGLA DE FLUJO** (ver §4): PR nuevo por cada cambio **cortando siempre desde el `main`
  más reciente**, un cambio por rama, y **mergear antes de empezar el siguiente**. Esto es lo que
  evita los conflicts (la causa era rama vieja + apilar PRs, no GitHub).
- Actualizada la §2 (Estado actual) a la realidad: constelación + cielos + botones pulidos en `main`.
- **Cierre de sesión.** Siguiente: nueva sesión (afinar cielos y/o links reales cuando se pasen).

### 2026-07-21 — Sesión 10 · Modal de Awakening Academy
- **Al hacer click en el nodo flagship (Awakening Academy)** ahora se abre un **modal** con toda la
  info de la oferta (precio, copy real de Ariana, checklist "What's included" y CTA).
- **Animación FLIP:** el card crece y se desliza desde la posición del nodo hasta el centro con
  easing suave (`cubic-bezier(.22,1,.36,1)`); al cerrar hace el camino inverso. Con
  `prefers-reduced-motion` aparece sin vuelo.
- **Fondo tipo glass:** backdrop con `backdrop-filter: blur` + tinte tenue → la **estrella/aura del
  hero se sigue apreciando en movimiento** detrás, pero el card (glass más opaco) deja el texto
  totalmente legible. El cielo también vira a la fase de Academy detrás del vidrio.
- **Cerrar:** botón "×" arriba a la derecha (gira en hover), tecla **Esc**, y click en el backdrop.
  Scroll del fondo bloqueado mientras está abierto; el foco vuelve al nodo al cerrar.
- **Botón "Become a Member":** píldora con degradado rojo, brillo que barre en loop y lift en hover.
  `href="#"` **placeholder** — reemplazar por el link de pago real cuando se pase (marcado con TODO).
- **Móvil:** el modal ocupa toda la pantalla (scroll interno). Verificado en Chromium (1440×900 y
  390×844): abre/cierra OK, contenido legible sobre el glass, sin errores de app.
- Pendiente/siguiente: link de pago real, afinar arte de cielos, y (opcional) modales para el resto
  de ofertas si se decide replicar el patrón.

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
