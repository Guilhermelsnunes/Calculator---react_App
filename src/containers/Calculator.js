import React, {useEffect, useState} from 'react';
import KeyPad from '../components/KeyPad';
import '../App.css';

function App() {

  const [previousTotal, setPreviousTotal] = useState(0); 
  const [runningTotal , setRunningTotal] = useState(0); 
  const [previousOperator, setPreviousOperator] = useState(null); 
  const [newTotal, setNewTotal] = useState(true); 

  const numberClick =  (number) => {
    
    let tempTotal = runningTotal;
    if ( runningTotal === 0 || newTotal){
      setPreviousTotal(runningTotal)
      tempTotal = 0
      setNewTotal(false);
    }

    setRunningTotal(parseFloat("" + tempTotal + number));
  }

  const handleDecimal = () => {
    if(!runningTotal.toString().includes("."))
    setRunningTotal(runningTotal + ".")
  }

  const clearClick = () => {
    if (runningTotal === 0) {
      setPreviousOperator(null);
      setPreviousTotal(null);
    }
    setRunningTotal(0);
  }

  const operatorClick = (operator) => {

      if (previousTotal && previousOperator) {
        switch (previousOperator) {
          case "+":
            add(runningTotal);
            break;
          case "-":
            subtract(runningTotal);
            break;
          case "*":
            multiply(runningTotal);
            break;
          case "/":
            divide(runningTotal);
            break;
        }
      }


      if (operator === "=") {
        setPreviousOperator(null);
      } else {
        setPreviousOperator(operator);

      }

      setPreviousTotal(runningTotal);
      setNewTotal(true);
  }

  const add = (number) => {
    setRunningTotal(parseFloat(previousTotal) + parseFloat(number));
  }

  const subtract = (number) => {
    setRunningTotal(parseFloat(previousTotal) - parseFloat(number));
  }

  const multiply = (number) => {
    setRunningTotal(parseFloat(previousTotal) * parseFloat(number));
  }

  const divide = (number) => {
    if(number == 0) {
      setRunningTotal("Invalid calculation")
    } else {
      setRunningTotal(parseFloat(previousTotal) / parseFloat(number));
    }
  }


  return (
    <div className="container">
    <div className="calculator">
      <div id="running-total" className="display">{ runningTotal }</div>
      <KeyPad 
      handleNumber={numberClick} 
      handleOperator={operatorClick} 
      handleClear={clearClick}
      handleDecimal={handleDecimal}
      />
    </div>
  </div>
  );
}

export default App;

