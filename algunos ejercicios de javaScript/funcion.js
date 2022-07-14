function saludar() {
    respuesta = prompt("Hola como esta tu dia ?");
    if (respuesta == "bien") {
        alert("me alegro")
    }   else {
        alert ("jodete")
    }
}
saludar()
saludar()

function clasificarValor (valor) {
    if (valor < 5) {
        console.log("menor que 5");
    } else if (valor < 10){
        console.log ("menor que 10");
    } else {
        console.log("mayor o igual a 10,");
    }
}

clasificarValor();