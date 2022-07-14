var conteo = 0;
function contarCartas(carta){
    var decision;
    switch(carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break;
        case 10:
        case "J":
        case "Q":
        case "k":
        case "A":
            conteo--;
            break;
    }
    if (conteo > 0) {
        decision ="Apostar";
    }else {
        decision = "Esperar";
    }
    return conteo + " " + decision;

}

document.write(contarCartas(2));
document.write(contarCartas(3));
document.write(contarCartas(7));
document.write(contarCartas("K"));
document.write(contarCartas("A"));