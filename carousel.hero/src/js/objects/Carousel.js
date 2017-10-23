var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Carousel = JACKNIFE.Carousel = function Carousel(el) {
		// Elements
		var $el         = $(el);
		var $bg         = $('.hero-bg', $el);
		var $container  = $('.container', $el);
		var $neighbour  = $('+ section', $el);
		var $navigation = $('.hero-navigation', $el);

		// Variables
		var height         = $el.outerHeight();
		var is_transparent = ($header.hasClass('over-hero') ? true : false);
		var timeout;

		// Public Functions
		this.init = function() {
			// Apply listeners
			/*if ($navigation.length) {
				$('li', $navigation).on('click', _nav_click);
				timeout = setTimeout(function() {
					$('[data-slide="1"]', $navigation).click();
				}, 4000);
			}*/

			return;
		}

		// Private Functions

		/*var _nav_click = function(e) {
			e.preventDefault();

			clearTimeout(timeout);
			target = $(this).data('slide');
			_nav_to(target);
		}

		var _nav_to = function(target) {
			$('[data-slide]', $el).removeClass('active');
			$target = $('[data-slide="' + target + '"]', $el);
			$target.addClass('active');
			if ($('video', $target).length) {
				$video = $('video', $target).get(0);
				if ($video.paused && $('video', $target).css('display') !== 'none') {
					$video.play();
				}
			}
		}*/
	}
})( jQuery );