//Seleccion de nodos:
//document.getElementById
let parWithId = document.getElementById('parWithId');
parWithId.style.textTransform = 'uppercase';


//document.getElementsByTagName
let paragraph = document.getElementsByTagName('p');
for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = '#ff4f4f';
}


//documnt.getElementsByClassName
let parWithClass = document.getElementsByClassName('parWithClass');
for (let i = 0; i < parWithClass.length; i++) {
    parWithClass[i].style.textDecoration = 'underline';
}


//document.querySelector()
let parQuery = document.querySelector('p #parSpan');
parQuery.style.backgroundColor = '#5a5ada';
parQuery.style.color = '#fff';


//element.attributes
let imgWithAtt = document.getElementsById('imgWithAtt');
console.log("-attributes de un elemento: ");
console.log(imgWithAtt.attributes);


//element.className vs element.classList
//console.log ambos tipos inicial
console.log("-className y classList del mismo elemento: ");
console.log(imgWithAtt.className);
console.log(imgWithAtt.classList);


//Asignado nueva clase con classname, borra el resto de las clases
imgWithAtt.className = 'newClass';
console.log("-className y classList tras agregar nueva clase: ");
//Se puede escribir: "imgWithAtt.className += 'newClass';" para que 

console.log(imgWithAtt.className);
console.log(imgWithAtt.classList);

//Agregando una clase con classList
imgWithAtt.classList.add('gray');
imgWithAtt.classList.add('img');
console.log("-classList tras agregar nuevos elementos: ");
console.log(imgWithAtt.classList);

//Eliminando una clase con classList
imgWithAtt.classList.remove('newClass');
console.log("-classList tras eliminar un elemento: ");
console.log(imgWithAtt.classList);

//element.id
//ver id
let oldId = document.getElementById('oldId');
console.log("-Id del elemento: ");
console.log(oldId.id);

//cambiar id
console.log("-Nuevo Id del elemento: ");
oldId.id = "newId";
console.log(oldId.id);


//element.value
//ver value
let inputValue = document.getElementById('inputValue');
console.log("-Value del input: ");
console.log(inputValue.value);


//cambiar value
console.log("-Nuevo value del input: ");
inputValue.value = 'Nuevo valor del input';
console.log(inputValue.value);


//element.name
//ver name
console.log("-Name del input: ");
console.log(inputValue.name);

//cambiar name
console.log("-Nuevo Name del input: ");
inputValue.name = 'newInputName';
console.log(inputValue.name);

let elementList = document.getElementById('elementList');
//element.firstElementChild
console.log("-Primer elemento de la lista: ");
console.log(elementList.firstElementChild);
elementList.firstElementChild.innerHTML = 'Primer elemento';

//element.innerHTML y element.outerHTML
let titleWithSpan = document.getElementById('titleWithSpan');

console.log("-Outer HTML de un elemento: ");
console.log(titleWithSpan.outerHTML);
console.log("-Inner HTML de un elemento: ");
console.log(titleWithSpan.innerHTML);

titleWithSpan.outerHTML = "<h4 id=titleWithSpan'>Título con un <span>span</span> adentro</h3>"

let titleSpan = document.getElementById('titleWithSpan');
console.log("-Inner HTML del elemento span: ");
console.log(titleSpan.innerHTML);
titleSpan.innerHTML = "span (modificado con innerHTML)";


//element.tagName
console.log("-Tag name del elemento span: ");
console.log(titleSpan.tagName);


//element.setAttribute(name, value)
let imgToChangeAtt = document.getElementById('imgToChangeAtt');
imgToChangeAtt.setAttribute('src','https://dummyimage.com/200x120/5a5a5a/aaa');
imgToChangeAtt.setAttribute('alet','Placeholder image modificada');


//element.animate(keyframes, options)
document.getElementById("animation").animate([
    {transform: 'translatex(0px)'},
    {transform: 'translatex(300px)'},
    {transform: 'translatex(0px)'}
], {
    duration: 5000,
    iterations: Infinity
});

//document.createElement(tagName)
let  firstP = document.createElement('p');
firstP.textContent = 'Primer Párrafo: creado e insertado desde el scrpt';


//element.appendChild()
let firstP = document.getElementById('nodeCtn');
nodeCtn.appendChild(firstP);

//element.before()
let secondP = document.createElement('p');
secondP.textContent = 'Segundo Párrafo: creado e insertado BEFORE';
firstP.before(secondP);

//element.after()
let thirdP=document.createElement('p');
thirdP.textContent='Tercer Párrafo: creado e insertado AFTER';
firstP.after(thirdP);

//element.insertBefore(),
let fourthP = document.getElementById('liToRemove');
liToRemove.remove();
nodeCtn.insertBefore(fourthP, secondP);


//element.remove()
let liToRemove = document.getElementById('liToRemove');
liToRemove.remove();

//element.replaceWith(nuevoNodo)
let newLi = document.createElement('li');
newLi.textContent='Nuevo li, reemplazando a item2 con replaceWith';

let liToReplace = document.getElementById('liToReplace');
liToReplace.replaceWith(newLi);


//element.replaceChild
let newLi2 = document.createElement('li');
newLi2.textContent='Nuevo li, reemplazando a item4 con replaceWith';

let list = document.getElementById('list');
let liToReplace2 = document.getElementById('liToReplace2');
list.replaceChild(newLi2, liToReplace2);


//localStorage
//setItem, getItem y removeItem
localStorage.setItem('nombre','Harry');
localStorage.removeItem('nombre');
localStorage.setItem('nombreEntero','Harry Potter');
console.log('El nombre alojado en el localstorage es: ' + localStorage.getItem('nombreEntero'));

//sessionStorage
//setItem, getItem y removeItem
sessionStorage.setItem('nombre', 'Hermione');
sessionStorage.removeItem('nombre');
sessionStorage.setItem('nombreEntero','Hermione Jean Granger');
console.log('El nombre alojado en el sessionStorage es: ' + sessionStorage.getItem('nombreEntero'));

//borrar lo setItem y ver las diferencias entre lo que quedo guardado 