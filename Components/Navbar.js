var html =
	'<header class="nav-container">\
			<nav>\
				<a href="../index.html" class="nav-item name">Abdallah Abou-Chahine</a>\
			</nav>\
			<nav class="middle-content">\
				<ul class="nav-elements projects">\
					<li id="portfolio">\
						<a href="" id="portfolio" class="nav-item link portfolio"\
							>Portfolio</a\
						>\
					</li>\
					<div class="drop-down-list" id="drop-down">\
						<ul>\
							<li><a href="/graphic-design.html">Graphic Design</a></li>\
							<li><a href="/art-&-photography.html">Art & Photography</a></li>\
							<li><a href="/technical-projects.html">Technical Projects</a></li>\
						</ul>\
					</div>\
				</ul>\
			</nav>\
\
			<nav>\
				<ul class="nav-elements personal">\
					<li><a class="nav-item link" href="/About.html">About</a></li>\
					<li class="nav-item github">\
						<a\
							href="https://github.com/abdallahaac"\
							class="nav-item link github"\
							target="_blank"\
							>Github</a\
						>\
					</li>\
\
					<a href="" id="contact-button" class="nav-item contact"\
						>Contact me\
					</a>\
				</ul>\
			</nav>\
		</header>';

export const navbar = (document.getElementById("nav").innerHTML = html);
