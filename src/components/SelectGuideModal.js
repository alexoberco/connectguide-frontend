// components/SelectGuideModal.js
import React from 'react';

function SelectGuideModal({ guides, onSelect, onClose }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <h2>Seleccionar Guía</h2>
        <ul>
          {guides.map(guide => (
            <li key={guide.id} onClick={() => onSelect(guide)}>
              {guide.nombre} - {guide.username}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default SelectGuideModal;
