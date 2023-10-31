window.addEventListener('load', function(){
    const formulario = document.querySelector("#formulario")
    const usuario = document.querySelector("#user")
    const passwd = document.querySelector("#passwd")
    const newPasswd = document.querySelector("#newpasswd")
    const fechaNcimiento = document.querySelector('#fechaNac')
    const condiciones = document.querySelector("#condiciones")

    formulario.addEventListener("submit", evento => {
        evento.preventDefault()
        evento.stopPropagation()
        let valido = true
        
        if(!validaUser(usuario)){
            valido = false
        }
        if(!validaPasswd(passwd)){
            valido = false
        }
        if(!validarPasswd2(newPasswd, passwd)){
            valido = false
        }
        if(!validarFechaNac(fechaNcimiento)){
            valido = false
        }
        if(!validaChec(condiciones)){
            valido = false
        }
        if(valido){
            formulario.submit()
        }
    })

    function validaUser(p){
        if(!p.value){
            marcaError(p, "No has introducido usuario")
            return false
        } else {
            marcarValido(p)
            return true
        }
    }

    function validaPasswd(p){
        if(p.value.length < 7){
            marcaError(p, "La contraseña debe tener mas de 7 caracteres")
            return false
        } else {
            marcarValido(p)
            return true
        }
    }

    function validarPasswd2(p1, p2){
        if(p1.value !== p2.value){
            marcaError(p1, "Las contraseñas no coinciden")
            return false
        } else {
            marcarValido(p1)
            return true
        }
    }

    function validarFechaNac(p) {
        if(p.value){
            marcarValido(p)
            return true
        } else {
            marcaError(p, "Error en la fecha")
            return false
        }
    }

    function validaChec(p){
        if(p.checked){
            marcarValido(p)
            return true
        } else {
            marcaError(p, "Acepta los terminos")
            return false
        }
    }

    function marcaError(p, mensaje){
        p.parentNode.querySelector(".error-feedback").textContent=mensaje
        p.parentNode.classList.add("error")
    }

    function marcarValido(el){
        el.parentNode.querySelector(".error-feedback").textContent=""
        el.parentNode.classList.remove("error")
    }

})