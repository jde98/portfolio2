$(document).on('scroll', function() {
	if($(document).scrollTop()>100) {
		$('header').removeClass('pale').addClass('thick');
	} else {
		$('header').removeClass('thick').addClass('pale');
	}
});