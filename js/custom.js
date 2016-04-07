/**
 * http://kopatheme.com
 * Copyright (c) 2015 Kopatheme
 *
 * Licensed under the GPL license:
 *  http://www.gnu.org/licenses/gpl.html
  **/

/**
 *  1.  top Menu
    2.  Main Menu
    3.  Mobile-menu
    4.  Accordion
    5.  Toggle
    6.  Validate Form
    7.  Google Map
    8.  Progress bar
    9.  Match height
    10. Scroll to top
    11. Owl Carousel
    12. Masonry
    13. Bottom-area
    14. Wookmark
    15. Toggle Search Box
    16. Fitvid

    
    

 *-----------------------------------------------------------------
 **/
 
"use strict";

jQuery(document).ready(function() {

var kopa_variable = {
    "contact": {
        "address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "marker": "/url image"
    },
    "i18n": {
        "VIEW": "View",
        "VIEWS": "Views",
        "validate": {
            "form": {
                "SUBMIT": "Submit",
                "SENDING": "Sending..."
            },
            "name": {
                "REQUIRED": "Please enter your name",
                "MINLENGTH": "At least {0} characters required"
            },
            "email": {
                "REQUIRED": "Please enter your email",
                "EMAIL": "Please enter a valid email"
            },
            "url": {
                "REQUIRED": "Please enter your url",
                "URL": "Please enter a valid url"
            },
            "message": {
                "REQUIRED": "Please enter a message",
                "MINLENGTH": "At least {0} characters required"
            }
        },
        "tweets": {
            "failed": "Sorry, twitter is currently unavailable for this user.",
            "loading": "Loading tweets..."
        }
    },
    "url": {
        "template_directory_uri":""
    }
};

var map;



/* =========================================================
1. Header
============================================================ */

    var search_box = jQuery('.jed_icon_search');
    if(search_box.length) {
        jQuery(search_box).on('click',function() {

            jQuery('.jed_search_full').addClass('jed_expand');
        });
        var hide_search = jQuery('.jed_custom_icon');
        jQuery(hide_search).on('click',function() {
            jQuery('.jed_search_full').removeClass('jed_expand');
        });
    }
    var super_menu = jQuery('.sf-menu');
    if(super_menu.length) {
        super_menu.superfish( {
            speed: 'fast',
            delay: 0,
        });
    }
    var menu_main = jQuery('.jed_menu_main');
    if(menu_main.length) {
        menu_main.superclick({
            //add options here if required
            delay: 0,
            speed: 'slow',
            animation: {opacity:'show',height:'show'},
            animationOut:  {opacity:'hide',height:'hide'},   // an object equivalent to first parameter of jQuery’s .animate() method Used to animate the submenu closed
            speedOut:   'slow', 
        });
    }
    
    var menu = jQuery(window).height();
    jQuery('.jed_side_menu').height(menu);

    var header_menu = jQuery('.jed_header_main');
    if(header_menu.length) {

        header_menu.on('click','.jed_menu_icon',function(event) {
            jQuery(".jed_side_menu").toggle( "slide" );
            
            jQuery('.jed_side_menu').mCustomScrollbar();

        });
    }

    var side_menu = jQuery('.jed_side_menu');
    if(side_menu) {
        side_menu.on('click','.jed_close',function(event) {
            side_menu.toggle( "slide" );
        });
    }


/* =========================================================
2.  Slider Pro
============================================================ */


if (jQuery('.jed_module_slider_02').length > 0) {

    var sp1 = jQuery('.slider-pro-1');
    
    sp1.sliderPro({
        width: 1366,
        height: 570,
        forceSize: 'fullWidth',
        arrows: false,
        buttons: true,
        waitForLayers: false,
        autoplay: true,
        fadeOutPreviousSlide: true,
        autoScaleLayers: true,
        slideDistance: 0,
        autoplayDelay: 3000,
        init: function(){
           jQuery(".jed_module_slider_02 .loading").hide();    
           jQuery(".jed_module_slider_02 .slider-pro").show();   
        }
    });

};

if (jQuery('.jed_module_slider_03').length > 0) {

    var sp2 = jQuery('.slider-pro-2');
    
    sp2.sliderPro({
        width: 1366,
        height: 774,
        forceSize: 'fullWidth',
        arrows: false,
        buttons: true,
        waitForLayers: false,
        autoplay: true,
        fadeOutPreviousSlide: true,
        autoScaleLayers: true,
        slideDistance: 0,
        autoplayDelay: 3000,
        init: function(){
           jQuery(".jed_module_slider_03 .loading").hide();   
           jQuery(".jed_module_slider_03 .slider-pro").show();   
        }
    });

};

if (jQuery('.jed_module_slider_04').length > 0) {

    var sp3 = jQuery('.slider-pro-3');
    
    sp3.sliderPro({
        width: 1366,
        height: 680,
        forceSize: 'fullWidth',
        arrows: false,
        buttons: true,
        waitForLayers: false,
        autoplay: true,
        fadeOutPreviousSlide: true,
        autoScaleLayers: true,
        slideDistance: 0,
        autoplayDelay: 5000,
        init: function(){
           jQuery(".jed_module_slider_04 .loading").hide();   
           jQuery(".jed_module_slider_04 .slider-pro").show();   
        }
    });
    sp3.find(".sp-buttons").addClass("s1");

    jQuery('.jed_module_slider_04 .popup-link').magnificPopup({
        iframe: {
            patterns: {
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: 'http://player.vimeo.com/video/%id%?autoplay=1'
                },
            }
        },
        type: 'iframe'
    });
};

if (jQuery('.jed_module_slider_05').length > 0) {

    var sp4 = jQuery('.slider-pro-4');
    
    sp4.sliderPro({
        width: 1366,
        height: 585,
        forceSize: 'fullWidth',
        arrows: false,
        buttons: true,
        waitForLayers: false,
        autoplay: true,
        fadeOutPreviousSlide: true,
        autoScaleLayers: true,
        slideDistance: 0,
        autoplayDelay: 5000,
        init: function(){
           jQuery(".jed_module_slider_05 .loading").hide();   
           jQuery(".jed_module_slider_05 .slider-pro").show();   
        }
    });
    sp4.find(".sp-buttons").addClass("s1");

};


/* =========================================================
3.  Skill Bar
============================================================ */

    jQuery('.jed_counter_number').countTo({
        speed: 3000
    });  

    if( jQuery('.jed_skill.jed_style_01').length ) {
        jedCounterUp1();
    }

    if( jQuery('.jed_skill.jed_style_02').length ) {
        jedCounterUp3();
    }
    if( jQuery('.jed_skill.jed_style_03').length ) {
        jedCounterUp3();
    }
    if( jQuery('.jed_skill.jed_style_07').length ) {
        jedCounterUp7();
    }
    if( jQuery('.jed_skill.jed_style_08').length ) {
        jedCounterUp8();
    }
    if( jQuery('.jed_skill.jed_style_09').length ) {
        jedCounterUp9();
    }

/* =========================================================
4.  Masonry
============================================================ */

jQuery('body').imagesLoaded( function() {
    jQuery('.jed_module_text_intro.jed_style_03 .widget-content ul').masonry({        
        itemSelector: 'li',
        columnWidth: 1
    });
    var mh_1 = jQuery('.jed_module_text_intro.jed_style_03');

    mh_1.each(function() {
        jQuery(this).children().matchHeight();
    });
});

jQuery('body').imagesLoaded( function() {
    jQuery('.jed_module_text_intro .widget-content ul').masonry({        
        itemSelector: 'li',
        columnWidth: 1
    });
    jQuery('.k_fed_fix_height').matchHeight({});
});

jQuery('body').imagesLoaded( function() {
    jQuery('.jed_module_staff_team_3 .widget-content ul').masonry({        
        itemSelector: 'li',
        columnWidth: 1
    });
});
jQuery('body').imagesLoaded( function() {
    jQuery('.jed_module_staff_team_3 .row ul').masonry({        
        itemSelector: 'li',
        columnWidth: 1
    });
});
jQuery('body').imagesLoaded( function() {
    jQuery('.jed_module_staff_team_3_1 .row ul').masonry({        
        itemSelector: 'li',
        columnWidth: 1
    });
});
jQuery('body').imagesLoaded( function() {
    jQuery('.jed_module_staff_team_mansony .widget-content ul').masonry({        
        itemSelector: 'li',
        columnWidth: 1,
    });
});

jQuery('body').imagesLoaded( function() {
    jQuery('.jed_type_client_gird_3_cols ul').masonry({        
        itemSelector: 'li',
        columnWidth: 1
    });
});


/* =========================================================
5.  PortfolioMasonry
============================================================ */

    /*--- portfolio-list ---*/

    if (jQuery('.jed_module_portfolio .masonry-container').length > 0) {
        var container_01 = jQuery('.jed_module_portfolio .masonry-container');
        var masonryOptions = {
            columnWidth: 1,
            itemSelector : '.ms-item-01.show'
        };

        container_01.imagesLoaded(function(){
            var m_grid = container_01.masonry( masonryOptions);
            var m_filters_01 = jQuery('.jed_module_portfolio .masonry-filter a');

            m_filters_01.click(function(event){

                event.preventDefault();
                m_filters_01.removeClass('active');
                jQuery(this).addClass('active');
                var m_filter_val = jQuery(this).data('val');
                container_01.find('.ms-item-01').each(function(){

                    var m_item_val = jQuery(this).data('val').toString().split(',');                
                    var a = m_item_val.indexOf(m_filter_val.toString()) > -1;

                    if (m_filter_val == "*") {
                        jQuery(this).removeClass('hide');
                        jQuery(this).addClass('show');
                    } else {
                        if ( a == true) {
                            jQuery(this).removeClass('hide');
                            jQuery(this).addClass('show');  
                        } else {
                            jQuery(this).removeClass('show');
                            jQuery(this).addClass('hide');
                        }
                    }                               
                });

                container_01.masonry('layout');
            });

        });
    }

    //load more
    var link_to_github_1 ="https://gist.githubusercontent.com/Stormie/431ce8060389e113c0a0/raw/3626391f9312b0aed5970e96b15e5084a837a748/jed-masonry-01";

    jQuery('#pl-btn-1').click(function(){
        var button = jQuery(this);
        jQuery.ajax({
            url:link_to_github_1,
            beforeSend: function( xhr ) {
            },

        })
        .done(function( data ) {

            jQuery(data).imagesLoaded(function() {

                var position_insert_data =  jQuery('#pl-btn-1').closest('.jed_module_portfolio').find('.masonry-container');

                var items = jQuery(data).find('.ms-item-01');
                if(items.length){
                    jQuery.each(items, function(items, index){
                        jQuery(position_insert_data).append(jQuery(this)).masonry( 'appended', jQuery(this));
                    });
                } 
            });
        });
    });

    var link_to_github_3 ="https://gist.githubusercontent.com/Stormie/80c1a3ba779b8c7c2aac/raw/33ac28d3f7694f9079f91d520af3b7a61884e1fb/jed-masonry-03";

    jQuery('#pl-btn-3').click(function(){
        var button = jQuery(this);
        jQuery.ajax({
            url:link_to_github_3,
            beforeSend: function( xhr ) {
            },

        })
        .done(function( data ) {

            console.log(jQuery(data));

            jQuery(data).imagesLoaded(function() {

                var position_insert_data =  jQuery('#pl-btn-3').closest('.jed_module_portfolio').find('.masonry-container');

                var items = jQuery(data).find('.ms-item-01');
                if(items.length){
                    jQuery.each(items, function(items, index){
                        jQuery(position_insert_data).append(jQuery(this)).masonry( 'appended', jQuery(this));
                    });
                } 
            });
        });
    });

    var link_to_github_4 ="https://gist.githubusercontent.com/Stormie/543859b1b7ac832732b3/raw/c0015a987f83dea85d71e9d7405dd878441cc8cc/jed-masonry-08";

    jQuery('#pl-btn-4').click(function(){
        var button = jQuery(this);
        jQuery.ajax({
            url:link_to_github_4,
            beforeSend: function( xhr ) {
            },

        })
        .done(function( data ) {

            console.log(jQuery(data));

            jQuery(data).imagesLoaded(function() {

                var position_insert_data =  jQuery('#pl-btn-4').closest('.jed_module_portfolio').find('.masonry-container');

                var items = jQuery(data).find('.ms-item-01');
                if(items.length){
                    jQuery.each(items, function(items, index){
                        jQuery(position_insert_data).append(jQuery(this)).masonry( 'appended', jQuery(this));
                    });
                } 
            });
        });
    });

    var link_to_github_5 ="https://gist.githubusercontent.com/Stormie/ab9be21ce8025c4fe7f9/raw/27ca925801da1275a3a41fd0ea454fd5bec1ebce/jed-masonry-05";

    jQuery('#pl-btn-5').click(function(){
        var button = jQuery(this);
        jQuery.ajax({
            url:link_to_github_5,
            beforeSend: function( xhr ) {
            },

        })
        .done(function( data ) {

            jQuery(data).imagesLoaded(function() {

                var position_insert_data =  jQuery('#pl-btn-5').closest('.jed_module_portfolio').find('.masonry-container');

                var items = jQuery(data).find('.ms-item-01');
                if(items.length){
                    jQuery.each(items, function(items, index){
                        jQuery(position_insert_data).append(jQuery(this)).masonry( 'appended', jQuery(this));
                    });
                } 
            });
        });
    });

    var link_to_github_5 ="https://gist.githubusercontent.com/Stormie/ab9be21ce8025c4fe7f9/raw/27ca925801da1275a3a41fd0ea454fd5bec1ebce/jed-masonry-05";

    jQuery('#pl-btn-6').click(function(){
        var button = jQuery(this);
        jQuery.ajax({
            url:link_to_github_5,
            beforeSend: function( xhr ) {
            },

        })
        .done(function( data ) {

            console.log(jQuery(data));

            jQuery(data).imagesLoaded(function() {

                var position_insert_data =  jQuery('#pl-btn-6').closest('.jed_module_portfolio').find('.masonry-container');

                var items = jQuery(data).find('.ms-item-01');
                if(items.length){
                    jQuery.each(items, function(items, index){
                        jQuery(position_insert_data).append(jQuery(this)).masonry( 'appended', jQuery(this));
                    });
                } 
            });
        });
    });

/* =========================================================
6. Owl Carousel
============================================================ */

    jQuery(".jed_has_owl_1").owlCarousel({
        items : 3,
        itemsDesktop : [1000,3],
        itemsDesktopSmall : [900,2],
        itemsMobile : [639,1]    
    });

    jQuery(".jed_module_type_testmonial-car .widget-content").owlCarousel({
        singleItem: true,  
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        autoPlay: true
    });

    jQuery('.jed_owl_carousel').each(function() {
        var $this      = jQuery(this);
        var option     = $this.find('.kopa-owl-content');
        var item       = option.data('slider-item');
        var itemTablet = option.data('item-tablet');
        var auto       = option.data('slider-auto');
        var navigation = option.data('slider-navigation');
        var pagination = option.data('slider-pagination');
        var owl        = option;

        if (1 == itemTablet) {
            itemTablet = 1;
        } else {
            itemTablet = 2;
        }

        owl.owlCarousel({
            items: item,
            itemsDesktop: [1000, 3],
            itemsDesktopSmall: [992, 1],
            slideSpeed: 800,
            autoPlay: auto,
            navigation: navigation,
            pagination: pagination,
            stopOnHover: true,
            navigationText: false,
            addClassActive: true
        });
    });

    if (jQuery('.jed_module_slider_01').length > 0) {

        sync1.each(function() {
            var option     = jQuery(this);
            var item       = option.data('slider-item');
            var auto       = option.data('slider-auto');
            var navigation = option.data('slider-navigation');
            var pagination = option.data('slider-pagination');
            var owl        = option;

            owl.owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: auto,
                navigation: navigation,
                pagination: pagination,
                navigationText: false,
                afterAction: syncPosition,
                responsiveRefreshRate: 200
            });
        });

        sync2.each(function() {
            var option     = jQuery(this);
            var item       = option.data('slider-item');
            var itemsDesktop = option.data('slider-item-desktop');
            var itemsTablet = option.data('slider-item-tablet');
            var auto       = option.data('slider-auto');
            var navigation = option.data('slider-navigation');
            var pagination = option.data('slider-pagination');
            var owl        = option;

            owl.owlCarousel({
                items: item,
                itemsDesktop: itemsDesktop,
                itemsTablet: itemsTablet,
                itemsTabletSmall: [639,1],
                slideSpeed: 1000,
                autoPlay: auto,
                navigation: navigation,
                pagination: pagination,
                navigationText: false,
                afterAction: syncPosition,
                responsiveRefreshRate: 100,
                afterInit: function(el) {
                    el.find(".owl-item").eq(0).addClass("synced");
                }
            });
        });

        sync2.find(".owl-controls").addClass("style1");

        

        jQuery(sync2).on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = jQuery(this).data("owlItem");
            sync1.trigger("owl.goTo", number);
        });
    }

    if( jQuery('.jed_module_type_blog .jed_owl_carousel').length ) {
        jedOwl();
    }

