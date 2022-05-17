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

