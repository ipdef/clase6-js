/**
 * Crear un contenedor y un parrafo dinamicamente
 * Cambiar diferentes propiedades
 */

let fullName = prompt('Ingrese nombre y apellido');
let bgColor = prompt('Ingrese el color del background');
let fontColor = prompt('Ingrese el color de la letra');
let fontSize = prompt('Ingrese el tamaño de la letra');

let box = document.getElementById('box');

let paragraph = document.createElement('p');
paragraph.textContent = fullName;
paragraph.style.color = fontColor;
paragraph.style.fontSize = fontSize + 'px';
paragraph.style.textAlign = 'center';

box.style.backgroundColor = bgColor;

box.appendChild(paragraph);

