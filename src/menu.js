function loadMenu() {
    const content = document.getElementById('content');
    const fragment = document.createDocumentFragment();
    
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    const menuItems = [
        { name: "Lasagna", price: "$15", description: "Layers of pasta, meat sauce, and ricotta."},
        { name: "Spaghetti Carbonara", price: "$12", description: "Classic Roman pasta with egg and guanciale."}
    ];

    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('menu-card-header');

        const title = document.createElement('h2');
        title.textContent = item.name;

        const price = document.createElement('span');
        price.classList.add('menu-item-price');
        price.textContent = item.price;

        cardHeader.appendChild(title);
        cardHeader.appendChild(price);

        const description = document.createElement('p');
        description.textContent = item.description;
        
        card.appendChild(cardHeader);
        card.appendChild(description);
        
        fragment.appendChild(card);
    });

    menuGrid.appendChild(fragment);
    content.appendChild(menuGrid);
}

export default loadMenu;