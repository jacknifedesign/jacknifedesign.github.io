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
<section id="Hero" class="banner offset">
	<img src="<?php echo $image;?>" alt="" />
	<div class="container">
		<div class="banner-copy">
			<?php 
				echo $headline;
				echo $cta;
			?>
		</div>
	</div>
</section>
```
Tayco CSS
```sass
.banner {
	position: relative;
	background-color: $dark-grey!important;
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
		left: 50%;
		width: 100%;
		height: 100%;
		transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		.banner-copy {
			max-width: 535px;//330px;
			position: absolute;
			top: 50%;
			transform: translate(0, -50%);
			-webkit-transform: translate(0, -50%);
			-ms-transform: translate(0, -50%);
			h1, h2 {
				line-height: 1;
				clear: both;
				letter-spacing: 0.2px;
				text-shadow: $text-shadow;
				margin: 0;
			}
			h1 {
				font-size: 7.5rem;//6.875rem;
			}
			h2 {
				font-size: 6.25rem;
			}
			.cta {
				margin: 3.125rem 0 0 0;
			}
		}
	}
}
```
Kilberry HTML
```html
<section id="Hero" class="<?php echo $classes;?>">
	<div class="hero-bg">
		<img src="<?php echo $image;?>" alt="" />
	</div>
	<div class="container">
		<div class="hero-copy">
			<h1><?php echo $headline;?></h1>
		</div>
	</div>
</section>
```
Kilberry CSS
```sass
#Hero {
	position: fixed;
	top: 0;
	background: $black;
	color: $white;
	padding: 0;
	width: 100%;
	&.hero-static {
		.hero-bg {
			padding-bottom: 44.27%;
		}
		.container {
			.hero-copy {
				h1 {
					font-size: 6rem;
					margin: 0;
					@include before_bar('default', $white);
				}
			}
		}
	}
	&.hero-sm {
		.hero-bg {
			padding-bottom: 22.14%;
		}
		.container {	
			.hero-copy {
				h1 {
					font-family: $montserrat;
					font-size: 2.375rem;
					text-align: center;
					text-transform: uppercase;
					letter-spacing: 5px;
					margin: 5% 0 0 0;
					&:before {
						display: none;
					}
				}
			}
		}
	}
	.hero-bg {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		&.hero-bg-mobile {
			display: none;
		}
		img,
		video {
			display: block;
			width: 100%;
			height: auto;
			position: absolute;
			top: 50%;
			right: 50%;
			@include transform(translate(50%, -50%));
		}
	}
	.container {
		position: absolute;
		top: 50%;
		right: 50%;
		width: 100%;
		height: 100%;
		@include transform(translate(50%, -50%));
		.hero-copy {
			position: absolute;
			top: 50%;
			right: 50%;
			width: 100%;
			max-width: $article-width;
			box-sizing: border-box;
			@include transform(translate(50%, -50%));
		}
	}
}
```

## Code

## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)