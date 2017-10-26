var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {
		// Date would normally be set by PHP
		// For this sample we set it with jQuery
		var day    = 24 * 60 * 60 * 1000;
		var now    = new Date().getTime();
		var past   = now - day;
		var future = now + day;
console.log(past);
console.log(future);
		$('.countdown').data('start-time', past);
		$('.countdown').data('end-time', future);

		// Initialize the objects
		$('.circle-countdown').each(function() {
			var CircleCountdown = new JACKNIFE.CircleCountdown($(this));
			CircleCountdown.init();
			$(this).data('CircleCountdown', CircleCountdown);
		});
	});
})( jQuery );