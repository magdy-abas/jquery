//left menu

$(".openNav").click(function () {
  $("#leftMenu").animate({ width: "250px" }, 50);
  $("#home-content").animate({ marginLeft: "250px" }, 50);
});

$(".closebtn").click(function () {
  $("#leftMenu").animate({ width: "0px" }, 50);
  $("#home-content").animate({ marginLeft: "0px" }, 50);
});

//scroll menu
$("#leftMenu a").click(function () {
  var sectionId = $(this).attr("href");

  var positionOfSection = $(sectionId).offset().top;

  $("html , body").animate({ scrollTop: positionOfSection });
});

//Accordion

$("#sliderDown .toggle").click(function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

// Countdown
let date = new Date("jul 25, 2024 21:00:00").getTime();
setInterval(function () {
  let now = new Date().getTime();
  let distance = date - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $(".days").text(days);
  $(".hours").text(hours);
  $(".minutes").text(minutes);
  $(".seconds").text(seconds);
}, 1000);

/*textarea*/

$("textarea").keyup(function () {
  let max = 100;
  let length = $(this).val().length;
  let remaining = max - length;
  $("#chars").text(remaining);
});