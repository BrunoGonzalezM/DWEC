const alert = document.querySelector(".alert-info");
const objeto = new Object();
objeto.nombrePropiedad;
//objeto.nombreFuncion([parrametros]);

let fechaActual=new Date();
let fechaFinCurso=new Date(2024,4,30); //año mes dia (yyyy-MM-dd)

console.log(`La fecha actual es ${fechaActual}`);
console.log(`El curso acaba en ${fechaFinCurso}`);

let tiempoRestante=fechaFinCurso-fechaActual;
console.log(`El curso acaba dentro de ${tiempoRestante} en milisegundos.`); //en milisegundos

console.log(fechaActual.toString()); //Thu Sep 28 2023 17:09:27 GMT+0200 (hora de verano de Europa central)
console.log(fechaActual.toTimeString()); //17:09:27 GMT+0200 (hora de verano de Europa central)
console.log(fechaActual.toDateString()); //Thu Sep 28 2023

console.log(fechaActual.toLocaleString()); //28/9/2023, 17:10:41
console.log(fechaActual.toLocaleTimeString()); //17:11:21
console.log(fechaActual.toLocaleDateString()); //28/9/2023


console.log(fechaActual.toLocaleDateString("es-Es",{weekday:'long',year:'numeric',month:'long',day:'numeric'})); //jueves, 28 de septiembre de 2023 

const fechaActualLegible=fechaActual.toLocaleDateString("es-Es",{weekday:'long',year:'numeric',month:'long',day:'numeric'});

alert.innerHTML="<strong>HOY ES: </strong>"+fechaActualLegible; //EN DOCUMENTO: HOY ES: jueves, 28 de septiembre de 2023

