export class Producto{
    constructor(codigo,nombre,descripcion,url){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.url = url
    }
    get mostrarCodigo(){
        return this.codigo;
    }
    set modificarCodigo(newCodigo){
        this.codigo = newCodigo
    }
    get mostrarNombre(){
        return this.nombre;
    }
    set modificarNombre(newNombre){
        this.nombre = newNombre
    }
    get mostrarDescripcion(){
        return this.descripcion;
    }
    set modificarDescripcion(newDescripcion){
        this.descripcion = newDescripcion
    }
    get mostrarUrl(){
        return this.url;
    }
    set modificarUrl(newUrl){
        this.url = newUrl
    }
}