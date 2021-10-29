export function validarCampoRequerido(input){
    if(input.value.trim().length > 0){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
    
}

export function validarEmail(input){
 let patron = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
 if(patron.test(input.value)){
    input.className = 'form-control is-valid';
    return true;
 }else {
    input.className = 'form-control is-invalid';
    return false;
 }
}

export function validarContrasenna(input){
    if(input.length < 6){
        input.className = 'form-control is-invalid';
        return false;
    }else{
        input.className = 'form-control is-valid';
        return true;
    }
    // aca solo valida que tenga por lo menos 6 caracteres

}

export function validarGeneral(){
    // previene q recargue la pagina
    let alerta = document.querySelector('#msjAlerta');
    if(validarCampoRequerido() && validarEmail && validarContrasenna){
        alerta.className = 'alert alert-danger mt-4 d-none';
        return true;
    }else{
        // aca mostrar el alert que pide recargar los datos del html
        alerta.className = 'alert alert-danger mt-4';
        return false;
    }
}