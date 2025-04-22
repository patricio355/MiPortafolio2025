import React from 'react';
import './Inicio.css';


const Inicio = () => {
  const proyectos = [
    {
      titulo: 'Proyecto 1',
      descripcion: 'Descripción del proyecto 1.',
      link: 'https://enlace-a-tu-proyecto-1.com',
    },
    {
      titulo: 'Proyecto 2',
      descripcion: 'Descripción del proyecto 2.',
      link: 'https://enlace-a-tu-proyecto-2.com',
    },
    {
      titulo: 'Proyecto 3',
      descripcion: 'Descripción del proyecto 3.',
      link: 'https://enlace-a-tu-proyecto-3.com',
    },
    {
        titulo: 'Proyecto 4',
        descripcion: 'Descripción del proyecto 3.',
        link: 'https://enlace-a-tu-proyecto-3.com',
      },
      {
        titulo: 'Proyecto 5',
        descripcion: 'Descripción del proyecto 3.',
        link: 'https://enlace-a-tu-proyecto-3.com',
      },
      {
        titulo: 'Proyecto 6',
        descripcion: 'Descripción del proyecto 3.',
        link: 'https://enlace-a-tu-proyecto-3.com',
      },
  ];

  return (
    <div className="inicio">
      <div className="content">
        <h1 className="nombre">ALEJANDRO PATRICIO QUIROGA</h1>
        <div className="foto-container">
          <img 
            src="/foto.jpg" 
            alt="Tu nombre" 
            className="foto"
          />
        </div>
        <p className="descripcion">Desarrollador web, apasionado por crear aplicaciones eficientes y elegantes.</p>
      </div>
      
      
    </div>
  );
};

export default Inicio;
