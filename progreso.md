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

**Fase:** 🎨 Demo "cool" (aura) es el home. Constelación + cielos + botones + **modal de Awakening Academy** (centrado), todo en `main`.

- [x] Diseño importado desde Claude Design
- [x] Demo "sobrio" (rojo) implementado — ahora **reservado**
- [x] **Aura promovida a home** (`index.html`)
- [x] **Constelación de CTAs** + **sistema de cielos/fases** (modelo "dos pantallas": scroll despliega los nodos en círculo)
- [x] **Botones pulidos:** fuente Jost, precios ocultos que florecen en hover, Academy arriba al centro, tarjetas compactas (sin espacio muerto), borde arcoíris giratorio en hover
- [x] **Modal de Awakening Academy** — click en el nodo flagship abre un **modal centrado** (fade + scale
  suave, backdrop glass) con toda la info de la oferta + CTA "Become a Member". **Aprobado y fluido.**
- [ ] Afinar arte de los 7 cielos
- [ ] Enlaces reales (YouTube/IG/TikTok/Spotify/podcast) — hoy `#` placeholder
- [ ] (Opcional) modales para el resto de ofertas si se decide replicar el patrón

**PRs recientes mergeados:** #12 (dos pantallas), #13/#15 (botones), #17→#27 (modal de Academy: primero
con morph, iterado ~6 veces por el salto de texto, y finalmente resuelto pasando a **modal centrado** en #27).
**Sin PRs abiertos.** Último `main`: modal de Academy centrado, aprobado.
**URL de producción (Vercel):** `⟶ PENDIENTE: pega aquí la URL del deploy`

> 💡 **Aprendizaje clave (modal):** un "shared-element morph" entre dos textos distintos (título grande
> serif del panel ↔ etiqueta chica sans del nodo) **siempre** se lee como salto de tamaño, por más que se
> secuencie. Para info que cambia de layout, **modal centrado con fade** > morph. No reabrir el morph.

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

### 2026-07-21 — Sesión 10 · Modal de Awakening Academy (mismo cuadro que crece)
- **Al hacer click en el nodo flagship (Awakening Academy)** ahora **el mismo cuadro crece** y se
  transforma en un panel central con toda la info (precio, copy real, checklist "What's included", CTA).
- **Mecánica shared-element (no es un cuadro nuevo):** se **oculta el nodo real** y el card del modal
  arranca **exactamente en su posición y tamaño** mostrando el título del nodo ("ghost"); luego
  **morphea** (left/top/width/height + color/border/radius, `cubic-bezier(.5,.05,.2,1)` .58s) hasta el
  panel centrado. Mientras crece, **el texto del nodo hace fade-out y la info completa hace fade-in**.
  Al cerrar hace el camino inverso y el nodo reaparece. Con `prefers-reduced-motion` aparece sin morph.
- **1ª versión (descartada):** era un FLIP con opacidad que se veía como "otro cuadro" apareciendo
  encima del nodo (el nodo seguía visible). Se rehízo para que sea el mismo elemento el que crece.
- **2 bugs corregidos tras revisar un video:** (1) el cielo se reseteaba a noche al abrir porque el
  nodo oculto disparaba `mouseleave`/`blur` → se añadió candado `amOpen` que ignora hover/focus/IO
  mientras el modal está abierto (el cielo se queda en la fase Academy). (2) al cerrar el card
  "desaparecía y reaparecía pequeño" porque se quitaba `is-open` (→ `visibility:hidden`) de inmediato
  y el encogido era invisible → ahora se usa `is-closing` (sigue **visible** durante el morph) y solo
  se oculta al terminar; el nodo reaparece en su sitio.
- **Fondo tipo glass:** backdrop con `backdrop-filter: blur` + tinte tenue → la **estrella/aura del
  hero se sigue apreciando en movimiento** detrás, pero el card (glass más opaco) deja el texto
  totalmente legible. El cielo también vira a la fase de Academy detrás del vidrio.
- **Cerrar:** botón "×" arriba a la derecha (gira en hover), tecla **Esc**, y click en el backdrop.
  Scroll del fondo bloqueado mientras está abierto; el foco vuelve al nodo al cerrar.
- **Botón "Become a Member":** píldora con degradado rojo, brillo que barre en loop y lift en hover.
  `href="#"` como placeholder — **es un demo, el link de pago NO es pendiente** (queda así a propósito).
- **Móvil:** el modal ocupa toda la pantalla (scroll interno). Verificado en Chromium (1440×900 y
  390×844): abre/cierra OK, contenido legible sobre el glass, sin errores de app.
