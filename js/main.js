$(document).ready(function() {
    $(".owl-carousel-home").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: true,
        margin: 1,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause:true,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    $(".owl-carousel-vfe34").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: true,
        margin: 1,
        autoplay:true,
        autoplayTimeout: 10000,
        autoplayHoverPause:true,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        dotsContainer: '#carousel-custom-dots'
    });

    $('.owl-dot').click(function () {
        $(".owl-carousel-vfe34").trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    $(".owl-carousel-vfe34-slider").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: true,
        margin: 1,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause:true,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

  });

  document.addEventListener("DOMContentLoaded", function(){
    const elmnt = document.getElementById("vfe34-banner");
    if (elmnt !== null) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > elmnt.offsetHeight) {
                document.getElementById('navigation').classList.add('fixed-top');
            } else {
              document.getElementById('navigation').classList.remove('fixed-top');
            } 
        });
    }
  }); 

