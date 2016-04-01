(function($) {
	$(window).load(function() {
		var $preloader = $('#preloader');
		
		if (Cookies.get('preloader') == '1') {
			$preloader.remove();
		} else {
			$('.page-wrapper').hide();
			$preloader.delay('1000').fadeOut('slow', function() {
				$(this).remove();
				$('.page-wrapper').fadeIn('2000');
				Cookies.set('preloader', '1');
		});
		}
	});
})(jQuery);