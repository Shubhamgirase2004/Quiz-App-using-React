import React from "react";
import "../styles/Options.css";

const Options = ({ options, selections, locked, correct, onToggle }) => {
  const isSelected = (opt) => selections.includes(opt);
  const isCorrect = (opt) => correct.includes(opt);

  return (
    <div className="options" role="group" aria-label="Answer choices">
      {options.map((opt, i) => {
        const selected = isSelected(opt);
        const showState = locked;
        const stateClass =
          showState && isCorrect(opt)
            ? "right"
            : showState && selected && !isCorrect(opt)
            ? "wrong"
            : selected
            ? "selected"
            : "";

        return (
          <button
            key={opt}
            type="button"
            className={`option ${stateClass} ${locked ? "locked" : ""}`}
            onClick={() => !locked && onToggle(opt)}
            aria-pressed={selected}
          >
            <span className="index">{String.fromCharCode(65 + i)}</span>
            <span className="label">{opt}</span>
            {showState && isCorrect(opt) && <span className="tick">✓</span>}
            {showState && selected && !isCorrect(opt) && <span className="cross">✕</span>}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
