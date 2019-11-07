$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin:10,
        nav:true,
        navClass:['slider__butt-left','slider__butt-rigth'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1100:{
                items:4
            },
        }
    })

});