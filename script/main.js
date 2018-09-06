$(function() {

  $('img[src$=".svg"]').each(function() {

    let $img = $(this);
    let imgID = $img.attr('id');
    let imgClass = $img.attr('class');
    let imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      let $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');

  });

  // initialization
  // 1. add main article
  // 2. reset style
  $('#primarytxt').load('text/primary_translation.html');
  $('#translation_btn').css({
//    'border-bottom': '1px solid black',
    'font-weight': '600'
  });

  // primary text trigger
  $('nav a').click(function(e) {
    e.preventDefault();
    $('nav a').css({
      'border-bottom': '1px solid transparent',
      'font-weight': '100'
    });
    $(this).css({
//      'border-bottom': '1px solid black',
      'font-weight': '600'
    });

    let path = $(this).attr('href');
    $('#primarytxt').load('text/' + path + '.html');
  });

  $(".svg").click(function() {
    e.preventDefault();
    console.log("bang");
    $("#secondarytxt").load("/links/" + $(this).attr('href') + ".html");
		// change the svg fill color in active state
  });


});
