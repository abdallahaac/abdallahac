const burgerContainer = document.querySelector("#burger-container");
const expandedBurger = document.querySelector("#expandedBurger");
const tabs = document.querySelectorAll("li");
const mainContent = document.querySelector("main");
console.log(burgerContainer);
console.log(expandedBurger);

burgerContainer.addEventListener("click", (e) => {
	expandedBurger.style.visibility = "visible";
});

mainContent.addEventListener("click", (e) => {
	expandedBurger.style.visibility = "hidden";
});
// let isVisible = "hidden";
// console.log(isVisible);
