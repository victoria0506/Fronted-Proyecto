import {useState } from "react"
import { Link } from "react-router-dom"
import AddPost from "../service/PostUser"
import { useNavigate } from "react-router-dom"
import "../css/registro.css"

function FormRegistro() {

    const [usuario, setUsuario] = useState("")
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [mensaje, setMensaje] = useState("")
    const navigate = useNavigate();

const mostrar = async ()=>{
    
    if (usuario.trim("") === "" && contraseña.trim("") === "" && correo.trim("") === "") {
        setMensaje("Ingrese un texto")
        return
    }else{
        AddPost(usuario, correo, contraseña)
        setMensaje("registro exitoso")
        setTimeout(() => {
          navigate("/login")
      }, 1000);
    }
}

  return (
    <div className="login4">
       <div className="logn6">
        <h2>Registro</h2>
       <h5>{mensaje}</h5>
        <label htmlFor="">Usuario : </label>
        <input type="text" className="inRegi" value={usuario} onChange={e => setUsuario(e.target.value)} placeholder="Nom. Usuario"/>
        <br /><br />
        <label htmlFor="">Correo : </label>
        <input type="text" className="inRegi" value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Correo"/>
        <br /><br />
        <label htmlFor="">contraseña : </label>
        <input type="text" className="inRegi" value={contraseña} onChange={e => setContraseña(e.target.value)} placeholder="Contraseña"/>
        <br /><br />
        <button onClick={mostrar}>Registar Usuario</button>
        <br /><br />
        <button><Link to='/login'>Ir al login</Link></button>
       </div>
    </div>
  )
}

export default FormRegistro