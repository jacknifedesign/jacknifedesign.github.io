var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Accordion = JACKNIFE.Accordion = function Accordion(el) {
		// Elements
		var $el      = el;
		var $trigger = $('[data-acc-trigger]', $el);

		// Variables

		// Public Functions
		this.init = function() {
			// Apply listeners
			$trigger.on('click', _toggleOpen);
			return;
		}

		// Private Functions
		var _toggleOpen = function(e) {
			e.preventDefault();

			$el.toggleClass('active');
		}
	}
})( jQuery );