// Import Progress bar
import { updateProgress, progressBar } from "../Components/Progress.js";
import Highway from "../node_modules/@dogstudio/highway";

// File: main.js
// Import Highway
// Import Transitions
import Fade from "../Components/fade";

// Call Highway.Core once.
const H = new Highway.Core({
	transitions: {
		default: Fade,
	},
});
// import { navbar } from "../Components/Navbar.js";
