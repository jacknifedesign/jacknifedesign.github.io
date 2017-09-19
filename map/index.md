---
layout: default
---

# Hello Map
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies

## Options

## Code
Tayco HTML
```html
<div class="google-map" data-address="<?php echo $address;?>" data-marker="<?php echo get_bloginfo('template_url');?>/images/icons/map-marker_2x.png"></div>
```
Tayco JS
```javascript
function initMap() {
	var maps = document.getElementsByClassName('google-map');

	var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	// Generate the map(s)
	function buildMap(element) {
		var address  = element.getAttribute('data-address');
		var geocoder = new google.maps.Geocoder();
		var map;
		var marker;
		var center;
		// Locate the address
		geocoder.geocode( { 'address': address }, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var args = { center: results[0].geometry.location,
							 zoom: 17,
							 scrollwheel: false,
							 styles: [{"stylers": [{"saturation": -100}]},
							 		  {"featureType":"water",
							 		   "elementType":"geometry",
							 		   "stylers":[{"color":"#e9e9e9"},{"lightness":17}]
							 		  },
							 		  {"featureType":"landscape.natural",
							 		   "elementType":"geometry",
							 		   "stylers":[{"color":"#ebebeb"}]
							 		  },
							 		  {"featureType":"road.highway",
							 		   "elementType":"geometry.fill",
							 		   "stylers":[{"color":"#d1d1d1"}]
							 		  },
							 		  {"featureType":"road.highway",
							 		   "elementType":"geometry.stroke",
							 		   "stylers":[{"color":"#8b8b8b"},{"weight":0.2}]
							 		  },
							 		  {"featureType":"road.arterial",
							 		   "elementType":"geometry",
							 		   "stylers":[{"color":"#ffffff"}]
							 		  },
							 		  {"featureType":"road.local",
							 		   "elementType":"geometry",
							 		   "stylers":[{"color":"#ffffff"}]
							 		  },
							 		  {"featureType":"poi.park",
							 		  "elementType":"geometry",
							 		  "stylers":[{"color":"#8b8b8b"},{"lightness":41}]
							 		  },
							 		  {"featureType":"poi.business",
							 		   "elementType":"geometry",
							 		   "stylers":[{"color":"#f2f2f2"}]
							 		  },
							 		  {"featureType":"poi.business",
							 		   "elementType":"geometry.stroke",
							 		   "stylers":[{"color":"#d1d1d1"}]
							 		  },
							 		  {"elementType":"labels.text.stroke",
							 		   "stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]
							 		  },
							 		  {"elementType":"labels.text.fill",
							 		   "stylers":[{"color":"#333333"},{"lightness":40}]
							 		  },
							 		  {"elementType":"labels.icon",
							 		   "stylers":[{"visibility":"off"}]
							 		  },
							 		  {"featureType":"transit",
							 		   "elementType":"geometry",
							 		   "stylers":[{"color":"#f2f2f2"},{"lightness":19}]
							 		  },
							 		  {"featureType":"administrative",
							 		   "elementType":"geometry.fill",
							 		   "stylers":[{"color":"#fefefe"},{"lightness":20}]
							 		  },
							 		  {"featureType":"administrative",
							 		   "elementType":"geometry.stroke",
							 		   "stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]
							 		}]
						   };

				if (windowWidth <= 1024) {
					args = mergeArgs(args, {draggable: false});
				}
				// Create map element
				map = new google.maps.Map(element, args);
				// Prepare marker icon
				var icon = {
					url: element.getAttribute('data-marker'),
					size: new google.maps.Size(258, 104),
					origin: new google.maps.Point(0, 0),
					anchor: new google.maps.Point(129, 26),
					scaledSize: new google.maps.Size(129, 52)
				};
				// Add a marker to the address
				marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location,
					icon: icon
				});
				// Center the map on the address
				center = map.getCenter();
				// Recenter the map when the browser is resized
				google.maps.event.addDomListener(window, "resize", function() {
					google.maps.event.trigger(map, "resize");
					map.setCenter(center);
				})
			}else {
				// Geocode not successful
			}
		});
	}

	function mergeArgs(obj1,obj2){
		var obj3 = {};
		for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
		for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
		return obj3;
	}

	for (i = 0; i < maps.length; i++) {
		buildMap(maps[i]);
	}
}
```
Tayco CSS
```sass
.google-map {
	height: 590px;
	margin-bottom: 4.688rem;
	box-shadow: $shadow;
	border-radius: 3px;
}
```

## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)