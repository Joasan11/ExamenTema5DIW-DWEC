/**
 * @author Joaquín Sánchez Miravalles (Studient)
 * @github
 */

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const radio = document.querySelector("radio");
const radio2 = document.querySelector("radio2");
const info = document.getElementById("info");
const mensaje = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");
const error = document.querySelector("#error");

let mensajesError = [];

const validar = (evento) => {
    evento.preventDefault();
    mensajesError = [];

    // Nombre como campo obligatorio
    nombre.value.trim().length === 0 && mensajesError.push("El nombre es un campo obligatorio");

    // Nombre con caracteres válidos
    !/^[A-Z]+[a-z0-9]*$/.test(nombre.value.trim()) && mensajesError.push("Error en el nombre");

    // Correo electronico válido
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && mensajesError.push("Error en el correo electrónico");

    // No hay ninguna opcion seleccionada en los radio button
    /*let radios = document.querySelector(!'radio:checked');
    if(!radio){
        mensajesError.push("Es obligatorio selecionar un radioButton")
    }
    else{

    }*/

    // Evitar mensajes cortos
    mensaje.value.trim().length < 10 && mensajesError.push("Error en el mensaje");

    if (mensajesError.length === 0 && confirm("¿Estás seguro de enviar el formulario?")) {
        formulario.submit();
    } else if (mensajesError.length > 0) {
        error.textContent = "";
        console.log(mensajesError);
        mensajesError.forEach(function (mensaje) {
            const miLi = document.createElement("li");
            miLi.textContent = mensaje;
            error.appendChild(miLi);
        })
    }
}

function mostrarSelecionado(){
    if(document.getElementById("radio").checked){
        alert("Has selecionado el primer radio button");
    }
    if(document.getElementById("radio2").checked){
        alert("Has selecionado el segundo radio button");
    }
}

formulario.addEventListener("info", mostrarSelecionado);
formulario.addEventListener("submit", validar);