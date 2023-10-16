// Function to set a cookie
function setCookie(name, value) {
    // const expirationDate = new Date();
    // expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    // Format the cookie string
    // const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    const cookieString = `${name}=${value}; path=/`;
    // Set the cookie
    document.cookie = cookieString;
}

function sendLoginRequest(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const postData = {
        username: username,
        password: password,
    };

    
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    
    axios
        .post('http://localhost:3000/', postData, {
            withCredentials: true, // Include credentials in the request
        })
        .then((response) => {
            token = response.data.token; // Extract token from the response

            console.log(response.data); // This will log the response from '/redirect'
        })
        .then((response) => {
           
            console.log(token);
            // return axios.get(`http://localhost:3000/?token=${token}`);
            // window.location.href = `http://localhost:3000/?token=${token}`;
            window.location.href = 'http://localhost:3000';
        })
        .catch((error) => {
            console.error(error);
        });
}

function domCreateElement(element, options) {
    const createdElement = document.createElement(element);

    try {
       if (options){
            for (const propsName of Object.keys(options)) {
                createdElement[propsName] = options[propsName];
            }
       }
    } catch (error) {
        console.log('Element error:', error);
    }
    return {
        appendToLast: function appendToLast(parentElement) {
            if (parentElement === 'body')
                return document.body.appendChild(createdElement);
            // if (element === 'a') console.log(options, document.getElementsByClassName(parentElement));
            return document
                .getElementsByClassName(parentElement)[0]
                .appendChild(createdElement);
            // typeof document.getElementById(parentElement) && document.getElementById(parentElement)[0].appendChild(createdElement);
        },
    };
}

    domCreateElement('link', {
        rel: 'stylesheet',
        href: '/index.css',
    }).appendToLast('body');
    domCreateElement('div', { className: 'top-container' }).appendToLast('body');
    domCreateElement('div', { className: 'main-container' }).appendToLast('body');
    domCreateElement('h1', { innerText: 'TodoApp.' }).appendToLast(
        'main-container'
    );
    domCreateElement('div', { className: 'elements-container' }).appendToLast(
        'top-container'
    );
    domCreateElement('a', { href: '/', innerText: 'ToDo' }).appendToLast(
        'elements-container'
    );
    domCreateElement('div', { className: 'login-button-container' }).appendToLast(
        'elements-container'
    );
    domCreateElement('a', { onclick: loginPage, innerText: 'Log In' }).appendToLast(
        'login-button-container'
    );
    domCreateElement('a', {
        onclick: registerPage,
        innerText: 'Sign Up',
    }).appendToLast('login-button-container');

function loginPage() {
    // Get a reference to the body element
    const oldBodyElement = document.body;

    // Get a reference to the parent element (html element)
    const parentElement = oldBodyElement.parentElement;

    // Remove the body element from its parent (html element)
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
        onclick: homePage,
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
        innerText: 'Sign In',
        onclick: sendLoginRequest,
    }).appendToLast('input-container');

    domCreateElement('script', {
        src: 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js',
    }).appendToLast('body');
}

function registerPage() {
    // Get a reference to the body element
    const oldBodyElement = document.body;

    // Get a reference to the parent element (html element)
    const parentElement = oldBodyElement.parentElement;

    // Remove the body element from its parent (html element)
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
        onclick: '',
    }).appendToLast('input-container');

    domCreateElement('script', {
        src: 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js',
    }).appendToLast('body');
}

function homePage() {
    // Get a reference to the body element
    const oldBodyElement = document.body;

    // Get a reference to the parent element (html element)
    const parentElement = oldBodyElement.parentElement;

    // Remove the body element from its parent (html element)
    parentElement.removeChild(oldBodyElement);

    const body = document.createElement('body');
    parentElement.appendChild(body);

    domCreateElement('link', {
        rel: 'stylesheet',
        href: '/css/user.css',
    }).appendToLast('body');

    domCreateElement('div', { className: 'first-container' }).appendToLast(
        'body'
    );
    domCreateElement('div', { className: 'top-container' }).appendToLast(
        'first-container'
    );
    domCreateElement('h1', { innerText: 'Challange-3' }).appendToLast(
        'top-container'
    );
    domCreateElement('form', {action: '/home', method: 'POST'}).appendToLast(
        'top-container'
    );

    domCreateElement('div', { className: 'container' }).appendToLast(
        'first-container'
    );

    domCreateElement('table', { id: 'table', className: 'table' }).appendToLast(
        'container'
    );

    domCreateElement('tr', { id: 'tr', className: 'tr' }).appendToLast(
        'table'
    );

   domCreateElement('th', { innerText: 'id' }).appendToLast(
    'tr'
    );  
    domCreateElement('th', { innerText: 'title' }).appendToLast(
        'tr'
        );  
    domCreateElement('th', { innerText: 'assignee' }).appendToLast(
        'tr'
        ); 
    domCreateElement('th', { innerText: 'done' }).appendToLast(
        'tr'
        ); 
}
