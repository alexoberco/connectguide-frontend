import React, { useState } from 'react';
import '../styles/AgregarServicio.css'; // Asegúrate de tener este archivo de estilos

function AgregarServicio() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí manejarías el envío del formulario a tu backend
    console.log(serviceData);
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
          <input type="text" name="guia" value={serviceData.guia} onChange={handleInputChange} />
        </label>
        <label>
          Imagen:
          <input type="file" name="imagen" onChange={handleImageChange} />
        </label>
        <button type="submit">Agregar Servicio</button>
      </form>
    </div>
  );
}

export default AgregarServicio;
