document.addEventListener("DOMContentLoaded", function() {
    // travel-spot-circle 요소
    let travelSpotCircle = document.querySelector(".travel-spot-circle");

    // check-in-square 요소
    let checkInSquare = document.querySelector(".check-in-square");

    // check-out-square 요소
    let checkOutSquare = document.querySelector(".check-out-square");

    // guest-select-circle 요소
    let guestSelectCircle = document.querySelector(".guest-select-circle");

    // full-searchbar-space 요소
    let fullSearchbarSpace = document.querySelector(".full-searchbar-space");

    // 초기 상태를 저장
    let originalBackgroundColor = fullSearchbarSpace.style.backgroundColor;

    let originalCircleBackgroundColor = travelSpotCircle.style.backgroundColor;
    let originalCircleBoxShadow = travelSpotCircle.style.boxShadow;
    let originalCircleBorder = travelSpotCircle.style.border;

    let originalCheckInBackgroundColor = checkInSquare.style.backgroundColor;
    let originalCheckInBoxShadow = checkInSquare.style.boxShadow;
    let originalCheckInBorder = checkInSquare.style.border;

    let originalCheckOutBackgroundColor = checkOutSquare.style.backgroundColor;
    let originalCheckOutBoxShadow = checkOutSquare.style.boxShadow;
    let originalCheckOutBorder = checkOutSquare.style.border;

    let originalGuestSelectBackgroundColor = guestSelectCircle.style.backgroundColor;
    let originalGuestSelectBoxShadow = guestSelectCircle.style.boxShadow;
    let originalGuestSelectBorder = guestSelectCircle.style.border;

    // travel-spot-circle을 클릭했을 때 이벤트 처리
    travelSpotCircle.addEventListener("click", function() {
        // full-searchbar-space의 배경색을 변경합니다.
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";

        // travel-spot-circle의 배경색을 흰색으로 지정
        travelSpotCircle.style.backgroundColor = "#ffffff";
        // travel-spot-circle에 box-shadow와 border를 추가
        travelSpotCircle.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        travelSpotCircle.style.border = "1px solid #e0e0e0";

        // 나머지 요소들의 초기 상태 복원
        checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
        checkInSquare.style.boxShadow = originalCheckInBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
        checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
        checkOutSquare.style.border = originalCheckOutBorder;
        guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
        guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
        guestSelectCircle.style.border = originalGuestSelectBorder;
    });

    // check-in-square을 클릭했을 때 이벤트 처리
    checkInSquare.addEventListener("click", function() {
        // full-searchbar-space의 배경색을 변경합니다.
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";

        checkInSquare.style.backgroundColor = "#ffffff";
        checkInSquare.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        checkInSquare.style.border = "1px solid #e0e0e0";

        // travel-spot-circle의 초기 상태로 복원합니다.
        travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
        travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
        checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
        checkOutSquare.style.border = originalCheckOutBorder;
        guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
        guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
        guestSelectCircle.style.border = originalGuestSelectBorder;
    });

    // check-out-square을 클릭했을 때 이벤트 처리
    checkOutSquare.addEventListener("click", function() {
    // full-searchbar-space의 배경색을 변경합니다.
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";

        checkOutSquare.style.backgroundColor = "#ffffff";
        checkOutSquare.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        checkOutSquare.style.border = "1px solid #e0e0e0";

        // check-out-square의 초기 상태로 복원합니다.
        travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
        travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
        checkInSquare.style.boxShadow = originalCheckInBoxShadow;
        checkInSquare.style.border = originalCheckInBorder;
        guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
        guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
        guestSelectCircle.style.border = originalGuestSelectBorder;
    });

    // guestSelectCircle을 클릭했을 때 이벤트 처리
    guestSelectCircle.addEventListener("click", function() {
    // full-searchbar-space의 배경색을 변경합니다.
        fullSearchbarSpace.style.backgroundColor = "#E6E6E6";

        guestSelectCircle.style.backgroundColor = "#ffffff";
        guestSelectCircle.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        guestSelectCircle.style.border = "1px solid #e0e0e0";

        // check-out-square의 초기 상태로 복원합니다.
        travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
        travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
        travelSpotCircle.style.border = originalCircleBorder;
        checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
        checkInSquare.style.boxShadow = originalCheckInBoxShadow;
        checkInSquare.style.border = originalCheckInBorder;
        checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
        checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
        checkOutSquare.style.border = originalCheckOutBorder;
    });

    // document에 클릭 이벤트 리스너를 추가합니다.
    document.addEventListener("click", function(event) {
        // 클릭된 요소가 travel-spot-circle이나 check-in-square이 아니라면 원래의 상태로 복원합니다.
        if (!event.target.closest(".travel-spot-circle") && !event.target.closest(".check-in-square")
        && !event.target.closest(".check-out-square") && !event.target.closest(".guest-select-circle")
        && !event.target.closest(".local-search-area") && !event.target.closest(".calendar-view-space")
        && !event.target.closest(".guest-control-space")){
            fullSearchbarSpace.style.backgroundColor = originalBackgroundColor;
            travelSpotCircle.style.backgroundColor = originalCircleBackgroundColor;
            travelSpotCircle.style.boxShadow = originalCircleBoxShadow;
            travelSpotCircle.style.border = originalCircleBorder;
            checkInSquare.style.backgroundColor = originalCheckInBackgroundColor;
            checkInSquare.style.boxShadow = originalCheckInBoxShadow;
            checkInSquare.style.border = originalCheckInBorder;
            checkOutSquare.style.backgroundColor = originalCheckOutBackgroundColor;
            checkOutSquare.style.boxShadow = originalCheckOutBoxShadow;
            checkOutSquare.style.border = originalCheckOutBorder;
            guestSelectCircle.style.backgroundColor = originalGuestSelectBackgroundColor;
            guestSelectCircle.style.boxShadow = originalGuestSelectBoxShadow;
            guestSelectCircle.style.border = originalGuestSelectBorder;
        }
    });
});

