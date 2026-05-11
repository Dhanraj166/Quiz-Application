import { useNavigate } from "react-router-dom";
import questions from '../assets/questions.json';
import { useContext, useState } from "react";
import { quizContext } from "../App";

function Quiz() {
  const { score, setScore } = useContext(quizContext);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");   
  const [isAnswered, setIsAnswered] = useState(false);        

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);
  };

  const next = () => {
    // Check answer
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Move to next question
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption("");
    setIsAnswered(false);
  };

  const finish = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    navigate('/result');
  };

  return (
    <>
      <div className="container">
        <h1>
          Question {currentQuestion + 1} / {questions.length}
        </h1>

        <h2>{questions[currentQuestion].prompt}</h2>

        <div className="options-grid">
          {["A", "B", "C", "D"].map((letter) => {
            const optionKey = `option${letter}`;
            const optionText = questions[currentQuestion][optionKey];
            const isSelected = selectedOption === optionKey;

            return (
              <button
                key={letter}
                className={`option-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(optionKey)}
              >
                <span className="option-label">{letter}</span>
                {optionText}
              </button>
            );
          })}
        </div>

        {currentQuestion === questions.length - 1 ? (
          <button 
            className="btn-submit" 
            onClick={finish}
            disabled={!isAnswered}
          >
            Submit
          </button>
        ) : (
          <button 
            className="nav-btn" 
            onClick={next}
            disabled={!isAnswered}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}

export default Quiz;