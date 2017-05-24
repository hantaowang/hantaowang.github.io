$(document).ready(function(){

  $('a[href*=#]').on('click', function(event){
      event.preventDefault();
      $("#wrapper").animate({scrollTop:$(this.hash).offset().top}, 500);
  });

  $('#wrapper').on('scroll', function () {
      $("body").scrollTop($(this).scrollTop());
  });

  if ($(window).width() < 1100) {
    $('#contact').css("top", "3400px");
  } else {
    $('#contact').css("top", "2700px");
  }

  $( window ).resize(function() {

  if ($(window).width() < 1100) {
    $('#contact').css("top", "3400px");
  } else {
    $('#contact').css("top", "2700px");
  }})

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

    var value = $("#wrapper").scrollTop() + 200;

    $(".menuitem").css("background", "transparent");

    if (value <= $('#top-section').position().top + 2 * $('#top-section').outerHeight(true)) {
      $("#menuabout").css("background", "rgba(255, 255, 255, 0.3)");
    } else if (value <= $('#exp-section').position().top + $('#exp-section').outerHeight(true)) {
      $("#menuprojects").css("background", "rgba(255, 255, 255, 0.3)");
    } else if (value <= $('#skill-section').position().top + $('#skill-section').outerHeight(true)) {
      $("#menuskills").css("background", "rgba(255, 255, 255, 0.3)");
    } else if (value <= $('#project-section').position().top + $('#project-section').outerHeight(true)) {
      $("#menuexp").css("background", "rgba(255, 255, 255, 0.3)");
    } else {
      $("#menucontact").css("background", "rgba(255, 255, 255, 0.3)");
    }

   });


});
