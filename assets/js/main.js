$('.slider_for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: false,
  asNavFor: '.slider_nav'
});

$('.slider_nav').slick({
  infinite: false,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider_for',
  responsive: [

    {
      breakpoint: 320,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider_catal').slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [

    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
