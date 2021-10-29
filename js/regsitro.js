import{ Usuario } from "./classUsuario"
import{ validarCampoRequerido, validarContrasenna, validarEmail, validarGeneral } from "./validacionRegistroYlogin"

let nombre = document.getElementById('nombreRegistro')
let email = document.getElementById('nombreRegistro')
let contrasenna = document.getElementById('contrasennaRegistro')
let formulario = document.getElementById('formRegistro')
let usuarioOnline = false
listaUsuarios = [];

nombre.addEventListener('blur', () => {validarCampoRequerido()})
contrasenna.addEventListener('blur', () => {validarContrasenna()})
email.addEventListener('blur', () => {validarEmail()})
formulario.addEventListener('submit', guardarUsuario)


function guardarUsuario(e){
    e.preventDefault();
    if(validarGeneral()){
        agregarUsuario()
    }else{
        
    }
}

function agregarUsuario(){
    let nuevoUsuario = new Usuario(
        nombre.value,
        email.value,
        contrasenna.value,
        rol.value
    );
    listaUsuarios.push(nuevoUsuario);
    localStorage.setItem("arregloUsuarios", JSON.stringify(listaUsuarios))
    limpiarRegistro();
    Swal.fire(
        "Usuario creado",
        "success"
      );
}

function limpiarRegistro(){
    formulario.reset()
    nombre.value = 'form-control'
    email.value = 'form-control'
    contrasena.value = 'form-control'

}