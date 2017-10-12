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
			$trigger.on('click', _toggle);
			$(window).on('acc-all-open', _open);
			$(window).on('acc-all-close', _close);
			return;
		}

		// Private Functions
		var _toggle = function(e) {
			e.preventDefault();

			$el.toggleClass('active');
		}

		var _open = function(e) {
			e.preventDefault();

			$el.addClass('active');
		}

		var _close = function(e) {
			e.preventDefault();

			$el.removeClass('active');
		}
	}
})( jQuery );