import React from 'react';
import '../styles/ServiceCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function ServiceCard({ name, duration, image, onEdit, onDelete }) {
  return (
    <div className="service-card">
      <img src={image} alt={name} />
      <div className="service-info">
        <strong>{name}</strong>
        <span>Duración apróx: {duration}</span>
      </div>
      <div className="icon-container">
        <button onClick={onEdit} className="icon-button">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={onDelete} className="icon-button">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
