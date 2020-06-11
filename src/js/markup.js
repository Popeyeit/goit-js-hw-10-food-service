import refs from './refs'
import template from '../template/template.hbs';
import menu from '../menu.json';

const markup = template(menu);
refs.menuRef.insertAdjacentHTML('beforeend', markup);
