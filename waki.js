$(function(){
	$('a[href^=#]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
	$('.menu-li').hover(
		function(){
			$(this).animate({
				'font-size': '28px'
			},200);
		},
		function(){
			$(this).animate({
				'font-size':'20px'
			},100);
		}
	);

});
