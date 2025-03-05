document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');
  
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Smooth scrolling for internal anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scroll({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
      // Close mobile menu when a link is clicked
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  });

  // Auto-scrolling testimonial slider
  const slider = document.querySelector('.testimonial-slider');
  let scrollAmount = 0;
  function autoScroll() {
    if (slider) {
      scrollAmount += 1;
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
  setInterval(autoScroll, 50);

  // Contact form submission (demo)
  const contactForm = document.getElementById('contactForm');
  if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for reaching out! We will get back to you soon.');
      contactForm.reset();
    });
  }
});
