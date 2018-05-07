---
layout: default
---

# Hello Tabs Controller
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery

## Options

## Code
Kilberry JS
```javascript
var KILBERRY = KILBERRY || {};

(function( $ ) {
	var Tabs = KILBERRY.Tabs = function Tabs(el) {
		// Elements
		var $el       = $(el);
		var $triggers = $('[data-tab-trigger]', $el);
		var $targets  = $('[data-tab-target]', $el);

		// Variables
		var activeIndex = 0;

		// Public Functions
		this.init = function() {
			activeIndex = $('.tab-trigger.active', $el).data('tab-trigger');

			// Apply listeners
			$triggers.on('click', _changeTab);

			return;
		}

		// Private Functions

		var _changeTab = function(e) {
			var target = $(this).data('tab-trigger');

			if (target === activeIndex) {
				return;
			}

			activeIndex = target;

			$triggers.removeClass('active');
			$targets.removeClass('active');

			$(this).addClass('active');
			$('[data-tab-target=' + target + ']', $el).addClass('active');

			e.preventDefault();
		}
	}
})( jQuery );
$('.tabs').each(function() {
	var Tabs = new KILBERRY.Tabs($(this));
	Tabs.init();
	$(this).data('Tabs', Tabs);
});
```
Kilberry CSS
```sass
.tab-nav {
	@extend %clearfix;
	a {
		font-size: 1.25rem;
		text-decoration: none;
		text-transform: uppercase;
		margin-right: 1.25rem;
		color: $black;
		display: block;
		float: left;
		position: relative;
		&:last-child {
			margin-right: 0;
		}
		&.active {
			@include before_bar('tiny', $black);
			font-weight: 600;
			top: -4px;
			&:hover {
				opacity: 1;
			}
		}
	}
}

.tab-content {
	display: none;
	&.active {
		display: block;
	}
}
```
Kilberry HTML
```html
<div class="tabs">
			<nav class="tab-nav"><a href="#" class="tab-trigger active" data-tab-trigger="0">CEO Succession</a><a href="#" class="tab-trigger" data-tab-trigger="1">High Potential</a></nav><div class="tab-content active" data-tab-target="0"><p>The transition from one CEO to the next is a crucial milestone in a company’s history and the chief priority of its board of directors. Done right, the succession will maintain the confidence of investors, customers and employees. Done wrong, it will sacrifice shareholder value, introduce unnecessary risk, and damage brands and reputations.</p>
<p>Kilberry prepares boards and companies for this transition by drawing on our expertise in executive assessment and development. We develop a deep understanding of your business, industry, and culture in order to develop an airtight succession plan and to advise on which internal or external candidate most closely fits the bill. The result is a seamless transition for you and your stakeholders.</p>
</div><div class="tab-content" data-tab-target="1"><p>Building bench strength ensures you have the leaders necessary to propel your business forward in the long-term. There are likely stars in your midst, and you may or may not have visibility to who they are. These High Potentials are vital to the continuity and health of your organization. There are two primary risks here: (1) they will leave, either because they are bored or they get recruited elsewhere; or (2) they will not adequately develop their potential.</p>
<p>Some companies have a strategy for high potential development, but it typically resembles any other coaching or training. High Potentials are different; they require a different approach to accelerate their growth and retain their talent. Using a research-based, innovative, and targeted approach, Kilberry helps companies keep their stars and ensure they are ready to take on critical roles in the future.</p>
</div>			</div>
```
## Examples
- [Example 01](examples/01)

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)