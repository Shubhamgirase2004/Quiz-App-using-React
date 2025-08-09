// Question.js
import React from "react";
import Options from "./Options";
import "./Question.css";

const Question = ({ data, handleAnswerClick }) => {
  return (
    <div className="question-card">
      <h2>{data.question}</h2>
      <Options options={data.options} handleAnswerClick={handleAnswerClick} />
    </div>
  );
};

export default Question;
