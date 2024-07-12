
import { useState } from "react"
import postProductos from "../service/postProductos"
import  producGET from "../service/getProductos"
import { useEffect } from "react"
import deleteProduc from "../service/delete"
import Card from 'react-bootstrap/Card';
import EditProductModal from "../components/modal"
import "../css/productos.css"
import { compartirContexto } from "../context/ContextProvider"
import swal from 'sweetalert';

const FormProductos = () => {
    const [producto, setProducto] = useState("")
    const [precio, setPrecio] = useState("")
    const [material, setMaterial] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [productos, setProductos]= useState([])
    const [imagen, setImagen] = useState("")
    const [showModal, setModal] = useState(false)
    const [tareaEditad, setProducEdi] = useState("")
    const {actualizador, setActu, apiData, setApiData} = compartirContexto()

    const AnadirProduc = async () => {
      if (producto.trim("") === "" && precio.trim("") === "" && material.trim("") === "" && imagen.trim("") === "") {
        setMensaje("Ingrese un texto")
        return
      }else{
        postProductos(producto, precio, material, imagen)
        alert("Se añadio correctamente")
        setProducto("")
        setPrecio("")
        setMaterial("")
        setImagen("")
        MostrarProduc()
      }
    }
    
    const MostrarProduc = async () => {
      const getProducto = await producGET()
      setProductos(getProducto)
    }

    useEffect(() => {
      MostrarProduc()
    }, [actualizador]);

    
    const EliminarProduc = (id) => {
      swal({
          title: "¿Estás seguro?",
          text: "No podrás revertir esto!",
          icon: "warning",
          buttons: {
              cancel: {
                  text: "No, cancelar",
                  visible: true,
                  className: "btn btn-danger",
                  closeModal: true,
              },
              confirm: {
                  text: "Sí, eliminarlo!",
                  className: "btn btn-success",
                  closeModal: true,
              },
          },
          dangerMode: true,
      }).then((willDelete) => {
          if (willDelete) {
              deleteProduc(id);
              MostrarProduc();
              swal("¡Eliminado!", "El producto ha sido eliminado.", "success");
          } else {
              swal("Cancelado", "Tu producto está seguro :)", "error");
          }
      });
  };
   
    const abrirModal = (id, imgUrl) => {
      console.log(imgUrl);
      localStorage.setItem("iden", id)
      localStorage.setItem("img", imgUrl)
      setModal(true)
    }
    
    const EditarProductos = async () => {
     setProducEdi(producto)
     setModal(false)
     MostrarProduc()
    }

  return (
    <div>

     <div className="form-Produc">
      <h2>Productos</h2>
      <h5>{mensaje}</h5>
      <label htmlFor="">Nombre del Producto : </label>
      <input type="text"  placeholder="Producto" value={producto} onChange={(e) => setProducto(e.target.value)} />
      <br /><br />
      <label htmlFor="">Precio del producto : </label>
      <input type="text" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      <br /><br />
      <label htmlFor="">Material Del producto : </label>
      <input type="text" placeholder="Material" value={material} onChange={(e) => setMaterial(e.target.value)}/>
      <br /><br />
      <label htmlFor="">URL de la foto a añadir : </label>
      <input type="text" placeholder="URL imagen" value={imagen} onChange={(e) => setImagen(e.target.value)}/>
      <br /><br />
      <button onClick={() => AnadirProduc()}>Añadir Producto</button>
      <br /><br />
     </div>
      <div className="lista">
      {productos.map((produc, index) => (
          <li key={index}> 
              <Card style={{ width: '16rem', fontFamily : "Sterling", borderColor : "#81d8d0" }}>
                <Card.Img variant="top" src={produc.ImgUrl} />
                <Card.Body>
                  <Card.Title>{produc.NomProducto}</Card.Title>
                  <Card.Text>
                    {"$ " + produc.precio}  <br /> {produc.material} <br />
                  </Card.Text>
                 <div className="botones">
                 <button onClick={() => EliminarProduc(produc.id)}>Eliminar</button>
                 <button onClick={() => abrirModal(produc.id, produc.ImgUrl)}>Editar Producto</button>
                 </div>
                </Card.Body>
              </Card>
          </li>
      ))}
      </div>
      <EditProductModal
      show={showModal}
      handleClose={() => setModal(false)}
      product={tareaEditad}
      handleSave={() => EditarProductos()}
      />
    </div>
  )
}

export default FormProductos

