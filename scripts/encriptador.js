//~ VARIABLES
const letra_e = 'enter';
const letra_i = 'imes';
const letra_a = 'ai';
const letra_o = 'ober';
const letra_u = 'ufat';

//~ EXPRESIONES
const expresion_a = new RegExp('ai');
const expresion_e = new RegExp('enter');
const expresion_i = new RegExp('imes');
const expresion_o = new RegExp('ober');
const expresion_u = new RegExp('ufat');


//~ FUNCIONES PARA LOS BOTONES
function encriptar(){
    let textoIngresado = document.querySelector('.textoIngresado').value;
    let textoFinal = '';

    //^ Eliminando los acentos y otros caracteres que no sean del abecedario, y luego los convierte en minuscula
    let textoProcesado = textoIngresado.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, '');
    
    for (let i = 0; i < textoProcesado.length; i++) {
        if(textoProcesado[i] == 'e'){
            textoFinal += letra_e;
            continue;
        }

        if(textoProcesado[i] == 'i'){
            textoFinal += letra_i;
            continue;
        }

        if(textoProcesado[i] == 'a'){
            textoFinal += letra_a;
            continue;
        }

        if(textoProcesado[i] == 'o'){
            textoFinal += letra_o;
            continue;
        }

        if(textoProcesado[i] == 'u'){
            textoFinal += letra_u;
            continue;
        }

        textoFinal += textoProcesado[i]
    }

    document.querySelector('#textoEncriptado').style.visibility = 'visible';
    document.querySelector('#textoEncriptado').textContent = textoFinal;
}

function desencriptar(){
    let textoIngresado = document.querySelector('.textoIngresado').value;
    
    //& Desencriptando la frase u oracion
    let textoFinal = textoIngresado
        .replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    document.querySelector('#textoEncriptado').style.visibility = 'visible';
    document.querySelector('#textoEncriptado').textContent = textoFinal;
}

function copiar(){
    let textoCapturado = document.querySelector('#textoEncriptado').textContent;
    console.log('textoCapturado', textoCapturado);
    document.querySelector('.textoIngresado').value = textoCapturado;
}


//~ CAPTURAR CLICK DE LOS BOTONES
document.querySelector('.btnEncriptar').addEventListener('click', function(e){
    encriptar();
});

document.querySelector('.btnDesencriptar').addEventListener('click', function(e){
    desencriptar();
});

document.querySelector('.btnCopiar').addEventListener('click', function(e){
    copiar();
});
