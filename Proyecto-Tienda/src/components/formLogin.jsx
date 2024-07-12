
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import userGET from "../service/getUser"
import SweetAlert2 from 'react-sweetalert2';
import "../css/login.css"
import { compartirContexto } from "../context/ContextProvider"

function Formlogin() {

    const [usu, setUsu] = useState("")
    const [correo, setCorreo] = useState("")
    const [conta, setConta] = useState("")
    const [mensaje, setMensaje] = useState("")
    const navigate = useNavigate();
    const [swalProps, setSwalProps] = useState({});
    const {actualizador, setActu, apiData, setApiData} = compartirContexto()

    const envioInicio = async () =>{

      const administrador = {
        id : "Admi",
        usuario: "Administrador",
        correo : "admi@gmail.com",
        contrasena : "vic1234"
      }
    
        if (usu.trim("") === "" && conta.trim("") === "") {
          setSwalProps({
            show: true,
            title: 'Error',
            text: 'Ingrese sus datos',
        });
            return
        }else{
          if (administrador.correo === correo && administrador.contrasena === conta && administrador.usuario === usu) {
            navigate("/productos")
            localStorage.setItem("Admi-id", administrador.id)
            alert("Bienvenido Administrador")
            setActu(actualizador + 1)
          }
         const UserObte = await userGET()
         const validarUser = UserObte.find((user) => user.usuario === usu && user.correo === correo && user.contrasena === conta)
         if (validarUser) {
            setMensaje("Logueo Exitoso")
            setTimeout(() => {
                navigate("/home")
            }, 1000);
         } else {
            setSwalProps({
              show: true,
              title: 'Error',
              text: 'Correo o/y Contraseña incorrectas',
          });
         }
        }

        useEffect(() => {
          envioInicio()
        }, [actualizador])
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
        <p>Registrate aquí ↓</p>
       <div className="botones">
       <button><Link to='/registro'>Ir a registrarme</Link></button>
       <button onClick={envioInicio}>Logiarme</button>
       </div>
       </div>

       <div>
       <SweetAlert2 {...swalProps} />
       </div>
    </div>
  )
}
export default Formlogin