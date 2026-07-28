(function(){
  "use strict";

  /* Mobile menu */
  var btn = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.mobile-menu');
  var header = document.querySelector('header');
  function setPos(){ if(menu && header){ menu.style.top = header.offsetHeight + 'px'; } }
  setPos();
  window.addEventListener('resize', setPos);
  if(btn && menu){
    btn.addEventListener('click', function(){
      var isOpen = menu.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', isOpen);
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Scroll-reveal
     The CSS only hides .reveal targets once html.js-reveal is present, and
     that class is only added here — right before every target is guaranteed
     an 'in' class (via observer or immediate fallback). So content can never
     get stuck invisible if this script fails to load or errors out earlier. */
  var targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if(targets.length){
    document.documentElement.classList.add('js-reveal');
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, {threshold:0.12, rootMargin:'0px 0px -60px 0px'});
      targets.forEach(function(t){ io.observe(t); });
    } else {
      targets.forEach(function(t){ t.classList.add('in'); });
    }
  }
})();
