// Enhanced Gallery Functionality
function openGallery(carId) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  
  // Clear previous content
  modalContent.innerHTML = '';
  
  // Corrected image mappings with multiple images per car
  const imageMap = {
    1: ['bmw-520i-1.webp'],
    2: ['Audi-A6-1.webp'],
    3: ['bmw-x5-1.webp'],
    4: ['toyota-prius-1.webp'],
    5: ['toyota-axio-1.webp'],
    6: ['toyota-allion-1.webp'],
    7: ['toyota-premio-1.webp'],
    8: ['honda-vesel-1.webp'],
    9: ['honda-vesel-1.webp']
  };

  const folderMap = {
    1: 'BMW 520i',
    2: 'Audi A6 Red',
    3: 'BMW X5',
    4: 'Toyota Prius',
    5: 'Toyota Axio',
    6: 'Toyota Allion',
    7: 'Toyota Premio',
    8: 'Honda Vesel White',
    9: 'Honda Vesel Red'
  };

  const images = imageMap[carId] || [];
  const folder = folderMap[carId] || '';

  if (images.length === 0) {
    console.error('No images found for car ID:', carId);
    return;
  }

  // Create image elements
  images.forEach((img, index) => {
    const imageEl = document.createElement('img');
    imageEl.src = `images/Car/${folder}/${img}`;
    imageEl.alt = `${folder} - Image ${index + 1}`;
    imageEl.loading = 'lazy';
    modalContent.appendChild(imageEl);
  });

  // Show modal and disable body scroll
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
document.addEventListener('click', (event) => {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeGallery();
  }
});

// Enhanced Scroll Animations with Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Unobserve after animation to improve performance
      observer.unobserve(entry.target);
    } else {
      // Optional: Remove visible class when element leaves viewport
      // entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('section, .car-card').forEach(el => {
  animateOnScroll.observe(el);
});

// Initialize animations on load
window.addEventListener('DOMContentLoaded', () => {
  // Trigger initial check
  document.querySelectorAll('section, .car-card').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {
      el.classList.add('visible');
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeGallery();
    }
  });
});