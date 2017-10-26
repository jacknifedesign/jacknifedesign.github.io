var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var CircleCountdown = JACKNIFE.CircleCountdown = function CircleCountdown(el) {
		// Elements
		var $el          = el;
		var $dayCount    = $('.timer-days .timer-count', $el);
		var $hourCount   = $('.timer-hours .timer-count', $el);
		var $minuteCount = $('.timer-minutes .timer-count', $el);
		var $secondCount = $('.timer-seconds .timer-count', $el);

		// Variables
		var targetStart  = $el.data('start-time');
		var targetEnd    = $el.data('end-time');
		var startDate    = new Date(targetStart).getTime();
		var endDate      = new Date(targetEnd).getTime();
		var duration     = endDate - startDate;
		var timeInterval = null;

		var DayBar       = null;
		var HourBar      = null;
		var MinuteBar    = null;
		var SecondBar    = null;
		var DayColour    = '#FF8A3D';
		var HourColour   = '#FF8A3D';
		var MinuteColour = '#FF8A3D';
		var SecondColour = '#FF8A3D';

		// Public Functions
		this.init = function() {
			
			if ($el.hasClass('countdown-complete')) {
				_refreshMessage();
				return;
			}

			// Apply listeners
			timeInterval = setInterval(_updateTime, 1000);

			DayBar = new ProgressBar.Circle(CountdownDays, {
				strokeWidth: 2,
				color: '#FFFFFF',
				trailColor: DayColour,
				trailWidth: 2
			});

			HourBar = new ProgressBar.Circle(CountdownHours, {
				strokeWidth: 2,
				color: '#FFFFFF',
				trailColor: HourColour,
				trailWidth: 2
			});

			MinuteBar = new ProgressBar.Circle(CountdownMinutes, {
				strokeWidth: 2,
				color: '#FFFFFF',
				trailColor: MinuteColour,
				trailWidth: 2
			});

			
			SecondBar = new ProgressBar.Circle(CountdownSeconds, {
				strokeWidth: 2,
				color: '#FFFFFF',
				trailColor: SecondColour,
				trailWidth: 2
			});
			

			return;
		}

		// Private Functions
		var _updateTime = function(e) {
			var now      = new Date().getTime();
			var distance = endDate - now;
			var progress = null;

			// Time calculations for days, hours, minutes and seconds
			var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
			progress = 60 - seconds;
			progress = (progress / 60).toFixed(3);
			SecondBar.set(progress);
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