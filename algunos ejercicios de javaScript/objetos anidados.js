var miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": " 100 grs",
            "sal": "1 cucharada",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 grs"
        }
    }
};
console.log(miReceta.descripcion);
console.log(miReceta.costo);
console.log(miReceta.ingredientes.cobertura.mantequilla);
//los puntos entre nombres son como los / en las url, concatenan la ruta
//notacion de puntos
// sino notacion con corchetes [ingredientes][cobertura][mantequilla]