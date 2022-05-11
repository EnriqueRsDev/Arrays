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

const app = document.getElementById('app');
products.forEach(element => {
    app.innerHTML += `<li> ${element.title} - ${element.price}</li>`;
})