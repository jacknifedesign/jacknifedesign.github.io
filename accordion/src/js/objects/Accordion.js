var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Accordion = JACKNIFE.Accordion = function Accordion(el) {
		// Elements
		var $el = el;

		// Variables
		var id = ($el.attr('id')) ? $el.attr('id') : null;

		// Public Functions
		this.init = function() {
			console.log(id);
			// Apply listeners
			
			$(window).on('acc-all-open', _open);
			$(window).on('acc-all-close', _close);

			if (id) {
				$('[data-acc-open="' + id + '"]').on('click', _open);
				$('[data-acc-close="' + id + '"]').on('click', _close);
				$('[data-acc-toggle="' + id + '"]').on('click', _toggle);
			}else {
				$('[data-acc-open]', $el).on('click', _open);
				$('[data-acc-close]', $el).on('click', _close);
				$('[data-acc-toggle]', $el).on('click', _toggle);
			}
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