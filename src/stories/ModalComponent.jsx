import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ModalComponent.css';

const ModalComponent = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className='s-button' onClick={toggleModal}>Abrir Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={toggleModal}>X</button>
            <h2 className="modal-title">{title}</h2>
            <p className="modal-content">{content}</p>
            <button className="close-button" onClick={toggleModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

ModalComponent.defaultProps = {
  title: 'Examen React',
  content: 'El modal o el drawer tienen que funcionar lo más simple posible, es decir aparecer y desaparecer con el botón cancelar, aceptar, save changes, etc y el  icono cerrar.',
};

export default ModalComponent;
