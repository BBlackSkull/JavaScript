function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1:
    respuesta = "alpha";
        break;
        case 2:
    respuesta = "beta";
        break;
        case 3:
    respuesta = "gamma";
        break;
        case 4:
    respuesta = "delta";
    }
    return respuesta;
}
console.log(clasificarValor( ));

function seleccionarIdioma(valor) {
    var idioma;
    switch(valor){
        case 1:
            idioma = "Español";
                break;
        case 2:
            idioma = "Frances";
                break;
        case 3: 
            idioma = "Italiano";
                break;
        default:
            idioma = "Ingles";
                break;

    }
    return idioma;
}
document.write(seleccionarIdioma(1));