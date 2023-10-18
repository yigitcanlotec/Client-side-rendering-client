function registerUser(username, password) {
    axios.post(serverURL + '/api/register', { username: username, password: password }).then((result) => {

    }).catch((error) => { console.error(error) });
}

function registerPage() {
    const oldBodyElement = document.body;
    const parentElement = oldBodyElement.parentElement;
    parentElement.removeChild(oldBodyElement);
    const body = document.createElement('body');
    parentElement.appendChild(body);

    domCreateElement('link', {
        rel: 'stylesheet',
        href: '/css/login.css',
    }).appendToLast('body');
    domCreateElement('div', { className: 'top-container' }).appendToLast(
        'body'
    );
    domCreateElement('div', { className: 'main-container' }).appendToLast(
        'body'
    );
    domCreateElement('div', { className: 'elements-container' }).appendToLast(
        'top-container'
    );
    domCreateElement('a', { href: '/', innerText: 'ToDo' }).appendToLast(
        'elements-container'
    );
    domCreateElement('div', {
        className: 'login-button-container',
    }).appendToLast('elements-container');
    domCreateElement('a', {
        onclick: loginPage,
        innerText: 'Log In',
    }).appendToLast('login-button-container');
    domCreateElement('a', {
        onclick: registerPage,
        innerText: 'Sign Up',
    }).appendToLast('login-button-container');

    domCreateElement('div', { className: 'login-container' }).appendToLast(
        'main-container'
    );
    domCreateElement('div', { className: 'input-container' }).appendToLast(
        'login-container'
    );
    domCreateElement('div', { className: 'text-container' }).appendToLast(
        'input-container'
    );
    domCreateElement('input', {
        type: 'text',
        name: '',
        id: 'login-username',
        placeholder: 'User Name',
    }).appendToLast('text-container');
    domCreateElement('input', {
        type: 'password',
        name: '',
        id: 'login-password',
        placeholder: 'Password',
    }).appendToLast('text-container');
    domCreateElement('button', {
        type: 'submit',
        innerText: 'Register',
        id: 'submit-button',
    }).appendToLast('input-container');

    document.getElementById('submit-button').addEventListener('click', () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        registerUser(username, password);

    });
}


