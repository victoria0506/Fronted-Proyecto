import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import putProducto from "../service/putProductos";

const EditProductModal = ({ show, handleClose, product, handleSave }) => {
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [material, setMaterial] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    if (product) {
      setProducto(product.NomProducto);
      setPrecio(product.precio);
      setMaterial(product.material);
      setImagen(product.imgUrl);
    }
  }, [product]);

  const saveChanges = async (id)  => {
    const ediatado =  await putProducto(id)
    console.log(ediatado);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formProducto">
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Producto"
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPrecio">
            <Form.Label>Precio del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formMaterial">
            <Form.Label>Material del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formImagen">
            <Form.Label>URL de la foto</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={saveChanges}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProductModal;

