import { useState } from "react";
import "../styles/PersonalityTest.css";

const questions = [
  {
    question: "What activities make you feel excited?",
    answers: [
      { text: "Creating art and designing", hobby: "Creative Arts" },
      { text: "Building technology and coding", hobby: "Technology" },
      { text: "Making music and performing", hobby: "Music" },
      { text: "Being active and competing", hobby: "Sports" },
    ],
  },

  {
    question: "What type of problems do you enjoy solving?",
    answers: [
      { text: "Creative challenges", hobby: "Creative Arts" },
      { text: "Logical challenges", hobby: "Technology" },
      { text: "People and communication", hobby: "Leadership" },
      { text: "Physical challenges", hobby: "Sports" },
    ],
  },

  {
    question: "What would you like to learn?",
    answers: [
      { text: "Photography, design, animation", hobby: "Creative Arts" },
      { text: "Programming and AI", hobby: "Technology" },
      { text: "Singing or instruments", hobby: "Music" },
      { text: "Science experiments", hobby: "Science" },
    ],
  },
];

export default function PersonalityTest() {
  const [current, setCurrent] = useState(0);

  const [score, setScore] = useState([]);

  const [result, setResult] = useState(null);

  function chooseAnswer(hobby) {
    setScore([...score, hobby]);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      calculateResult([...score, hobby]);
    }
  }

  function calculateResult(results) {
    const count = {};

    results.forEach((item) => {
      count[item] = (count[item] || 0) + 1;
    });

    const best = Object.keys(count).reduce((a, b) =>
      count[a] > count[b] ? a : b,
    );

    setResult(best);
  }

  if (result) {
    return (
      <section className="test-section">
        <div className="result-card">
          <span>✨ YOUR RESULT</span>

          <h2>You are a {result} Explorer</h2>

          <p>
            Based on your answers, we recommend exploring
            {result}. Our mentors will help you develop your skills and find the
            right community.
          </p>

          <button
            onClick={() => {
              setCurrent(0);
              setScore([]);
              setResult(null);
            }}
          >
            Retake test
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="test-section" id="test">
      <div className="test-header">
        <span>DISCOVER YOURSELF</span>

        <h2>Find your perfect hobby</h2>

        <p>
          Answer a few questions and discover activities that match your
          personality.
        </p>
      </div>

      <div className="test-card">
        <div className="progress">
          <div
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        <p className="counter">
          Question {current + 1} / {questions.length}
        </p>

        <h3>{questions[current].question}</h3>

        <div className="answers">
          {questions[current].answers.map((answer) => (
            <button
              key={answer.text}
              onClick={() => chooseAnswer(answer.hobby)}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
