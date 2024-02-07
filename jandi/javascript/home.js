document.addEventListener("DOMContentLoaded", function() {
    var searchBar = document.querySelector(".search-bar");
    var headerArea = document.querySelector(".header");
    var invisibleSection = document.querySelector(".invisible-section");
    var invisibleSearchBarSpace = document.querySelector(".invisible-search-bar-space");

    var detailElement = document.querySelector(".detail");

    searchBar.addEventListener("click", function() {
            // detail 페이지에서 검색창 클릭하면 header의 높이 변경
            searchBar.style.display = "none";
            headerArea.style.border = "none";
            invisibleSection.style.display = "flex";
            invisibleSearchBarSpace.style.display = "flex";
            detailElement.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
    });

    document.addEventListener("click", function(event) {
            // 클릭된 요소가 검색창 요소가 아니라면 원래의 상태로 복원
            if (!event.target.closest(".invisible-search-bar-space") && !event.target.closest(".header")){
                searchBar.style.display = "flex";
                headerArea.style.border = "1px solid #dddddd";
                invisibleSection.style.display = "none";
                invisibleSearchBarSpace.style.display = "none";
                detailElement.style.backgroundColor = "";
            }
    });
});