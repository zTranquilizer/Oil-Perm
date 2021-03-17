

document.addEventListener("DOMContentLoaded", function () {
	menuOpen();
});

function menuOpen() {
	document.querySelector('.header-menu__icon').addEventListener('click', function () {
		document.querySelector('.header-menu__icon').classList.toggle('active');
		document.querySelector('.header-menu').classList.toggle('active');
		document.querySelector('body').classList.toggle('lock');

	})
}