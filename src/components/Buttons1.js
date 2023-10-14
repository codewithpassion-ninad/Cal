import React from "react";
import "./styles/Buttons.css";

const Buttons = ({ inputHandler, backspace, calculateAns }) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });

  return (

    <table className="show-btn center-content">
      <tbody>
        <tr className="column">
          <td><button className="btn" onClick={inputHandler}>7</button></td>
          <td><button className="btn" onClick={inputHandler}>8</button></td>
          <td><button className="btn" onClick={inputHandler}>9</button></td>
          <td colSpan="4"><button className="special-btn" onClick={backspace}>⌫</button></td>
        </tr>
        <tr className="column">
          <td><button className="btn" onClick={inputHandler}>4</button></td>
          <td><button className="btn" onClick={inputHandler}>5</button></td>
          <td><button className="btn" onClick={inputHandler}>6</button></td>
          <td colSpan="4"><button className="special-btn" onClick={inputHandler}>÷</button></td>
        </tr>
        <tr className="column">
          <td><button className="btn" onClick={inputHandler}>1</button></td>
          <td><button className="btn" onClick={inputHandler}>2</button></td>
          <td><button className="btn" onClick={inputHandler}>3</button></td>
          <td colSpan="4"><button className="special-btn" onClick={inputHandler}>×</button></td>
        </tr>
        <tr className="column">
          <td rowSpan={2}><button className="btn" onClick={inputHandler}>0</button></td>
          <td rowSpan={2}><button className="btn" onClick={inputHandler}>.</button></td>
          <td rowSpan={2}><button className="btn" onClick={calculateAns}>=</button></td>
          <td colSpan="4"><button className="special-btn" onClick={inputHandler}>-</button></td>
        </tr>
        <tr className="column">
          <td colSpan="5"><button className="special-btn" onClick={inputHandler}>+</button></td>
        </tr>
      </tbody>
    </table>

  );
};

export default Buttons;