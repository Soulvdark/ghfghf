// let elems = document.querySelectorAll('.card');
// let text = document.querySelector(".dashboard-project")
let text = document.querySelector('.dashboard-project__number');

// console.log(card)
// text.textContent = card;
// Получаем все элементы с классом "cards"
let card = document.querySelectorAll('.card');
function project() {
	text.textContent = card.length;
}
project();

const tabItem = document.querySelectorAll('.menu__list');
const tabContent = document.querySelectorAll('.cards');
const activeOnElements = document.querySelectorAll('.active-on');
const contentItems = document.querySelectorAll('.tabs__content-item');

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

window.addEventListener('load', function () {
	let elementToAnimate = document.querySelector('.anim');
	elementToAnimate.classList.add('anim');
	elementToAnimate.addEventListener('animationend', function () {
		elementToAnimate.classList.remove('anim');
	});
});

theme();
