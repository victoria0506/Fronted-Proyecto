
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProducCard = () => {
  return (
    <div>

    <div>
      <h4 style={{fontFamily : "Sterling", textAlign : "center"}} >Collares Destacados</h4>
      <br />
    </div>

    <div style={{display: "grid", gridTemplateColumns: " repeat(4, 1fr)"}}>
     <Card style={{ width: '18rem', fontFamily : "Sterling" }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-solestependant-60572852_1023221_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title>Pendant</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem', fontFamily : "Sterling" }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-knotpendant-73017262_1056979_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title>Pendant</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', fontFamily : "Sterling" }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-solitaire-diamond-pendant-30420837_1036474_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title>Pendant</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', fontFamily : "Sterling" }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearlarge-double-link-pendant-63104345_999443_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title>Pendant</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <br />
    <div>
      <h4 style={{fontFamily : "Sterling", textAlign : "center"}} >Aretes Destacados</h4>
      <br />
    </div>

    <div>
    <div style={{display: "grid", gridTemplateColumns: " repeat(4, 1fr)"}}>
     <Card style={{ width: '18rem', fontFamily : "Sterling" }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-knotdrop-earrings-70300419_1033867_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title>Pendant</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem', fontFamily : "Sterling" }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/elsa-perettipearls-by-the-yard-chain-earrings-60926913_1066594_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title>Pendant</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', fontFamily : "Sterling" }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-victoriaearrings-11833187_1016110_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title>Pendant</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', fontFamily : "Sterling" }}>
      <Card.Img variant="top" src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-victoriamixed-cluster-diamond-drop-earrings-67126890_1002895_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" />
      <Card.Body>
        <Card.Title>Pendant</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="primary" >Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    
  )
}

export default ProducCard