- Pendiente/siguiente: afinar arte de cielos, y (opcional) modales para el resto de ofertas si se
  decide replicar el patrón.

### 2026-07-21 — Sesión 11 · Fix del glitch de precio al cerrar el modal
- **Bug:** al cerrar, el card mostraba el título sin precio (ghost) y **saltaba a mostrar el precio**.
  Causa: en `finish()` refocaba el nodo (`node.focus()`), y el CSS `.node:focus-within` **hace
  florecer el precio** (el `phaseGuard` solo frenaba el JS, no el CSS).
- **Fix:** se **elimina el refoco del nodo** al cerrar. El nodo reaparece en reposo (solo título),
  igual que el ghost → cierre continuo sin salto. El foco pasa a `body` al ocultarse el modal.
- Verificado en Chromium (1440×900): el nodo nunca queda `:focus-within` al cerrar, el precio no
  aparece, el card se encoge limpio hacia el nodo. Sin errores de app.
- **Recordatorio de flujo reforzado:** cada cambio = **rama fresca desde `main` + PR nuevo**. Se
  estaba empujando fixes a ramas cuyo PR ya estaba mergeado (no se veían). Corregido.

### 2026-07-21 — Sesión 12 · Cierre aterriza en el "card con precio" (sin salto)
- **Feedback:** el fix anterior dejaba el cierre yendo al card **sin** precio (nodo en reposo) mientras
  el panel sí tenía precio → seguía viéndose un salto "con precio → card inicial".
- **Solución (idea del usuario):** que el card muestre el **precio de principio a fin** y aterrice en
  el nodo **con precio**. Implementado:
  - El **ghost** ahora es un **clon exacto del nodo flagship en estado activo** (título + precio + CTA).
    JS copia el `innerHTML` del nodo al ghost y el CSS fuerza precio/CTA visibles → el card muestra el
    precio durante todo el morph (abrir y cerrar).
  - Se mide el rect del nodo en su tamaño **activo** (`stableRect`, ignora la transición en curso) para
    que el card arranque/aterrice exactamente sobre el nodo bloomeado.
  - Al cerrar se **mantiene el nodo activo** (`setPhase(academyPhase, node)`): el nodo queda mostrando
    precio + CTA y el cielo se queda en la fase Academy (nada de volver a oscuro).
- Verificado en Chromium (1440×900): el precio se mantiene visible durante el encogido y el nodo termina
  activo con precio (`is-active`, precio opacity 1). Cierre continuo, sin salto. Sin errores de app.

### 2026-07-21 — Sesión 13 · Handoff del cierre 100% fluido (no era el borde)
- **Feedback:** el saltito final NO era el borde; era el **tamaño de la caja / reacomodo del contenido**
  al terminar el cierre. 4 causas corregidas:
  1. **Contenido del ghost ≠ nodo:** el ghost tenía `gap:8px` + `padding:14/20` y el nodo usa márgenes
     (sin gap) + `padding:16/22`. Se alineó el ghost al nodo → el contenido no se reacomoda en el handoff.
  2. **Look base del card ≠ flagship:** el card terminaba con borde neutro y el nodo flagship es rojizo
     + anillo. Se igualó el `.amodal__card` base al flagship (bg, borde rojo, box-shadow) → sin pop de color.
  3. **Easing "aguanta y colapsa":** `cubic-bezier(.5,.05,.2,1)` mantenía la caja grande y la encogía de
     golpe al final. Cambiado a **ease-out** `cubic-bezier(.22,1,.36,1)` (.6s) → el grueso del movimiento
     es al principio y **aterriza suave**.
  4. **`finish()` con número mágico:** se revelaba el nodo con `setTimeout` que podía dispararse un frame
     antes de terminar el morph. Ahora se usa **`transitionend` del `width`** (`afterMorph`) → el nodo se
     revela exactamente cuando la caja llegó a su tamaño final. Fallback a 760ms.
- Verificado en Chromium (1440×900): `finish` dispara con el card ya en 168px (= nodo); los dos frames
  del handoff (ghost vs nodo) son idénticos en contenido, tamaño y borde. Sin errores de app.

### 2026-07-21 — Sesión 14 · Crossfade de texto sin salto de tamaño
- **Feedback:** el único salto que quedaba era el **tamaño del texto**. Causa: el ghost (texto chico,
  centrado) hacía fade-in **de inmediato al cerrar**, así que aparecía en el **centro del panel aún
  grande**, encima del texto grande → se percibía como que el texto saltaba de tamaño.
