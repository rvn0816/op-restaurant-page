function loadMenu() {
    const content = document.getElementById('content');
    const fragment = document.createDocumentFragment();

    const menuItems = [
        { name: "Lasagna", price: "$15", description: "Layers of pasta, meat sauce, and ricotta."},
        { name: "Spaghetti Carbonara", price: "$12", description: "Classic Roman pasta with egg and guanciale."}
    ];

    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        const title = document.createElement('h2');
        title.textContent = `${item.name} - ${item.price}`;

        const description = document.createElement('p');
        description.textContent = item.description;

        card.appendChild(title);
        card.appendChild(description);

        fragment.appendChild(card);
    });

    content.appendChild(fragment);
}

export default loadMenu;