/* =========================================================
6. Google Maps
============================================================ */

    if (jQuery('.kopa-map').length > 0) {

        var id_map = jQuery('.kopa-map').attr('id');
        var lat = parseFloat(jQuery('.kopa-map').attr('data-latitude'));
        var lng = parseFloat(jQuery('.kopa-map').attr('data-longitude'));
        var place = jQuery('.kopa-map').attr('data-place');

        var map = new GMaps({
            el: '#'+id_map,
            lat: lat,
            lng: lng,
            zoomControl : true,
            zoomControlOpt: {
              style : 'SMALL',
              position: 'TOP_LEFT'
            },
            panControl : false,
            streetViewControl : false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
        });
        map.addMarker({
            lat: lat,
            lng: lng,
            title: place
        });

    }


/* =========================================================
8. Validate Form
============================================================ */

    if( jQuery('.contact-form').length > 0 ) {
        jQuery('.contact-form').validate({
            // Add requirements to each of the fields
            rules: {
                name: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                web: {
                    required: true,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 15
                }
            },
            // Specify what error messages to display
            // when the user does something horrid
            messages: {
                name: {
                    required: "Please enter your name.",
                    minlength: jQuery.format("At least {0} characters required.")
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                phone: {
                    required: "Please enter your phone.",
                    url: "Please enter a valid phone."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: jQuery.format("At least {0} characters required.")
                }
            },
            // Use Ajax to send everything to processForm.php
            submitHandler: function(form) {
                jQuery(".submit-contact-1").attr("value", "Sending...");
                jQuery(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, jQueryform) {
                        jQuery("#response-2").html(responseText).hide().slideDown("fast");
                        jQuery(".submit-contact-1").attr("value", "Submit");
                    }
                });
                return false;
            }
        });     
    }
    if( jQuery('.comment-form').length > 0 ) {
        jQuery('.comment-form').validate({
            // Add requirements to each of the fields
            rules: {
                name: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                web: {
                    required: true,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 15
                }
            },
            // Specify what error messages to display
            // when the user does something horrid
            messages: {
                name: {
                    required: "Please enter your name.",
                    minlength: jQuery.format("At least {0} characters.")
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                phone: {
                    required: "Please enter your phone.",
                    url: "Please enter a valid phone."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: jQuery.format("At least {0} characters")
                }
            },
            // Use Ajax to send everything to processForm.php
            submitHandler: function(form) {
                jQuery(".submit-comment-1").attr("value", "Sending...");
                jQuery(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, jQueryform) {
                        jQuery("#response-1").html(responseText).hide().slideDown("fast");
                        jQuery(".submit-comment-1").attr("value", "Submit");
                    }
                });
                return false;
            }
        });
    }


