
import { useState } from "react"
import postProductos from "../service/postProductos"
import  producGET from "../service/getProductos"
import { useEffect } from "react"
import deleteProduc from "../service/delete"
import putProducto from "../service/putProductos"
import "../css/productos.css"


const FormProductos = () => {
    const [producto, setProducto] = useState("")
    const [precio, setPrecio] = useState("")
    const [material, setMaterial] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [productos, setProductos]= useState([])
    const [imagen, setImagen] = useState("")

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
    }, []);

    const EliminarProduc = (id) => {
     let confirma = confirm("Desea eliminar producto")
     if (confirma) {
      deleteProduc(id)
      MostrarProduc()
     } else {
      setMensaje("El producto no se eliminara")
     }

    }

    const EditarProductos = async (id) => {
      await putProducto(id)
    }


  return (
    <div>
      <h5>{mensaje}</h5>
      <label htmlFor="">Nombre del Producto : </label>
      <input type="text"  placeholder="Producto" value={producto} onChange={(e) => setProducto(e.target.value)}/>
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
      <button onClick={AnadirProduc}>Añadir Producto</button>
      <br /><br />
      <div className="lista">
      {productos.map((produc, index) => (
            <li key={index}>
              <img src={produc.imgUrl} alt={`${produc.NomProducto}`} style={{width:"100px"}}/>
              {produc.NomProducto} {produc.precio} {produc.material}
              <button onClick={() => EliminarProduc(produc.id)}>Eliminar</button>
              <button>Editar Producto</button>
            </li>
      ))}
      </div>
    </div>
  )
}

export default FormProductos

