document.addEventListener('DOMContentLoaded', function () {
  let imageCurrentSlide = 0;
  const totalImageSlides = document.querySelectorAll('.containerphoto').length;
  const imageSlider = document.getElementById('imageSlider');
  const slideWidth = document.querySelector('.containerphoto').offsetWidth;
  

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

  document.querySelector('.lhigh-button').onclick = prevImageSlide;
  document.querySelector('.rhigh-button').onclick = nextImageSlide;

  showImageSlide(imageCurrentSlide);
});

document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.weekend_host');
  const totalSlides = slides.length;

  // 슬라이드를 보여주는 함수
  function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = currentSlide; i < currentSlide + 6; i++) {
      if (i < totalSlides) {
        slides[i].style.display = 'flex';
      }
    }
  }

  // 다음 슬라이드를 보여주는 함수
  function week2Slide() {
    currentSlide += 6;
    if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }
    showSlides();
  }

  // 이전 슬라이드를 보여주는 함수
  function week1Slide() {
    currentSlide -= 6;
    if (currentSlide < 0) {
      currentSlide = totalSlides - 6;
    }
    showSlides();
  }

  // 초기에 첫 6개 호스트 박스 표시
  showSlides();

  // 버튼 이벤트 핸들러 등록
  document.querySelector('.custom-prev-button').onclick = week1Slide;
  document.querySelector('.custom-next-button').onclick = week2Slide;
});

document.addEventListener('DOMContentLoaded', function () {
  let slideIndex = 0;
  const slidesPerPage = 6; // 한 페이지에 보여질 슬라이드 개수
  
  // 슬라이드 이동 함수
  function moveSlides(n) {
    const slides = document.querySelectorAll('.host');
    const totalPages = Math.ceil(slides.length / slidesPerPage);
    
    // 슬라이드 인덱스 갱신
    slideIndex += n;
  
    // 슬라이드 인덱스가 범위를 벗어나면 처음 또는 마지막 페이지로 이동
    if (slideIndex >= totalPages) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = totalPages - 1;
    }
  
    // 모든 슬라이드 숨기기
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
  
    // 현재 페이지의 슬라이드 보이기
    const startIndex = slideIndex * slidesPerPage;
    const endIndex = Math.min(startIndex + slidesPerPage, slides.length);
    for (let i = startIndex; i < endIndex; i++) {
      slides[i].style.display = 'block';
    }
  }
  
  // 이전 버튼 클릭 이벤트 핸들러
  function hostLSlide() {
    moveSlides(-1); // 이전 페이지로 이동
  }
  
  // 다음 버튼 클릭 이벤트 핸들러
  function hostRSlide() {
    moveSlides(1); // 다음 페이지로 이동
  }
  
  // 초기화: 첫 번째 페이지의 슬라이드 보이기
  moveSlides(slideIndex);
  
  // 버튼 이벤트 핸들러 등록
  document.querySelector('.host-prev-button').addEventListener('click', hostLSlide);
  document.querySelector('.host-next-button').addEventListener('click', hostRSlide);
});

document.addEventListener('DOMContentLoaded', function () {
  let slideIndex = 0;
  const slidesPerPage = 6; // 한 페이지에 보여질 슬라이드 개수
  
  // 슬라이드 이동 함수
  function moveSlides(n) {
    const slides = document.querySelectorAll('.best_host');
    const totalPages = Math.ceil(slides.length / slidesPerPage);
    
    // 슬라이드 인덱스 갱신
    slideIndex += n;
  
    // 슬라이드 인덱스가 범위를 벗어나면 처음 또는 마지막 페이지로 이동
    if (slideIndex >= totalPages) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = totalPages - 1;
    }
  
    // 모든 슬라이드 숨기기
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
  
    // 현재 페이지의 슬라이드 보이기
    const startIndex = slideIndex * slidesPerPage;
    const endIndex = Math.min(startIndex + slidesPerPage, slides.length);
    for (let i = startIndex; i < endIndex; i++) {
      slides[i].style.display = 'block';
    }
  }
  
  // 이전 버튼 클릭 이벤트 핸들러
  function bestLSlide() {
    moveSlides(-1); // 이전 페이지로 이동
  }
  
  // 다음 버튼 클릭 이벤트 핸들러
  function bestRSlide() {
    moveSlides(1); // 다음 페이지로 이동
  }
  
  // 초기화: 첫 번째 페이지의 슬라이드 보이기
  moveSlides(slideIndex);
  
  // 버튼 이벤트 핸들러 등록
  document.querySelector('.best-prev-button').addEventListener('click', bestLSlide);
  document.querySelector('.best-next-button').addEventListener('click', bestRSlide);
});

