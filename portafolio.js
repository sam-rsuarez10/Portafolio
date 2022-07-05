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

function verificar_asunto(text) {
    if (text == '' || text.length > 50){
        return false; // asunto inválido
    }

    return true; // asunto válido
}

function verificar_mensaje(text){
    if (text == '' || text.length > 300){
        return false; // mensaje inválido
    }

    return true; // mensaje válido
}

function validar_form(array_val ,nombre, email, asunto, mensaje){
    // Inicialización del array de acuerdo al input
    for(let i = 0; i < array_val.length; i++){
        if(i == 0) {
            // validar nombre
            array_val[i] = verificar_nombre(nombre);
        } else if (i == 1) {
            // validar email
            let expresion = new RegExp("@", "g");
            array_val[i] = verificar_email(email, expresion);
        } else if (i == 2) {
            // validar asunto
            array_val[i] = verificar_asunto(asunto);
        } else {
            // validar mensaje
            array_val[i] = verificar_mensaje(mensaje);
        }
    }

    ind_send = true; // variable que indica si todo el form es válido para enviar
    // Despliegues de mensajes de error si es el caso
    for(let i = 0; i < array_val.length; i++){
        let flag = array_val[i];
        if (i == 0 && !flag){
            // nombre inválido
            ind_send = false;
            alert("Nombre inválido");
            formulario.nombre.value = "";
        } else if(i == 1 && !flag) {
            // email inválido
            ind_send = false;
            alert("Email inválido");
            formulario.email.value = "";
        } else if(i == 2 && !flag) {
            // asunto inválido
            ind_send = false;
            alert("Asunto inválido");
            formulario.asunto.value = "";
        } else if(i == 3 && !flag) {
            // mensaje inválido
            ind_send = false;
            alert("Mensaje inválido");
            formulario.mensaje.value = "";
        } else {
            continue;
        }
    }

    if(ind_send) {
        alert("Mensaje enviado");
        formulario.reset();
    }
}

// Main 
let validaciones = [true, true, true, true]; /* [0]: nombre  [1]: email  [2]: asunto [3]: mensaje */
let enviar_form = document.querySelector("#boton-enviar");
let formulario = document.querySelector("#formulario-contacto");

enviar_form.addEventListener("click", function(event){
    event.preventDefault();
    let nombre = formulario.nombre.value;
    let email = formulario.email.value;
    let asunto = formulario.asunto.value;
    let mensaje = formulario.mensaje.value;

    validar_form(validaciones, nombre, email, asunto, mensaje);
});