/* =========================================================
 9. Alerts
============================================================ */

    jQuery('.jed_alerts_content_01').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_01').slideUp(1000);
    });

    jQuery('.jed_alerts_content_02').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_02').slideUp(1000);
    });

    jQuery('.jed_alerts_content_03').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_03').slideUp(1000);
    });

    jQuery('.jed_alerts_content_04').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_04').slideUp(1000);
    });

    jQuery('.jed_alerts_content_05').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_05').slideUp(1000);
    });

    jQuery('.jed_alerts_content_06').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_06').slideUp(1000);
    });

    jQuery('.jed_alerts_content_07').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_07').slideUp(1000);
    });

    jQuery('.jed_alerts_content_08').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_08').slideUp(1000);
    });

    jQuery('.jed_alerts_content_10').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_10').slideUp(1000);
    });

    jQuery('.jed_alerts_content_11').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_11').slideUp(1000);
    });

    jQuery('.jed_alerts_content_12').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_12').slideUp(1000);
    });

    jQuery('.jed_alerts_content_13').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_13').slideUp(1000);
    });

    jQuery('.jed_alerts_content_14').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_14').slideUp(1000);
    });

    jQuery('.jed_alerts_content_15').on('click','.jed_alerts_close',function(event) {
        event.preventDefault();
        jQuery('.jed_alerts_content_15').slideUp(1000);
    });


