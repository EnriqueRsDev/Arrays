const numbers = [1,2,3,4,5,3,5,3];

const reduceObject = numbers.reduce((obj, number) => {
    if(obj[number]) { //si el número existe
        obj[number] = obj[number] + 1; //se suma 1
    } else {
        obj[number] = 1; //en el caso que no exista, se inicializa a 1
    }
    return obj;
}, {});

console.log(reduceObject);

//otros ejemplo usando reduce
const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
];

const levels = data
.map(item => item.level)
.reduce((previous, current) => {
    if (previous[current]) {
        previous[current] += 1 
    } else {
        previous[current] = 1
    }
    return previous;
}, {})

console.log(levels);

//Ejercicio
/**
 * En un array de números, clasificar los numeros en grupos, dichos grupos 
 * están compusto por rangos, es decir, del 1 al 5, del 6-8, del 9-10, del 11 al 25 
 */

const listOfNumbers2 = [];

const addNumber = (num1, num2, num3, num4, num5, num6, num7) => {
    listOfNumbers2.push(num1,num2,num3,num4,num5,num6,num7);
};

addNumber(1,2,3,4,5,6,7);

const listOfNumbers = [1,2,3,4,5,6,7];

const rangeOfNumbers = listOfNumbers.reduce((obj, item) => {
    if(item <= 5 && item > 0) {
        obj['1-5']++
    } else if(item <= 5 && item > 0) {

    }
    return obj;
}, {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0,
    '11-25': 0,
})
console.log(rangeOfNumbers);