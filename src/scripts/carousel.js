$('.carousel').slick({
    dots: true,
    infinite: false,
    speed: 700,
    arrows: true,
    centerPadding: '20px',
    slidesToShow: 5.5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "5px",
          slidesToShow: 1,
          slidesToScroll: 3
        }
      }
      
    ]
  });