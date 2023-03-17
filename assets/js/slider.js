//*  selecciono todos los elementos del documento que tienen la clase "testimony_body" y los almacena en un array para poder manipularlos
const sliders = [...document.querySelectorAll('.testimony_body')];

//* selecciono las las imagenes de flechas
const buttonNext = document.querySelector('#after');
const buttonBefore = document.querySelector('#before');

//* cuando haga click en la flecha que cambie de posicion y avanve 1 slider 
buttonNext.addEventListener('click', () => {
    changePosition(1);
});

//* lo mismo pero que retroceda
buttonBefore.addEventListener('click', () => {
    changePosition(-1);
});

//* una funcion que tiene como parametro "add" que es llamada en los eventos click de arriba.
const changePosition = (add) => {

    /*    La variable value se define y actualiza en una sola línea, utilizando el operador de suma para agregar el valor de add al número actual.
        La eliminación de la clase testimony_body--show se realiza utilizando un ciclo forEach en lugar de seleccionar el índice del array y eliminar la clase individualmente.*/

    const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
    let value = Number(currentTestimony) + add;

    if (value < 1) {
        value = sliders.length;
    } else if (value > sliders.length) {
        value = 1;
    }

    sliders.forEach(slider => slider.classList.remove('testimony_body--show'));
    sliders[value - 1].classList.add('testimony_body--show');
}