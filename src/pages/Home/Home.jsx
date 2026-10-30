import "./Home.css";

export default function Home() {
  return (
    <div className="HomeScreen">
      <section className="find-my-work limiter">
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
    </div>
  );
}
