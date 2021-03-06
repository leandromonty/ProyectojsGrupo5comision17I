export function validarRequerido(input){
    if(input.value.trim().length > 0 && input.value.trim().length >= 3){
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
    let patron = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else {
        input.className = 'form-control is-invalid';
        return false;
    }
}


export function validarCodigo(input) {
    if(input.value.trim() !='' && input.value.trim().length >= 3){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
    
}



export function validarURL(input){
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
    if( input.value.trim() !='' && patron.test(input.value.trim())){
        input.className = 'form-control is-valid'
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}


export function validarGeneral(){
    
    let alerta = document.querySelector('#msjAlerta');
    if(validarCodigo(codigo) && validarRequerido(descripcion) && validarRequerido(nombre) && validarURL(url)){
        alerta.className = 'alert alert-danger mt-4 d-none';
        return true;
    }else{
        alerta.className = 'alert alert-danger mt-4';
        return false;
    }
}