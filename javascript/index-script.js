$(document).ready(function(){

  $(".oclose").click(function() {
    $("#overlay").fadeOut();
    $(".specific-overlay").fadeOut();
  });

  // $("#wrapper").click(function() {
  //   $("#overlay").fadeOut();
  //   $(".specific-overlay").fadeOut();
  // });

  // $("#menubar").click(function() {
  //   $("#overlay").fadeOut();
  //   $(".specific-overlay").fadeOut();
  // });

  $('a[href*=#]').on('click', function(event){
      event.preventDefault();
      $("#wrapper").animate({scrollTop:$(this.hash).offset().top}, 500);
  });

  $('#wrapper').on('scroll', function () {
      $("body").scrollTop($(this).scrollTop());
  });

  $("#p1").click(function() {
    $("#overlay").fadeIn();
    $("#scheme-interp-overlay").fadeIn();
  });

  $("#p3").click(function() {
    $("#overlay").fadeIn();
    $("#database-overlay").fadeIn();
  });

  // $("#p2").click(function() {
  //   $("#overlay").show();
  //   $("#bearmaps-overlay").show();
  // });

  $(".projitem").hover(function(){
    var name = $(this).attr('id')[1];
    $("#o" + name).fadeIn(350);
    $(".overlay-bar").css("width","250px");
    $(".overlay-text").css("right","-15px");
  }, function(){
    var name = $(this).attr('id')[1];
    $("#o" + name).fadeOut(350);
    $(".overlay-bar").css("width","0px");
    $(".overlay-text").css("right","-275px");
  });

  $("#menuabout").css("background", "rgba(255, 255, 255, 0.3)");

  $(document).scroll( function() {

    var value = $("#wrapper").scrollTop();

    $(".menuitem").css("background", "transparent");

    if (value <= $('#about-section').offset().top) {
      $("#menuabout").css("background", "rgba(255, 255, 255, 0.3)");
    } else if (value <= $('#exp-section').offset().top) {
      $("#menuprojects").css("background", "rgba(255, 255, 255, 0.3)");
    } else if (value <= $('#skill-section').offset().top) {
      $("#menuskills").css("background", "rgba(255, 255, 255, 0.3)");
    } else if (value <= $('#project-section').offset().top) {
      $("#menuexp").css("background", "rgba(255, 255, 255, 0.3)");
    } else {
      $("#menucontact").css("background", "rgba(255, 255, 255, 0.3)");
    }

   });


});
