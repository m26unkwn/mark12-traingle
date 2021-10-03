import React, { useState } from "react";

const Hypotenuse = () => {
  let [sides, setSides] = useState({ base: 0, perpendicular: 0 });
  let [hypotenuse, setHypotenuse] = useState({
    initial: true,
    result: 0,
  });

  const handleChange = (e, angleNumber) => {
    switch (angleNumber) {
      case 1:
        setSides((prev) => ({ ...prev, base: parseInt(e.target.value) }));
        break;
      case 2:
        setSides((prev) => ({
          ...prev,
          perpendicular: parseInt(e.target.value),
        }));
        break;
      default:
        setSides((prev) => ({ ...prev, base: parseInt(e.target.value) }));
        break;
    }
  };

  const handleSubmit = () => {
    let result = Math.sqrt(
      Math.pow(sides.base, 2) + Math.pow(sides.perpendicular, 2)
    );
    setHypotenuse({ initial: false, result });
  };
  return (
    <div>
      <h3 className="title">
        Enter the length of 2 sides of a right angled triangle to find out the
        length of it's hypotenuse 👇
      </h3>
      <div className="is-triangle">
        <div className="input-container">
          <div className="input-box">
            <label>Enter Base</label>
            <input
              type="number"
              placeholder="Enter Base"
              value={sides.base}
              onChange={(e) => handleChange(e, 1)}
            />
          </div>

          <div className="input-box">
            <label>Enter Perpendicular</label>
            <input
              type="number"
              placeholder="Enter Perpendicular"
              value={sides.perpendicular}
              onChange={(e) => handleChange(e, 2)}
            />
          </div>
        </div>

        <button onClick={handleSubmit}>
          Calculate Hypotenuse. {"--->>>"}{" "}
        </button>
        <div className="result-container">
          {!hypotenuse.initial ? (
            <p className="result">Hypotenuse : {hypotenuse.result}</p>
          ) : (
            <p className="before-field">Please Enter the fields.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hypotenuse;
