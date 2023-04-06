$(document).ready(function(){
    // $('.owl-carousel').owlCarousel({
    //     loop:false,
    //     margin:20,
    //     nav:true,
    //     stagePadding: 50,
    //     // autoWidth:true,
    //     // center:true,
    //     URLhashListener:true,
    //     autoplayHoverPause:true,
    //     startPosition: 'URLHash',
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:5
    //         }
    //     }
    // })
    
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:false,
            margin:20,
            nav:false,
            stagePadding: 50,
            // autoWidth:true,
            // center:true,
            URLhashListener:true,
            autoplayHoverPause:true,
            startPosition: 'URLHash',
            responsiveClass:true,
            loop: true,
            // autoplay:true,
            // autoplayTimeout:2000,
            autoplayHoverPause:true,
            // rewind: true,
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:2.5
                },
                768:{
                    items:3
                },
                992:{
                    items:5
                }
            }
            
});

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
  });