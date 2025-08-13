// 1. Declarar un array para almacenar los nombres de los amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let amigoInput = document.getElementById('amigo');
    let nombre = amigoInput.value.trim(); // .trim() elimina espacios en blanco al inicio y final

    // Validar la entrada: si el campo está vacío, mostrar una alerta
    if (nombre === '') {
        alert('Por favor, ingrese un nombre.');
        return; // Detiene la ejecución de la función si el campo está vacío
    }

    // Actualizar el array de amigos: añadir el nombre al arreglo
    amigos.push(nombre);

    // Limpiar el campo de entrada
    amigoInput.value = '';

    // Llamar a la función para actualizar la lista en la interfaz
    actualizarListaDeAmigos();
}

// 3. Función para actualizar la lista de amigos en la página
function actualizarListaDeAmigos() {
    // Obtener el elemento de la lista HTML
    let listaAmigosHTML = document.getElementById('listaAmigos');

    // Limpiar la lista existente para evitar duplicados
    listaAmigosHTML.innerHTML = '';

    // Iterar sobre el array de amigos y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i]; // Asignar el nombre como texto del <li>
        listaAmigosHTML.appendChild(li); // Agregar el <li> a la lista
    }
}

// 4. Función para sortear a un amigo
function sortearAmigo() {
    // Validar que haya al menos dos amigos para el sorteo
    if (amigos.length < 2) {
        alert('Se necesitan al menos dos amigos para sortear.');
        return;
    }

    // Generar un índice aleatorio
    // Math.random() genera un número decimal entre 0 y 1
    // amigos.length obtiene el número total de amigos
    // Math.floor() redondea hacia abajo al número entero más cercano
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado usando el índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

    // Obtener el elemento HTML para mostrar el resultado
    let resultadoHTML = document.getElementById('resultado');

    // Mostrar el resultado en la página
    resultadoHTML.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}