import { Navigate, useLocation} from "react-router-dom"

const PrivateRoute = ({children}) => {
    const valiUsu = localStorage.getItem("user")
    const {state} = useLocation()
    if (!valiUsu) {
        return state?.logged ? children : <Navigate to={"/login"} />
    }

    return children
}

export default PrivateRoute