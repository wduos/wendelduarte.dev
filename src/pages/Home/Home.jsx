import BYULogo from "../../assets/byu-logo.png";

import "./Home.css";

export default function Home() {
  return (
    <div className="HomeScreen">
      <section className="education limiter mrg-block">
        <h2 className="section-title">Educação</h2>
        <h3 className="section-subtitle">Estudos e formação</h3>

        <div className="edu-card wrp mrg-block">
          <img className="img-m d-iblock" src={BYULogo} alt="byu-icon" />

          <div>
            <h4 className="generic-title">BYU Pathway Worldwide</h4>
            <p>Software Development</p>
            <small className="dim">Associate Degree &bull; 2026 - 2028</small>
          </div>
        </div>
      </section>

      <section className="find-my-work limiter mrg-block">
        <h2 className="section-title">Onde meu trabalho faz diferença</h2>
        <h3 className="section-subtitle">
          Parceiros e organizações que utilizam minhas soluções no dia a dia.
        </h3>

        <div className="customer-list-wrp d-flex-center mrg-block">
          <div className="d-flex-center wrp sqr" title="DSV">
            D
          </div>
          <div className="d-flex-center wrp sqr" title="Vale">
            V
          </div>
          <div
            className="d-flex-center wrp sqr"
            title="Kakaroto Sushi Delivery"
          >
            K
          </div>
          <div className="d-flex-center wrp sqr" title="GEEO+">
            G
          </div>
        </div>
      </section>

      <section className="contact limiter mrg-block">
        <h2 className="section-title">Contato</h2>
        <h3 className="section-subtitle">Onde me encontrar</h3>
      </section>
    </div>
  );
}
