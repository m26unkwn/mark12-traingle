import React, { useState } from "react";

const Area = () => {
  let [sides, setSides] = useState({ base: 0, height: 0 });
  let [area, setArea] = useState({
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
          height: parseInt(e.target.value),
        }));
        break;
      default:
        setSides((prev) => ({ ...prev, base: parseInt(e.target.value) }));
        break;
    }
  };

  const handleSubmit = () => {
    let result = 0.5 * sides.base * sides.height;
    setArea({ initial: false, result });
  };

  return (
    <div>
      <h3 className="title">
        Enter the length of base and height of a triangle to calculate it's area
        👇
      </h3>
      <div className="is-triangle">
        <div className="input-container">
          <div className="input-box">
            <label>Enter Base.</label>
            <input
              type="number"
              placeholder="Enter Base"
              value={sides.base}
              onChange={(e) => handleChange(e, 1)}
            />
          </div>
          <div className="input-box">
            <label>Enter Height.</label>
            <input
              type="number"
              placeholder="Enter Height"
              value={sides.height}
              onChange={(e) => handleChange(e, 2)}
            />
          </div>
        </div>

        <button onClick={handleSubmit}>Calculate Area. {"--->>>"} </button>
        <div className="result-container">
          {!area.initial ? (
            <p className="result">Area : {area.result}</p>
          ) : (
            <p className="before-field">Please Enter the fields.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Area;
