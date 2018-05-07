---
layout: default
---

# Hello Countdown
[back]({{ site.url }}/)

## Description
Displays a countdown using a specific start time which displays a message once time expires
- Includes optional Days/Hours/Minutes/Seconds timer
- Launches event when time expires

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery

## Options

## Code
JS
```javascript
var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {
		// Initialize the objects
		$('.countdown').each(function() {
			var Countdown = new JACKNIFE.Countdown($(this));
			Countdown.init();
			$(this).data('Countdown', Countdown);
		});
	});
})( jQuery );
```
JS
```javascript
var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Countdown = JACKNIFE.Countdown = function Countdown(el) {
		// Elements
		var $el          = el;
		var $dayCount    = $('.countdown-timer-days .timer-count', $el);
		var $hourCount   = $('.countdown-timer-hours .timer-count', $el);
		var $minuteCount = $('.countdown-timer-minutes .timer-count', $el);
		var $secondCount = $('.countdown-timer-seconds .timer-count', $el);

		// Variables
		var targetStart  = $el.data('start-time');
		var targetEnd    = $el.data('end-time');
		var startDate    = new Date(targetStart).getTime();
		var endDate      = new Date(targetEnd).getTime();
		var duration     = endDate - startDate;
		var timeInterval = null;

		// Public Functions
		this.init = function() {
			
			if ($el.hasClass('countdown-complete')) {
				_refreshMessage();
				return;
			}

			// Apply listeners
			timeInterval = setInterval(_updateTime, 1000);

			return;
		}

		// Private Functions
		var _updateTime = function(e) {
			var now      = new Date().getTime();
			var distance = endDate - now;

			// Time calculations for days, hours, minutes and seconds
			var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Update Days
			$dayCount.html(days);

			// Update Hours
			$hourCount.html(hours);

			// Update Minutes
			$minuteCount.html(minutes);

			// Update Seconds
			$secondCount.html(seconds);

			if (distance < 0) {
				clearInterval(timeInterval);
				$el.addClass('countdown-complete');
			}
		}

		var _refreshMessage = function() {
			//$('p', $el).html(endMessage);
		}
	}
})( jQuery );
```
CSS
```sass
.countdown {
	&.countdown-complete {
		.countdown-int {
			p {
				margin-right: 0;
			}
		}
		.countdown-timer {
			display: none;
		}
	}
	.countdown-int {
		@extend %clearfix;
		display: block;
		position: relative;
		right: 50%;
		@include transform(translate(50%, 0));
		p {
			color: inherit;
			text-transform: uppercase;
			margin: 0;
			line-height: 120px;
			font-size: 3.75rem;
			float: left;
			margin-right: 9.375rem;
		}
	}
	.countdown-timer {
		float: left;
		margin: 16px 0.5rem;
		position: relative;
		.timer-int {
			text-align: center;
			position: absolute;
			top: 50%;
			right: 50%;
			@include transform(translate(50%, -50%));
			.timer-count {
				color: inherit;
				font-size: 2.5rem;
				line-height: 1;
				display: block;
			}
			> span {
				font-size: 0.75rem;
				font-weight: normal;
				color: inherit;
			}
		}
	}
}
```
HTML
```html
<div class="countdown" data-start-time="June 10, 2017 10:00:00" data-end-time="December 10, 2017 17:00:00">
	<div class="countdown-int">
		<div class="countdown-timer countdown-timer-days">
			<div class="timer-int">
				<span class="timer-count">0</span>
				<span>Days</span>
			</div>
		</div>
		<div class="countdown-timer countdown-timer-hours">
			<div class="timer-int">
				<span class="timer-count">0</span>
				<span>Hours</span>
			</div>
		</div>
		<div class="countdown-timer countdown-timer-minutes">
			<div class="timer-int">
				<span class="timer-count">0</span>
				<span class="desktop-only">Minutes</span>
				<span class="mobile-only">Min</span>
			</div>
		</div>
		<div class="countdown-timer countdown-timer-seconds">
			<div class="timer-int">
				<span class="timer-count">0</span>
				<span class="desktop-only">Seconds</span>
				<span class="mobile-only">Secs</span>
			</div>
		</div>
	</div>
</div>
```

## Examples
- [Example 01](examples/01)

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)