/* =========================================================
10. Countdown
============================================================ */

    if( jQuery('.jed_countdown.jed_style_01').length ) {
        jedCountDown1();
    }

    if( jQuery('.jed_countdown.jed_style_02').length ) {
        jedCountDown2();
    }

    if( jQuery('.jed_countdown.jed_style_03').length ) {
        jedCountDown3();
    }

    if( jQuery('.jed_countdown.jed_style_04').length ) {
        jedCountDown4();
    }


/* =========================================================
11. Accordion
============================================================ */

    var panel_titles = jQuery('.jed_module_accordion .panel-title a');
    panel_titles.addClass("collapsed");
    jQuery('.panel-heading.active').find(panel_titles).removeClass("collapsed");
    panel_titles.click(function(){
        jQuery(this).closest('.jed_module_accordion').find('.panel-heading').removeClass('active');
        var pn_heading = jQuery(this).parents('.panel-heading');
        if (jQuery(this).hasClass('collapsed')) {
            pn_heading.addClass('active');
        } else {
            pn_heading.removeClass('active');
        }
    });


/* =========================================================
12. Responsive Tabs
============================================================ */

    if(jQuery('.jed_module_tab').length){
        jQuery('.responsive-tabs').responsiveTabs({
          accordionOn: ['sm']
        });
        jQuery('.accordion-link').on('click',function(){
            jQuery('.accordion-link').removeClass('active-1');
            jQuery(this).addClass('active-1');  
        });
    }



