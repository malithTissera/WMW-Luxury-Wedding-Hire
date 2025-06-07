const imageSets = {
  1: [
    "https://www.bmw.com.my/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg",
    "https://bmw.scene7.com/is/image/BMW/BMW-X4-1?wid=3000&hei=3000",
    "https://www.bmw.com.my/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg"
  ],
  2: [
    "https://www.shutterstock.com/image-photo/novosibirsk-russia-april-23-2024-600nw-2458702347.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/rt-mercedes-benz-cpo-1-1531414981.jpg?crop=0.886xw:1xh;center,top&resize=1200:*",
    "https://di-uploads-pod14.dealerinspire.com/downtownlamotorsmercedesbenz/uploads/2025/01/2025-Mercedes-Benz-G-Wagon.png",
    "https://www.shutterstock.com/image-photo/novosibirsk-russia-april-23-2024-600nw-2458702347.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/rt-mercedes-benz-cpo-1-1531414981.jpg?crop=0.886xw:1xh;center,top&resize=1200:*",
    "https://di-uploads-pod14.dealerinspire.com/downtownlamotorsmercedesbenz/uploads/2025/01/2025-Mercedes-Benz-G-Wagon.png",
  ],
  3: [
    "https://hips.hearstapps.com/hmg-prod/images/original-13270-s7-2024-6701-66d8a83a30973.jpg?crop=0.647xw:0.458xh;0.122xw,0.247xh&resize=1200:*",
    "https://www.stratstone.com/-/media/stratstone/audi/car-models/s7-sportback/audi-s7-sportback-720x405px.ashx?mh=1440&la=en&h=405&w=720&mw=2560&hash=5F56954BBBBAFCCB75600692C6F6AA80",
    "https://cimg0.ibsrv.net/ibimg/hgm/1920x1080-1/100/697/audi-a7_100697856.jpg"
  ],
  4: [
    "https://hips.hearstapps.com/hmg-prod/images/2024-jaguar-xf-p300-r-dynamic-101-64e8cdd02fc9a.jpg?crop=0.775xw:0.658xh;0.0879xw,0.203xh&resize=2048:*",
    "https://www.usnews.com/object/image/0000018d-4780-d9f2-afed-ffb66d480001/jaguar-xf-23my-300-sport-exterior-front-3-quarter-260422.jpg?update-time=1706301614502&size=responsive640",
    "https://media.ed.edmunds-media.com/jaguar/xf/2024/oem/2024_jaguar_xf_sedan_p300-r-dynamic-se_fq_oem_1_1600.jpg"
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
