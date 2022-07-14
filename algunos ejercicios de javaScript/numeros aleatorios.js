function generarEntero(limiteSuperior){
    return Math.floor(Math.random() * limiteSuperior);
}
for (var i = 0; i < 15; i++){
    console.log(generarEntero(5));
} // busca el numero entero entre 0 y 14 (no incluye el 15 por que es menor
// que 15 < no es menor o igual <=)
function rangoAleatoro(limiteInferior, limiteSuperior){
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior +1))+ limiteInferior;
}
for ( var i = 0; i < 15; i++){
    console.log(rangoAleatoro(3, 8));
}