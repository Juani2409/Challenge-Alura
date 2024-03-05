const textArea = document.querySelector('.text-area');
let vistaSinMensaje = document.getElementById("sinMensaje");
let mensajeEncriptado = document.getElementById("msj-encriptado");
let revelarTexto = document.getElementById("texto-revelado");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    revelarTexto.textContent = textoEncriptado; // Mostrar texto encriptado en el elemento correspondiente
    textArea.value = ""; // Limpiar área de texto
    cambiarAside(); // Cambiar a la sección con el texto encriptado
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", 'enter'], ["i", 'imes'], ["a", 'ai'], ["o", 'ober'], ["u", 'ufat']];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptado;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    revelarTexto.textContent = textoEncriptado; // Mostrar texto desencriptado en el elemento correspondiente
    textArea.value = ""; // Limpiar área de texto
    cambiarAside(); // Cambiar a la sección con el texto encriptado
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", 'enter'], ["i", 'imes'], ["a", 'ai'], ["o", 'ober'], ["u", 'ufat']];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptado;
}

function cambiarAside() {
    vistaSinMensaje.style.display = "none";
    mensajeEncriptado.style.display = "block";
}

const copiarMsjEncriptado = async () => {
    //.textContent para obtener el contenido de texto dentro de ese elemento
    let textoEncriptado = document.getElementById("texto-revelado").innerHTML;
    try {
      // Intentar copiar el texto al portapapeles utilizando la API del portapapeles
      await navigator.clipboard.writeText(textoEncriptado);
      console.log("Contenido copiado al portapapeles");
    } catch (error) {
      console.error("Error al copiar: ", error);
    }
  };