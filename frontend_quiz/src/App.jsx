import { useState, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    fetch("http://localhost:5000/api/front/questions/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setQuestions(data.questions);
      });
  }, [load]);

  return (
    <>
      {questions &&
        questions.map((question, index) => (
          <div key={index}>
            <span>{question.question}</span>
            <span>{question.answers}</span>
            <span>{question.correct}</span>
            <span>{question.type}</span>
          </div>
        ))}
    </>
  );
}

export default App;
