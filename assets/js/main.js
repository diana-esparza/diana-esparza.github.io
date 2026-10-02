(() => {
  'use strict';

  const body = document.body;
  const header = document.querySelector('#header');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const scrollTop = document.querySelector('.scroll-top');

  const updateScrolledState = () => {
    if (header) body.classList.toggle('scrolled', window.scrollY > 100);
    if (scrollTop) scrollTop.classList.toggle('active', window.scrollY > 100);
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      body.classList.toggle('mobile-nav-active');
      mobileToggle.classList.toggle('bi-list');
      mobileToggle.classList.toggle('bi-x');
    });
  }

  document.querySelectorAll('#navmenu a').forEach((link) => {
    link.addEventListener('click', () => {
      if (!body.classList.contains('mobile-nav-active')) return;
      body.classList.remove('mobile-nav-active');
      mobileToggle?.classList.add('bi-list');
      mobileToggle?.classList.remove('bi-x');
    });
  });

  if (scrollTop) {
    scrollTop.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', updateScrolledState, { passive: true });
  window.addEventListener('load', () => {
    updateScrolledState();
    if (window.AOS) window.AOS.init({ duration: 650, easing: 'ease-out-cubic', once: true });
  });
})();
