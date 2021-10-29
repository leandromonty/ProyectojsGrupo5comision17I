export class Usuario {
    constructor(Nombre,DirecEmail,Contrasenna,Rol){
        this.nombre = Nombre
        this.Email = DirecEmail
        this.contrasenna = Contrasenna
        this.rol = Rol
    }
    get mostrarNombre(){
        return this.nombre;
    }
    set cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre
    }
    get mostrarEmail(){
        return this.email;
    }
    set cambiarEmail(nuevoEmail){
        this.email = nuevoEmail
    }
    get mostrarContrasenna(){
        return this.contrasenna;
    }
    set cambiarContrasenna(nuevaContrasenna){
        this.contrasenna = nuevaContrasenna
    }

}