function showLocalSearchArea() {
  var fullSearchbarSpace = document.querySelector(".full-searchbar-space");
  fullSearchbarSpace.classList.add('active');
}

//여행지 검색 클릭시 이벤트
document.addEventListener("click", function (event) {
    var localSearchArea = document.querySelector(".local-search-area");

    if (event.target.closest(".travel-spot-circle")) {
        localSearchArea.style.display = "block";
    } else if(!event.target.closest(".local-search-area") && !event.target.closest(".travel-spot-circle")) {
        localSearchArea.style.display = "none";
    }
});

//체크인, 체크아웃 클릭시 이벤트
document.addEventListener("click", function(event){
    var calendarViewSpace = document.querySelector(".calendar-view-space");

    if(event.target.closest(".check-in-square") || event.target.closest(".check-out-square")){
        calendarViewSpace.style.display = "block";
    } else if(!event.target.closest(".check-in-square") && !event.target.closest(".calendar-view-space")
    && !event.target.closest(".check-out-square")) {
        calendarViewSpace.style.display = "none";
    }
});

/*
//게스트 선택란 클릭시 이벤트
document.addEventListener("click", function(event){
    var guestControlSpace = document.querySelector(".guest-control-space");

    if(event.target.closest(".guest-select-circle") {
        guestControlSpace.style.display = "block";
    } else if(!event.target.closest(".guest-control-space") && !event.target.closest(".guest-select-circle"){
        guestControlSpace.style.display = "none";
    }
});
*/

//체크인, 아웃 날짜선택 탭 클릭
document.addEventListener('DOMContentLoaded', function() {
            // DOM이 로드된 후에 실행될 코드

            // 각 탭 버튼에 대한 이벤트 리스너 추가
            var dateSelectButton = document.querySelector('.date-select');
            var monthPartButton = document.querySelector('.month-part');
            var flexibleScheduleButton = document.querySelector('.flexible-schedule');

            var tabTitle = document.querySelector(".tab-title");
            var originalBackgroundColor = tabTitle.style.backgroundColor;

            dateSelectButton.addEventListener('click', function() {
                dateSelectButton.style.backgroundColor = "#FFFFFF";
                dateSelectButton.style.border = "1px solid #dddddd";
                monthPartButton.style.backgroundColor = "#E6E6E6";
                monthPartButton.style.border = "none";
                flexibleScheduleButton.style.backgroundColor = "#E6E6E6";
                flexibleScheduleButton.style.border = "none";
            });

            monthPartButton.addEventListener('click', function() {
                monthPartButton.style.backgroundColor = "#FFFFFF";
                monthPartButton.style.border = "1px solid #dddddd";
                dateSelectButton.style.backgroundColor = "#E6E6E6";
                dateSelectButton.style.border = "none";
                flexibleScheduleButton.style.backgroundColor = "#E6E6E6";
                flexibleScheduleButton.style.border = "none";
            });

            flexibleScheduleButton.addEventListener('click', function() {
                flexibleScheduleButton.style.backgroundColor = "#FFFFFF";
                flexibleScheduleButton.style.border = "1px solid #dddddd";
                monthPartButton.style.backgroundColor = "#E6E6E6";
                monthPartButton.style.border = "none";
                dateSelectButton.style.backgroundColor = "#E6E6E6";
                dateSelectButton.style.border = "none";
            });
});

