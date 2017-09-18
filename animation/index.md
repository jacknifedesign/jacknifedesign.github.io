---
layout: default
---

# Hello Animation
[back]({{ site.url }}/)

## Description
Controls CSS animations

- Play animation
- Pause animation
- Stop animation
- Reset animation
- Loop animation
- Loop X animation
- Yo-Yo animation
- Reverse animation
- Set frame

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery

## Options

## Code
Runnymede JS
```javascript
var RUNNYMEDE = RUNNYMEDE || {};

(function( $ ) {
	var Animation = RUNNYMEDE.Animation = function Animation(el, order) {
		// Elements
		var $el = $(el);

		// Variables
		var delay = ($el.data('delay')) ? $el.data('delay') : 0;
		var timeout;

		// Public Functions

		this.init = function() {

		}

		this.play = function() {
			timeout = setTimeout(function() {
				$el.addClass('active');
			}, delay);
		}

		this.stop = function() {
			$el.removeClass('active');
			clearTimeout(timeout);
		}

		this.reset = function() {
			$el.removeClass('active');
			clearTimeout(timeout);
		}

		// Private Functions
	}
})( jQuery );
```
Runnymede 2017 JS
```javascript
$('.anim', $el).each(function() {
	var Animation = new RUNNYMEDE.Animation($(this));
	Animation.init();
	$(this).data('Animation', Animation);
});
```
## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)