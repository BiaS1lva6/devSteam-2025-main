import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>DevSteam</h2>
          <p>Explore, jogue e conecte-se com os melhores jogos da DevSteam.</p>
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Jogos</a>
            </li>
            <li>
              <a href="#">Comunidade</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <i class="bi bi-instagram"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-twitter-x"></i>
            <i class="bi bi-threads"></i>
            <i class="bi bi-tiktok"></i>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h3>Formas de Pagamento</h3>
        <div className="payment-icons">
          <img src="/public/visa2.jpg" alt="Visa" />
          <img src="/public/master.png" alt="Mastercard" />
          <img src="/public/pix4.png" alt="Pix" />
          <img src="/public/boleto2.png" alt="Boleto" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 DevSteam. Todos os direitos reservados,.</p>
      </div>
    </footer>
  );
};

export default Footer;
