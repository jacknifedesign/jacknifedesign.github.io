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
		$('#Countdown').data('start-time', past);
		$('#Countdown').data('end-time', future);

		// Initialize the objects
		var $CircleCountdown = $('#Countdown');
		if ($CircleCountdown.length) {
			var CircleCountdown = new JACKNIFE.CircleCountdown($CircleCountdown);
			CircleCountdown.init();
			$CircleCountdown.data('CircleCountdown', CircleCountdown);
		}
	});
})( jQuery );