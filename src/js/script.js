'use strict'

const Theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme',
};

const btnSwitch = document.querySelector('.js-switch-input')
const themeSwitch = document.querySelector('body')
const checkedTheme = document.getElementById("theme-switch-control");

themeSwitch.classList.add(Theme.LIGHT)

const savedTheme = localStorage.getItem('checked');

const checkBox = () => {
	if (savedTheme === 'true') {
		themeSwitch.classList.replace(Theme.LIGHT, Theme.DARK);
		checkedTheme.checked = true;
		return
	} else {
		themeSwitch.classList.replace(Theme.DARK, Theme.LIGHT);
		checkedTheme.checked = false;
	}
}
checkBox()

const changeTheme = () => {
	if (event.target.checked) {
		themeSwitch.classList.replace(Theme.LIGHT, Theme.DARK);
		localStorage.setItem('checked', 'true');
	}
	else {
		themeSwitch.classList.replace(Theme.DARK, Theme.LIGHT);
		localStorage.setItem('checked', 'false');
	}
};


btnSwitch.addEventListener('change', changeTheme);