$( document ).ready(function(){

 // event handler for buttons on navigation bar
  $("button").mouseenter(function () {
    $(this).css("text-decoration", "line-through");
    $("button").mouseout(function() {
      $(this).css("text-decoration", "none");
    })
 })
  // event handeler for Logo TB
 $('#travis').on("click", function(e) {
   $(this).hide('explode', {pieces: 30 }, 2000);
    $('#travis').fadeIn( "slow" );
      e.preventDefault();
  });
  $(window).on('scroll', function(){
  var pixs = $(document).scrollTop()
  pixs = pixs / 100
  $('.sky_picture').css({'-webkit-filter': "blur("+pixs+"px)", "filter":
  "blur("+pixs+"px)" })
 });


 // var randomImg = (Math.floor(Math.random()*3))
 //    if (randomImg == 1) {
 //        $('.about-picture').css("background-image","url(img/travis.jpg)");
 //    }
 //    else if (randomImg == 3) {
 //        $('.about-picture').css("background-image","url(img/sky.jpg)");
 //    }
 //    else { (randomImg == 2)
 //        $('.about-picture').css("background-image","url(img/young.jpg)");
 //
 //    }


});
// // $('.email_header').mouseover(function(){
// //   $(this).css("background-color", "red");
// // });
// $( ".email_header" ).mouseover(function() {
// $( "#log" ).append( "<div>Handler for .mouseover() called.</div>" );
// });

 //    $('.thumbnail').hover(function(){
 //     $(this).trigger('slide');
 // }, function(){
 //     $(this).trigger('stoslide');
 // });


 // $('#travis').click(function() {
 //
 // });

// });
 // });
  //   $(".pull-me").click(function(){
  //    $(".panel").slideToggle("slow", 0);
  //  });
  //  $(".pull-me").click(function(){
  //    $(".panel").slidToggle("slow", 0);
  //  });
  //  $("pull-me").click(function(){
  //    $(".panel").slideToggle("slow", 0);
  //  });
