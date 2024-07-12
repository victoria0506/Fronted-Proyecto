

const AddPost = async (usuario, correo,contrasena) => { // funcion del metodo POST
    try {
        const response = await fetch('http://localhost:3002/Usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
                usuario : usuario, 
                correo : correo,
                contrasena: contrasena
            })
        });
        const data = await response.json();
        return data
        } catch(error) {
        console.log(error)
        alert("Error del servidor, por favor intente después")
    } 
}

export default AddPost 