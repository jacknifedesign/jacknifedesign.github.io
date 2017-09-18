---
layout: default
---

# Hello Gif Animation
[back]({{ site.url }}/)

## Description
Controls gif animations

- Play animation

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies
- jQuery

## Options

## Code
Runnymede 2016 JS
```javascript
var RUNNYMEDE = RUNNYMEDE || {};

(function( $ ) {
    var GIFAnimation = RUNNYMEDE.GIFAnimation = function GIFAnimation(el, order) {
        // Elements
        var $el  = $(el);
        var $gif = $('img', $el);

        // Variables
        var delay = ($el.data('anim-delay')) ? $el.data('anim-delay') : (order * 500) + 250;
        var src   = $gif.attr('src');
        var timeout;

        // Public Functions

        this.init = function() {
            src = src.split('?')[0];
        }

        this.play = function() {
            if (!RUNNYMEDE.is_ie) {
                var date = new Date().getTime();
                src = src.split('?')[0];
                src = src + '?=' + date;

                timeout = setTimeout(function() {
                    $gif.css('opacity', 1);
                    $gif.attr('src', src);
                }, delay);
            }else {
                $gif.css('opacity', 1);
            }
        }

        this.stop = function() {
            clearTimeout(timeout);
        }

        this.reset = function() {
            $gif.css('opacity', 0);
        }

        // Private Functions
    }
})( jQuery );
```
Runnymede 2017 JS
```javascript
$('.gif-anim', $el).each(function() {
	var GIFAnimation = new RUNNYMEDE.GIFAnimation($(this));
	GIFAnimation.init();
	$(this).data('GIFAnimation', GIFAnimation);
});
```

## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)