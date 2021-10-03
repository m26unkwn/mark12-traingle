import React, { useState } from "react";

const IsTriangle = () => {
  let [angles, setAngles] = useState({ first: 0, second: 0, third: 0 });
  let [isTriangle, setIsTriangle] = useState({ initial: true, result: false });

  const handleChange = (e, angleNumber) => {
    switch (angleNumber) {
      case 1:
        setAngles((prev) => ({ ...prev, first: parseInt(e.target.value) }));
        break;
      case 2:
        setAngles((prev) => ({ ...prev, second: parseInt(e.target.value) }));
        break;
      case 3:
        setAngles((prev) => ({ ...prev, third: parseInt(e.target.value) }));
        break;
      default:
        setAngles((prev) => ({ ...prev, first: parseInt(e.target.value) }));
        break;
    }
  };

  const handleSubmit = () => {
    let calculatedAngle = Object.values(angles).reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    if (calculatedAngle === 180) {
      setIsTriangle({ initial: false, result: true });
    } else {
      setIsTriangle({ initial: false, result: false });
    }
  };

  return (
    <div>
      <h3 className="title">
        Enter 3 angles and see whether they form a triangle or not 👇
      </h3>
      <div className="is-triangle">
        <div className="input-container">
          <div className="input-box">
            <label>Enter First Angle.</label>
            <input
              type="number"
              placeholder="Enter First Angle"
              value={angles.first}
              onChange={(e) => handleChange(e, 1)}
            />
          </div>
          <div className="input-box">
            <label>Enter Second Angle.</label>
            <input
              type="number"
              placeholder="Enter First Angle"
              value={angles.second}
              onChange={(e) => handleChange(e, 2)}
            />
          </div>
          <div className="input-box">
            <label>Enter Third Angle.</label>
            <input
              type="number"
              placeholder="Enter First Angle"
              value={angles.third}
              onChange={(e) => handleChange(e, 3)}
            />
          </div>
        </div>
        <button onClick={handleSubmit}>
          Do they form a triangle? {"--->>>"}{" "}
        </button>
        <div className="result-container">
          {!isTriangle.initial ? (
            isTriangle.result ? (
              <p className="result">They Form A Triangle.</p>
            ) : (
              <p className="result">They Don't Form A Triangle.</p>
            )
          ) : (
            <p className="before-field">Please Enter the fields.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default IsTriangle;
