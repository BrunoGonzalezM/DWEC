let NOMBRE = ""; // Se declara una variable NOMBRE y se inicializa con una cadena vacía.
NOMBRE = prompt("Ingrese su nombre: ").trim(); // Se solicita al usuario que ingrese su nombre y se asigna a NOMBRE después de eliminar espacios en blanco al principio y al final.
CURSO = prompt("Ingrese el curso: ").trim(); // Se solicita al usuario que ingrese el curso y se asigna a CURSO después de eliminar espacios en blanco al principio y al final.
LOCALIDAD = prompt("Ingrese su localidad: ").trim();// Se solicita al usuario que ingrese su localidad y se asigna a LOCALIDAD después de eliminar espacios en blanco al principio y al final.
FECHA_INICIO = prompt("Ingrese fecha de inicio: ").trim(); // Se solicita al usuario que ingrese la fecha de inicio y se asigna a FECHA_INICIO después de eliminar espacios en blanco al principio y al final.
FECHA_FIN = prompt("Ingrese fecha de fin: ").trim(); // Se solicita al usuario que ingrese la fecha de fin y se asigna a FECHA_FIN después de eliminar espacios en blanco al principio y al final.

// Se crea un enunciado utilizando las variables ingresadas por el usuario.
let enunciado = ` Estimado ${NOMBRE}, \n\n Bienvenido al curso de ${CURSO} que se celebrará en la localidad de ${LOCALIDAD} entre \n las fechas ${FECHA_INICIO} y ${FECHA_FIN}. Espero que el curso se desarrolle según sus\n expectativas. Estaremos encantados de atenderle\n\n Atentamente,\n La dirección.`
console.log(enunciado); // Se imprime en la consola el enunciado.
let resultado = enunciado; // Se asigna el enunciado a la variable resultado.
resultadoElement = document.getElementById("resultado"); // Se obtiene el elemento HTML con el ID "resultado".
resultadoElement.innerText = resultado; // Se establece el contenido de texto del elemento HTML como el enunciado.
