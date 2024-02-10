// Muestra un mensaje de bienvenida cuando la página se carga
alert('¡BIENVENIDO A MI PRIMER CHALLENGE!');

// Selecciona los elementos de entrada y salida de texto
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

// Desencripta el texto de entrada al cargar la página
decryptInputText();

// Función para desencriptar el texto de entrada
function decryptInputText() {
    outputText.value = decryptText(inputText.value.trim());
}

// Función para desencriptar el texto
function decryptText(text) {
    const replacements = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return text.replace(/(enter|imes|ai|ober|ufat)/g, match => replacements[match]);
}

// Función para encriptar el texto
function encryptText(text) {
    const replacements = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return text.replace(/[eioua]/g, match => replacements[match]);
}

// Agrega un event listener para convertir el texto de entrada a minúsculas y eliminar acentos
inputText.addEventListener('input', () => {
    inputText.value = inputText.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); /* Convierte el texto a minúsculas y elimina acentos */
    inputText.value = inputText.value.replace(/[^a-z]/g, ''); /* Elimina caracteres que no sean letras minúsculas */
});

// Agrega un event listener para encriptar el texto al hacer clic en el botón "Encriptar"
document.getElementById('encryptBtn').addEventListener('click', () => {
    outputText.value = encryptText(inputText.value.trim());
});

// Agrega un event listener para desencriptar el texto al hacer clic en el botón "Desencriptar"
document.getElementById('decryptBtn').addEventListener('click', () => {
    outputText.value = decryptText(inputText.value.trim());
});

// Agrega un event listener para copiar el texto de salida al portapapeles al hacer clic en el botón "Copiar Texto"
document.getElementById('copyBtn').addEventListener('click', () => {
    if (outputText.value.trim() === "") {
        alert('¡Ups! Ningún texto que copiar.');
        return;
    }
    outputText.select();
    document.execCommand('copy');
    alert('¡Texto copiado con éxito!');
    inputText.value = '';
});

// Agrega un event listener para borrar el texto de salida al hacer clic en el botón "Borrar Texto"
document.getElementById('clearBtn').addEventListener('click', () => {
    outputText.value = '';
});
