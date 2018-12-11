$(document).ready(function(){
     var scrollLink = $('.scroll');
     //smooth scrolling
     scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        },1000);
     });
     //active link switching
     $(window).scroll(function(){
         var scrollbarLocation = $(this).scrollTop();
        // console.log(scrollbarLocation);
        scrollLink.each(function(){
          var sectionOffset = $(this.hash).offset().top - 20;  
          if(sectionOffset<=scrollbarLocation){
              $(this).parent().addClass('active');
              $(this).parent().siblings().removeClass('active');
          }
        });
     });
});