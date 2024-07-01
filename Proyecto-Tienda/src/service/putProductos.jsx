const putProducto = async (id, producto) => { // funcion del metodo PUT
    try {
        const response = await fetch('http://localhost:3000/api/task/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            producto: producto,
            })
        });
        const data = await response.json();
        } catch(error) {
        console.log(error)
    } 
}

export default putProducto