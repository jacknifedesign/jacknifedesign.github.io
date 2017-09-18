---
layout: default
---

# Hello Frame Animation
[back]({{ site.url }}/)

## Description
Controls Frame animations

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
Runnymede 2017 JS
```javascript
var RUNNYMEDE = RUNNYMEDE || {};

(function( $ ) {
	var FrameAnimation = RUNNYMEDE.FrameAnimation = function FrameAnimation(el) {
		// Elements
		var $el = $(el);

		// Variables
		var index = 0;
		var speed = ($el.data('speed')) ? $el.data('speed') : 150;
		var interval;

		// Public Functions

		this.init = function() {
			$('.frame', $el).eq(index).addClass('active-frame');
		}

		this.play = function() {
			interval = setInterval(function() {
				index++;
				var $target = $('.frame', $el).eq(index);
				if ($target.length) {
					$('.frame', $el).removeClass('active-frame');
					$target.addClass('active-frame');
				}else {
					clearInterval(interval);
				}
			}, speed);
		}

		this.stop = function() {
			clearInterval(interval);
		}

		this.reset = function() {
			index = 0;
			var $target = $('.frame', $el).eq(index);
			var $frames = $('.frame', $el).not($target);
			$target.addClass('active-frame');
			$frames.removeClass('active-frame');
			clearInterval(interval);
		}

		// Private Functions
	}
})( jQuery );
```
Runnymede 2017 JS
```javascript
$('.frame-anim', $el).each(function() {
	var FrameAnimation = new RUNNYMEDE.FrameAnimation($(this));
	FrameAnimation.init();
	$(this).data('FrameAnimation', FrameAnimation);
});
```
Runnymede 2017 SASS
```sass
.frame-anim {
	position: relative;
	&:after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	.frame {
		opacity: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 50%;
		right: 50%;
		@include transform(translate(50%, -50%));
		img {
			width: 100%;
		}
		&.active-frame {
			opacity: 1;
		}
	}
}
```

## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)