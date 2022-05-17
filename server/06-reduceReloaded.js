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

const names = ['Carlos', 'Enrique', 'Carlos', 'Enrique','Carlos','Enrique','Paco'];

const nombres = names.reduce((name, namesObj) => {
    if(name[namesObj.length.toString]) {
        name[namesObj.length.toString] = name[namesObj.length.toString] + 1;
    } else {
        name[namesObj.length.toString] = 1;
    }
});