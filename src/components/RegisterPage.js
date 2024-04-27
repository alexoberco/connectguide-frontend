import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';

function RegisterPage() {
  const [rol, setRol] = useState('');
  let navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    // Aquí implementarías la lógica de registro
    // Supongamos que el registro es exitoso:
    navigate('/services');  // Redirige a la vista de servicios
  };

  const handleRolChange = (event) => {
    setRol(event.target.value);
  };

  return (
    <div className="register-container">
      <h1>Registrarse</h1>
      <form className="register-form" onSubmit={handleRegister}>
        <input type="text" placeholder="Nombres" name="nombres" required />
        <input type="text" placeholder="Apellidos" name="apellidos" required />
        <input type="email" placeholder="Correo" name="correo" required />
        <input type="text" placeholder="Nombre de usuario" name="username" required />
        <select name="rol" value={rol} onChange={handleRolChange} required>
          <option value="">Seleccionar rol...</option>
          <option value="operador">Operador</option>
          <option value="guia">Guía</option>
        </select>
        {rol === 'operador' && (
          <input type="text" placeholder="Código de empresa" name="codigoEmpresa" required />
        )}
        <input type="password" placeholder="Contraseña" name="contrasena" required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;
