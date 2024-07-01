
import { useState } from "react"
import postProductos from "../service/postProductos"
import  producGET from "../service/getProductos"
import { useEffect } from "react"
import deleteProduc from "../service/delete"

const FormProductos = () => {
    const [producto, setProducto] = useState("")
    const [precio, setPrecio] = useState("")
    const [material, setMaterial] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [productos, setProductos]= useState([])

    const AnadirProduc = async () => {
      if (producto.trim("") === "" && precio.trim("") === "" && material.trim("") === "") {
        setMensaje("Ingrese un texto")
        return
      }else{
        postProductos(producto, precio, material)
        alert("Se añadio correctamente")
        setProducto("")
        setPrecio("")
        setMaterial("")
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
      deleteProduc(id)
      MostrarProduc()
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
      <input type="file" />
      <br /><br />
      <button onClick={AnadirProduc}>Añadir Producto</button>
      <br /><br />
      <div>
      {productos.map((produc, index) => (
            <li key={index}>
              {produc.NomProducto} {produc.precio} {produc.material}
              <button onClick={() => EliminarProduc(produc.id)}>Eliminar</button>
              <button>Editar</button>
            </li>
      ))}
      </div>
    </div>
  )
}

export default FormProductos

