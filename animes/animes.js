// header start
let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector(".header .flex .navbar");

menuBtn.addEventListener("click", () => {
	navBar.classList.toggle("active");
	menuBtn.classList.toggle("fa-times");
});

document.addEventListener("click", (event) => {
	if (event.target.closest(".header")) {
		return;
	}
	navBar.classList.remove("active");
	menuBtn.classList.remove("fa-times");
});
// header end