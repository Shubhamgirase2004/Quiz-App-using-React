import React, { useMemo, useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import Results from "./Results";
import "../styles/Quiz.css";

const seedQuestions = [
  {
    id: "q1",
    question: "Which of the following are prime numbers?",
    options: ["2", "3", "4", "9"],
    correct: ["2", "3"],
    type: "multi",
  },
  {
    id: "q2",
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: ["Paris"],
    type: "single",
  },
  {
    id: "q3",
    question: "Select the colors in the flag of India.",
    options: ["Saffron", "Green", "Blue", "Purple"],
    correct: ["Saffron", "Green", "Blue"],
    type: "multi",
  },
];

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const Quiz = () => {
  const questions = useMemo(
    () =>
      seedQuestions.map((q) => ({
        ...q,
        options: shuffle(q.options),
      })),
    []
  );

  const [index, setIndex] = useState(0);
  const [selections, setSelections] = useState([]);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    if (finished || locked) return;
    if (timeLeft <= 0) {
      handleLock();
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, locked, finished]);

  const current = questions[index];

  const toggleSelect = (opt) => {
    if (locked) return;
    if (current.type === "single") {
      setSelections([opt]);
      return;
    }
    setSelections((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  const isCorrectSelection = () => {
    const a = [...selections].sort().join("|");
    const b = [...current.correct].sort().join("|");
    return a === b;
  };

  const handleLock = () => {
    if (locked) return;
    setLocked(true);
    if (isCorrectSelection()) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (!locked) return;
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
      setSelections([]);
      setLocked(false);
      setTimeLeft(20);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setIndex(0);
    setSelections([]);
    setLocked(false);
    setScore(0);
    setFinished(false);
    setTimeLeft(20);
  };

  return (
    <div className="quiz-shell">
      {finished ? (
        <Results score={score} total={questions.length} onRestart={restart} />
      ) : (
        <QuestionCard
          data={current}
          index={index}
          total={questions.length}
          selections={selections}
          locked={locked}
          timeLeft={timeLeft}
          onToggle={toggleSelect}
          onLock={handleLock}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Quiz;
