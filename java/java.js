function validarFormulario() {

    if (document.formulario.nombre.value.length < 3) {
        alert ("Por favor escriba su nombre");
        document.formulario.nombre.focus();
        return;
    }

let edad = document.formulario.edad.value;

edad = validarEntero(edad);
document.formulario.edad.value = edad;

if (edad == "") {
    alert("Indique su edad en números");
    document.formulario.edad.focus();
    return;
}

if (document.formulario.pregunta.selectedIndex == 0) {
    alert("Seleccione una respuesta para ¿Cómo nos conociste?");
    document.formulario.pregunta.focus();
    }
}

function validarEntero(valor) {
        valor = parseInt(valor);

    if (isNaN(valor)) {
        return "";
    } else {
        return valor;
    }
}

