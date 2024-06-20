import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import cardData from '../../Js/cardData';

function Section4() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleShow = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  // Filtrar datos de las cards con ids específicos
  const filteredCardData = cardData.filter(service => service.id === 7 || service.id === 8 || service.id === 9);

  return (
    <section className="fondo-blanco centrar-contenido">
      <h2 className="titulosh1">Servicios de Recursos Humanos</h2>
      <h3 className="centrar-texto espacio-texto">Todas las herramientas que necesitas para que tu empresa crezca de la mejor manera</h3>

      <div className="card-container2">
        {filteredCardData.map(service => (
          <div key={service.id} className="card-principal">
            <img src={service.imageUrl} alt={service.title} className="imagen-redonda" />
            <h3 className="titulosh1">{service.title}</h3>
            <h4 className="titulosh1">Valor: {service.value}</h4>
            <button className="BotonesP" onClick={() => handleShow(service)}><h3>Comprar</h3></button>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        {selectedService && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedService.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-content">
                <img src={selectedService.imageUrl} alt={selectedService.title} style={{ float: 'left', marginRight: '20px', maxWidth: '150px' }} />
                <p dangerouslySetInnerHTML={{ __html: selectedService.description }}></p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Volver</Button>
              <Button variant="primary">Comprar</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <div className='centrar-contenido espacio-texto'>
        <NavLink to="/"><button className="BotonesS"><h3>Volver</h3></button></NavLink>
      </div>
    </section>
  );
}

export default Section4;

