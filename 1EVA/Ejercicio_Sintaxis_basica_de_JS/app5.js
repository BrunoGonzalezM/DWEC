let resultado = "";
let num = prompt("Ingrese un numero: ").trim();
if (num === null || num === '') {
    console.warn("No ingreso un numero");
    resultado = "No ingreso un numero";
} else if (isNaN(num) || parseInt(num) < 0) {
    console.warn("No es un numero valido.");
    resultado = "No es un numero valido.";
} else {
    num = num.trim();
    for (let i = 0; i <= 10; i++) {
        console.log(num + " * " + i + " = " + num * i);
        resultado += num + " * " + i + " = " + num * i + "\n";
    }
}
resultadoElement = document.getElementById("resultado");
resultadoElement.innerText = resultado;