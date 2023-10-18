const serverURL = 'http://localhost:3000'
mainPage();




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
            return document
                .getElementsByClassName(parentElement)[0]
                .appendChild(createdElement);
        },
    };
}


function deleteAndCreateTableToQueryResult(query) {
    
    const queryTable = document.getElementById('table');
    queryTable.removeChild(document.getElementById('table-body'));
    domCreateElement('tbody', { id: 'table-body', className: 'table-body' }).appendToLast(
        'table'
    );

    const tableBody = document.querySelector('#table tbody');
   
        query.data.queryData.forEach(async item => {
        const row = tableBody.insertRow(); 
        
      
        const cell1 = row.insertCell(); 
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();
        const cell4 = row.insertCell();
        const cell5 = row.insertCell();
        cell5.id = item.id;
        cell5.className = item.id;
        const cell6 = row.insertCell();
      
        cell1.textContent = item.id;
        cell2.textContent = item.title;
        
        cell3.textContent = item.assignee;
        cell4.textContent = item.done;
        const deleteButton = document.createElement('input');
        deleteButton.type = 'button'; 
        deleteButton.value = 'Sil';
        deleteButton.id = 'sil';
        deleteButton.addEventListener('click', () => {
            deleteTask(item.id, localStorage.getItem('token'), item.assignee);
        });
        cell6.appendChild(deleteButton);

        const editButton = document.createElement('input');
        editButton.type = 'button'; 
        editButton.value = 'Edit';
        editButton.id = 'edit';
        editButton.addEventListener('click', () => {
            updateTaskPage(item.id, item.title, item.assignee, item.done, localStorage.getItem('token'));
            
        });
        cell6.appendChild(editButton); 

        const markButton = document.createElement('input');
        markButton.type = 'button'; 
        markButton.value = `Mark as ${!item.done}`;
        markButton.id = 'mark';
        markButton.addEventListener('click', async () => {
            markAsDoneOrUndoneTask(localStorage.getItem('token'), item.id, !item.done, item.assignee);
        });
        cell6.appendChild(markButton); 
     
      });
}


function mainPage(){
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
}