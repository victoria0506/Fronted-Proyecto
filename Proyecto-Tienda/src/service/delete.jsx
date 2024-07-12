
const deleteProduc = async (id) => { 
    try {
        const response = await fetch('http://localhost:3002/Productos/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        });
        const data = await response.json();
        return(data)
        } catch(error) {
        console.log(error)
        alert("Error del servidor al eliminar el producto")
    } 
}
export default deleteProduc
