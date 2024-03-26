console.log(document.title);

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const pokimon = document.getElementById('gen-1')
pokimon.innerHTML = "Generasión 1 Pokimon";

console.log('ejercicio 1', pokimon);


// const pokimon = document.querySelectorAll("h2");
/* for (let i = 0; i < pokimon.length; i++) {
    if (pokimon[i].innerHTML === 'Generation 1 Pokémon') {
        pokimon[i].innerHTML = 'Generasión 1 Pokimon'
    }
} */


// Cambia el color de fondo de la primera generación de Pokimon.

const cambiarColor = document.getElementsByClassName('infocard-list infocard-list-pkmn-lg');
let colorinxi = cambiarColor[0];
colorinxi.style.background = 'blue';
console.log('ejercicio 2', colorinxi);


// Imprime por consola la URL de la página.

let miUrl = document.URL;
console.log(miUrl)


// Imprime por consola el dominio de la página.

let miDominio = document.domain;
console.log(miDominio);

// Imprime todos los nodos de imagen.

const allImg = document.querySelectorAll('img');
console.log(allImg);


// Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

function cambiarImagenes() {
    for (let i = 0; i < allImg.length; i++) {
        allImg[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif'
    }
}

cambiarImagenes(allImg);


// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

const infoCard = document.getElementsByClassName('infocard-lg-data text-muted');
const pokeType = document.getElementsByClassName('itype flying');

if (infoCard && pokeType) {
    
}