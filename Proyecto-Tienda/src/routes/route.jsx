import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Registro from '../pages/registro'
import Login from "../pages/login"
import Home from "../pages/home"
import Productos from "../pages/productos"
import Acerca from "../pages/acerca"
import Contact from "../pages/contact"
import PrivateRoute from "./privateRoute"
import Navbari from "../components/navbar"


function routing() {
//</PrivateRoute>} />

  return (
    <div>

      <Router>
        <Routes>
          <Route path='/registro' element={<Registro/>}   />
          <Route path='/login' element={<Login/>}   />
          <Route path='/home' element={<Home/>}   />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/acerca" element ={<Acerca />}/>
        </Routes>
      </Router>
      
    </div>
  )

}

export default routing