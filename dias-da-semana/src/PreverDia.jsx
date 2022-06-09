import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function PreverDia() {
  const [dia, setDia] = useState();
  const [semana, setSemana] = useState();
  const [calculoFinal, setCalculoFinal] = useState();

  const diaSemana = [
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    "domingo",
  ];

  // const diaSemana = {
  //   0: "segunda",
  //   1: "terca",
  //   2: "quarta",
  //   3: "quinta",
  //   4: "sexta",
  //   5: "sabado",
  //   6: "domingo",
  // };
  function calculo(semana, dia) {
    setCalculoFinal((diaSemana.indexOf(semana) + parseInt(dia)) % 7);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Prever dia da semana</h1>

        <p>Qual dia da semana?</p>
        <input
          id="semana"
          type="string"
          value={semana}
          onChange={(e) => {
            setSemana(e.target.value);
            converter();
          }}
        />

        <p>Quantos dias você quer adiar?</p>
        <input
          id="dia"
          type="number"
          value={dia}
          onChange={(e) => {
            setDia(e.target.value);
          }}
        />

        <p>O dia da Semana será</p>
        <input
          className="diaAdiado"
          id="diaAdiado"
          type="string"
          value={diaSemana[calculoFinal]}
        />
        <p>
          <button
            onClick={() => {
              calculo(semana, dia);
            }}
          >
            Calcular
          </button>
        </p>
      </header>
    </div>
  );
}

export default PreverDia;
