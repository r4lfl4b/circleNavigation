// jQuery-circleNav - v1.0

;(function ($, window, document, undefined) {

    // Plugin definition
    $.fn.circleNav = function (options) {

        // Default settings
        var settings = $.extend({}, $.fn.circleNav.settings, options);

        // Plugin code
        return this.each( function () {
            var $container = $(this); /* Navigation container: #circle-nav-wrapper */
            var $toggle = $('.circle-nav-toggle');
            var $panel = $('.circle-nav-panel');
            var $menu = $('.circle-nav-menu');
            // breakpointChk();

            // Overlay
            if (settings.overlay) {
                if ($('.circle-nav-overlay').length == 0) {
                    $('body').append("<div class='circle-nav-overlay'></div>");
                    $(".circle-nav-overlay").css({
                        "top": "0",
                        "right": "0",
                        "bottom": "0",
                        "left": "0",
                        "position": "fixed",
                        "background-color": settings.overlayColor,
                        "opacity": settings.overlayOpacity,
                        "z-index": "-1",
                        "display": "none"
                    });
                }
            }

            // Toggle click event
            $('.circle-nav-toggle, .circle-nav-overlay').on('click', function () {
                $container.stop().toggleClass('circle-nav-open');
                $toggle.stop().toggleClass('circle-nav-open');
                $panel.stop().toggleClass('circle-nav-open');
                $menu.stop().toggleClass('circle-nav-open');
                $('.circle-nav-overlay').fadeToggle();
                
                if ( $('body').css("overflow") ) {
                    $('body, html').css("overflow", "");
                } else {
                    $('body, html').css("overflow", "hidden");
                }
            });

            
            // OnResize Events
            // var resizeTimer;
            // $(window).resize(function () {
            //     clearTimeout(resizeTimer);
            //     resizeTimer = setTimeout(function () {
            //         breakpointChk();
            //     }, 500);
            // });


            /** Functions **/

            // Checks screen size
            // function breakpointChk() {
            //     if ($toggle.is(":visible")) {
            //         isBreakpoint = true;
            //     } else {
            //         isBreakpoint = false;
            //     }
            // }
            
        });
    };

    // Default settings
    $.fn.circleNav.settings = {
        overlay: true,
        overlayColor: "#fff",
        overlayOpacity: ".7"
    };

})(jQuery, window, document);

