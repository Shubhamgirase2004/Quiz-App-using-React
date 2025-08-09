import React from "react";
import "../styles/Results.css";

const Results = ({ score, total, onRestart }) => {
  const percent = Math.round((score / total) * 100);
  const message =
    percent === 100 ? "Perfect! 🎉" :
    percent >= 70 ? "Great job!" :
    percent >= 50 ? "Nice try—keep practicing!" :
    "Keep going—you’ll nail it!";

  return (
    <section className="result-card">
      <h2 className="result-title">Quiz Completed</h2>
      <div className="score-badge" aria-label={`Score ${score} of ${total}`}>
        <span className="score">{score}</span>
        <span className="sep">/</span>
        <span className="total">{total}</span>
      </div>
      <p className="result-message">{message}</p>
      <div className="result-actions">
        <button className="primary" onClick={onRestart}>Retry</button>
      </div>
    </section>
  );
};

export default Results;
