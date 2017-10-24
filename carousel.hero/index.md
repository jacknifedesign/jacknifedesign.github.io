---
layout: default
---

# Hello Hero Carousel
[back]({{ site.url }}/)

## Description
- Dot navigation
- Responsive

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery

## Options

## Code
HTML
```html
<section id="Hero" class="carousel banner">
	<div class="carousel-slides">
		<ul>
			<li class="active" data-slide="0">
				<div class="banner-bg">
					<video loop="" muted="" autoplay="" poster="../../../images/1920-1080_01.jpg">
						<source src="../../../videos/1920-1080.webm" type="video/webm">
						<source src="../../../videos/1920-1080.mp4" type="video/mp4">
					</video>
				</div>
				<div class="container">
					<div class="banner-copy">
						<h1>Sollicitudin tempor id eu</h1>
						<h2>Risus in hendrerit gravida</h2>
					</div>
				</div>
			</li>
			<li data-slide="1">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_02.jpg" alt="" />
				</div>
				<div class="container">
					<div class="banner-copy">
						<h2>Pellentesque adipiscing commodo elit</h2>
						<h3>In egestas erat imperdiet</h3>
					</div>
				</div>
			</li>
			<li data-slide="2">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_03.jpg" alt="" />
				</div>
				<div class="container text-center">
					<div class="banner-copy">
						<h2>Sit amet massa vitae</h2>
					</div>
				</div>
			</li>
			<li data-slide="3">
				<div class="banner-bg">
					<img src="../../../images/1920-1080_04.jpg" alt="" />
				</div>
			</li>
		</ul>
	</div>
	<div class="carousel-navigation">
		<ul>
			<li class="active" data-slide="0"><span class="sr-only">First slide</span></li>
			<li data-slide="1"><span class="sr-only">Second slide</span></li>
			<li data-slide="2"><span class="sr-only">Third slide</span></li>
			<li data-slide="3"><span class="sr-only">Forth slide</span></li>
		</ul>
	</div>
</section>
```
JS
```javascript
var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Carousel = JACKNIFE.Carousel = function Carousel(el) {
		// Elements
		var $el         = $(el);
		var $navigation = $('.carousel-navigation', $el);

		// Variables

		// Public Functions
		this.init = function() {
			// Apply listeners
			$('li', $navigation).on('click', _nav_click);

			_nav_to(0);
			return;
		}

		// Private Functions

		var _nav_click = function(e) {
			e.preventDefault();

			var target = $(this).data('slide');
			_nav_to(target);
		}

		var _nav_to = function(target) {
			$('[data-slide]', $el).removeClass('active');
			var $target = $('[data-slide="' + target + '"]', $el);
			$target.addClass('active');
			if ($('video', $el).length) {
				var $videos = $('video', $el);
				$videos.each(function() {
					var $video = $(this).get(0);
					if (!$video.paused) {
						$video.pause();
					}
				});
			}
			if ($('video', $target).length) {
				var $video = $('video', $target).get(0);
				if ($video.paused) {
					$video.play();
				}
			}
		}
	}
})( jQuery );
```
JS
```javascript
var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {
		$('.carousel').each(function() {
			var Carousel = new JACKNIFE.Carousel($(this));
			Carousel.init();
			$(this).data('Carousel', Carousel);
		});
	});
})( jQuery );
```
CSS
```sass
.carousel {
	background: $black;
	color: $white;
	padding: 56.25% 0 0 0;
	width: 100%;
	height: 0;
	overflow: hidden;
	ul {
		list-style-type: none;
	}
	.carousel-slides {
		li {
			transition: all 0.5s ease-in-out;
			opacity: 0;
			pointer-events: none;
			position: absolute;
			width: 100%;
			height: 100%;
			top: 50%;
			right: 50%;
			@include transform(translate(50%, -50%));
			&.active {
				opacity: 1;
				pointer-events: auto;
			}
			.banner-bg {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 50%;
				right: 50%;
				@include transform(translate(50%, -50%));
			}
		}
	}
	.carousel-navigation {
		position: absolute;
		right: 50%;
		bottom: 1.25rem;
		box-sizing: border-box;
		padding: 0 1.25rem;
		@include transform(translate(50%, 0));
		li {
			display: inline-block;
			width: 10px;
			height: 10px;
			margin-right: 0.25rem;
			border-radius: 10px;
			border: 2px solid $white;
			&:last-child {
				margin-right: 0;
			}
			&:hover {
				cursor: pointer;
			}
			&:hover,
			&.active {
				background-color: $white;
			}
		}
	}
}

.banner {
	position: relative;
	background-color: $black;
	color: $white;
	padding: 0;
	.container {
		position: absolute;
		top: 50%;
		right: 50%;
		width: 100%;
		height: 100%;
		@include transform(translate(50%, -50%));
	}
	.banner-bg {
		img,
		video {
			display: block;
			width: 100%;
			height: auto;
		}
	}
	.banner-copy {
		padding: 0 1.25rem;
		width: 100%;
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		right: 50%;
		@include transform(translate(50%, -50%));
		h1, h2, h3, h4, h5, h6 {
			line-height: 1;
			clear: both;
			margin: 0;
		}
	}
}

#Hero.banner {
	.banner-copy {
		h1 {
			font-size: 4.5rem;
		}
		h2 {
			font-size: 3.25rem;
		}
	}
}
```

## Examples
- [Example 01](examples/01)

## Known Issues
- No Back button
- No Forward button
- No Keyboard control
- No Autoplay
- No Arguments
- Only crossfade animation available

## Browser Support

## License

[back]({{ site.url }}/)