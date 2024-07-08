import "../css/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
  return (
<div>
  <br />
  <div className="Footer-line"></div>
  <footer className="Conte-Foo">
    <div>
      <h4>Contacto</h4>
      <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección: </p>
      <p><FontAwesomeIcon icon={faPhoneAlt} /> Teléfono: 979869</p>
      <p><FontAwesomeIcon icon={faEnvelope} /> Email: info@joyeria.com</p>
    </div>
    <div>
      <h4>Siguenos</h4>
      <ul className="iconos-redes">
        <li><FontAwesomeIcon icon={faInstagram} /></li>
        <br />
        <li><FontAwesomeIcon icon={faWhatsapp} /></li>
        <br />
        <li><FontAwesomeIcon icon={faXTwitter}/></li>
      </ul>
    </div>
    <div className="hr"></div>
  </footer>
  <div>
    <div className="fecha">
      <p>© {new Date().getFullYear()} <br /> Joyeria. Todos los derechos reservados</p>
    </div>
  </div>
</div>
  )
}

export default footer
