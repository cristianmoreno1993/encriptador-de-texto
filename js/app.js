/***Funciones***/

/***seleccion de elemntos***/

const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDescriptar = document.querySelector(".boton-descriptar");
const botonCopiar = document.querySelector(".boton-copiar");
const textEncriptar = document.querySelector(".encriptador");
const aviso = document.querySelector(".texto-aviso");
const contenido = document.querySelector(".bloque-2_contenedor");
const mostrarBotonCopiar = document.querySelector(".boton-copiar");
const textoEncriptado = document.querySelector(".text-value");

/*** boton de encriptar***/
botonEncriptar.addEventListener("click", function (evento) {
    evento.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if (texto == "") {
        alert("¡El campo texto no debe estar vacio!");
    } else if (texto !== txt) {
        alert("¡El campo texto debe ser sin acentos!");
        limpiarCaja();
    } else if (texto !== texto.toLowerCase()) {
        alert("El campo texto debe tener letras minúsculas");
        limpiarCaja();
    } else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        textoEncriptado.value = texto;

        contenido.remove();
        mostrarBotonCopiar.style.visibility = "inherit"
    }

    /* Las "llaves" de encriptación que utilizaremos son las siguientes:
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
    */
    console.log(texto);
});

/*** boton de descriptar ***/
botonDescriptar.addEventListener("click", function (evento) {
    evento.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if (texto == "") {
        alert("¡El campo texto no debe estar vacio!");
    } else if (texto !== txt) {
        alert("¡El campo texto debe ser sin acentos!");
        limpiarCaja();
    } else if (texto !== texto.toLowerCase()) {
        alert("El campo texto debe tener letras minúsculas");
        limpiarCaja();
    } else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        textoEncriptado.value = texto;

        contenido.remove();
        mostrarBotonCopiar.style.visibility = "inherit"
    }

    /* Las "llaves" de encriptación que utilizaremos son las siguientes:
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
    */
    console.log(texto);
});

/*** boton copiar ***/
botonCopiar.addEventListener("click", function (evento) {
    evento.preventDefault();
    let txtcopy = textoEncriptado;
    txtcopy.select();
    document.execCommand("copy");

    console.log(txtCopy);

})

function limpiarCaja() {
    let textoCaja = document.querySelector("#caja-encritador");
    textoCaja.value = "";
}




