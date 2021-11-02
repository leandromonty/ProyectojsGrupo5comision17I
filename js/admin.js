import { Producto } from "./classProductos.js";
import { validarCodigo, validarRequerido, validarURL, validarGeneral } from "./validaciones.js";

let codigo = document.getElementById('inputCodigo')
let nombre = document.getElementById('inputNombre')
let descripcion = document.getElementById('inputDescripcion')
let url = document.getElementById('inputUrl')
let btnNuevoP = document.getElementById('btnNuevoP');
let formulario = document.getElementById('formProducto')
let Lproductos = [];
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
    if (validarRequerido(codigo) && validarCodigo(codigo) && validarRequerido(nombre) && validarRequerido(descripcion) && validarURL(url)) {
     
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
    
    Lproductos.push(productoNuevo);
   
    localStorage.setItem("arregloProductos", JSON.stringify(Lproductos));
   
    limpiarForm();
   
    Swal.fire(
      "Producto Agregado!",
      "Su producto fue correctamente cargado",
      "success"
    );
   
}

function cargaInicial() {
    Lproductos = JSON.parse(localStorage.getItem("arregloProductos")) || [];
  
    Lproductos.forEach((item) => {
  
      crearFilas(item);
    });
  }
  
  function crearFilas(item) {
    let tabla = document.getElementById("tablaProductos");
    tabla.innerHTML += `<tr>
      <th scope="row">${item.codigo}</th>
      <td>${item.nombre}</td>
      <td>${item.descripcion}</td>
      <td>${item.url}</td>
      <td>
        <button class="btn btn-outline-primary mt-2" onclick="editarFila('${item.codigo}')" >Editar</button>
        <button class="btn btn-danger mt-2" onclick="eliminarProducto('${item.codigo}')">Borrar</button>
      </td>
    </tr>`;
  
    limpiarForm();
  }

  window.editarFila = function editarFila(codigoP){
    let productoB = Lproductos.find((item)=>{
      return item.codigo == codigoP
    });
    codigo.value = productoB.codigo;
    nombre.value = productoB.nombre;
    descripcion.value = productoB.descripcion;
    url.value = productoB.url;

    productoExistente = true;

    Swal.fire(
      "Producto cargado!",
      "Su producto esta listo para editar, puede cambie lo que desee",
      "warning"
    );
  }

  function borrarValueInput() {
    let tabla = document.getElementById("tablaProductos");
    tabla.innerHTML = "";
  }

  function guardarEdicion() {
    let posProducto = Lproductos.findIndex((item) => {
      return item.codigo == codigo.value;
    });
    Lproductos[posProducto].nombre = nombre.value;
    Lproductos[posProducto].descripcion = descripcion.value;
    Lproductos[posProducto].url = url.value;
    localStorage.setItem("arregloProductos", JSON.stringify(Lproductos));
    borrarValueInput();
    Lproductos.forEach((item) => {
      crearFilas(item);
    });
    Swal.fire(
      "Producto Editado!",
      "Su producto fue correctamente editado",
      "success"
    );
  }

  window.eliminarProducto = function eliminarProducto(codigo) {
    Swal.fire({
      title: "Esta seguro?",
      text: "Este cambio no puede ser revertido!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrarlo!",
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        let pFiltrado = Lproductos.filter((item) => {
          return item.codigo != codigo;
        });
       
        Lproductos = pFiltrado;
       
        localStorage.setItem("arregloProductos", JSON.stringify(Lproductos));
       
        borrarValueInput();
      
        Lproductos.forEach((item) => {
          return crearFilas(item);
        });
        Swal.fire("Borrado!", "Tu archivo fue eliminado.", "success");
      }
    });
  };
