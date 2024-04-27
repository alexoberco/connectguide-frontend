import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import '../styles/ServicesView.css';  // Estilos comunes para la vista de servicios

function ServicesView({ userRole }) {
  const services = [
    { id: 1, name: 'Senderismo', duration: '2 horas', image: 'https://fotografias.lasexta.com/clipping/cmsimages01/2022/08/16/E8792B25-EE3C-4C06-BDC8-A64D69D892F2/20-mejores-rutas-senderismo-mundo-espanola_98.jpg?crop=522,294,x0,y17&width=1900&height=1069&optimize=low&format=webply' },
    { id: 2, name: 'Parapente', duration: '4 horas', image: 'https://img.freepik.com/fotos-premium/hermoso-vuelo-parapente-al-atardecer_146714-601.jpg' },
    { id: 1, name: 'Senderismo', duration: '2 horas', image: 'https://fotografias.lasexta.com/clipping/cmsimages01/2022/08/16/E8792B25-EE3C-4C06-BDC8-A64D69D892F2/20-mejores-rutas-senderismo-mundo-espanola_98.jpg?crop=522,294,x0,y17&width=1900&height=1069&optimize=low&format=webply' },
    { id: 2, name: 'Parapente', duration: '4 horas', image: 'https://img.freepik.com/fotos-premium/hermoso-vuelo-parapente-al-atardecer_146714-601.jpg' }
  ];

  const navigate = useNavigate(); // Inicializar navigate

  const handleAddServiceClick = () => {
    navigate('/add-service'); // Navegar a la ruta de agregar servicio
  };

  return (
    <div className="services-container">
      <h1>Servicios Disponibles</h1>
      <div className="services-view">
        {services.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
      {userRole === 'operador' && (
        <div className="add-service-button-container">
          <button className="add-service-button" onClick={handleAddServiceClick}>Agregar Servicio</button>
        </div>
      )}
    </div>
  );
}

export default ServicesView;