document.addEventListener('DOMContentLoaded', function () {
  var buttonTabOne = document.querySelector('.date-select');
  var buttonTabTwo = document.querySelector('.month-part');
  var buttonTabThree = document.querySelector('.flexible-schedule');

  var tabOneContent = document.querySelector('.tab1');
  var tabTwoContent = document.querySelector('.tab2');
  var tabThreeContent = document.querySelector('.tab3');

  var calendarViewSpace = document.querySelector(".calendar-view-space");

  buttonTabOne.addEventListener("click", function () {
    tabOneContent.style.display = "block"
    tabTwoContent.style.display = "none"
    tabThreeContent.style.display = "none"

    calendarViewSpace.style.height = '';
  });

  buttonTabTwo.addEventListener("click", function () {
    tabTwoContent.style.display = "block"
    tabOneContent.style.display = "none"
    tabThreeContent.style.display = "none"

    calendarViewSpace.style.height = '';
  });

  buttonTabThree.addEventListener("click", function () {
      tabThreeContent.style.display = "block"
      tabOneContent.style.display = "none"
      tabTwoContent.style.display = "none"

      calendarViewSpace.style.height = "480px";
    });
});

//지역 검색 영역 가로 스크롤
document.addEventListener('DOMContentLoaded', function() {
    var landTapList = document.querySelector('.land-tap-list');
    var isMouseDown = false;
    var startX, scrollLeft;

    landTapList.addEventListener('mousedown', function(e) {
        isMouseDown = true;
        startX = e.pageX - landTapList.offsetLeft;
        scrollLeft = landTapList.scrollLeft;
    });

    landTapList.addEventListener('mouseleave', function() {
        isMouseDown = false;
    });

    landTapList.addEventListener('mouseup', function() {
        isMouseDown = false;
    });

    landTapList.addEventListener('mousemove', function(e) {
        if (!isMouseDown) return;
        e.preventDefault();
        var x = e.pageX - landTapList.offsetLeft;
        var walk = (x - startX) * 2;
        landTapList.scrollLeft = scrollLeft - walk;
    });
});


//유연한 일정 영역 가로 스크롤
document.addEventListener('DOMContentLoaded', function() {
    var monthCollection = document.querySelector('.month-collection');
    var isMouseDown = false;
    var startX, scrollLeft;

    monthCollection.addEventListener('mousedown', function(e) {
        isMouseDown = true;
        startX = e.pageX - monthCollection.offsetLeft;
        scrollLeft = monthCollection.scrollLeft;
    });

    monthCollection.addEventListener('mouseleave', function() {
        isMouseDown = false;
    });

    monthCollection.addEventListener('mouseup', function() {
        isMouseDown = false;
    });

    monthCollection.addEventListener('mousemove', function(e) {
        if (!isMouseDown) return;
        e.preventDefault();
        var x = e.pageX - monthCollection.offsetLeft;
        var walk = (x - startX) * 2;
        monthCollection.scrollLeft = scrollLeft - walk;
    });
});

document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll('.land-tap-list button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // 모든 버튼 초기화
      buttons.forEach(function(btn) {
        btn.style.color = ''; // 기본 텍스트 색상으로 초기화
        btn.style.borderBottom = ''; // 기본 border 초기화
        btn.style.fontWeight = ''; // 기본 굵기 초기화
      });

      // 클릭한 버튼 스타일 변경
      button.style.color = '#222222'; // 텍스트 색상 변경
      button.style.fontWeight = "bold";
      button.style.borderBottom = '2px solid #000000'; // border-bottom 스타일 변경
    });
  });
});
