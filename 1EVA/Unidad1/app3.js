//typeof
const num=20;
console.log("El tipo es: "+typeof num);
//NaN
const variable = 4 * "hola";
console.log("El tipo es: "+variable);
//Infinity
const division = 4/0;
console.log(division);
console.log("El tipo es: "+typeof divison);
//isNaN
const numberstring="30";
const string ="20 años";
console.log(isNaN(string));
console.log(isNaN(typeof divison));
console.log(isNaN("12"));
console.log(isNaN(12));
console.log(isNaN(numberstring));
console.log(isNaN(string));
console.log(isNaN(NaN));

//toString
const number = 100;
console.log(number.toString());
console.log(typeof number);
console.log(typeof number.toString());

//toFixed
console.log(number.toFixed(4));

/* 
CASO PRACTICO
Realizar un script que calcule 
cuanto toca pagar a cada persona de una 
cena que cuesta 102€ y asisterion 6 personas
*/
const costoCena = 102;  // Costo total de la cena en euros
const totalPersonas = 6;  // Número total de personas
const montoPorPersona = costoCena / totalPersonas;

console.log('El pago por persona es: ' + montoPorPersona.toFixed(2) + '€');

//Funcion Boolean devuelve verdadero
console.log(Boolean(1));
console.log(Boolean("Cosa"));
console.log(Boolean(3.14));
console.log(Boolean(100>5));
console.log(Boolean('1'==1.00000000000000009));

//Funcion Boolean devuelve falso
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean('1'===1));
console.log(Boolean(undefined));
