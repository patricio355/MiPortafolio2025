import React from 'react';

import './SobreMi.css';
import TechCard from '../components/TechCard';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaAngular } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiPostgresql, SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import { SiPrometheus, SiGrafana, SiOpenai } from 'react-icons/si';
import { FaGithub, FaNodeJs, FaDocker, FaGitAlt, FaLinux, FaWindows } from 'react-icons/fa';
import { SiPostman, SiSpring, SiEclipseide } from 'react-icons/si';
const SobreMi = () => {
  return (
    <div>
      <h2>Sobre mí</h2>
      <section className="sobre-mi">

        <div className="sobre-mi-cuadro">

        <p>
  Soy estudiante avanzado de la carrera de Analista Programador Universitario en la Facultad de Ingeniería de Jujuy,
  con solo cinco materias pendientes para completar mi formación.
</p>
<p>
  Me apasiona el desarrollo de software y he adquirido experiencia trabajando en proyectos personales que abarcan desde la creación de aplicaciones web hasta la gestión de bases de datos. He trabajado con metodologías ágiles como Scrum en cursos de formación y prácticas en la facultad.
</p>
<p>
  He desarrollado proyectos utilizando tecnologías como React, Angular, Node.js, Spring, Docker, entre otras, tanto de manera individual como en equipo. Tengo un fuerte enfoque en la calidad del código, el trabajo colaborativo y la mejora continua. Durante mis años en la facultad, pude adquirir los conocimientos necesarios para abordar proyectos tanto en el área de desarrollo como en el área de análisis.
</p>
<p>
  Estoy en constante aprendizaje, mejorando mis habilidades técnicas y de gestión, con el objetivo de contribuir de manera significativa a proyectos tecnológicos.
</p>


        
          
        </div>
        <div className="tecnol">
          <h1>Tecnologías</h1>
          <div className="tecnol-icons">
            {/* Lenguajes de Programación */}
            <TechCard IconComponent={FaJava} color="#007396" />
            <TechCard IconComponent={SiCplusplus} color="#00599C" />
            <TechCard IconComponent={FaJs} color="#F7DF1E" />

            {/* Base de datos y React */}
            <TechCard IconComponent={FaReact} color="#61DAFB" />
            <TechCard IconComponent={SiMysql} color="#4479A1" />
            <TechCard IconComponent={SiPostgresql} color="#336791" />
            <TechCard IconComponent={SiMongodb} color="#47A248" />

            {/* Desarrollo Web */}
            <TechCard IconComponent={FaHtml5} color="#E34F26" />
            <TechCard IconComponent={FaCss3Alt} color="#1572B6" />

            {/* Frameworks */}
            <TechCard IconComponent={FaReact} color="#61DAFB" />
            <TechCard IconComponent={FaAngular} color="#DD0031" />
            <TechCard IconComponent={SiExpress} color="#28A745" />

            {/* Bibliotecas */}
            <TechCard IconComponent={FaBootstrap} color="#7952B3" />
            <TechCard IconComponent={SiTailwindcss} color="#06B6D4" />


            <TechCard IconComponent={FaNodeJs} color="#339933" />
            <TechCard IconComponent={FaDocker} color="#2496ED" />
            <TechCard IconComponent={SiPrometheus} color="#E6522C" />
            <TechCard IconComponent={SiGrafana} color="#F46800" />
            <TechCard IconComponent={FaGitAlt} color="#F05032" />
            <TechCard IconComponent={FaGithub} color="#000000" />
            <TechCard IconComponent={FaLinux} color="#FCC624" />
            <TechCard IconComponent={FaWindows} color="#0078D6" />
            <TechCard IconComponent={SiOpenai} color="#412991" />
            <TechCard IconComponent={SiPostman} color="#FF6C37" />  {/* Postman */}
            <TechCard IconComponent={SiSpring} color="#6DB33F" />  {/* Spring */}
            <TechCard IconComponent={SiEclipseide} color="#2C2255" />  {/* STS / Modelio (Eclipse) */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreMi;
