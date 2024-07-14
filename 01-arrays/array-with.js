
const state = [
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

//Acción que queremos usar para modificar el 'state':
const index = 1;
const newName = 'Green Lantern';

//Queremos cambiar el nombre de Superman a Green lantern:
// const newState = state.map( (hero, i) => {

//     if ( i === index ) {
//         hero.name = newName;
//     }

//     return {...hero};
// });

const newState = state.copyWithin(index, {
    ...state.at(index),
    name: newName
});

state[0].name = 'Volcan Negro';

console.table(newState);

console.log('El último: ', state.at(0));