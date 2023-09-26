function esParONo(num) {
    // Condicional: si la funcion (Not a Number) es cierta, se ejecuta el codigo,
    // indicando que no se ha introducido un numero.
    // De lo contrario se ejecuta el else el cual ejecuta otro condicional,
    // verificando si es par o impar.
    if (isNaN(num) || num == null || num === '' || num.includes(" ")) {
        // Mensaje al usuario de que el caracter introducido no es un numero, esta vacio es nulo
        console.log("El parametro introducido incorrecto.");
        return ("El parametro introducido incorrecto.");
    } else {
        // Condicional: sí el resto del numero introducido es 0, entonces es par, de lo contratrio no lo es
        if (num % 2 == 0) {
            console.log("Es numero par");
            return ("Es numero par");
        } else {
            console.log("No numero par");
            return ("No es numero par");
        }
    }
}
// Pedimos que se introduzca un numero por pantalla.
const num = prompt("Introduzca un número: ");

// (OPCIONAL) Declarando variables para imprimir en el documento HTML
let resultado = esParONo(num);
resultadoElement = document.getElementById("resultado");
resultadoElement.innerText = resultado;


