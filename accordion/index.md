---
layout: default
---

# Hello Accordion
[back]({{ site.url }}/)

## Description
Can open or close Accordions inside or outside of the element structure of the Accordion

- Open Accordion
- Close Accordion
- Toggle Accordion
- Open All Accordions
- Close All Accordions
- Trigger events after Open
- Trigger events after Close

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery

## Options

## Code
Tayco App JS
```javascript
$('.accordion').each(function() {
	var Accordion = new TAYCO.Accordion($(this));
	Accordion.init();
	$(this).data('Accordion', Accordion);
});
```

Tayco JS
```javascript
var TAYCO = TAYCO || {};

(function( $ ) {
	var Accordion = TAYCO.Accordion = function Accordion(el) {
		// Elements
		var $el      = el;
		var $trigger = $('[data-acc-trigger]', $el);

		// Variables

		// Public Functions
		this.init = function() {
			// Apply listeners
			$trigger.on('click', _toggleOpen);
			return;
		}

		// Private Functions
		var _toggleOpen = function(e) {
			e.preventDefault();

			$el.toggleClass('active');
		}
	}
})( jQuery );
```

Tayco HTML
```html
<div class="accordion">
	<div data-acc-trigger>
		<p>Trigger</p>
	</div>
	<div data-acc-target>
		<p>Target</p>
	</div>
</div>
```

Tayco SASS
```sass
.accordion {
	position: relative;
	[data-acc-target] {
		display: none;
	}
	[data-acc-trigger]:hover {
		cursor: pointer;
	}
	&.active {
		[data-acc-target] {
			display: block;
		}
	}
}
```

eShipper JS
```var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	var Accordion = JACKNIFE.Accordion = function Accordion(el, options) {
		var $el = $(el);

		// Variables
		var defaults = { 'buffer' : 0 }
		var id       = $el.attr('id');
		var position_buffer;

		// Elements
		var $triggers          = $('>li>.acc-trigger', $el);
		var $external_triggers = $('[data-acc="' + id + '"]');
		var $targets           = $('>li>.acc-target', $el);

		// Public Functions
		this.init = function() {
			// Set Variables
			options         = $.extend( {}, defaults, options );
			position_buffer = options.buffer;

			// Event Handlers
			$triggers.on("click", _show_target);
			$external_triggers.on("click", _show_target);
		}

		// Private Functions
		var _show_target = function(e) {
			e.preventDefault();

			var $trigger = $(e.currentTarget);
			var $parent  = $trigger.parent();
			var $target  = $('>.acc-target', $parent);
			//var animate  = false;

			// Check if trigger is external
			if ($trigger.attr('data-acc')) {
				// Find the triggers target
				var num = $trigger.attr('data-acc-trigger');

				// Open all 
				if (parseInt(num) === 0) {
					$targets.addClass('active');

					$('html, body').animate({
				        scrollTop: $el.offset().top - position_buffer
				    }, 500);

					return;
				}

				$target = $('[data-acc-target="' + num + '"]', $el);
				animate = true;
			}

			if ($trigger.hasClass('active')) {
				// Close if already open
				$trigger.removeClass('active');
				$target.removeClass('active');
				return;
			}else {
				// Update active trigger
				$triggers.removeClass('active');
				$external_triggers.removeClass('active');
				$trigger.addClass('active');

				// Close accordions
				$targets.removeClass('active');
				// Close any nested accordions
				$('.active', $targets).removeClass('active');
				// Open target accordion
				$target.addClass('active');

				// Animate to accordion content
				//if (animate === true) {
					$parent = $target.parent();
					$('html, body').animate({
				        scrollTop: $parent.offset().top - position_buffer
				    }, 500);
				//}
				return;
			}
		}
	}
})( jQuery );
```

## Examples
- [Example 01](examples/01)

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)