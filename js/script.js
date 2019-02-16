$(function(){
	
	/** 00. Slider Full Height
 **************************************************************** **/
	function _slider_full() {
		_headerHeight = 0;

		if(jQuery("#header").hasClass('transparent') || jQuery("#header").hasClass('translucent')) {
			_headerHeight = 0;
		} else {
			_headerHeight = jQuery("#header").outerHeight();
			
			if(jQuery("#topBar").length > 0) {
				_headerHeight = _headerHeight + jQuery("#topBar").outerHeight();
			}
		}

		_screenHeight = jQuery(window).height() - _headerHeight;

		jQuery("#slider.fullheight").height(_screenHeight);
	}



	
});