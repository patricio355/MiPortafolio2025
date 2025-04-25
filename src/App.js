import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import './App.css';
import SobreMi from './components/SobreMi';
import Proyecto from './components/Proyecto'; 
import Contacto from './components/Contacto';
function App() {
  const proyectos = [
    {
      titulo: 'Liga de Futbol',
      descripcion: 'Cree una app que ayuda a la administracion de una liga de futbol, usando React,NodeJs,MySql',
      link: 'https://github.com/patricio355/Liga-de-futbol.git',
    },
    {
      titulo: 'PelisRat',
      descripcion: 'Esta es una app que sirve para ver detalles de peliculas y trailers, fue mi primera interaccion con apis, use Angular y me ayude de PostMan',
      link: 'https://github.com/patricio355/hola.git',
    },
    {
      titulo: 'Mobirise',
      descripcion: 'Este sitio lo realize como practica para conocer Mobirise, una buena experiencia creando paginas estaticas con la herramienta',
      link: 'https://github.com/patricio355/Mobirise2024.git',
    },
    {
        titulo: 'Reserva de mesas',
        descripcion: 'Proyecto final de una materia , donde vimos como conectar frontend (Angular), backend (Nodejs)  con BD Mongo, se sentra en la administracion de reservas en un restaurante',
        link: 'https://github.com/patricio355/Reserva-de-mesas.git',
      },
      {
        titulo: 'MercadoLiebreDH',
        descripcion: 'Pagina realizada para un curso de Desarrollo Web, mis primeras practicas usando HTML,CSS emulando ML.',
        link: 'https://github.com/patricio355/mercadoLiebreDH.git',
      },
      {
        titulo: 'Tienda de Ropa',
        descripcion: 'App para administración de tienda de ropa, usando EJS,CSS,JAVASCRIPT y base de datos precargada.',
        link: 'https://github.com/patricio355/grupo_7_TheChill.git',
      },

      {
        titulo: 'Dashboard de Tienda de ropa',
        descripcion: 'Mi primer Dashboard usando React , me ayudo a conocer la biblioteca Tailwind CSS que es ahora una de las que mas uso.',
        link: 'https://github.com/patricio355/React-Thechill.git',
      },

      {
        titulo: 'Ticketera',
        descripcion: 'App para administracion de compra de tickets para estadios, mi primera experiencia usando Angular',
        link: 'https://github.com/patricio355/Ticketera.git',
      },

      {
        titulo: 'Candidatos',
        descripcion: 'App para administracion de postulantes a presidente, esta app me sirvio para entender lo que es un ABM y así poder empezar con apps de adminisitración trabajando en grupo',
        link: 'https://github.com/CarlosCommit/TpEvaluativo',
      },


  ];
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <section id="perfil">
        <Inicio />
        </section>
        <section id="proyectos">
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
      </section>
      <section id='sobre-mi'>
        <SobreMi />
        </section>

      <section id='contacto'>
        <Contacto/>
      </section>
      </div>
    </div>
  );
}

export default App;
