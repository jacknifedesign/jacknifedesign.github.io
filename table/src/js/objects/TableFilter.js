(function( $ ) {
	var TableFilter = JACKNIFE.TableFilter = function TableFilter(el) {
		// Elements
		var $el       = $(el);
		var $body     = $('tbody', $el);
		var $triggers = $('select[data-filter-table="' + $el.attr('id') + '"]');

		// Variables
		var rows = $('tr', $body).toArray();

		// Public Functions

		this.init = function() {
			// Store original rows
			$el.data('OriginalRows', $('tr', $body).toArray());

			if ($triggers) {
				$triggers.on('change', _filter);
			}
		}

		// Private Functions

		var _filter = function(e) {
			e.preventDefault();

			var $trigger      = $(this);
			var column        = $trigger.data('filter-column');
			var value         = $trigger.val();
			var selected_rows = new Array();

			if (value === 'default') {
				selected_rows = rows;
			}else {
				for (var i = 0; i < rows.length; i++) {
					var target = _get_value(rows[i], column);
					if (value === target) {
						selected_rows.push(rows[i]);
					}
				}
			}

			// Store the selected rows
			$el.data('SelectedRows', rows);

			$el.trigger('FilteredTable');

			_update_table();
		}

		var _get_value = function(row, index) {
			// Get the value of the cell
			return $('td', row).eq(index).text();
		}

		var _update_table = function() {
			var target_rows = $el.data('SelectedRows');

			$body.empty();
			for (var i = 0; i < target_rows.length; i++) {
				$body.append(target_rows[i]);
			}
		}
	}
})( jQuery );