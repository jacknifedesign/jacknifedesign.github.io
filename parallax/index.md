---
layout: default
---

# Hello Parallax
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery

## Options

## Code
Kilberry HTML
```html
<section id="Hero" class="<?php echo $classes;?>">
	<div class="hero-bg">
		<img src="<?php echo $image;?>" alt="" />
	</div>
	<div class="container">
		<div class="hero-copy">
			<h1><?php echo $headline;?></h1>
		</div>
	</div>
</section>
```
Kilberry Javascript
```javascript
var KILBERRY = KILBERRY || {};

(function( $ ) {
	var Hero = KILBERRY.Hero = function Hero(el) {
		// Elements
		var $el         = $(el);
		var $bg         = $('.hero-bg', $el);
		var $container  = $('.container', $el);
		var $neighbour  = $('+ section', $el);
		var $header     = $('#Header');
		var $navigation = $('.hero-navigation', $el);

		// Variables
		var height         = $el.outerHeight();
		var is_transparent = ($header.hasClass('over-hero') ? true : false);
		var timeout;

		// Public Functions
		this.init = function() {

			if ($el.hasClass('hero-thoughtleadership')) {
				return;
			}			
			// Apply listeners
			$(window).on('scroll', _scroll);
			$(window).on('resize', _resize);
			$(window).on('load', _load);

			if ($navigation.length) {
				$('li', $navigation).on('click', _nav_click);
				timeout = setTimeout(function() {
					$('[data-slide="1"]', $navigation).click();
				}, 4000);
			}

			$(window).resize();

			return;
		}

		// Private Functions

		var _scroll = function(e) {
			var position = $(window).scrollTop() * -0.5;
			$bg.css('top', position + 'px');
			$container.css('margin-top', position + 'px');
			$navigation.css('padding-bottom', (-1 * position) + 'px');

			// Alter Header background colour if over Hero
			if ($(window).scrollTop() >= height && is_transparent) {
				$header.removeClass('over-hero');
				is_transparent = false;
			}else if ($(window).scrollTop() < height && !is_transparent) {
				$header.addClass('over-hero');
				is_transparent = true;
			}
			return;
		}

		var _resize = function(e) {
			height = $el.outerHeight();
			$neighbour.css('margin-top', height);

			if ($el.hasClass('hero-video')) {
				var max_height = $(window).height();
				$el.css('max-height', max_height + 'px');
			}

			$(window).trigger('scroll');
			return;
		}

		var _load = function(e) {
			// The resize function does not trigger when images
			// cause a scrollbar to be added to the page.
			// Browsers do not recognize this as a window resize
			// despite the viewport size changing. Resize must be
			// triggered manually.
			setTimeout(function() {$(window).trigger('resize');}, 1);
			return;
		}

		var _nav_click = function(e) {
			e.preventDefault();

			clearTimeout(timeout);
			target = $(this).data('slide');
			_nav_to(target);
		}

		var _nav_to = function(target) {
			$('[data-slide]', $el).removeClass('active');
			$target = $('[data-slide="' + target + '"]', $el);
			$target.addClass('active');
			if ($('video', $target).length) {
				$video = $('video', $target).get(0);
				if ($video.paused && $('video', $target).css('display') !== 'none') {
					$video.play();
				}
			}
		}
	}
})( jQuery );
```
Kilberry CSS
```sass
#Hero {
	position: fixed;
	top: 0;
	background: $black;
	color: $white;
	padding: 0;
	width: 100%;
	&.hero-static {
		.hero-bg {
			padding-bottom: 44.27%;
		}
		.container {
			.hero-copy {
				h1 {
					font-size: 6rem;
					margin: 0;
					@include before_bar('default', $white);
				}
			}
		}
	}
	&.hero-sm {
		.hero-bg {
			padding-bottom: 22.14%;
		}
		.container {	
			.hero-copy {
				h1 {
					font-family: $montserrat;
					font-size: 2.375rem;
					text-align: center;
					text-transform: uppercase;
					letter-spacing: 5px;
					margin: 5% 0 0 0;
					&:before {
						display: none;
					}
				}
			}
		}
	}
	.hero-bg {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		&.hero-bg-mobile {
			display: none;
		}
		img,
		video {
			display: block;
			width: 100%;
			height: auto;
			position: absolute;
			top: 50%;
			right: 50%;
			@include transform(translate(50%, -50%));
		}
	}
	.container {
		position: absolute;
		top: 50%;
		right: 50%;
		width: 100%;
		height: 100%;
		@include transform(translate(50%, -50%));
		.hero-copy {
			position: absolute;
			top: 50%;
			right: 50%;
			width: 100%;
			max-width: $article-width;
			box-sizing: border-box;
			@include transform(translate(50%, -50%));
		}
	}
}
```

## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)