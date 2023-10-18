function generateUUID() {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0];
}


async function addTask(id, title, done, token) {
    const postData = {
        id: id,
        title: title,
        done: done
    };


    axios.post(serverURL + '/api/task/insert', postData, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((query) => {
        filterTasks(token, document.getElementById('select-done').value);
    });

}

async function deleteTask(id, token, assignee) {
    await axios.post(serverURL + `/api/task/${id}/delete`, { assignee: assignee }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(() => {
        filterTasks(token, 'all');
    }).catch((err) => {
        console.error(err);
    });
}


function markAsDoneOrUndoneTask(token, id, done, assignee) {
    if (done) {
        axios.post(serverURL + `api/task/${id}/done`, { id: id, assignee: assignee }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            filter(token, 'all');
        }).catch((err) => {
            console.error(err);
        });
    } else {
        axios.post(serverURL + `/api/task/${id}/undone`, { id: id, assignee: assignee }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            filter(token, 'all');
        }).catch((err) => {
            console.error(err);
        });
    }

}

function sendLoginRequest() {
    if (localStorage.getItem('token')) {
        homePage(localStorage.getItem('token'));
    } else {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const base64Credentials = btoa(`${username}:${password}`);
        axios.get(serverURL + '/api/login', {
            headers: {
                'Authorization': `Basic ${base64Credentials}`
            }
        }).then((token) => {
            localStorage.setItem('token', token.data);
            homePage(token.data);
        }).catch((error) => console.error(error));

    }
}

async function filterTasks(token, value) {
    const query = await axios.get(serverURL + `/api/tasks?filter=${value}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    deleteAndCreateTableToQueryResult(query);
}

async function handleFileSelect(token, id, username) {
    const files = document.getElementById('file-input').files;
    for (const file of files) {
        const postData = {
            fileName: username + '/' + id + '/' + file.name,
            id: id,
            userName: username
        };

        await axios.post(serverURL + '/api/task/insert/image', postData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(async (result) => {
            const presignedUrl = result.data;

            try {
                const response = await axios.put(presignedUrl, file, {
                    headers: {
                        'Content-Type': file.type,
                    },
                });

                if (response.status === 200) {
                    //   console.log('Object uploaded successfully.');
                } else {
                    console.error('Error uploading object:', response.statusText);
                }
            } catch (error) {
                console.error('Error uploading object:', error);
            }

        }).catch((error) => console.log(error));
    }
}

async function getImages(userCredentials, token) {
    const result = await axios.get(serverURL + `/api/${userCredentials.data[0]}/tasks/image`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (result.data) {

        const imgID = Object.keys(result.data).map((element) => element.split('/')[1]);
        // console.log(imgID);
        imgID.forEach((element, index) => {
            domCreateElement('img', { src: Object.values(result.data)[index], width: '50', height: '50' }).appendToLast(element);

        });
    }
}