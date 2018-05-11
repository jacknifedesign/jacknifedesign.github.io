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

			if ($trigger.val()) {
				console.log(value);
			}else {
				console.log('no value');
			}

			selected_rows = new Array();

			console.log('filter');
		}

		var _get_value = function(row, index) {
			// Get the value of the cell
			return $('td', row).eq(index).text();
		}

		var _update_table = function() {

		}
	}
})( jQuery );