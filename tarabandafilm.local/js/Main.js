$(window).on('load', function () {
    var $preloader = $('#p_prldr');
    $preloader.delay(500).fadeOut(200);
});

$(function() {
	$(window).scroll(function() {
	 
	if($(this).scrollTop() != 0) {
	$('#toTop').fadeIn();
	 
	} else {
 	$('#toTop').fadeOut();
}
 
});
 
$('#toTop').click(function() {
 $('body,html').animate({scrollTop:0},500);
 
});
 
});