/* ===========================================================
   CosmicAry — interactions
   Ported from the Claude Design component (DCLogic) to vanilla JS.

   - Seeded starfield on a fixed canvas
   - Scroll-driven background transition cosmos -> cream near "Academy"
   - Canvas fade + subtle parallax
   - Scroll-hint fade
   - Smooth-scroll for in-page anchors
   - IntersectionObserver reveals for [data-reveal]
   =========================================================== */

(function () {
  'use strict';

  // Tunables (originally editor props on the design component)
  var STAR_DENSITY = 120; // stars per ~700k px²
  var FADE_SPAN = 0.66;   // portion of a viewport over which the bg fades

  var COSMOS = [11, 14, 26];
  var CREAM  = [242, 237, 228];

  var canvas = document.getElementById('stars');
  var ctx = canvas ? canvas.getContext('2d') : null;
  var academy = document.getElementById('academy');
  var scrollHint = document.getElementById('scrollHint');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- seeded RNG (mulberry32) so the starfield is stable across resizes ---
  function mulberry32(seed) {
    var a = seed;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function drawStars() {
    if (!ctx) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = window.innerWidth, h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    var count = Math.round(STAR_DENSITY * w * h / 700000);
    var rand = mulberry32(7);
    for (var i = 0; i < count; i++) {
      var x = rand() * w, y = rand() * h;
      var r = 0.3 + rand() * 0.9;
      var a = 0.15 + rand() * 0.65;
      var t = rand();
      var col = t < 0.75 ? '242,237,228' : (t < 0.9 ? '255,224,196' : '196,208,255');
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + col + ',' + a.toFixed(2) + ')';
      ctx.fill();
    }
  }

  function smoothstep(p) { return p * p * (3 - 2 * p); }

  function onScroll() {
    var y = window.scrollY, vh = window.innerHeight;
    if (!academy) return;
    var span = vh * FADE_SPAN;
    var start = academy.offsetTop - vh;
    var p = Math.max(0, Math.min(1, (y - start) / span));
    var e = smoothstep(p);

    var mix = COSMOS.map(function (v, i) {
      return Math.round(v + (CREAM[i] - v) * e);
    });
    document.body.style.backgroundColor = 'rgb(' + mix.join(',') + ')';

    if (canvas) {
      canvas.style.opacity = String(1 - e);
      canvas.style.transform = 'translate3d(0,' + (-y * 0.06).toFixed(1) + 'px,0)';
    }
    if (scrollHint) {
      scrollHint.style.opacity = String(Math.max(0, 1 - y / (vh * 0.35)));
    }
  }

  // --- smooth-scroll for CTA anchors ---
  function initSmoothScroll() {
    document.querySelectorAll('a[data-scroll]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (!id || id.charAt(0) !== '#') return;
        var el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop, behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
  }

  // --- reveal on scroll ---
  function initReveals() {
    var els = document.querySelectorAll('[data-reveal]');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  function init() {
    drawStars();
    onScroll();
    initSmoothScroll();
    initReveals();

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () { onScroll(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { drawStars(); onScroll(); }, 120);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
