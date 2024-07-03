const putProducto = async (id, NomProducto, precio, material, ImgUrl) => { // funcion del metodo PUT
    try {
        const response = await fetch('http://localhost:3002/Productos/' + id, {
        method: 'PUT',
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
        } catch(error) {
        console.log(error)
    } 
}

export default putProducto