/* 스크롤에 따른 헤더 opacity 변화 */
window.addEventListener('scroll', function() {
	var scrollPos = document.documentElement.scrollTop;

	if (scrollPos == 0) {
		header.classList.remove('thick');
	} else {
		header.classList.add('thick');
	}
});

/* 제이쿼리로 nav메뉴 숨기고 모바일 사이즈에서 nav_list_button 입력 시 nav 메뉴 출력 */
$(document).ready(function (){
	if(window.innerWidth <= 990){
		$(".nav").hide();
		$(".nav_list_button").show();
	}

	/* 모바일 네비게이션바 버튼 */
	$(".nav_list_button").click(function(){
		$(".nav").slideToggle();
	});

	/* 모바일 or 데탑 사이징 별 메뉴  */
	$(window).resize(function(){
		if (window.innerWidth >= 991) {
			$(".nav").show();
			$(".nav_list_button").hide();
		} else {
			$(".nav").hide();
			$(".nav_list_button").show();
		}
	});
});