$(document).ready(function(){

    // $("#p1").click(function() {
    //   $("#overlay").fadeIn();
    //   $("#scheme-interp-overlay").fadeIn();
    // });
    //
    // $("#p3").click(function() {
    //   $("#overlay").fadeIn();
    //   $("#database-overlay").fadeIn();
    // });

    // $("#p2").click(function() {
    //   $("#overlay").show();
    //   $("#bearmaps-overlay").show();
    // });

    $("#wrapper").on("scroll", function() {
      $("body").scrollTop($(this).scrollTop());
    });

    // $(".oclose").click(function() {
    //   $("#overlay").fadeOut();
    //   $(".specific-overlay").fadeOut();
    // });


});
