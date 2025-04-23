import React from 'react';
import './Inicio.css';
const Inicio = () => {
  

  return (
    <div className="inicio">
      <div className="perfil">
        <div className="foto-container">
          <img src="/foto.jpg" alt="Tu nombre" className="foto" />
        </div>
        <div className="info">
          <h1 className="nombre">ALEJANDRO PATRICIO QUIROGA</h1>
          <p className="descripcion">Estudiante avanzado de la carrera de Analista Programador
            Universitario con conocimientos en los diferentes
            paradigmas de programación. Soy capaz de interpretar e
            implementar diseños de aplicaciones utilizando diferentes
            lenguajes de programación, aplicando pensamiento lógico y
            estructurado para garantizar su correcto funcionamiento.
            Destaco en el trabajo colaborativo, contribuyendo
            positivamente a los diferentes proyectos en los cuales
            participo.</p>
        </div>


      </div>

      <div className="habilidades">
        <div className="carta-hab">
          <div className="titulo-hab">
            <h1>Habilidades tecnicas</h1>
          </div>
          <div className='hab-t'> 
            <h5> • Lenguajes de Programacion:</h5>
        Java, C++, JavaScript.
        <h5>• Manejo de base de datos:</h5>
         MySQL, PosgrestSQL, MongoDB.
         <h5> • Desarrollo Web:</h5>
         HTML, CSS, JavaScript.
         <h5>• Frameworks:</h5>
        React.js (con Vite), AngularJS, Express (Node.js).
        <h5>• Bibliotecas: </h5>
       Bootstrap, Tailwind CSS.
       <h5>• APIs:</h5>
        Consumo y desarrollo de APIs RESTful.
          </div>

        </div>
        <div className="carta-hab">
          <div className="titulo-hab">
            <h1>Habilidades blandas</h1>
          </div>
          <div className="hab-t">
  
  <h5>• Trabajo en equipo:</h5>
  Buena colaboración con compañeros.

  <h5>• Resolución de problemas:</h5>
  Busco soluciones eficientes y creativas.

  <h5>• Adaptabilidad:</h5>
  Según las necesidades del proyecto.

  <h5>• Gestión del tiempo:</h5>
  En entornos de desarrollo Ágil.

  <h5>• Empatía:</h5>
  Tanto con compañeros como con usuarios.

  <h5>• Comunicación efectiva:</h5>
  Buena comunicación en conceptos tecnicos
</div>
        </div>

      </div>
    </div>
  );
};

export default Inicio;