/* =========================================================
13. Background Video
============================================================ */

if(jQuery('.kopa-bg-video').length){
    jQuery('.kopa-bg-video-1').vimeofy({
        'url': 'http://vimeo.com/143842675',
        'color': '#00D8D8',
        'autoplay': true,
        'loop': true,
        'delay': 0
    });
}


/* =========================================================
14. Testimonial-zigzag
============================================================ */

if(jQuery('.jed_module_testimonial').length){
    var timelineBlocks = $('.jed_timeline_block'),
        offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        (!window.requestAnimationFrame) 
            ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
            : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
    });
    var link_to_github = "https://gist.githubusercontent.com/minhki/66d63ba7f65b876ad5b7/raw/6c01e90ef0c59f07964da11cf1843589abcf95e5/kivv";
    var k=1;  
    jQuery('.jed_load_more').on('click',function(){
        var button = jQuery(this);
        jQuery.ajax({
            url:link_to_github,
            beforeSend: function( xhr ) {
            },

        })
        .done(function( data ) {
            var position_insret_data=  jQuery(button).parent();
            var a= jQuery(data).children();
            var data_lenght=jQuery(a).size(); 
                     
             for(var i=0;i<data_lenght;i++){
                var b = jQuery(a).eq(i);
                // if(i==0){
                //  var jQueryboxes = jQuery('<span class="jed_timeline_year">'+b.html()+'</span>');
              //    button.before(jQueryboxes);
                // }else
                if(k%2==0){
                    var jQueryboxes = jQuery(b);
                    button.before(jQueryboxes);
                }
                else{
                    // '<div class="jed_timeline_block">'+b.html()+'</div>'
                    var jQueryboxes = jQuery(b);
                    button.before(jQueryboxes);
                    // jQuery(position_insret_data).append(jQueryboxes);
                }
                k=k+1;
            }

            var timelineBlocks = $('.jed_timeline_block'),
                offset = 0.8;

            //hide timeline blocks which are outside the viewport
            hideBlocks(timelineBlocks, offset);

            //on scolling, show/animate timeline blocks when enter the viewport
            $(window).on('scroll', function(){
                (!window.requestAnimationFrame) 
                    ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
                    : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
            }); 


        });
    });
}


/* =========================================================
 More Custom
============================================================ */

    /*--- share-box ---*/

    if ( jQuery('.entry-meta-share').length ) {
        blogShare();
    }

    /*--- scroll top Top ---*/

    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.scrollup').fadeIn();
        } else {
            jQuery('.scrollup').fadeOut();
        }
    }); 

    jQuery('.scrollup').click(function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    /*--- fitvid ---*/

    if( jQuery('.entry-item-video').length ) {
        fitVideo();
    }


/* =========================================================
 Shop
============================================================ */

    if(jQuery('.jed_module_type_product_shop_list').length){    
        jQuery('body').imagesLoaded( function() {
            var $masonry = jQuery('.jed_module_type_product_shop_list .widget-content ul').masonry({        
                itemSelector: 'li',
                columnWidth: 1,
                
            });
        });
    }
    
    if(jQuery('.jed_modul_type_product_shop_single').length){
        jQuery("a[data-rel ^='prettyPhoto']").prettyPhoto({
            hook: 'data-rel',
            // default_width: 500,
            // default_height: 344,
        }); 
    }


/* =========================================================
 Match height
============================================================ */


    jQuery('.ul-mh').children().matchHeight();
    jQuery('.row_custom_01').children().matchHeight();

    /*--- event-list-2 ---*/

    function jedEventListMatchHeight2() {
        var $this = jQuery('.jed_event_list.jed_style_02');
        var item  = $this.find('.jed_event_list_item');

        item.matchHeight();
    }
    if( jQuery('.jed_event_list.jed_style_02').length > 0 ) {
        jedEventListMatchHeight2();
    }

});

