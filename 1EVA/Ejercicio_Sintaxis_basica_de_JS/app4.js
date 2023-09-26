let correoElectronico=prompt("Ingrese un correo electronico :");
if(correoElectronico==''){
    console.log("No se ha introducido ningun correo");
    resultado="No se ha introducido ningun correo";
}else{
    console.log(correoElectronico.split('@')[0].trim());
    resultado=correoElectronico.split('@')[0].trim();
}
resultadoElement = document.getElementById("resultado");
resultadoElement.innerText = resultado;
