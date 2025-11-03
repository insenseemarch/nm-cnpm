(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    var older = jimUtil.loadScrollBars;
    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
        	if (older != undefined)
        		older();
            jQuery(".s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Panel_4 .layoutWrapper:first-child").overscroll({ showThumbs:false, direction:'horizontal', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Panel_3 .layoutWrapper:first-child").overscroll({ showThumbs:false, direction:'horizontal', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Panel_6 .layoutWrapper:first-child").overscroll({ showThumbs:false, direction:'horizontal', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);