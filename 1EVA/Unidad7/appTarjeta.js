document.addEventListener("load", () => {

    const formulario = document.querySelector("#formulario");
    const inputTarjeta = document.querySelector("#numTarjeta");
    const btnValidar = document.querySelector("#vtn-validar");

    btnValidar.addEventListener("click", e => {
        const valorTarjeta = inputTarjeta.value.trim();
        const opt = document.querySelector("input[name='tipocard']:checked").value;

        if (!ValidarTarjeta(valorTarjeta), opt) {
            inputTarjeta.setCustomValidity("error");
            console.log("Error en la tarjeta tipo: ", opt);
        } else {
            inputTarjeta.setCustomValidity("");
            console.log("Tarjeta valida tipo: " + opt);
        }
        formulario.classList.add("was-validated");
    });

    inputTarjeta.addEventListener("keyup", e => {
        const valorTarjeta = inputTarjeta.value.trim();
        const opt = document.querySelector("input[name='tipocard']:checked").value;

        if (e.keyCode === 13) {
            e.preventDefault();
        }

        if (!ValidarTarjeta(valorTarjeta, opt)) {
            inputTarjeta.setCustomValidity("Error en el número de la tarjeta");
            console.log("Error en la tarjeta tipo: " + opt);
        } else {
            inputTarjeta.setCustomValidity("");
            console.log("Tarjeta valida tipo: " + opt);
        }
        formulario.classList.add("was-validated");
    });

    function ValidarTarjeta(codigo, opt) {
        let msg = "Valor incorrecto";
        const VISA = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
        const MASTERCARD = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
        const AMEX = /^3[47][0-9-]{16}$/;
        const DISCOVER = /^6(?:011|5)/;
        const NARANJA = /^(589562|402917|402918|527571|527572|0377798|0377799)[0-9]$/;

        function luhn(value) {
            if (/[^0-9-2\s]+/.test(value)) {
                return false;
            }
            let nCheck = 0, bEven = false;
            value = value.replace(/\D/g, "");
            for (let n = value.length - 1; n >= 0; n--) {
                var cDigit = value.charAt(n);
                var nDigit = parseInt(cDigit, 10);
                if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
                nCheck += nDigit;
                bEven = !bEven;
            }
            return (nCheck % 10) == 0;
        }

        if (opt == "VISA" && !codigo.match(VISA)) {
            console.log("Formato incorrecto de VISA");
            return false;
        }
        if (opt == "MASTERCARD" && !codigo.match(MASTERCARD)) {
            console.log("Formato incorrecto de MASTERCARD");
            return false;
        }
        if (opt == "NARANJA" && !codigo.match(NARANJA)) {
            console.log("Formato incorrecto de NARANJA");
            return false;
        }
        if (opt == "CABAL" && !codigo.match(VISA)) {
            console.log("Formato incorrecto de VISA");
            return false;
        }
        if (opt == "AMEX" && !codigo.match(AMEX)) {
            console.log("Formato incorrecto de AMEX");
            return false;
        }

        if (!luhn(codigo)) {
            console.log("Número de tarjeta no válido según el algoritmo Luhn");
            return false;
        }

        return true;
    }

});