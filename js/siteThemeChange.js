export function siteThemeChange () {
	window.addEventListener("load", windowLoad);

	function windowLoad() {
		// HTML
		const htmlBlock = document.documentElement;

		// get a saved theme
		const saveUserTheme = localStorage.getItem('user-theme');

		// work with system settings
		let userTheme;
		if (window.matchMedia) {
			userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
			!saveUserTheme ? changeTheme() : null;
		});

		// change theme on click
		const themeButton = document.querySelector('.page__theme');
		if (themeButton) {
			themeButton.addEventListener('click', function (e) {
				changeTheme(true);
			});
		}

		// function to add theme class
		function setThemeClass() {
			if (saveUserTheme) {
				htmlBlock.classList.add(saveUserTheme);
			} else {
				htmlBlock.classList.add(userTheme);
			}
		}

		// add a theme class
		setThemeClass();

		// theme change function
		function changeTheme(saveTheme = false) {
			let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
			let newTheme;

			if (currentTheme === 'light') {
				newTheme = 'dark';
			} else if (currentTheme === 'dark') {
				newTheme = 'light';
			}
			htmlBlock.classList.remove(currentTheme);
			htmlBlock.classList.add(newTheme);
			saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
		}
	}
}