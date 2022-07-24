 AOS.init({
     duration: 800,
     easing: 'slide'
 });

 (function($) {

     "use strict";

     $(window).stellar({
         responsive: true,
         parallaxBackgrounds: true,
         parallaxElements: true,
         horizontalScrolling: false,
         hideDistantElements: false,
         scrollProperty: 'scroll',
         horizontalOffset: 0,
         verticalOffset: 0
     });

     // Scrollax
     $.Scrollax();


     var fullHeight = function() {

         $('.js-fullheight').css('height', $(window).height());
         $(window).resize(function() {
             $('.js-fullheight').css('height', $(window).height());
         });

     };
     fullHeight();

     // loader
     var loader = function() {
         setTimeout(function() {
             if ($('#ftco-loader').length > 0) {
                 $('#ftco-loader').removeClass('show');
             }
         }, 1);
     };
     loader();

     // Scrollax
     $.Scrollax();

     $('nav .dropdown').hover(function() {
         var $this = $(this);
         // 	 timer;
         // clearTimeout(timer);
         $this.addClass('show');
         $this.find('> a').attr('aria-expanded', true);
         // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
         $this.find('.dropdown-menu').addClass('show');
     }, function() {
         var $this = $(this);
         // timer;
         // timer = setTimeout(function(){
         $this.removeClass('show');
         $this.find('> a').attr('aria-expanded', false);
         // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
         $this.find('.dropdown-menu').removeClass('show');
         // }, 100);
     });

     // scroll
     var scrollWindow = function() {
         $(window).scroll(function() {
             var $w = $(this),
                 st = $w.scrollTop(),
                 navbar = $('.ftco_navbar'),
                 sd = $('.js-scroll-wrap');

             if (st > 150) {
                 if (!navbar.hasClass('scrolled')) {
                     navbar.addClass('scrolled');
                 }
             }
             if (st < 150) {
                 if (navbar.hasClass('scrolled')) {
                     navbar.removeClass('scrolled sleep');
                 }
             }
             if (st > 350) {
                 if (!navbar.hasClass('awake')) {
                     navbar.addClass('awake');
                 }

                 if (sd.length > 0) {
                     sd.addClass('sleep');
                 }
             }
             if (st < 350) {
                 if (navbar.hasClass('awake')) {
                     navbar.removeClass('awake');
                     navbar.addClass('sleep');
                 }
                 if (sd.length > 0) {
                     sd.removeClass('sleep');
                 }
             }
         });
     };
     scrollWindow();

     // navigation
     var OnePageNav = function() {
         $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
             e.preventDefault();

             var hash = this.hash,
                 navToggler = $('.navbar-toggler');
             $('html, body').animate({
                 scrollTop: $(hash).offset().top
             }, 700, 'easeInOutExpo', function() {
                 window.location.hash = hash;
             });


             if (navToggler.is(':visible')) {
                 navToggler.click();
             }
         });
         $('body').on('activate.bs.scrollspy', function() {
             console.log('nice');
         })
     };
     OnePageNav();
     
     new WOW().init();

     $(".jarallax").jarallax({
         speed: 0.1
     });

     const select = (el, all = false) => {
         el = el.trim()
         if (all) {
             return [...document.querySelectorAll(el)]
         } else {
             return document.querySelector(el)
         }
     }

     const on = (type, el, listener, all = false) => {
         let selectEl = select(el, all)
         if (selectEl) {
             if (all) {
                 selectEl.forEach(e => e.addEventListener(type, listener))
             } else {
                 selectEl.addEventListener(type, listener)
             }
         }
     }

     window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function(e) {
                e.preventDefault();
                portfolioFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });

            }, true);

            portfolioIsotope.arrange({
                filter: '.filter-wax'
            });
        }

    });


    $('a[data-fancybox="gallery"]').fancybox({
        buttons: ["close"]
    });

    $('.floatingButton').on('click',
    function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        if ($(this).children('.fas').hasClass('fa-plus')) {
            $(this).children('.fas').removeClass('fa-plus');
            $(this).children('.fas').addClass('fa-times');
        } else if ($(this).children('.fas').hasClass('fa-times')) {
            $(this).children('.fas').removeClass('fa-times');
            $(this).children('.fas').addClass('fa-plus');
        }
        $('.floatingMenu').stop().slideToggle();
    }
);
$(this).on('click', function(e) {

    var container = $(".floatingButton");
    if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0) {
        if (container.hasClass('open')) {
            container.removeClass('open');
        }
        if (container.children('.fas').hasClass('fa-times')) {
            container.children('.fas').removeClass('fa-times');
            container.children('.fas').addClass('fa-plus');
        }
        $('.floatingMenu').hide();
    }

    if (!container.is(e.target) && ($('.floatingMenu').has(e.target).length > 0)) {
        $('.floatingButton').removeClass('open');
        $('.floatingMenu').stop().slideToggle();
    }
});

const floatingButtonWrap = $('.floatingButtonWrap');
$(window).on('scroll', function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        $(floatingButtonWrap).css('opacity', '1');
    } else {
        $(floatingButtonWrap).css('opacity', '0');
    }
});

const scrollTop = $('.scrollTop');
$(window).on('scroll', function(){
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    $(scrollTop).css('display', 'flex');
  } else {
    $(scrollTop).css('display', 'none');
  }
});

$(scrollTop).on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0,
    }, 800);
    return false;
});

 })(jQuery);