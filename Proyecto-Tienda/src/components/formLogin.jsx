
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import userGET from "../service/getUser"
import "../css/login.css"

function Formlogin() {

    const [usu, setUsu] = useState("")
    const [correo, setCorreo] = useState("")
    const [conta, setConta] = useState("")
    const [mensaje, setMensaje] = useState("")
    const navigate = useNavigate();

    const envioInicio = async () =>{
    
        if (usu.trim("") === "" && conta.trim("") === "") {
            setMensaje("Ingrese un texto")
            return
    
        }else{
         const UserObte = await userGET()
         const validarUser = UserObte.find((user) => user.usuario === usu && user.correo === correo && user.contrasena === conta)
         if (validarUser) {
            setMensaje("Logueo Exitoso")
            setTimeout(() => {
                navigate("/home")
            }, 1000);
         } else {
            setMensaje("Correo o/y Contraseña incorrecto")
         }
        }
    }

  return (
    <div className="login">
       <div className="logn2">
       <h2>Login</h2>
       <h5>{mensaje}</h5>
        <label htmlFor="">Usuario :  </label>
        <input type="text" className="inLogi"  value={usu} onChange={e => setUsu(e.target.value)} placeholder="Nom. Usuario" />
        <br /><br />
        <label htmlFor="">Correo : </label>
        <input type="text" className="inLogi" value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Correo"/>
        <br /><br />
        <label htmlFor="">Contraseña : </label>
        <input type="text" className="inLogi" value={conta} onChange={e => setConta(e.target.value)} placeholder="Contraseña" />
        <br /><br />
        <button><Link to='/registro'>Ir a registrarme</Link></button>
        <br /><br />
        <button onClick={envioInicio}>Logiarme</button>
       </div>
    </div>
  )
}

export default Formlogin