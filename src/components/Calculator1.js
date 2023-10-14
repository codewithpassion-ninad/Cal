import React, { useState } from "react";
import Display from "./Display1";
import Buttons from "./Buttons1";
import "./styles/Calculator.css";
import { evaluate, round } from "mathjs";

function Calculator()
{
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  //input
  const inputHandler = (event) =>
  {
    if (answer === "Invalid Input!!") return;
    let val = event.target.innerText;

    let str = input + val;
    if (str.length > 14) return;

    if (answer !== "")
    {
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);
  };

  const clearInput = () =>
  {
    setInput("");
    setAnswer("");
  };

  const calculateAns = () => {
    if (input === "") return;
    let result = 0;
    let finalexpression = input;
    finalexpression = finalexpression.replaceAll("×", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");
    try {
      let result = evaluate(finalexpression);
      result = round(result, 2);
      setAnswer(result);
    } catch (error) {
      setAnswer("Invalid Input!!");
    }
  };

  const backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };


  return (
    <>
    <center>
    <div className="container">
        <div className="main">
          <Display input={input} setInput={setInput} answer={answer} />
          <Buttons
            inputHandler={inputHandler}
            clearInput={clearInput}
            backspace={backspace}
            calculateAns={calculateAns}
          />
        </div>
      </div>
    </center>
    </>
  );
}

export default Calculator;