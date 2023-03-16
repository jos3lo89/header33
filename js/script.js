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

// swiper js
var swiper = new Swiper(".course-slider", {
	loop: true,
	// grabCursor: true,
	// centeredSlides: true,
	// slidesPerView: 1,
	spaceBetween: 0,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		550: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
	keyboard: {
		enabled: true,
	},

	autoplay: {
		delay: 5000, //auto-play cada 5 sec
		pauseOnMouseEnter: true, //pasa maus y pausa slides
		disableOnInteraction: false, //vuelva a lo mismo
	},
});

// panel de busqueda
function buscarPelicula() {
	let input = document.getElementById("buscador");
	let filter = input.value.toUpperCase();
	let divs = document.getElementById("peliculas").getElementsByTagName("div");

	for (let i = 0; i < divs.length; i++) {
		let pelicula = divs[i].getElementsByTagName("p")[0];
		let titulo = pelicula.textContent || pelicula.innerText;

		if (titulo.toUpperCase().indexOf(filter) > -1) {
			divs[i].style.display = "";
		} else {
			divs[i].style.display = "none";
		}
	}
}
