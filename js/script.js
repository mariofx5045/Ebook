document.addEventListener('DOMContentLoaded', function() {
  // 1. Mobile Menu Toggle Logic
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  const navLinksItems = document.querySelectorAll('.nav-link');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    // 2. Close mobile menu when a link is clicked
    navLinksItems.forEach(item => {
      item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      });
    });
  }

  // 3. Simple Smooth Scroll with header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      e.preventDefault();

      const headerOffset = 70; // height header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

  // 4. Form handling (Mockup)
  const ctaForm = document.getElementById('ctaForm');
  if (ctaForm) {
    ctaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');

      if (emailInput && emailInput.value) {
        alert(`Cảm ơn bạn đã đăng ký với email: ${emailInput.value}! Chúng tôi sẽ liên hệ sớm.`);
        emailInput.value = ''; // Clear input
      }
    });
  }
});