function contarNumeros (arreglo) {
    var total = 0;

    for (var i = 0; i < arreglo.length; i++){
        if (arreglo[i] % 2 == 0){
            total++;
        }
    }
    return total;
}
console.log(contarNumeros([4, 5, 7, 9, 2]));