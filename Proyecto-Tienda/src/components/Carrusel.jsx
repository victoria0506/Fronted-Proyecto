import Carousel from 'react-bootstrap/Carousel';
import "../css/carrusel.css"

const CarruselHome = () => {
  return (
    <div className='carusel'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.tiffany.com/is/image/tiffanydm/Jewelry_LP_Tiffany_Collections_Desktop?$tile$&wid=2992&fmt=webp"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.tiffany.com/is/image/tiffanydm/PLP_BG-Hero-StatementNecklaces-Desktop?$tile$&wid=2992&fmt=webp"
          alt="Second slide"
        />
        <Carousel.Caption>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.tiffany.com/is/image/tiffanydm/2024-Icons-BG-Hero-T-Desktop?$tile$&wid=2992&fmt=webp"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <br />
    </div>
  )
}

export default CarruselHome
