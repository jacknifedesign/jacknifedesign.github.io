---
layout: default
---

# Hello Tile
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies

## Options

## Code
Impact Kitchen CSS
```sass
.tile-wrap {
	width: 100%;
	max-width: $max-width / 2;
	height: 100%;
}

.tile {
	width: 100%;
	height: 100%;
	min-height: 480px;
	position: relative;
	overflow: hidden;
	padding: 4.375rem 5.625rem;
	box-sizing: border-box;
	&.text-center {
		padding: 4.375rem 3rem;
		text-align: center;
		h3 {
			margin: auto;
			font-size: 4.375rem;
			line-height: 0.8;
		}
		p {
			font-size: 1.375rem;
			margin-bottom: 1.5rem;
		}
	}
	.tile-meta {
		position: absolute;
		bottom: 5rem;
		left: 50%;
		transform: translate(-50%, 0);
		-webkit-transform: translate(-50%, 0);
		-ms-transform: translate(-50%, 0);
	}
	h2 {
		font-size: 4.375rem;
		line-height: 0.8;
		margin-bottom: 2.25rem;
		&:only-child {
			font-size: 6.25rem;
			line-height: 5rem;
			margin-bottom: 0;
		}
	}
	h3 {
		font-size: 2rem;
		margin: 0 0 0.5rem 0;
		text-transform: none;
	}
	h4 {
		font-size: 2rem;
		line-height: 0.8;
		text-transform: none;
		margin: 0 0 0.5rem 0;
	}
	p {
		font-size: 1.375rem;
		line-height: 1.625rem;
	}
	p + h3 {
		margin: 3rem 0 0.5rem 0;
	}
}
```
Impact Kitchen HTML
```html
<div class="col-wrap"><div class="col col-to-the-right bg-orange clearfix"><div class="tile-wrap"><div class="tile tile-img tile-img-portrait" style="height: auto;"><img src="https://www.impactkitchen.ca/wp-content/uploads/2015/10/Impact-CONTACT-location.jpg" alt=""></div><div class="tile"><h2>Real food. Nutrient rich &amp; minimally processed.</h2></div></div></div><div class="col col-to-the-left bg-orange clearfix"><div class="tile-wrap"><div class="tile tile-img tile-img-large tile-img-portrait" style="height: auto;"><img src="https://www.impactkitchen.ca/wp-content/uploads/2015/10/Impact-CONTACT-underwater.jpg" alt=""></div></div></div></div>
```

## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)