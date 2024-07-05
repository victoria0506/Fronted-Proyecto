
import '../css/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbari() {
  
  const navbarStyle = { 
    backgroundColor: '#81d8d0', 
    color : "black",
  }
  
  return (
   <>
     <Navbar class="navbar navbar-light" style={navbarStyle} >
        <Container>
          <Navbar.Brand className='titulo'>Joyeria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/acerca">Acerca de nosotros</Nav.Link>
            <Nav.Link href="/contact">Contactanos</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbari



