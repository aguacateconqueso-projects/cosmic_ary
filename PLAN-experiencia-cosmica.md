# 🌌 Plan — Experiencia Cósmica (constelación de ofertas)

Rediseño de CosmicAry de "landing con copy" a **storefront inmersivo**: una sola
pantalla con noche estrellada animada + **aura orgánica latiendo en el centro** +
**constelación de ofertas** alrededor. Al enfocar una oferta, el **cielo se funde a
una hora del día**, el nodo florece con precio + CTA, y el aura vira de tono.

> Filosofía: Ariana vende, no cuenta historia. La narrativa se cuenta **con luz y
> movimiento**, no con copy. Original, rompe la norma, pero **convierte**.

---

## 1. Definiciones a cerrar (decisiones de diseño)

- [ ] **Concepto** — una pantalla inmersiva (aura central + constelación). ✅ aprobado
- [ ] **Agrupación en órbitas** (propuesta a confirmar):
  - *Órbita interior — "Empieza"* (autoservicio / ticket bajo): Purpose Masterclass $50 · Personalized Subliminal $75 · Personalized Affirmations $100 · Awakening Academy $100/mes
  - *Órbita exterior — "Profundiza"* (1:1 / alto ticket): 1:1 Coaching $400 · 1-Month Mentorship $1,100 · 4-Month Mentorship $4,000
- [ ] **Mapeo oferta → hora del día** (propuesta a confirmar/ajustar):
  | Oferta | Precio | Cielo (hover/scroll) |
  |---|---|---|
  | Purpose Masterclass (replay) | $50 | Amanecer |
  | Personalized Subliminal | $75 | Media mañana |
  | Awakening Academy | $100/mes | Mediodía / pleno sol |
  | Personalized Affirmations | $100 | Mañana cálida |
  | 1:1 Coaching | $400 | Golden hour / atardecer |
  | 1-Month Mentorship | $1,100 | Atardecer profundo |
  | 4-Month Mentorship | $4,000 | Anochecer / crepúsculo |
  | *(sin hover)* | — | **Noche estrellada = base** |
  > Nota: si 7 cielos distintos es mucha dirección de arte, consolidamos a ~5 y reutilizamos.
- [ ] **Orden / jerarquía** de lectura (¿flagship Academy primero? ¿o journey por hora del día?). Resolver tensión conversión vs. narrativa.
- [ ] **Interacción de cambio de cielo**: hover (desktop) + tap/scroll (móvil). Confirmar fallback móvil (tap-enfoca vs. scroll mueve el sol).
- [ ] **Copy de cada nodo**: usar el de la captura (título, subtítulo, precio, CTA). ✅ ya lo tenemos.

## 2. Contenido / assets (de Ariana)

- [ ] **Links de checkout** (7) — *placeholders primero, linkear después.* ✅ decidido
- [x] **Foto de Ariana** — NO se usa por ahora (sin asset de calidad). ✅ decidido
- [ ] **Links reales de redes**: Instagram, TikTok, email, YouTube, Spotify, Apple Podcasts — placeholders primero.
- [x] **Monograma "A"** — ya lo tenemos (SVG en el sitio actual).
- [ ] **Favicon** propio + **imagen Open Graph** (para compartir en IG/TikTok bio).
- [x] **Tipografías** — Fraunces + Inter. ✅
- [x] **Paleta** — cosmos/crema/tinta + rojos de marca; añadir azul periwinkle para el aura.

## 3. Bloques a construir (técnico, en orden)

1. [ ] **Prototipo del AURA** (aislado, página suelta) — la pieza estrella. Canvas 2D: pétalos radiales difuminados, blending translúcido, rotación + latido, lerp de color cálido↔frío en bucle. + grano. **← empezamos por aquí.**
2. [ ] **Sistema de "cielos"** — capas de degradado a pantalla completa (amanecer, mañana, mediodía, atardecer, anochecer, noche) con crossfade suave + debounce.
3. [ ] **Noche estrellada** — refactor del starfield actual como cielo base.
4. [ ] **Componente nodo-oferta** — colapsado (ícono + título + precio) → al enfocar florece (subtítulo + CTA).
5. [ ] **Layout constelación DESKTOP** — disposición radial/orbital alrededor del aura.
6. [ ] **Layout constelación MÓVIL** — apilado vertical elegante; el cielo viaja con el scroll.
7. [ ] **Interacción de enfoque** — hover/focus/tap → cambia cielo + florece nodo + vira el aura.
8. [ ] **Bloque de identidad** — "Ariana Del Rosario · Transformational Mentor" + redes.
9. [ ] **Integración final** — juntar todo en la pantalla única.

## 4. Calidad transversal (no negociable)

- [ ] **Mejora progresiva** — storefront sólido y clicable aunque el JS/animación falle.
- [ ] **Accesibilidad** — navegación por teclado, focus visible, `prefers-reduced-motion` (apaga aura/cielos/latido), contraste AA en textos sobre cualquier cielo, `aria-label`s.
- [ ] **Rendimiento** — un solo canvas, densidad reducida en móvil, pausar animación fuera de viewport, sin jank.
- [ ] **Responsive** — sin scroll horizontal, todo legible de 320px a desktop.
- [ ] **SEO/meta** — title, description, OG image, favicon.
- [ ] **Contraste dinámico** — el texto de los nodos debe leerse sobre noche Y sobre mediodía claro (posible capa de legibilidad detrás del texto).

## 5. Flujo de trabajo

- [ ] Una rama + **un PR por bloque** hacia `main` (revisas preview de Vercel, mergeas).
- [ ] Actualizar `progreso.md` al cerrar cada sesión.
- [ ] Mantener este plan con checkboxes al día.

## 6. Roadmap propuesto (por PRs)

1. **PR — Aura**: prototipo del aura aislado (`/aura.html`).
2. **PR — Cielos**: sistema de cielos + crossfade sobre la noche.
3. **PR — Nodos + constelación desktop**: nodos-oferta con placeholders + layout radial.
4. **PR — Móvil + scroll**: layout vertical + cielo por scroll.
5. **PR — Interacción + identidad**: enfoque completo (cielo+aura+nodo) + bloque identidad.
6. **PR — Pulido**: a11y, perf, SEO, OG, fallback.
7. **PR — Links reales**: cambiar placeholders por checkout + redes reales (cuando Ariana los pase).

---

## Preguntas abiertas
- Orden de las ofertas: ¿por precio/flagship (conversión) o por hora del día (narrativa)?
- ¿Fallback móvil del cielo: tap-para-enfocar, o el sol viaja con el scroll? (o ambos)
- ¿7 cielos distintos o consolidar a ~5?
