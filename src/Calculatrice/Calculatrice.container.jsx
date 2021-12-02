import React, { useState } from "react";

import CalculatriceView from "./Calculatrice.view";

const CalculatriceContainer = () => {
  const [number, setNumber] = useState("");
  const [operator, setOperator] = useState(null);
  const [mathOperation, setMathOperation] = useState("");

  const OPERATORVALUE = {
    DIVIDE: "divide",
    ADD: "add",
    SUBSTRACTION: "substraction",
    CLEAR: "clear",
    EGAL: "egal",
  };

  const saveNumber = (e) => {
    setNumber(number.concat(e.target.value));
  };

  const operate = (e) => {
    switch (e.target.value) {
      case OPERATORVALUE.CLEAR:
        setNumber("");
        setOperator(null);
        setMathOperation("");
        break;
      case OPERATORVALUE.ADD:
        setMathOperation(OPERATORVALUE.ADD);
        setOperator(number);
        setNumber("");
        break;
      case OPERATORVALUE.EGAL:
        if (mathOperation === OPERATORVALUE.ADD) {
          setNumber(parseInt(operator, 10) + parseInt(number, 10));
        } else if (mathOperation === OPERATORVALUE.DIVIDE) {
          setNumber(parseInt(operator, 10) / parseInt(number, 10));
        } else if (mathOperation === OPERATORVALUE.SUBSTRACTION) {
          setNumber(parseInt(operator, 10) - parseInt(number, 10));
        }
        setOperator(null);
        setMathOperation("");
        break;

      case OPERATORVALUE.DIVIDE:
        setMathOperation(OPERATORVALUE.DIVIDE);
        setOperator(number);
        setNumber("");
        break;
      case OPERATORVALUE.SUBSTRACTION:
        setMathOperation(OPERATORVALUE.SUBSTRACTION);
        setOperator(number);
        setNumber("");
        break;
      default:
    }
  };
  console.log(operator);
  console.log(mathOperation);
  // as we had characters, we will need to parseInt value to have int
  return (
    <>
      <CalculatriceView
        saveNumber={saveNumber}
        number={number}
        operate={operate}
      />
    </>
  );
};

export default CalculatriceContainer;
