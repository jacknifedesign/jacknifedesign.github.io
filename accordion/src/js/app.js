var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {
		$('.accordion').each(function() {
			var Accordion = new JACKNIFE.Accordion($(this));
			Accordion.init();
			$(this).data('Accordion', Accordion);
		});
	});
})( jQuery );