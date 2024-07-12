
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import producGET from '../service/getProductos';
import { useState } from 'react';
import { useEffect } from "react"
import "../css/card.css"

const ProducCard = () => {
  const [products, setProducts] = useState([]) // hook que almacenara la lista de productos

  const obtenerProductos  = async ()  => { // funcion del metdo GET
     const productosObtenidos = await producGET() 
    setProducts(productosObtenidos) // le cambiamos el estado
  }
  useEffect(() => {
    obtenerProductos() 
  }, []);
  
  return (
    <div>
      <br />
      <div>
        <h4>Productos Disponibles</h4>
        <br />
    </div>
    <div className='productos'>
      {/* .map para recorrer y añadir los productos a la pagina home*/}
       {products.map((produc, index) => (
          <li key={index}> 
            <Card style={{ width: '14rem', fontFamily : "Sterling" }}>
              <Card.Img variant="top" src= {produc.ImgUrl} />
              <Card.Body>
                <Card.Title>{produc.NomProducto}</Card.Title>
                <Card.Text>
                  {"$ " + produc.precio}  <br /> {produc.material} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
      ))}
    </div>
    </div>
  )
}

export default ProducCard
