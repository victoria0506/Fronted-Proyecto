import Card from 'react-bootstrap/Card';
import "../css/acerca.css"

const CardVision = () => {
  return (
    <div className='vision'>
        <Card className='cardVision' border="secondary" style={{ width: '25rem' }}>
        <Card.Header className='colorHe'>Vision</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          En Eternal Jewelry, nos dedicamos a ofrecer joyas únicas y 
          de alta calidad que resalten la belleza y la individualidad de cada persona.
          Nos comprometemos a proporcionar a nuestros clientes
          una experiencia excepcional de compra en línea, garantizando 
          la autenticidad, la artesanía experta y el servicio al cliente de primera clase.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='cardMision' border="secondary" style={{ width: '25rem' }}>
        <Card.Header className='colorHe'>Mision</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          Nos visualizamos como la primera opción en joyería en línea, 
          conocida por nuestra colección diversa y exclusiva que captura las últimas tendencias y 
          estilos atemporales. Nos esforzamos por expandir nuestra presencia global, 
          manteniendo siempre nuestra pasión por la excelencia en diseño y servicio.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
export default CardVision
