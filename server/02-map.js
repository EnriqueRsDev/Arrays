const letters = ['a', 'b', 'c', 'd'];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++')
}
console.log(`Original: ${letters}`);
console.log(`Nuevo: ${newArray}`);

//Haciendo el mismo ejemplo con map

const lettersMap = ['a', 'b', 'c', 'd'];

const newMapArray = lettersMap.map(letter => `${letter}++`)

console.log(`Original: ${lettersMap}`);
console.log(`Nuevo: ${newMapArray}`);


//Aplicando map en html
const products = [
    {title: 'Burger', price: 8},
    {title: 'Pizza', price: 14}
];

const app = document.getElementById('app'); //se obtiene el elemento html en donde se imprimiran los elementos del arrays
const list = products.map(product => { //se crea un nuevo array
    return `<li>${product.title} - ${product.price}</li>` //se retorna, por cada elemento, una lista que se imprimirá en el html
});
app.innerHTML = list.join(``) //se renderiza en el html

//otro ejemplo con map
const tasks = [
    {title: 'Task 1', status: false},
    {title: 'Task 2', status: false},
    {title: 'Task 3', status: false},
    {title: 'Task 4', status: false},
];

const toDo = document.getElementById('todo');
const tasksList = tasks.map(task  => {
    return `<li>${task.title} - <input type='checkbox' ${task.status ? 'checked' : ''}></li>` 
})
toDo.innerHTML = tasksList.join('')

//Desafio
// En este desafío tienes un array de números, usando la función map 
// debes retornar todos los números del array multiplicados por dos.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([2, 4, 5, 6]);

// Output

// [4,8,10,12]

function solution(array) {
    // Tu código aquí 👈
    const arraySolution = array.map(n => n * 2);
    console.log(arraySolution);
};

const arreglo = [2, 4, 5, 6];
solution(arreglo);
