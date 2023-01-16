import loadHomePage from './homepage';

loadHomePage();

const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', loadHomePage);
