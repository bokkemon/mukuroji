$(".myslider").slick(
{
	autoplay:true,
	autoplaySpeed:3000,
	speed:2000,
	dots:true,
	fade:true
}
);

$("div.return").hide();

$(window).scroll(function(){

	var wt=$(this).scrollTop();

	if(wt<500){

		$("div.return").fadeOut();
		}else{
		$("div.return").fadeIn();
	}

});

$("div.return").click(function(){

	$("html,body").animate({

	"scrollTop":$("img#top").offset().top

	},300);

});
