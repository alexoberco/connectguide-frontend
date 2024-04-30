import React, { useState } from 'react';
import '../styles/ServiceDetail.css';
import SelectGuideModal from './SelectGuideModal'; // Importa el componente de selección de guías

function ServiceDetailView({ service }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(service.guia || '');

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleGuideSelect = (guide) => {
    setSelectedGuide(guide);
    closeModal();
  };

  return (
    <div className="service-detail-view">
      <h1>Detalle del Servicio: {service.nombre}</h1>
      <p><strong>Descripción:</strong> {service.descripcion}</p>
      <p><strong>Ubicación:</strong> {service.ubicacion}</p>
      <p><strong>Fecha:</strong> {service.fecha}</p>
      <p><strong>Hora de Inicio:</strong> {service.horaInicio}</p>
      <p><strong>Hora Final:</strong> {service.horaFinal}</p>
      <p><strong>Guía Asignado:</strong> {selectedGuide.username || 'Ninguno'}</p>
      <button onClick={openModal}>Asignar Guía</button>
      <SelectGuideModal show={showModal} onClose={closeModal} onSelect={handleGuideSelect} />
    </div>
  );
}

export default ServiceDetailView;
