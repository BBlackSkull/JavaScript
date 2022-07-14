var contactos = [
    { 
    "nombre": "Nora",
    "apellido": "Nav",
    "numero": "0543236543",
    "gustos": ["pizza", "programacion"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "0549955632",
        "gustos": ["Hogwarts", "Magia"]   
    },
    {
        "nombre": "Sherlok",
        "apellido": "Holmes",
        "numero": "0526986632",
        "gustos": ["Casos interesantes", "violin"]
    },
];
function buscarPerfil(nombre, propiedad) {
    for( var i = 0; i < contactos.length; i++) {
        if(contactos[i].nombre === nombre) {
            return contactos[i][propiedad] || "la propiedad no existe.";
        }
    }
    return "el contacto no esta en la lista.";
}
console.log(buscarPerfil("nora", "gustos"));