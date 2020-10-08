$( ".filter-block a" ).click(function( event ) {
    event.preventDefault();
});

$(document).ready(function() {
    $('.image_prod_wrap').isotope({
       itemSelector: '.ice'
   });

   $('.filter-block .news a').click(function(){
       $('.filter-block .news a').removeClass('active');
       $(this).addClass('active');
       var selector = $(this).attr('data-filter');

       $('.image_prod_wrap').isotope({
           filter: selector,
           animationOptions: {
               duration: 1000,
               easing: 'easeOutQuart',
               queue: false
           }
       });
       return false;
   });
});

