import './style.css';
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.getElementById('content');
loadHome();

const pageMapper = {
    home: loadHome,
    menu: loadMenu,
    contact: loadContact
}

const navButtons = document.querySelectorAll('nav button');

navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const pageKey = e.target.dataset.page;
        const pageFunction = pageMapper[pageKey];

        if (pageFunction) {
            content.replaceChildren();
            pageFunction();
        }
    })
});