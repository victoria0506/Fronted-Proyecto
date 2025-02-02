const postProductos = async (NomProducto, precio, material, ImgUrl ) => { // funcion del metodo POST
    try {
        const response = await fetch('http://localhost:3002/Productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
             NomProducto : NomProducto,
             precio : precio,
             material : material,
             ImgUrl : ImgUrl
            })
        });
        const data = await response.json();
        return data
        } catch(error) {
        console.log(error)
        alert("Error del servidor al agregar")
    } 
}

export default postProductos  