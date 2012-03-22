;(function($) {
    /*
     * Simple tabs plugin for jquery
     * Version 0.0.1
     *
     * Copyright (c) 2012 Luminosity Group
     */
    $.fn.tabs = function(options) {
        return this.each(function() {
            
            /* Default settings */
            var defaults = {
                /* Selectors */
                content: '.tabs_content',
                navigation: '.tabs_nav'
            };

            var settings = $.extend(true, {}, defaults, options);

            var container            = $(this)
            var navigation_container = $(settings.navigation, container);
            var content_container    = $(settings.content, container);
            var content_items        = $(content_container).children();

            $('li a', navigation_container).click(function() {
                activate_tab($(this).closest('li'));
            });

            var activate_tab = function(tab) {
                var id = $('a', tab).attr('href');

                $('li', navigation_container).hide();
                $(tab).show().addClass('active');

                $(content_items).hide();
                $(id, content_container).show().addClass('active');

                window.location.hash = 'tab-' + id.replace('#', ''); 
            };

            activate_tab($('li:first', navigation_container))
        });
    }
})(jQuery);
