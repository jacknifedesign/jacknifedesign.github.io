---
layout: default
---

# Hello Card
[back]({{ site.url }}/)

## Description
Cards that maintain aspect ratio and manage overflow

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies

## Options

## Code
Tayco HTML
```html
<div class="card card-resource card-center">
	<div class="card-content">
		<div class="card-content-int">
			<div class="card-img">
				<img src="" alt="Congo">
			</div>
			<div class="card-meta">
				<div class="card-meta-int">
					<p>Congo</p>
					<p>Woodgrain - L100/V100</p>
				</div>
			</div>
		</div>
	</div>
</div>
```
Tayco CSS
```sass
.card {
	position: relative;
	z-index: 1;
	.card-content {
		@extend %clearfix;
		overflow: hidden;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		box-shadow: $shadow;
		box-sizing: border-box;
		.card-content-int {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			-webkit-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
		}
		.card-img {
			overflow: hidden;
		}
		.card-img,
		.card-meta {
			position: relative;
			text-align: center;
		}
		.card-img {
			transition: $transition;
			a {
				position: relative;
				display: block;
				width: 100%;
				height: 100%;
			}
			img {
				width: auto;
				display: block;
				transition: $transition;
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translate(-50%, 0);
				-webkit-transform: translate(-50%, 0);
				-ms-transform: translate(-50%, 0);
			}
		}
		.card-meta {
			.card-meta-int {
				box-sizing: border-box;
			}
		}
	}
}
```
## Examples
- [Example 01](examples/01)

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)