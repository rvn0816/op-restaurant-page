function loadHome() {
    const content = document.getElementById('content');
    const fragment = document.createDocumentFragment();

    const headline = document.createElement('h1');
    headline.textContent = 'Bella Notte Trattoria';

    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600";
    img.setAttribute("alt", "Delicious pasta");

    const introduction = document.createElement('p');
    introduction.textContent = 'Experience the heart of Italy in every bite. Our family-owned trattoria has been serving handmade pasta and traditional recipes since 1984. Come for the food, stay for the warmth.';

    fragment.appendChild(headline);
    fragment.appendChild(img);
    fragment.appendChild(introduction);

    content.appendChild(fragment);
}

export default loadHome;