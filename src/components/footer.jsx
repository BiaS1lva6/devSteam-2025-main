function Footer() {
    return (
      <footer className="footer py-5 px-4">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-3 footer-section">
              <h2>DevSteam</h2>
              <p>Explore, jogue e conecte-se com os melhores jogos da DevSteam.</p>
            </div>
  
            <div className="col-md-3 footer-section">
              <h3>Links</h3>
              <ul className="list-unstyled">
                <li><a href="#">Início</a></li>
                <li><a href="#">Jogos</a></li>
                <li><a href="#">Comunidade</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>
  
            <div className="col-md-3 footer-section">
              <h3>Siga-nos</h3>
              <div className="d-flex gap-3 social-icons">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-youtube"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-threads"></i>
                <i className="bi bi-tiktok"></i>
              </div>
            </div>
  
            <div className="col-md-3 footer-section">
              <h3>Formas de Pagamento</h3>
              <div className="d-flex gap-3 align-items-center payment-icons">
                <img src="/public/visa2.jpg" alt="Visa" />
                <img src="/public/master.png" alt="Mastercard" />
                <img src="/public/pix4.png" alt="Pix" />
                <img src="/public/boleto2.png" alt="Boleto" />
              </div>
            </div>
          </div>
  
          <div className="footer-bottom text-center pt-3 mt-4">
            <p>&copy; 2025 DevSteam. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  