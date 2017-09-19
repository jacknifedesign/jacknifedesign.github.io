---
layout: default
---

# Hello Preload
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies

## Options

## Code
Runnymede HTML
```html
<div id="Preloader" class="bg-light-grey">
	<div class="finger-wrap">
		<div id="PreloaderPrintWhite" class="icon finger-print">
			<img src="images/svgs/finger-print_white.svg" alt="" />
		</div>
		<div id="PreloaderPrintBlue" class="icon finger-print">
			<img src="images/svgs/finger-print_blue.svg" alt="" />
		</div>
		<div class="preload-percent">
			<span>0%</span>
		</div>
	</div>
</div>
```
Runnymede JS
```javascript
var RUNNYMEDE = RUNNYMEDE || {};

(function( $ ) {
	var Preloader = RUNNYMEDE.Preloader = function Preloader(el) {
		// Elements
		var $el           = $(el);
		var $first_thumb  = $('#PreloaderPrintWhite', $el);
		var $last_thumb   = $('#PreloaderPrintBlue', $el);
		var $percent_text = $('.preload-percent span', $el);
		var $images       = $('img');
		var $bg_images    = $('[data-preload]');
		// Variables
		var image_length     = $images.length + $bg_images.length;
		var images_loaded    = 0;
		var max_thumb_height = $('img', $first_thumb).height();

		// Public Functions

		this.init = function() {
		// Event Handlers

			$images.each(function() {
				var path   = $(this).attr('src');
				var is_gif = (path.indexOf('.gif') >= 0) ? true : false;

				if (RUNNYMEDE.is_ie && is_gif === false) {
					// IE <=10 was not preloading .jpg and .png img elements.
					// Background image load method was used as an alternative.
					var image = new Image();

					image.onload = _loadImage;

					image.src = path;

					if (image.complete) {
						image.onload();
					}
				}else {
					$(this).on('load', _loadImage);

					if (this.complete) $(this).load();
				}
			});

			$bg_images.each(function(){_createBGImage($(this))});
		}

		// Private Functions
		var _loadImage = function(e) {
			// Disable listeners to prevent load from counting twice
			$(this).off();
			this.onload = null;

			// Increment loaded count
			images_loaded++;

			// Update loadbar
			_update();
		}

		var _createBGImage = function($bgimg) {
			var image = new Image();
			var path  = $bgimg.css('background-image');

			path = path.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
			image.onload = _loadImage;

			image.src = path;

			if (image.complete) {
				image.onload();
			}
		}

		var _update = function() {
			var percent = images_loaded / image_length;
			percent = Math.round(percent * 100) / 100;

			var first_thumb_height = Math.round(max_thumb_height * (1 - percent));
			var last_thumb_height  = Math.round(max_thumb_height * percent);

			$first_thumb.css('height', first_thumb_height + 'px');
			$last_thumb.css('height', last_thumb_height + 'px');

			percent = Math.round(percent * 100);

			$percent_text.html(percent + '%');

			if (percent === 100) {
				RUNNYMEDE.preload_complete = true;
				setTimeout(function() {
					$el.fadeOut('fast', _destroy);
					$('.down-button').animate({'bottom':'0'});
				}, 1250);
			}
		}

		var _destroy = function() {
			$el.off();
			$el.remove();

			$images.off('load');

			$(document).trigger('preload_complete');
			$(document).off('preload_complete');
		}
	}
})( jQuery );
```
Runnymede CSS
```sass
#Preloader {
	.finger-wrap {
		height: 234px;
		position: absolute;
		top: 45%;
		right: 50%;
		@include transform(translate(50%, -50%));
	}
	.icon {
		overflow: hidden;
		position: absolute;
		width: 160px;
		margin: 0;
		right: 50%;
		@include transform(translate(50%, 0));
		img {
			width: 160px;
			height: 234px;
		}
		&#PreloaderPrintWhite {
			top: 0;
		}
		&#PreloaderPrintBlue {
			bottom: 0;
			height: 0;
			@include transform(translate(50%, 0) rotate(180deg));
			img {
				@include transform(rotate(180deg));
			}
		}
	}
	.preload-percent {
		padding-top: 1.25rem;
		color: $dark-blue;
		font-family: $avenir-black;
		font-size: 1.875rem;
		line-height: 1;
		position: absolute;
		top: 100%;
		right: 50%;
		@include transform(translate(50%, 0));
	}
}
```
## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)