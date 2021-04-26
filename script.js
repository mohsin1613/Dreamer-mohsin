$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass("narrow");
        }
        else {
            $('.navbar').removeClass("narrow");
        }

        if(this.scrollY >500)
        {
         $(".scroll-up-btn").addClass("show");   
        }
        else{
            $(".scroll-up-btn").removeClass("show");  
        }
    });


    // slide up script

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });


     //toggling the menu bar.
     $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass('active');
     });


    //typing animation ..
    var typed=new Typed(".typing",{
         strings: ["Learner","Software Development Enthusiastic","Web Designer","Flutter Developer","Machine Learing Researcher"],
         typeSpeed:100,
         backSpeed:60,
         loop: true
    });
    
    var typed=new Typed(".typing-2",{
        strings: ["Learner","Software Developer","Enthusiastic","Web Designer","Flutter Developer","Machine Learing Researcher"],
        typeSpeed:100,
        backSpeed:60,
        loop: true
   });



     //owl carousel scripts

     $('.carousel').owlCarousel({
      margin:15,
      loop:true,
      autoplayTimeOut:2000,
      autoplayHoverPause:true,
      responsive: {
       0:{
           items:1,
           nav:false
       },
       600:{
           items:2,
           nav:false
       },
       800:{
           items:3,
           nav:false
       }
       
      }

     });

    //Array of images which you want to show: Use path you want.
    var images=new Array('image/fantacy.jpg','image/d1.jpg','image/d4.webp','image/d5.jpg','image/d6.webp','image/d8.webp','image/d9.jpg','image/d11.webp');
    var nextimage=0;
    doSlideshow();
    
    function doSlideshow(){
        if(nextimage>=images.length){nextimage=0;}
        $('.home')
        .css('background-image','url("'+images[nextimage++]+'")')
        .fadeIn(500,function(){
            setTimeout(doSlideshow,3000);
        });
    }


}); 