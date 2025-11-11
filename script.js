function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const downloadBtn = document.getElementById('download-btn');

  lightbox.style.display = 'flex';
  lightboxImg.src = imgSrc;
  downloadBtn.href = imgSrc;
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}
