const imageSets = {
  1: [ // BMW 520i
    "images/Car/BMW 520i/bmw-520i-1.webp",
  ],
  2: [ // Audi A6 Red
    "images/Car/Audi A6 Red/Audi-A6-1.webp",
  ],
  3: [ // Audi A6 White
    "images/Car/Audi A6 White/Audi-A6-1.webp"
  ],
  4: [ // BMW X5
    "images/Car/BMW X5/bmw-x5-1.webp"
  ],
  5: [ // Toyota Prius
    "images/Car/Toyota Prius/toyota-prius-1.webp"
  ],
  6: [ // Toyota Axio
    "images/Car/Toyota Axio/toyota-axio-1.webp"
  ],
  7: [ // Toyota Allion
    "images/Car/Toyota Allion/toyota-allion-1.webp",
  ],
  8: [ // Toyota Premio
    "images/Car/Toyota Premio/toyota-premio-1.webp" 
  ],
  9: [ // Honda Vesel White
    "images/Car/Honda Vesel White/honda-vesel-1.webp"
  ],
  10: [ // Honda Vesel Red
    "images/Car/Honda Vesel Red/honda-vesel-1.webp"
    
  ],
};

function openGallery(carId) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = "";

  imageSets[carId].forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    modalContent.appendChild(img);
  });

  modal.style.display = "block";
}

function closeGallery() {
  document.getElementById("modal").style.display = "none";
}
