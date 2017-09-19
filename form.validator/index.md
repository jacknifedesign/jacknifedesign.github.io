---
layout: default
---

# Hello Form Validator
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery

## Options

## Code
Tayco JS
```javascript
var TAYCO = TAYCO || {};

(function( $ ) {
	var Validator = TAYCO.Validator = function Validator() {

		// Public Functions
		this.init = function() {
			return;
		}

		this.validate = function($form) {
			var error = false;

			$('.wpcf7-validation-errors', $form).css('display', 'none');
			$('.wpcf7-not-valid-tip', $form).css('display', 'none');
			$('.not-valid-tip', $form).css('display', 'none');
			$('.radio-not-valid-tip', $form).css('display', 'none');

			// Validate the form
			$('input, select', $form).filter('[required]:visible').each(function() {
				var $parent = $(this).parent();
				var value   = $(this).val();
				var type    = ($(this).attr('type')) ? $(this).attr('type') : 'select';
				$(this).prop('aria-invalid', false);
				// If empty value or email not entered correctly
				if (type != 'checkbox' && type != 'radio') {
					if (value == '' || value == null || (type === 'email' && !_validateEmail(value))) {
						error = true;
						$(this).prop('aria-invalid', true);
						$('.wpcf7-not-valid-tip', $parent).css('display', 'block');
						$('.not-valid-tip', $parent).css('display', 'block');
						if ($(this).closest('.duplicate-group')) {
							var $target = $(this).closest('.duplicate-group');
							$('.wpcf7-not-valid-tip', $target).css('display', 'block');
							$('.not-valid-tip', $target).css('display', 'block');
						}
					}
				}
			});

			// Check checkboxes and radio requirements
			$('fieldset', $form).each(function() {
				$('input', this).filter('[required]:visible').each(function() {
					var type = $(this).attr('type');
					var name = $(this).attr('name');
					var is_required = true;

					if (type != 'checkbox' && type != 'radio') {
						return;
					}

					if ($('input[name="' + name + '"]', $form).is(":checked")) {
						is_required = false;
					}

					if (is_required === true) {
						var $target = $(this).closest('fieldset');
						if (!$target) {
							$target = $(this).closest('.duplicate-group');
						}
						$('.radio-not-valid-tip', $target).css('display', 'block');
						error = true;
					}
				});
			});
			// Show the general error message if one of the inputs has an error
			if (error) {
				$('.wpcf7-validation-errors', $form).css('display', 'block');
			}

			return error;
		}

		// Private Functions
		var _validateEmail = function(email) {
			// Test if an email was entered
			var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
			return pattern.test(email);
		}

	}
})( jQuery );
```
## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)