jQuery(document).mouseup(function (e){
    var container = jQuery(".jed_side_menu");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});

jQuery(window).load(function() {
    if( jQuery('.jed_module_type_blog_2_cols').length ) {
        jedBlogGrid2Cols_Filter();
    }

    if( jQuery('.jed_module_type_blog_grid').length ) {
        jedBlogGrid_Filter();
    }

    if( jQuery('.jed_module_type_blog_masonry').length ) {
        jedBlogMasonry_Filter();
    }
});


/**
 * Function
 * -------------------------------------------------------------------
 */


/*--- countdown ---*/

function jedCountDown1() {
    var $this        = jQuery('.jed_countdown.jed_style_01').find('.jed_countdown_wrap'),
        nextYear     = new Date(new Date().getFullYear() + 1, 0, 0, 0, 0, 0, 0),
        dataYear     = $this.data('year'),
        dataMonth    = $this.data('month'),
        dataDay      = $this.data('day'),
        dataTime     = $this.data('time'),
        dataDateTime = dataYear + '/' + dataMonth + '/' + dataDay + " " + dataTime;

    jQuery($this).countdown(dataDateTime, function(event) {
        var $this = jQuery(this).html(event.strftime(''
            +'<li><div><span>days</span><h3>%D</h3><span>' + dataYear + '</span></div></li>'
            +'<li><div><span>hours</span><h3>%H</h3><span>' + dataYear + '</span></div></li>'
            +'<li><div><span>minutes</span><h3>%M</h3><span>' + dataYear + '</span></div></li>'
            +'<li><div><span>Second</span><h3>%S</h3><span>' + dataYear + '</span></div></li>'));
    });
}

function jedCountDown2() {
    var $this        = jQuery('.jed_countdown.jed_style_02').find('.jed_countdown_wrap'),
        nextYear     = new Date(new Date().getFullYear() + 1, 0, 0, 0, 0, 0, 0),
        dataYear     = $this.data('year'),
        dataMonth    = $this.data('month'),
        dataDay      = $this.data('day'),
        dataTime     = $this.data('time'),
        dataDateTime = dataYear + '/' + dataMonth + '/' + dataDay + " " + dataTime;

    jQuery($this).countdown(dataDateTime, function(event) {
        var $this = jQuery(this).html(event.strftime(''
            +'<li><div><span>days</span><h3>%D</h3><span>' + dataYear + '</span></div></li>'
            +'<li><div><span>hours</span><h3>%H</h3><span>' + dataYear + '</span></div></li>'
            +'<li><div><span>minutes</span><h3>%M</h3><span>' + dataYear + '</span></div></li>'
            +'<li><div><span>Second</span><h3>%S</h3><span>' + dataYear + '</span></div></li>'));
    });
}

function jedCountDown3() {
    var $this        = jQuery('.jed_countdown.jed_style_03').find('.jed_countdown_wrap'),
        nextYear     = new Date(new Date().getFullYear() + 1, 0, 0, 0, 0, 0, 0),
        dataDateTime = $this.data('year') + '/' + $this.data('month') + '/' + $this.data('day') + " " + $this.data('time');

    jQuery($this).countdown(dataDateTime, function(event) {
        var $this = jQuery(this).html(event.strftime(''
            +'<li><div><span>days</span><h3><span>%D</span></h3></div></li>'
            +'<li><div><span>hours</span><h3><span>%H</span></h3></div></li>'
            +'<li><div><span>minutes</span><h3><span>%M</span></h3></div></li>'
            +'<li><div><span>Second</span><h3><span>%S</span></h3></div></li>'));
    });
}

function jedCountDown4() {
    var $this        = jQuery('.jed_countdown.jed_style_04'),
        dataDateTime = $this.data('year') + '/' + $this.data('month') + '/' + $this.data('day') + " " + $this.data('time');

    jQuery($this).find('.jed-chart').each(function() {
        var $this = jQuery(this);
        var color = $this.data('color');
        var width = $this.data('width');
        var size  = $this.data('size');
        var time  = $this.data('time');

        $this.easyPieChart({
            barColor: color,
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: width,
            size: size,
            animate: time
        });
    });

    jQuery($this).countdown(dataDateTime).on('update.countdown', function(event) {
        var chart_seconds = (event.offset.seconds / 60 *100);
        var chart_minutes = (event.offset.minutes / 60 *100);
        var chart_hours = (event.offset.hours / 60 *100);
        var chart_days = (event.offset.totalDays / 24 *100);

        jQuery('#jed-days').text(event.offset.totalDays);
        jQuery('#jed-hours').text(event.offset.hours);
        jQuery('#jed-minutes').text(event.offset.minutes);
        jQuery('#jed-seconds').text(event.offset.seconds);

        jQuery('.jed-chart-seconds').data('easyPieChart').update(chart_seconds);
        jQuery('.jed-chart-minutes').data('easyPieChart').update(chart_minutes);
        jQuery('.jed-chart-hours').data('easyPieChart').update(chart_hours);
        jQuery('.jed-chart-days').data('easyPieChart').update(chart_days);
    });
}

