import "../css/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
  return (
<div>
  <br />
  <div className="Footer-line"></div>
  <footer className="Conte-Foo">
    <div>
      <h4>Contacto</h4>
      <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección: Puntarenas, Costa Rica</p>
      <p><FontAwesomeIcon icon={faPhoneAlt} /> Teléfono: 0972-0987</p>
      <p><FontAwesomeIcon icon={faEnvelope} /> Email: services@EternalJewels.com</p>
    </div>
    <div>
      <h4>Siguenos</h4>
      <ul className="iconos-redes">
        <li><FontAwesomeIcon icon={faWhatsapp} /><p> Telf. : 506 6878 - 9021</p></li>
        <li><FontAwesomeIcon icon={faInstagram} /><p> Eternals_Jewels_CR </p></li>
        <li><FontAwesomeIcon icon={faXTwitter}/><p> Eternals_Jewels_CR </p></li>
      </ul>
    </div>
    <div className="hr"></div>
  </footer>
  <div>
    <div className="fecha">
      <p className="copy">© {new Date().getFullYear()} Eternal jewels </p>
    </div>
  </div>
</div>
  )
}

export default footer
