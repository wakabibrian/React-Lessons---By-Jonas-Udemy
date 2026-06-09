import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Brian" });

  // To update state based on the current value, we have to always use a call back function
  function handlePrevious() {
    setStep((s) => (step > 1 ? step - 1 : step));
  }

  function handleNext() {
    setStep((s) => (step <= 2 ? step + 1 : step));
  }

  function handleClose() {
    setIsOpen((io) => !isOpen);
  }

  // Updating state without basing on the current value
  // function handleTest() {
  //   setTest({ name: "Joel" });
  // }

  return (
    <>
      <div className="close" onClick={handleClose}>
        &times;
      </div>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              // onMouseEnter={handleTest}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
