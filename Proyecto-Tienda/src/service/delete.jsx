
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
    } 
}
export default deleteProduc
