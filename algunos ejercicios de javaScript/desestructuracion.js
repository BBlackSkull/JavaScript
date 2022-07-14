//sintaxis de desestructuracion
const usuario = {
    juanCarlos: {
        edad: 29,
        correo: "juanCarlos@comoestas.com"
    }
};
const {juanCarlos:{edad: edadDelUsuario, correo: correoDelUsuario}} = usuario;
console.log(edadDelUsuario);
console.log(correoDelUsuario);

const PRONOSTICO_LOCAL = {
     "ayer": {
         minima: 5,
         maixma: 12
     },
     "hoy": {
         minima: 3,
         maxima: 11
     },
     "mañana": {
         minima: 4,
         maxima: 10
     },
};

// const minimoHoy = PRONOSTICO_LOCAL.hoy.minima;
// const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

// console.log(minimoHoy, maximaHoy);
const{hoy: {minima: minimaHoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy);


var a;
var b;
var c;
[a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a);
console.log(b);
console.log(c); 
// c tiene valor de 5 [a, b,,, c] cada coma es un lugar en el arreglo

var d = 8;
var e = 3;

[e, d] = [d, e];
console.log("d: " + d);
console.log("e: " + e);
//

const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];
function removerPrimerosTresElementos(arr) {
    const [ , , , ...nuevoArreglo] = arr;
    return nuevoArreglo;
}
const arregloFinal = removerPrimerosTresElementos(arregloInicial);
console.log(arregloFinal);
//remove los primeros 3 elementos del array 

var nuevoPerfilCliente = {
    nombre: "Jane Doe",
    edad : 24,
    nacionalidad: "Uruguaya",
    ubicacion: "Uruguay"
};
const actualizarPerfil = (nombre, edad, nacionalidad, ubicacion) => {
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
};
actualizarPerfil(nuevoPerfilCliente);
//
const ESTADISTICAS = {
    max: 80.5,
    desviacionEstandar: 4.3,
    mediana: 34.5,
    moda: 23.7,
    min: 0.7,
    promedio: 35.85
};
const mitad =({max, min}) => (max + min) / 2.0;
console.log (mitad(ESTADISTICAS));
//extraer datos para manejarlos aislados
