// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Testimonial Carousel
class TestimonialCarousel {
  constructor() {
    this.testimonials = document.querySelectorAll('.testimonial');
    this.currentIndex = 0;
    this.autoSlideInterval = null;
    
    if (this.testimonials.length > 0) {
      this.init();
    }
  }
  
  init() {
    // Hide all testimonials except the first
    this.testimonials.forEach((testimonial, index) => {
      testimonial.style.display = index === 0 ? 'block' : 'none';
    });
    
    // Set up navigation buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    
    // Start auto-sliding
    this.startAutoSlide();
  }
  
  showTestimonial(index) {
    this.testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? 'block' : 'none';
    });
    this.currentIndex = index;
  }
  
  next() {
    let nextIndex = this.currentIndex + 1;
    if (nextIndex >= this.testimonials.length) {
      nextIndex = 0;
    }
    this.showTestimonial(nextIndex);
  }
  
  prev() {
    let prevIndex = this.currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = this.testimonials.length - 1;
    }
    this.showTestimonial(prevIndex);
  }
  
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 5000);
  }
  
  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}

// Form Validation
class FormValidator {
  static validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      
      // Get all required fields
      const requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#e53e3e';
        } else {
          field.style.borderColor = '#ddd';
        }
      });
      
      // Email validation
      const emailField = form.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          isValid = false;
          emailField.style.borderColor = '#e53e3e';
        }
      }
      
      if (isValid) {
        alert('Form submitted successfully! (This is a demo - no actual submission)');
        form.reset();
      } else {
        alert('Please fill in all required fields correctly.');
      }
    });
  }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize testimonial carousel
  new TestimonialCarousel();
  
  // Initialize form validation for application forms
  FormValidator.validateForm('loan-application-form');
  FormValidator.validateForm('investment-form');
  FormValidator.validateForm('forex-registration-form');
  FormValidator.validateForm('contact-form');
});