---
layout: default
---

# Hello Table Sort
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery

## Options

## Code
Gusto JS
```javascript
$('.careers-table').each(function() {
	var table = new GUSTO.CareersTable($(this));
	table.init();
});
(function( $ ) {
	var CareersTable = GUSTO.CareersTable = function CareersTable(el) {
		// Elements
		var $el              = $(el);
		var $table           = $('table', $el);
		var $select_position = $('#CareerPositionSelect', $el);
		var $select_team     = $('#CareerTeamSelect', $el);
		var $select_location = $('#CareerLocationSelect', $el);
		var $select_city     = $('#CareerCitySelect', $el);
		var $external_filter = $('[data-filter-target]');

		// Variables
		var rows             = new Array();
		var filter_positions = new Array();
		var filter_teams     = new Array();
		var filter_locations = new Array();
		var filter_cities    = new Array();
		var active_position  = 'All Positions';
		var active_team      = 'All Teams';
		var active_location  = 'All Locations';
		var active_city      = 'All Cities';

		// Public Functions

		this.init = function() {
			$('tr', $table).each(function() {
				rows.push($(this)[0].outerHTML);
			});

			$('option', $select_position).each(function() {
				var id   = $(this).val();
				var text = $(this).text();
				filter_positions.push(new Array(id, text));
			});

			$('option', $select_team).each(function() {
				var id   = $(this).val();
				var text = $(this).text();
				filter_teams.push(new Array(id, text));
			});

			$('option', $select_location).each(function() {
				var id   = $(this).val();
				var text = $(this).text();

				filter_locations.push(new Array(id, text));
			});

			$('option', $select_city).each(function() {
				var id   = $(this).val();
				var text = $(this).text();
				filter_cities.push(new Array(id, text));
			});

			// Event Handlers
			$select_position.on('change', _filterPosition);
			$select_team.on('change', _filterTeam);
			$select_location.on('change', _filterLocation);
			$select_city.on('change', _filterCity);
			$external_filter.on('click', _updateFilter);

			_refreshListeners();
		}

		// Private Functions
		var _updateFilter = function(e) {
			e.preventDefault();

			var target  = $(this).data('filter-target');
			var value   = $(this).data('filter-value');
			var $select = $('#' + target);

			$select.val(value).change();

			$('.careers-content').css('display', 'block');
			var offset = $('.careers-content').offset().top;

			$("html, body").animate({ scrollTop: offset + "px" }, 500);
		}

		var _filterPosition = function(e) {
			active_position = $('option:selected', this).text();

			_updateTable();
		}

		var _filterTeam = function(e) {
			var id   = $(this).val();

			active_team = $('option:selected', this).text();
			active_position = 'All Positions';

			// Update Position Select values
			$select_position.empty();
			if (active_team !== 'All Teams') {
				$select_position.append($("<option></option>").text('All Positions'));
			}
			for (var i=0; i<filter_positions.length; i++) {
				if (id === filter_positions[i][0] || active_team === 'All Teams') {
					$select_position.append($("<option></option>").attr("value", filter_positions[i][0]).text(filter_positions[i][1]));
				}
			}

			_updateTable();
		}

		var _filterLocation = function(e) {
			active_location = $('option:selected', this).text();

			_updateTable();
		}

		var _filterCity = function(e) {
			var id = $(this).val();

			active_city = $('option:selected', this).text();
			active_location = 'All Locations';

			// Update Location Select values
			$select_location.empty();
			if (active_city !== 'All Cities') {
				$select_location.append($("<option></option>").text('All Locations'));
			}
			for (var i=0; i<filter_locations.length; i++) {
				if (id === filter_locations[i][0] || active_city === 'All Cities') {
					$select_location.append($("<option></option>").attr("value", filter_locations[i][0]).text(filter_locations[i][1]));
				}
			}

			_updateTable();
		}

		var _updateTable = function() {
			var target_rows = rows;

			// Update Table rows
			$('tr', $table).off();
			$table.empty();

			if (active_position !== 'All Positions') {
				var target = active_position;
				var temp_rows = new Array();
				for (var i=0; i<target_rows.length; i++) {
					if (target_rows[i].indexOf(target) >= 0) {
						temp_rows.push(target_rows[i]);
					}
				}
				target_rows = temp_rows;
			}

			if (active_team !== 'All Teams') {
				var target = active_team;
				var temp_rows = new Array();
				for (var i=0; i<target_rows.length; i++) {
					if (target_rows[i].indexOf(target) >= 0) {
						temp_rows.push(target_rows[i]);
					}
				}
				target_rows = temp_rows;
			}

			if (active_location !== 'All Locations') {
				var target = active_location;
				var temp_rows = new Array();
				for (var i=0; i<target_rows.length; i++) {
					if (target_rows[i].indexOf(target) >= 0) {
						temp_rows.push(target_rows[i]);
					}
				}
				target_rows = temp_rows;
			}

			if (active_city !== 'All Cities') {
				var target = active_city;
				var temp_rows = new Array();
				for (var i=0; i<target_rows.length; i++) {
					if (target_rows[i].indexOf(target) >= 0) {
						temp_rows.push(target_rows[i]);
					}
				}
				target_rows = temp_rows;
			}

			if (target_rows.length <= 0) {
				$el.addClass('no-results');
			}else {
				$el.removeClass('no-results');
				for (var i=0; i<target_rows.length; i++) {
					$table.append(target_rows[i]);
				}
			}

			_refreshListeners();
		}

		var _refreshListeners = function() {
			$('tr', $table).on('click', _navigateToCareer);
		}

		var _navigateToCareer = function(e) {
			if (window.innerWidth > 960) {
				window.document.location = $(this).data('url');
			}
		}
	}
})( jQuery );
```
Gusto HTML
```html
<section>
<ul id="CareersTiles" class="block-menu square small-block-grid-2">
<li><a href="#" data-filter-target="CareerCitySelect" data-filter-value="1257"><img src="http://gusto54.com/wp-content/uploads/2016/08/venice.jpg"><h2>Los Angeles</h2></a></li><li><a href="#" data-filter-target="CareerCitySelect" data-filter-value="725"><img src="http://gusto54.com/wp-content/uploads/2016/08/Toronto-640x640.jpg"><h2>Toronto</h2></a></li>    </ul>
</section>
<div class="careers-table">
<div class="table-filters col-wrap">
<div id="TableFilterPosition" class="table-filter col clearfix">
<h3>Position</h3>
<select id="CareerPositionSelect">
<option>All Positions</option>
<option value="57">Assistant General Manager</option><option value="37">Barback</option><option value="37">Bartender</option><option value="67">Busser</option><option value="40">Catering Cook</option><option value="57">Chef de Cuisine</option><option value="49">Communications Coordinator</option><option value="49">Director of Culinary Operations</option><option value="44">Dishwasher</option><option value="40">Driver</option><option value="57">Executive Chef</option><option value="57">Floor Manager</option><option value="67">Food Runner</option><option value="57">General Manager</option><option value="49">Hiring &amp; Training Manager</option><option value="55">Host</option><option value="44">Line Cook</option><option value="44">Pizzaiolo</option><option value="44">Prep Cook</option><option value="57">President</option><option value="49">Restaurant Expansion Manager</option><option value="40">Sales &amp; Events Manager</option><option value="65">Server</option><option value="49">Social Media Manager</option><option value="57">Sous Chef</option>                        </select>
</div>
<div id="TableFilterTeam" class="table-filter col clearfix">
<h3>Team</h3>
<select id="CareerTeamSelect">
<option>All Teams</option>
<option value="37">Bar Team</option><option value="40">Catering</option><option value="44">Culinary Team</option><option value="49">Home Office/Executive Level</option><option value="55">Host Team</option><option value="57">Management</option><option value="65">Service Team</option><option value="67">Support Team</option>                        </select>
</div>
<div id="TableFilterLocation" class="table-filter col clearfix">
<h3>Location</h3>
<select id="CareerLocationSelect">
<option>All Locations</option>
<option value="725">Catering &amp; Commissary</option><option value="725">Chubby's Jamaican Kitchen</option><option value="725">Coming Soon</option><option value="1257">Felix Trattoria</option><option value="725">Gusto 101</option><option value="725">Gusto 501</option><option value="725">Gusto 54</option><option value="725">Kiin</option><option value="725">Nervosa</option><option value="725">Pai Toronto</option>                        </select>
</div>
<div id="TableFilterCity" class="table-filter col clearfix">
<h3>City</h3>
<select id="CareerCitySelect">
<option>All Cities</option>
<option value="1257">Los Angeles</option><option value="725">Toronto</option>                        </select>
</div>
<div id="TableFilterDate" class="table-filter col clearfix">
<h3>Date Posted</h3>
</div>
</div>
<table><tbody><tr data-url="http://gusto54.com/join-our-team/pizzaiolo/"><td>Pizzaiolo</td><td>Culinary Team</td><td>Gusto 101</td><td>Toronto</td><td>July 19</td><td class="mobi-table"><h4>Pizzaiolo</h4><span>Gusto 101</span><br>Culinary Team<br>Posted July 19<br><a href="http://gusto54.com/join-our-team/pizzaiolo/" class="button">View Job</a></td></tr><tr data-url="http://gusto54.com/join-our-team/2105/"><td>Prep Cook</td><td>Culinary Team</td><td>Catering &amp; Commissary</td><td>Toronto</td><td>July 17</td><td class="mobi-table"><h4>Prep Cook</h4><span>Catering &amp; Commissary</span><br>Culinary Team<br>Posted July 17<br><a href="http://gusto54.com/join-our-team/2105/" class="button">View Job</a></td></tr><tr data-url="http://gusto54.com/join-our-team/sous-chef/"><td>Sous Chef</td><td>Culinary Team, Management</td><td>Gusto 54</td><td>Toronto</td><td>July 12</td><td class="mobi-table"><h4>Sous Chef</h4><span>Gusto 54</span><br>Culinary Team, Management<br>Posted July 12<br><a href="http://gusto54.com/join-our-team/sous-chef/" class="button">View Job</a></td></tr><tr data-url="http://gusto54.com/join-our-team/floor-manager/"><td>Floor Manager</td><td>Management</td><td>Gusto 101</td><td>Toronto</td><td>July 5</td><td class="mobi-table"><h4>Floor Manager</h4><span>Gusto 101</span><br>Management<br>Posted July 5<br><a href="http://gusto54.com/join-our-team/floor-manager/" class="button">View Job</a></td></tr><tr data-url="http://gusto54.com/join-our-team/dishwasher/"><td>Dishwasher</td><td>Culinary Team</td><td>Gusto 101</td><td>Toronto</td><td>July 5</td><td class="mobi-table"><h4>Dishwasher</h4><span>Gusto 101</span><br>Culinary Team<br>Posted July 5<br><a href="http://gusto54.com/join-our-team/dishwasher/" class="button">View Job</a></td></tr><tr data-url="http://gusto54.com/join-our-team/line-cook-2/"><td>Line Cook</td><td>Culinary Team</td><td>Gusto 101</td><td>Toronto</td><td>July 4</td><td class="mobi-table"><h4>Line Cook</h4><span>Gusto 101</span><br>Culinary Team<br>Posted July 4<br><a href="http://gusto54.com/join-our-team/line-cook-2/" class="button">View Job</a></td></tr><tr data-url="http://gusto54.com/join-our-team/barback/"><td>Barback</td><td>Bar Team</td><td>Gusto 101</td><td>Toronto</td><td>July 4</td><td class="mobi-table"><h4>Barback</h4><span>Gusto 101</span><br>Bar Team<br>Posted July 4<br><a href="http://gusto54.com/join-our-team/barback/" class="button">View Job</a></td></tr><tr data-url="http://gusto54.com/join-our-team/prep-cook/"><td>Prep Cook</td><td>Culinary Team</td><td>Gusto 101</td><td>Toronto</td><td>July 3</td><td class="mobi-table"><h4>Prep Cook</h4><span>Gusto 101</span><br>Culinary Team<br>Posted July 3<br><a href="http://gusto54.com/join-our-team/prep-cook/" class="button">View Job</a></td></tr></tbody></table>                <p>Sorry, there are no matching results.</p>
</div>
```
Gusto CSS
```sass
.careers-table {
	margin-top: 4rem;
	table {
		width: 100%;
		table-layout: fixed;
		background: none;
		border: 0;
		margin: 0;
		tr {
			cursor: pointer;
			&:nth-of-type(odd) {
				background: rgba(128, 128, 128, 0.1);
			}
			&:nth-of-type(even) {
				background: none;
			}
			&:nth-of-type(odd),
			&:nth-of-type(even) {
				&:hover {
					background: $red;
					td {
						color: #FFFFFF;
					}
				}
			}
			td {
				vertical-align: middle;
				font-size: 1.125rem;
				font-weight: 500;
				color: $gray;
				font-family: "PFDinTextCompPro-Regular", sans-serif;
				height: 72px;
				padding: 10px 20px;
				&.mobi-table {
					display: none;
				}
			}
		}
	}
	p {
		display: none;
	}
	&.no-results {
		table {
			display: none;
		}
		p {
			display: block;
		}
	}
}
.table-filters {
	width: 102%;
	left: -1%;
	position: relative;
	.table-filter {
		padding: 0 0.5rem 1rem 0.5rem;
		h3 {
			text-align: left;
			font-size: 1.125rem;
			margin-bottom: 0.75rem;
		}
	}
}
```
## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)