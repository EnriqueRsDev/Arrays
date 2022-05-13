const letters =  ['a', 'b', 'c'];

for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}

//For each
const letters2 =  ['a', 'b', 'c'];

letters2.forEach(element => {
    console.log(element);
});

//Aplicandolo en html
const products = [
    {title: 'Burger', price: 8},
    {title: 'Pizza', price: 14}
];

const app = document.getElementById('app'); //Se obtiene el elemento html
products.forEach(element => {
    app.innerHTML += `<li> ${element.title} - ${element.price}</li>`; //por cada elemento de products se irá imprimiendo en el html
})

//práctica con for each

const tasks = [
    {title: 'Task 1', status: false},
    {title: 'Task 2', status: false},
    {title: 'Task 3', status: false},
    {title: 'Task 4', status: false},
];

const toDo = document.getElementById('todo');
tasks.forEach(task => {
    toDo.innerHTML += `<li class="task"> ${task.title} - <input class = 'check' type="checkbox" ${task.status ? 'checked' : ''}></li>`; //Si task.status es verdadero, se marca el checkbox, sino, queda desmarcado
});
