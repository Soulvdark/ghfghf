
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

console.log(6%3);
console.log(5/3)