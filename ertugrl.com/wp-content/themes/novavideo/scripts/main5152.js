jQuery(document).ready(function(){
    jQuery.fn.exists = function(){return this.length>0;}
       
    /** Navigation **/
    jQuery('#nav li').mouseover( function(){
        jQuery(this).children('ul.sub-menu').slideDown("fast").show();
    }).mouseleave( function(){
        jQuery(this).children('ul.sub-menu').stop(true,true).slideUp("fast").hide();
    });
    
    jQuery("select.selectnav").change(function() {
			window.location = jQuery(this).find("option:selected").val();
		});
    
    /** Information plus **/
    jQuery('.infobutton').click( function(){
        jQuery('.infotext').slideToggle("fast").show();   
    });        

    /** Filtre **/    
    jQuery('.filtre-container').mouseover(function(){
        jQuery('.filtre-list').slideDown('fast').show();
    }).mouseleave(function(){
        jQuery('.filtre-list').stop(true,true).slideUp('fast');
    });
    
    /** Ajout de la fleche dans les sous menus **/
    jQuery('#nav ul > li').children('ul').prev('a').append(' &#9660;');
    
    /** Post like **/
    jQuery(".post-like a").live('click', function(e){
        e.preventDefault();                
	
		var heart = jQuery(this);
	
		var post_id = heart.data("post_id");
        
        var post_like = heart.data("post_like");
        
		
		jQuery.ajax({
			type: "post",
			url: ajax_var.url,
            dataType   : "json",
			data: "action=post-like&nonce=" + ajax_var.nonce + "&post_like=" + post_like + "&post_id=" + post_id,
			success    : function(data, textStatus, jqXHR){
                if(data.already !== true)
				{
                    jQuery(".note-bar").removeClass("not-rated-yet");
					jQuery(".rating").text(Math.floor(data.pourcentage) + "%");
                    jQuery(".rating").show();
                    
                    jQuery(".percent").text(Math.floor(data.pourcentage) + "%");
                    jQuery(".percent").show();
                    
                    jQuery(".nb-votes").text(data.nbvotes);
                    
                    jQuery(".post-like").text(data.bouton);
                    
                    if( data.nbvotes > 0 ){
                        jQuery(".like-bar").animate({
                            width: data.barre + "%",
                          }, "fast", function() {
                            // Animation complete.
                          });
                    }
				}
			}
		});
		return false;
	});   
    
    
    if( ajax_var.carousel_auto == 'yes' ){
        ajax_var.carousel_auto = true;
    }else{
        ajax_var.carousel_auto = false;
    }
    
    if( ajax_var.carousel_captions == 'yes' ){
        ajax_var.carousel_captions = true;
    }else{
        ajax_var.carousel_captions = false;
    }
    
    if( ajax_var.carousel_controls == 'yes' ){
        ajax_var.carousel_controls = true;
    }else{
        ajax_var.carousel_controls = false;
    }
    
    if( ajax_var.carousel_pager == 'yes' ){
        ajax_var.carousel_pager = true;
    }else{
        ajax_var.carousel_pager = false;
    }

   jQuery('.carousel').fadeIn("slow").bxSlider({        
        maxSlides: 100,       
        slideWidth: 210,        
        slideMargin: 8,
        auto: ajax_var.carousel_auto,
        controls: ajax_var.carousel_controls,
        pager: ajax_var.carousel_pager,         
        speed: 1000,  
        captions: ajax_var.carousel_captions,      
        preloadImages: 'all'
    });    
    
    jQuery('.wp-video').fadeIn("slow");
    jQuery('.video-embed').fadeIn("slow");
    
});