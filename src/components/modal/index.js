import React from "react";
import "leaflet/dist/leaflet.css";
import "../modal/modal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaWhatsapp } from "react-icons/fa"; 
function Modal() {
  return (
    <div className="modal-container">
      <div className="modal-text">
        <div className="modal-price">
          <h3>
            <s>De: R$ 1.199,00</s>
          </h3>
          <h2> Por: R$ 600,00</h2>
          <h3>Em até 6x sem juros!</h3>
          <div className="modal-info">
            <h3>Fale diretamente com a corretora Rita Leite!</h3>
          </div>
        </div>

        {/* Ícone do WhatsApp como link */}
        <FaWhatsapp
          className="whatsapp-icon"
          onClick={() =>
            (window.location.href =
              "https://api.whatsapp.com/send/?phone=5511970753810&text=Olá!")
          }
        />

        <br />
        <p>*(Oferta exclusiva RG Lançamentos)</p>
      </div>
    </div>
  );
}

export default Modal;
