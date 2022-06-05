import React from "react";
import { useState } from "react";
function Triangle() {
  const [numberX, setNumberX] = useState();
  const [numberY, setNumberY] = useState();
  const [numberZ, setNumberZ] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const result = (x, y, z) => {
    if (x === y && y === z) {
      return "It is Equilateral Triangle";
    } else if (x === y || y === z || z === x) {
      return "It is a Isosceles Triangle";
    } else {
      return "It is a Scalene";
    }
  };
  return (
    <div className="triangle-container">
      <div className="result">{result(numberX, numberY, numberZ)}</div>
      <form className="input-container" onSubmit={handleSubmit}>
        <label for="input">
          X :
          <input
            className="text"
            type="number"
            value={numberX}
            onChange={(e) => setNumberX(e.target.value)}
          />
        </label>
        <label for="input">
          Y :
          <input
            className="text"
            type="number"
            value={numberY}
            onChange={(e) => setNumberY(e.target.value)}
          />
        </label>
        <label>
          Z :
          <input
            className="text"
            type="number"
            value={numberZ}
            onChange={(e) => setNumberZ(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
export default Triangle;
