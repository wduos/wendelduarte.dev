import { useState, useEffect, useRef } from "react";

import TechLabel from "../../components/TechLabel/TechLabel";

import BYULogo from "../../assets/byu-logo.png";
import profile from "../../assets/profile.png";
import logoFlatLight from "/w-logo-flat-light.svg";
import logoFlatDark from "/w-logo-flat-dark.svg";
import dsvLogo from "../../assets/dsv-mono-logo.svg";
import valeLogo from "../../assets/vale-mono-logo.svg";
import geeoLogo from "../../assets/geeo-mono-logo.svg";

import "./Home.css";

export default function Home() {
  const [playerIsWide, setPlayerIsWide] = useState(false);

  const [isConsoleVisible, setIsConsoleVisible] = useState(false);
  const consoleRef = useRef(null);

  const fullCommand = "projects list -a";
  const [typedCommand, setTypedCommand] = useState("");
  const [phase, setPhase] = useState("idle");

  const spinnerFrames = ["/", "-", "\\", "|"];
  const [spinnerIndex, setSpinnerIndex] = useState(0);

  const [projectsAreVisible, setProjectsAreVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsConsoleVisible(true);
          setPhase("typing");
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (consoleRef.current) {
      observer.observe(consoleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;

    if (typedCommand.length < fullCommand.length) {
      const timeout = setTimeout(() => {
        setTypedCommand(fullCommand.slice(0, typedCommand.length + 1));
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setPhase("fetching"), 400);
      return () => clearTimeout(timeout);
    }
  }, [typedCommand, phase]);

  useEffect(() => {
    if (phase !== "fetching") return;

    const timeout = setTimeout(() => {
      setPhase("spinning");
    }, 600);

    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "spinning") return;

    const interval = setInterval(() => {
      setSpinnerIndex((prev) => (prev + 1) % spinnerFrames.length);
    }, 120);

    const stopTimeout = setTimeout(() => {
      clearInterval(interval);
      setPhase("done");
      setProjectsAreVisible(true);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(stopTimeout);
    };
  }, [phase]);

  const renderTypedCommand = () => {
    return (
      <>
        <span className="accent-alt1">
          {typedCommand.startsWith("projects") ? "projects" : typedCommand}
        </span>
        {typedCommand.length > 8 && (
          <>
            {" list "}
            <span className="dim">{typedCommand.slice(13)}</span>
          </>
        )}
      </>
    );
  };

  const calculateAge = (dateString) => {
    const today = new Date();
    const birthDateObj = new Date(dateString);

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    return age;
  };

  const age = calculateAge("1998-01-10");

  return (
    <div className="HomeScreen">
      <section className="banner">
        <div className="profile-card-wrp limiter">
          <img id="logo-w-light" src={logoFlatLight} alt="logo W light" />
          <div id="card-img-mask"></div>
          <div id="card-img"></div>
          <div id="card-info">
            <img src={profile} alt="imagem de perfil" />
            <div>
              <h1 className="quicksand">Wendel Duarte dos Santos</h1>
              <h2 className="quicksand">Desenvolvedor de Software</h2>
              <div className="d-flex-center-center">
                <h3 className="quicksand">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M119.7 263.7L150.6 294.6C156.6 300.6 164.7 304 173.2 304L194.7 304C203.2 304 211.3 307.4 217.3 313.4L246.6 342.7C252.6 348.7 256 356.8 256 365.3L256 402.8C256 411.3 259.4 419.4 265.4 425.4L278.7 438.7C284.7 444.7 288.1 452.8 288.1 461.3L288.1 480C288.1 497.7 302.4 512 320.1 512C337.8 512 352.1 497.7 352.1 480L352.1 477.3C352.1 468.8 355.5 460.7 361.5 454.7L406.8 409.4C412.8 403.4 416.2 395.3 416.2 386.8L416.2 352.1C416.2 334.4 401.9 320.1 384.2 320.1L301.5 320.1C293 320.1 284.9 316.7 278.9 310.7L262.9 294.7C258.7 290.5 256.3 284.7 256.3 278.7C256.3 266.2 266.4 256.1 278.9 256.1L313.6 256.1C326.1 256.1 336.2 246 336.2 233.5C336.2 227.5 333.8 221.7 329.6 217.5L309.9 197.8C306 194 304 189.1 304 184C304 178.9 306 174 309.7 170.3L327 153C332.8 147.2 336.1 139.3 336.1 131.1C336.1 123.9 333.7 117.4 329.7 112.2C326.5 112.1 323.3 112 320.1 112C224.7 112 144.4 176.2 119.8 263.7zM528 320C528 285.4 519.6 252.8 504.6 224.2C498.2 225.1 491.9 228.1 486.7 233.3L473.3 246.7C467.3 252.7 463.9 260.8 463.9 269.3L463.9 304C463.9 321.7 478.2 336 495.9 336L520 336C522.5 336 525 335.7 527.3 335.2C527.7 330.2 527.8 325.1 527.8 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
                  </svg>
                  Brasil
                </h3>
                <h3 className="quicksand">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
                  </svg>
                  Joinville/SC
                </h3>
                <h3 className="quicksand">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M184 120C184 89.1 209.1 64 240 64L264 64C281.7 64 296 78.3 296 96L296 544C296 561.7 281.7 576 264 576L232 576C202.2 576 177.1 555.6 170 528C169.3 528 168.7 528 168 528C123.8 528 88 492.2 88 448C88 430 94 413.4 104 400C84.6 385.4 72 362.2 72 336C72 305.1 89.6 278.2 115.2 264.9C108.1 252.9 104 238.9 104 224C104 179.8 139.8 144 184 144L184 120zM456 120L456 144C500.2 144 536 179.8 536 224C536 239 531.9 253 524.8 264.9C550.5 278.2 568 305 568 336C568 362.2 555.4 385.4 536 400C546 413.4 552 430 552 448C552 492.2 516.2 528 472 528C471.3 528 470.7 528 470 528C462.9 555.6 437.8 576 408 576L376 576C358.3 576 344 561.7 344 544L344 96C344 78.3 358.3 64 376 64L400 64C430.9 64 456 89.1 456 120z" />
                  </svg>
                  INFP-T
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about limiter mrg-block mrg-top-2">
        <h2 className="section-title d-block quicksand">Olá, mundo!</h2>
        <h3 className="section-subtitle quicksand">
          Um pouco sobre quem eu sou
        </h3>

        <p className="mrg-block">
          Com {age} anos, sou de Macapá - AP e vivo no Sul do País desde 2017.
          Estou buscando minha primeira oportunidade em TI, com foco em
          programação, área na qual venho me aprofundando desde 2021.
        </p>
        <p>
          Quando não estou programando, você provavelmente me encontrará tocando
          violão ou guitarra, quebrando a cabeça com projetos de eletrônica,
          jogando videogame, estudando algo novo ou na academia.
        </p>

        <p className="micro-title mrg-top-1">Tecnologias</p>
        <div className="d-flex-center-gap mrg-block">
          <TechLabel techName="html" />
          <TechLabel techName="css" />
          <TechLabel techName="javascript" />
          <TechLabel techName="react" />
          <TechLabel techName="electron" />
          <TechLabel techName="node" />
          <TechLabel techName="git" />
          <TechLabel techName="linux" />
          <TechLabel techName="windows" />
          <TechLabel techName="pi" />
        </div>

        <p className="micro-title mrg-top-1">Educação</p>
        <div className="edu-card mrg-top">
          <img className="img-m radius" src={BYULogo} alt="byu-icon" />

          <div>
            <h4 className="generic-title">BYU Pathway Worldwide</h4>
            <p>Software Development</p>
            <small className="dim">Associate Degree &bull; 2026 - 2028</small>
          </div>
        </div>

        <p className="micro-title mrg-top-1">Contato</p>
        <ul className="mrg-block">
          <li className="d-iflex-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" />
            </svg>
            <p>wendel.duarte@proton.me</p>
          </li>
          <li className="d-iflex-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
            </svg>
            <p>wendelduarte.dev</p>
          </li>
          <li className="d-iflex-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
            </svg>
            <p>(47) 99198-4211</p>
          </li>
          <li className="d-iflex-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M320 64C306.7 64 293.7 65 280.9 67L284.6 90.7C296.1 88.9 308 88 320 88C332 88 343.9 88.9 355.4 90.7L359.1 67C346.3 65 333.3 64 320 64zM380.8 71.3L375.1 94.6C398.5 100.3 420.5 109.5 440.5 121.7L453 101.2C430.9 87.8 406.6 77.6 380.8 71.3zM457.2 132.9C476.3 146.9 493.2 163.8 507.3 183L526.7 168.8C511 147.6 492.4 129 471.3 113.5L457.1 132.8zM538.9 187.1L518.4 199.6C530.6 219.6 539.8 241.6 545.5 265L568.8 259.3C562.5 233.5 552.3 209.2 538.9 187.1zM549.4 284.6C551.2 296.1 552.1 308 552.1 320C552.1 332 551.2 343.9 549.4 355.4L573.1 359.1C575 346.4 576.1 333.3 576.1 320C576.1 306.7 575.1 293.7 573.1 280.9L549.4 284.6zM518.4 440.5L538.9 453C552.3 430.9 562.5 406.6 568.8 380.8L545.5 375.1C539.8 398.5 530.6 420.5 518.4 440.5zM526.6 471.3L507.2 457.1C493.2 476.2 476.3 493.1 457.1 507.2L471.3 526.6C492.4 511.1 511.1 492.5 526.5 471.4zM440.5 518.3C420.5 530.5 398.5 539.7 375.1 545.4L380.8 568.7C406.6 562.4 430.9 552.2 453 538.8L440.5 518.3zM359.1 573L355.4 549.3C343.9 551.1 332 552 320 552C308 552 296.1 551.1 284.6 549.3L280.9 573C293.6 574.9 306.7 576 320 576C333.3 576 346.3 575 359.1 573zM265 545.4C247.4 541.1 230.6 534.8 214.9 526.8L207.1 522.8L174.3 530.5L179.8 553.9L204.1 548.2C221.5 557.1 240 564 259.4 568.7L265.1 545.4zM159.4 558.6L154 535.3L112.3 545C101.9 547.4 92.6 538.1 95 527.7L104.7 486.1L81.3 480.6L71.6 522.2C65.2 550 90 574.8 117.8 568.4L159.4 558.7zM109.4 465.7L117.1 432.9L113.1 425.1C105.1 409.4 98.8 392.6 94.5 375L71.3 380.7C76 400.1 82.9 418.7 91.7 436L86 460.3L109.4 465.8zM67 359.1L90.7 355.4C88.9 343.9 88 332 88 320C88 308 88.9 296.1 90.7 284.6L67 280.9C65 293.7 64 306.7 64 320C64 333.3 65 346.3 67 359.1zM94.6 265C100.3 241.6 109.5 219.6 121.7 199.6L101.2 187.1C87.8 209.2 77.6 233.5 71.3 259.3L94.6 265zM113.5 168.8L132.9 183C146.9 163.9 163.8 147 183 132.9L168.7 113.5C147.6 129 129 147.6 113.5 168.7zM199.6 121.8C219.6 109.6 241.6 100.4 265 94.7L259.2 71.3C233.4 77.6 209.1 87.8 187 101.2L199.5 121.7zM320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 356.4 121.4 390.7 137.8 420.5C139.4 423.4 139.9 426.7 139.2 429.9L117.6 522.4L210.1 500.8C213.3 500.1 216.6 500.6 219.5 502.2C249.3 518.7 283.5 528 320 528z" />
            </svg>
            <p>wendel.57</p>
          </li>
          <li className="d-iflex-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z" />
            </svg>
            <p>wduos</p>
          </li>
        </ul>

        <p className="micro-title mrg-top-1">Currículo</p>
        <div className="d-iflex wrp mrg-block">
          <p className="code">add file download</p>
        </div>
      </section>

      <section className="projects limiter mrg-block mrg-top-2">
        <h2 className="section-title quicksand">Projetos</h2>
        <h3 className="section-subtitle quicksand">
          Algumas das minhas criações
        </h3>

        <div ref={consoleRef} className="d-flex-center-center mrg-block">
          <div className="console">
            <small className="code">
              <span className="accent">wendel@browser:~/Portfolio</span>${" "}
              {isConsoleVisible ? renderTypedCommand() : ""}
              {phase === "typing" && <span className="cursor">█</span>}
            </small>

            {(phase === "fetching" ||
              phase === "spinning" ||
              phase === "done") && (
              <>
                <br />
                <small className="code">fetching list...</small>
              </>
            )}

            {phase === "spinning" && (
              <>
                <br />
                <small className="code">{spinnerFrames[spinnerIndex]}</small>
              </>
            )}

            {phase === "done" && (
              <>
                <br />
                <small className="code">✓</small>
              </>
            )}
          </div>
        </div>

        {projectsAreVisible && (
          <div className="projects">
            <div className="project">
              <div className="project-image"></div>
              <div className="project-description">
                <h2 className="generic-title quicksand bold">Label Printer</h2>
                <h3 className="section-subtitle quicksand">
                  Impressão de etiquetas Zebra facilitadas
                </h3>
                <h4 className="micro-title mrg-top">Stack</h4>
                <div className="d-flex-center-gap mrg-block">
                  <TechLabel techName="html" />
                  <TechLabel techName="css" />
                  <TechLabel techName="react" />
                  <TechLabel techName="electron" />
                  <TechLabel techName="node" />
                </div>

                <h4 className="micro-title mrg-top">Descrição</h4>
                <p>
                  Feito em <span className="bold">Electron</span> e{" "}
                  <span className="bold">React</span>. O Label Printer facilita
                  o processo de impressão de etiquetas Zebra com o layout pré
                  definido. A possibilidade de impressão em massa facilita e
                  agiliza a operação de quem depende desse processo. O rápido
                  processo de instalação do programa permite a inicialização
                  rápida e a criação de atalhos na barra de tarefas. Compatível
                  com Windows.
                </p>

                <h4 className="micro-title mrg-top">Acessível via</h4>

                <h4 className="micro-title mrg-top">Impactos</h4>
                <p>
                  Em alguns casos, houve uma redução no processo de impressão de
                  4 minutos, para 16 segundos com o programa.
                </p>
              </div>
            </div>
            <div className="project">a</div>
            <div className="project">a</div>
          </div>
        )}
      </section>

      <section className="find-my-work limiter mrg-block mrg-top-2">
        <h2 className="section-title quicksand">
          Onde meu trabalho faz a diferença
        </h2>
        <h3 className="section-subtitle quicksand">
          Alguns parceiros que utilizam minhas soluções no dia a dia
        </h3>

        <div className="customer-list-wrp d-flex-center-center mrg-block">
          <div className="d-flex-center-center sqr" title="DSV">
            <img className="img-m" src={dsvLogo} alt="logo da empresa DSV" />
          </div>
          <div className="d-flex-center-center sqr" title="Vale">
            <img className="img-m" src={valeLogo} alt="logo da empresa Vale" />
          </div>
          <div className="d-flex-center-center sqr" title="GEEO">
            <img className="img-m" src={geeoLogo} alt="logo da empresa Geeo" />
          </div>
        </div>
      </section>

      <footer>
        <div className="limiter">
          <h2 className="quicksand generic-title mrg-bottom">
            <img src={logoFlatDark} alt="Logo W" />
            Wendel Duarte dos Santos
          </h2>

          <p className="code snippet mrg-bottom">ad astra per aspera</p>

          <small className="dim quicksand">Criado com carinho ❤</small>
          <br />
          <small className="dim quicksand">
            Fotos, músicas e ilustrações de minha autoria
          </small>
          <br />
          <small className="dim quicksand">
            Crédito dos ícones para{" "}
            <a
              className="bold"
              href="https://fontawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Font Awesome
            </a>
          </small>
        </div>
      </footer>

      <div
        className={playerIsWide ? "player wide" : "player mini"}
        onClick={() => setPlayerIsWide(!playerIsWide)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M144 288C144 190.8 222.8 112 320 112C417.2 112 496 190.8 496 288L496 332.8C481.9 324.6 465.5 320 448 320L432 320C405.5 320 384 341.5 384 368L384 496C384 522.5 405.5 544 432 544L448 544C501 544 544 501 544 448L544 288C544 164.3 443.7 64 320 64C196.3 64 96 164.3 96 288L96 448C96 501 139 544 192 544L208 544C234.5 544 256 522.5 256 496L256 368C256 341.5 234.5 320 208 320L192 320C174.5 320 158.1 324.7 144 332.8L144 288zM144 416C144 389.5 165.5 368 192 368L208 368L208 496L192 496C165.5 496 144 474.5 144 448L144 416zM496 416L496 448C496 474.5 474.5 496 448 496L432 496L432 368L448 368C474.5 368 496 389.5 496 416z" />
        </svg>
      </div>
    </div>
  );
}
