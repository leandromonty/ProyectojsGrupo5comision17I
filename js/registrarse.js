import {Usuario} from './classUsuario.js'
import {validarRequerido, validarEmail, validarContrasenna} from './validaciones.js'

let nombre  = document.getElementById('nombreRegistro')
let contrasenna = document.getElementById('contrasennaRegistro')
let email = document.getElementById('emailRegistro')
let formulario = document.getElementById('formularioR');
let ListaUsuarios = [];

nombre.addEventListener('blur', ()=>{validarRequerido(nombre)} )
email.addEventListener('blur', ()=>{validarEmail(email)})
contrasenna.addEventListener('blur', ()=>{validarContrasenna(contrasenna)})
formulario.addEventListener("submit", guardarUsuario);

function guardarUsuario(e){
    e.preventDefault();
    crearUsuario()
    console.log('crea el usuario')
    
}

function crearUsuario(){
    let nuevoUsuario = new Usuario(
        nombre.value,
        contrasenna.value,
        email.value
    )
    ListaUsuarios.push(nuevoUsuario)
    localStorage.setItem('arregloUsuarios',JSON.stringify(ListaUsuarios))
    // limpiarForm();
    // Swal.fire(
    //     "Usuario creado!",
    //     "success"
    //   );
    //   console.log('usuario creado')
}
