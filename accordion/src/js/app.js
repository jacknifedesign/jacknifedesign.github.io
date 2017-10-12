var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {

		// Initialize Accordions
		$('.accordion').each(function() {
			var Accordion = new JACKNIFE.Accordion($(this));
			Accordion.init();
			// Store Object in Element Data for later reference
			$(this).data('Accordion', Accordion);
		});

		$('[data-acc-all-open').each(function() {
			$(this).on('click', function() {
				$(window).trigger('acc-all-open');
			});
		});

		$('[data-acc-all-close').each(function() {
			$(this).on('click', function() {
				$(window).trigger('acc-all-close');
			});
		});

	});
})( jQuery );