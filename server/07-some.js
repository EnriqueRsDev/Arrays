//Libreria date-fns 
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

//simulando some con for
const numbers = [1,2,3,4];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(`${numbers[i]} es par`);
    } else {
        console.log(`${numbers[i]} es impar`);
    }
}

//usando some
const nums = [1,2,3,4];
const evenOrOdd = nums.some((num) => num % 2 == 0);
console.log(evenOrOdd); 

//Otros ejemplos
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

const order = orders.some(order => order.delivered == true);
console.log(order);


//Otro Ejemplo
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

const isoverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping ({
            start: date.startDate, 
            end: date.endDate
        },
        {
            start: newDate.startDate, 
            end: newDate.endDate
        }
        )
    })
}

console.log(`isOverLap: ${isoverlap(newAppointment)}`);