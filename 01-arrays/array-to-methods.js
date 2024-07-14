const heroes = [
    'Superman',
    'Flash',
    'Aquaman',
    'Batman'
];
// heroes.sort();
// const heroesCopy = heroes;


// const deletedHero = heroes.splice(0, 1, 'Green Lantern');
//Comienza en la posición 0, elimina el de la posición 1 y en su lugar
//añade Green Lantern. 
//Splice: héroes que se están eliminando. Arreglo original se modificó
const deletedHero = heroes.toSpliced(0, 1, 'Green Lantern');
//To Splice: no modifica nuestro arreglo. Retorna cómo queda nuestro arreglo



// heroes.sort();//modificamos tanto el original como la copia


// const sortedHeroes = heroes.toSorted();
//Permite copiar el original, aplicando una modificación


// heroes.reverse();
// const reversedHeroes = heroes.toReversed();


console.table(heroes);
console.table(deletedHero);
// console.table(heroesCopy);
// console.table(sortedHeroes);
// console.table(reversedHeroes);