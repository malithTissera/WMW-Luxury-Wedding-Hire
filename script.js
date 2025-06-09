function openGallery(carId) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = '';

  const imageMap = {
    1: ['bmw-520i-1.webp'],
    2: ['audi-a6-1.webp'],
    3: ['bmw-x5-1.webp'],
    4: ['toyota-prius-1.webp'],
    5: ['toyota-axio-1.webp'],
    6: ['toyota-allion-1.webp'],
    7: ['toyota-premio-1.webp'],
    8: ['honda-vesel-1.webp'],
    9: ['honda-vesel-red-1.webp']
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

  images.forEach(img => {
    const imageEl = document.createElement('img');
    imageEl.src = `images/Car/${folder}/${img}`;
    modalContent.appendChild(imageEl);
  });

  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
}

function closeGallery() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}
