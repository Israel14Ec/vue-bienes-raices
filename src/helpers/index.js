const priceProperty = (price) => 
    Number(price).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

export default priceProperty;


//Nota: Un computed no puede recibir parámetros, entonces por eso en el return podemos tomarlos