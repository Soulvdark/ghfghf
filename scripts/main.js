const tabItem = document.querySelectorAll('.menu__list');
const tabContent = document.querySelectorAll('.cards');

tabItem.forEach(function (element) {
	element.addEventListener('click', open);
});

function open(evt) {
	const tabTarget = evt.currentTarget;
	const button = tabTarget.dataset.button;

	tabItem.forEach(function (item) {
		item.classList.remove('tabs__btn-item--active');
	});

	tabTarget.classList.add('tabs__btn-item--active');

	tabContent.forEach(function (item) {
		item.classList.remove('tabs__content-item--active');
	});
	document
		.querySelector(`#${button}`)
		.classList.add('tabs__content-item--active');
}

let darkModeEnabled = false;

function theme() {
	const darkModeButton = document.getElementById('darkModeButton');
	const enableDarkMode = () => {
		document.documentElement.setAttribute('data-theme', 'dark');
	};
	const disableDarkMode = () => {
		document.documentElement.removeAttribute('data-theme');
	};
	darkModeButton.addEventListener('click', () => {
		darkModeEnabled = !darkModeEnabled;

		if (darkModeEnabled) {
			enableDarkMode();
		} else {
			disableDarkMode();
		}
	});
}

theme();
