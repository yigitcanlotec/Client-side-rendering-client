const serverURL = 'http://localhost:3000'


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

function sendLoginRequest() {
    
    
  
    if (localStorage.getItem('token')){
        homePage(localStorage.getItem('token'));
    } else {
        const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    // Create a Base64 encoded string of the form "username:password"
    const base64Credentials = btoa(`${username}:${password}`);
    
    axios.get('http://localhost:3000/api/v1/login',  {
        headers: {
          'Authorization': `Basic ${base64Credentials}`
        }
      }).then((token) => {
        // If request is successful, then server sends the token.
        localStorage.setItem('token', token.data);
        homePage(token.data);
        // console
      }).catch((error) => console.error(error));

    }
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

    if (localStorage.getItem('token')){
        return homePage(localStorage.getItem('token'));  
    }

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
        onclick: homePage, //BURDA DA SORUN VAR!!!!!!!!!!!!!!!!!
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
        id: "login-button", //sendLoginRequest,
    }).appendToLast('input-container');

    document.getElementById('login-button').addEventListener(('click'), sendLoginRequest );

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
        const deleteButton = document.createElement('input');
        deleteButton.type = 'button'; 
        deleteButton.value = 'Sil';
        deleteButton.id = 'sil';
        deleteButton.addEventListener('click', () => {
            deleteTask(item.id);
        });
        cell5.appendChild(deleteButton);

        const editButton = document.createElement('input');
        editButton.type = 'button'; 
        editButton.value = 'Edit';
        editButton.id = 'edit';
        editButton.addEventListener('click', () => {
            updateTask(item.id, item.title, item.assignee, item.done);
            
        });
        cell5.appendChild(editButton); 

        const markButton = document.createElement('input');
        markButton.type = 'button'; 
        markButton.value = `Mark as ${!item.done}`;
        markButton.id = 'mark';
        cell5.appendChild(markButton); 
     
      });
}


async function filter (token, value) {
    const query = await axios.get(`http://localhost:3000/api/v1/tasks?filter=${value}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
  
     deleteAndCreateTableToQueryResult(query);
}


async function addTask(title, done, token){
    const postData = {
        assignee: 'value',
        title: title, // document.getElementById('title-text').value,
        done: done // document.getElementById('done-check').checked
      };
     console.log(document.getElementById('done-check').checked);
    
    axios.post('http://localhost:3000/api/v1/tasks/insert', postData).then((query) => {
        filter(token);
    });
    
}

async function deleteTask(id){

    await axios.delete(`http://localhost:3000/api/v1/task/${id}/delete`).then(() => {
        console.log(`${id} deleted`);
        filter();
    }).catch((err) => {
        console.error(err);
    });
}


async function updateTask(id, title, assignee, done){
    const oldBodyElement = document.body;
    const parentElement = oldBodyElement.parentElement;
    parentElement.removeChild(oldBodyElement);
    const body = document.createElement('body');
    parentElement.appendChild(body);

    domCreateElement('link', {
        rel: 'stylesheet',
        href: '/css/updateUserInfo.css',
    }).appendToLast('body');

    domCreateElement('div', { className: 'container' }).appendToLast(
        'body'
    );

    domCreateElement('div', { className: 'main-container' }).appendToLast(
        'container'
    );
    domCreateElement('div', { className: 'text-container' }).appendToLast(
        'main-container'
    );
    domCreateElement('input', {type: 'text',  id: 'id', value: id }).appendToLast(
        'text-container'
    );   
    domCreateElement('input', {type: 'text',  id: 'title', value: title }).appendToLast(
        'text-container'
    );   
    domCreateElement('input', {type: 'text',  id: 'assignee', value: assignee }).appendToLast(
        'text-container'
    );   
    domCreateElement('select', {className: 'done', id: 'done', name: done }).appendToLast(
        'text-container'
    ); 
    domCreateElement('option', {id: `${done}`, value: done, selected: done, innerText:  done }).appendToLast(
        'done'
    );
    domCreateElement('option', {id: `${!done}`, value: !done, selected: !done, innerText: !done }).appendToLast(
        'done'
    );    
    
    domCreateElement('div', { className: 'button-container' }).appendToLast(
        'main-container'
    );
    domCreateElement('input', {type: 'button',  id: 'submit', value: 'Edit' }).appendToLast(
        'button-container'
    );
    domCreateElement('input', {type: 'button', id: 'back', value: 'Back'}).appendToLast('button-container');   

    document.getElementById('submit').addEventListener('click', () =>{ 
        const newTitle = document.getElementById('title').value;
        const taskCompleted = document.getElementById('done').value;
         axios.post(`http://localhost:3000/api/v1/task/${id}/update`, {'title': newTitle , 'done': taskCompleted})
            .then(() => homePage())
            .catch((err) => console.error(err));
    });

    document.getElementById('back').addEventListener('click', () => homePage());

   
}

async function homePage(token) {
   
    
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
    const tableData = await axios.get('http://localhost:3000/api/v1/tasks/',   {
        headers: {
            'Authorization': `Bearer ${token}`
        }
      });
    
    deleteAndCreateTableToQueryResult(tableData);

    domCreateElement('div', {className: 'input-container'}).appendToLast('first-container');
    domCreateElement('div', {className: 'inputForm', id: 'inputForm'}).appendToLast('input-container');
    domCreateElement('input', {type: 'checkbox', id: 'done-check', name:'done'}).appendToLast('inputForm');
    domCreateElement('input', {type: 'text', id: 'title-text', name:'title'}).appendToLast('inputForm');
    domCreateElement('input', {type: 'button', id: 'submit', value:'Submit'}).appendToLast('inputForm');
    document.getElementById('submit').addEventListener('click', () => addTask(document.getElementById('title-text').value, document.getElementById('done-check').checked, token ));

    domCreateElement('div', {className: 'second-container'}).appendToLast('body');
    domCreateElement('div', {className: 'filter'}).appendToLast('second-container');
    domCreateElement('div', {className: 'form'}).appendToLast('filter');
    domCreateElement('select', {className: 'select-done', id: 'select-done'}).appendToLast('form');
    domCreateElement('option', {value: 'all', selected: true, textContent: 'All'}).appendToLast('select-done');
    domCreateElement('option', {value: 'true', textContent: 'true'}).appendToLast('select-done');
    domCreateElement('option', {value: 'false', textContent: 'false'}).appendToLast('select-done');
    const formContainer = document.getElementsByClassName('form')[0];

    const filterButton = document.createElement('button');
    filterButton.value = 'Filter'
    filterButton.id = 'filter-button'
    filterButton.innerText = 'filter'
    formContainer.appendChild(filterButton);

    document.getElementById('filter-button').addEventListener('click', ()=>{
        filter(token, document.getElementById('select-done').value);
    }); 

 
    
}
