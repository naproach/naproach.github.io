/*
jQuery Scroll To Top Plugin
Appends a link allowing you to go back to the top of the page after you've scrolled down a certain distance
version 1
copyright NOE Interactive
*/
(function($,$w){"use strict";$.fn.backtotop=function(options){var settings={topAnchor:'body',topOffset:300,animationSpeed:1000,animationEase:'swing',bckTopLinkTitle:'go back to the top of the page',bckTopLinkClass:'backTopLink border-radius-5'};options&&$.extend(settings,options);var $bckTop=$(this),$b=$('html,body'),isVisible=false,$topAnchor=$(settings.topAnchor),$bckTopLink=$('<a>',{'class':settings.bckTopLinkClass+' backtotopinstance',title:settings.bckTopLinkTitle,text:settings.bckTopLinkTitle}).appendTo($bckTop).hide().click(function(e){e.preventDefault();$b.animate({scrollTop:$topAnchor.position().top},settings.animationSpeed,settings.animationEase);return false});$w.scroll(_sc);_sc();function _sc(){var scrollTop=$w.scrollTop();if(scrollTop>settings.topOffset&&!isVisible){$bckTopLink.stop().fadeIn('slow');isVisible=true}else if(scrollTop<=settings.topOffset&&isVisible){$bckTopLink.stop().fadeOut('slow');isVisible=false}}}})(jQuery,jQuery(window));