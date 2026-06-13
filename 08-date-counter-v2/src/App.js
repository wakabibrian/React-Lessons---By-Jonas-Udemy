import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState();

  function addDays(date) {
    const result = new Date(date);
    result.setDate(result.getDate() + count);
    return result;
  }

  // const days = setDate(date);
  const now = addDays("2027-06-21");

  const date = now.toDateString();

  function text() {
    let result = "Today is";
    if (count > 0) result = `${count} days from today is`;
    if (count < 0) result = `${Math.abs(count)} days ago was`;
    return result;
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="App">
      <div className="step">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
      </div>
      <div className="count">
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <p className="date">{`${text()} ${date}`}</p>
      {(count !== 0 || step !== 1) && (
        <div>
          <br />
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
