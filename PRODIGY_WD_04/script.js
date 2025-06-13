window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    setTimeout(() => {
      section.style.transition = 'all 0.6s ease';
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }, 200);
  });
});
