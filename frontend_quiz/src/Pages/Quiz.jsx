import React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function Quiz(props) {
  const [questions, setQuestions] = useState();
  const [load, setLoad] = useState(false);
  const token = Cookies.get("token");
  useEffect(() => {
    setLoad(true);
    fetch("http://localhost:5678/api/front/questions/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer : " + token,
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
    <div>
      {questions &&
        questions.map((question, index) => (
          <div key={index}>
            <span>{question.question}</span>
            <span>{question.answers}</span>
            <span>{question.correct}</span>
            <span>{question.type}</span>
          </div>
        ))}
    </div>
  );
}

export default Quiz;
