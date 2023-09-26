/* Funciones anonimas */
let funccion=function(parametro){
    return parametro+":)";
}
console.log(funccion("Hola"));

/*CALLBACK*/
function getIdentificacion(numero,letra,callback){
    let identificacion=callback(numero,letra);
    return identificacion;
}

let formatoNIF=function(numero,letra){
    return numero+"-"+letra;
}

let formatoNIE=function(numero,letra){
    return letra+"-"+numero;
}   

console.log(getIdentificacion("12345","A",formatoNIE));

//Imprimir por pantalla el valor de resultElement en el Html
let resultElement = document.getElementById("resultado");
resultElement.innerText = getIdentificacion("12345","A",formatoNIE);

/* FORMA MAS UTILIZADA DE CALLBACK */
function getIdentificacion2(numero,letra,callback){
    let identificacion=callback(numero,letra);
}

getIdentificacion2("54321","B",function(numero,letra){
    console.log(numero+"-"+letra);
    return numero+"-"+letra;
});

/* Funciones autoinvocadas */
(function(numero,letra){
    console.log(numero+"-"+letra);
})("09876","C");


