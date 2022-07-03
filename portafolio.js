function verificar_nombre(name){
    if (name == '' || name.length > 50){
        return false; // nombre inválido
    }

    return true; // nombre válido
}

function verificar_email(em, exp){
    // verificiación del @
    if(!exp.test(em)) {
        return false; // falta @
    }
    
    // verificación del dominio
    let largo = em.length; 
    for(let i=0; i < largo; i++){
        if(em[i] == "." && i == largo-1){
            return false;
        } else if (em[i] == "@" && i == largo-1){
            return false;
        } else if(em[i] == ".") {
            return true; // email válido
        }
    }
}

let enviar_form = document.querySelector("#boton-enviar");
let formulario = document.querySelector("#formulario-contacto");

enviar_form.addEventListener("click", function(event){
    event.preventDefault();
    let nombre = formulario.nombre.value;
    let email = formulario.email.value;
    let expresion = new RegExp("@", "g");

    if(!verificar_nombre(nombre)){
        alert("Nombre inválido");
        formulario.nombre.value = "";
    } else if (!verificar_email(email, expresion)){
        alert("Email inválido");
        formulario.email.value = "";
    } else {
        alert("Mensaje enviado");
        formulario.reset();
    }
});
