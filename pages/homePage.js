async function homePage(token) {
    const oldBodyElement = document.body;
    const parentElement = oldBodyElement.parentElement;
    parentElement.removeChild(oldBodyElement);
    const body = document.createElement('body');
    parentElement.appendChild(body);

    domCreateElement('link', {
        rel: 'stylesheet',
        href: '/css/home.css',
    }).appendToLast('body');

    domCreateElement('script', {
        src: 'https://sdk.amazonaws.com/js/aws-sdk-2.1475.0.min.js'
    }).appendToLast('body');

    const tableData = await axios.get(serverURL + '/api/tasks/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const userCredentials = await axios.get(serverURL + '/api/userInfo/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    domCreateElement('div', { className: 'nav-bar' }).appendToLast(
        'body'
    );
    domCreateElement('input', { type: 'button', id: 'profile', value: tableData.data.username }).appendToLast('nav-bar');



    domCreateElement('input', { type: 'button', id: 'logout', value: 'Log out' }).appendToLast('nav-bar');

    document.getElementById('logout').addEventListener('click', () => {
        localStorage.removeItem('token');
        const oldBodyElement = document.body;
        const parentElement = oldBodyElement.parentElement;
        parentElement.removeChild(oldBodyElement);
        const body = document.createElement('body');
        parentElement.appendChild(body);
        return mainPage();
    });

    document.getElementById('profile').addEventListener('click', () => {
        return profilePage(userCredentials);
    });

    domCreateElement('div', { className: 'first-container' }).appendToLast(
        'body'
    );
    domCreateElement('div', { className: 'top-container' }).appendToLast(
        'first-container'
    );
    domCreateElement('h1', { innerText: 'Challange-3' }).appendToLast(
        'top-container'
    );
    domCreateElement('form', { action: '/home', method: 'POST' }).appendToLast(
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
    getImages(userCredentials, token);
    domCreateElement('div', { className: 'input-container' }).appendToLast('first-container');
    domCreateElement('div', { className: 'inputForm', id: 'inputForm' }).appendToLast('input-container');
    domCreateElement('input', { type: 'file', id: 'file-input', accept: 'image/png, image/jpeg', multiple: true }).appendToLast('inputForm');
    domCreateElement('input', { type: 'checkbox', id: 'done-check', name: 'done' }).appendToLast('inputForm');
    domCreateElement('input', { type: 'text', id: 'title-text', name: 'title' }).appendToLast('inputForm');
    domCreateElement('input', { type: 'button', id: 'insert-task', value: 'Add Task' }).appendToLast('inputForm');


    document.getElementById('insert-task').addEventListener('click', () => {
        const userId = generateUUID();
        addTask(userId, document.getElementById('title-text').value, document.getElementById('done-check').checked, token);
        const fileInput = document.getElementById('file-input');
        if (fileInput.files.length) {
            handleFileSelect(token, userId, userCredentials.data[0]).then((result) => getImages(userCredentials, token));

        }
    });

    domCreateElement('div', { className: 'second-container' }).appendToLast('body');
    domCreateElement('div', { className: 'filter' }).appendToLast('second-container');
    domCreateElement('div', { className: 'form' }).appendToLast('filter');
    domCreateElement('select', { className: 'select-done', id: 'select-done' }).appendToLast('form');
    domCreateElement('option', { value: 'all', selected: true, textContent: 'All' }).appendToLast('select-done');
    domCreateElement('option', { value: 'true', textContent: 'true' }).appendToLast('select-done');
    domCreateElement('option', { value: 'false', textContent: 'false' }).appendToLast('select-done');
    const formContainer = document.getElementsByClassName('form')[0];

    const filterButton = document.createElement('button');
    filterButton.value = 'Filter'
    filterButton.id = 'filter-button'
    filterButton.innerText = 'filter'
    formContainer.appendChild(filterButton);

    document.getElementById('filter-button').addEventListener('click', () => {
        filterTasks(token, document.getElementById('select-done').value);
    });

}