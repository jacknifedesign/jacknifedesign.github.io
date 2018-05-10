(function( $ ) {
	var TableSort = JACKNIFE.TableSort = function TableSort(el) {
		// Elements
		var $el      = $(el);
		var $toggles = $('.sort-toggle', $el);
		var $body    = $('tbody', $el);

		// Variables
		var direction   = 'DESC';
		var type        = 'default';
		var date_format = ($el.data('date-format') ? $el.data('date-format').toUpperCase() : 'DMY');
		var rows        = $('tr', $body).toArray();

		// Public Functions

		this.init = function() {
			$toggles.on('click', _click);

			var $target = $('.sort-toggle.active', $el)
			if ($('.sort-toggle.active', $el)) {
				_set_direction($target);
				_set_type($target);
				_sort($target);
			}
		}

		// Private Functions

		var _click = function(e) {
			e.preventDefault();

			var $target = $(this);

			_set_direction($target);
			_set_type($target);
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

		var _set_type = function($target) {
			if ($target.data('sort')) {
				type = $target.data('sort');
			}else {
				type = 'default';
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

				if (type === 'date') {
					valA = _format_date(valA);
					valB = _format_date(valB);
					return valA - valB;
				}else if ($.isNumeric(valA) && $.isNumeric(valB)) {
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

		var _format_date = function(str) {
			var date;
			var day;
			var month;
			var year;

			str = str.toLowerCase();
			str = str.replace(/^[^a-z0-9]*/, '');
			str = str.replace(/[^a-z0-9]*$/, '');

			if (str.length < 1) return;

			str = str.replace(/[^a-z0-9]+/g, ',');

			date = str.split(',');

			if (date.length < 3) return;

			for (var i = 0; i < 3; i++) {
				var target = date_format.substr(i, 1);
				if (target === 'D') {
					day = date[i];
				}else if (target === 'M') {
					month = date[i];
				}else if (target === 'Y') {
					year = date[i];
				}
			}

			day = day.replace(/^0/, '');
			if (day < 10) day = '0' + day;

			if( /[a-z]/.test(month) ) {
				month = month.substr(0,3);
				switch(month) {
					case "jan" : month = String(1); break;
					case "feb" : month = String(2); break;
					case "mar" : month = String(3); break;
					case "apr" : month = String(4); break;
					case "may" : month = String(5); break;
					case "jun" : month = String(6); break;
					case "jul" : month = String(7); break;
					case "aug" : month = String(8); break;
					case "sep" : month = String(9); break;
					case "oct" : month = String(10); break;
					case "nov" : month = String(11); break;
					case "dec" : month = String(12); break;
					default    : month = String(0);
				}
			}

			month = month.replace(/^0/, '');
			if (month < 10) month = '0' + month;

			year = parseInt(year);
			if( year < 100 ) { year = parseInt(year) + 2000; }
			return "" + String(year) + "" + String(month) + "" + String(day) + "";
		}
	}
})( jQuery );