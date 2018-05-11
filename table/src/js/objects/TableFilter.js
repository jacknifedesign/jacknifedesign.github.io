(function( $ ) {
	var TableFilter = JACKNIFE.TableFilter = function TableFilter(el) {
		// Elements
		var $el       = $(el);
		var $body     = $('tbody', $el);
		var $triggers = $('select[data-filter-table="' + $el.attr('id') + '"]');

		// Variables
		var rows = $('tr', $body).toArray();
		var selected_rows;

		// Public Functions

		this.init = function() {
			console.log('init');
			if ($triggers) {
				$triggers.on('change', _filter);
			}
		}

		// Private Functions

		var _filter = function(e) {
			e.preventDefault();

			var $trigger = $(this);
			var column   = $trigger.data('filter-column');
			var value    = $trigger.val();

			selected_rows = new Array();

			if (value === 'default') {
				console.log('no value');
				selected_rows = rows;
			}else {
				console.log(value);
				for (var i = 0; i < rows.length; i++) {
					var target = _get_value(rows[i], column);
					if (value === target) {
						selected_rows.push(rows[i]);
					}
				}
			}

			_update_table();
		}

		var _get_value = function(row, index) {
			// Get the value of the cell
			return $('td', row).eq(index).text();
		}

		var _update_table = function() {
			console.log(selected_rows);
			for (var i = 0; i < selected_rows.length; i++) {
				$body.empty();
				$body.append(selected_rows[i]);
			}
		}
	}
})( jQuery );