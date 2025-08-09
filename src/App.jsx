import React from "react";
import Quiz from "./components/Quiz";
import "./styles/Base.css";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <div className="app-bg" />
      <header className="app-header">
        <div className="brand">
          <span className="logo-dot" />
          <h1 className="brand-title">Quiz Master</h1>
        </div>
      </header>
      <main className="app-main">
        <Quiz />
      </main>
    </div>
  );
};

export default App;
