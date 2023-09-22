/*OPERACIONES CON CADENAS DE TEXTO*/

//Concatenar texto
let nombre="Pepe";
let apellido="Mosca";
let nombre_completo=nombre+' '+apellido;
console.log(nombre_completo);

//Template literals
let curso='VS2DAW';
nombre_apellido=` Hola + ${nombre} ${apellido} `;
console.log(nombre_apellido);
let saludo =`Hola ${nombre} ${apellido}, bienvenido al curso`;
console.log(saludo);

//Length
console.log(nombre.length);

//.includes(subcadena)
console.log(saludo.includes(`bien55do`));

//.slice(start ,end)
console.log(saludo.slice(10,16));

//.replace("este texto", "por este otro")
console.log(saludo.replace(`Pepe`,`Fernando`));

//.trim 
let cadena='    Hola     mundo    ';
console.log(cadena.trim());