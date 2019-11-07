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
            900:{
                items:3
            },
            1101:{
                items:4
            },
        }
    })

});