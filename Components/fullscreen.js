export const greenButtons = document.querySelectorAll(".icon.green");
export const elem = document.querySelectorAll(".video");

// Funtion that makes video go fullscreen when clicked on green button
function fullscreenWhenClickedOnGreenButton() {
	// Adding event listeners to all clicked green buttons with class (icon green) and videos with class (video)
	for (let greenButtons of greenButtons) {
		greenButtons.addEventListener("click", () => {
			for (let elem of elem) {
				if (elem.requestFullscreen) {
					elem.requestFullscreen();
				} else if (elem.webkitRequestFullscreen) {
					/* Safari */
					elem.webkitRequestFullscreen();
				} else if (elem.msRequestFullscreen) {
					/* IE11 */
					elem.msRequestFullscreen();
				}
			}
		});
	}
}
fullscreenWhenClickedOnGreenButton();
