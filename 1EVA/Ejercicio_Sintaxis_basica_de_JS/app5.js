let resultado = " ";// Crea una variable llamada 'resultado' y la inicializa con un espacio en blanco.
let num = prompt("Ingrese un numero: ").trim();// Solicita al usuario que ingrese un número y lo almacena en 'num', eliminando espacios al inicio y al final.
if (num === null || num === '') { // Comprueba si 'num' es nulo o está vacío.
    console.warn("No ingreso un numero");  // Muestra un mensaje de advertencia si el usuario no ingresó un número.
    resultado = "No ingreso un numero";// Asigna un mensaje a 'resultado' indicando que el usuario no ingresó un número.
} else if (isNaN(num) || parseInt(num) < 0) {// Comprueba si 'num' no es un número o es un número negativo.
    console.warn("No es un numero valido.");// Muestra un mensaje de advertencia si 'num' no es un número válido.
    resultado = "No es un numero valido.";// Asigna un mensaje a 'resultado' indicando que el número ingresado no es válido.
} else {
    num = num.trim();// Elimina espacios al inicio y al final del número.
    const ul = document.createElement('ul');// Crea un elemento de lista desordenada.
    for (let i = 0; i <= 10; i++) { // Bucle que itera de 0 a 10.
        const multiplicacion = num * i;// Calcula la multiplicación del número ingresado por 'i'.
        console.log(num + " * " + i + " = " + multiplicacion);// Muestra la multiplicación en la consola.

        const li = document.createElement('li');// Crea un elemento de lista.
        li.textContent = num + " * " + i + " = " + multiplicacion;// Asigna el texto de la multiplicación al elemento de lista.
        ul.appendChild(li); // Agrega el elemento de lista a la lista desordenada.
    }
    const resultadoElement = document.getElementById("resultado");// Obtiene el elemento con el ID "resultado".
    resultadoElement.innerText = '';// Borra el contenido actual del elemento.
    resultadoElement.appendChild(ul);// Agrega la lista desordenada al elemento con ID "resultado".
}