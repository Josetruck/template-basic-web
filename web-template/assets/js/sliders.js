const $ = window.$;

/* //slider get interested
$('.section-get_interested .slider').not('.slick-initialized').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    customPaging: function(slick, index) {
        return `<a class="page-number" role="tab"></a>`;
    },
    responsive: [{
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}); */


/* $('.section-theprogram .section-slider--images').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    const slides = slick.slideCount

    //$('.section-theprogram .section-slider--cards').slick('slickGoTo', nextSlide);
    if (Math.abs(currentSlide - nextSlide) == 1) {
        if (currentSlide < nextSlide) $('.section-theprogram .section-slider--cards').slick('slickNext');
        else if (currentSlide > nextSlide) $('.section-theprogram .section-slider--cards').slick('slickPrev');
    }
    else {
        if (currentSlide == 0 && nextSlide == slides - 1) {
            $('.section-theprogram .section-slider--cards').slick('slickPrev');
        }
        else if (currentSlide == slides - 1 && nextSlide == 0) {
            $('.section-theprogram .section-slider--cards').slick('slickNext');
        }
        else {
            $('.section-theprogram .section-slider--cards').slick('slickGoTo', nextSlide);
        }

    }
}); */

/* $(window).on('resize', function() {
    $('.section-get_interested .slider').slick('resize');
    $('.section-people .people-slider').slick('resize');
    $('.section-slider_image .slider_image').slick('resize');
});
 */