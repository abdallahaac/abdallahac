const burgerContainer = document.querySelector("#burger-container");
const expandedBurger = document.querySelector("#expandedBurger");
const burgerSlice = document.querySelectorAll("#burgerslice");
const mainContent = document.querySelector("main");
console.log(burgerContainer);
console.log(expandedBurger);

burgerContainer.addEventListener("click", (e) => {
	expandedBurger.style.visibility = "visible";
	burgerContainer.style.transform = "rotate(90deg)";
});

mainContent.addEventListener("click", (e) => {
	expandedBurger.style.visibility = "hidden";
	burgerContainer.style.transform = "rotate(180deg)";
});
burgerContainer.addEventListener("dblclick", (e) => {
	expandedBurger.style.visibility = "hidden";
	burgerContainer.style.transform = "rotate(180deg)";
});

// let isVisible = "hidden";
// console.log(isVisible);
