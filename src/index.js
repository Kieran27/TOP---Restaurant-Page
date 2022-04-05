import './styles.css';

import populateMenu from './menu.js';
import populateAbout from './about.js';
import populateHome from './home.js';

const homeLink = document.getElementById('home');
const aboutLink = document.getElementById('about');
const menuLink = document.getElementById('menu');

homeLink.addEventListener('click', populateHome);
aboutLink.addEventListener('click', populateAbout);
menuLink.addEventListener('click', populateMenu);
