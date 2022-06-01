import { updateProgress, progressBar } from "../Components/Progress.js";
import { test } from "../Components/showNavigation.js";
import { navbar } from "../Components/Navbar.js";
import Highway from "../node_modules/@dogstudio/highway";
import Fade from "../Components/fade.js";
import { btnListener } from "../Components/fullscreen.js";

// File: main.js
// Import Highway
// Import Transitions

// // Call Highway.Core once.
const H = new Highway.Core({
	transitions: {
		default: Fade,
	},
});
