import React from 'react';
import './Proyecto.css';

const Proyecto = ({ titulo, descripcion, link }) => {
  return (
    
      <div className="card">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn-link">
        Ver Proyecto
      </a>
    </div>
   
    
  );
};

export default Proyecto;