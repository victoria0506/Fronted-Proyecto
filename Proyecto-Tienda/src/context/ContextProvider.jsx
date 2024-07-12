import { useContext, useState, createContext } from "react";

export const theContext = createContext() // crea un contexto llamado theContext, que se exporta para que pueda ser utilizado en otros componentes.

export const ContextProvider = ({children}) => {
    const [actualizador, setActu] = useState(0) // mantiene un número entero utilizado para indicar cambios o actualizaciones en la aplicación

    const [apiData, setApiData] = useState([])
 
    //theContext.Provider para envolver los componentes hijos (children) y proporcionarles acceso a actualizador, setActu, apiData y setApiData a través del contexto
  

  return (
    <theContext.Provider value={{actualizador, setActu, apiData, setApiData}}>
        {children}
    </theContext.Provider>
    
  )
}

export const compartirContexto = () => useContext(theContext)
