document.addEventListener('DOMContentLoaded', function () {
    //descomentar la siguiente linea para que se muestre automaticamente los datos de usuarios
    //obtenerUsers();
});

//funcion para obtener todos los usuarios y mostrarlos en la tabla
function obtenerUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => pintaUsuarios(data));
}

//pintamos los usuarios en la tabla 
function pintaUsuarios(listausers) {
    let contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = '';

    let table = document.createElement('table');
    table.classList.add('table');

    let thead = document.createElement('thead');
    let filas = thead.insertRow();
    let cabeceras = ['ID', 'Nombre', 'Nombre Completo', 'Email', 'Posts'];
    cabeceras.forEach(function (header) {
        let th = document.createElement('th');
        th.textContent = header;
        filas.appendChild(th);
    });
    thead.appendChild(filas);
    table.appendChild(thead);

    let tbody = document.createElement('tbody');
    listausers.forEach(function (user) {
        let row = tbody.insertRow();
        row.insertCell().innerHTML = `<b>${user.id}</b>`;
        let nombreCelda = row.insertCell();

        let enlace = document.createElement('a');
        enlace.href = '#';
        enlace.textContent = user.name;
        enlace.dataset.userId = user.id;
        enlace.addEventListener('click', function () {
            pintaUsuario(user.id);
        });
        
        nombreCelda.appendChild(enlace);
        row.insertCell().textContent = user.username;
        row.insertCell().textContent = user.email;
        let postCelda = row.insertCell();
        
        let postEnlace = document.createElement('a');
        postEnlace.href = '#';
        postEnlace.textContent = 'Mostrar Posts';
        postEnlace.dataset.userId = user.id;
        postEnlace.addEventListener('click', function () {
            obtenerPosts(user.id);
        });
        postCelda.appendChild(postEnlace);
    });
    table.appendChild(tbody);

    contentArea.appendChild(table);
}

//pintamos el usuario 
function pintaUsuario(id) {
    //vaciamos el contenido del area de detalles que creamos
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => {
            let contentArea = document.getElementById('contentArea');
            contentArea.innerHTML = '';

            let userDetails = document.createElement('div');
            userDetails.innerHTML = `
                    <h2>Detalles del Usuario</h2>
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Nombre:</strong> ${user.name}</p>
                    <p><strong>Nombre de Usuario:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><a href="#" onclick="obtenerPosts(${user.id})">Mostrar Posts</a></p>`;
            contentArea.appendChild(userDetails);
        })
        .catch(error => console.error('error al obtener detalles del usuario: ', error)); 
}

//obtenemos los post del usuario al que le dimos click y pintamos su lista en la ventana de detalle
function obtenerPosts(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => pintaPosts(posts))
        .catch(error => console.error('error al obtener posts del usuario :', error));
}

//pintamos los posts de los usuarios
function pintaPosts(posts) {
    let contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = '';

    let postArea = document.createElement('div');
    postArea.innerHTML = '<h2>Posts</h2>';

    posts.forEach(post => {
        let postContenido = document.createElement('div');
        postContenido.classList.add('card', 'mb-3');
        postContenido.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                    <p class="card-text"><a href="#" onclick="pintaUsuario(${post.userId})">Usuario: ${post.userId}</a></p>
                </div>`;
        postArea.appendChild(postContenido);
    });
    contentArea.appendChild(postArea);
}

//obtenemos todos los posts al darle click y lo mostramos
function mostrarTodosPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => pintaPosts(posts))
        .catch(error => console.error('error al obtener todos los posts: ', error));
}
