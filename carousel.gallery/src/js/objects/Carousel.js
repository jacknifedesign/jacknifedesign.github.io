var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Carousel = JACKNIFE.Carousel = function Carousel(el) {
		// Elements
		var $el       = $(el);
		var $prev_btn = $('.carousel-prev', $el);
		var $next_btn = $('.carousel-next', $el);
		var $carousel = $('.carousel-nav', $el);
		var $thumbs   = $('ul', $carousel);
		var $thumb    = $('li', $thumbs);
		var $content  = $('.carousel-slides ul', $el);
		var $images   = $('li', $content);

		// Variables
		var index = 0;
		var limit = 0;

		// Public Functions
		this.init = function() {
			// Apply listeners
			$prev_btn.on('click', _showPrevious);
			$next_btn.on('click', _showNext);
			$('a', $thumb).on('click', _showImg);
			$(window).on('resize', _resize);

			$(window).resize();
			return;
		}

		// Private Functions
		var _showImg = function(e) {
			e.preventDefault();

			var target = $(this).data('index');
			var distance = $el.width() * target;

			$content.css('left', -distance + 'px');
		}

		var _showPrevious = function(e) {
			e.preventDefault();

			var carousel_width = $carousel.width();
			var position       = $thumbs.position().left;
			var thumbs_width   = $thumbs.width();
			var distance;

			if (limit <= 1) {
				return;
			}

			index--;
			if (index === -1) {
				index = limit -1;
			}else if (index < 0) {
				index = 0;
			}

			distance = carousel_width * index;

			$thumbs.css('left', -distance + 'px');
		}

		var _showNext = function(e) {
			e.preventDefault();

			var carousel_width = $carousel.width();
			var position       = $thumbs.position().left;
			var thumbs_width   = $thumbs.width();
			var distance;

			if (limit <= 1) {
				return;
			}

			index++;
			if (index === limit) {
				index = 0;
			}else if (index > limit - 1) {
				index = limit - 1;
			}

			distance = carousel_width * index;

			$thumbs.css('left', -distance + 'px');
		}

		var _resize = function(e) {
			var thumb_width    = $thumb.width() + 16;
			var target_width   = thumb_width * $thumb.length;
			var carousel_width = $carousel.width();
			var thumbs_width   = $thumbs.width();
			var distance       = carousel_width * index;
			var content_width  = $el.width() * $thumb.length;

			$content.width(content_width);
			$images.width(content_width / $thumb.length);

			limit = target_width / $carousel.width();
			$thumbs.width(target_width);

			if (limit <= 1) {
				return;
			}

			if (index === -1 || index > limit - 1) {
				index = limit - 1;
			}else if (index < 0 || index === limit) {
				index = 0;
			}

			distance = carousel_width * index;

			$thumbs.css('left', -distance + 'px');
		}

	}
})( jQuery );