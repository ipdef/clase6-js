/**
 * Empezamos con la manipulación delDOM 
 * desde JS
 */


//Usemos el método getElementById para obtener 
//título H1

const title = document.getElementById('titulo');

//Cambiamos algunas propiedades del estilo
title.style.backgroundColor = 'red';
title.style.textAlign = 'center';
title.style.color = 'white';

//Otro ejemplo
const divColors = document.getElementsByClassName('color');
const color = ['red','green','blue'];

for (let i = 0; i < divColors.length; i++) {
    const element = divColors[i];
    element.style.height = '100px';
    element.style.backgroundColor = color[i];
}
