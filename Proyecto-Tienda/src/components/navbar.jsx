
import '../css/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { compartirContexto } from "../context/ContextProvider"

function Navbari() {
  const {actualizador, setActu, apiData, setApiData} = compartirContexto()
  
  const [boton, setBoton] = useState("none")

  useEffect(() => {
    if (localStorage.getItem("Admi-id") === "Admi") {
      setBoton("block")
    } else {
      setBoton("none")
    }
  }, [actualizador])

  function quitar() {
    localStorage.removeItem("Admi-id")
  }

  const navbarStyle = { 
    backgroundColor: '#81d8d0', 
    color : "black",
  }
  
  return (
   <>
     <Navbar class="navbar navbar-light" style={navbarStyle} >
        <Container>
          <img style={{width : "20%", marginLeft : "-5%", marginRight : "11%"}} src="img/logo.png" alt="" />
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/acerca">Acerca de nosotros</Nav.Link>
            <Nav.Link href="/contact">Contactanos</Nav.Link>
            <Nav.Link href="/productos" style={{display : boton}} >Productos</Nav.Link>
            <Nav.Link href="/productos" onClick={quitar} style={{display : boton}}> Cerrar Secion </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbari



