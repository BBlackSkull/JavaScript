// const crearPersona = (nombre, edad, idioma) => {

//     return {
//         nombre: nombre,
//         edad: edad,
//         idioma: idioma
//     };
// };
const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma}); //funcion flecha

console.log(crearPersona("Gino Smith", 28, "Español"));