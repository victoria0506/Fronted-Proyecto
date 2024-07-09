import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//Componente
const alers = () => {
  const MySwal = withReactContent(Swal);

  const handleFuncion = (element) => {
     MySwal.fire({
      title: `¿Está seguro de Esto?, Esta acción es irreversible!`,
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then(async (result) => {
        if (result.isConfirmed) {
        }
    });
  }
}

export default alers