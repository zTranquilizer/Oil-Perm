
@@include('swiper-bundle.js', ());

document.addEventListener("DOMContentLoaded", function () {
	menuOpen();
	fixedHeader();

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

function fixedHeader() {
	document.addEventListener('scroll', function () {
		let headerScroll = window.scrollY;

		if (headerScroll > 80) {
			document.querySelector('.header').classList.add('fixed');
			document.querySelector('.hero-screen').classList.add('padding-top');
			document.querySelector('.header').classList.remove('translate');
		} else {
			document.querySelector('.header').classList.remove('fixed');
			document.querySelector('.hero-screen').classList.remove('margin-top');
			document.querySelector('.header').classList.remove('translate');
		}

	});
}