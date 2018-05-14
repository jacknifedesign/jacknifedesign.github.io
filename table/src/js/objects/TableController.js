(function( $ ) {
	var TableController = JACKNIFE.TableController = function TableController(el) {
		// Elements
		var $el       = $(el);
		var $body     = $('tbody', $el);

		// Variables
		var rows = $('tr', $body).toArray();

		// Public Functions

		this.init = function() {
			console.log('init controller');
		}

		// Private Functions
	}
})( jQuery );