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
## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)