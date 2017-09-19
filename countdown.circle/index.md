---
layout: default
---

# Hello Circle Countdown
[back]({{ site.url }}/)

## Description
Displays a countdown using a specific start time which displays a message once time expires
- Includes optional Days/Hours/Minutes/Seconds timer
- Launches event when time expires
- Circle animation

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery
- progressbar.min.js (https://kimmobrunfeldt.github.io/progressbar.js/)

## Options

## Code
Tayco JS
```javascript
var $Countdown = $('#Countdown');
if ($Countdown.length) {
	var Countdown = new TAYCO.Countdown($Countdown);
	Countdown.init();
	$Countdown.data('Countdown', Countdown);
}
```
Tayco JS
```javascript
var TAYCO = TAYCO || {};

(function( $ ) {
	var Countdown = TAYCO.Countdown = function Countdown(el) {
		// Elements
		var $el          = el;
		var $dayCount    = $('#CountdownDays .timer-count', $el);
		var $hourCount   = $('#CountdownHours .timer-count', $el);
		var $minuteCount = $('#CountdownMinutes .timer-count', $el);
		//var $secondCount = $('#CountdownSeconds .timer-count', $el);

		// Variables
		var endMessage   = TAYCO.countdownEndMessage;
		var targetStart  = $el.data('start-time');
		var targetEnd    = $el.data('end-time');
		var startDate    = new Date(targetStart).getTime();
		var endDate      = new Date(targetEnd).getTime();
		var duration     = endDate - startDate;
		var timeInterval = null;

		var DayBar    = null;
		var HourBar   = null;
		var MinuteBar = null;
		//var SecondBar = null;

		// Public Functions
		this.init = function() {
			
			if ($el.hasClass('countdown-complete')) {
				return;
			}

			// Apply listeners
			timeInterval = setInterval(_updateTime, 1000);

			DayBar = new ProgressBar.Circle(CountdownDays, {
				strokeWidth: 2,
				color: '#FFFFFF',
				trailColor: '#FF8A3D',
				trailWidth: 2
			});

			HourBar = new ProgressBar.Circle(CountdownHours, {
				strokeWidth: 2,
				color: '#FFFFFF',
				trailColor: '#FF8A3D',
				trailWidth: 2
			});

			MinuteBar = new ProgressBar.Circle(CountdownMinutes, {
				strokeWidth: 2,
				color: '#FFFFFF',
				trailColor: '#FF8A3D',
				trailWidth: 2
			});

			/*
			SecondBar = new ProgressBar.Circle(CountdownSeconds, {
				strokeWidth: 2,
				color: '#FFFFFF',
				trailColor: '#FF8A3D',
				trailWidth: 2
			});
			*/

			return;
		}

		// Private Functions
		var _updateTime = function(e) {
			var now      = new Date().getTime();
			var distance = endDate - now;
			var progress = null;

			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Update Day progress bar
			progress = (now - startDate) / duration;
			progress = (progress).toFixed(3);
			DayBar.set(progress);
			$dayCount.html(days);

			// Update Hour progress bar
			progress = 24 - hours;
			progress = (progress / 24).toFixed(3);
			HourBar.set(progress);
			$hourCount.html(hours);

			// Update Minute progress bar
			progress = 60 - minutes;
			progress = (progress / 60).toFixed(3);
			MinuteBar.set(progress);
			$minuteCount.html(minutes);

			// Update Second progress bar
			/*
			progress = 60 - seconds;
			progress = (progress / 60).toFixed(3);
			SecondBar.set(progress);
			$secondCount.html(seconds);
			*/

			if (distance < 0) {
				clearInterval(timeInterval);
				$('p', $el).html(endMessage);
				$el.addClass('countdown-complete');
			}
		}
	}
})( jQuery );
```
Tayco CSS
```sass
#Countdown {
	background: rgba(247, 134, 61, 0.95);
	max-height: 120px;
	height: 120px;
	&.countdown-complete {
		.countdown-int {
			p {
				margin-right: 0;
				a:hover {
					color: $white;
				}
			}
		}
		.countdown-timer {
			display: none;
		}
	}
	.countdown-int {
		@extend %clearfix;
		display: inline-block;
		position: relative;
		left: 50%;
		transform: translate(-50%, 0);
		-webkit-transform: translate(-50%, 0);
		-ms-transform: translate(-50%, 0);
		p {
			@include tungsten-semibold();
			color: $white;
			text-transform: uppercase;
			margin: 0;
			line-height: 120px;
			font-size: 3.75rem;
			float: left;
			margin-right: 9.375rem;
		}
	}
	.countdown-timer {
		width: 87px;
		height: 87px;
		float: left;
		margin: 16px 0.5rem;
		position: relative;
		.timer-int {
			text-align: center;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			-webkit-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			.timer-count {
				@include tungsten-semibold();
				color: $white;
				font-size: 2.5rem;
				line-height: 1;
				display: block;
			}
			> span {
				font-family: $montserrat;
				font-size: 0.75rem;
				font-weight: normal;
				color: $white;
			}
		}
	}
}
```
Tayco HTML
```html
<div id="Countdown" data-start-time="<?php echo $start_time;?>" data-end-time="<?php echo $end_time;?>"<?php echo $class;?>>
	<div class="countdown-int">
		<p><?php echo $message;?></p>
		<div id="CountdownDays" class="countdown-timer">
			<div class="timer-int">
				<span class="timer-count">0</span>
				<span>Days</span>
			</div>
		</div>
		<div id="CountdownHours" class="countdown-timer">
			<div class="timer-int">
				<span class="timer-count">0</span>
				<span>Hours</span>
			</div>
		</div>
		<div id="CountdownMinutes" class="countdown-timer">
			<div class="timer-int">
				<span class="timer-count">0</span>
				<span class="desktop-only">Minutes</span>
				<span class="mobile-only">Min</span>
			</div>
		</div>
		<!--<div id="CountdownSeconds" class="countdown-timer">
			<div class="timer-int">
				<span class="timer-count">0</span>
				<span>Seconds</span>
			</div>
		</div>-->
	</div>
</div>
```
## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)