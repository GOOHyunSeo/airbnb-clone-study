document.addEventListener('DOMContentLoaded', function () {
  let imageCurrentSlide = 0;
  let hostCurrentIndex = 0;
  const numVisible = 6;

  const totalImageSlides = document.querySelectorAll('.containerphoto').length;
  const imageSlider = document.getElementById('imageSlider');
  const slideWidth = document.querySelector('.containerphoto').offsetWidth;

  const hostSlider = document.getElementById('hostSlider');
  const hosts = document.querySelectorAll('.host');
  const maxHostIndex = Math.ceil(hosts.length / numVisible) - 1;

  hostSlider.style.transition = 'transform 0.5s ease';

  function showImageSlide(index) {
    const newPosition = -index * slideWidth;
    imageSlider.style.transition = 'transform 0.5s ease';
    imageSlider.style.transform = `translateX(${newPosition}px)`;
    if (index === totalImageSlides - 2) {
      document.querySelector('.rhigh-button').disabled = true;
    } else {
      document.querySelector('.rhigh-button').disabled = false;
    }
    if (index === 0) {
      document.querySelector('.lhigh-button').disabled = true;
    } else {
      document.querySelector('.lhigh-button').disabled = false;
    }
  }
  
  function nextImageSlide() {
    imageCurrentSlide = (imageCurrentSlide + 1) % totalImageSlides;
    showImageSlide(imageCurrentSlide);
  }

  function prevImageSlide() {
    imageCurrentSlide = (imageCurrentSlide - 1 + totalImageSlides) % totalImageSlides;
    showImageSlide(imageCurrentSlide);
  }

  function showHostsSlide(index) {
    const offset = -index * (0 / maxHostIndex);
    hostSlider.style.transform = `translateX(${offset}%)`;
    for (let i = 0; i < hosts.length; i++) {
      if (i >= index * numVisible && i < (index + 1) * numVisible) {
        hosts[i].style.display = 'inline-block';
      } else {
        hosts[i].style.display = 'none';
      }
    }
  }

  function nextHostSlide() {
    if (hostCurrentIndex < maxHostIndex) {
      hostCurrentIndex++;
      showHostsSlide(hostCurrentIndex);
    }
  }

  function prevHostSlide() {
    if (hostCurrentIndex > 0) {
      hostCurrentIndex--;
      showHostsSlide(hostCurrentIndex);
    }
  }

  document.querySelector('.lhigh-button').onclick = prevImageSlide;
  document.querySelector('.rhigh-button').onclick = nextImageSlide;
  document.querySelector('.host-prev-button').onclick = prevHostSlide;
  document.querySelector('.host-next-button').onclick = nextHostSlide;

  showImageSlide(imageCurrentSlide);
  showHostsSlide(hostCurrentIndex);
});
