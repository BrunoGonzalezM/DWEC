let correoElectronico=prompt("Ingrese un correo electronico :"); // Pide al usuario que ingrese un correo electrónico y lo almacena en la variable "correoElectronico".
if(correoElectronico==''){// Comprueba si el correo electrónico ingresado está vacío.
    console.log("No se ha introducido ningun correo"); // Imprime un mensaje en la consola si el correo electrónico está vacío.
    resultado="No se ha introducido ningun correo"; // Asigna un mensaje a la variable "resultado".
}else{
    console.log(correoElectronico.split('@')[0].trim());// Si el correo no está vacío, imprime la parte antes del "@" después de quitar espacios en blanco.
    resultado=correoElectronico.split('@')[0].trim();// Asigna la parte antes del "@" después de quitar espacios en blanco a la variable "resultado".
}
resultadoElement = document.getElementById("resultado");// Obtiene el elemento HTML con el id "resultado".
resultadoElement.innerText = resultado;  // Asigna el valor de la variable "resultado" como el texto del elemento HTML con id "resultado".
