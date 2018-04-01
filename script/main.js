$(function() {

	// initialization
	// 1. add main article
	// 2. reset style
	$('#primarytxt').load('text/primary_translation.html');
		$('#secondarytxt').load('text/primary_translation.html');
	$('#translation_btn').css({
			'border-bottom': '1px solid black',
			'font-weight': '600'
			});

	// primary text trigger
	$('nav a').click(function(e){
		e.preventDefault();
		$("#primarytxt").hide();
		$('nav a').css({
			'border-bottom': '1px solid transparent',
			'font-weight': '100'
			});
		$(this).css({
			'border-bottom': '1px solid black',
			'font-weight': '600'
			});

    	let path = $(this).attr('href');
		$('#primarytxt').load('text/' + path +'.html');

		$("html, body").stop().animate({scrollTop:0}, 500);
		$("#primarytxt").fadeIn(1000);
	});

	$(".triTag a").click(function() {
		$( "#txtLeft" ).load( "/text/"+ $(this).attr('id') +".txt" );
		$(".triTag a").css("background", "none");
		$(this).css("background", "red");
	});
});
