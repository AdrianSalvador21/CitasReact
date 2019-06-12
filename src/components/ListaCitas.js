import React from 'react';
import Cita from "./Cita";

const ListaCitas  = (props) => {

  // Imprimir un mensaje en base a si hay citas o no
  const mensaje = Object.keys(props.citas).length === 0 ? 'No hay citas' : 'Administra las citas aqui';

  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{mensaje}</h2>

        <div className="lista-citas">
          {props.citas.map(cita => (
            <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={props.eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaCitas;
