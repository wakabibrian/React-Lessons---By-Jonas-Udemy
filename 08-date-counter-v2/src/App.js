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

  return (
    <div className="App">
      <div className="step">
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <p className="date">{`${text()} ${date}`}</p>
    </div>
  );
}

export default App;
