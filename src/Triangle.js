import React from "react";
import { useState } from "react";
function Triangle() {
  const [numberX, setNumberX] = useState();
  const [numberY, setNumberY] = useState();
  const [numberZ, setNumberZ] = useState();
  const [message, setMessage] = useState("Triangle result");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      Number(numberX) === 0 &&
      Number(numberY) === 0 &&
      Number(numberZ) === 0
    ) {
      setMessage("Sides should not be Zero");
      return;
    }

    if (Number(numberX) !== 0 && numberX === numberY && numberY === numberZ) {
      setMessage("It is Equilateral Triangle");
      return;
    }
    if (numberX === numberY || numberY === numberZ || numberZ === numberX) {
      setMessage("It is a Isosceles Triangle");
      return;
    }
    if (numberX !== numberY && numberY !== numberZ && numberZ !== numberX) {
      setMessage("Scalene Triangle");
      return;
    }
  };

  return (
    <div>
      <div className="triangle-container">
        <div className="result">{message}</div>
        <form className="input-container" onSubmit={handleSubmit}>
          <h2>Enter the sides of the triangle</h2>
          <br />
          <label for="input">
            X :
            <input
              className="text"
              placeholder="Insert number"
              type="number"
              value={numberX}
              required
              onChange={(e) => setNumberX(e.target.value)}
            />
          </label>
          <label for="input">
            Y :
            <input
              className="text"
              placeholder="Insert number"
              type="number"
              value={numberY}
              required
              onChange={(e) => setNumberY(e.target.value)}
            />
          </label>
          <label>
            Z :
            <input
              className="text"
              placeholder="Insert number"
              type="number"
              value={numberZ}
              required
              onChange={(e) => setNumberZ(e.target.value)}
            />
          </label>
          <button type="submit"> Submit</button>
        </form>
        
        </div>
      </div>
   
  );
}
export default Triangle;

