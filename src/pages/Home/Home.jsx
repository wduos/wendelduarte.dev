import BYULogo from "../../assets/byu-logo.png";

import "./Home.css";

export default function Home() {
  return (
    <div className="HomeScreen">
      <section className="projects limiter mrg-block">
        <h2 className="section-title">Projetos</h2>
        <h3 className="section-subtitle">
          Sites e aplicativos que já programei
        </h3>

        <div className="d-flex-center mrg-block">
          <div className="console-wrp d-flex-center">
            <div className="console-dragbar">
              <small>Console</small>
            </div>
            <div className="console">
              <small>
                <span className="green">wendel@browser:~/Home</span>${" "}
                <span className="yellow">projects </span> list{" "}
                <span className="dim-1">-a</span>
              </small>
            </div>
          </div>
        </div>
      </section>

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