- **Fix (crossfade desacoplado por dirección con delays):**
  - CLOSE: el contenido grande se desvanece **rápido y temprano** (mientras la caja aún es grande) y el
    ghost chico hace fade-in **tarde** (delay .3s), sólo cuando la caja ya encogió al tamaño del nodo.
  - OPEN: el ghost se va **rápido** (.15s) y el contenido entra con un **delay corto** (.15s) a medida
    que la caja se abre — sin hueco vacío ni choque de tamaños.
  - Así el texto grande y el chico **nunca coexisten** a tamaños distintos en la misma caja.
- Verificado en Chromium (1440×900) con filmstrips de open y close: no hay texto chico flotando sobre el
  panel grande, ni panel vacío; el cierre lee panel→(se desvanece)→encoge→etiqueta del nodo. Sin errores.

### 2026-07-22 — Sesión 15 · Fin del salto de texto: crossfade → secuencia de 3 fases
- **Diagnóstico honesto:** el salto de "tamaño de letra" NO era timing; era **de raíz**. El panel usa
  "Academy" (Fraunces 42px) y el nodo "AWAKENING ACADEMY" (Jost 12.5px): textos, fuentes y tamaños
  distintos. Cualquier crossfade por opacidad hace que en algún punto un texto chico y uno grande
  coexistan en la misma caja mientras cambia de tamaño → siempre se lee como salto. Se dejó de
  parchar con timing.
- **Solución — 3 fases secuenciadas (el texto NUNCA se mueve mientras la caja cambia de tamaño):**
  1. el texto saliente se desvanece con la **caja quieta**;
  2. la **caja vacía** cambia de tamaño (sin texto);
  3. el texto entrante aparece **ya en el tamaño final**.
  Implementado con dos clases independientes `show-ghost` / `show-content` (antes era un solo toggle),
  orquestadas por JS con timers de fase + `afterMorph` (transitionend). El ghost al abrir se muestra
  **instantáneo** (sin fade, `transition:none` + reflow) para dar continuidad con el nodo, se sostiene
  un beat (110ms) y luego se desvanece antes de crecer.
- Easing del resize: `cubic-bezier(.33,1,.68,1)` .42s (ahora anima caja vacía, sin texto que distorsione).
- Verificado en Chromium (1440×900): frame a media transición = **caja completamente vacía** (sin
  texto); 3 ciclos open/close consecutivos OK (open→560px, close→168px, cerrado), nodo termina activo
  con precio. Sin errores de app.
- **Nota:** headless corre a ~5fps y transitionend puede tardar; se bajó el fallback de `afterMorph` a
  `DUR+140ms`. En navegador real (60fps) se ve mucho más fluido que en las pruebas.

