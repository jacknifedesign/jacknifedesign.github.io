(function( $ ) {
	var TableSort = JACKNIFE.TableSort = function TableSort(el) {
		// Elements
		var $el      = $(el);
		var $toggles = $('.sort-toggle', $el);
		var $body    = $('tbody', $el);

		// Variables
		var direction = 'DESC';
		var rows      = $('tr', $body).toArray();

		// Public Functions

		this.init = function() {
			$toggles.on('click', _click);

			var $target = $('.sort-toggle.active', $el)
			if ($('.sort-toggle.active', $el)) {
				_set_direction($target);
				_sort($target);
			}
		}

		// Private Functions

		var _click = function(e) {
			e.preventDefault();

			var $target = $(this);

			_set_direction($target);
			_sort($target);
		}

		var _set_direction = function($target) {
			if ($target.hasClass('active')) {
				if ($target.hasClass('sort-asc')) {
					$target.removeClass('sort-asc');
					$target.addClass('sort-desc');
					direction = 'DESC';
				}else if ($target.hasClass('sort-desc')) {
					$target.removeClass('sort-desc');
					$target.addClass('sort-asc');
					direction = 'ASC';
				}
			}else {
				$toggles.removeClass('active sort-desc sort-asc');
				$target.addClass('active sort-desc');
				direction = 'DESC';
			}
		}

		var _sort = function($target) {
			var index = $target.index();

			rows = rows.sort(_compare(index));

			if (direction === 'DESC') {
				rows = rows.reverse();
			}

			for (var i = 0; i < rows.length; i++) {
				$body.append(rows[i]);
			}
		}

		var _compare = function(index) {
			return function(a, b) {
				var valA = _get_value(a, index);
				var valB = _get_value(b, index);

				if ($.isNumeric(valA) && $.isNumeric(valB)) {
					return valA - valB;
				}else {
					valA = valA.toString();
					valB = valB.toString();
					return valA.localeCompare(valB);
				}
			}
		}

		var _get_value = function(row, index) {
			return $('td', row).eq(index).text();
		}
	}
})( jQuery );