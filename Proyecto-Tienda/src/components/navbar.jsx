
import '../css/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { compartirContexto } from "../context/ContextProvider"

function Navbari() {
  const {actualizador, setActu, apiData, setApiData} = compartirContexto() // hoook del Usecontext 
  
  const [boton, setBoton] = useState("none") // estado del las paginas productos y cerrar sesion

  useEffect(() => { // Se actualiza el estado de boton
    if (localStorage.getItem("Admi-id") === "Admi") { // si en el localStorage almacena a admi el estsdo de boton va hacer block
      setBoton("block")
    } else {
      setBoton("none") // si no none
    }
  }, [actualizador])// actualizamos el contexto

  function quitar() {
    localStorage.removeItem("Admi-id") // se quita lo almacenado en localStorage
  }

  const navbarStyle = { // funcion para cambiar color del nav
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



