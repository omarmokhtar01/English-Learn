import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function InterviewQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/topQuestions.json'); // Adjust the path if necessary
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Top 50 Interview Questions</h1>
      <TransitionGroup className="list-group">
        {questions.map((question, index) => (
          <CSSTransition key={index} classNames="fade" timeout={300}>
            <li className="list-group-item mb-2">
              <h5>{question.number}. {question.question}</h5>
              <p>{question.answer}</p>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default InterviewQuestions;
