import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginPage() {
  let navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Aquí implementarías la lógica de validación de inicio de sesión
    // Supongamos que el inicio es exitoso:
    navigate('/services');  // Redirige a la vista de servicios
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Correo o Usuario</label>
          <input type="text" id="email" name="email" placeholder="pabloperez@gmail.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="**********" required />
        </div>
        <button type="submit" className="login-btn">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default LoginPage;
