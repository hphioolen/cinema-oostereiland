// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// GSAP nog experimenteel. Nog inladen in aparte branch

export default {
  init() {
    // JavaScript to be fired on all pages

    // Back to top pijltje, scroll naar boven
    if ($('#back-to-top').length) {
      var scrollTrigger = 100, // px
      backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
              $('#back-to-top').addClass('show');
          } else {
              $('#back-to-top').removeClass('show');
          }
      };
      backToTop();
      $(window).on('scroll', function () {
          backToTop();
      });
      $('#back-to-top').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0,
          }, 700);
      });
    }

    // if ($('.nav-top').length) {
    //   var menuscrollTrigger = 250, // px
    //   hideShowMenu = function () {
    //       var scrollTop = $(window).scrollTop();
    //       if (scrollTop > menuscrollTrigger) {
    //           $('.nav-top').addClass('hide');
    //           $('.brand').addClass('small');
    //           $('.site-header').addClass('collapsed');  
    //       } else {
    //           $('.nav-top').removeClass('hide');
    //           $('.brand').removeClass('small');
    //           $('.site-header').removeClass('collapsed');
    //       }
    //   };
    //   $(window).on('scroll', function () {
    //       hideShowMenu();
    //   });
    // }



    $('#search-open').click( function(){
      $('#search').addClass('active');
    }),
    $('#search-close').click( function(){
      $('#search').removeClass('active');
    }),

    $( 'button.hamburger' ).click(function() {
      $( this ).toggleClass('is-active');
      $('.mobile-navigation-container').toggleClass('open');
      $('.mobile-navigation-container').toggleClass('closed');

      $('.mobile-navigation-overlay').toggleClass('open');
      $('.mobile-navigation-overlay').toggleClass('closed');
    });


    // accordion navigatie op mobiel
    // http://cssmenumaker.com/blog/wordpress-accordion-menu-tutorial/
    
    $('#cssmenu li.has-sub>a').on('click', function(){
      // var href = $(this).attr('href'); 
      // $(this). attr('data-href', href);
      $(this).removeAttr('href');
      $(this).children('.link_text').prepend('<a>');

      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        // var dataHref = $(this).attr('data-href'); 
        // $(this). attr('href', dataHref);
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp();
      }
      else {
        element.addClass('open');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp();
      }
      //$(this). attr('href', href);
    });
  
    $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');  

    // nog een keer voor de Footer:
    $('#mobilefootermenu li.has-sub>a').on('click', function(){
      // var href = $(this).attr('href'); 
      // $(this). attr('data-href', href);
      $(this).removeAttr('href');
      $(this).children('.link_text').prepend('<a>');

      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        // var dataHref = $(this).attr('data-href'); 
        // $(this). attr('href', dataHref);
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp();
      }
      else {
        element.addClass('open');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp();
      }
      //$(this). attr('href', href);
    });
  
    $('#mobilefootermenu>ul>li.has-sub>a').append('<span class="holder"></span>');  

    //open en sluit 
    $('#Trigger').click(function () {
      $('#offerte-slider').toggleClass('slidedown slideup');
    });

    //gsap animaties:
   /**
    * Effectten hierin worden getriggerd door diverse classes binnen diverse (standaard) blokken
    * Door patronen en blokstyles aan te maken kunnen we dat combineren met effecten.
    * Kijk op GSAP https://greensock.com/ voor animatie methoden
    * 
    * 1. overlappende teksten in kolommen worden geanimeerd
    * 2. elementen laten invliegen Zeker nog werk aan de winkel!! 
    * 3. pin een sidebar
    * 
    * 
    * */ 

    // 1. Overlappende afbeeldingen met tekst.
    // ToDo moet nog een 'For Each' worden. Nu gaan 2 dezelfde elementen tegelijk. Zie mogelijk het volgende effect.
    // gsap.to('.is-style-indrukwekkend-columns-overlap .has-goud-background-color', {
    //   yPercent: -100,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.is-style-indrukwekkend-columns-overlap',
    //     // start: 'top bottom', // the default values
    //     // end: 'bottom top',
    //     scrub: true,
    //   }, 
    // });
    
    // gsap.to('.is-style-indrukwekkend-columns-overlap .right-image', {
    //   yPercent: 50,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.is-style-indrukwekkend-columns-overlap',
    //     // start: 'top bottom', // the default values
    //     // end: 'bottom top',
    //     scrub: true,
    //   }, 
    // });

    // 2. Image tekst effect
    // https://codepen.io/GreenSock/pen/pojzxwZ
    // Todo: /normaal/patronen/
      
      // gsap.utils.toArray('.gs_reveal').forEach(function(elem) {
      //   hide(elem); // assure that the element is hidden when scrolled into view, ?
        
      //   ScrollTrigger.create({
      //     trigger: elem,
      //     start: 'top center',
      //     end: 'bottom 200',
      //     markers: true,
      //     onEnter: function() { animateFrom(elem) }, 
      //     onEnterBack: function() { animateFrom(elem, -1) },

      //     // deze moet weer terug :
      //     onLeave: function() { hide(elem) }, // assure that the element is hidden when scrolled into view
      //     onLeaveBack: function() { hide(elem) }, // assure that the element is hidden when scrolled into view
      //   });
      // });

      // //3. trigger voor de 'pinned sidebar'
      // ScrollTrigger.create({
      //   trigger: '.indrukwekkend-content',
      //   start: 'top 150px',
      //   markers: true,
      //   // pin for the difference in heights between the content and the sidebar
      //   end: self => '+=' + (document.querySelector('.indrukwekkend-content').offsetHeight -  self.pin.offsetHeight),
      //  // end: document.querySelector('.indrukwekkend-content').offsetHeight,
      //   pin: '.indrukwekkend-pin',
      //   // before version 3.4.1, the 'float' property wasn't copied to the pin-spacer, so we manually do it here. Could do it in a style sheet instead if you prefer. 
      //  //onRefresh: self => self.pin.parentNode.style.float = 'left',
      //   pinSpacing: false,
      // });

            // pak alle sliders op de filmpagina op, in 1 array.
            const sliders = document.querySelectorAll('.festival-films')
            //Met alle sliders:
            sliders.forEach(slider => {
              const slidesToShow = 4;
              console.log(slidesToShow);
      
              const slick = slider.querySelectorAll('.slider')
              $(slick).slick( {
      
              
                // normal options...
                infinite: true,
                slidesToShow: slidesToShow,
                slidesToScroll: 1,
              
                // the magic
                responsive: [ {
              
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: slidesToShow -1,
                  },
              
                // }, {
              
                // 	breakpoint: 600,
                // 	settings: {
                // 		slidesToShow: 2,
                // 		dots: true,
                // 	},
              
                // }, {
              
                // 	breakpoint: 300,
                // 	settings: 'unslick', // destroys slick
              
                } ],
              } );
      
            });


    const buttons = document.querySelectorAll('.bestellen');
   
      //Met alle buttons:
      buttons.forEach(button => {  
        button.addEventListener('click', openOverlay);
      });

  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};

const ticketOverlay = document.querySelector('#tickets-overlay');
const closeButton = document.querySelector('.close-btn');
const body = document.querySelector('body');
const getRef = document.getElementById('tickets-iframe-holder');


closeButton.addEventListener('click', () => {
  ticketOverlay.classList.remove('active');
  body.classList.remove('stop-scroll');
});

function openOverlay(e) {
  //stop klikken en toevoegen classes
  e.preventDefault;
  ticketOverlay.classList.add('active');
  body.classList.add('stop-scroll');

  // Haal de informatie op om de juiste Target toe te voegen aan de iframe:
  var el = e.target;
  var index = el.dataset.nummer;

  var makeIframe = document.createElement('iframe');
  makeIframe.setAttribute('src', 'https://tickets.cinemaoostereiland.nl/shop/tickets.php?showid='+index);
  makeIframe.setAttribute('scrolling', 'yes');
  makeIframe.style.border = 'none';
  makeIframe.style.maxWidth = '865px';
  makeIframe.style.height = '1529px';

  getRef.innerHTML = '';
  getRef.appendChild(makeIframe);

}
