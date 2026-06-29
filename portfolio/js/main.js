document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1 }
  );

  document.querySelectorAll('section:not(#hero), .project, .stack-item')
    .forEach(el => { el.classList.add('fade-in'); observer.observe(el); });
});
