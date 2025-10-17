import { useState } from "react";
import Button from "./boton";

function Calculator() {
  const [input, setContador] = useState("");
  const [expression, setExpression] = useState("");


  function addValue(value) {
    setContador(input + value);
  }

    function escribirOperador(op) {
    if (input !== "") {
      setExpression(expression + input + op);
      setContador("");
    }
  }

  function clearAll() {
    setContador("");
  }


  function calculate() {
    try {
      const operacion = expression + input;
      const result = eval(operacion);
      setContador(result.toString());
      setExpression("");
    } catch (error) {
      setContador("Error");
      setExpression("");
    }
  }

  return (
    <div className="calculator">
      <div className="display">{input === "" ? " " : input}</div>

      <div className="buttons">

        <Button onClick={() => escribirOperador("/")} className="btn operator"> / </Button>
        <Button onClick={() => escribirOperador("*")} className="btn operator"> * </Button>
        <Button onClick={() => escribirOperador("-")} className="btn operator"> - </Button>
        <Button onClick={() => escribirOperador("+")} className="btn operator"> + </Button>
  
        <Button onClick={() => addValue("1")} className="btn number"> 1 </Button>
        <Button onClick={() => addValue("2")} className="btn number"> 2 </Button>
        <Button onClick={() => addValue("3")} className="btn number"> 3 </Button>
        <Button onClick={() => addValue("4")} className="btn number"> 4 </Button>

        <Button onClick={() => addValue("5")} className="btn number"> 5 </Button>
        <Button onClick={() => addValue("6")} className="btn number"> 6 </Button>
        <Button onClick={() => addValue("7")} className="btn number"> 7 </Button>
        <Button onClick={() => addValue("8")} className="btn number"> 8 </Button>

        <Button onClick={() => addValue("9")} className="btn number"> 9 </Button>
        <Button onClick={() => addValue("0")} className="btn number"> 0 </Button>
        <Button onClick={clearAll} className="btn clear"> C </Button>
        <Button onClick={calculate} className="btn equal"> = </Button>

      </div>
    </div>
  );
}

export default Calculator;
