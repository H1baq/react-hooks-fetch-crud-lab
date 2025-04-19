import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [ setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json)
    .then((questions) => {
      setQuestions(questions);
    });
  }, []);
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
