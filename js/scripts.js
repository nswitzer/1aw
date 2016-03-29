(function($) {
	$(window).load(function() {
		$('.page-wrapper').hide();
		$('#preloader').delay('1000').fadeOut('slow', function() {
			$(this).remove();
			$('.page-wrapper').fadeIn('2000');
		});
	});
})(jQuery);