import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import './App.css';
import SobreMi from './components/SobreMi';
import Proyecto from './components/Proyecto'; // Importa el componente Proyecto

function App() {
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
    <div className="App">
      <div className="container">
        <Navbar />
        
        <Inicio />
        <h2 className="proyectos-titulo">Mis Proyectos</h2>
      <div className="proyectos-container">
        <div className="proyectos">
          {proyectos.map((proyecto, index) => (
            <Proyecto
              key={index}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              link={proyecto.link}
            />
          ))}
        </div>
      </div>
        <SobreMi />
       
      </div>
    </div>
  );
}

export default App;
