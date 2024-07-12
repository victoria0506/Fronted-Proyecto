import { Navigate, useLocation} from "react-router-dom"

const PrivateRoute = ({children}) => {
    const {state} = useLocation()
    const Admi = localStorage.getItem("Admi-id")
    if (!Admi) {
        return state?.logged ? children : <Navigate to={"/home"} />
    }
    return children

}

export default PrivateRoute