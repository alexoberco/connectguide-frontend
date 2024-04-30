import React, { useState } from 'react';
import '../styles/AgregarServicio.css'; 
import SelectGuideModal from './SelectGuideModal';
import { useNavigate } from 'react-router-dom';



function AgregarServicio() {
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState({
    nombre: '',
    descripcion: '',
    ubicacion: '',
    fecha: '',
    horaInicio: '',
    horaFinal: '',
    guia: '',
    imagen: null
  });

  const [showModal, setShowModal] = useState(false);
  const [guides] = useState([
    { id: 1, nombre: 'John Doe', username: 'johndoe' },
    { id: 2, nombre: 'Jane Smith', username: 'janesmith' }
  ]); // Esto debería venir de la API en el futuro

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setServiceData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (event) => {
    setServiceData(prevState => ({
      ...prevState,
      imagen: event.target.files[0]
    }));
  };


  const handleSelectGuide = (guide) => {
    setServiceData(prevState => ({
      ...prevState,
      guia: `${guide.nombre} (${guide.username})`
    }));
    setShowModal(false); // Cierra el modal después de seleccionar un guía
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se maneja el envío del formulario a el backend
    console.log(serviceData);
    // Simular envío exitoso y redirección
    navigate('/services');
  };

  return (
    <div className="form-container">
      <h1>Agregar Servicio</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={serviceData.nombre} onChange={handleInputChange} required />
        </label>
        <label>
          Descripción:
          <input type="text" name="descripcion" value={serviceData.descripcion} onChange={handleInputChange} required />
        </label>
        <label>
          Ubicación:
          <input type="text" name="ubicacion" value={serviceData.ubicacion} onChange={handleInputChange} required />
        </label>
        <label>
          Fecha:
          <input type="date" name="fecha" value={serviceData.fecha} onChange={handleInputChange} required />
        </label>
        <label>
          Hora Inicio:
          <input type="time" name="horaInicio" value={serviceData.horaInicio} onChange={handleInputChange} required />
        </label>
        <label>
          Hora Final:
          <input type="time" name="horaFinal" value={serviceData.horaFinal} onChange={handleInputChange} required />
        </label>
        <label>
          Guía (opcional):
          <input type="text" name="guia" value={serviceData.guia} onClick={() => setShowModal(true)} readOnly />
        </label>
        <label>
          Imagen:
          <input type="file" name="imagen" onChange={handleImageChange} />
        </label>
        <button type="submit">Agregar Servicio</button>
      </form>
      {showModal && <SelectGuideModal guides={guides} onSelect={handleSelectGuide} onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default AgregarServicio;
