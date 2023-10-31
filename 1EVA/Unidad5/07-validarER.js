window.addEventListener("DOMContentLoaded", function(){
    const email = document.querySelector("#email")
    const formulario = document.querySelector("#formulario")
    const cp = document.querySelector("#cp")

    formulario.addEventListener('submit', function(evento){
        evento.preventDefault()
        evento.stopPropagation()

        let valido = true
        if(!validaEmail(email)){
            valido = false
        }

        if(!validaCP(cp)){
            valido = false
        }

        if(valido){
            this.submit()
        }

        function validaEmail(el){
            const erMail = /^[-\W.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i // --> verificar si es un email
            if(erMail.test(el.value.trim())){
                marcarValido(el)
                return true
            } else {
                marcarError(el, "El email no tiene formato válido")
                return false
            }
        }

        function validaCP(el){
            const erCP = /^[0,5][0-9]{4}$/ // --> Un digito del 0 al 5 y 4 digitos del 0 al 9 (Codigo postal)
            const cpvalue = el.value.trim()
            if(cpvalue.match(erCP)){
                marcarValido(el)
                return true
            } else {
                marcarError(el, "El codigo postal no es correcto")
                return false
            }
        }

        function marcarError(p, mensaje){
            p.parentNode.querySelector(".error-feedback").textContent=mensaje
            p.parentNode.classList.add("error")
        }
    
        function marcarValido(el){
            el.parentNode.querySelector(".error-feedback").textContent=""
            el.parentNode.classList.remove("error")
        }
    })
})