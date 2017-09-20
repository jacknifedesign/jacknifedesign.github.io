---
layout: default
---

# Hello Video
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies

## Options

## Code
Jacknife CSS
```sass
.full-width-gallery {
	width:100%;
	.full-width-image,
	.full-width-video,
	.full-width-embed {
		margin-bottom: 10px;
		&:last-child {
			margin-bottom: 0;
		}
		p {
			margin: 0;
		}
	}
	img,
	video {
		width:100%;
		height:auto;
	}
	video {
		display: block;
	}
}
```
Jacknife HTML
```html
<div class="full-width-video">
	<video loop="" muted="" autoplay="" poster="https://jacknifedesign.com/wp-content/uploads/2017/07/Tayco_Mockup_HD10_1150.jpg">
		<source src="https://jacknifedesign.com/wp-content/uploads/2017/07/Tayco_Mockup_HD10_1150.webm" type="video/webm">
		<source src="https://jacknifedesign.com/wp-content/uploads/2017/07/Tayco_Mockup_HD10_1150.mp4" type="video/mp4">
	</video>
</div>
```
## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)