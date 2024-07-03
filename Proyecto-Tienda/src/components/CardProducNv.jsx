import React from 'react'
import "../css/card.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardProducNv = () => {
  return (
    <>
      <div>
        <h4>Productos Nuevos</h4>
      </div>
      <div className='productos2'>
      <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/elsa-perettibean-design-bracelet-70881098_1071335_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title style={{fontSize : "15px"}}>Nuevo Producto</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src= "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-locksmall-pendant-74365787_1076534_ED.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title style={{fontSize : "15px"}}>Nuevo Producto</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src= "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-keyswoven-keys-hinged-bracelet-72985206_1067411_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title style={{fontSize : "15px"}}>Nuevo Producto</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src= "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tt1-half-pav-diamond-huggie-earrings-73586100_1071401_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title style={{fontSize : "15px"}}>Nuevo Producto</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src= "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/elsa-perettiopen-heart-bracelet-74599362_1069416_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title style={{fontSize : "15px"}}>Nuevo Producto</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <br />

    </>
  )
}

export default CardProducNv
