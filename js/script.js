/* 스크롤에 따른 헤더 opacity 변화 */

// window.scroll = function(){

//  var scrollPos = document.documentElement.scrollTop;

//  if (scrollPos == 0) {
//      header.classList.remove('thick');
//  } else {
//      header.classList.add('thick');
//  }
// }

/* 제이쿼리로 nav메뉴 숨기고 모바일 사이즈에서 nav_list_button 입력 시 nav 메뉴 출력 */
// $(document).ready(function (){
//  if(window.innerWidth <= 990){
//      $(".nav").hide();
//      $(".nav_list_button").show();
//  }

//  /* 모바일 네비게이션바 버튼 */
//  $(".nav_list_button").click(function(){
//      $(".nav").slideToggle();
//  });

//  /* 모바일 or 데탑 사이징 별 메뉴  */
//  $(window).resize(function(){
//      if (window.innerWidth >= 991) {
//          $(".nav").show();
//          $(".nav_list_button").hide();
//      } else {
//          $(".nav").hide();
//          $(".nav_list_button").show();
//      }
//  });
// });


/* --------------------------
         이벤트 구현부 
---------------------------*/

/* 
  모바일 메뉴 버튼 클릭 이벤트 함수
*/
function navListBtnClickEvent(){
    let $nav = $(".nav");

    $nav.slideToggle();
}

/* 
 화면 레디 이벤트 함수 
*/
function windowLoadEvent(){

    const winWidth = window.innerWidth;
    let naviBar = document.getElementsByClassName("nav");
    let navListBtn = document.getElementsByClassName("nav_list_button");

    if(winWidth <= 990){
        naviBar[0].style.display = "none";
        navListBtn[0].style.display = "block";

        // 배열값이 1억 5천만개 일경우 멘탈이 나가니까 for문을 돌아서 전부다 block 처리 시킨다.
        // for(var i = 0 ; i < navListBtn.length ; i++){
        //  navListBtn[i].style.display = "block";
        // }
    }

    navListBtn[0].addEventListener("click", navListBtnClickEvent);

    /* 모바일 or 데탑 사이징 별 메뉴  */
    // $(window).resize(function(){
    //  if (winWidth >= 991) {
    //      $(".nav").show();
    //      $(".nav_list_button").hide();
    //  } else {
    //      $(".nav").hide();
    //      $(".nav_list_button").show();
    //  }
    // });

}

function windowResizeEvent(){

    const winWidth = window.innerWidth;
    let naviBar = document.getElementsByClassName("nav");
    let navListBtn = document.getElementsByClassName("nav_list_button");

    if (winWidth >= 991){
        naviBar[0].style.display = "block";
        navListBtn[0].style.display = "none";
    } else {
        naviBar[0].style.display = "none";
        navListBtn[0].style.display = "block";
    }
}

/* 
 화면 스크롤 이벤트 함수 
*/
function windowScrollEvent(){

    var scrollPos = document.documentElement.scrollTop;

    if (scrollPos == 0) {
        header.classList.remove('thick');
    } else {
        header.classList.add('thick');
    }
    
}

/* --------------------------
         이벤트 선언부 
---------------------------*/
window.addEventListener('load', windowLoadEvent);
window.addEventListener('scroll', windowScrollEvent);
window.addEventListener('resize', windowResizeEvent);
