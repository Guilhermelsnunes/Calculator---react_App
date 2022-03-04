import React from 'react';
import '../App.css'

function KeyPad(props) {

  const numberClick = (number) => {
    props.handleNumber(number);
  }

  const clearClick = () => {
   props.handleClear();
  }

  const operatorClick = (operator) => {
   props.handleOperator(operator)
  }

  const decimalClick = () => {
    props.handleDecimal();
  }

  return (
    <div className="buttons">
        <div className="one">
          <button id='clear' className="clear" onClick={clearClick}>C</button>
        </div>
        <div className="two">
          <button id="number7" onClick={() => numberClick('7')}>7</button>
          <button id="number8" onClick={() => numberClick('8')}>8</button>
          <button id="number9" onClick={() => numberClick('9')}>9</button>
          <button id="operator-divide" onClick={() => operatorClick('/')}>/</button>
          <button id="number4" onClick={() => numberClick('4')}>4</button>
          <button id="number5" onClick={() => numberClick('5')}>5</button>
          <button id="number6" onClick={() => numberClick('6')}>6</button>
          <button id="operator-multiply" onClick={() => operatorClick('*')}>x</button>
          <button id="number1" onClick={() => numberClick('1')}>1</button>
          <button id="number2" onClick={() => numberClick('2')}>2</button>
          <button id="number3" onClick={() => numberClick('3')}>3</button>
          <button id="operator-subtract" onClick={() => operatorClick('-')}>-</button>
          <button id="decimal" onClick={() => decimalClick()}>.</button>
          <button id="number0" onClick={() => numberClick('0')}>0</button>
          <button id="operator-equals" onClick={() => operatorClick('=')}>=</button>
          <button id="operator_add" onClick={() => operatorClick('+')}>+</button>
        </div>
        </div>
  );
}

export default KeyPad;