/*--- countUp ---*/

function jedCounterUp1() {
    var $this = jQuery('.jed_counter_number');

    $this.countTo({
        speed: 3000
    });
}

function jedCounterUp3() {
    var $this = jQuery('.chart-circle');

    $this.each(function() {
        var $this = jQuery(this),
            color = $this.data('color'),
            width = $this.data('width'),
            size  = $this.data('size'),
            time  = $this.data('time');

            console.log(color);

        $this.easyPieChart({
            barColor: color,
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: width,
            size: size,
            animate: time
        });
    });
}
function jedCounterUp7() {
    var $this = jQuery('.jed_skill.jed_style_07 .jed_counter_number');

    $this.countTo({
        speed: 3000
    });
}
function jedCounterUp8() {
    var $this = jQuery('.jed_skill.jed_style_08 .jed_counter_number');

    $this.countTo({
        speed: 3000
    });
}
function jedCounterUp9() {
    var $this = jQuery('.jed_counter_number');

    $this.countTo({
        speed: 3000
    });
}

/*--- slider-1 ---*/

var sync1 = jQuery(".jed_module_slider_01 .sync1");
var sync2 = jQuery(".jed_module_slider_01 .sync2");

function syncPosition(el) {
    var current = this.currentItem;
    jQuery(sync2).find(".owl-item").removeClass("synced").eq(current).addClass("synced")
    if (jQuery(sync2).data("owlCarousel") !== undefined) {
        center(current)
    }
}

function center(number){
    
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
        if (undefined != sync2visible){
            if(num > sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", num - sync2visible.length+2)
            }else{
                if(num - 1 === -1){
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            } 
        }
    } else if(num === sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
        sync2.trigger("owl.goTo", num-1)
    }
    
}

/*--- testimonial zigzag ---*/

function hideBlocks(blocks, offset) {
    blocks.each(function(){
        ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.jed_timeline_img, .jed_timeline_content').addClass('is-hidden');
    });
}

function showBlocks(blocks, offset) {
    blocks.each(function(){
        ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.jed_timeline_img').hasClass('is-hidden') ) && $(this).find('.jed_timeline_img, .jed_timeline_content').removeClass('is-hidden').addClass('bounce-in');
    });
}

/*--- blog ---*/

function blogShare() {
    jQuery('.entry-meta-share').each(function() {
        var thisSpan = jQuery(this);
        thisSpan.on('click', function() {
            thisSpan.find("span").toggleClass('active');
        });
    });
}

function fitVideo() {
    jQuery('.entry-item-video').each(function() {
        var itemVideo = jQuery(this).find('.entry-thumb');
        jQuery(itemVideo).fitVids();
    });
}

function jedOwl() {
    jQuery('.jed_owl_carousel').each(function() {
        var option     = jQuery(this).find('.kopa-owl-content');
        var item       = option.data('slider-item');
        var auto       = option.data('slider-auto');
        var navigation = option.data('slider-navigation');
        var pagination = option.data('slider-pagination');
        var owl        = option;

        owl.owlCarousel({
            items: item,
            itemsDesktop: item,
            itemsDesktopSmall: item,
            itemsTablet: item,
            slideSpeed: 800,
            autoPlay: auto,
            navigation: navigation,
            pagination: pagination,
            stopOnHover: true,
            navigationText: false,
            addClassActive: true
        });
    });
}

function jedBlogGrid_Filter() {
    var container_01   = jQuery('.jed_blog_content > ul'),
        masonryOptions = {
            columnWidth: 1,
            itemSelector : '.col-xs-12.col-sm-4'
        },
        link_to_github = "https://gist.githubusercontent.com/hjepbo/a3b69baf238f75b18990/raw/cdcd96d501e6228c527377e2acb8185b45d93c3c/jed-masonry";

    container_01.imagesLoaded(function(){
        var m_grid       = container_01.masonry(masonryOptions),
            m_filters_01 = jQuery('.filters-options li');

        m_filters_01.on('click', function(event){
            var m_filter_val = jQuery(this).data('filter');

            event.preventDefault();
            m_filters_01.removeClass('active');
            jQuery(this).addClass('active');

            container_01.find('.col-xs-12.col-sm-4').each(function(){
                var m_item_val = jQuery(this).data('filter').toString().split(','),
                    a          = m_item_val.indexOf(m_filter_val.toString()) > -1;

                if (m_filter_val == "*") {
                    jQuery(this).removeClass('hide');
                    jQuery(this).addClass('show');
                } else {
                    if ( a == true) {
                        jQuery(this).removeClass('hide');
                        jQuery(this).addClass('show');  
                    } else {
                        jQuery(this).removeClass('show');
                        jQuery(this).addClass('hide');
                    }
                }                               
            });
            container_01.masonry('layout');
        });
    });

    jQuery('.loadmore_btn').on('click', function(){
        jQuery.ajax({
            url:link_to_github,
            beforeSend: function( xhr ) {
            },
        })
        .done(function( data ) {
            jQuery(data).imagesLoaded(function() {
                var position_insert_data =  jQuery('.loadmore_btn').closest('.jed_module_type_blog_grid').find('.jed_blog_content > ul');

                var items = jQuery(data).find('.col-xs-12.col-sm-4');
                if( items.length ) {
                    jQuery.each(items, function(items, index){
                        jQuery(position_insert_data).append(jQuery(this)).masonry( 'appended', jQuery(this));
                    });
                    jedOwl();
                    blogShare();
                    fitVideo();
                    container_01.masonry('layout');
                }
            });
        });
    });
}

