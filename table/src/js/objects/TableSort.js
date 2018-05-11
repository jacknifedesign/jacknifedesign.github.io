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

			// Set initial sort
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
			// Determine if the sort direction is ASC or DESC
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
			// Set the type of sorting
			// 'date' and 'default' accepted
			// 'default' covers alphanumeric
			if ($target.data('sort')) {
				type = $target.data('sort');
			}else {
				type = 'default';
			}
		}

		var _sort = function($target) {
			// Sort the rows
			var index = $target.index();
			// Determine the order
			rows = rows.sort(_compare(index));
			// Determine the direction
			if (direction === 'DESC') {
				rows = rows.reverse();
			}
			// Draw the rows
			for (var i = 0; i < rows.length; i++) {
				$body.append(rows[i]);
			}
		}

		var _compare = function(index) {
			return function(a, b) {
				// Get the value of the cell
				var valA = _get_value(a, index);
				var valB = _get_value(b, index);

				if (type === 'date') {
					// Sort by Date
					valA = _format_date(valA);
					valB = _format_date(valB);
					return valA - valB;
				}else if ($.isNumeric(valA) && $.isNumeric(valB)) {
					// Sort by Number
					return valA - valB;
				}else {
					// Sort by Alphabet
					valA = valA.toString();
					valB = valB.toString();
					return valA.localeCompare(valB);
				}
			}
		}

		var _get_value = function(row, index) {
			// Get the value of the cell
			return $('td', row).eq(index).text();
		}

		var _format_date = function(str) {
			// Standardize the dates regardless of format
			var date;
			var day;
			var month;
			var year;

			// Remove special characters from the begging and end of the string
			str = str.toLowerCase();
			str = str.replace(/^[^a-z0-9]*/, '');
			str = str.replace(/[^a-z0-9]*$/, '');
			// Return if all characters have been removed
			if (str.length < 1) return;
			// Change any special characters to a comma
			str = str.replace(/[^a-z0-9]+/g, ',');

			date = str.split(',');
			// Return if there aren't enough values for DMY
			if (date.length < 3) return;
			// Match the array to the chosen Date format
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

			// Remove 0 from start of number to prevent double 0 for numbers 1-9
			// Add 0 to the start of numbers 1-9
			day = day.replace(/^0/, '');
			if (day < 10) day = '0' + day;

			// If the month is an a-z string, swap it for a number
			var pattern = /[a-z]/;
			if(pattern.test(month)) {
				// Convert month to 3 character string
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
			// Remove 0 from start of number to prevent double 0 for numbers 1-9
			// Add 0 to the start of numbers 1-9
			month = month.replace(/^0/, '');
			if (month < 10) month = '0' + month;

			// If the year is 2 digits instead of 4, add 2000 to make it 4 digits
			year = parseInt(year);
			if( year < 100 ) { year = parseInt(year) + 2000; }
			
			return "" + String(year) + "" + String(month) + "" + String(day) + "";
		}
	}
})( jQuery );