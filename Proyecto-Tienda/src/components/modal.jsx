
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import putProducto from "../service/putProductos";
import { compartirContexto } from "../context/ContextProvider";

const EditProductModal = ({ show, handleClose, product}) => {

  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [material, setMaterial] = useState("");
  const [imagen, setImagen] = useState("");
  const [mensaje, setMensaje] = useState("")

  const {actualizador, setActu, apiData, setApiData} = compartirContexto()
  
  useEffect(() => {// Actualiza los estados al abrir el modal con los datos del producto
    if (product) {
      setProducto(product.producto || "");
      setPrecio(product.precio || "");
      setMaterial(product.material || "");
      setImagen(product.ImgUrl || "");
    }
  }, [product]);

  const datosEditados = async ()  => {  //Guarda los cambios editados del producto
    if (producto.trim("") !== "" || precio.trim("") !== "" || material.trim("") !== "") {
      const id = localStorage.getItem("iden")
      putProducto(id, producto, precio, material, imagen) // se llama al medoto PUT para actualizar 
      setActu(actualizador + 1) // se actualiza el contexto para ver los cambios
      handleClose()// cierra el modal
      
    } else {
      setMensaje("Ingrese los cambios a realizar") // validar estacios vacios, informamos al administrador
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h3>{mensaje}</h3>
        <Form>
          <Form.Group controlId="formProducto">
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Producto"
              value={producto}
              onChange = {(e) => setProducto(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPrecio">
            <Form.Label>Precio del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Precio"
              value={precio.precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formMaterial">
            <Form.Label>Material del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formImagen">
            <Form.Label>URL de la foto</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={() => datosEditados()}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProductModal;

