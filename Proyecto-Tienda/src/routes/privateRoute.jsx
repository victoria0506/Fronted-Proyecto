import { Navigate, useLocation} from "react-router-dom"

const PrivateRoute = ({children}) => {
    const {state} = useLocation()
    const Admi = localStorage.getItem("Admi-id") // Obtiene el estado de autenticación del administrador desde localStorage utilizando localStorage.getItem("Admi-id").
    if (!Admi) {
        return state?.logged ? children : <Navigate to={"/home"} /> // si no esta autenticado es redirigido a la pagina Home
    }
    return children

}

export default PrivateRoute