import React from 'react';
import './Ticket.css';

const Ticket = ({info }) => {
  return (
    <div className="ticket">
      <h2>{info.nombre}</h2>
      <p>Rango de fecha: {info.desde} - {info.hasta}</p>
      <p>Ventas: {info.ventas}</p>
      <p>Premios: {info.premios}</p>
      <p>Porcentaje: {info.porcentaje}</p>
      <p>Utilidad: {info.utilidad}</p>
    </div>
  );
};

export default Ticket;
