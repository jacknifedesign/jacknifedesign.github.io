var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Carousel = JACKNIFE.Carousel = function Carousel(el) {
		// Elements
		var $el         = $(el);
		var $navigation = $('.carousel-navigation', $el);

		// Variables

		// Public Functions
		this.init = function() {
			// Apply listeners
			$('li', $navigation).on('click', _nav_click);

			_nav_to(0);
			return;
		}

		// Private Functions

		var _nav_click = function(e) {
			e.preventDefault();

			var target = $(this).data('slide');
			_nav_to(target);
		}

		var _nav_to = function(target) {
			$('[data-slide]', $el).removeClass('active');
			var $target = $('[data-slide="' + target + '"]', $el);
			$target.addClass('active');
			if ($('video', $el).length) {
				var $videos = $('video', $el).get(0);
				$videos.each(function() {
					var $video = $(this);
					if (!$video.paused) {
						$video.pause();
					}
				});
			}
			if ($('video', $target).length) {
				var $video = $('video', $target).get(0);
				if ($video.paused) {
					$video.play();
				}
			}
		}
	}
})( jQuery );