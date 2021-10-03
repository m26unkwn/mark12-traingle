import React, { useState } from "react";

const TriangleQuiz = () => {
  let [answers, setAnswers] = useState({});
  let [result, setResult] = useState({
    initial: true,
    correct: 0,
    total: 0,
  });
  const Qns = [
    {
      id: 0,
      question:
        "What is the third angle for the triangle where angle1 = 65° and angle2 = 80° ?",
      ans: "35",
      options: ["35", "45", "60"],
    },
    {
      id: 1,
      question: "If a triangle has an angle of 90 degrees, what is it called ?",
      ans: "Right angled triangle",
      options: ["Obtuse triangle", "Acute triangle", "Right angled triangle"],
    },
  ];

  const handleChange = (question, answer) => {
    let newAnsers = { ...answers };
    newAnsers[question] = answer;
    setAnswers(newAnsers);
    console.log(newAnsers);
  };

  const handleSubmit = () => {
    let totalQuestion = Qns.length;
    let correctAns = 0;
    Qns.forEach((question) => {
      if (
        question.question in answers &&
        answers[question.question] === question.ans
      ) {
        correctAns += 1;
      }
    });
    setResult({ initial: false, correct: correctAns, total: totalQuestion });
  };

  return (
    <div>
      <h3 className="title" style={{ marginBottom: "1.2em" }}>
        Let's play a fun quiz game about triangles 👇
      </h3>
      <hr />
      <div style={{ marginTop: "1.2em" }}>
        <h3 className="title">Quiz on Triangles</h3>
        <h3 className="title">You will get 1 point for each correct answer</h3>
      </div>
      <div className="question-box">
        {Qns.map((question) => (
          <div key={question.id} className="question-container">
            <p className="question-title">Qns : {question.question}</p>
            <div className="options">
              <p className="question-title">Ans :</p>
              {question.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    // id={option}
                    name={question.question}
                    value={option}
                    onChange={(e) => handleChange(question.question, option)}
                  />
                    <label htmlFor="javascript">{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit Solution</button>
      <div>
        {!result.initial && (
          <p className="quiz-answer">
            You Got {result.correct} Correct Out Of {result.total}.
          </p>
        )}
      </div>
    </div>
  );
};

export default TriangleQuiz;
