import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './SobreMi.css';
const SobreMi = () => {
  return (
    <section className="sobre-mi">
      <div className="sobre-mi-cuadro">
        <h2>Sobre mí</h2>
        <p>
          Soy estudiante avanzado de la carrera de Analista Programador Universitario en la Facultad de Ingeniería, 
          con solo 5 materias pendientes para completar mi formación. Me apasiona el desarrollo de software y he adquirido 
          experiencia trabajando en proyectos que abarcan desde la creación de aplicaciones web hasta la gestión de bases 
          de datos y la implementación de metodologías ágiles como Scrum.
        </p>
        <p>
          He desarrollado proyectos utilizando tecnologías como <strong>React</strong>, <strong>Node.js</strong>, 
          <strong>Spring</strong>, <strong>Docker</strong>, y <strong>MySQL</strong>, tanto de manera individual como en equipo. 
          Tengo un fuerte enfoque en la calidad del código, el trabajo colaborativo y la mejora continua. Además, me he 
          desempeñado en roles como desarrollador y soporte técnico, siempre buscando soluciones eficientes y escalables.
        </p>
        <p>
          Estoy en constante aprendizaje, mejorando mis habilidades técnicas y de gestión, con el objetivo de contribuir 
          de manera significativa a proyectos tecnológicos que aporten valor y optimicen procesos.
        </p>

        <h3>Conéctate conmigo</h3>
        <div className="social-links">
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
