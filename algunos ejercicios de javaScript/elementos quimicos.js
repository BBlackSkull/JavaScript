function buscarEQ(simbolo) {
    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio"
    };
    return simbolosQuimicos[simbolo];
    }
    console.log(buscarEQ("Al"));
    console.log(buscarEQ("S"));
    console.log(buscarEQ("Cl"));
    console.log(buscarEQ("He"));
    console.log(buscarEQ("B"));
    console.log(buscarEQ("Li"));