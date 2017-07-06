$( document ).ready(function(){

  $("button").mouseenter(function () {
    $(this).css("text-decoration", "line-through");
    $("button").mouseout(function() {
      $(this).css("text-decoration", "none");
    })
 })
  //   $(".pull-me").click(function(){
  //    $(".panel").slideToggle("slow", 0);
  //  });
  //  $(".pull-me").click(function(){
  //    $(".panel").slidToggle("slow", 0);
  //  });
  //  $("pull-me").click(function(){
  //    $(".panel").slideToggle("slow", 0);
  //  });

})
