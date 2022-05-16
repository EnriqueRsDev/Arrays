//reduce es una funcion la cual, como su nombre lo dice, permite reducir el array a su mínima expresión.

//simulando un reduce con for
const total = [1,2,3,4,5];
let suma = 0;

for (let i = 0; i < total.length; i++) {
    let sumaTotal = total[i]; 
    suma = suma + sumaTotal;
}
console.log(`For: ${suma}`);

//reduce se compone de dos elementos, el primero es una función la cual se encarga de realizar la operación matemática y el segundo elementos es el acumulador
const sumaReduce = total.reduce((previous, current) => previous + current, 0);
console.log(`Reduce: ${sumaReduce}`);

//descomponiendo reduce
const numbers = [1,2,3,4,5]; //Arreglo
const newReduce = (el1, el2) => el1 + el2; //función que se encarga de sumar
let copy = numbers.reduce(newReduce, 0) //Aplicando reduce
console.log(copy);
