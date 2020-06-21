(function($){
    $(document).ready(function(){
            $('#navigation').slicknav({
                label: '',
                prependTo:'.responsive_menu_slicknav'
        });
        $(window).on('scroll',function(){
            if ($(this).scrollTop()>100){
                $('.header_area').addClass('header_bg');
            }else{
                $('.header_area').removeClass('header_bg');
            }
        })
        
    });
    
    $(window).on('load',function(){
          $('.preloader').fadeOut(2000);
        });
})(jQuery);