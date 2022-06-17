//Progress bar
function updateProgress() {
	const { scrollHeight, scrollTop } = document.documentElement;
	const scrollPercent = `${
		(scrollTop / (scrollHeight - window.innerHeight)) * 100
	}%`;
	document
		.querySelector("#progress-bar")
		.style.setProperty("--progress", scrollPercent);
}
const progressBar = document.addEventListener("scroll", updateProgress);

//Fullscreen for Technical Project page
const greenButtons = document.querySelectorAll(".icon.green");
const elem = document.querySelectorAll(".video");

// Funtion that makes video go fullscreen when clicked on green button
function fullscreenWhenClickedOnGreenButton() {
	// Adding event listeners to all clicked green buttons with class (icon green) and videos with class (video)
	for (let greenButton of greenButtons) {
		greenButton.addEventListener("click", () => {
			for (let elems of elem) {
				if (elems.requestFullscreen) {
					elems.requestFullscreen();
				} else if (elem.webkitRequestFullscreen) {
					/* Safari */
					elems.webkitRequestFullscreen();
				} else if (elem.smsRequestFullscreen) {
					/* IE11 */
					elems.msRequestFullscreen();
				}
			}
		});
	}
}
fullscreenWhenClickedOnGreenButton();

//burger icon
const burgerContainer = document.querySelector("#burger-container");
const expandedBurger = document.querySelector("#expandedBurger");
const burgerSlice = document.querySelectorAll(".burgerSlice");
const mainContent = document.querySelector("main");
let burgerClosedContainer = document.querySelector(
	".closed-burger-icon-container"
);
burgerContainer.addEventListener("click", (e) => {
	expandedBurger.style.visibility = "visible";

	if (!document.querySelector("closed-burger-icon")) {
		//hides pre-exisisting element
		burgerContainer.style.display = "none";
		let newElement = document.createElement("div");
		newElement.innerHTML =
			'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 26 26" version="1.1"><g id="surface1"> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 26 21.871094 L 16.992188 12.976562 L 25.875 4.003906 L 21.871094 0 L 12.972656 9.011719 L 3.972656 0.125 L 0 4.097656 L 9.015625 13.023438 L 0.125 22.027344 L 4.097656 26 L 13.019531 16.988281 L 21.996094 25.875 Z M 26 21.871094 "/> </g> </svg>';

		newElement.className = "closed-burger-icon";

		//appends element to page
		burgerClosedContainer.appendChild(newElement);
		//replace element with pre-existing element
		newElement.addEventListener("click", () => {
			newElement.style.display = "none";
			burgerContainer.style.setProperty("display", "block");
			expandedBurger.style.visibility = "hidden";

			newElement.remove();
		});
	}
});
