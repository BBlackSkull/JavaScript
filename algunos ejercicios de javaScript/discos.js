function actualizarDisco (discos, id, propiedad, valor) {
    if (valor === "") {
        delete discos [id][propiedad];
    }else if (propiedad === "canciones") {
        discos[id][propiedad] = discos[id][propiedad] || [];
        discod[id][propiedad].push(valor);
    }else {
        discos[id][propiedad] = valor;
    }
}