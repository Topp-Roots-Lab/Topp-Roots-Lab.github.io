// Small behaviours for the Topp Roots Lab site. No libraries needed.
(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  // Publication search (Papers page)
  var input = document.getElementById('pub-search');
  if (input) {
    var items = Array.prototype.slice.call(document.querySelectorAll('.pub'));
    var groups = Array.prototype.slice.call(document.querySelectorAll('.pub-year'));
    var count = document.getElementById('pub-count');
    var total = items.length;
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      items.forEach(function (li) {
        var match = !q || li.textContent.toLowerCase().indexOf(q) !== -1;
        li.hidden = !match;
        if (match) shown++;
      });
      groups.forEach(function (g) {
        g.hidden = !g.querySelector('.pub:not([hidden])');
      });
      if (count) {
        count.textContent = q
          ? (shown ? shown + ' of ' + total + ' publications match' : 'No publications match "' + input.value.trim() + '". Try an author, journal or keyword.')
          : total + ' publications';
      }
    });
  }

  // Load the Twitter embed script only on pages that have embedded posts
  if (document.querySelector('.twitter-tweet')) {
    var s = document.createElement('script');
    s.src = 'https://platform.twitter.com/widgets.js';
    s.async = true;
    document.body.appendChild(s);
  }
})();
