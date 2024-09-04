import React from "react";
import "leaflet/dist/leaflet.css";
import "../banner/banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaWhatsapp } from "react-icons/fa"; // Importe o ícone do WhatsApp

function Banner() {
  return (
    <div className="App">
      <div className="aboutus-section">
        <div className="aboutus-text">
          <h2>
            <s>De: R$ 1.199,00</s>
            <br />
            Por: R$ 600,00
            <p>Em até 6x sem juros!</p>
          </h2>
          <h2> Pague apenas:</h2>
          <h1>R$ 100,00/mês*</h1>
          <h2>Inclui:</h2>
          <li>Certificado de Qualificação</li>
          <li>Diploma de Nível Técnico</li>
          <li>Direito ao CRECI</li>
          {/*<p>Modalidade: EAD</p> */}
          <p>Entre em contato diretamente com a corretora Rita Leite!</p>
          {/* Substituição do botão por um ícone de WhatsApp */}
          <a
            href="https://api.whatsapp.com/send/?phone=5511970753810&text=Olá!"
            className="whatsapp-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} /> {/* Tamanho do ícone */}
          </a>
          <h3>*(Oferta exclusiva RG Lançamentos)</h3>
        </div>
      </div>
      <div className="banner" id="home">
        <div className="banner-content">
          <div className="corretor-section">
            <h2>
              Uma parceria autorizada de vendas do Instituto Monitor. Matrículas
              abertas!
            </h2>
            <h1 className="creci-tti">Corretor Creci TTI</h1>

            {/*<a href="/pagina-de-matricula" className="matricule-se-button">*/}
            {/*  Matricule-se*/}
            {/*</a>*/}
            {/*<h2>CORRETOR CRECI TTI</h2>*/}
            <p>✔️ Duração de 6 meses</p>
            <p>✔️ Nível técnico com diploma reconhecido em todo Brasil</p>
            <p>✔️ Carteira de estágio para início imediato</p>
            <p>
              ✔️ Aulas 100% online e provas presenciais no Polo de sua cidade
            </p>
            <br/>
            <b>Entre em contato diretamente com a corretora Rita Leite!</b>

            {/*<a href="/saiba-mais" className="saiba-mais-button">*/}
            {/*		Saiba mais*/}
            {/*</a>*/}
            
            <div className="corretor-section2">
            <a
            href="https://api.whatsapp.com/send/?phone=5511970753810&text=Olá!"
            className="whatsapp-icon1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} /> {/* Tamanho do ícone */}
          </a>
              {/*<p>
                Somos uma empresa parceira/autorizada de vendas do
                <b> INSTITUTO MONITOR</b>. Compre com segurança e pague o MENOR
                PREÇO. Em caso de dúvidas confira nosso cadastro diretamente no
                site oficial do Instituto Monitor através do telefone
                Atendimento/vendas. Meu código de convênio é C1131C.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
