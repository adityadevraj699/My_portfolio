window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Light mode example
      navbar.style.backgroundColor = 'rgba(44, 44, 44, 1)';
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
  });
  