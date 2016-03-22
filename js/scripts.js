(function($) {
	$(window).load(function() {
		$('#preloader').delay('2000').fadeOut('slow', function() {
			$(this).remove();
		});
	});
})(jQuery);