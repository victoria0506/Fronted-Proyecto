
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import userGET from "../service/getUser"
import SweetAlert2 from 'react-sweetalert2';
import "../css/login.css"
import { compartirContexto } from "../context/ContextProvider"

function Formlogin() {

    //Declaracion de los hooks 
    const [usu, setUsu] = useState("") // estado usuario 
    const [correo, setCorreo] = useState("") // estado correo
    const [conta, setConta] = useState("")// estado contraseña
    const [mensaje, setMensaje] = useState("") // estado mensaje
    const navigate = useNavigate(); // Hook para navegar a otra pagina 
    const [swalProps, setSwalProps] = useState({}); // hook del SweetAlert
    const {actualizador, setActu, apiData, setApiData} = compartirContexto() // hook del Usecontext

    const envioInicio = async () =>{

      const administrador = { // Data del administrador para validar su ingreso
        id : "Admi",
        usuario: "Administrador",
        correo : "admi@gmail.com",
        contrasena : "vic1234"
      }
    
        if (usu.trim("") === "" && conta.trim("") === "") { // validar que no se pueda loguear con estacios vacios
          setSwalProps({ // SweetAlert
            show: true,
            title: 'Error',
            text: 'Ingrese sus datos',
        });
            return
        }else{
          if (administrador.correo === correo && administrador.contrasena === conta && administrador.usuario === usu) { // Validacion para que al ingresar los datos 
            // del administrador, este ingrese, sea enviado a la pagina de admisnistracion
            navigate("/productos")
            localStorage.setItem("Admi-id", administrador.id) // en localStorage gusrdamos el id del administrador, para que se pueda cerrar la secion si es necesario
            alert("Bienvenido Administrador") 
            setActu(actualizador + 1) // actualizamos el Contexto 
          }
         const UserObte = await userGET() // Llamamos al metodo GET para extraer los datos guardados en nuestra api 
         const validarUser = UserObte.find((user) => user.usuario === usu && user.correo === correo && user.contrasena === conta) // El .find va a buscar
         // 
         if (validarUser) {
            setMensaje("Logueo Exitoso") // Mensaje para que el usuraio este informado que su logueo fue exitoso
            setTimeout(() => {
                navigate("/home") // Navegacion hacia la pagina de Home, despues de un segundo
            }, 1000);
         } else {
            setSwalProps({ // SweetAlert para informar al usuario que sus datos son incorrectos
              show: true,
              title: 'Error',
              text: 'Correo o/y Contraseña incorrectas',
          });
         }
        }

        useEffect(() => { // Efecto para manejar el login cuando cambia a actulizar del useContext
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