function jedBlogGrid2Cols_Filter() {
    var container_01   = jQuery('.jed_blog_content > ul'),
        masonryOptions = {
            columnWidth: 1,
            itemSelector : '.col-xs-12.col-sm-6'
        },
        link_to_github = "https://gist.githubusercontent.com/hjepbo/b463aaecd2365359b720/raw/854daead695b93eaf09dee6c2d66eca06dd4ccb8/jed-masonry-2";

    container_01.imagesLoaded(function(){
        var m_grid       = container_01.masonry(masonryOptions),
            m_filters_01 = jQuery('.filters-options li');

        m_filters_01.on('click', function(event){
            var m_filter_val = jQuery(this).data('filter');

            event.preventDefault();
            m_filters_01.removeClass('active');
            jQuery(this).addClass('active');

            container_01.find('.col-xs-12.col-sm-6').each(function(){
                var m_item_val = jQuery(this).data('filter').toString().split(','),
                    a          = m_item_val.indexOf(m_filter_val.toString()) > -1;

                if (m_filter_val == "*") {
                    jQuery(this).removeClass('hide');
                    jQuery(this).addClass('show');
                } else {
                    if ( a == true) {
                        jQuery(this).removeClass('hide');
                        jQuery(this).addClass('show');  
                    } else {
                        jQuery(this).removeClass('show');
                        jQuery(this).addClass('hide');
                    }
                }                               
            });
            container_01.masonry('layout');
        });
    });

    jQuery('.loadmore_btn').on('click', function(){
        jQuery.ajax({
            url:link_to_github,
            beforeSend: function( xhr ) {
            },

        })
        .done(function( data ) {
            jQuery(data).imagesLoaded(function() {

                var position_insert_data =  jQuery('.loadmore_btn').closest('.jed_module_type_blog_2_cols').find('.jed_blog_content > ul');

                var items = jQuery(data).find('.col-xs-12.col-sm-6');
                if(items.length){
                    jQuery.each(items, function(items, index){
                        jQuery(position_insert_data).append(jQuery(this)).masonry( 'appended', jQuery(this));
                    });
                    jedOwl();
                    blogShare();
                    fitVideo();
                    container_01.masonry('layout');
                } 
            });
        });
    });
}

function jedBlogMasonry_Filter() {
    var container_01   = jQuery('.jed_blog_content > ul'),
        masonryOptions = {
            columnWidth: 1,
            itemSelector : '.col-xs-12.col-sm-4'
        },
        link_to_github = "https://gist.githubusercontent.com/hjepbo/06ec462421b86b2814ee/raw/1da49d53c2cd0237a8cab09253c889aead23d2e4/jed-masonry-3";

    container_01.imagesLoaded(function(){
        var m_grid       = container_01.masonry(masonryOptions),
            m_filters_01 = jQuery('.filters-options li');

        m_filters_01.on('click', function(event){
            var m_filter_val = jQuery(this).data('filter');

            event.preventDefault();
            m_filters_01.removeClass('active');
            jQuery(this).addClass('active');

            container_01.find('.col-xs-12.col-sm-4').each(function(){
                var m_item_val = jQuery(this).data('filter').toString().split(','),
                    a          = m_item_val.indexOf(m_filter_val.toString()) > -1;

                if (m_filter_val == "*") {
                    jQuery(this).removeClass('hide');
                    jQuery(this).addClass('show');
                } else {
                    if ( a == true) {
                        jQuery(this).removeClass('hide');
                        jQuery(this).addClass('show');  
                    } else {
                        jQuery(this).removeClass('show');
                        jQuery(this).addClass('hide');
                    }
                }                               
            });
            container_01.masonry('layout');
        });
    });

    jQuery('.loadmore_btn').on('click', function(){
        jQuery.ajax({
            url:link_to_github,
            beforeSend: function( xhr ) {
            },

        })
        .done(function( data ) {
            jQuery(data).imagesLoaded(function() {

                var position_insert_data =  jQuery('.loadmore_btn').closest('.jed_module_type_blog_masonry').find('.jed_blog_content > ul');

                var items = jQuery(data).find('.col-xs-12.col-sm-4');
                if(items.length){
                    jQuery.each(items, function(items, index){
                        jQuery(position_insert_data).append(jQuery(this)).masonry( 'appended', jQuery(this));
                    });
                    jedOwl();
                    blogShare();
                    fitVideo();
                    container_01.masonry('layout');
                } 
            });
        });
    });
}