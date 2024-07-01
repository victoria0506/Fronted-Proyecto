const postProductos = async (NomProducto, precio, material) => { // funcion del metodo POST
    try {
        const response = await fetch('http://localhost:3002/Productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
             NomProducto : NomProducto,
             precio : precio,
             material : material
            })
        });
        const data = await response.json();
        return data
        } catch(error) {
        console.log(error)
    } 
}

export default postProductos  