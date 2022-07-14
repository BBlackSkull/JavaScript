let free = false;

const validarCliente = (time)=> {
    let edad = prompt ("cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
           alert ("podes pasar gratis!");
           free = true 
        } else {
            alert("podes pasar, pero tenes que pagar")
        }
    }else {
        alert("sos menor no podes")
    }
}