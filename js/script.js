/* 머시기 */
window.addEventListener('scroll', function() {
	var scrollPos = document.documentElement.scrollTop;

	if (scrollPos == 0) {
		header.classList.remove('thick');
	} else {
		header.classList.add('thick');
	}
});

/* 거시기 */
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