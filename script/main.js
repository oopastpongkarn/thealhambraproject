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
  // 1. load articles in both columns
  // 2. reset style
  $('#primarytxt').load('text/primary_translation.html');
  $('#secondarytxt').load('text/bio.html');

  $('#translation_btn').css({
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
      'font-weight': '600'
    });

    let path = $(this).attr('href');
    $("#primarytxt").stop().animate({scrollTop:0}, 500);
    $('#primarytxt').load('text/' + path + '.html');
    $("#primarytxt").fadeIn(1000);
    // issue: fading isn't working
  });



  // Triangles active state
  $(".triTag").click(function(e) {
    $('.triTag a[href="1"]').css({
      'animation':'none'
    });
    // reset all the tags
    $(".triTag").css({
      'filter': 'blur(0)',
      'transition': '1s'
    });
    e.preventDefault();
    console.log("bang");

		// blur the tri in active states
    $(this).css({
      'filter': 'blur(5px)',
      'transition': '1s'
    });
  });

  // Load Bio when click on the title
  $("h1").click(function(){
    $('#secondarytxt').load('text/bio.html');
  });

  // // scroll indicator
  // let scrollHeight  = $('#secondarytxt article:first-child').height();
  // console.log(scrollHeight);
  //
  // $('#secondarytxt').on('scroll', function () {
  //     let scrollTop     = $('#secondarytxt').scrollTop(),
  //         elementOffset = $('#secondarytxt').offset().top,
  //         distance      = elementOffset - scrollTop;
  //
  //         let scrolled = (distance / scrollHeight) * 100;
  //
  //         document.getElementById("myBar").style.width = scrolled + "%";
  // });

});
