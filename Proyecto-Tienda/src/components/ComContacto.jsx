
import { useState } from 'react'
import '../css/contac.css'
import SweetAlert2 from 'react-sweetalert2';

const ComContacto = () => {
  const [correo , setCorreo] = useState("")
  const [comentario, setComentario] = useState("")
  const [swalProps, setSwalProps] = useState({});
        
  function MjsContac() { 

    if (correo.trim("") !== "" && comentario.trim("") !== "") { //Validacion para que el usuario no envie datos vacios 
       setSwalProps({ //SweetAlert para indicarle al usuraio que su mensaje fue enviado con exito
            show: true,
            title: 'Mensaje enviado correctamenta',
            text: 'Gracias por su comentario',
        });
    } else {
      setSwalProps({ //SweetAlert para indicar al usuario que necesita ingresar sus datos y el mensaje
        show: true,
        title: 'Error',
        text: 'Ingrese sus datos y el mensaje a enviar',
    });
    }
  }

  return (
    <div className='Contenedor-contact'> 
      <div className='Diseño-contec'>
      <div>
      <div className='form-contac'>
        <h4>Envia tus comentarios</h4> 
        <br />
        <input type="text" name="" placeholder='Correo' value={correo} onChange={e => setCorreo (e.target.value)}/>
        <br /><br />
        <input type="text" className='comentario' placeholder='Comentario' value={comentario} onChange={e => setComentario (e.target.value)} />
        <br /><br />
        <button className='' onClick={MjsContac}>Enviar</button>
      </div>
      <br />
      </div>
        <div className='horarios'>
          <h4>Horarios de atención</h4>
          <br />
          <p>Lunes–Viernes: 8:00AM–10:00PM EDT</p>
          <p>Sabado: 9:00AM-9:00PM EDT</p>
          <p>Domingo: 10:00AM-9:00PM EDT</p>
        </div>
      </div>
      <div>
       <SweetAlert2 {...swalProps} />
       </div>
    </div>
  )
}

export default ComContacto
