// Cuit Lu Cru — interactions sobres
(function () {
  'use strict';

  document.documentElement.classList.add('js');
  if (location.search.indexOf('noanim') !== -1) {
    document.documentElement.classList.add('noanim');
  }

  // ---------- Refresh = retour sur le hero ----------
  // Uniquement sur la page d'accueil : ailleurs (pages légales), une ancre
  // comme #cookies doit rester une ancre et emmener le lecteur au bon endroit.
  var hasHero = !!document.querySelector('.hero');
  if (hasHero) {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
    window.scrollTo(0, 0);
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) window.scrollTo(0, 0);
    });
  }

  // ---------- Reveal au scroll ----------
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var noanim = document.documentElement.classList.contains('noanim');
  var all = Array.prototype.slice.call(document.querySelectorAll('.reveal, .img-reveal'));
  var heroTargets = all.filter(function (el) { return el.closest('.hero'); });
  var targets = all.filter(function (el) { return !el.closest('.hero'); });

  if (reduced || noanim || !('IntersectionObserver' in window)) {
    all.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    targets.forEach(function (el) { io.observe(el); });
  }

  // ---------- Séquence d'ouverture ----------
  var intro = document.getElementById('intro');
  var revealHero = function () {
    heroTargets.forEach(function (el) { el.classList.add('is-in'); });
  };

  if (reduced || noanim || !intro) {
    if (intro) intro.parentNode.removeChild(intro);
    revealHero();
  } else if (location.search.indexOf('introhold') !== -1) {
    // QA : fige le rideau d'ouverture
    document.documentElement.classList.add('intro-lock');
  } else {
    document.documentElement.classList.add('intro-lock');
    window.setTimeout(function () {
      intro.classList.add('is-done');
      document.documentElement.classList.remove('intro-lock');
      revealHero();
    }, 2150);
    intro.addEventListener('transitionend', function () {
      if (intro.parentNode) intro.parentNode.removeChild(intro);
    });
    // filet de sécurité si transitionend ne part pas
    window.setTimeout(function () {
      if (intro.parentNode) intro.parentNode.removeChild(intro);
      document.documentElement.classList.remove('intro-lock');
    }, 3600);
  }

  // ---------- Header ombré au scroll ----------
  var header = document.getElementById('header');
  var onScroll = function () {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Menu mobile ----------
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobile-menu');

  function closeMenu() {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', function () {
    var open = !menu.classList.contains('is-open');
    burger.classList.toggle('is-open', open);
    menu.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  // ---------- Planche contact : drag horizontal ----------
  var strip = document.getElementById('chantier-strip');
  if (strip) {
    var isDown = false, startX = 0, startScroll = 0;

    strip.addEventListener('pointerdown', function (e) {
      isDown = true;
      startX = e.clientX;
      startScroll = strip.scrollLeft;
      strip.classList.add('is-dragging');
      strip.setPointerCapture(e.pointerId);
    });
    strip.addEventListener('pointermove', function (e) {
      if (!isDown) return;
      strip.scrollLeft = startScroll - (e.clientX - startX);
    });
    ['pointerup', 'pointercancel'].forEach(function (evt) {
      strip.addEventListener(evt, function () {
        isDown = false;
        strip.classList.remove('is-dragging');
      });
    });
  }

  // ---------- Année courante ----------
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
