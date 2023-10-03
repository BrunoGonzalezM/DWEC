let cabecera = document.querySelector(".cabecera_titulo");
console.log(cabecera); //Texto1

document.querySelector(".contenido").remove(); //Borra el elemento

//console.log(document.querySelectorAll("p").item(2).outerText);
let parrafos = document.querySelectorAll("p");
console.log(parrafos.item(0).outerText);
//let matches=document.querySelectorAll("div.hightlighted>p")
//let matches=document.querySelectorAll("div.nota, div.alerta");

let localizacion=document.location;
console.log(localizacion); //Location

let titulo=document.title;
console.log(titulo); //Titulo de la pagina

let valor=document.querySelector("#pie").innerText; //cuando buscamos un id se busca con '#' 
console.log(valor);  //Texto del elemento

let valor2=document.querySelector("#pie").innerHTML;
console.log(valor2); //Toda la etiqueta

let valor3=document.querySelector("#miboton").value;
console.log(valor3);    