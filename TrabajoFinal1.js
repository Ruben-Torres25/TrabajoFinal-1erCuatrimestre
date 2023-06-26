const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const nacimiento = document.getElementById("nacimiento");
const email = document.getElementById("email");
const localidad = document.getElementById("localidad");
const dni = document.getElementById("dni");
const sexo = document.getElementById("sexo");
const contacto = document.getElementById("contacto");

function enviar() {
    console.log("datos enviados");

    console.log("nombre: ", nombre.value);
    console.log("correo: ", correo.value);
    console.log("nacimiento: ", nacimiento.value);
    console.log("email: ", email.value);
    console.log("localidad: ", localidad.value);
    console.log("DNI: ", dni.value);
    console.log("sexo: ", sexo.value);
    console.log("contacto: ", contacto.value);

}
