let resultado = " ";
let num = prompt("Ingrese un numero: ").trim();
if (num === null || num === '') {
    console.warn("No ingreso un numero");
    resultado = "No ingreso un numero";
} else if (isNaN(num) || parseInt(num) < 0) {
    console.warn("No es un numero valido.");
    resultado = "No es un numero valido.";
} else {
    num = num.trim();
    const ul = document.createElement('ul');
    for (let i = 0; i <= 10; i++) {
        const multiplicacion = num * i;
        console.log(num + " * " + i + " = " + multiplicacion);

        const li = document.createElement('li');
        li.textContent = num + " * " + i + " = " + multiplicacion;
        ul.appendChild(li);
    }
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = '';
    resultadoElement.appendChild(ul);
}