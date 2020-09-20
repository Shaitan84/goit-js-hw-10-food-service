import menuTemplate from '../tamplates/gallery-items.hbs'
import menuItems from '../menu.json'


const menuTemplateCode = menuTemplate(menuItems);
const templateRef = document.querySelector(".js-menu");


templateRef.insertAdjacentHTML('beforeend', menuTemplateCode);