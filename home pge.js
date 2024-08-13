// Add event listeners for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Add animation to hero section
  const hero = document.querySelector('.hero');
  hero.addEventListener('mousemove', event => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    hero.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
  });
  
  // Add product card hover effects
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.1)';
      card.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });
  });
  
  // Add responsive navigation
  const nav = document.querySelector('nav');
  const navToggle = document.querySelector('.nav-toggle');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  
  // Add scroll-to-top button
  const scrollToTop = document.querySelector('.scroll-to-top');
  scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Add lazy loading to images
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    image.addEventListener('load', () => {
      image.style.opacity = 1;
    });
    image.src = image.dataset.src;
  });
  
  