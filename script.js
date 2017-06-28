$( document ).ready(function(){

  $("button").mouseenter(function () {
    $(this).css("text-decoration", "line-through");
    $("button").mouseout(function() {
      $(this).css("text-decoration", "none");
    })
 })
 /* just to see boxes in "dev mode" */
// $('.dev').on('click', function(){
//   $('.part').toggleClass('devmode');
//   return false;
// });

})
