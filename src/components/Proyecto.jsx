import React from 'react';
import './Proyecto.css';
function Proyecto({ titulo, descripcion, link, imagen }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      {imagen && <img src={imagen} alt={titulo} className="proyecto-imagen" />}
      <p>{descripcion}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
    </div>
  );
}

export default Proyecto;
