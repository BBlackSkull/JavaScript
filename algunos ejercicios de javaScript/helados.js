dineroCofla = prompt("Cuanto dinero tiene Cofla?");
// dineroRoberto = prompt("Cuanto dinero tiene Roberto?");
// dineroPedro = prompt("Cuanto dinero tiene Pedro?");
dineroCofla = parseInt(dineroCofla);
if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("comprate el helado de agua");
    alert("y te sobran "+ (dineroCofla - 1));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("comprate el helado de crema");
    alert("y te sobran "+ (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("comprate el helado de 1/4 kg");
    alert("y te sobran "+ (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("comprate el helado de 1/2 kg");
    alert("y te sobran "+ (ineroCofla - 1.8));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("comprate el helado de 1kg");
    alert("y te sobran "+ (dineroCofla - 1));
}
else if (dineroCofla >= 2.9) {
    alert("Helado 1kg + confites o baño de chocolate")
    alert("y te sobran "+ (dineroCofla - 2.9));
} else {
    alert("Lo siente no te alcanza para ninguno")
}