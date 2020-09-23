'use strict'

const Theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme',
};

const btnSwitchTheme = document.querySelector('.js-switch-input')
const themeSwitch = document.querySelector('body')
const checkedTheme = document.getElementById("theme-switch-control");
const savedTheme = localStorage.getItem('checked');

themeSwitch.classList.add(Theme.DARK)

//Сохранение темы при обновлении страницы
const checkBox = () => {
	if (savedTheme === 'true') {
		themeSwitch.classList.replace(Theme.LIGHT, Theme.DARK);
		checkedTheme.checked = true;
		return;
	} else {
		themeSwitch.classList.replace(Theme.DARK, Theme.LIGHT);
		checkedTheme.checked = false;
	}
}
checkBox()
//Изменение темы страницы
const changeTheme = (event) => {
	if (event.target.checked) {
		themeSwitch.classList.replace(Theme.LIGHT, Theme.DARK);
		localStorage.setItem('checked', 'true');
	}
	else {
		themeSwitch.classList.replace(Theme.DARK, Theme.LIGHT);
		localStorage.setItem('checked', 'false');
	}
};

btnSwitchTheme.addEventListener('change', changeTheme);