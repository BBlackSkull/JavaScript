console.log(parseInt("6.5")); //-> retorna 6 numero, tira los decimales
// y se queda con los enteros
var a = 5;
var b = 7;
console.log(a + b); // al ser string retorna 57, para evitar eso hay que usar parseInt

var a = parseInt("5");
var b = parseInt("7");
// y ahi retorna 12

function compararNumeros (a, b) {
    return a == b ? "a y b son iguales"
        : a > b ? " a es mayor que b"
        : "b es mayor que a;"
}
console.log(compararNumeros(11, 27));