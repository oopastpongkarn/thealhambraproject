$(function() {
	// $('article').hide();

	$('nav a').click(function(){

		$('nav a').css('border-bottom', '1px solid transparent');
		$(this).css('border-bottom', '1px solid black');

	});

	$(".triTag a").click(function() {
		$( "#txtLeft" ).load( "/text/"+ $(this).attr('id') +".txt" );
		$(".triTag a").css("background", "none");
		$(this).css("background", "red");
	});


});
