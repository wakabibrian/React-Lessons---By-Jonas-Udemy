// 1. Create a card with 1 question (child component)
// 2. Render all questions dynamically using the card template (parent component)
// 3. Update the question with the answer from the selected id.
// 4. If the id is already selected, change id to null.

import { useState } from "react";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <FlashCards
          key={question.id}
          question={
            question.id === selectedId ? question.answer : question.question
          }
          selectedClass={question.id === selectedId ? "selected" : ""}
          handleClick={() => handleClick(question.id)}
        />
      ))}
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards({ question, handleClick, selectedClass }) {
  return (
    <div onClick={handleClick} className={selectedClass}>
      {question}
    </div>
  );
}
