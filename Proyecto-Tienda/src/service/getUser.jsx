const userGET = async () => { // funcion del metodo GET
    try {
        const response = await fetch('http://localhost:3002/Usuarios', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        });
        const data = await response.json();
        return(data)
        } catch(error) {
        console.log(error)
        alert("Error del servidor, por favor intente después")
    } 
}

export default userGET