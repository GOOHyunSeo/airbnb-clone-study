/*document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {
        var boxesScrollmoving = document.querySelector(".boxes_scrollmoving");
        var initialOffset = boxesScrollmoving.offsetTop;

        window.addEventListener("scroll", function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop >= initialOffset) {
                boxesScrollmoving.style.position = "fixed";
                boxesScrollmoving.style.top = "0";
            } else {
                boxesScrollmoving.style.position = "static";
                boxesScrollmoving.style.top = "auto";
            }
        });
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    var targetElement = document.querySelector(".boxes_scrollmoving");
    var scrollStart = 700; // 특정 스크롤 범위의 시작 값
    var scrollEnd = 2100; // 특정 스크롤 범위의 종료 값

    window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // 특정 스크롤 범위 내에 있는지 확인
        if (scrollTop >= scrollStart && scrollTop <= scrollEnd) {
            // 특정 스크롤 범위 내에서만 스크롤이 허용될 때 수행할 동작
            var newPosition = scrollTop - scrollStart;
            targetElement.style.transform = "translateY(" + newPosition + "px)";
        } else {
            // 특정 스크롤 범위 외에서는 다른 동작을 수행하거나 아무 동작도 하지 않음
        }
    });
});
