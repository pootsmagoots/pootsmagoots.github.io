$( document ).ready(function(){

  $("button").mouseenter(function () {
    $(this).css("text-decoration", "line-through");
    $("button").mouseout(function() {
      $(this).css("text-decoration", "none");
    })
 })
})
