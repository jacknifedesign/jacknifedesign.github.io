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
Standard HTML
```html
<section id="Hero" class="banner">
	<img src="../../../images/1920-960_01.jpg" alt="" />
	<div class="container">
		<div class="banner-copy">
			<h1>Sollicitudin tempor id eu</h1>
			<h2>Risus in hendrerit gravida</h2>
		</div>
	</div>
</section>
```
Video HTML
```html
<section id="Hero" class="banner">
	<video loop="" muted="" autoplay="" poster="../../../images/1920-1080_01.jpg">
		<source src="../../../videos/1920-1080.webm" type="video/webm">
		<source src="../../../videos/1920-1080.mp4" type="video/mp4">
	</video>
	<div class="container">
		<div class="banner-copy">
			<h1>Sollicitudin tempor id eu</h1>
			<h2>Risus in hendrerit gravida</h2>
		</div>
	</div>
</section>
```
CSS
```sass
.banner {
	position: relative;
	background-color: $black;
	color: $white;
	padding: 0;
	img,
	video {
		display: block;
		width: 100%;
		height: auto;
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
		padding: 0 1.25rem;
		width: 100%;
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		right: 50%;
		@include transform(translate(50%, -50%));
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
			font-size: 4.5rem;
		}
		h2 {
			font-size: 3.25rem;
		}
	}
}
```

## Code

## Examples
- [Example 01](examples/01)
- [Example 02](examples/02)

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)