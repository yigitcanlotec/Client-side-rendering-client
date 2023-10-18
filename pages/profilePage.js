
function profilePage(credentials) {
    const oldBodyElement = document.body;
    const parentElement = oldBodyElement.parentElement;
    parentElement.removeChild(oldBodyElement);
    const body = document.createElement('body');
    parentElement.appendChild(body);

    domCreateElement('link', {
        rel: 'stylesheet',
        href: '/css/profile.css',
    }).appendToLast('body');
    domCreateElement('div', { className: 'container' }).appendToLast('body');

    domCreateElement('input', { type: 'text', id: 'username', value: credentials.data[0] }).appendToLast('container');
    domCreateElement('input', { type: 'password', id: 'password', value: credentials.data[1] }).appendToLast('container');
    domCreateElement('div', { className: 'button-container' }).appendToLast('container');
    domCreateElement('input', { type: 'button', id: 'edit', value: 'Edit' }).appendToLast('button-container');
    domCreateElement('input', { type: 'button', id: 'back', value: 'Geri' }).appendToLast('button-container');

    document.getElementById('back').addEventListener('click', () => {
        homePage(localStorage.getItem('token'));
    });
}