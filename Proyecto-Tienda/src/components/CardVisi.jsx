import Card from 'react-bootstrap/Card';
import "../css/acerca.css"

const CardVision = () => {
  return (
    <div className='vision'>
        <Card className='cardVision' border="secondary" style={{ width: '25rem' }}>
        <Card.Header className='colorHe'>Vision</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='cardMision' border="secondary" style={{ width: '25rem' }}>
        <Card.Header className='colorHe'>Mision</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardVision
