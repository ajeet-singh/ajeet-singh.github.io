$(function() {

  // left navigation
  $('.m-navigation .mobile #menu-btn').on('click', function() {
    $('.main-navigation').addClass('open');

  })

  $('.m-navigation .close').on('click', function() {
    $('.main-navigation').removeClass('open');
  })

  // search
  $('.search').on('click', function() {
    $('.user-navigation').toggleClass('open');
    $('.user-navigation.open').fadeIn('');
  });

  // hover infographics
  $('.infographics div.lost').hover( function(){ 
    $('h2.h2-lost').addClass('block');
    $('h2.h2-entry').addClass('nodisplay'); 
    $('h2.h2-entry').removeClass('block') 
  },
    function(){ 
    $('h2.h2-lost').removeClass('block'),
    $('h2.h2-entry').addClass('block'); 
    $('h2.h2-entry').removeClass('nodisplay')    
  });

  // infographics

    var $window = $(window);
        function checkWidth() {
        if ($window.width() < 991) {
            $('.infographics').removeClass('infographics').addClass('infographics-mobile');
            };
        if ($window.width() >= 992) {
            $('.infographics').removeClass('infographics-mobile').addClass('infographics');
        }
    }
    checkWidth();
       $(window).resize(checkWidth);

  // bootstrap custom carousel
  $('#myCarousel').carousel({
    interval: 4000
  })

    $('.carousel .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<4;i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
      }
    });


    
});