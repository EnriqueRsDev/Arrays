const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

const totals = orders.map(order => order.total);
console.log(totals);

const taxes = orders.map(item => {
    return {
        ...item, //spread operator, se usa para copiar el objeto y no su referencia en memoria
        tax: 0.13 //se añade el nuevo atributo al objeto copiado y no se cambia el original.
    }
});
console.log(orders);
console.log(taxes);

const orderList = document.getElementById('orderList');
const orderListHtml = taxes.map(item => {
    return `<li> Cliente: ${item.customerName} - Estado: ${item.delivered ? 'Enviado' : 'Procensando'} - Impuesto: ${item.tax} - Total: ${item.total} `
})

orderList.innerHTML = orderListHtml.join('')


//Desafio
/**
 * Tienes un array de productos con los siguientes atributos:

name
price
stock
Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben 
ser del 19% con base al precio base.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 
el resultado de los "taxes" será $190, debes tener en cuenta que como resultado se debe 
dejar un valor entero sin decimales.

 */

function solution(array) {
    // Tu código aquí 👈 
    return array.map(item => {
        return {
        ...item,
        taxes: 0.19 * item.price
        }

    }) 
}; 

solution([
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
  ])