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
HTML
```html
<div class="col-wrap">
	<div class="col">
		<div class="card">
			<div class="card-content">
				<div class="card-img">
					<img src="../../../images/300-200_01.jpg" alt="">
				</div>
				<div class="card-meta">
					<p>Card</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="card">
			<div class="card-content">
				<div class="card-img">
					<img src="../../../images/300-200_02.jpg" alt="">
				</div>
				<div class="card-meta">
					<p>Card</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="card">
			<div class="card-content">
				<div class="card-img">
					<img src="../../../images/300-200_03.jpg" alt="">
				</div>
				<div class="card-meta">
					<p>Card</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="card">
			<div class="card-content">
				<div class="card-img">
					<img src="../../../images/300-200_04.jpg" alt="">
				</div>
				<div class="card-meta">
					<p>Card</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="card">
			<div class="card-content">
				<div class="card-img">
					<img src="../../../images/300-200_05.jpg" alt="">
				</div>
				<div class="card-meta">
					<p>Card</p>
				</div>
			</div>
		</div>
	</div>
</div>
```
Tayco CSS
```sass
.col-wrap {
	width: 100%;
	display: table;
	table-layout: fixed;
	margin: auto;
	.col {
		width: 1px;
		display: table-cell;
		vertical-align: top;
		box-sizing: border-box;
	}
}
.card {
	position: relative;
	padding: 0 0.5rem;
	.card-content {
		@extend %clearfix;
		overflow: hidden;
		position: relative;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		.card-img {
			overflow: hidden;
		}
		.card-img,
		.card-meta {
			position: relative;
			text-align: center;
		}
		.card-img {
			img {
				width: 100%;
				height: auto;
				display: block;
			}
		}
	}
}
@media screen and (max-width: 1000px) {
	.col-wrap {
		display: block;
		.col {
			display: block;
			width: 50%;
			float: left;
		}
	}
}

@media screen and (max-width: 500px) {
	.col-wrap {
		.col {
			width: 100%;
			float: none;
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