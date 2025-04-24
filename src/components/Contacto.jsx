import React, { useState } from 'react';
import './Contacto.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario (como enviar los datos a un servidor)
    console.log("Formulario enviado", { nombre, mensaje });
  };

  return (
    <div className='contacto-container'>
      <div className='contacto-titulo'>
        <h1>Contacto</h1>
      </div>
      <div className="social-links">
                  <a href="https://github.com/patricio355" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                  </a>
                  <a href="https://www.linkedin.com/in/alejandro-patricio-quiroga-4b6892210/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                  </a>
                  <a href="https://wa.me/+5493885081738" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={30} />
                  </a>
                  <a href="https://instagram.com/patricioquiroga35" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                  </a>
                </div>
      
      <div className='contacto-cuerpo'>
        <form onSubmit={handleSubmit} className='contacto-form'>
          <div className='form-group'>
            <label htmlFor='nombre'>Nombre:</label>
            <input
              type='text'
              id='nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='mensaje'>Mensaje:</label>
            <textarea
              id='mensaje'
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
             
              rows='5'
              required
            />
          </div>
          <button type='submit' className='enviar-btn'>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
