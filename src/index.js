import loadHomePage from './homepage';
import loadContactPage from './contact';
import loadMenuPage from './menu';

loadHomePage();

const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', loadHomePage);

const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', loadContactPage);

const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', loadMenuPage);
