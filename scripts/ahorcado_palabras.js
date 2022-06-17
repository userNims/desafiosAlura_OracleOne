let botonGuardar = document.querySelector('.btnGuardar');
let palabras = [
    'amo',
    'bus',
    'ave',
    'pez',
    'rata',
    'rima',
    'lago',
    'caja',
    'abeja',
    'leche',
    'bolsa',
    'pecera',
    'alfajor',
    'celular',
    'abreviar',
    'abrazado',
    'acertijo'
];

botonGuardar.addEventListener('click', function(e) {
    let palabraGuardar = document.querySelector('.textoIngresado').value;
    palabras.push(palabraGuardar);
    console.log(palabras);
})
console.log(palabras);