
import '../css/contac.css'

const ComContacto = () => {
        
  function MjsContac() {
    alert("Comentario enviado, gracias")
  }

  return (
    <div>
      <div>
        <input type="text" name="" id="" placeholder='Nom. Usuario'/>
        <br /><br />
        <input type="text" name="" id="" placeholder='Comentario' />
        <br /><br />
        <button onClick={MjsContac}>Enviar</button>
        </div>
        <br />
        <h4 className='tite'>Contactos</h4>
        <br />
        <div className='contenedor'>

        <div className='num'>
          <p>Telefono :  6753 2990</p>
          <p>Correo : joyeris@gmail.com</p>
          <p>iigig</p>
          <p>TDDTDT</p>
        </div>

        <div className='hora'>
          <p>Horarios</p>
          <p>Monday–Friday: 8:00AM–10:00PM EDT</p>
          <p>Saturday: 9:00AM-9:00PM EDT</p>
          <p>Sunday: 10:00AM-9:00PM EDT</p>
        </div>
      </div>
    </div>
  )
}

export default ComContacto
