(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 100) {
                $('a').fadeIn(500);
            } else {
                $('a').fadeOut(500);
            }
        });
    });
})(jQuery);