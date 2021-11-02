import { Producto } from "./classProductos.js";
import { validarCodigo, validarRequerido, validarURL, validarGeneral } from "./validaciones.js";

let codigo = document.getElementById('inputCodigo')
let nombre = document.getElementById('inputNombre')
let descripcion = document.getElementById('inputDescripcion')
let url = document.getElementById('inputUrl')
let btnNuevoP = document.getElementById("botonNuevoP");
let ListaProductos = [];
let productoExistente = false;

codigo.addEventListener('blur',()=>{validarCodigo(codigo)})
nombre.addEventListener('blur', ()=>{validarRequerido(nombre)})
descripcion.addEventListener('blur', ()=>{validarRequerido(descripcion)})
url.addEventListener('blur',()=>{validarURL(url)})
btnNuevoP.addEventListener("click", limpiarForm); 
formulario.addEventListener("submit", guardarProducto);

cargaInicial()

function guardarProducto(e) {
    e.preventDefault()

    if (validarGeneral()) {
     
      if (productoExistente === false) {
       
        agregarProducto();
      } else {
     
        guardarEdicion();
      }
    } else {
        
    }
}

function limpiarForm() {
    codigo.className = "form-control";
    nombre.className = "form-control";
    descripcion.className = "form-control";
    cantidad.className = "form-control";
    url.className = "form-control";
    formulario.reset();
    productoExistente = false;
}




function agregarProducto() {
    let productoNuevo = new Producto(
      codigo.value,
      nombre.value,
      descripcion.value,
      url.value
    );
    
    ListaProductos.push(productoNuevo);
   
    localStorage.setItem("arregloProductos", JSON.stringify(ListaProductos));
   
    limpiarFormulario();
   
    Swal.fire(
      "Producto Agregado!",
      "Su producto fue correctamente cargado",
      "success"
    );
   
}

function cargaInicial() {
    ListaProductos = JSON.parse(localStorage.getItem("arregloProductos")) || [];
  
    ListaProductos.forEach((item) => {
  
      crearFilas(item);
    });
  }
  
  function crearFilas(item) {
      // crear la tabla
    let tabla = document.getElementById("tablaProductos");
    tabla.innerHTML += `<tr>
      <th scope="row">${item.codigo}</th>
      <td>${item.nombre}</td>
      <td>${item.descripcion}</td>
      <td>${item.url}</td>
      <td>
        <button class="btn btn-outline-primary" onclick="editarFila('${item.codigo}')" >Editar</button>
        <button class="btn btn-danger mt-2" onclick="eliminarProducto('${item.codigo}')">Borrar</button>
      </td>
    </tr>`;
  
    limpiarForm();
  }
