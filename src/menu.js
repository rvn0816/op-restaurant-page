function loadMenu() {
    const content = document.getElementById('content');

    const menuItems = [
        { name: "Lasagna", price: "$15", description: "Layers of pasta, meat sauce, and ricotta."},
        { name: "Spaghetti Carbonara", price: "$12", description: "Classic Roman pasta with egg and guanciale."}
    ];

    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');

        const title = document.createElement('h2');
        title.textContent = item.name;
        
        const price = document.createElement('span');
        price.textContent = item.price;

        const description = document.createElement('p');
        description.textContent = item.description;

        itemDiv.appendChild(title);
        itemDiv.appendChild(price);
        itemDiv.appendChild(description);

        content.appendChild(itemDiv);
    });
}

export default loadMenu;