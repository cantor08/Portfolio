// Smooth scroll with header offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const headerHeight = document.querySelector('header').offsetHeight;
      
      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    });
  });
  
  // Dynamic copyright year
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Form handling
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button');
    
    try {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      // Replace with your form handling logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      form.reset();
      alert('Message sent successfully!');
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
  
  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.project-card, .skill-category').forEach((el) => {
    observer.observe(el);
  });