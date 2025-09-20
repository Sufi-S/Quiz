import React, { useEffect, useState } from "react";
import { getQuizzes } from "../../api/api";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    getQuizzes().then(res => setQuizzes(res.data));
  }, []);

  return (
    <div>
      {quizzes.map(q => (
        <div key={q.quiz_id}>
          <h3>{q.title}</h3>
          <p>{q.description}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
