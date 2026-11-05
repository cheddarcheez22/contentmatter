/* ContentMatter site behavior: header, back to top, sample carousel, example result pop up */
(function () {
  var header = document.querySelector('header.top');
  var topBtn = document.getElementById('top');
  function onScroll() {
    var y = window.scrollY || 0;
    if (header && window.innerWidth > 900) header.classList.toggle('solid', y > 10);
    if (topBtn) topBtn.classList.toggle('on', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (topBtn) topBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  document.querySelectorAll('[data-car]').forEach(function (car) {
    var track = car.querySelector('.track');
    function go(dir) {
      if (!track) return;
      var card = track.querySelector('.q');
      var step = card ? card.getBoundingClientRect().width + 28 : 400;
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
    }
    var p = car.querySelector('[data-car-prev]'), n = car.querySelector('[data-car-next]');
    if (p) p.addEventListener('click', function () { go(-1); });
    if (n) n.addEventListener('click', function () { go(1); });
  });

  document.querySelectorAll('[data-open-dialog]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var d = document.getElementById(btn.getAttribute('data-open-dialog'));
      if (d && d.showModal) d.showModal();
    });
  });
  document.querySelectorAll('dialog').forEach(function (d) {
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    d.querySelectorAll('[data-close-dialog]').forEach(function (b) { b.addEventListener('click', function () { d.close(); }); });
  });
})();
