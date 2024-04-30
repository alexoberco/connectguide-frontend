import React from 'react';
import '../styles/ServiceCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function ServiceCard({ id, name, duration, image, onEdit, onDelete }) {
  const navigate = useNavigate();

  // Manejador para navegar a la vista de detalle
  const handleCardClick = () => {
    navigate(`/service-detail/${id}`);
  };

  // Prevenir la propagación del evento en los botones para no activar el clic de la tarjeta
  const handleActionClick = (event, action) => {
    event.stopPropagation();
    if (action === 'edit') {
      onEdit();
    } else if (action === 'delete') {
      onDelete();
    }
  };

  return (
    <div className="service-card" onClick={handleCardClick}>
      <img src={image} alt={name} className="service-image" />
      <div className="service-info">
        <strong>{name}</strong>
        <span>Duración apróx: {duration}</span>
      </div>
      <div className="icon-container">
        <button onClick={(e) => handleActionClick(e, 'edit')} className="icon-button">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={(e) => handleActionClick(e, 'delete')} className="icon-button">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
