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

const navButtons = document.querySelectorAll('ul button');

navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // remove .active
        navButtons.forEach(btn => btn.classList.remove('active'));

        // add .active to the clicked btn
        e.target.classList.toggle('active');

        const pageKey = e.target.dataset.page;
        const pageFunction = pageMapper[pageKey];

        if (pageFunction) {
            content.replaceChildren();
            pageFunction();
        }
    })
});