var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {
		/*$('.table-sort').each(function() {
			var TableSort = new JACKNIFE.TableSort($(this));
			TableSort.init();
			$(this).data('TableSort', TableSort);
		});*/

		/*$('.table-filter').each(function() {
			var TableFilter = new JACKNIFE.TableFilter($(this));
			TableFilter.init();
			$(this).data('TableFilter', TableFilter);
		});*/

		$('.table-filter, .table-sort').each(function() {
			var TableController = new JACKNIFE.TableController($(this));
			TableController.init();
			$(this).data('TableController', TableController);
		});
	});
})( jQuery );