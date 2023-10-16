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

    
   
    
    axios
        .post('http://localhost:3000/', postData, {
            withCredentials: true, // Include credentials in the request
        })
        .then((response) => {
            token = response.data.token; // Extract token from the response
            const headers = {
                Authorization: `Bearer ${token}`,
            };
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
        onclick: homePage, //sendLoginRequest,
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


function deleteAndCreateTableToQueryResult(query) {
    
    const queryTable = document.getElementById('table');
    queryTable.removeChild(document.getElementById('table-body'));
    domCreateElement('tbody', { id: 'table-body', className: 'table-body' }).appendToLast(
        'table'
    );

    const tableBody = document.querySelector('#table tbody');
   
        query.data.forEach(item => {
        const row = tableBody.insertRow(); // Insert a new row to the table body
    
        // Add cells (columns) to the row
        const cell1 = row.insertCell(); // Create a new cell for column 1
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();
        const cell4 = row.insertCell();
        const cell5 = row.insertCell();
      // Create a new cell for column 2
    
        // Populate cell data with the corresponding values from the data object
        cell1.textContent = item.id;
        cell2.textContent = item.title;
        cell3.textContent = item.assignee;
        cell4.textContent = item.done;
        const button = document.createElement('input');
        button.type = 'button'; 
        button.value = 'Sil';
        button.id = 'sil';
        cell5.appendChild( button);

        const button2 = document.createElement('input');
        button2.type = 'button'; 
        button2.value = 'Edit';
        button2.id = 'edit';
        cell5.appendChild(button2); 

        const button3 = document.createElement('input');
        button3.type = 'button'; 
        button3.value = `Mark as ${!item.done}`;
        button3.id = 'mark';
        cell5.appendChild(button3); 
     
      });
}


async function filter () {
    const query = await axios.get(`http://localhost:3000/api/v1/tasks?filter=${document.getElementById('select-done').value}`);
  
    deleteAndCreateTableToQueryResult(query);
}


async function addTask(){
    const postData = {
        assignee: 'value',
        title: document.getElementById('title-text').value,
        done: document.getElementById('done-check').checked
      };
     console.log(document.getElementById('done-check').checked);
    
    axios.post('http://localhost:3000/api/v1/task/insert', postData).then((query) => {
        filter();
    });
    
}


async function homePage() {

    const tableData = await axios.get('http://localhost:3000/api/v1/tasks/');
    // console.log(tableData);
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
        href: '/css/home.css',
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
    domCreateElement('tbody', { id: 'table-body', className: 'table-body' }).appendToLast(
        'table'
    );
   
    deleteAndCreateTableToQueryResult(tableData);

    domCreateElement('div', {className: 'input-container'}).appendToLast('first-container');
    domCreateElement('div', {className: 'inputForm', id: 'inputForm'}).appendToLast('input-container');
    domCreateElement('input', {type: 'checkbox', id: 'done-check', name:'done'}).appendToLast('inputForm');
    domCreateElement('input', {type: 'text', id: 'title-text', name:'title'}).appendToLast('inputForm');
    domCreateElement('input', {type: 'submit', id: 'submit', value:'Submit', onclick: addTask}).appendToLast('inputForm');
    

    domCreateElement('div', {className: 'second-container'}).appendToLast('body');
    domCreateElement('div', {className: 'filter'}).appendToLast('second-container');
    domCreateElement('div', {className: 'form'}).appendToLast('filter');
    domCreateElement('select', {className: 'select-done', id: 'select-done'}).appendToLast('form');
    domCreateElement('option', {value: 'all', selected: true, textContent: 'All'}).appendToLast('select-done');
    domCreateElement('option', {value: 'true', textContent: 'true'}).appendToLast('select-done');
    domCreateElement('option', {value: 'false', textContent: 'false'}).appendToLast('select-done');
    domCreateElement('input', {type: 'submit', name: 'filter', id: 'filter', value: 'filter', onclick: filter}).appendToLast('form');
    
 
    
}
