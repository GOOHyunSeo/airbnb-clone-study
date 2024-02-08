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

function showReservationDate() {
    //reservation_date 창 열기
    var box2Inboxes = document.querySelector(".boxes_scrollmoving");
    box2Inboxes.classList.add("active");
}

document.addEventListener("click", function (event) {
    var showReservationDate = document.querySelector(".reservation_date");

    if (event.target.closest(".box2_1") || event.target.closest(".box2_2")) {
        showReservationDate.style.display = "block";
    } else if (!event.target.closest(".reservation_date") && !event.target.closest(".box2_1")) {
        showReservationDate.style.display = "none";
    }
});

function closeReservationDate() {
    //reservation_date 창 닫기
    var box2Inboxes = document.querySelector(".boxes_scrollmoving");
    box2Inboxes.classList.add("active");
}

document.addEventListener("click", function (event) {
    var closeReservationDate = document.querySelector(".reservation_date");

    if (event.target.closest(".reservation_close")) {
        closeReservationDate.style.display = "none";
    } else {
    }
});

function showGuestCalcualator() {
    //guest_calculator 창 열기
    var box2Inboxes = document.querySelector(".boxes_scrollmoving");
    box2Inboxes.classList.add("active");
}

document.addEventListener("click", function (event) {
    var showGuestCalcualator = document.querySelector(".guest_calculator");

    if (event.target.closest(".box2_3")) {
        showGuestCalcualator.style.display = "block";
    } else if (!event.target.closest(".guest_calculator")) {
        showGuestCalcualator.style.display = "none";
    }
});

function closeGuestCalcualator() {
    //guest_calculator 창 닫기
    var box2Inboxes = document.querySelector(".boxes_scrollmoving");
    box2Inboxes.classList.add("active");
}

document.addEventListener("click", function (event) {
    var closeGuestCalcualator = document.querySelector(".guest_calculator");

    if (event.target.closest(".guest_close_button")) {
        closeGuestCalcualator.style.display = "none";
    } else {
    }
});
