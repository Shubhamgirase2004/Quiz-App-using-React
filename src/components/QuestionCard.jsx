import React from "react";
import Options from "./Options";
import "../styles/QuestionCard.css";

const QuestionCard = ({
  data,
  index,
  total,
  selections,
  locked,
  timeLeft,
  onToggle,
  onLock,
  onNext,
}) => {
  const percent = Math.round(((index + 1) / total) * 100);
  const isMulti = data.type === "multi";
  const isAnswered = locked;

  return (
    <section className="card" aria-live="polite">
      <header className="card-header">
        <div className="meta">
          <span className="count">Question {index + 1} of {total}</span>
          <span className={`timer ${timeLeft <= 5 && !locked ? "low" : ""}`}>
            ⏱ {timeLeft}s
          </span>
        </div>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${percent}%` }} />
        </div>
      </header>

      <h2 className="question">
        {data.question}
        {isMulti && <span className="badge">Multiple answers</span>}
      </h2>

      <Options
        options={data.options}
        selections={selections}
        locked={locked}
        correct={data.correct}
        onToggle={onToggle}
      />

      <footer className="actions">
        {!isAnswered ? (
          <button className="primary" onClick={onLock} disabled={selections.length === 0}>
            Lock answer
          </button>
        ) : (
          <button className="primary" onClick={onNext}>
            {index + 1 === total ? "Finish" : "Next"}
          </button>
        )}
      </footer>

      {isAnswered && (
        <div
          className={`feedback ${
            selections.sort().join("|") === data.correct.sort().join("|")
              ? "correct"
              : "incorrect"
          }`}
        >
          {selections.sort().join("|") === data.correct.sort().join("|")
            ? "Correct!"
            : `Correct answer${data.correct.length > 1 ? "s" : ""}: ${data.correct.join(", ")}`}
        </div>
      )}
    </section>
  );
};

export default QuestionCard;
