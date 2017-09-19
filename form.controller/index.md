---
layout: default
---

# Hello Form Controller
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery

## Options

## Code
Gusto JS
```
$('select', '#FormSelect').change(function(e) {
	var $prev_target = $('.form-wrapper').not('.hidden');
	var $target;
	var value = $(this).val();

	// Navigate to Careers Page
	if (value.indexOf('http://') === 0) {
		window.location.href = $(this).val();
		return;
	}else {
		$target = $('#' + value);
	}
	// Clear inputs on active form
	$('[data-target-fields] :input:checked', $prev_target).click();
	$('form', $target)[0].reset();
	$('form', $target).find('input, select, textarea').prop('disabled', false);
	$('.form-wrapper').not('.disabled').addClass('disabled');
	$target.removeClass('disabled');
	// Toggle active form
	$('.form-wrapper.disabled').find('input, select, textarea').prop('disabled', true);
	$('.form-wrapper').addClass('hidden');
	$target.removeClass('hidden');

	var offset = $('#FormSelect').offset().top - $('header').height();
	$('body').stop().animate({
		'scrollTop': offset
	}, 700);
});

$('.form-wrapper.disabled').find('input, select, textarea').prop('disabled', true);

$('[data-target-other]', 'form').each(function() {
	// Show/Hide Other Field
	$('select', this).on('change', toggleOther);
});

function toggleOther(e) {
	var $select_parent = $(this).closest($('[data-target-other]', 'form'));
	var $target = $('.' + $select_parent.attr('data-target-other'));
	var $parent = $target.closest($('.columns'));

	// Show additional field if value is Other
	if ($(this).val() === 'Other') {
		$parent.removeClass('hidden');
		clearFields($(':input', $target));
	}else if (!$parent.hasClass('hidden')) {
		$parent.addClass('hidden');
		clearFields($(':input', $target));
	}
}

$('[data-target-fields]', 'form').each(function() {
	// Show/Hide conditional fields
	$('input', this).on('change', toggleField);
});

function toggleField(e) {
	var $parent = $(this).closest($('[data-target-fields]', 'form'));
	var targets = $parent.attr('data-target-fields');

	targets = targets.split(', ');

	for (x in targets) {
		var $target = $('.' + targets[x]);
		var $input  = $(':input', $target);
		var $parent = $target.closest($('.columns'));
		// Clear the input
		clearFields($input);
		// Toggle input display
		if ($parent.hasClass('hidden')) {
			$parent.removeClass('hidden');
			// Show nested fields
			if ($parent.attr('data-target-radio')) {
				$(':checked', $parent).change();
			}
		}else {
			$parent.addClass('hidden');
			// Hide nested fields
			if ($parent.attr('data-target-radio')) {
				var radios = $parent.attr('data-target-radio');
				radios = radios.split(', ');
				for (y in radios) {
					var $target = $('.' + radios[y]);
					var $input = $(':input', $target);
					var $parent = $target.closest($('.columns'));

					clearFields($input);
					$parent.addClass('hidden');
				}
			}
		}
	}
}

$('[data-target-radio]', 'form').each(function() {
	// Show/Hide conditional fields
	$('input', this).on('change', toggleRadioField);
});

function toggleRadioField(e) {
	var $parent = $(this).closest($('[data-target-radio]', 'form'));
	var targets = $parent.attr('data-target-radio');

	targets = targets.split(', ');

	var $selected = $(this).closest($('.wpcf7-list-item', 'form'));
	var target_index = $selected.index();
	for (x in targets) {
		var $target = $('.' + targets[x]);
		var $input  = $(':input', $target);
		var $parent = $target.closest($('.columns'));
		// Clear the input
		clearFields($input);
		// Toggle input display
		if ($parent.hasClass('hidden') && target_index === parseInt(x)) {
			$parent.removeClass('hidden');
		}else {
			$parent.addClass('hidden');
		}
	}
}

function clearFields($input) {
	// Use this function when clearing specific fields instead of the entire form
	$input.each(function() {
		switch (this.type){
			case 'text':
			case 'email':
			case 'tel':
			case 'number':
			case 'date':
				$(this).val(this.defaultValue);
			case 'select':
				$('option', this).prop('selected', function() {
					return this.defaultSelected;
				});
			case 'checkbox':
			case 'radio':
				$(this).val(this.defaultValue);
				this.checked = this.defaultChecked;
		}
	});
}

function resetHidden(e) {
	var $form = $(this);
	var interval = setInterval(function() {
		if ($('.wpcf7-response-output', $form).hasClass('wpcf7-mail-sent-ok')) {
			$('[data-hidden]', $form).addClass('hidden');
			clearInterval(interval);
		}else if ($('.wpcf7-response-output', $form).hasClass('wpcf7-validation-errors')) {
			clearInterval(interval);
		}
	}, 300);
}

$('form', '.form-wrapper').on('submit', resetHidden);

$('[data-locations]').each(function() {
	var $form  = $(this);
	var $field = $('.locations-field', $form);

	var locations = $form.attr('data-locations');

	locations = locations.split(', ');
	for (x in locations) {
		$field.append($('<option>', {value:locations[x], text:locations[x]}));
	}
});

$('[data-position]').each(function() {
	var $form  = $(this);
	var $field = $('.contact-4-position input', $form);

	var position = $form.attr('data-position');

	$field.val(position);
	$field.prop('readonly', true);
});
 ```

## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)