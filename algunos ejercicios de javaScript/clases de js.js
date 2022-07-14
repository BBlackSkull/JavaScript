class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;
    }
}
var zeus = new TransbordadorEspacial ("Jupiter");
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial ("Marte");
console.log(apolo.planeta)
//
class Mascota {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
var miMascota = new Mascota ("Horus", 10);
console.log(miMascota.nombre);
console.log(miMascota.edad);
//
class Libro {
    constructor(autor) {
        this._autor = autor;
    }
    get autor() {
        return this._autor;
    }
    set autor (nuevoAutor) {
        this._autor = nuevoAutor;
    }
}
const libro = new Libro("anonimo");
console.log(libro.autor);
//modificando valores con get y set
