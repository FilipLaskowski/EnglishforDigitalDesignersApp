import React, { useState } from "react";
import "./index.css";
import { FaAngleLeft, FaAngleRight, FaRedo } from "react-icons/fa";

function Answers({ answer, next, prev, random }) {
  const [toggleAnswer, setToggleAnswer] = useState(false);

  return (
    <section className="answer-container">
      <p>{!toggleAnswer || answer}</p>
      <div className="btn-container">
        <button onClick={() => setToggleAnswer(!toggleAnswer)}>
          {toggleAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        <div>
          <button
            onClick={() => {
              prev();
              setToggleAnswer(false);
            }}
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={() => {
              random();
              setToggleAnswer(false);
            }}
          >
            <FaRedo />
          </button>
          <button
            onClick={() => {
              next();
              setToggleAnswer(false);
            }}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Answers;
