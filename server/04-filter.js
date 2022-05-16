//Filter, filtra los elementos de un array, pero dichos elementos deben de cumplir una condición
//Filter e inmutable, es decir, no cambia el array original y crea uno nuevo.

const words = ['hola', 'limit', 'adios', 'saludo'];
const newArray = [];

//Simulando filter con for
for(let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length >= 5) {
        newArray.push(word);
    }
}
console.log(words);
console.log(newArray);

//Usando filter
const array = words.filter(word => word.length <= 5);

console.log(`Array Original: ${words}`);
console.log(`Array usando filter: ${array}`);

//Ejemplo usando filter
const orders = [
    {
        id: 1,
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        id: 2,
        customerName: "Zuleyma",
        total: 120,
        delivered: false,
    },
    {
        id: 3,
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        id: 4,
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        id: 5,
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
];

const delivered = orders.filter(order => order.delivered && order.total > 150); //no es necesario ponerle true a "order.delivered == true", porque al ser un booleano si es true se añade al nuevo array
console.log(delivered);

//Ejemplo de un buscador 
const search = (name) => {
    return orders.filter(order => {
        return order.customerName.includes(name)
    })
}

console.log(search("a"))