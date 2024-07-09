
import { useState } from 'react'
import '../css/contac.css'

const ComContacto = () => {
  const [correo , setCorreo] = useState("")
  const [comentario, setComentario] = useState("")
        
  function MjsContac() {

    if (correo.trim("") !== "" && comentario.trim("") !== "") {
      alert("Comentario enviado, gracias")
    } else {
      alert("Error al enviar comentario")
    }
  }
  return (
    <div>
      <div>
      <div className='form-contac'>
        <h4>Envia tus comentarios</h4> 
        <br />
      <input type="text" name="" placeholder='Correo' value={correo} onChange={e => setCorreo (e.target.value)}/>
        <br /><br />
      <input type="text" className='comentario' name="" placeholder='Comentario' value={comentario} onChange={e => setComentario (e.target.value)} />
        <br /><br />
        <button onClick={MjsContac}>Enviar</button>
        </div>
        <br />
      </div>
        <div className='hora'>
          <p>Horarios</p>
          <p>Lunes–Viernes: 8:00AM–10:00PM EDT</p>
          <p>Sabado: 9:00AM-9:00PM EDT</p>
          <p>Domingo: 10:00AM-9:00PM EDT</p>
        </div>
    </div>
  )
}

export default ComContacto