document.addEventListener('DOMContentLoaded', function () {
  let slideIndex = 0;
  const slidesPerPage = 6; // 한 페이지에 보여질 슬라이드 개수
  
  // 슬라이드 이동 함수
  function moveSlides(n) {
    const slides = document.querySelectorAll('.organization_host');
    const totalPages = Math.ceil(slides.length / slidesPerPage);
    
    // 슬라이드 인덱스 갱신
    slideIndex += n;
  
    // 슬라이드 인덱스가 범위를 벗어나면 처음 또는 마지막 페이지로 이동
    if (slideIndex >= totalPages) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = totalPages - 1;
    }
  
    // 모든 슬라이드 숨기기
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
  
    // 현재 페이지의 슬라이드 보이기
    const startIndex = slideIndex * slidesPerPage;
    const endIndex = Math.min(startIndex + slidesPerPage, slides.length);
    for (let i = startIndex; i < endIndex; i++) {
      slides[i].style.display = 'block';
    }
  }
  
  // 이전 버튼 클릭 이벤트 핸들러
  function orgLSlide() {
    moveSlides(-1); // 이전 페이지로 이동
  }
  
  // 다음 버튼 클릭 이벤트 핸들러
  function orgRSlide() {
    moveSlides(1); // 다음 페이지로 이동
  }
  
  // 초기화: 첫 번째 페이지의 슬라이드 보이기
  moveSlides(slideIndex);
  
  // 버튼 이벤트 핸들러 등록
  document.querySelector('.org-prev-button').addEventListener('click', orgLSlide);
  document.querySelector('.org-next-button').addEventListener('click', orgRSlide);
});

document.addEventListener('DOMContentLoaded', function () {
  const slideContainer = document.querySelector('.six-time_box');
  const slidesPerPage = 3; // 한 페이지에 보여질 사진 개수
  let slideIndex = 0;

  function timeLSlide() {
    moveSlides(-1);
  }

  function timeRSlide() {
    moveSlides(1);
  }

  function moveSlides(n) {
    const slides = slideContainer.querySelectorAll('.time_box');
    const totalSlides = slides.length;
    const totalPages = Math.ceil(totalSlides / slidesPerPage);
    slideIndex += n;
    if (slideIndex >= totalPages) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = totalPages - 1;
    }
    const offset = slideIndex * slidesPerPage;
    slides.forEach((slide, index) => {
      if (index >= offset && index < offset + slidesPerPage) {
        slide.style.display = 'flex'; // 보이도록 설정
      } else {
        slide.style.display = 'none'; // 숨김 처리
      }
    });
  }

  // 초기화
  moveSlides(0);

 
  document.querySelector('.time-prev-button').addEventListener('click', timeLSlide);
  document.querySelector('.time-next-button').addEventListener('click', timeRSlide);
});



function RSlide() {
  var cateContainer2 = document.querySelector('.cate-container2');
  cateContainer2.style.transform = 'translateX(calc(-100% - 10px))';
  document.querySelector('.move-left-button').style.opacity = '1'; 
  document.querySelector('.move-right-button').style.display = 'none'; 
}

function LSlide() {
  var cateContainer2 = document.querySelector('.cate-container2');
  cateContainer2.style.transform = 'translateX(0%)';
  document.querySelector('.move-left-button').style.opacity = '0';
  document.querySelector('.move-right-button').style.display = 'block';
}

