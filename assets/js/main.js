(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {




        //------------ Hero slider -------------

        $('.hero-slier-main').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dot: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })



        //---owl dots number-----
        
        var i = 1;
        
        $('.hero-slier-main.owl-carousel .owl-dot').each(function () {
            $(this).text(i);
            i++;
        });





    }); //---document-ready-----





}(jQuery));
