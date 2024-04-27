// Header.js
import React from 'react';
import '../styles/Header.css'; // Asegúrate de tener el archivo CSS en la ruta correcta

function Header() {
    return (
        <div className="navbar">
            <div className="right-section">
                <div className="brand">ConnectGuide</div>
            </div>
            <div className="left-section">
                <a href="/login" className="nav-link">Iniciar Sesión</a>
                <a href="/register" className="nav-link">Registrarse</a>
            </div>
        </div>
    );
}

export default Header;
