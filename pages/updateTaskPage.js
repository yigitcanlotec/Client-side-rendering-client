async function updateTaskPage(id, title, assignee, done, token) {
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
    domCreateElement('input', { type: 'text', id: 'id', value: id }).appendToLast(
        'text-container'
    );
    domCreateElement('input', { type: 'text', id: 'title', value: title }).appendToLast(
        'text-container'
    );
    domCreateElement('input', { type: 'text', id: 'assignee', value: assignee, disabled: true }).appendToLast(
        'text-container'
    );
    domCreateElement('select', { className: 'done', id: 'done', name: done }).appendToLast(
        'text-container'
    );
    domCreateElement('option', { id: `${done}`, value: done, selected: done, innerText: done }).appendToLast(
        'done'
    );
    domCreateElement('option', { id: `${!done}`, value: !done, selected: !done, innerText: !done }).appendToLast(
        'done'
    );

    domCreateElement('div', { className: 'button-container' }).appendToLast(
        'main-container'
    );
    domCreateElement('input', { type: 'button', id: 'edit-submit', value: 'Edit' }).appendToLast(
        'button-container'
    );
    domCreateElement('input', { type: 'button', id: 'back', value: 'Back' }).appendToLast('button-container');

    document.getElementById('edit-submit').addEventListener('click', () => {
        const newTitle = document.getElementById('title').value;
        const taskCompleted = document.getElementById('done').value;
        console.log(id, newTitle, taskCompleted);
        axios.post(serverURL + `/api/task/${id}/update`, { 'title': newTitle, 'done': taskCompleted, 'id': id, 'assignee': assignee })
            .then(() => homePage(token, assignee))
            .catch((err) => console.error(err));
    });

    document.getElementById('back').addEventListener('click', () => homePage(token));
}