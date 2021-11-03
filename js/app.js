let Lproducto = []

cargaInicial()

function cargaInicial () {
    Lproducto = JSON.parse(localStorage.getItem("arregloProductos")) || []
    if(Lproducto.length > 0){
        Lproducto.forEach(itemProducto => {
            crearColumna(itemProducto)
            
        });
    }
}

function crearColumna(producto){
let catalogo = document.querySelector('#catalogo')
catalogo.innerHTML += ` <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
<div class="card" >
  <img src="${producto.url}" class="card-img-top" alt="${producto.nombre}">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.descripcion}</p>
  </div>
</div>
</div>`;

}