document.addEventListener("DOMContentLoaded", function () {
  var searchBar = document.querySelector(".search-bar");
  var headerArea = document.querySelector(".header");
  var invisibleSection = document.querySelector(".invisible-section");
  var invisibleSearchBarSpace = document.querySelector(
    ".invisible-search-bar-space"
  );

  var detailElement = document.querySelector(".detail");

  searchBar.addEventListener("click", function () {
    // detail 페이지에서 검색창 클릭하면 header의 높이 변경
    searchBar.style.display = "none";
    headerArea.style.border = "none";
    invisibleSection.style.display = "flex";
    invisibleSearchBarSpace.style.display = "flex";
    detailElement.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
  });

  document.addEventListener("click", function (event) {
    // 클릭된 요소가 검색창 요소가 아니라면 원래의 상태로 복원
    if (
      !event.target.closest(".invisible-search-bar-space") &&
      !event.target.closest(".header")
    ) {
      searchBar.style.display = "flex";
      headerArea.style.border = "1px solid #dddddd";
      invisibleSection.style.display = "none";
      invisibleSearchBarSpace.style.display = "none";
      detailElement.style.backgroundColor = "";
    }
  });
});

// 카테코리 적용 Js
//jQuery 사용
(function ($) {
  $("#category").on("scroll", function () {
    // 스크롤 위치 값 저장
    $val = $(this).scrollLeft();

    // 오른쪽 스크롤 버튼을 숨기거나 표시하는 조건문
    if (
      $(this).scrollLeft() + $(this).outerWidth() + 1 >=
      $(this)[0].scrollWidth
    ) {
      $(".moveScrollRight").fadeOut(); // 스크롤이 끝에 도달하면 오른쪽 버튼 숨김
    } else {
      $(".moveScrollRight").fadeIn(); // 그렇지 않으면 오른쪽 버튼 표시
    }
    // 왼쪽 스크롤 버턴을 숨기거나 표시하는 조건문
    if ($val == 0) {
      $(".moveScrollLeft").fadeOut(); // 스크로링 시작 위치에 있으면 왼쪽 버튼 숨김
    } else {
      $(".moveScrollLeft").fadeIn(); // 그렇지 않으면 왼쪽 버튼 표시
    }
  });

  //초기 스크롤 위치 로깅
  console.log("init-scroll: " + $(".moveScrollRight").scrollLeft());
  $(".moveScrollRight").on("click", function () {
    $("#category").animate(
      {
        scrollLeft: "+=400",
      },
      500
    );
  });
  $(".moveScrollLeft").on("click", function () {
    $("#category").animate(
      {
        scrollLeft: "-=400",
      },
      500
    );
  });
})(jQuery);
