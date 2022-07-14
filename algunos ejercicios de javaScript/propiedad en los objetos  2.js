function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "propiedad:" +obj[propiedad];
    } else {
        return "el objeto no tiene esta propiedad.";
    }
}

var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 5.2
};

console.log(verificarPropiedad(miCuaderno, "color"));