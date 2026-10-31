import BYULogo from "../../assets/byu-logo.png";
import profile from "../../assets/profile.png";

import "./Home.css";

export default function Home() {
  return (
    <div className="HomeScreen">
      <header>
        <h2>Header</h2>
      </header>

      <section className="banner">
        <div className="profile-card-wrp limiter">
          <div id="card-img-mask"></div>
          <div id="card-img"></div>
          <div id="card-info">
            <img src={profile} alt="imagem de perfil" />
            <div>
              <h1>Wendel Duarte dos Santos</h1>
              <h2>Desenvolvedor de Software</h2>
              <div className="d-flex-center">
                <h3>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M119.7 263.7L150.6 294.6C156.6 300.6 164.7 304 173.2 304L194.7 304C203.2 304 211.3 307.4 217.3 313.4L246.6 342.7C252.6 348.7 256 356.8 256 365.3L256 402.8C256 411.3 259.4 419.4 265.4 425.4L278.7 438.7C284.7 444.7 288.1 452.8 288.1 461.3L288.1 480C288.1 497.7 302.4 512 320.1 512C337.8 512 352.1 497.7 352.1 480L352.1 477.3C352.1 468.8 355.5 460.7 361.5 454.7L406.8 409.4C412.8 403.4 416.2 395.3 416.2 386.8L416.2 352.1C416.2 334.4 401.9 320.1 384.2 320.1L301.5 320.1C293 320.1 284.9 316.7 278.9 310.7L262.9 294.7C258.7 290.5 256.3 284.7 256.3 278.7C256.3 266.2 266.4 256.1 278.9 256.1L313.6 256.1C326.1 256.1 336.2 246 336.2 233.5C336.2 227.5 333.8 221.7 329.6 217.5L309.9 197.8C306 194 304 189.1 304 184C304 178.9 306 174 309.7 170.3L327 153C332.8 147.2 336.1 139.3 336.1 131.1C336.1 123.9 333.7 117.4 329.7 112.2C326.5 112.1 323.3 112 320.1 112C224.7 112 144.4 176.2 119.8 263.7zM528 320C528 285.4 519.6 252.8 504.6 224.2C498.2 225.1 491.9 228.1 486.7 233.3L473.3 246.7C467.3 252.7 463.9 260.8 463.9 269.3L463.9 304C463.9 321.7 478.2 336 495.9 336L520 336C522.5 336 525 335.7 527.3 335.2C527.7 330.2 527.8 325.1 527.8 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                  </svg>
                  Joinville/SC
                </h3>
                <h3>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M576 96C576 204.1 499.4 294.3 397.6 315.4C389.7 257.3 363.6 205 325.1 164.5C365.2 104 433.9 64 512 64L544 64C561.7 64 576 78.3 576 96zM64 160C64 142.3 78.3 128 96 128L128 128C251.7 128 352 228.3 352 352L352 544C352 561.7 337.7 576 320 576C302.3 576 288 561.7 288 544L288 384C164.3 384 64 283.7 64 160z" />
                  </svg>
                  Organic
                </h3>
                <h3>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M184 120C184 89.1 209.1 64 240 64L264 64C281.7 64 296 78.3 296 96L296 544C296 561.7 281.7 576 264 576L232 576C202.2 576 177.1 555.6 170 528C169.3 528 168.7 528 168 528C123.8 528 88 492.2 88 448C88 430 94 413.4 104 400C84.6 385.4 72 362.2 72 336C72 305.1 89.6 278.2 115.2 264.9C108.1 252.9 104 238.9 104 224C104 179.8 139.8 144 184 144L184 120zM456 120L456 144C500.2 144 536 179.8 536 224C536 239 531.9 253 524.8 264.9C550.5 278.2 568 305 568 336C568 362.2 555.4 385.4 536 400C546 413.4 552 430 552 448C552 492.2 516.2 528 472 528C471.3 528 470.7 528 470 528C462.9 555.6 437.8 576 408 576L376 576C358.3 576 344 561.7 344 544L344 96C344 78.3 358.3 64 376 64L400 64C430.9 64 456 89.1 456 120z" />
                  </svg>
                  Pacificador
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <small className="code">
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
        <h2 className="section-title">Onde meu trabalho faz a diferença</h2>
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
