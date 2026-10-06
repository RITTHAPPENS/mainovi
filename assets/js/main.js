/* MAINOVI Startseite, Prototyp */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header: Linie, sobald die Seite gescrollt ist (Sentinel statt Scroll-Listener) */
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero');
  if (header && hero && 'IntersectionObserver' in window) {
    var sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:8px;pointer-events:none';
    hero.prepend(sentinel);
    new IntersectionObserver(function (entries) {
      header.classList.toggle('is-stuck', !entries[0].isIntersecting);
    }).observe(sentinel);
  }

  /* Mobile Navigation */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('hauptnavigation');
  function closeNav() {
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menü öffnen');
    nav.classList.remove('is-open');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Menü öffnen' : 'Menü schließen');
      nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeNav(); toggle.focus(); }
    });
  }

  /* Sprachumschalter: EN folgt */
  document.querySelectorAll('.lang a[aria-disabled="true"]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

  /* Sortiment: Kategorie wählen tauscht das große Bild */
  var list = document.querySelector('[data-range]');
  var stage = document.getElementById('range-stage');
  if (list && stage) {
    var items = Array.prototype.slice.call(list.querySelectorAll('.range-item'));
    var figures = Array.prototype.slice.call(stage.querySelectorAll('figure'));
    var current = 'drogerie';
    var hoverIntent = null;

    function activate(key) {
      if (key === current) return;
      items.forEach(function (li) {
        var on = li.dataset.key === key;
        li.classList.toggle('is-active', on);
        li.querySelector('.range-trigger').setAttribute('aria-pressed', String(on));
      });
      figures.forEach(function (fig) {
        fig.classList.remove('was-active');
        if (fig.dataset.key === current) fig.classList.add('was-active');
        fig.classList.toggle('is-active', fig.dataset.key === key);
      });
      current = key;
    }

    items.forEach(function (li) {
      var btn = li.querySelector('.range-trigger');
      btn.addEventListener('click', function () { activate(li.dataset.key); });
      btn.addEventListener('focus', function () { activate(li.dataset.key); });
      li.addEventListener('pointerenter', function (e) {
        if (e.pointerType !== 'mouse') return;
        clearTimeout(hoverIntent);
        hoverIntent = setTimeout(function () { activate(li.dataset.key); }, reduceMotion ? 0 : 90);
      });
    });

    /* Bilder der Bühne vorladen, damit der Wechsel ohne Lücke läuft */
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries, obs) {
        if (!entries[0].isIntersecting) return;
        stage.querySelectorAll('img[loading="lazy"]').forEach(function (img) { img.loading = 'eager'; });
        obs.disconnect();
      }, { rootMargin: '400px' }).observe(stage);
    }
  }

  /* Einblenden beim Scrollen */
  var reveals = document.querySelectorAll('.reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Anfrageformular: Prüfung im Browser, Versand folgt in WordPress */
  var form = document.getElementById('anfrage-form');
  if (form) {
    var messages = {
      unternehmen: 'Bitte geben Sie Ihr Unternehmen an.',
      vorname: 'Bitte geben Sie Ihren Vornamen an.',
      nachname: 'Bitte geben Sie Ihren Nachnamen an.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse an, z. B. name@firma.com.',
      land: 'Bitte geben Sie Ihr Land an.',
      kategorie: 'Bitte wählen Sie eine Produktkategorie.',
      nachricht: 'Bitte schreiben Sie kurz, welche Artikel und Mengen Sie interessieren.',
      datenschutz: 'Bitte bestätigen Sie die Datenschutzerklärung, damit wir Ihre Anfrage bearbeiten können.'
    };

    function errorEl(field) {
      var id = field.getAttribute('aria-describedby');
      return id ? document.getElementById(id) : null;
    }

    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      var wrap = field.closest('.field');
      var err = wrap ? wrap.querySelector('.field-error') : null;
      if (err) field.setAttribute('aria-describedby', err.id);
    });

    function check(field) {
      var ok = field.checkValidity();
      var wrap = field.closest('.field') || field.closest('.consent');
      if (wrap) wrap.classList.toggle('has-error', !ok);
      field.setAttribute('aria-invalid', String(!ok));
      var err = errorEl(field);
      if (err) err.textContent = ok ? '' : (messages[field.name] || 'Bitte prüfen Sie dieses Feld.');
      return ok;
    }

    form.addEventListener('blur', function (e) {
      var f = e.target;
      if (f.matches && f.matches('input, select, textarea') && f.value !== '') check(f);
    }, true);
    form.addEventListener('input', function (e) {
      var wrap = e.target.closest('.has-error');
      if (wrap) check(e.target);
    });
    form.addEventListener('change', function (e) {
      if (e.target.type === 'checkbox' || e.target.tagName === 'SELECT') check(e.target);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = form.querySelectorAll('[required]');
      var firstBad = null;
      fields.forEach(function (f) { if (!check(f) && !firstBad) firstBad = f; });
      if (firstBad) { firstBad.focus(); return; }

      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.firstChild.textContent = 'Wird gesendet ';
      /* Prototyp: kein Versand. In WordPress übernimmt das Formular-Plugin. */
      setTimeout(function () {
        form.classList.add('is-sent');
        var ok = form.querySelector('.form-success');
        if (ok) ok.focus();
      }, 700);
    });
  }
})();
