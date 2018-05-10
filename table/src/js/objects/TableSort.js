(function( $ ) {
	var TableSort = JACKNIFE.TableSort = function TableSort(el) {
		// Elements
		var $el      = $(el);
		var $toggles = $('.sort-toggle', $el);

		// Variables

		// Public Functions

		this.init = function() {
			$toggles.on('click', _sort);
		}

		// Private Functions

		var _sort = function(e) {
			e.preventDefault();

			var $target = $(this);

			if ($target.hasClass('active')) {
				if ($target.hasClass('sort-asc')) {
					$target.removeClass('sort-asc');
					$target.addClass('sort-desc');
				}else if ($target.hasClass('sort-desc')) {
					$target.removeClass('sort-desc');
					$target.addClass('sort-asc');
				}
			}else {
				$toggles.removeClass('active sort-desc sort-asc');
				$target.addClass('active sort-desc');
			}
		}
	}
})( jQuery );