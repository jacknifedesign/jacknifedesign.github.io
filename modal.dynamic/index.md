---
layout: default
---

# Hello Dynamic Modal
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery

## Options

## Code
Tayco HTML
```html
<div class="modal modal-video">
	<div class="modal-bg"></div>
	<div class="modal-content-wrap">
		<div class="modal-navigation">
			<a href="#" class="close-btn">
				<span class="sr-only"><?php _e('Close', 'tayco') ?></span>
				<span class="icon icon-close"></span>
			</a>
		</div>
		<div class="modal-content">
		</div>
	</div>
</div>
```
Tayco CSS
```sass
.modal-open {
	overflow: hidden;
}

.modal {
	position: fixed;
	z-index: 1100;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: none;
	&.modal-open {
		display: block;
	}
	.modal-bg {
		content: ' ';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: $dark-grey;
		cursor: pointer;
		opacity: 0.95;
	}
	.modal-content-wrap {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		max-width: 75%;
		max-height: 90%;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		.modal-content {
			display: block;
			height: 100%;
			width: 100%;
			position: relative;
			iframe {
				width: 100%;
				height: 100%;
			}
		}
		.modal-navigation {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			.close-btn {
				position: absolute;
				top: 0rem;
				right: -2.5rem;
				width: 25px;
				height: 25px;
				.icon {
					margin: 0;
				}
			}
		}
	}
}
```
Tayco JS
```javascript
var TAYCO = TAYCO || {};

(function( $ ) {
	var VideoModal = TAYCO.VideoModal = function VideoModal(el) {
		// Elements
		var $el        = $(el);
		var $modal_bg  = $('.modal-bg', $el);
		var $content   = $('.modal-content', $el);
		var $close_btn = $('.close-btn', $el);
		var $body      = $('body');
		var $triggers  = $('[data-video-modal]');

		// Variables

		// Public Functions
		this.init = function() {
			// Apply listeners
			$triggers.on('click', _openModal);
			$modal_bg.on('click', _closeModal);
			$close_btn.on('click', _closeModal);
			return;
		}

		// Private Functions
		var _openModal = function(e) {
			var width = window.innerWidth;
			if (width > 1024) {
				// Open the modal
				e.preventDefault();

				var url = $(this).attr('href');
				_prepareVideo(url);

				$body.addClass('modal-open');
				$el.addClass('modal-open');
				return;
			}
		}

		var _closeModal = function(e) {
			// Close the modal
			e.preventDefault();
			$body.removeClass('modal-open');
			$el.removeClass('modal-open');

			$('iframe', $el).remove();
			return;
		}

		var _prepareVideo = function(url) {
			url = url.split('v=');
			url = url[1];
			url = url.split('&');
			url = url[0];

			var str = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + url + '?&autoplay=1" frameborder="0" allowfullscreen></iframe>';

			$content.html(str);
		}

	}
})( jQuery );
```
Tayco JS
```javascript
$('.modal-video').each(function() {
	var VideoModal = new TAYCO.VideoModal($(this));
	VideoModal.init();
	$(this).data('VideoModal', VideoModal);
});
```

## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)