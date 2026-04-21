function loadContact() {
    const content = document.getElementById('content');
    const fragment = document.createDocumentFragment();

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-info');
    

    const title = document.createElement('h1');
    title.textContent = 'Get in Touch';
    fragment.appendChild(title);

    const phone = document.createElement('p');
    phone.textContent = '📞 (555) 123-4567';
    fragment.appendChild(phone);

    const address = document.createElement('p');
    address.textContent = '📍 123 Pasta Lane, Roma, Italy';
    fragment.appendChild(address);

    const hours = document.createElement('p');
    hours.textContent = 'Open Daily: 11am - 10pm';
    fragment.appendChild(hours);

    contactDiv.appendChild(fragment);
    content.appendChild(contactDiv);
}

export default loadContact;