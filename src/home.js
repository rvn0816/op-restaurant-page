import pastaImg from './assets/pasta.jpg';

function loadHome() {
    const content = document.getElementById('content');
    const fragment = document.createDocumentFragment();

    const heroContainer = document.createElement('div');
    heroContainer.classList.add('home-container');

    const img = new Image();
    img.src = pastaImg;
    img.setAttribute("alt", "Delicious pasta");
    img.classList.add('hero-image');

    const tagLine = document.createElement('h2');
    tagLine.textContent = "Authentic Italian flavors, serving with a modern heart.";
    tagLine.classList.add('hero-tagline');

    const description = document.createElement('p');
    description.textContent = 'Experience the heart of Italy in every bite. Our family-owned trattoria has been serving handmade pasta and traditional recipes since 1984. Come for the food, stay for the warmth.';

    heroContainer.appendChild(img);
    heroContainer.appendChild(tagLine);
    heroContainer.appendChild(description);

    fragment.appendChild(heroContainer);
    content.appendChild(fragment);
}

export default loadHome;