### 2026-07-22 — Sesión 16 · El solapamiento real de 30ms (por fin el salto de texto)
- La secuencia de 3 fases (Sesión 15, #25) **seguía saltando** para el usuario. Encontrado el culpable
  real: **solapamiento de ~30ms** entre fases. En el cierre, el texto tardaba .18s en desvanecerse pero
  el shrink arrancaba a los 150ms → durante ~30ms el texto grande (aún ~15% visible) coexistía con la
  caja empezando a encoger. A 60fps son ~2 frames de salto; a 5fps del headless era **invisible en las
  pruebas** (por eso lo di por bueno).
- **Fix:** gaps limpios sin solapamiento. Texto .15s; el resize (open grow / close shrink) **espera a
  que el texto esté 100% desvanecido** (+30ms de buffer) antes de arrancar; y el `finish` espera a que
  el ghost esté 100% visible antes del handoff. Resize .4s.
- **Verificación clave (nueva técnica):** copia con tiempos **4× lentos** para muestrear a 5fps. Frame a
  media transición (w=352px): **content=0 y ghost=0** → caja **completamente vacía**, confirmado por
  lectura de opacidades y por captura. Ya no hay ningún frame con texto durante el resize.
- Nota de test: el server sirve desde la raíz del repo, no desde scratchpad (la copia lenta debe ir a
  la raíz temporalmente y borrarse — NO commitear `slow.html`).

### 2026-07-22 — Sesión 17 · CAMBIO DE DIRECCIÓN: modal centrado (se abandona el morph)
- Tras ~6 intentos de pulir el morph "el card crece desde el nodo", el salto de tamaño de texto
  **seguía** (aun con la caja vacía verificada). **Conclusión honesta:** el morph es la causa — hacer
  que el título grande del panel (Fraunces 42px) se convierta en el chico del nodo (Jost 12.5px)
  durante un cambio de tamaño **siempre** se lee como salto. Se le explicó al usuario y **eligió**
  (AskUserQuestion) la opción práctica: **modal centrado (fade + scale suave)**.
- **Reescritura completa del modal:** se ELIMINÓ todo el morph (ghost, fases, `stableRect`,
  `afterMorph`/transitionend, `finalGeom`, `MORPH`, clases `is-expanded`/`show-ghost`/`show-content`/
  `is-done`/`am-return`, timers de fase). Ahora es un **modal centrado estándar**: `.amodal` con flex
  center; `.amodal__card` hace **fade (opacity) + scale sutil (.955→1) + lift (10px→0)** con
  `cubic-bezier(.22,1,.36,1)`. El backdrop glass deja ver la estrella. El contenido aparece **ya a su
  tamaño final** (solo fade) → **imposible que el texto salte**.
- Show/hide: `.is-open` (visible) / `.is-fading` (sigue visible durante el fade-out) + timer 440ms que
  quita `is-fading` para salir del tab-order. Cerrar: `x`, `Esc`, click en backdrop. En móvil el modal
  es full-screen.
- Al abrir se mantiene el cielo en la fase Academy (setPhase); al cerrar vuelve a noche.
- Verificado en Chromium (1440×900 y 390×844): abre/cierra OK, fade+scale suave, se oculta del
  tab-order tras el fade, contenido legible, sin errores. Sin morph = sin salto posible.
- **✅ APROBADO por el usuario** ("Bien! Funciona, gracias"). PR **#27** mergeado. Modal de Academy
  cerrado como feature. Siguiente sesión: temas nuevos (afinar cielos y/o links reales cuando se pasen).

### 2026-07-22 — Sesión 18 · Formato del modal de Awakening Academy (nombre, precio, sin emojis)
- **Encabezado del modal como nombre propio:** antes el modal abría con eyebrow "Awakening" (chico,
  arriba) + título "Academy" (grande, abajo) en **dos líneas**. Se fusionó en **"Awakening Academy"**
  en **una sola línea, bold (700)**, Fraunces `clamp(28px,5.4vw,38px)` con `white-space:nowrap`.
  Eliminado el `.amodal__eyebrow` (HTML + CSS).
- **Precio visible (bug de especificidad):** `.amodal__price` (0-1-0) **perdía** contra
  `.amodal p { font-size:15px }` (0-1-1), así que el precio se renderizaba a **15px** sin importar lo
  que dijera su regla (por eso "se perdía"). Se subió la especificidad → `.amodal p.amodal__price` a
  **31px** (weight 500). Ahora sí destaca bajo el nombre.
- **Emojis fuera:** quitados `✨` de "What's included" y `🖤` del bullet "join or cancel whenever".
  Las viñetas `✦` de la lista se cambiaron por un **punto CSS** (sin ningún glifo) para no dejar
  decoración tipo emoji. Escaneo Unicode: 0 emojis en el archivo.
- **Nota de flujo (importante):** esta rama había salido de un `main` viejo (pre-modal); el primer
  intento tocó por error el **nodo** en vez del **modal** y chocó (PR #29 quedó *dirty*). Se **reseteó
  la rama sobre `origin/main`** y se reaplicaron los 3 cambios sobre el modal real.
- Verificado en Chromium (1440×900 y 390×844): título 1 línea (38/28px, 700), precio 31px, sin
  emojis, viñetas de punto, sin errores.
- Pendiente/siguiente: afinar arte de los 7 cielos y links reales cuando se pasen.

### 2026-07-22 — Sesión 19 · Botón de cierre del modal: "×" siempre centrada
- **Problema:** el botón `.amodal__close` usaba el glifo de texto `&times;` centrado por flexbox. El
  glifo no coincide con el centro óptico de su caja de línea, así que al `hover` (`transform:rotate(90deg)`)
  el desfase se hacía visible y la "×" se veía corrida del centro del círculo.
- **Fix:** se reemplazó el glifo por una **"×" en SVG** (dos líneas cruzadas centradas en un viewBox
  `0 0 24 24`, `stroke=currentColor`, round caps). Al ser geométricamente simétrica y centrada por el
  flex del botón, **queda en el centro en reposo y rotada**. Se quitó `font-size/line-height` (ya no
  se usan). El JS no lee el texto del botón, así que el cambio es transparente.
- Verificado en Chromium: centro del botón == centro del SVG (idénticos) también con `rotate(90deg)`;
  capturas de reposo y hover confirman "×" centrada.
- Pendiente/siguiente: afinar arte de los 7 cielos y links reales cuando se pasen.

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
