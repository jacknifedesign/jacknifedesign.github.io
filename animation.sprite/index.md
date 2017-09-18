---
layout: default
---

# Hello Sprite Animation
[back]({{ site.url }}/)

## Description
Control Sprite animations

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
	var SpriteAnimation = RUNNYMEDE.SpriteAnimation = function SpriteAnimation(el) {
		// Elements
		var $el = $(el);

		// Variables
		var _sprite       = this;
		var current_frame = 0;
		var current_loop  = 0;
		var frame_offset  = ($el.data('frame_offset') ? $el.data('frame_offset') : 1);
		var frame_limit   = ($el.data('frame_limit') && $el.data('frame_limit') > 0 ? $el.data('frame_limit') : 1);
		var delay         = ($el.data('delay') ? $el.data('delay') : 0);
		var speed         = ($el.data('speed') ? $el.data('speed') : 150);
		var frameTimer    = null;
		var delayTimer    = null;

		// Public Functions
		this.init = function() {
			// frame_limit and frame_offset scales back due to current_frame starting at 0;
			frame_limit--;
			frame_offset--;
			if (frame_offset > frame_limit) {
				frame_offset = frame_limit;
			}
			if (frame_offset < 0) {
				frame_offset = 0;
			}
			_updateFrame(frame_offset);
		}

		this.play = function() {
			delayTimer = setTimeout(function() {
				frameTimer = setInterval(function() {
					current_frame++;
					current_frame = _checkFrameLimit(current_frame);
					_updateFrame(current_frame);
				}, speed);
			}, delay);		
		}

		this.setFrame = function(target_frame) {
			this.stop();
			target_frame = _checkFrameLimit(target_frame);
			_updateFrame(target_frame);
		}

		this.reset = function() {
			this.stop();
			_updateFrame(frame_offset);
		}

		this.stop = function() {
			clearTimeout(delayTimer);
			clearInterval(frameTimer);
		}

		// Private Functions
		var _checkFrameLimit = function(target_frame) {
			// Check forward limit
			if (target_frame > frame_limit) {
				target_frame = frame_limit;
			}
			return target_frame;
		}

		var _updateFrame = function(target_frame) {
			current_frame = target_frame;
			if (current_frame >= frame_limit) {
				_sprite.stop();
			}
			var distance = 100 / frame_limit * current_frame;
			$el.css('background-position', 'center ' + distance + '%');
		}
	}
})( jQuery );
```
Runnymede 2017 JS
```javascript
$('.sprite-anim', $el).each(function() {
	var SpriteAnimation = new RUNNYMEDE.SpriteAnimation($(this));
	SpriteAnimation.init();
	$(this).data('SpriteAnimation', SpriteAnimation);
});
```
Runnymede 2017 CSS
```sass
.sprite {
	text-align: center;
	margin-bottom: 2.75rem;
	&.sprite-anim {
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: center 0%;
	}
	&.sprite-example {
		width: 200px;
		height: 200px;
		background-image: url();
	}
}
```

## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)