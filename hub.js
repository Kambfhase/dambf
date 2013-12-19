;(function($){

	$.fn.dambf = function( options){
		return this.replaceWith(function(i,e){
			var neu = $('<iframe>',{
				src : 'iframe.html'
			});
			neu.data(e);
			return neu;
		});
	}

})(jQuery);

