---
layout: default
---

# Hello Navigation
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies

## Options

## Code
Wisdom Exchange HTML
```html
<header id="Header" class="bg-dark-blue">
	<div class="language-toggle"><a href="http://wisdomexchange2017.com/" class="active">EN</a> | <a href="http://wisdomexchange2017.com/fr/">FR</a></div>			<div class="branding">
		<a href="http://wisdomexchange2017.com/">
								<img src="http://wisdomexchange2017.com/wp-content/themes/wx_2017/images/logos/logo.png" alt="Wisdom Exchange Homepage">
							</a>
	</div>
	<nav id="MainMenu" class="menu">
		<div class="menu-main-menu-container"><ul id="menu-main-menu" class="menu"><li id="menu-item-188" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-188"><a href="http://wisdomexchange2017.com/register/">REGISTER</a></li>
<li id="menu-item-190" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-190"><a href="http://wisdomexchange2017.com/what-is-wisdom-exchange/">What is Wisdom Exchange?</a></li>
<li id="menu-item-189" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-189"><a href="http://wisdomexchange2017.com/speakers/">Speakers</a></li>
<li id="menu-item-187" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-187"><a href="http://wisdomexchange2017.com/agenda/">Agenda</a></li>
<li id="menu-item-194" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-194"><a href="http://wisdomexchange2017.com/hotel-accommodations/">Hotel &amp; Accommodations</a></li>
<li id="menu-item-191" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-191"><a href="http://wisdomexchange2017.com/business-connect/">Business Connect</a></li>
<li id="menu-item-195" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-195"><a href="http://wisdomexchange2017.com/innovation-showcase/">Innovation Showcase</a></li>
<li id="menu-item-193" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-193"><a href="http://wisdomexchange2017.com/financial-panel/">Financial Panel</a></li>
<li id="menu-item-192" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-192"><a href="http://wisdomexchange2017.com/contact-us/">Contact Us</a></li>
</ul></div>			</nav>
	<div id="HeaderFooter">
		<hr class="small-break">
		<p><small>Ontario Ministry of Economic Development and Growth, 7th Floor 56 Wellesley Street West, Toronto, ON M7A 2E7</small></p>
		<img src="http://wisdomexchange2017.com/wp-content/themes/wx_2017/images/logos/ontario-logo.png" alt="Ontario Logo">
	</div>
</header>
<div id="MobileHeader">
	<a href="#" id="MobileToggle">
		<div class="patty-wrapper">
			<div class="patty">Toggle Menu</div>
		</div>
	</a>
	<div class="branding">
		<a href="http://wisdomexchange2017.com/">
			<img src="http://wisdomexchange2017.com/wp-content/themes/wx_2017/images/logos/mobile-logo.png" alt="Wisdom Exchange Homepage">
		</a>
	</div>
	<div class="language-toggle"><a href="http://wisdomexchange2017.com/" class="active">EN</a> | <a href="http://wisdomexchange2017.com/fr/">FR</a></div>
</div>
```
Wisdom Exchange CSS
```sass
#Header {
	display: block;
	z-index: 5;
	overflow: auto;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: $nav-width;
	box-sizing: border-box;
	padding: 2.5rem 5rem 2.5rem 2.5rem;
	.menu {
		padding: 0;
		.menu-item {
			list-style: none;
			margin-bottom: 0;
			a {
				color: $white;
				text-decoration: none;
				font-weight: 600;
				font-size: 1.5rem;
				line-height: 1;
				border-top: 4px solid $white;
				display: block;
				padding-top: 0.625rem;
				margin-bottom: 1.25rem;
				&:hover,
				.active {
					color: $teal;
					border-top-color: $teal;
				}
			}
		}
		.current-menu-item,
		.current-page-ancestor {
			a {
				padding-left: 0.875rem;
				position: relative;
				&:before {
					content: ' ';
					width: 0.563rem;
					height: 1.063rem;
					position: absolute;
					top: 0.95rem;
					left: 0;
					background: url('#{$assets_path}/utility/nav-arrow.png') top left no-repeat;
					background-size: 100%;
				}
			}
		}
	}
	.branding {
		margin: 0 0 2.5rem 0;
	}
	.language-toggle {
		margin: -18px 0 1rem 0;
	}
}

#MobileHeader {
	z-index: 15;
	position: fixed;
	width: 100%;
	height: 60px;
	background: $dark-blue;
	display: none;
	margin-left: $nav-width;
	left: 0;
	transition: $nav-transition;
	#MobileToggle {
		width: 80px;
		height: 60px;
		position: relative;
		top: 0;
		left: 0;
		color: $white;
		background: $dark-blue;
		border: 0;
		padding: 0;
		display: block;
		.patty,
		.patty:before,
		.patty:after {
			width: 30px;
			height: 2px;
			background: $white;
			transition: $patty-transition;
			float: left;
			display: block;
		}
		.patty-wrapper {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			-webkit-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			width: 30px;
		}
		.patty {
			text-indent: -99999px;
			position: absolute;
			&:before,
			&:after {
				content: "";
				position: absolute;
			}
			&:before {
				top: -7px;
			}
			&:after {
				top: 7px;
			}
		}
	}
	.branding {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
	}
	.language-toggle {
		position: absolute;
		top: 50%;
		right: 25px;
		transform: translate(0%, -50%);
		-webkit-transform: translate(0%, -50%);
		-ms-transform: translate(0%, -50%);
	}
}
.nav-open {
	#MobileHeader {
		#MobileToggle {
			.patty {
				transform: rotate(45deg);
				-webkit-transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				&:before,
				&:after {
					top: 0;
					transform: rotate(-90deg);
					-webkit-transform: rotate(-90deg);
					-ms-transform: rotate(-90deg);
				}
			}
		}
	}
}
@media screen and (max-width: 1024px) {
	#Header {
		overflow: hidden;
		padding: 2rem;
		#HeaderFooter {
			display: none;
		}
		.branding {
			display: none;
		}
		.language-toggle {
			margin: -12px 0 1rem 0;
		}
	}
	#MobileHeader {
		display: block;
		margin-left: 0;
	}
	#Content {
		padding-top: 59px;
		margin-left: 0;
	}
	.nav-open {
		overflow: hidden;
		#Header {
			overflow: auto;
		}
		#Content,
		#MobileHeader {
			left: $nav-width;
		}
	}
}
```
Wisdom Exchange JS
```javascript
var JKNIFE = JKNIFE || {};

(function( $ ) {
	var MobileNavigation = JKNIFE.MobileNavigation = function MobileNavigation(el, args) {
		// Elements
		var $el   = $(el);
		var $body = $('body');
		var $html = $('html');

		// Variables
		var options = {}

		// Public Functions
		this.init = function() {
			// Merge arguments
			options = $.extend({}, options, args);
			// Apply listeners
			$el.on('click', _toggleNavigation);
			$body.on('resize', _setNavHeightVariable);

			_setNavHeightVariable();
			return;
		}

		// Private Functions
		var _toggleNavigation = function(e) {
			// Open and close the mobile navigation
			if ($body.hasClass('nav-open')) {
				$html.css('overflow', 'auto');
				$body.removeClass('nav-open');
			}else {
				$html.css('overflow', 'hidden');
				$body.addClass('nav-open');
			}

			e.preventDefault();
			return;
		}

		// Update variable for animation purposes
		var _setNavHeightVariable = function(e) {
			if ($body.outerWidth() <= 1024) {
				JKNIFE.MobileHeaderHeight = 70; // 60px height + 10px breathing room
			}else {
				JKNIFE.MobileHeaderHeight = 0; // Not visible, no height
			}
			return;
		}

	}
})( jQuery );
```
Wisdom Exchange JS
```javascript
var $MobileToggle = $('#MobileToggle');
if ($MobileToggle.length) {
	var MobileNavigation = new JKNIFE.MobileNavigation($MobileToggle);
	MobileNavigation.init();
	$(this).data('MobileNavigation', MobileNavigation);
}
```
Tayco HTML
```html
<header id="Header">
			<div class="container">
				<div id="HeaderLogo">
					<a href="https://www.tayco.com/">
						<span class="sr-only">Tayco Home</span>
					</a>
				</div>
				<div id="HeaderPrimary" class="clearfix desktop-only">
					<nav id="MainMenu" class="menu">
						<ul class="clearfix">
							<li>
								<a href="https://www.tayco.com/products/" data-dropdown="ProductDropdown">
									<span>Products</span>
								</a>
							</li>
							<li>
								<a href="https://www.tayco.com/case-studies/" data-dropdown="CaseStudyDropdown">
									<span>Case Studies</span>
								</a>
							</li>
							<li>
								<a href="#" data-dropdown="MoreDropdown">
									<span>More<span class="sr-only">pages</span></span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<!--<div id="LiveChat" class="bg-orange livechat_button" data-id="8d5876e430">
					<a href="https://www.livechatinc.com/customer-service-software/?partner=lc_8613234&amp;utm_source=chat_button">
						Live chat					</a>
				</div>-->
				<div id="HeaderSecondary" class="clearfix desktop-only">
					<div class="gov-nav secondary-nav">
						<a href="#" data-dropdown="GovernmentDropdown">Government</a>
						
<div id="GovernmentDropdown" class="dropdown">
	<div class="dropdown-interior aligncenter">
		<a href="https://www.tayco.com/canadian-government/">
			Canada			<span class="icon icon-cdn"></span>
		</a>
		<span></span>
		<a href="https://www.tayco.com/us-government/">
			USA			<span class="icon icon-usa"></span>
		</a>
	</div>
</div>					</div>
					<div class="user-nav secondary-nav aligncenter">
							<a href="https://www.tayco.com/user/" class="user-link">Hi, Jacknife</a>
	<a href="https://www.tayco.com/wp-login.php?action=logout&amp;redirect_to=https%3A%2F%2Fwww.tayco.com&amp;_wpnonce=8588e37011">Logout</a>

					</div>
					<div class="lang-nav secondary-nav desktop-only">
						<a href="https://www.tayco.com/" class="active">EN</a><a href="https://www.tayco.com/fr/">FR</a>					</div>
				</div>
				<a href="#" id="MobileToggle" class="mobile-only">
					<div class="patty-wrapper">
						<div class="patty">Toggle Menu</div>
					</div>
				</a>
			</div>
			<div id="ProductDropdown" class="menu-dropdown">
	<div class="container">
		<div class="col-wrap">
			<div class="col">
				<ul>
					<li>
						<a href="https://www.tayco.com/products/systems/">Systems</a>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/systems/switch/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/Switch_Product_Card_v4-348x262.jpg" alt="Switch">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/systems/switch/"><span>Switch</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/systems/cosmo/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/Cosmo_Systems_780-348x262.jpg" alt="Cosmo">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/systems/cosmo/"><span>Cosmo</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/systems/up/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/Up_Systems_780-348x262.jpg" alt="Up">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/systems/up/"><span>Up</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					</ul>
			</div>
			<div class="col">
				<ul>
					<li>
						<a href="https://www.tayco.com/products/benching/">Benching</a>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/benching/scene/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/02/Scene_Benching_780-348x262.jpg" alt="Scene">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/benching/scene/"><span>Scene</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/benching/cosmo/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/Cosmo_Benching_780-348x262.jpg" alt="Cosmo">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/benching/cosmo/"><span>Cosmo</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					</ul>
			</div>
			<div class="col">
				<ul>
					<li>
						<a href="https://www.tayco.com/products/private-office/">Private Office</a>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/private-office/scene/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/Scene_PO_780-348x262.jpg" alt="Scene">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/private-office/scene/"><span>Scene</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/private-office/metro/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/Metro_PO_780-348x262.jpg" alt="Metro">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/private-office/metro/"><span>Metro</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					</ul>
			</div>
			<div class="col">
				<ul>
					<li>
						<a href="https://www.tayco.com/products/seating/">Seating</a>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/seating/j1/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/J1_Seating_780-348x262.jpg" alt="J1">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/seating/j1/"><span>J1</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/seating/m1/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/M1_Seating_780_v2-348x262.jpg" alt="M1">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/seating/m1/"><span>M1</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/seating/mars/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/Mars_Seating_780-348x262.jpg" alt="Mars">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/seating/mars/"><span>Mars</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					</ul>
			</div>
			<div class="col">
				<ul>
					<li>
						<a href="https://www.tayco.com/products/tables/">Tables</a>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/tables/height-adjustable/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/Tables_HAT_780-348x262.jpg" alt="Height Adjustable">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/tables/height-adjustable/"><span>Height Adjustable</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/tables/one-touch/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/Tables_One_touch_780-348x262.jpg" alt="One Touch">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/tables/one-touch/"><span>One Touch</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/tables/go/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/Tables_Go_780-348x262.jpg" alt="Go">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/tables/go/"><span>Go</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
						<li>
						<div class="card card-small">
							<div class="card-content">
								<div class="card-content-int">
									<div class="card-img">
										<a href="https://www.tayco.com/products/tables/board-room/">
											<img src="https://www.tayco.com/wp-content/uploads/2017/01/Tables_Conference_780-348x262.jpg" alt="Boardroom">
										</a>
									</div>
									<div class="card-meta">
										<div class="card-meta-int">
											<a href="https://www.tayco.com/products/tables/board-room/"><span>Boardroom</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					</ul>
			</div>
		</div>
	</div>
</div>			<div id="CaseStudyDropdown" class="menu-dropdown">
	<div class="container">
		<div class="col-wrap deck">
<div class="col"><div class="card card-wide"><div class="card-content"><div class="card-content-int"><div class="card-img"><a href="https://www.tayco.com/case-studies/intrigue-media/"><img src="https://www.tayco.com/wp-content/uploads/2017/07/Case-Study_Intrigue-Media_Hero-Image-1-468x260.jpg" alt="Intrigue Media"></a></div><div class="card-meta"><div class="card-meta-int"><p><a href="https://www.tayco.com/case-studies/intrigue-media/">Intrigue Media</a></p><p>February 2017</p><div class="card-meta-desc"><p>Intrigue Media, located in a 1900’s heritage building in Guelph, Ontario, was searching for the right...</p></div><a href="https://www.tayco.com/case-studies/intrigue-media/" class="btn btn-sm">Read more</a></div></div></div></div></div></div><div class="col"><div class="card card-wide"><div class="card-content"><div class="card-content-int"><div class="card-img"><a href="https://www.tayco.com/case-studies/large-install-with-prominent-energy-company/"><img src="https://www.tayco.com/wp-content/uploads/2017/06/RMN8327-HDR-468x260.jpg" alt="Large Install with Prominent Energy Company"></a></div><div class="card-meta"><div class="card-meta-int"><p><a href="https://www.tayco.com/case-studies/large-install-with-prominent-energy-company/">Large Install with Prominent Energy Company</a></p><p>June 2017</p><div class="card-meta-desc"><p>When moving to a newly renovated location, a large energy company decided to furnish their new workspace...</p></div><a href="https://www.tayco.com/case-studies/large-install-with-prominent-energy-company/" class="btn btn-sm">Read more</a></div></div></div></div></div></div><div class="col"><div class="card card-wide"><div class="card-content"><div class="card-content-int"><div class="card-img"><a href="https://www.tayco.com/case-studies/hotspex-inc/"><img src="https://www.tayco.com/wp-content/uploads/2017/05/IMG_0780-2-468x260.jpg" alt="Hotspex Inc."></a></div><div class="card-meta"><div class="card-meta-int"><p><a href="https://www.tayco.com/case-studies/hotspex-inc/">Hotspex Inc.</a></p><p>November 2016</p><div class="card-meta-desc"><p>Increasingly, companies are switching from high panel offices to open concept spaces, promoting collaboration...</p></div><a href="https://www.tayco.com/case-studies/hotspex-inc/" class="btn btn-sm">Read more</a></div></div></div></div></div></div>		</div>
		<div class="menu-dropdown-footer">
			<a href="https://www.tayco.com/case-studies/" class="btn">See all case studies</a>
		</div>
	</div>
</div>			
<div id="MoreDropdown" class="menu-dropdown">
	<div class="container">
		<div class="col-wrap">
			<div class="col more-nav-col">
				<nav class="site-nav">
					<div class="menu-main-menu-container"><ul id="menu-main-menu" class="menu"><li id="menu-item-3171" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3171"><a href="https://www.tayco.com/about-us/">About Us</a></li>
<li id="menu-item-3170" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3170"><a href="https://www.tayco.com/news/">News</a></li>
<li id="menu-item-3169" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3169"><a href="https://www.tayco.com/faqs/">FAQs</a></li>
<li id="menu-item-3168" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3168"><a href="https://www.tayco.com/careers/">Careers</a></li>
<li id="menu-item-3167" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3167"><a href="https://www.tayco.com/contact/">Contact</a></li>
<li><a href="https://www.tayco.com/user/">Forms</a></li></ul></div>				</nav>
			</div>
			<div class="col resource-nav-col">
				<nav class="resource-nav">
	<ul>
		<li>
			<a href="https://www.tayco.com/resource-center/">Resource Center</a>
		</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#laminates">Laminates</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#panel_fabrics">Panel Fabrics</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#seating_fabrics">Seating Fabrics</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#finishes">Finishes</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#typicals">Typicals</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#downloads">Downloads</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#image_library">Image Library</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#retro_image_library">Retro Image Library</a>			</li>
				<li>
			<a href="https://www.tayco.com/resource-center/#case_studies">Case Studies</a>
		</li>
	</ul>
</nav>				<div class="search-form-wrap"><form role="search" method="get" class="search-form form" action="https://www.tayco.com/">
	<div class="input-group">
		<label for="FormSearchInput_1">
			<span class="sr-only">Search for</span>
			<input type="search" id="FormSearchInput_1" class="form-control" placeholder="Search Tayco" value="" name="s" title="Search for:">
		</label>
				<span class="input-group-btn">
			<button type="submit">Search</button>
			<span class="icon icon-search"></span>
		</span>
	</div>
</form></div>
			</div>
			<div class="col contact-nav-col">
				<h2><a href="https://www.tayco.com/contact/">Head Office</a></h2>
				
<p>Tayco Panelink Ltd.<br>
400 Norris Glen Rd.<br>
Toronto, ON M9C 1H5<br>
T: <a href="tel:(416) 252-8000">(416) 252-8000</a><br>
T: <a href="tel:1 (800) 675-4092">1 (800) 675-4092</a><br>
F: <a href="tel:(416) 252-4467">(416) 252-4467</a><br>
<a href="mailto:info@tayco.com">info@tayco.com</a></p>				<div class="social">
	<a href="https://www.instagram.com/taycooffice/" target="_blank" class="social-instagram">
		<span class="fa fa-instagram" aria-hidden="true"></span>
		<span class="sr-only">Instagram</span>
	</a>
	<a href="https://www.linkedin.com/company/tayco" target="_blank" class="social-linkedin">
		<span class="fa fa-linkedin" aria-hidden="true"></span>
		<span class="sr-only">Linkedin</span>
	</a>
</div>			</div>
			<div class="col newsletter-nav-col">
				<div class="newsletter">
	<h2>Stay up-to-date with Tayco</h2>
	<!-- Begin MailChimp Signup Form -->
	<div class="mc-form" id="mc_embed_signup_1">
		<form action="//tayco.us14.list-manage.com/subscribe/post?u=e90778cd492cc82ac27b7d7cc&amp;id=a0eb52f26f" method="post" id="mc-embedded-subscribe-form_1" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
			<div id="mc_embed_signup_scroll_1">
				<div class="input-group">
					<div class="mc-field-group">
						<span class="fa fa-envelope" aria-hidden="true"></span>
						<label for="mce-EMAIL_1">
							<span class="sr-only">e-mail  <span class="asterisk">*</span></span>
							<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL_1" placeholder="e-mail">
						</label>
						<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
						<div style="position: absolute; left: -5000px;" aria-hidden="true">
							<label for="honey_1">
								<input type="text" id="honey_1" name="b_e90778cd492cc82ac27b7d7cc_12ed989fb9" tabindex="-1" value="">
								Honey Field
							</label>
						</div>
					</div>
					<input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe_1" class="button">
				</div>
			</div>
		</form>
	</div>
	<!--End mc_embed_signup-->
</div>			</div>
		</div>
	</div>
</div>
</header>
<div id="MobileNavigation" class="mobile-only">
			<div class="user-login accordion">
		<div class="container">
		<a href="https://www.tayco.com/user/" class="user-link">Hi, Jacknife</a>
		<a href="https://www.tayco.com/wp-login.php?action=logout&amp;redirect_to=https%3A%2F%2Fwww.tayco.com&amp;_wpnonce=8588e37011" class="logout">Logout</a>
	</div>
	</div>			<div class="gov-nav accordion">
	<div class="container">
		<a href="#" data-acc-trigger="">Government</a>
		<div class="lang-nav">
			<a href="https://www.tayco.com/" class="active">EN</a><a href="https://www.tayco.com/fr/">FR</a>		</div>

	</div>
	<div class="gov-acc bg-mid-grey" data-acc-target="">
		<div class="container">
			<a href="https://www.tayco.com/canadian-government/">
				Canada				<span class="icon icon-cdn-hover"></span>
			</a>
			<span></span>
			<a href="https://www.tayco.com/us-government/">
				USA				<span class="icon icon-usa-hover"></span>
			</a>
		</div>
	</div>
</div>			<div class="mobi-primary-nav">
	<div class="accordion mobi-nav-acc">
		<div class="container mobi-nav-wrap">
			<a href="https://www.tayco.com/products/">
				<span>Products</span>
			</a>
			<div class="mobi-nav-acc-trigger" data-acc-trigger="">
				<span class="sr-only">Toggle Products</span>
			</div>
		</div>
		<div class="mobi-nav-products" data-acc-target="">
				
<div class="container">
	<ul>
		<li>
			<a href="https://www.tayco.com/products/systems/">Systems</a>
			<hr>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/systems/switch/"><span>Switch</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/systems/switch/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/Switch_Product_Card_v4.jpg" alt="Switch">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/systems/cosmo/"><span>Cosmo</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/systems/cosmo/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/Cosmo_Systems_780.jpg" alt="Cosmo">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/systems/up/"><span>Up</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/systems/up/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/Up_Systems_780.jpg" alt="Up">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
		</ul>
</div>
<div class="container">
	<ul>
		<li>
			<a href="https://www.tayco.com/products/benching/">Benching</a>
			<hr>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/benching/scene/"><span>Scene</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/benching/scene/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/02/Scene_Benching_780.jpg" alt="Scene">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/benching/cosmo/"><span>Cosmo</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/benching/cosmo/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/Cosmo_Benching_780.jpg" alt="Cosmo">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
		</ul>
</div>
<div class="container">
	<ul>
		<li>
			<a href="https://www.tayco.com/products/private-office/">Private Office</a>
			<hr>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/private-office/scene/"><span>Scene</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/private-office/scene/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/Scene_PO_780.jpg" alt="Scene">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/private-office/metro/"><span>Metro</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/private-office/metro/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/Metro_PO_780.jpg" alt="Metro">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
		</ul>
</div>
<div class="container">
	<ul>
		<li>
			<a href="https://www.tayco.com/products/seating/">Seating</a>
			<hr>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/seating/j1/"><span>J1</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/seating/j1/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/J1_Seating_780.jpg" alt="J1">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/seating/m1/"><span>M1</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/seating/m1/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/M1_Seating_780_v2.jpg" alt="M1">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/seating/mars/"><span>Mars</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/seating/mars/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/Mars_Seating_780.jpg" alt="Mars">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
		</ul>
</div>
<div class="container">
	<ul>
		<li>
			<a href="https://www.tayco.com/products/tables/">Tables</a>
			<hr>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/tables/height-adjustable/"><span>Height Adjustable</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/tables/height-adjustable/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/Tables_HAT_780.jpg" alt="Height Adjustable">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/tables/one-touch/"><span>One Touch</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/tables/one-touch/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/Tables_One_touch_780.jpg" alt="One Touch">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/tables/go/"><span>Go</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/tables/go/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/Tables_Go_780.jpg" alt="Go">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
			<li>
			<div class="card card-small">
				<div class="card-content">
					<div class="card-content-int">
						<div class="card-meta">
							<div class="card-meta-int">
								<a href="https://www.tayco.com/products/tables/board-room/"><span>Boardroom</span></a>
							</div>
						</div>
						<div class="card-img">
							<a href="https://www.tayco.com/products/tables/board-room/">
								<img src="https://www.tayco.com/wp-content/uploads/2017/01/Tables_Conference_780.jpg" alt="Boardroom">
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
		</ul>
</div>
		</div>
	</div>
	<div class="accordion mobi-nav-acc">
		<div class="container mobi-nav-wrap">
			<a href="https://www.tayco.com/case-studies/">
				<span>Case Studies</span>
			</a>
			<div class="mobi-nav-acc-trigger" data-acc-trigger="">
				<span class="sr-only">Toggle Case Studies</span>
			</div>
		</div>
		<div class="mobi-nav-studies" data-acc-target="">
			<div class="container">
	<div class="col-wrap deck">
<div class="col"><div class="card card-wide"><div class="card-content"><div class="card-content-int"><div class="card-img"><a href="https://www.tayco.com/case-studies/intrigue-media/"><img src="https://www.tayco.com/wp-content/uploads/2017/07/Case-Study_Intrigue-Media_Hero-Image-1-468x260.jpg" alt="Intrigue Media"></a></div><div class="card-meta"><div class="card-meta-int"><p><a href="https://www.tayco.com/case-studies/intrigue-media/">Intrigue Media</a></p><p>February 2017</p><div class="card-meta-desc"><p>Intrigue Media, located in a 1900’s heritage building in Guelph, Ontario, was searching for the right...</p></div><a href="https://www.tayco.com/case-studies/intrigue-media/" class="btn btn-sm">Read more</a></div></div></div></div></div></div><div class="col"><div class="card card-wide"><div class="card-content"><div class="card-content-int"><div class="card-img"><a href="https://www.tayco.com/case-studies/large-install-with-prominent-energy-company/"><img src="https://www.tayco.com/wp-content/uploads/2017/06/RMN8327-HDR-468x260.jpg" alt="Large Install with Prominent Energy Company"></a></div><div class="card-meta"><div class="card-meta-int"><p><a href="https://www.tayco.com/case-studies/large-install-with-prominent-energy-company/">Large Install with Prominent Energy Company</a></p><p>June 2017</p><div class="card-meta-desc"><p>When moving to a newly renovated location, a large energy company decided to furnish their new workspace...</p></div><a href="https://www.tayco.com/case-studies/large-install-with-prominent-energy-company/" class="btn btn-sm">Read more</a></div></div></div></div></div></div><div class="col"><div class="card card-wide"><div class="card-content"><div class="card-content-int"><div class="card-img"><a href="https://www.tayco.com/case-studies/hotspex-inc/"><img src="https://www.tayco.com/wp-content/uploads/2017/05/IMG_0780-2-468x260.jpg" alt="Hotspex Inc."></a></div><div class="card-meta"><div class="card-meta-int"><p><a href="https://www.tayco.com/case-studies/hotspex-inc/">Hotspex Inc.</a></p><p>November 2016</p><div class="card-meta-desc"><p>Increasingly, companies are switching from high panel offices to open concept spaces, promoting collaboration...</p></div><a href="https://www.tayco.com/case-studies/hotspex-inc/" class="btn btn-sm">Read more</a></div></div></div></div></div></div>	</div>
	<div class="aligncenter">
		<a href="https://www.tayco.com/case-studies/" class="btn">See all case studies</a>
	</div>
</div>
		</div>
	</div>
	<div class="accordion mobi-nav-acc">
		<div class="container mobi-nav-wrap">
			<a href="#" data-acc-trigger="">
				<span>More					<span class="sr-only">pages</span>
				</span>
			</a>
			<div class="mobi-nav-acc-trigger" data-acc-trigger="">
				<span class="sr-only">Toggle more</span>
			</div>
		</div>
		<div class="mobi-nav-more" data-acc-target="">
			<div class="container">
	<nav class="site-nav">
		<div class="menu-main-menu-container"><ul id="menu-main-menu-1" class="menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3171"><a href="https://www.tayco.com/about-us/">About Us</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3170"><a href="https://www.tayco.com/news/">News</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3169"><a href="https://www.tayco.com/faqs/">FAQs</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3168"><a href="https://www.tayco.com/careers/">Careers</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3167"><a href="https://www.tayco.com/contact/">Contact</a></li>
<li><a href="https://www.tayco.com/user/">Forms</a></li></ul></div>	</nav>
</div>
<div class="container">
	<nav class="resource-nav">
	<ul>
		<li>
			<a href="https://www.tayco.com/resource-center/">Resource Center</a>
		</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#laminates">Laminates</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#panel_fabrics">Panel Fabrics</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#seating_fabrics">Seating Fabrics</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#finishes">Finishes</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#typicals">Typicals</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#downloads">Downloads</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#image_library">Image Library</a>			</li>
					<li>
		<a href="https://www.tayco.com/resource-center/#retro_image_library">Retro Image Library</a>			</li>
				<li>
			<a href="https://www.tayco.com/resource-center/#case_studies">Case Studies</a>
		</li>
	</ul>
</nav></div>
<div class="container mobi-contact">
	<h2><a href="https://www.tayco.com/contact/">Head Office</a></h2>
	<hr>
	
<p>Tayco Panelink Ltd.<br>
400 Norris Glen Rd.<br>
Toronto, ON M9C 1H5<br>
T: <a href="tel:(416) 252-8000">(416) 252-8000</a><br>
T: <a href="tel:1 (800) 675-4092">1 (800) 675-4092</a><br>
F: <a href="tel:(416) 252-4467">(416) 252-4467</a><br>
<a href="mailto:info@tayco.com">info@tayco.com</a></p>	<div class="social">
	<a href="https://www.instagram.com/taycooffice/" target="_blank" class="social-instagram">
		<span class="fa fa-instagram" aria-hidden="true"></span>
		<span class="sr-only">Instagram</span>
	</a>
	<a href="https://www.linkedin.com/company/tayco" target="_blank" class="social-linkedin">
		<span class="fa fa-linkedin" aria-hidden="true"></span>
		<span class="sr-only">Linkedin</span>
	</a>
</div></div>
<div class="container">
	<div class="newsletter">
	<h2>Stay up-to-date with Tayco</h2>
	<!-- Begin MailChimp Signup Form -->
	<div class="mc-form" id="mc_embed_signup_2">
		<form action="//tayco.us14.list-manage.com/subscribe/post?u=e90778cd492cc82ac27b7d7cc&amp;id=a0eb52f26f" method="post" id="mc-embedded-subscribe-form_2" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
			<div id="mc_embed_signup_scroll_2">
				<div class="input-group">
					<div class="mc-field-group">
						<span class="fa fa-envelope" aria-hidden="true"></span>
						<label for="mce-EMAIL_2">
							<span class="sr-only">e-mail  <span class="asterisk">*</span></span>
							<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL_2" placeholder="e-mail">
						</label>
						<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
						<div style="position: absolute; left: -5000px;" aria-hidden="true">
							<label for="honey_2">
								<input type="text" id="honey_2" name="b_e90778cd492cc82ac27b7d7cc_12ed989fb9" tabindex="-1" value="">
								Honey Field
							</label>
						</div>
					</div>
					<input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe_2" class="button">
				</div>
			</div>
		</form>
	</div>
	<!--End mc_embed_signup-->
</div></div>		</div>
	</div>
</div>		</div>
```
Tayco CSS
```sass
.desktop-only {
	display: block;
}
.mobile-only {
	display: none;
}
#Header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	transition: $nav-transition;
	height: $header-height;
	background: rgba(255, 255, 255, 0.95);
	a {
		color: inherit;
		text-decoration: none;
		&:hover {
			color: $dark-grey;
		}
		&.btn {
			color: $dark-grey;
			&:hover {
				color: $white;
			}
		}
	}
	> .container {
		height: 100%;
		box-sizing: border-box;
		padding: 0;
		z-index: 100;
	}
	.menu-dropdown {
		background: $white;
		color: $grey;
		position: absolute;
		z-index: 100;
		width: 100%;
		left: 50%;
		transform: translate(-50%, 0);
		-webkit-transform: translate(-50%, 0);
		-ms-transform: translate(-50%, 0);
		display: none;
		padding: 4.375rem 0 3.75rem 0;
		ul {
			list-style-type: none;
			padding: 0 0.5rem;
			margin: 0;
		}
		.container {
			padding-top: 0;
			padding-bottom: 0;
		}
		.card {
			&:hover {
				a {
					color: $dark-grey;
				}
			}
			.btn {
				&:hover {
					color: $white;
				}
			}
		}
		.social {
			a {
				font-size: 1.5rem;
				line-height: 1;
				color: $white;
			}
		}
		&.active,
		&:hover {
			display: block;
		}
	}
	.btn.btn-sm {
		border-width: 2px;
	}
}

#Header #HeaderLogo,
#Header #HeaderPrimary {
	float: left;
	height: 100%;
}

#Header #HeaderLogo {
	margin-left: -14.5%;
	padding: 0 5.625rem 0 6.25rem;
	a {
		position: relative;
		display: block;
		width: 197px;
		height: 73px;
		background-image: url(../images/logos/tayco.png);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 100%;
		top: 50%;
		transform: translate(0, -50%);
		-webkit-transform: translate(0, -50%);
		-ms-transform: translate(0, -50%);
	}
}

#Header #HeaderPrimary {
	nav {
		height: 100%;
		ul {
			list-style-type: none;
			padding: 0;
			margin: 0;
		}
	}
	nav > ul {
		height: 100%;
		> li {
			float: left;
			height: 100%;
			> a {
				color: $grey;
				font-size: 1.65rem;//1.875rem;
				line-height: 1;
				padding: 0 3.25rem 0 2.5rem;//0 5rem 0 4.25rem;
				display: block;
				height: 100%;
				box-sizing: border-box;
				background: transparent;
				position: relative;
				&:before,
				&:after {
					content: '';
					display: block;
					position: absolute;
					width: 16px;
					height: 10px;
					background-repeat: no-repeat;
					top: 50%;
					right: 0.75rem;
					transform: translate(0, -50%);
					-webkit-transform: translate(0, -50%);
					-ms-transform: translate(0, -50%);
					transition: $transition;
				}
				&:before {
					background-image: url(../images/utility/nav-dropdown.png);
					opacity: 1;
				}
				&:after {
					background-image: url(../images/utility/nav-dropdown-hover.png);
					opacity: 0;
				}
				&:hover,
				&.active {
					background-color: $white;
					color: $dark-grey;
					&:before {
						opacity: 0;
					}
					&:after {
						opacity: 1;
					}
				}
				span {
					display: block;
					position: relative;
					top: 50%;
					transform: translate(0, -50%);
					-webkit-transform: translate(0, -50%);
					-ms-transform: translate(0, -50%);
				}
			}
		}
	}
}

#Header #HeaderSecondary {
	height: 100%;
	text-align: right;
	float: right;
	.secondary-nav {
		float: left;
		margin: 0 1.5rem 0 0;
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
		-webkit-transform: translate(0, -50%);
		-ms-transform: translate(0, -50%);
		&:last-child {
			margin-right: 0;
		}
		> a {
			font-size: 0.875rem;
			color: $grey;
			&:hover,
			&.active {
				color: $dark-grey;
			}
		}
		&.user-nav {
			.user-link {
				font-size: 1.125rem;
				text-decoration: underline;
				margin-right: 1.5rem;
			}
			.login-btn {
				display: inline-block;
				box-sizing: border-box;
				min-width: 125px;
			}
			.login-btn:hover,
			.login-btn.active {
				color: $white;
			}
		}
		&.lang-nav {
			> a {
				&.active {
					color: $white;
					background: $grey;
				}
			}
		}
	}
}

#Header #ProductDropdown {
	ul {
		li {
			&:first-child {
				a {
					color: $dark-grey;
					font-size: 1.313rem;//1.5rem;
					line-height: 1;
					margin-bottom: 1.5rem;
					display: block;
				}
			}
		}
	}
}

#Header #CaseStudyDropdown {
	.menu-dropdown-footer {
		text-align: center;
		.btn {
			margin: 3.5rem auto 0 auto;
		}
	}
}

#Header #MoreDropdown {
	a, p {
		font-size: 1.125rem;
		line-height: 1.875rem;
	}
	.more-nav-col {
		ul {
			li {
				margin-bottom: 1.5rem;
				a {
					font-size: 1.875rem;
					line-height: 1.2;
				}
			}
		}
	}
	.resource-nav-col {
		ul {
			li {
				&:first-child {
					a {
						font-size: 1.5rem;
					}
				}
			}
		}
		.search-form-wrap {
			margin: 1.5rem 0;
			padding: 0 0.5rem;
		}
	}
	.contact-nav-col {
		h2 {
			font-size: 1.5rem;
			font-family: $montserrat;
			font-weight: normal;
			margin: 0;
			text-transform: none;
			a {
				font-size: inherit;
			}
		}
		p {
			margin-top: 0;
		}
	}
}

#Header .dropdown {
	display: none;
	position: absolute;
	top: 90%;
	left: 50%;
	z-index: 100;
	transform: translate(-50%, 0);
	-webkit-transform: translate(-50%, 0);
	-ms-transform: translate(-50%, 0);
	padding: 2rem 0;
	&.active,
	&:hover {
		display: block;
	}
	.dropdown-interior {
		background: $white;
		position: relative;
		top: 10px;
		box-shadow: $shadow;
		border-radius: 3px;
		&:before {
			content: '';
			display: block;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 0 21px 21px 21px;
			border-color: transparent transparent $white transparent;
			position: absolute;
			top: -20px;
			left: 50%;
			transform: translate(-50%, 0);
			-webkit-transform: translate(-50%, 0);
			-ms-transform: translate(-50%, 0);
		}
	}
}

#Header #GovernmentDropdown {
	.dropdown-interior {
		padding: 0.75rem 0.625rem 1rem 0.625rem;
		width: 246px;
		> span {
			display: inline-block;
			width: 1px;
			height: 35px;
			background: $grey;
			position: relative;
			top: 6px;
			opacity: 0.75;
		}
		a {
			@include tungsten-semibold();
			text-transform: uppercase;
			font-size: 2rem;
			opacity: 0.5;
			padding: 0 1rem;//0 1.5rem;
			display: inline-block;
			transition: $transition;
			&:hover {
				opacity: 0.9;
			}
		}
	}
}

#Header #LoginDropdown {
	.dropdown-interior {
		width: 350px;
		padding: 2.75rem;
		color: $grey;
		&:before {
			left: 50.5%;
		}
	}
}

.lang-nav {
	> a {
		text-transform: uppercase;
		padding: 8px 6px;
		border-radius: 3px;
		margin: 0 0 0 0.25rem;
		&:first-child {
			margin: 0;
		}
		&.active {
			color: $white;
			background: $grey;
		}
	}
}

.login-wrap,
.home .login-wrap {
	h3 {
		font-family: $montserrat;
		font-size: 1.5rem;
		color: $grey;
		text-transform: none;
		padding: 0 0 2.25rem 0;//1.25rem 0 2.25rem 0;
	}
	form {
		input[type=submit] {
			border: 2px solid $dark-grey;
			&:hover {
				border: 2px solid $orange;
			}
		}
		input[type=text],
		input[type=password] {
			padding-left: 2.5rem;
		}
		input[type=password] {
			margin-right: 1rem;
		}
		input[type=submit] {
			margin: 0.75rem 0;
		}
		a {
			font-size: 0.75rem;
		}
		.input-group {
			margin-bottom: 1rem;
		}
		.icon {
			position: absolute;
			opacity: 0.4;
			top: 12px;
		}
		.col-wrap {
			.col {
				&:first-child {
					padding-right: 0.5rem;
				}
				&:last-child {
					padding-left: 0.5rem;
				}
			}
		}
	}
}

#Header #LiveChat {
	display: inline-block;
	position: absolute;
	right: 1rem;
	top: 100%;
	border-radius: 0 0 3px 3px;
	a {
		text-transform: uppercase;
		font-size: 1rem;
		padding: 1rem 1.25rem 1rem 3rem;
		display: block;
		&:hover {
			color: inherit;
		}
		&:before {
			content: '';
			margin: 0;
			position: absolute;
			top: 1rem;
			left: 1rem;
			width: 16px;
			height: 17px;
			background-image: url(../images/icons/chat.png);
		}
	}
}

.nav-open {
	#Header {
		#MobileToggle {
			.patty {
				transform: rotate(45deg);
				-webkit-transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				&:before,
				&:after {
					top: 0;
					transform: rotate(-90deg);
					-webkit-transform: rotate(-90deg);
					-ms-transform: rotate(-90deg);
				}
			}
		}
	}
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
	only screen and (-o-min-device-pixel-ratio: 13/10),
	only screen and (min-resolution: 120dpi) {
	#Header #HeaderLogo {
		a {
			background-size: 100%;
			background-image: url(../images/logos/tayco_2x.png);
		}
	}
	#Header #LiveChat {
		a {
			&:before {
				background-size: 100%;
				background-image: url(../images/icons/chat_2x.png);
			}
		}
	}
}
@media screen and (max-width: 1024px) {
	.desktop-only {
		display: none!important;
	}
	.mobile-only {
		display: block;
	}
	#Header {
		height: 75px;
		#HeaderLogo {
			margin-left: 0;
			padding: 0 1.625rem;
			a {
				width: 104px;
				height: 38px;
			}
		}
	}

	#Header {
		#MobileToggle {
			width: 33px;
			height: 33px;
			position: absolute;
			top: 50%;
			right: 1rem;
			color: $dark-grey;
			border: 0;
			padding: 0;
			display: block;
			transform: translate(0, -50%);
			-webkit-transform: translate(0, -50%);
			-ms-transform: translate(0, -50%);
			transition: $nav-transition;
			.patty,
			.patty:before,
			.patty:after {
				width: 30px;
				height: 2px;
				background: $dark-grey;
				transition: $transition;
				float: left;
				display: block;
			}
			.patty-wrapper {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				-webkit-transform: translate(-50%, -50%);
				-ms-transform: translate(-50%, -50%);
				width: 30px;
			}
			.patty {
				text-indent: -99999px;
				position: absolute;
				&:before,
				&:after {
					content: "";
					position: absolute;
				}
				&:before {
					top: -7px;
				}
				&:after {
					top: 7px;
				}
			}
		}
	}

	#MobileNavigation,
	.home #MobileNavigation {
		transition: $nav-transition;
		width: $nav-width;
		height: 100%;
		background: $dark-grey;
		position: fixed;
		left: 100%;
		top: 0;
		color: $white;
		padding: 1rem 0;
		a {
			text-decoration: none;
			&.user-link {
				font-size: 1.25rem;
				float: none;
				clear: both;
				display: block;
			}
			&.login-btn {
				display: inline-block;
				color: $dark-grey;
				&:hover {
					color: $white;
				}
			}
			&.logout {
				text-decoration: underline;
				text-transform: uppercase;
				float: none;
				clear: both;
				display: block;
				margin: 0.125rem 1rem 0 0;
			}
		}
		.user-login {
			&.active {
				.login-btn {
					background: $orange;
					color: $white;
				}
			}
			h2 {
				padding-bottom: 1rem;
			}
			.login-wrap {
				background: $light-grey;
				margin-top: 30px;
				padding: 1rem 0 2rem 0;
				position: relative;
				a {
					color: $dark-grey;
				}
				input[type=password] {
					margin-right: 0;
				}
				input[type=submit] {
					margin-top: 0;
					color: $dark-grey;
					&:hover {
						color: $white;
					}
				}
				&:before {
					content: '';
					display: block;
					width: 0;
					height: 0;
					border-style: solid;
					border-width: 0 29px 21px 29px;
					border-color: transparent transparent $light-grey transparent;
					position: absolute;
					top: -21px;
					left: 19%;
					transform: translate(-50%, 0);
					-webkit-transform: translate(-50%, 0);
					-ms-transform: translate(-50%, 0);
				}
			}
			form {
				.input-group {
					margin-bottom: 1rem;
				}
			}
		}
		.gov-nav {
			padding: 2.5rem 0;
			.lang-nav {
				float: right;
				a:hover,
				a.active {
					background: $white;
					color: $dark-grey;
				}
			}
			.gov-acc {
				position: relative;
				margin-top: 30px;
				padding: 1.75rem 0;
				.container {
					padding: 0 0.25rem;
					display: inline-block;
					left: 50%;
					transform: translate(-50%, 0);
					-webkit-transform: translate(-50%, 0);
					-ms-transform: translate(-50%, 0);
					> span {
						display: inline-block;
						width: 1px;
						height: 35px;
						background: $grey;
						position: relative;
						top: 6px;
						opacity: 0.75;
					}
					a {
						@include tungsten-semibold();
						text-transform: uppercase;
						font-size: 2rem;
						opacity: 0.5;
						padding: 0 0.75rem;
						display: inline-block;
						&:hover {
							opacity: 0.9;
						}
					}
				}
				&:before {
					content: '';
					display: block;
					width: 0;
					height: 0;
					border-style: solid;
					border-width: 0 29px 21px 29px;
					border-color: transparent transparent $mid-grey transparent;
					position: absolute;
					top: -21px;
					left: 22%;
					transform: translate(-50%, 0);
					-webkit-transform: translate(-50%, 0);
					-ms-transform: translate(-50%, 0);
				}
			}
		}
		.mobi-primary-nav {
			.mobi-nav-acc {
				.mobi-nav-wrap {
					a {
						display: inline-block;
						width: 75%;
						font-size: 1.375rem;
						padding: 1.45rem 0;
					}
					.mobi-nav-acc-trigger {
						background-image: url(../images/utility/nav-dropdown-mobile.png);
						background-position: right 0.75rem center;
						background-repeat: no-repeat;
						display: inline-block;
						width: 25%;
						height: 100%;
						position: absolute;
						right: 0;
						top: 0;
					}
				}
				&.active {
					.mobi-nav-acc-trigger {
						transform: rotate(180deg);
						-webkit-transform: rotate(180deg);
						-ms-transform: rotate(180deg);
						background-position: left 0.75rem center;
					}
				}
			}
			.mobi-nav-products {
				.container {
					padding-top: 1.5rem;
					padding-bottom: 1rem;
					&:nth-child(odd) {
						background: $white;
					}
					&:nth-child(even) {
						background: $light-grey;
					}
					a {
						color: $grey;
					}
					ul {
						li:first-child {
							padding-bottom: 1rem;
							position: relative;
							hr {
								position: absolute;
								bottom: 0;
							}
						}
					}
				}
			}
			.mobi-nav-studies {
				background: $white;
				padding-top: 1.5rem;
				padding-bottom: 1rem;
				.card.card-wide {
					height: 383px;
					.card-content {
						.card-img {
							overflow: hidden;
							height: 170px;
							img {
								height: 170px;
							}
						}
					}
					.card-meta {
						top: 170px;
						.card-meta-int {
							>p {
								&:first-child {
									font-size: 1rem;
								}
							}
						}
					}
				}
				.btn:only-child {
					width: 100%;
					font-size: 1.25rem;
					padding-top: 0;
					padding-bottom: 0;
					line-height: 48px;
				}
			}
			.mobi-nav-more {
				color: $dark-grey;
				.container {
					padding-top: 1.5rem;
					padding-bottom: 1rem;
					&:nth-child(odd) {
						background: $white;
					}
					&:nth-child(even) {
						background: $light-grey;
					}
				}
				.site-nav {
					font-size: 1.25rem;
					li {
						margin-bottom: 1rem;
					}
				}
				.resource-nav {
					ul {
						li:first-child {
							padding-bottom: 0.75rem;
							margin-bottom: 1rem;
							position: relative;
							&:after {
								content: '';
								height: 5px;
								width: 100%;
								background: $alt-grey;
								position: absolute;
								left: 0;
								bottom: 0;
							}
						}
						li {
							font-size: 1rem;
						}
					}
				}
				.mobi-contact {
					h2 {
						text-transform: none;
						font-family: $montserrat;
						font-size: 1rem;
						font-weight: normal;
						padding-bottom: 0.5rem;
					}
					p {
						font-size: 1rem;
					}
					.social {
						margin: 0;
					}
				}
				.newsletter {
					h2 {
						width: 70%;
						font-size: 1.125rem;
						line-height: 1.5;
						margin-bottom: 1rem;
					}
				}
			}
			hr {
				border-top-width: 5px;
				margin: 0;
			}
			ul {
				padding: 0;
				margin: 0;
				list-style: none;
			}
		}
	}

	.nav-open {
		overflow: hidden;
		#MobileNavigation {
			overflow: auto;
		}
		#Content,
		#Header,
		#Footer,
		#MobileNavigation {
			margin-left: -$nav-width;
		}
		#Header {
			top: 0;
		}
	}
}
```
Tayco JS
```javascript
var TAYCO = TAYCO || {};

(function( $ ) {
	var MobileNavigation = TAYCO.MobileNavigation = function MobileNavigation(el, args) {
		// Elements
		var $el     = $(el);
		var $toggle = $('#MobileToggle', $el);
		var $body   = $('body');
		var $html   = $('html');

		// Variables
		var options  = {};
		var height   = $el.height();
		var position = $(window).scrollTop();

		// Public Functions
		this.init = function() {
			// Merge arguments
			options = $.extend({}, options, args);
			// Apply listeners
			$(window).on('scroll', _scroll);
			$(window).on('resize', _resize);
			$toggle.on('click', _toggleNavigation);

			return;
		}

		// Private Functions

		var _scroll = function(e) {
			var new_position = $(window).scrollTop();

			if ($el.hasClass('open') || $('.active.dropdown, .active.menu-dropdown', $el).length > 0 || $body.hasClass('nav-open')) {
				return;
			}

			if (new_position < position) {
				$el.css('top', 0);
			}else if (new_position > position && new_position > height) {
				$el.css('top', - height + 'px');
			}

			position = new_position;
			return;
		}

		var _resize = function(e) {
			// Slight delay while Header animates to new height
			setTimeout(function(){
				height = $el.height();
			},250);		
			return;
		}

		var _toggleNavigation = function(e) {
			e.preventDefault();
			// Open and close the mobile navigation
			if ($body.hasClass('nav-open')) {
				$html.css('overflow', 'auto');
				$body.removeClass('nav-open');
			}else {
				$html.css('overflow', 'hidden');
				$body.addClass('nav-open');
			}
			$(window).resize();
			return;
		}

	}
})( jQuery );
```
Kilberry HTML
```html
<header id="Header" class="bg-black over-hero">
	<div class="container">
		<a href="http://kilberry.com/" class="logo">
			<span class="sr-only">Kilberry Home</span>
		</a>
		<nav id="MainMenu" class="menu bg-dark-grey">
			<div class="menu-main-menu-container"><ul id="menu-main-menu" class="menu"><li id="menu-item-563" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-563"><a href="http://kilberry.com/about/">About Us</a></li>
<li id="menu-item-564" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-564"><a href="http://kilberry.com/services/">Services</a></li>
<li id="menu-item-565" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-565"><a href="http://kilberry.com/client-perspectives/">Client Perspectives</a></li>
<li id="menu-item-566" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-566"><a href="http://kilberry.com/our-values/">Our Values</a></li>
<li id="menu-item-567" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-567"><a href="http://kilberry.com/thought-leadership/">Thought Leadership</a></li>
<li id="menu-item-568" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568"><a href="http://kilberry.com/contact/">Contact</a></li>
</ul></div>					<ul id="HeaderSocial"><li><a href="https://www.linkedin.com/company-beta/2762784/" target="_blank"><span class="fa fa-linkedin" aria-hidden="true"></span><span class="sr-only">Linkedin<span></span></span></a></li><li><a href="https://twitter.com/davisatkilberry" target="_blank"><span class="fa fa-twitter" aria-hidden="true"></span><span class="sr-only">Twitter<span></span></span></a></li><li><a href="mailto:info@kilberry.com"><span class="fa fa-envelope" aria-hidden="true"></span><span class="sr-only">Email<span></span></span></a></li></ul>					<a href="#" id="MobileToggleClose" class="mobile-toggle">
				<div class="patty-wrapper">
					<div class="patty">Toggle Menu</div>
				</div>
			</a>
		</nav>
		<a href="#" id="MobileToggleOpen" class="mobile-toggle">
			<div class="patty-wrapper">
				<div class="patty">Toggle Menu</div>
			</div>
		</a>
	</div>
</header>
```
Kilberry CSS
```sass
.desktop-only {
	display: block;
}
.mobile-only {
	display: none;
}
#Header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	height: $header-height;
	&.over-hero {
		background-color: transparent;
	}
	.mobile-toggle {
		width: 30px;
		height: 30px;
		position: absolute;
		top: 50%;
		right: 2rem;
		color: $black;
		border: 0;
		padding: 0;
		display: block;
		transition: $nav-transition;
		@include transform(translate(0, -50%));
		.patty,
		.patty:before,
		.patty:after {
			width: 30px;
			height: 6px;
			background: $white;
			transition: $transition;
			float: left;
			display: block;
		}
		.patty-wrapper {
			position: absolute;
			top: 50%;
			right: 50%;
			width: 30px;
			@include transform(translate(50%, -50%));
		}
		.patty {
			text-indent: -99999px;
			position: absolute;
			&:before,
			&:after {
				content: "";
				position: absolute;
			}
			&:before {
				top: -12px;
			}
			&:after {
				top: 12px;
			}
		}
		&#MobileToggleClose {
			top: 2.5rem;
			right: 2.5rem;
			.patty,
			.patty:before,
			.patty:after {
				background: $black;
			}
			.patty {
				@include transform(rotate(45deg));
				&:before,
				&:after {
					top: 0px;
					@include transform(rotate(-90deg));
				}
				&:before {
					opacity: 0;
				}
			}
			&:hover {
				.patty,
				.patty:before,
				.patty:after {
					background: $white;
				}
			}
		}
	}

	.logo {
		width: 52px;
		height: 62px;
		position: relative;
		top: 50%;
		@include transform(translate(0, -50%));
	}
	.container {
		height: 100%;
	}
}

#MainMenu {
	transition: $nav-transition;
	max-width: $nav-width;
	width: 100%;
	height: 100%;
	position: fixed;
	left: 100%;
	top: 0;
	padding: 9rem 0 1rem 0;
	z-index: 1000;
	box-sizing: border-box;
	@extend %clearfix;
	ul {
		list-style-type: none;
		padding: 0 2.625rem;
		margin: 0;
		width: 100%;
		box-sizing: border-box;
		li {
			margin-bottom: 1.125rem;
		}
	}
	a {
		text-transform: uppercase;
		text-decoration: none;
		color: $black;
		font-size: 1.125rem;
		font-weight: bold;
		line-height: 1;
		display: block;
		padding: 0.5rem 0;
		transition: $transition;
		&:hover,
		&.active {
			color: $white;
			opacity: 1;
		}
	}
	#HeaderSocial {
		width: auto;
		box-sizing: border-box;
		float: right;
		margin-top: 3.375rem;
		@extend %clearfix;
		li {
			margin: 0 0 0 1rem;
			float: left;
			&:first-child {
				margin: 0;
			}
		}
	}
}

.nav-open {
	overflow: hidden;
	#MainMenu {
		overflow: auto;
		margin-left: -$nav-width;
	}
	#Header {
		#Header {
			top: 0;
		}
	}
}
```
Kilberry JS
```javascript
var KILBERRY = KILBERRY || {};

(function( $ ) {
	var MobileNavigation = KILBERRY.MobileNavigation = function MobileNavigation(el) {
		// Elements
		var $el          = $(el);
		var $toggleOpen  = $('#MobileToggleOpen', $el);
		var $toggleClose = $('#MobileToggleClose', $el);
		var $body        = $('body');
		var $html        = $('html');

		// Variables

		// Public Functions
		this.init = function() {
			// Apply listeners
			$toggleOpen.on('click', _toggleNavigationOpen);
			$toggleClose.on('click', _toggleNavigationClose);

			return;
		}

		// Private Functions

		var _toggleNavigationOpen = function(e) {
			e.preventDefault();
			// Open the mobile navigation
			$html.css('overflow', 'hidden');
			$body.addClass('nav-open');
			return;
		}

		var _toggleNavigationClose = function(e) {
			e.preventDefault();
			// Close the mobile navigation
			$html.css('overflow', 'auto');
			$body.removeClass('nav-open');
			return;
		}

	}
})( jQuery );
```
## Examples

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)