
// En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. Leyendo su documentación, deberás hacer lo siguiente:

// Imprimir por consola la lista de usuarios.

// Imprimir por consola solo el nombre de los usuarios.

// Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api (todo esto fuera de una función)

// Crea una función que muestre por consola la variable global que habías creado

// Crea un botón que cuando lo cliques ejecute la función que habías creado

// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML)

// Recuerda que para estos ejercicios deberás utilizar Axios.

axios.get('https://jsonplaceholder.typicode.com/posts')

.then(response => {
    console.log('Lista de usuarios:', response.data);
})
.catch(error => {
    console.error('Error al obtener usuarios:', error);
});


axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log('Usernames:');
        response.data.forEach(user => {
            console.log(user.username);
        });
    })
    .catch(error => {
        console.error('Error al obtener los usernames:', error);
    });


let users = [];

    document.addEventListener('DOMContentLoaded', function () {
        const button = document.getElementById('Btnusers');
        const userList = document.getElementById('userList');

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                users = response.data;
                console.log('Lista de usuarios:', users);
            })
            .catch(error => {
                console.error('Error al obtener los usuarios:', error);
            });
    
        function showUsers() {
            // console.log(users);
            userList.innerHTML = '';
    
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name}`;
                userList.appendChild(li);
            });
        }
    
        button.addEventListener('click', showUsers);
    });
    




