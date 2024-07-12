
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
import SweetAlert2 from 'react-sweetalert2';

const FormProductos = () => {

  // Hooks a utilizar 
    const [producto, setProducto] = useState("")
    const [precio, setPrecio] = useState("")
    const [material, setMaterial] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [productos, setProductos]= useState([]) // hook que almacenara la lista de productos
    const [imagen, setImagen] = useState("")
    const [showModal, setModal] = useState(false) // hook para cerrar el modal
    const [tareaEditad, setProducEdi] = useState("")
    const [swalProps, setSwalProps] = useState({});
    const {actualizador, setActu, apiData, setApiData} = compartirContexto() // hook del useContext

    const AnadirProduc = async () => { 
      // validamos que no se ingresen datos vacios
      if (producto.trim("") === "" && precio.trim("") === "" && material.trim("") === "" && imagen.trim("") === "") {
        setSwalProps({ // SweetAlert para informar al administrador que llene segun los solicitado
          show: true,
          title: 'Error',
          text: 'Ingrese los datos solicitados',
      });
        return
      }else{
        postProductos(producto, precio, material, imagen) // Metodo POTS para guardar los poductos y sus  demas datos
        setSwalProps({ // SweetAlert para informar al administrador que el producto se añadio correctamente
          show: true,
          title: 'Perfecto',
          text: 'Producto añadido correctamente',
      });
        setProducto("") // Despues de agregar el producto los estados vuelven a vacio
        setPrecio("")
        setMaterial("")
        setImagen("")
        MostrarProduc()
      }
    }
    
    const MostrarProduc = async () => { // funcion para que se muestren los productos 
      const getProducto = await producGET() // se llama al metodo GET
      setProductos(getProducto) // el estado de productos va a ser lo que se encuentre en el get
    }

    useEffect(() => { // Efecto que se utiliza para mostrar los productos
      MostrarProduc() // funcion del GET
    }, [actualizador]); 

    
    const EliminarProduc = (id) => {

      // SweetAlert para confirmar la eliminacion
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
   
    const abrirModal = (id, imgUrl) => { // funcion para abrir el modal de editar
      localStorage.setItem("iden", id) // guardamos el id
      localStorage.setItem("img", imgUrl)
      setModal(true)// estado del modal para abrirlo
    }
     
    // funcion del Metodo Editar
    const EditarProductos = async () => {
     setProducEdi(producto) 
     setModal(false) // estado para cerrar el modal
     MostrarProduc() // funcion del GET
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
     <div>
       <SweetAlert2 {...swalProps} />
       </div>
      <div className="lista">
      {productos.map((produc, index) => (
          <li key={index}> 
              <Card style={{ width: '16rem', fontFamily : "Sterling", borderColor : "#81d8d0" }}>
                <Card.Img variant="top" src={produc.ImgUrl} /> {/* añadimos la URL de la imagen*/}
                <Card.Body>
                  <Card.Title>{produc.NomProducto}</Card.Title> {/* añadimos el Nombre del producto*/}
                  <Card.Text>
                    {"$ " + produc.precio}  <br /> {produc.material} <br /> {/* añadimos el precio y el material*/}
                  </Card.Text>
                 <div className="botones">
                  {/* llamamos a las funciones onclick en los botones que realizaran dicha accion*/}
                 <button onClick={() => EliminarProduc(produc.id)}>Eliminar</button>
                 <button onClick={() => abrirModal(produc.id, produc.ImgUrl)}>Editar Producto</button>
                 </div>
                </Card.Body>
              </Card>
          </li>
      ))}
      </div>
      {/* llamamos a las funciones */}
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

