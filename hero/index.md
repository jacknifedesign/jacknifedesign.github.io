---
layout: default
---

# Hello Hero
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies

## Options
Tayco Hero
```html
<section id="Hero" class="banner">
	<img src="../../../images/1920-1280_01.jpg" alt="" />
	<div class="container">
		<div class="banner-copy">
			<h1>Sollicitudin tempor id eu</h1>
			<h2>Risus in hendrerit gravida</h2>
		</div>
	</div>
</section>
```
Tayco CSS
```sass
.banner {
	position: relative;
	background-color: $black;
	color: $white;
	padding: 0;
	img {
		display: block;
		width: 100%;
		height: auto;
		opacity: 0.9;
	}
	.container {
		position: absolute;
		top: 50%;
		right: 50%;
		width: 100%;
		height: 100%;
		@include transform(translate(50%, -50%));
	}
	.banner-copy {
		position: absolute;
		top: 50%;
		@include transform(translate(0, -50%));
		h1, h2 {
			line-height: 1;
			clear: both;
			margin: 0;
		}
	}
}

#Hero.banner {
	.banner-copy {
		h1 {
			font-size: 7.5rem;
		}
		h2 {
			font-size: 6.25rem;
		}
	}
}
```

## Code

## Examples
- [Example 01](examples/01)

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)