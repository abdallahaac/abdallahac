// Navbar Html code
var html =
	'	<header class="nav-container">\
<nav>\
	<a href="main" id="name" class="nav-item name">Abdallah Abou-Chahine</a>\
</nav>\
<nav class="middle-content">\
	<ul class="nav-elements projects">\
		<li id="portfolio">\
			<a href="/main" id="portfolio" class="nav-item link portfolio"\
				>Portfolio</a\
			>\
		</li>\
		<div class="drop-down-list" id="drop-down">\
			<ul>\
				<li><a href="/graphic-design">Graphic Design</a></li>\
				<li><a href="/art-&-photography">Art & Photography</a></li>\
				<li><a href="/technical-projects">Technical Projects</a></li>\
			</ul>\
		</div>\
	</ul>\
</nav>\
\
<nav>\
	<ul class="nav-elements personal">\
		<li>\
			<a class="nav-item link" href="/About">About</a>\
		</li>\
		<li class="nav-item github">\
			<a\
				href="https://github.com/abdallahaac"\
				target="_blank"\
				class="nav-item link github"\
				>Github</a\
			>\
		</li>\
\
		<a href="" id="contact-button" class="nav-item contact"\
			>Contact me\
		</a>\
		<!-- beginning of burger icon  -->\
		<div href="" id="burger1" class="burger">\
			<img\
				id="burgerslice"\
				class="burger slice"\
				src="./assets/Images/menu-icon-0.svg"\
				alt=""\
			/>\
			<img\
				class="burger slice"\
				src="./assets/Images/menu-icon-0.svg"\
				alt=""\
			/>\
			<img\
				class="burger slice"\
				src="./assets/Images/menu-icon-0.svg"\
				alt=""\
			/>\
		</div>\
		<!-- beginning of burger icon  -->\
	</ul>\
</nav>\
</header>';

export const navbar = (document.getElementById("nav").innerHTML = html);
