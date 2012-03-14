/*
 ** LUM TABS - version 2.3, Authored by Richard Summerhayes for Luminosity Group - www.luminosity-group.com
 2.3 removed FadeDown, now using relative tab content, removed JS animating height of tab
 2.2 added obj context so that multiple tabs can go on one page
 2.1 added IE fallback to display none/block, and Iframe clearing
 */

(function($){
        $.fn.extend({
                lumTabs: function(options) {
                    var defaults = {tabTargetHeight: 400,tabFooterPadding: 40};
                    var options = $.extend(defaults, options);

                    return this.each(function() 
                    {
                        var o = options;
                        var obj = $(this);
                        var tabTargetHeight = o.tabTargetHeight;
                        var tabFooterPadding = o.tabFooterPadding;

                        //When page loads...
                        $(".tab_content",obj).hide(); //Hide all content
                        $("ul.tabs > li:first",obj).addClass("active first"); //Activate first tab
                        $("ul.tabs > li:last",obj).addClass("last"); //Setup last tab
                        $(".tab_content:first",obj).show().addClass('open'); //Show first tab content


                        //On Click Event
                        $("ul.tabs > li",obj).live('click', function() {

                            if(!$(this).hasClass('active')) {

                                //TAKE CARE OF TAB of decent Browsers
                                $("ul.tabs > li",obj).removeClass("active"); //Remove any "active" class
                                $(this).addClass("active"); //Add "active" class to selected tab
                                //TAKE CARE OF THE CONTENT
                                $(".tab_container").css({ height: $(".tab_container").outerHeight(true) });
                                $(".tab_content",obj).hide().removeClass('open'); //Hide all tab content
                                $(".tab_content iframe",obj).css('display', 'none');
                                var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
                                $(activeTab).find('iframe').css('display', 'block');
                                $(activeTab).fadeTo('fast', 1).css('zIndex', 100).addClass('open'); //Fade in the active ID content
                                $(".tab_container").css('height', 'auto' );

                            }//end of active test IF
                            return false;
                        });             
                    });//end of return function
                }//end of lumTabs
        });
})(jQuery);
