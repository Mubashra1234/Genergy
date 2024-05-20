window.onscroll = function () { scrollFunction() };

var menutop = document.getElementById("header");

function scrollFunction() {

   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {


      menutop.classList.add("menufixcustom");

   } else {


      menutop.classList.remove("menufixcustom");

   }

}



$(document).ready(function () {
   var video1 = document.querySelector(".desktopvideos");
   if (video1) {
      video1.currentTime = 0;
   }

   $(window).on("resize", function (e) {
      checkscreenBanner();
   });

   checkscreenBanner();

   function checkscreenBanner() {
      var newWindowWidth = $(window).width();
      if (newWindowWidth < 767) {
         desktopVideo();
      } else {
         desktopVideo();
      }
   }



   function desktopVideo() {
      // mobilevideo1.pause();
      $(document).on('click', '.playbtn', function () {
         $(this).hide();
         $('.desktopThumbnail').hide();
         video1.play();
      });
      $(".play-bt").hide();
      $(".pause-bt").show();
      if ($(".stop-bt").hasClass("active")) {
         video1.currentTime = 0;
      }
      // $(".tv_video").prop('muted', true);
      // $(".mute-bt").addClass("stop");

      // video1.play();


      // Ended function
      video1.addEventListener('ended', function () {
         $('.desktopThumbnail').show();
         $('.playbtn').show();
         $('#particles-js').show();
         video1.pause();

         $(".play-bt").show();
         $(".pause-bt").hide();
         video1.currentTime = 0;
      }, false);






   }

   // Play video
   $(".play-bt").click(function () {
      $(".play-bt").hide();
      $(".pause-bt").show();
      var ban_video = document.querySelector(".tv_video");
      if ($(".stop-bt").hasClass("active")) {
         ban_video.currentTime = 0;
      }
      ban_video.play();
   });

   // Volume video
   $(".mute-bt").click(function (event) {
      console.log('mute clicked');
      // event.preventDefault();
      if ($(this).hasClass("stop")) {
         $(".tv_video").prop('muted', false);
         $(this).removeClass("stop");
      } else {
         $(".tv_video").prop('muted', true);
         $(this).addClass("stop");
      }
   });
   // Pause video
   $(".pause-bt").click(function () {
      $(".play-bt").show();
      $(".pause-bt").hide();
      $(".pause-bt").addClass("active");
      $(".stop-bt").removeClass("active");
      var ban_video = document.querySelector(".tv_video");
      ban_video.pause();
   });

});

$(document).ready(function () {
   $(window).on("resize", function (e) {
      checkScreenSize();
   });

   checkScreenSize();

   function checkScreenSize() {
      var newWindowWidth = $(window).width();
      if (newWindowWidth < 767) {
         $('.desktopvideos source').attr('src', '');
      } else {
         $('.mobileVide source').attr('src', '');
      }
   }
});

$(document).ready(function () {
   $('.navbar-toggler').click(function () {
      $('#header').toggleClass('bg-grey');
   });
});
$('.testimonials_list .reviews-slider').slick({
   dots: true,
   arrows: true,
   swipeToSlide: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 5000,

   prevArrow: $('.prev'),
   nextArrow: $('.next'),
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
         }
      }
   ]
});




$('.testimonials_list .whyus-slider').slick({
   dots: false,
   arrows: true,
   swipeToSlide: true,
   slidesToShow: 2.5,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 5000,
   infinite: false,

   prevArrow: $('.prev'),
   nextArrow: $('.next'),
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
         }
      }
   ]
});





$('.our-work-btn').on('click', function(evt) {
   evt.preventDefault();
   $('.our-work-btn').removeClass('active');
      $(this).addClass('active');
         var sel = this.getAttribute('data-toggle-target');
   $('.owc-content').removeClass('active').filter(sel).addClass('active');
 });