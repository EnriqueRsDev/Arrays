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
        ...item, //spread operator, se usa para copiar el obeto y no su referencia en memoria
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