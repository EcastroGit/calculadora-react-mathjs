import "./App.css";
import Pantalla from "./componentes/Pantalla";
import Boton from "./componentes/Boton";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("0");

  const agregarInput = val => {
    const operadores = "+*-/%^";
    
    if (input === "0" || input === "Syntax error") {
      setInput(val);
    } else if (val === "." && (input.slice(-1) === "." || input.slice(-2).includes("."))) {
      return;
    } else if (operadores.includes(input.slice(-1)) && operadores.includes(val)) {
      setInput(input.slice(0, -1) + val);
    } else {
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    if (input) {
      try {
        const resultado = evaluate(input);
        setInput(`${resultado}`);
      } catch (error) {
        setInput("Syntax error");
      }
    }
  };
  
  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <p style={{fontSize: "12px", margin: "auto"}}>Developed by <strong>Esteban Castro</strong></p>
        <Pantalla input={input} />
        <div className="fila">
          <Boton id="one" manejarClic={agregarInput}>
            1
          </Boton>
          <Boton id="two" manejarClic={agregarInput}>
            2
          </Boton>
          <Boton id="three" manejarClic={agregarInput}>
            3
          </Boton>
          <Boton id="add" manejarClic={agregarInput}>
            +
          </Boton>
          <Boton id="percentage" manejarClic={agregarInput}>
            %
          </Boton>
        </div>
        <div className="fila">
          <Boton id="four" manejarClic={agregarInput}>
            4
          </Boton>
          <Boton id="five" manejarClic={agregarInput}>
            5
          </Boton>
          <Boton id="six" manejarClic={agregarInput}>
            6
          </Boton>
          <Boton id="subtract" manejarClic={agregarInput}>
            -
          </Boton>
          <Boton id="power" manejarClic={agregarInput}>
            ^
          </Boton>
        </div>
        <div className="fila">
          <Boton id="seven" manejarClic={agregarInput}>
            7
          </Boton>
          <Boton id="eight" manejarClic={agregarInput}>
            8
          </Boton>
          <Boton id="nine" manejarClic={agregarInput}>
            9
          </Boton>
          <Boton id="multiply" manejarClic={agregarInput}>
            *
          </Boton>
          <Boton id="left-parenthesis" manejarClic={agregarInput}>
            (
          </Boton>
        </div>
        <div className="fila">
          <Boton id="equals" manejarClic={calcularResultado}>
            =
          </Boton>
          <Boton id="zero" manejarClic={agregarInput}>
            0
          </Boton>
          <Boton id="decimal" manejarClic={agregarInput}>
            .
          </Boton>
          <Boton id="divide" manejarClic={agregarInput}>
            /
          </Boton>
          <Boton id="right-parenthesis" manejarClic={agregarInput}>
            )
          </Boton>
        </div>
          
        <div className="fila">
          <BotonClear id="clear-last" manejarClear={() => setInput(input.slice(0, -1))}>Del</BotonClear>
          <BotonClear id="clear" manejarClear={() => setInput("0")}>AC</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
