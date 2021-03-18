
@@include('swiper-bundle.js', ());

document.addEventListener("DOMContentLoaded", function () {
	menuOpen();

	let reviewsSlider = new Swiper('.reviews__slider', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
});

function menuOpen() {
	document.querySelector('.header-menu__icon').addEventListener('click', function () {
		document.querySelector('.header-menu__icon').classList.toggle('active');
		document.querySelector('.header-menu').classList.toggle('active');
		document.querySelector('body').classList.toggle('lock');

	})
}