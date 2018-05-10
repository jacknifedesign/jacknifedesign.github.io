var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {
		$('.table-sort').each(function() {
			var table = new JACKNIFE.TableSort($(this));
			table.init();
		});

		$('.table-filter').each(function() {
			var table = new JACKNIFE.TableFilter($(this));
			table.init();
		});
	});
})( jQuery );