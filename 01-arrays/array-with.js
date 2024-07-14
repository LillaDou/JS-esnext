
const superHeroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    }
];

// const superHeroesCopy = [...superHeroes];
//El operador Spread viene bien si sabemos que los cambios que se harán
//serán primitivos los detalles dentro del arreglo. 

const superHeroesCopy = structuredClone(superHeroes);
//Con este, podemos hacer el cambio a la copia del array original, sin 
//alterar el superHeroes


superHeroesCopy[0].name = 'Green Lantern';

console.table( superHeroes );
console.table( superHeroesCopy );