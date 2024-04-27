import React from 'react';
import Header from './Header'; // Ajusta la ruta según sea necesario
import '../styles/LandingPage.css';

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="content">
        <h1 className="title">Quiénes Somos</h1>
        <p className="subtitle">Conectando corazones, explorando destinos juntos.</p>
      </div>
      <div className="images-container">
        <img src="https://i.redd.it/3m0n2rd1q2i61.jpg" alt="Destino turístico" />
        <img src="https://www.costaricavibes.com/wp-content/uploads/9-69-768x448.jpg" alt="paisaje" />
      </div>

      <div className="welcome-text">
        <p>¡Bienvenido a nuestra comunidad de pequeños operadores turísticos!</p>
        <p>En ConnectGuide, nos enorgullecemos de apoyar a los pequeños operadores turísticos en su misión de ofrecer experiencias únicas y memorables a los viajeros de todo el mundo.</p>
        <p>Únete a nosotros en este viaje hacia un turismo más inclusivo, sostenible y auténtico. Juntos, podemos hacer que cada experiencia turística sea inolvidable.</p>
        <p>¡Gracias por formar parte de nuestra comunidad!<br />El equipo de ConnectGuide</p>
      </div>
    </div>
  );
}

export default LandingPage;


