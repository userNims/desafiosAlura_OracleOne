console.log(palabras);

//& canvas y variables de uso
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let estado = 0;


//& Palabra aleatoria
let indiceAleatorio = Math.floor(Math.random() * palabras.length);
let palabraAleatoria = palabras[indiceAleatorio];
let palabraAleatoriaFinal = '';

for (let index = 0; index < palabraAleatoria.length; index++) {
    palabraAleatoriaFinal += palabraAleatoria[index] + ' ';
}
console.log(palabraAleatoriaFinal.length / 2);
console.log(palabraAleatoriaFinal);


//& Palabra en pantalla y guiones
let palabraPantalla = [];
let guiones = '';

for (let index = 0; index < (palabraAleatoria.length)* 2; index++) {
    palabraPantalla.push('&nbsp;');
}

for (let index = 0; index < (palabraAleatoria.length)* 2; index++) {
    if(index % 2 == 0) {
        guiones += ' ';
    } else {
        guiones += '_';
    }
}


//& Funciones
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

function mostrarPorPantalla(palabra){
    document.querySelector('.palabraAdivinada').innerHTML = palabra;
}

function mostrarPorPantallaFallido(palabra){
    document.querySelector('.palabraEquivocada').textContent = palabra;
}

function dibujarAhorcado(){
    //? Base line
    if(estado == 0){
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.moveTo(0, 300);
        ctx.lineTo(300, 300);
        ctx.stroke();
        estado = 1;
        return estado;
    }

    //? Post 1 line
    if(estado == 1){
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.moveTo(100, 300);
        ctx.lineTo(100, 7);
        ctx.stroke();
        estado = 2;
        return estado;
    }

    //? Post 2 line
    if(estado == 2){
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.moveTo(100, 10);
        ctx.lineTo(220, 10);
        ctx.moveTo(220, 7);
        ctx.lineTo(220, 50);
        ctx.stroke();
        estado = 3;
        return estado;
    }

    //? Head
    if(estado == 3){
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.arc(220, 75, 25, 0, 2 * Math.PI);
        ctx.stroke();
        estado = 4;
        return estado;
    }

    //? Body
    if(estado == 4){
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.moveTo(220, 100);
        ctx.lineTo(220, 220);
        ctx.stroke();
        estado = 5;
        return estado;
    }

    //? Arms
    if(estado == 5){
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.moveTo(220, 100);
        ctx.lineTo(200, 160);
        ctx.moveTo(220, 100);
        ctx.lineTo(240, 160);
        ctx.stroke();
        estado = 6;
        return estado;
    }

    //? Legs
    if(estado == 6){
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.moveTo(220, 220);
        ctx.lineTo(200, 280);
        ctx.moveTo(220, 220);
        ctx.lineTo(240, 280);
        ctx.stroke();
        estado = 7;
        return estado;
    }

}

//& Mostrando palabra y guiones en pantalla
// document.querySelector('.palabraAdivinada').textContent = palabraPantalla;
document.querySelector('.subrayado').textContent = guiones;


//& Capturar texto ingresado
let campoPalabra = document.querySelector('.palabraAdivinada');
let caracteresFallidos = '';
let caracteresUsados = '';

document.addEventListener('keyup', function(e) {
    let caracter = e.key.toLowerCase();
    
    if(estado != 7 
        && !parseInt(caracter) 
        && caracteresUsados.length != palabraAleatoriaFinal.length / 2){
        //? Capturar caracter correcto
        for (let index = 0; index < palabraAleatoriaFinal.length; index++) {
            if(palabraAleatoriaFinal[index] == caracter) {
                caracteresUsados += caracter;
                palabraPantalla[index] = caracter.toUpperCase();
                palabraAleatoriaFinal = palabraAleatoriaFinal.replace(caracter, ' ');

                // palabraPantalla = setCharAt(palabraPantalla, index, caracter);
                mostrarPorPantalla(palabraPantalla.join(""));
                break;
            }
        }

        for (let index = 0; index < palabraAleatoriaFinal.length; index++) {
            if (!caracteresFallidos.includes(caracter) &&  !caracteresUsados.includes(caracter)){
                caracteresFallidos += caracter + ' ';
                dibujarAhorcado();
                mostrarPorPantallaFallido(caracteresFallidos.toUpperCase());
                if(estado == 7){
                    setTimeout(function(){
                        alert("Perdiste :(");
                    }, 100)
                }
                break;
            }
        }

        if(caracteresUsados.length == palabraAleatoriaFinal.length / 2){
            setTimeout(function(){
                alert('Ganaste!!!')
            }, 100)
        }
        console.log(palabraAleatoriaFinal);
        console.log("caracteresFallidos ", caracteresFallidos);
        console.log('caracteresUsados ', caracteresUsados);
    } else if (estado == 7){
        alert("Perdiste");
    }
    // console.log(palabraPantalla);
})