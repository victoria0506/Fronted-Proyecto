import React from 'react';
import Swal from 'sweetalert';
import withReactContent from '@sweetalert/with-react';

const AlertCon = () => {
  const MySwal = withReactContent(Swal);

  const handleDelete = () => {
    MySwal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, bórralo!',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes realizar la acción de borrado
        MySwal.fire(
          '¡Borrado!',
          'El archivo ha sido eliminado.',
          'success'
        );
      }
    });
  };

  return (
    <div>
      <button onClick={handleDelete}>Eliminar archivo</button>
    </div>
  );
};

export default AlertCon