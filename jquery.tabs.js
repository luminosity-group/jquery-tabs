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
                navigation: '.tabs_nav',
                first_tab: 'li:first',

                update_hash: true,
                hash_prefix: 'tab',
                tab_element: 'li'
            };

            var settings = $.extend(true, {}, defaults, options);

            var container            = $(this)
            var navigation_container = $(settings.navigation, container);
            var content_container    = $(settings.content, container);
            var content_items        = $(content_container).children();

            /**
             * Fire the activate_tab method when a navigation item is clicked
             */
            $(settings.tab_element, navigation_container).click(function(e) {
                e.preventDefault();
                activate_tab($(this), settings.update_hash);
            });

            /**
             * Activates a tab
             *
             * tab         - a jQuery Element that represents the tab to activate
             * update_hash - A Boolean value. When true, updates
             *               window.location.hash to the current tab
             */
            var activate_tab = function(tab, update_hash) {
                var id = $(tab).attr('rel');

                $(settings.tab_element, navigation_container).removeClass('active');
                $(tab).addClass('active');

                $(content_items).hide().removeClass('active');
                $(id, content_container).show().addClass('active');

                if (update_hash) {
                    window.location.hash = settings.hash_prefix + '-' + id.replace('#', ''); 
                }
            };

            /* Check if a hash is passed, else default to `settings.first_tab` */
            var element = settings.first_tab, id, selector;
            id       = window.location.hash.replace(settings.hash_prefix + '-', '');
            selector = settings.tab_element + '[rel=' + id + ']';
            element = (id && $(navigation_container).has(selector)) ? selector : element;
            activate_tab($(element, navigation_container), false);
        });
    }
})(jQuery);
