const putProducto = async (id, NomProducto, precio, material, ImgUrl) => { 
    console.log(ImgUrl);// funcion del metodo PUT
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
        return (data)
        } catch(error) {
        console.log(error)
        alert("Error del servidor, por favor intente después")
    } 
}

export default putProducto