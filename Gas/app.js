$(function() {

  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.height();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function() {

    scrollPos = $(this).scrollTop();

    if (scrollPos + 100 > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }

  });

  header.addClass("fixed");


  // smooth scroll
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top; 

    $("html, body").animate({
      scrollTop: elementOffset - 115
    })
  });


  //modal 

  $( ".btn" ).click(function() {

    if ( $(this).parents(".goods__container_items_card").find(".modal").css("display") === "block" ) {
      $(this).parents(".goods__container_items_card").find(".modal").css("display", "none");
    } else {
      $(this).parents(".goods__container_items_card").find(".modal").css("display", "block");
    }

  });

  $( ".close" ).click(function() {

    $(this).parents(".modal").css("display", "none");

  });



  //slider
  let slider = $("#slider");

  slider.slick({
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    dots: true
  });

});
