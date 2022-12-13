
        //back to top start
        $(document).ready(function() {
            
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('.back-to-top').fadeIn();
                } else {
                    $('.back-to-top').fadeOut();
                }
            });

            $(".back-to-top").click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 50);
                return false;
            });
            
        });
        //back to top end





    //<!-- Section Scroll effects -->

        $(document).ready(function() {
            screenCheck();
        });

        $(window).on('resize', function() {
            screenCheck();
        });

        function applyScroll() {
            $.scrollify({
                section: '.scroll',
                sectionName: 'section-name',
                //standardScrollElements: 'section',
                easing: 'easeOutExpo',
                scrollSpeed: 150,
                offset: 0,
                scrollbars: true,
                setHeights: true,
                overflowScroll: true,
                updateHash: false,
                touchScroll: true,
            });
        }

        function screenCheck() {
            var deviceAgent = navigator.userAgent.toLowerCase();
            var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
            if (agentID || $(window).width() <= 1024) {
                // its mobile screen
                $.scrollify.destroy();
                $('section').removeClass('scroll').removeAttr('style');
                $.scrollify.disable();
            } else {
                // its desktop
                $('section').addClass('scroll');
                applyScroll();
                $.scrollify.enable();
            }
        }
    //<!-- Section Scroll effects -->

    

    //<!-- Spinner -->
        $(window).on('load', function() {
            $(".spining").fadeOut(1000);
        });
    //<!-- Spinner -->




    //<!-- Nav button -->
        $(document).ready(function() {
            $('.navbar-toggler').click(function() {
                if ($('#s1').hasClass('bi-border-width')) {
                    $('#s1').removeClass();
                    $('#s1').addClass(['bi', 'bi-x-lg', 'color1', 'p-30']);
                } else if ($('#s1').hasClass('bi-x-lg')) {
                    $('#s1').removeClass();
                    $('#s1').addClass(['bi', 'bi-border-width', 'color1', 'p-30']);
                }

            });
        });
    //<!-- Nav button end -->



//<!--Number count start-->
$(document).ready(function () {
    $('.count').counterUp({        
    });
});
    //<!--Number count end-->




    //<!-- OwlCarousel script start --> 
        var owl = $('.cus');
        owl.owlCarousel({
            items: 5,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 6000,
            autoplaySpeed: 6000,
            loop: true,
            dots: false,
            responsive:{
                0:{
                    items:3
                },
                600:{
                    items:4
                },
                1000:{
                    items:5
                }
            }
        });
        $('.play').on('click', function() {
            owl.trigger('play.owl.autoplay', [10])
        })
        $('.stop').on('click', function() {
            owl.trigger('stop.owl.autoplay')
        })
    //<!-- OwlCarousel script end -->


    //Navbar color change start
 
    var nav = document.querySelector('nav');

      window.addEventListener('scroll', 
      function () {
        if (window.pageYOffset > 100) 
        {
          nav.classList.add('bg-white');		  
        } 
        else 
        {
          nav.classList.remove('bg-white');
        }
      });

    //Navbar color change end